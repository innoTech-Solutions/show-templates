"use client";

import BentoGrid from "@/components/BentoGrid";
import BentoHero from "@/components/BentoHero";
import BentoItem from "@/components/BentoItem";
import Categories from "@/components/Categories";
import Shop from "@/components/Shop";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <>
            {/* TODO: Complete BentoHero Component*/}

            <BentoHero
                className="h-[70vh] mb-4 max-w-7xl mx-auto"
                lgTitle="Air Force 1'07"
                description="The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine."
                buttonText={"Shop Now"}
                imgSrc="shoes_airforce1.png"
                bgColor="bg-neutral-200"
                textColor="text-black"
            />
            <BentoGrid className="max-w-4xl mx-auto">
                {bentoCategoryData.map((item, index) => (
                    <BentoItem
                        key={index}
                        smTitle={item.smTitle ? item.smTitle : ""}
                        mdTitle={item.mdTitle ? item.mdTitle : ""}
                        lgTitle={item.lgTitle ? item.lgTitle : ""}
                        description={item.description}
                        imgSrc={item.imgSrc}
                        bgColor={item.bgColor}
                        textColor={item.textColor}
                        className={
                            index === 3 || index === 6 ? "md:col-span-2" : ""
                        }
                    />
                ))}
            </BentoGrid>

            <div className="my-36" />

            <div className="flex flex-col my-4 justify-center items-center">
                <h1 className="font-black text-4xl text-black">
                    Best Seller Products
                </h1>
                <h2 className="text-xl text-gray-400">
                    better act now, stocks are running low!
                </h2>
            </div>

            <div className="max-w-4xl mx-auto">
                {selectedCategory}
                <Categories setSelectedCategory={setSelectedCategory} categories={categories} />
                <Shop selectedCategory={selectedCategory} shopItems={items} />
            </div>

            {/* TODO: Create Footer Component */}
        </>
    );
}

const categories = [
    {
        name: "T-Shirts",
        iconSvg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shirt"
            >
                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
            </svg>
        ),
    },
    {
        name: "Shoes",
        iconSvg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-footprints"
            >
                <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
                <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
                <path d="M16 17h4" />
                <path d="M4 13h4" />
            </svg>
        ),
    },
    {
        name: "Jerseys",
        iconSvg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shirt"
            >
                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
            </svg>
        ),
    },
    {
        name: "Hats",
        iconSvg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-hard-hat"
            >
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
                <path d="M14 6h0a6 6 0 0 1 6 6v3" />
            </svg>
        ),
    },
];

const bentoCategoryData = [
    {
        bgColor: "bg-yellow-400",
        textColor: "text-violet-500",
        smTitle: "",
        mdTitle: "",
        lgTitle: "Jerseys",
        description: "A collection of NBA jerseys.",
        imgSrc: "jersey_category.png",
    },
    {
        bgColor: "bg-white",
        textColor: "text-red-500",
        smTitle: "",
        mdTitle: "",
        lgTitle: "Shoes",
        description: "A collection of NBA shoes.",
        imgSrc: "shoes_category.png",
    },
    {
        bgColor: "bg-blue-500",
        textColor: "text-green-500",
        smTitle: "",
        mdTitle: "",
        lgTitle: "Hats",
        description: "A collection of NBA hats.",
        imgSrc: "hats_category.png",
    },
    {
        bgColor: "bg-white",
        textColor: "text-blue-500",
        smTitle: "",
        mdTitle: "",
        lgTitle: "Socks",
        description: "A collection of NBA socks.",
        imgSrc: "socks_category.png",
    },
    {
        bgColor: "bg-violet-500",
        textColor: "text-yellow-500",
        smTitle: "",
        mdTitle: "",
        lgTitle: "T-Shirts",
        description: "A collection of NBA t-shirts.",
        imgSrc: "tshirts_category.png",
    },
];

const items = [
    {
        category: "Jersey",
        name: "Curry",
        team: "Golden State Warriors",
        sizes: "S, M, L, XL",
        price: "500",
        imgSrc: "jersey_curry.png",
    },
    {
        category: "Jersey",
        name: "James",
        team: "Los Angeles Lakers",
        sizes: "S, M, L, XL",
        price: "600",
        imgSrc: "jersey_james.png",
    },
    {
        category: "Hat",
        name: "",
        team: "Chicago Bulls",
        sizes: "S, M, L, XL",
        price: "300",
        imgSrc: "hat_chigacobulls.png",
    },
    {
        category: "Socks",
        name: "NBA Socks",
        colors: "Yellow",
        price: "200",
        imgSrc: "socks_category.png",
    },
];
