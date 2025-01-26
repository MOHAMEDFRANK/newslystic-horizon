import { Button } from "@/components/ui/button";
import { NewsCategory } from "@/types/news";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface CategoryFilterProps {
  selectedCategory: NewsCategory | undefined;
  onSelectCategory: (category: NewsCategory | undefined) => void;
}

const categories: { label: string; value: NewsCategory | undefined }[] = [
  { label: "categories.all", value: undefined },
  { label: "categories.business", value: "business" },
  { label: "categories.technology", value: "technology" },
  { label: "categories.entertainment", value: "entertainment" },
  { label: "categories.health", value: "health" },
  { label: "categories.science", value: "science" },
  { label: "categories.sports", value: "sports" },
];

const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
      {categories.map((category) => (
        <Button
          key={category.label}
          variant="outline"
          size="sm"
          onClick={() => onSelectCategory(category.value)}
          className={cn(
            "whitespace-nowrap bg-[#ea384c] text-white hover:bg-[#ea384c]/90 border-[#ea384c]",
            selectedCategory === category.value &&
              "bg-[#ea384c]/80 hover:bg-[#ea384c]/70"
          )}
        >
          {t(category.label)}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;