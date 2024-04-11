/**
 * LogoCarousel Component
 *
 * Description:
 * `LogoCarousel` is a React component that displays a carousel of logos.
 * The carousel auto-scrolls through the logos, and each logo is displayed within a card.
 *
 * Props:
 * - `logos`: An array of logo file names. Each logo file should be stored in the `/logos` directory and will be displayed in the carousel.
 *
 * Usage:
 *
 * import LogoCarousel from './LogoCarousel';
 * const logos = ['logo1.png', 'logo2.png', 'logo3.png'];
 * <LogoCarousel logos={logos} />
 *
 * Note:
 * The `AutoScroll` plugin is used to make the carousel auto-scroll.
 */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import AutoScroll from "embla-carousel-auto-scroll";

const LogoCarousel = ({ logos }) => {
    return (
        <div className="text-center relative">
            <h2 className="text-5xl font-bold my-10">Partnerships</h2>
            <div className="carousel-container relative overflow-hidden">
                <Carousel
                    opts={{
                        loop: true,
                        align: "center",
                    }}
                    plugins={[AutoScroll({stopOnInteraction: false})]}
                    className="py-8"
                >
                    <CarouselContent>
                        {logos.map((logo, index) => {
                            return (
                                <CarouselItem className="basis-1/5" key={index}>
                                    <Card className="border-0 shadow-none">
                                        <CardContent className="flex items-center justify-center p-6">
                                            <img
                                                src={`/logos/${logo}`}
                                                alt={logo}
                                                className="h-12 w-auto"
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
                <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-50 blur-3xl"></div> {/* Blurry vignette overlay */}
            </div>
        </div>
    );
};

export default LogoCarousel;
