import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { Checkbox } from "../ui/checkbox";
import { RootState } from "@/states/store";
import { toggleCartItem } from "@/states/reducers/cartSlice";
import { MealItemDetailCardProps } from "@/types/mealTypes";

export default function MealItemCheckbox({ meal }: MealItemDetailCardProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);
  const isChecked = cart.some((item: any) => item.name === meal.name);
  const handleCheckboxChange = () => {
    dispatch(
      toggleCartItem({
        item: { ...meal, id: meal.id.toString() },
        checked: !isChecked,
      })
    );
  };

  return (
    <Checkbox
      checked={isChecked}
      onCheckedChange={handleCheckboxChange}
      className="w-6 h-6 rounded-full border border-black text-transparent data-[state=checked]:bg-customBlue data-[state=checked]:border-customBlue data-[state=checked]:text-white "
    />
  );
}
