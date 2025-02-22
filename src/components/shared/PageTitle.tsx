export default function PageTitle() {
  return (
    <div className="flex justify-between xl:px-16 xxl:px-[296px] items-center h-[90px] bg-white">
      <div className="flex items-center gap-10">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <i className="fi fi-br-cross text-xs font-bold h-3"></i>
        </div>
        <h1 className="font-bold text-black text-2xl leading-7 tracking-normal opacity-100 font-sans">
          Select your meals
        </h1>
      </div>
      <div className="h-12 px-6 bg-white border border-customGray rounded-3xl opacity-100 flex items-center gap-8 justify-between">
        <span className="font-bold text-customBlue text-sm leading-4 tracking-normal">
          Step 1/3
        </span>
        <div className="flex items-center gap-2">
          <span className="bg-customBlue w-3 h-3 rounded-full inline-block"></span>
          <span className="bg-borderGray w-3 h-3 rounded-full inline-block"></span>
          <span className="bg-borderGray w-3 h-3 rounded-full inline-block"></span>
        </div>
      </div>
    </div>
  );
}
