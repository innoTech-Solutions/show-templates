import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const BentoHero = ({
    className,
    smTitle,
    mdTitle,
    lgTitle,
    imgSrc,
    description,
    textColor,
    bgColor,
}) => {
    return (
        <div
            className={`relative rounded-xl p-4 ${bgColor} ${className} flex items-center justify-center h-[70vh] max-w-4xl mx-auto`}
        >
            <Image
                alt={mdTitle + lgTitle}
                src={`/products/${imgSrc}`}
                layout="fill"
                objectFit="cover"
                className="absolute rounded-xl"
            />
            <div className="relative z-10 text-center">
                {smTitle && (
                    <h1 className="text-sm font-semibold text-gray-500">
                        {smTitle}
                    </h1>
                )}
                {mdTitle && (
                    <h1 className="text-lg font-extrabold text-gray-800 bg-opacity-75">
                        {mdTitle}
                    </h1>
                )}
                {lgTitle && (
                    <h1 className={`text-5xl font-black  ${textColor}`}>
                        {lgTitle}
                    </h1>
                )}
                {description && (
                    <p className="text-gray-600 font-semibold">{description}</p>
                )}
            </div>
        </div>
    );
};

export default BentoHero;

// <div
//     className={`relative rounded-xl p-4 ${bgColor} ${className}`}
// >
//     <Image
//         alt={mdTitle + lgTitle}
//         src={`/products/${imgSrc}`}
//         layout="fill"
//         objectFit="cover"
//         className="absolute"
//     />
//     <div className="relative flex flex-col gap-2 justify-end h-full max-w-96">
//         {smTitle && (
//             <h1 className="text-sm font-semibold text-gray-500">
//                 {smTitle}
//             </h1>
//         )}
//         {mdTitle && (
//             <h1 className="text-lg font-extrabold text-gray-800 bg-opacity-75">
//                 {mdTitle}
//             </h1>
//         )}
//         {lgTitle && (
//             <h1 className={`text-5xl font-black  ${textColor}`}>
//                 {lgTitle}
//             </h1>
//         )}
//         {description && <p className="text-gray-600 font-semibold">{description}</p>}

//         <div className="">
//             <Button
//                 className="hover:bg-gray-200 rounded-xl bg-gray-50 text-gray-800 h-9 px-6 shadow-xl"
//                 aschild
//             >
//                 <Link href={"/shop"}>Browse</Link>
//             </Button>
//         </div>
//     </div>
// </div>
