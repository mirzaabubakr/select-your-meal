import { lazy, useEffect } from "react";
const MealPaymentButton = lazy(
  () => import("@/components/buttons/MealPaymentButton")
);
const MealItemsContainer = lazy(
  () => import("@/components/select-your-meal/MealItemsContainer")
);
const PageTitle = lazy(() => import("@/components/shared/PageTitle"));
import { useAppDispatch } from "@/hooks/redux-hooks";
import { fetchCart } from "@/states/reducers/cartSlice";

export default function SelectYourMeal() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <div className="h-screen relative">
      <PageTitle />
      <MealItemsContainer />
      <MealPaymentButton />
    </div>
  );
}
