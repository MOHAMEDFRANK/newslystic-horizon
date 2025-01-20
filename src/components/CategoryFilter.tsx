import { Button } from "@/components/ui/button";
import { NewsCategory } from "@/types/news";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: NewsCategory | undefined;
  onSelectCategory: (category: NewsCategory | undefined) => void;
}

const categories: { label: string; value: NewsCategory | undefined }[] = [
  { label: "All", value: undefined },
  { label: "Business", value: "business" },
  { label: "Technology", value: "technology" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
  { label: "Sports", value: "sports" },
];

const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
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
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;