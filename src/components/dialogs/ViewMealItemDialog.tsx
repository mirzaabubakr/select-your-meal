import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { EyeIcon, XIcon } from "lucide-react";
import AddRemoveMealButton from "../buttons/AddRemoveMealButton";
import { EmblaCarousel } from "../carousel/EmblaCarosel";
import { MealItemDetailCardProps } from "@/types/mealTypes";

export function ViewMealItemDialog({ meal }: MealItemDetailCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <EyeIcon className="w-6 h-6 stroke-1 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[375px] bg-white p-0 shadow-lg drop-shadow-md rounded-none overflow-hidden">
        <DialogClose className="absolute size-9 border border-white top-4 bg-black z-50 right-1 items-center justify-center flex rounded-full transition-colors">
          <XIcon className="w-5 h-5 text-white text-sm " />
        </DialogClose>
        <div className="absolute top-4 right-12 rounded-full cursor-pointer flex items-center justify-center size-9 bg-[#ABC8C8] bg-opacity-50 z-50 transition-colors duration-300 hover:bg-opacity-100">
          <i className="fi fi-sr-heart text-white text-sm inline-block leading-none"></i>
        </div>
        <div className="relative h-[250px]">
          <EmblaCarousel images={meal.mealImages} />
        </div>
        <div className="flex flex-col px-5 pt-9">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base leading-5 text-black">
              {meal?.name}
            </h3>
            <span className="font-semibold text-customGreen text-sm leading-5 tracking-normal flex items-center justify-center gap-0.5">
              {meal?.rating}
              <i className="fi fi-sr-star text-customGreen text-xs h-3 inline-block leading-none"></i>
            </span>
          </div>
          <span className="font-semibold text-customBlue text-sm leading-[18px] pt-2.5 tracking-normal">
            {`AED ${meal?.price}`}
          </span>
          <span className="font-normal text-xs leading-[18px] pt-6 tracking-normal text-descGray">
            {meal?.description}
          </span>
          <AddRemoveMealButton meal={meal} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
