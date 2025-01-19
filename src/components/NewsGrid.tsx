import { NewsArticle } from "@/types/news";
import NewsCard from "./NewsCard";

interface NewsGridProps {
  articles: NewsArticle[];
  isLoading: boolean;
}

const NewsGrid = ({ articles, isLoading }: NewsGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-[400px] bg-gray-100 animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-600">
          No articles found
        </h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={article.url + index} article={article} />
      ))}
    </div>
  );
};

export default NewsGrid;