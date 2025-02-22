import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { Button } from "../ui/button";
import { RootState } from "@/states/store";
import { removeCartItem, toggleCartItem } from "@/states/reducers/cartSlice";

export default function AddRemoveMealButton({ mealItem }: any) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);
  const isInCart = cart.some((item: any) => item.name === mealItem.name);

  const handleAddToCart = () => {
    dispatch(toggleCartItem({ item: mealItem, checked: true }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeCartItem({ name: mealItem.name }));
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
