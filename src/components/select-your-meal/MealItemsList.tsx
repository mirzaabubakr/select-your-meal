import MealItemCard from "./MealItemCard";

export default function MealItemsList({ data, categoryRefs }: any) {
  return (
    <div className="pl-[54px] pr-10 flex flex-col pt-2.5 pb-5 overflow-y-auto h-[calc(100vh-330px)] no-scrollbar">
      {data.map((mealItem: any, index: any) => (
        <MealItemCard
          mealItem={mealItem}
          categoryRefs={categoryRefs}
          key={index}
        />
      ))}
    </div>
  );
}
