import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { MoveLeft, MoveRight } from "lucide-react";
import { useCallback, useState } from "react";

/**
 * Represents an internal scroll carousel component.
 * @component
 */
const InternalScrollCarousel = () => {
    // YOU CAN DECLARE THIS OUTSIDE IF USING API MULTIPLE TIMES FOR CAROUSEL:

    /**
     * React state hook to store the carousel API.
     * @type {Object}
     */
    const [api, setApi] = useState();

    /**
     * Callback function to scroll to the previous item in the carousel.
     */
    const scrollPrev = useCallback(() => {
        if (api) api.scrollPrev();
    }, [api]);

    /**
     * Callback function to scroll to the next item in the carousel.
     */
    const scrollNext = useCallback(() => {
        if (api) api.scrollNext();
    }, [api]);
    // --

    return (
        <Carousel setApi={setApi} className="w-full max-w-xs mx-auto">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 mx-2">
                <MoveLeft
                    className="cursor-pointer border border-neutral-300 rounded-full p-1.5"
                    size={32}
                    onClick={scrollPrev}
                />
            </div>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <Card>
                            <CardContent className="justify-center flex aspect-square items-center p-6">
                                <span className="text-4xl font-semibold">
                                    {index + 1}
                                </span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 mx-2">
                <MoveRight
                    className="cursor-pointer border border-neutral-300 rounded-full p-1.5"
                    size={32}
                    onClick={scrollNext}
                />
            </div>
        </Carousel>
    );
};
export default InternalScrollCarousel;
