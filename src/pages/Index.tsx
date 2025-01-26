import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTopHeadlines, searchNews } from "@/services/newsService";
import { NewsCategory } from "@/types/news";
import { useToast } from "@/hooks/use-toast";
import NewsGrid from "@/components/NewsGrid";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState(1);
  const { toast } = useToast();
  const { t } = useTranslation();

  const {
    data: articles,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["news", selectedCategory, searchQuery, page],
    queryFn: () =>
      searchQuery
        ? searchNews(searchQuery, page)
        : fetchTopHeadlines(selectedCategory, page),
    meta: {
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to fetch news articles. Please try again later.",
          variant: "destructive",
        });
      },
    },
    placeholderData: (previousData) => previousData
  });

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const displayedArticles = articles || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-[#ea384c]">{t("news.latestNews")}</h1>
        
        <div className="space-y-6 mb-8">
          <SearchBar onSearch={(query) => {
            setSearchQuery(query);
            setPage(1);
          }} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setPage(1);
            }}
          />
        </div>

        <NewsGrid articles={displayedArticles} isLoading={isLoading} />
        
        {displayedArticles.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={handleLoadMore}
              disabled={isFetching}
              className="bg-[#ea384c] hover:bg-[#ea384c]/90"
            >
              {isFetching ? t("news.loading") : t("news.loadMore")}
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;