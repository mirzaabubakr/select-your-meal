import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "../ui/button";
import { useDotButton } from "../buttons/EmblaDotButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function EmblaCarousel({ images }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div ref={emblaRef}>
      <div className="flex">
        {images.map((src: string, index: any) => (
          <div
            key={index}
            className="flex items-center justify-center shrink-0 w-full"
          >
            <img
              className="w-full object-cover"
              src={src}
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <Button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`h-1.5 w-3 p-0 rounded-full transition-colors duration-300 ${
              index === selectedIndex ? "bg-customBlue" : "bg-[#F3F3F3]"
            }`}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-3 -translate-y-1/2">
        <div
          className="rounded-full size-10 pr-0.5 bg-white shadow-sm cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-gray-300 hover:opacity-55"
          onClick={scrollPrev}
        >
          <ChevronLeft size={24} />
        </div>
        <div
          className="rounded-full size-10 pl-0.5 bg-white shadow-sm cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-gray-300 hover:opacity-55"
          onClick={scrollNext}
        >
          <ChevronRight size={24} />
        </div>
      </div>
    </div>
  );
}
