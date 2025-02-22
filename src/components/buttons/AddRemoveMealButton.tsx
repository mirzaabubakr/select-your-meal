import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { Button } from "../ui/button";
import { RootState } from "@/states/store";
import { removeCartItem, toggleCartItem } from "@/states/reducers/cartSlice";
import { MealItemDetailCardProps } from "@/types/mealTypes";

export default function AddRemoveMealButton({ meal }: MealItemDetailCardProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);
  const isInCart = cart.some(
    (item: { name: string }) => item.name === meal.name
  );

  const handleAddToCart = () => {
    dispatch(
      toggleCartItem({
        item: { ...meal, id: meal.id.toString() },
        checked: true,
      })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeCartItem({ name: meal.name }));
  };

  return (
    <Button
      onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
      className="h-[38px] rounded-md bg-customBlue text-white hover:bg-customBlue mt-8 mb-3.5"
    >
      {isInCart ? "Remove Meal" : "Add Meal"}
    </Button>
  );
}
