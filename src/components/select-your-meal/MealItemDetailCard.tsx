import { ViewMealItemDialog } from "../dialogs/ViewMealItemDialog";
import MealItemCheckbox from "../checkbox/MealItemCheckbox";

export default function MealItemDetailCard({ meal }: any) {
  return (
    <div className=" space-y-3.5">
      <div
        className={`w-full ${
          false
            ? "border-[3px] border-customBlue rounded-xl bg-gradient-to-r from-white to-[#F5F2FF]"
            : "border-b border-b-[#E0E8E4]"
        }  p-3 flex gap-3`}
      >
        <img
          src={meal?.image}
          alt="Meal Item"
          className="min-w-[72px] h-[72px] rounded-lg overflow-hidden"
          loading="lazy"
        />
        <div className="flex flex-col gap-1.5 items-start justify-center w-full">
          <h3 className="font-semibold text-lg leading-5 text-menuItem">
            {meal?.name}
          </h3>
          <div className="flex justify-between item-center w-full">
            <div className="flex items-center gap-5 text-nowrap">
              <span className="font-semibold text-sm leading-4 text-black tracking-normal">
                {`AED ${meal?.price}`}
              </span>
              <span className="font-semibold text-customGreen text-sm leading-5 tracking-normal flex items-center w-full justify-center gap-0.5">
                {meal.rating}
                <i className="fi fi-sr-star text-customGreen text-xs h-3 inline-block leading-none"></i>
              </span>
            </div>
            <span className="font-medium text-center text-sm tracking-normal truncate max-w-[430px] text-descGray">
              {meal.description}
            </span>
            <div className="flex items-center justify-between gap-4">
              <ViewMealItemDialog mealItem={meal} />
              <MealItemCheckbox mealItem={meal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
