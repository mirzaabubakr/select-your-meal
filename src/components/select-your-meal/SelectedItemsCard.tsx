import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { Button } from "../ui/button";
import SelectedItemDetailCard from "./SelectedItemDetailCard";
import { RootState } from "@/states/store";
import { removeCartItem } from "@/states/reducers/cartSlice";
import { useMemo } from "react";
import { MealItem, SelectedItemsCardProps } from "@/types/mealTypes";

export default function SelectedItemsCard({
  restaurant,
}: SelectedItemsCardProps) {
  const cart: MealItem[] = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveCartItem = (name: string) => {
    dispatch(removeCartItem({ name }));
  };

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <div className="bg-white relative rounded-xl w-5/12 h-fit border-x border-t border-customGray max-w-[410px]">
      <img
        src={restaurant.image}
        alt="Selected Item"
        className="w-full h-auto max-h-[180px] object-cover rounded-t-xl"
        loading="lazy"
      />
      <div className="flex flex-col gap-1 items-center justify-center pt-5 pb-10 border-b border-b-[#E0E8E4]">
        <div className="flex items-center gap-3.5">
          <h4 className="font-bold text-lg leading-5 text-menuItem text-nowrap">
            {restaurant.name}
          </h4>
          <span className="font-normal text-customGreen text-sm leading-5 tracking-normal flex items-center w-full justify-center gap-0.5">
            <i className="fi fi-sr-star text-customGreen text-xs h-3"></i>
            {restaurant.rating}
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="font-normal text-sm leading-4 tracking-normal text-nowrap">
            {restaurant.location.address}
          </span>
          <Button
            onClick={() =>
              window.open(
                `https://www.google.com/maps?q=${restaurant?.location?.coordinates?.lat},${restaurant?.location?.coordinates?.lng}`,
                "_blank"
              )
            }
            className="bg-black size-9 rounded-xl transition-all ease-out duration-300 
                   hover:bg-customGray active:scale-90 active:bg-gray-700 focus:ring-2 focus:ring-gray-400"
          >
            <i className="fi fi-rr-marker text-base h-4 text-white hover:text-black"></i>
          </Button>
        </div>
        <div className="flex items-center justify-center rounded-md bg-black h-9 px-[22px]">
          <span className="font-medium text-white text-sm leading-4 tracking-normal">
            {restaurant.category}
          </span>
        </div>
      </div>
      {cart.length > 0 && (
        <div className="flex p-3 flex-col gap-2.5 overflow-y-auto max-h-[calc(50vh-300px)] no-scrollbar">
          {cart.map((item, index) => (
            <SelectedItemDetailCard
              item={item}
              key={index}
              handleRemoveCartItem={handleRemoveCartItem}
            />
          ))}
        </div>
      )}
      <div className="h-16 flex items-center justify-start px-[18px] gap-3">
        <span className="font-medium text-descGray text-sm leading-[18px] tracking-normal">
          Total Price
        </span>
        <span className="font-bold text-menuItem text-lg leading-[18px] tracking-normal">
          {`AED ${totalPrice.toFixed(2)}`}
        </span>
      </div>
      <svg
        className="absolute -bottom-4 left-0 w-full bg-transparent"
        height="24"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q 3.33,10 6.66,5 T13.33,5 T20,5 T26.66,5 T33.33,5 T40,5 T46.66,5 T53.33,5 T60,5 T66.66,5 T73.33,5 T80,5 T86.66,5 T93.33,5 T100,0"
          stroke="#D3DBDA"
          fill="white"
          strokeWidth="0.3"
        />
      </svg>
    </div>
  );
}
