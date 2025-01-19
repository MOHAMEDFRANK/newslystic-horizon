import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const apiKey = Deno.env.get('NEWS_API_KEY')
    if (!apiKey) {
      throw new Error('NEWS_API_KEY not found')
    }

    const url = new URL(req.url)
    const endpoint = url.searchParams.get('endpoint')
    const category = url.searchParams.get('category')
    const query = url.searchParams.get('query')

    let apiUrl = 'https://newsapi.org/v2'
    let params = new URLSearchParams()
    
    if (endpoint === 'top-headlines') {
      apiUrl += '/top-headlines'
      params.append('country', 'us')
      if (category) params.append('category', category)
    } else if (endpoint === 'everything') {
      apiUrl += '/everything'
      if (query) params.append('q', query)
      params.append('language', 'en')
    } else {
      throw new Error('Invalid endpoint')
    }

    params.append('apiKey', apiKey)
    
    console.log(`Fetching from NewsAPI: ${apiUrl}`)
    const response = await fetch(`${apiUrl}?${params.toString()}`)
    const data = await response.json()

    return new Response(
      JSON.stringify(data),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: response.status,
      },
    )
  } catch (error) {
    console.error('Error in news-proxy:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})