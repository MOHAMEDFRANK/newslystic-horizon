import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const Article = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;
  const { t } = useTranslation();

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>{t("news.noArticles")}</h1>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6 hover:text-[#ea384c]"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t("news.backToNews")}
      </Button>

      <article className="max-w-4xl mx-auto">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-6"
          />
        )}

        <h1 className="text-4xl font-bold mb-4 text-[#ea384c]">{article.title}</h1>

        <div className="flex items-center gap-6 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {formatDate(article.publishedAt)}
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {article.author || article.source.name}
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-4">{article.description}</p>
          <div className="mt-6">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ea384c] hover:underline"
            >
              {t("news.readMore")}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;