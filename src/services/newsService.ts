import axios from "axios";
import { NewsArticle, NewsCategory } from "@/types/news";
import { supabase } from "@/integrations/supabase/client";

export const fetchTopHeadlines = async (category?: NewsCategory, page: number = 1) => {
  console.log("Fetching top headlines", { category, page });
  try {
    const { data, error } = await supabase.functions.invoke('news-proxy', {
      body: { 
        endpoint: 'top-headlines', 
        category,
        page,
        pageSize: 10
      }
    });

    if (error) throw error;
    console.log("Received headlines", data.articles.length);
    return data.articles as NewsArticle[];
  } catch (error) {
    console.error("Error fetching headlines:", error);
    throw error;
  }
};

export const searchNews = async (query: string, page: number = 1) => {
  console.log("Searching news", { query, page });
  try {
    const { data, error } = await supabase.functions.invoke('news-proxy', {
      body: { 
        endpoint: 'everything', 
        query,
        page,
        pageSize: 10
      }
    });

    if (error) throw error;
    console.log("Received search results", data.articles.length);
    return data.articles as NewsArticle[];
  } catch (error) {
    console.error("Error searching news:", error);
    throw error;
  }
};