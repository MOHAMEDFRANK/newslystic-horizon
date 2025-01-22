import { NewsArticle } from "@/types/news";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard = ({ article }: NewsCardProps) => {
  const navigate = useNavigate();
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleClick = () => {
    navigate(`/article/${encodeURIComponent(article.title)}`, {
      state: { article }
    });
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer" 
      onClick={handleClick}
    >
      <div className="aspect-video relative overflow-hidden">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No image available
          </div>
        )}
      </div>
      <CardHeader className="flex-grow">
        <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {formatDate(article.publishedAt)}
        </div>
        <h3 className="font-bold text-lg line-clamp-2 mb-2 hover:text-[#ea384c] transition-colors">
          {article.title}
        </h3>
        <p className="text-muted-foreground line-clamp-3">{article.description}</p>
      </CardHeader>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="h-4 w-4" />
          {article.author || article.source.name}
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;