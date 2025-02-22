import { useCallback, useEffect, useState } from "react";

export default function MealItems({
  categories,
  onCategoryClick,
  selectedCategory,
  emblaRef,
  emblaApi,
}: any) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    onCategoryClick(categories[0]);
  }, []);

  const handleCategoryClick = (category: string, index: number) => {
    onCategoryClick(category);
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <div className="flex relative items-center space-x-4 py-6 px-12">
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="flex items-center justify-center rounded-full size-12 bg-white p-2 shadow-md border border-[#E0E8E4] disabled:opacity-0 absolute left-5 z-10"
      >
        <i className="fi fi-rr-arrow-left text-xl h-5 text-customBlue inline-block leading-none"></i>
      </button>

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex space-x-3">
          {categories.map((category: string, index: number) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category, index)}
              className={`h-12 rounded-3xl  ${
                selectedCategory == category
                  ? "bg-customBlue text-white"
                  : "bg-white"
              } border-2 border-customBlue flex items-center justify-center px-7 cursor-pointer shrink-0 min-w-[150px]`}
            >
              <span
                className={`${
                  selectedCategory == category
                    ? "text-white"
                    : "text-customBlue"
                } font-medium whitespace-nowrap text-sm`}
              >
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="flex items-center justify-center rounded-full size-12 bg-white p-2 shadow-md border border-[#E0E8E4] disabled:opacity-0 absolute right-5 z-10"
      >
        <i className="fi fi-rr-arrow-right text-xl h-5 text-customBlue inline-block leading-none"></i>
      </button>
    </div>
  );
}
