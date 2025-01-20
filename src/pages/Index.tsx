import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTopHeadlines, searchNews } from "@/services/newsService";
import { NewsCategory } from "@/types/news";
import { useToast } from "@/hooks/use-toast";
import NewsGrid from "@/components/NewsGrid";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { toast } = useToast();

  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["news", selectedCategory, searchQuery],
    queryFn: () =>
      searchQuery
        ? searchNews(searchQuery)
        : fetchTopHeadlines(selectedCategory),
    meta: {
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to fetch news articles. Please try again later.",
          variant: "destructive",
        });
      },
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Latest News</h1>
        
        <div className="space-y-6 mb-8">
          <SearchBar onSearch={setSearchQuery} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <NewsGrid articles={articles || []} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;