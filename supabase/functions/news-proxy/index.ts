import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS })
  }

  try {
    const { endpoint, category, query, page = 1, pageSize = 10 } = await req.json()
    const apiKey = Deno.env.get('NEWS_API_KEY')
    
    if (!apiKey) {
      console.error('NEWS_API_KEY not found in environment variables')
      throw new Error('API key not configured')
    }

    const baseUrl = 'https://newsapi.org/v2'
    let url = `${baseUrl}/${endpoint}`
    const params = new URLSearchParams({
      apiKey,
      page: page.toString(),
      pageSize: pageSize.toString(),
    })

    if (endpoint === 'top-headlines') {
      params.append('country', 'us')
      if (category) {
        params.append('category', category)
      }
    } else if (endpoint === 'everything') {
      params.append('q', query)
      params.append('sortBy', 'publishedAt')
    }

    console.log(`Fetching from ${url}?${params.toString()}`)
    
    const response = await fetch(`${url}?${params.toString()}`)
    const data = await response.json()

    if (!response.ok) {
      console.error('News API error:', data)
      throw new Error(data.message || 'Failed to fetch news')
    }

    return new Response(
      JSON.stringify(data),
      { 
        headers: { 
          ...CORS_HEADERS,
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Error in news-proxy:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Failed to fetch news data'
      }),
      { 
        status: 500,
        headers: { 
          ...CORS_HEADERS,
          'Content-Type': 'application/json' 
        }
      }
    )
  }
})