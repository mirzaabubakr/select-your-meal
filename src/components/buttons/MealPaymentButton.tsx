import { Button } from "@/components/ui/button";

export default function SelectMealPayment() {
  return (
    <div className="h-24 flex justify-between items-center xl:px-16 xxl:px-[296px] absolute bottom-0 bg-white w-full">
      <div></div>
      <Button className="w-[407px] h-14 bg-customBlue text-white font-normal rounded-[28px] hover:text-customBlue text-lg leading-5 tracking-normal gap-3 flex items-center">
        Payment
        <i className="fi fi-rr-arrow-right text-[40px] "></i>
      </Button>
    </div>
  );
}
