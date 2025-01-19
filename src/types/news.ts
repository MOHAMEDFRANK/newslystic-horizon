export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  author: string;
}

export type NewsCategory = 
  | "general"
  | "business"
  | "technology"
  | "entertainment"
  | "health"
  | "science"
  | "sports";