"use client";

import HeroCarousel from "@/components/HeroCarousel";
import Shop from "@/components/Shop";
import { Button } from "@/components/ui/button";

import { Car, BookOpenCheck, FerrisWheel } from "lucide-react";

export default function Home() {
    const shopItems = [
        {
            name: "Condo Unit 1",
            price: "2000",
            imgSrc: "unit-1.jpg",
            description:
                "This is a beautiful condo unit with 2 bedrooms, 2 bathrooms, and a stunning view of the city.",
        },
        {
            name: "Condo Unit 2",
            price: "2000",
            imgSrc: "unit-2.jpg",
            description:
                "A luxurious condo unit with 3 bedrooms, 2 bathrooms, and a spacious living area.",
        },
        {
            name: "Condo Unit 3",
            price: "2000",
            imgSrc: "unit-3.jpg",
            description:
                "A cozy condo unit perfect for small families or couples, featuring 1 bedroom, 1 bathroom, and a modern kitchen.",
        },
        {
            name: "Condo Unit 1",
            price: "2000",
            imgSrc: "unit-1.jpg",
            description:
                "This is a beautiful condo unit with 2 bedrooms, 2 bathrooms, and a stunning view of the city.",
        },
        // Add more items as needed
    ];

    return (
        <div className="mx-4">
            <HeroCarousel
                header={`Experience comfort\nlike never before`}
                description={"A stay you'll never forget"}
                buttonText={"Book now"}
            />

            <div className="my-16 flex flex-col justify-center items-center [&>*]:pb-4">
                <h1 className="text-xl md:text-4xl font-bold">
                    High quality stays for you
                </h1>
                <p className="text-neutral-500">
                    Check out variety of benefits when booking for our units
                </p>

                {/* TODO: Make this a component, (icon, title, description) */}
                <div className="flex flex-col md:flex-row [&>*]:p-8 mt-4">
                    <div className="flex flex-col justify-center items-center ">
                        <Car size={32} className="my-2" />
                        <h2 className="text-md">Car Pickup</h2>
                        <p className="max-w-xs text-sm text-center pt-2 text-gray-500">
                            We offer a convenient car pickup service for our
                            guests. This is just one of the many ways we make
                            your stay more enjoyable.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <BookOpenCheck size={32} className="my-2" />
                        <h2 className="">Easy booking</h2>
                        <p className="max-w-xs text-sm text-center pt-2 text-gray-500">
                            Our booking process is simple and straightforward,
                            making your experience hassle-free.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <FerrisWheel size={32} className="my-2" />
                        <h2 className="">Variety of amenities</h2>
                        <p className="max-w-xs text-sm text-center pt-2 text-gray-500">
                            We provide a wide range of amenities to make your
                            stay as comfortable as possible.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[70vw] mx-auto my-16 self-start">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Find your stay
                </h1>
                <div className="flex justify-center items-center flex-col">
                    <Shop shopItems={shopItems} />
                    <Button className={"my-4 rounded-xl border-black px-8"} variant={"outline"}>See all</Button> 
                </div>

            </div>

            <footer className="bg-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full md:w-auto mb-4 md:mb-0">
                            <a
                                href="#"
                                className="text-xl font-bold text-gray-800"
                            >
                                house*
                            </a>
                        </div>
                        <div className="w-full md:w-auto mb-4 md:mb-0">
                            <ul className="flex flex-wrap justify-between md:justify-end space-x-4">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Units
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 border-t pt-4 border-gray-200 text-center text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} house* All rights
                        reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
