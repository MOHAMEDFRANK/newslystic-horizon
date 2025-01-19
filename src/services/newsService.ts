import axios from "axios";
import { NewsArticle, NewsCategory } from "@/types/news";
import { supabase } from "@/integrations/supabase/client";

const BASE_URL = "https://newsapi.org/v2";

// Function to get the API key from Supabase secrets
const getApiKey = async () => {
  const { data, error } = await supabase.functions.invoke('get-news-api-key');
  if (error) {
    console.error('Error fetching API key:', error);
    throw error;
  }
  return data.apiKey;
};

export const fetchTopHeadlines = async (category?: NewsCategory) => {
  console.log("Fetching top headlines", { category });
  try {
    const apiKey = await getApiKey();
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: "us",
        category,
        apiKey,
      },
    });
    console.log("Received headlines", response.data.articles.length);
    return response.data.articles as NewsArticle[];
  } catch (error) {
    console.error("Error fetching headlines:", error);
    throw error;
  }
};

export const searchNews = async (query: string) => {
  console.log("Searching news", { query });
  try {
    const apiKey = await getApiKey();
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey,
        language: "en",
      },
    });
    console.log("Received search results", response.data.articles.length);
    return response.data.articles as NewsArticle[];
  } catch (error) {
    console.error("Error searching news:", error);
    throw error;
  }
};