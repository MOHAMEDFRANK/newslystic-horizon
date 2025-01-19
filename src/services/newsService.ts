import axios from "axios";
import { NewsArticle, NewsCategory } from "@/types/news";

const BASE_URL = "https://newsapi.org/v2";

// Function to get the API key
const getApiKey = () => {
  // This will be replaced with the secret from your project settings
  return "4a026f0bdc5c4b94b3b80f77d6eea269";
};

export const fetchTopHeadlines = async (category?: NewsCategory) => {
  console.log("Fetching top headlines", { category });
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: "us",
        category,
        apiKey: getApiKey(),
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
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey: getApiKey(),
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