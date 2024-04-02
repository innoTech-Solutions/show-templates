import BentoGrid from "@/components/BentoGrid";
import BentoHero from "@/components/BentoHero";
import BentoItem from "@/components/BentoItem";
import Shop from "@/components/Shop";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Home() {
    return (
        <>
            {/* <BentoHero
                className="h-[50vh] mb-4 grid grid-cols-1  max-w-7xl mx-auto"
                smTitle=""
                mdTitle=""
                lgTitle="Air Force 1'07"
                description="The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine."
                imgSrc="shoes_airforce1.png"
                bgColor="bg-white"
                textColor="text-black"
            /> */}
            <BentoGrid className="max-w-4xl mx-auto">
                {categories.map((item, index) => (
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

            <div className="my-36"/>

            <div className="flex flex-col my-4 justify-center items-center">
                <h1 className="font-black text-4xl text-black">
                    Best Seller Products
                </h1>
                <h2 className="text-xl text-gray-400">
                    better act now, stocks are running low!
                </h2>
            </div>

            <Shop shopItems={items} />
        </>
    );
}

const categories = [
    {
        bgColor: "bg-yellow-400",
        textColor: "text-violet-500",
        smTitle: "NBA Category",
        mdTitle: "Jerseys",
        lgTitle: "NBA Jerseys",
        description: "A collection of NBA jerseys.",
        imgSrc: "jersey_category.png",
    },
    {
        bgColor: "bg-white",
        textColor: "text-red-500",
        smTitle: "NBA Category",
        mdTitle: "Shoes",
        lgTitle: "NBA Shoes",
        description: "A collection of NBA shoes.",
        imgSrc: "shoes_category.png",
    },
    {
        bgColor: "bg-blue-500",
        textColor: "text-green-500",
        smTitle: "NBA Category",
        mdTitle: "Hats",
        lgTitle: "NBA Hats",
        description: "A collection of NBA hats.",
        imgSrc: "hats_category.png",
    },
    {
        bgColor: "bg-white",
        textColor: "text-purple-500",
        smTitle: "NBA Category",
        mdTitle: "Socks",
        lgTitle: "NBA Socks",
        description: "A collection of NBA socks.",
        imgSrc: "socks_category.png",
    },
    {
        bgColor: "bg-violet-500",
        textColor: "text-yellow-500",
        smTitle: "NBA Category",
        mdTitle: "T-Shirts",
        lgTitle: "NBA T-Shirts",
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
