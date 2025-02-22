import { SelectedItemDetailCardProps } from "@/types/mealTypes";

export default function SelectedItemDetailCard({
  item,
  handleRemoveCartItem,
}: SelectedItemDetailCardProps) {
  return (
    <div
      className={`w-full border-b border-b-[#E0E8E4] pb-2.5 flex items-center justify-between`}
    >
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt="Meal Item"
          className="min-w-[72px] h-[72px] rounded-lg overflow-hidden"
          loading="lazy"
        />
        <div className="flex flex-col gap-1.5 items-start justify-center w-full">
          <h3 className="font-semibold text-lg leading-5 text-customBlue">
            {item.name}
          </h3>
          <div className="flex justify-between item-center w-full">
            <div className="flex items-center gap-5 text-nowrap">
              <span className="font-semibold text-sm leading-[18px] text-black tracking-normal">
                {`AED ${item.price}`}
              </span>
            </div>
          </div>
        </div>
      </div>
      <i
        className="fi fi-rr-trash h-6 text-2xl cursor-pointer pr-1"
        onClick={() => handleRemoveCartItem(item.name)}
      />
    </div>
  );
}
