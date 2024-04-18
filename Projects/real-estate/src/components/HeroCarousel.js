import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";

/**
 * Renders a carousel component for displaying hero images and content.
 * modify LINE:49, for changing the images, currently uses 'unit-1...'. Change length as desired.
 * TODO: modify images so its reusable.
 * @component
 * @example
 * return (
 *   <HeroCarousel />
 * )
 */
const HeroCarousel = ({ header, description, buttonText, imagesLength }) => {
    const [api, setApi] = useState();

    const scrollPrev = useCallback(() => {
        if (api) api.scrollPrev(); 
    }, [api]);

    const scrollNext = useCallback(() => {
        if (api) api.scrollNext();
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            className="w-[80vw] h-[80vh] max-w-full mx-auto rounded-lg"
        >
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 mx-2">
                <MoveLeft
                    className="cursor-pointer bg-white border border-neutral-300 rounded-full p-1.5"
                    size={32}
                    onClick={scrollPrev}
                />
            </div>

            <CarouselContent>
                {Array.from({ length: 2 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div
                            className="pt-40 w-[80vw] h-[80vh] items-center bg-no-repeat bg-center rounded-2xl bg-cover object-cover"
                            style={{
                                backgroundImage: `url(/unit-${index + 1}.jpg)`,
                            }}
                        >
                            {header.split("\n").map((line, i) => (
                                <p
                                    key={i}
                                    className="tracking-wide text-white text-3xl md:text-7xl font-black mx-24"
                                >
                                    {line}
                                </p>
                            ))}
                            <p className="text-neutral-300 text-md md:text-xl mx-24 mt-4">
                                {description}
                            </p>
                            <Button className="font-bold mx-24 mt-20 rounded-xl bg-white text-black px-8">
                                {buttonText}
                            </Button>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 mx-2">
                <MoveRight
                    className="cursor-pointer bg-white border border-neutral-300 rounded-full p-1.5"
                    size={32}
                    onClick={scrollNext}
                />
            </div>
        </Carousel>
    );
};
export default HeroCarousel;
