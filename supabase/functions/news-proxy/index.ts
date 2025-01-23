import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS })
  }

  try {
    const { endpoint, category, query, page = 1, pageSize = 10 } = await req.json()
    const apiKey = Deno.env.get('NEWS_API_KEY')
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

    const response = await fetch(`${url}?${params.toString()}`)
    const data = await response.json()

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
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { 
          ...CORS_HEADERS,
          'Content-Type': 'application/json' 
        }
      }
    )
  }
})