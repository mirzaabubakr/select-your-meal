import { MealItemsListDetailProps } from "@/types/mealTypes";
import MealItemDetailCard from "./MealItemDetailCard";

export default function MealItemCard({
  mealItem,
  categoryRefs,
}: MealItemsListDetailProps) {
  return (
    <div
      className="flex flex-col pt-[50px] gap-2.5"
      ref={(el) => {
        categoryRefs.current[mealItem.category] = el;
      }}
      data-category={mealItem.category}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-xl leading-6 tracking-normal text-menuTitle">
            {mealItem.category}
          </h2>
          <div className="rounded-full h-7 w-7 bg-black flex items-center justify-center">
            <span className="text-white text-nowrap font-normal text-base leading-[18px]">
              {mealItem.items.length}
            </span>
          </div>
        </div>
        <span className="font-medium text-descGray text-sm leading-[18px] tracking-normal">
          Select
        </span>
      </div>
      {mealItem.items.map((meal, index) => (
        <MealItemDetailCard meal={meal} key={index} />
      ))}
    </div>
  );
}
