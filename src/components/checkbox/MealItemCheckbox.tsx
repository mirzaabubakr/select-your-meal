import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { Checkbox } from "../ui/checkbox";
import { RootState } from "@/states/store";
import { toggleCartItem } from "@/states/reducers/cartSlice";

interface MealItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

interface MealItemCheckboxProps {
  mealItem: MealItem;
}

export default function MealItemCheckbox({ mealItem }: MealItemCheckboxProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);
  const isChecked = cart.some((item: any) => item.name === mealItem.name);
  const handleCheckboxChange = () => {
    dispatch(toggleCartItem({ item: mealItem, checked: !isChecked }));
  };

  return (
    <Checkbox
      checked={isChecked}
      onCheckedChange={handleCheckboxChange}
      className="w-6 h-6 rounded-full border border-black text-transparent data-[state=checked]:bg-customBlue data-[state=checked]:border-customBlue data-[state=checked]:text-white "
    />
  );
}
