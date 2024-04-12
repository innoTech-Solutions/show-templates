import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const BentoHero = ({
    className,
    lgTitle,
    imgSrc,
    description,
    buttonText,
    textColor,
    bgColor,
}) => {
    return (
        <div
            className={`${className} ${bgColor} mx-auto rounded-2xl `}
        >
            <div
                className="w-full h-full pt-40 items-center rounded-2xl bg-cover bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(/products/shoes_airforce.png)`,

                }}
            >
                <p
                    className={`${textColor} tracking-wide text-3xl md:text-7xl font-black mx-24`}
                >
                    {lgTitle}
                </p>
                <p className="text-neutral-500 text-md md:text-xl mx-24 mt-4 max-w-lg">
                    {description}
                </p>
                <Button variant={"outline"} className="text-black font-bold mx-24 mt-20 rounded-xl bg-white px-8">
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};

export default BentoHero;

// import Image from "next/image";
// import { Button } from "./ui/button";
// import Link from "next/link";

// const BentoHero = ({
//     className,
//     smTitle,
//     mdTitle,
//     lgTitle,
//     imgSrc,
//     description,
//     textColor,
//     bgColor,
// }) => {
//     return (
//         <div
//             className={`relative rounded-xl p-4 ${bgColor} ${className} flex items-center justify-center h-[70vh] max-w-4xl mx-auto`}
//         >
//             <Image
//                 alt={mdTitle + lgTitle}
//                 src={`/products/${imgSrc}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute rounded-xl"
//             />
//             <div className="relative z-10 text-center">
//                 {smTitle && (
//                     <h1 className="text-sm font-semibold text-gray-500">
//                         {smTitle}
//                     </h1>
//                 )}
//                 {mdTitle && (
//                     <h1 className="text-lg font-extrabold text-gray-800 bg-opacity-75">
//                         {mdTitle}
//                     </h1>
//                 )}
//                 {lgTitle && (
//                     <h1 className={`text-5xl font-black  ${textColor}`}>
//                         {lgTitle}
//                     </h1>
//                 )}
//                 {description && (
//                     <p className="text-gray-600 font-semibold">{description}</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BentoHero;
