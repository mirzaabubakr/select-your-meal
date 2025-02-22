import { useQuery } from "@tanstack/react-query";
import LoadingBar from "../loaders/LoadingBar";
import MealItems from "./MealItems";
import MealItemsList from "./MealItemsList";
import SelectedItemsCard from "./SelectedItemsCard";
import { MealsService } from "@/api/services";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function MealItemsContainer() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryRefs = useRef<any>({});
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    align: "start",
  });
  const [refsReady, setRefsReady] = useState(false);

  const { data, isLoading }: any = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const response = await MealsService.getMeals();
      return response;
    },
  });

  useEffect(() => {
    data && setRefsReady(true);
  }, [data]);

  useEffect(() => {
    if (!refsReady || !emblaApi) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category: any = entry.target.getAttribute("data-category");
            setSelectedCategory(category);
            if (emblaApi) {
              const index = Object.keys(categoryRefs.current).indexOf(category);
              if (index !== -1) emblaApi.scrollTo(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(categoryRefs.current).forEach((ref: any) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(categoryRefs.current).forEach((ref: any) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [refsReady, emblaApi]);

  const handleCategoryClick = (category: string) => {
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col">
      {isLoading && <LoadingBar />}
      {data && (
        <div className="flex pt-14 px-10 h-full gap-11 justify-center">
          <div className="bg-white rounded-xl flex-1 border border-customGray max-w-[880px]">
            <MealItems
              categories={data.mealsData.categories}
              selectedCategory={selectedCategory}
              onCategoryClick={handleCategoryClick}
              emblaRef={emblaRef}
              emblaApi={emblaApi}
            />
            <MealItemsList
              data={data.mealsData.data}
              categoryRefs={categoryRefs}
              selectedCategory={selectedCategory}
            />
          </div>
          <SelectedItemsCard restaurant={data.mealsData.restaurant} />
        </div>
      )}
    </div>
  );
}
