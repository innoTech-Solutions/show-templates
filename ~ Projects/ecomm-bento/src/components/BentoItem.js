/**
 * `BentoItem` is component that creates a single item in the component <BentoGrid/>.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.imgSrc - The source of the image to be displayed.
 * @param {string} props.smTitle - The small title of the item.
 * @param {string} props.mdTitle - The medium title of the item.
 * @param {string} props.lgTitle - The large title of the item.
 * @param {string} props.description - The description of the item.
 * @param {string} props.buttonName - The name of the button.
 * @param {string} props.className - Additional CSS classes that the user wants to add.
 * @param {string} props.bgColor - The background color of the item.
 * @param {string} props.textColor - The text color of the item.
 * @param {React.Node} props.children - The child elements to be rendered within the item.
 *
 * @example
 * <BentoItem imgSrc="image.jpg" smTitle="Small Title" mdTitle="Medium Title" lgTitle="Large Title" description="This is a description" buttonName="Click Me" className="my-custom-class" bgColor="bg-white" textColor="text-black">
 *   <div>Child Element</div>
 * </BentoItem>
 *
 * @returns A `div` element with the item layout and the child elements.
 */

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const BentoItem = ({
    imgSrc,
    smTitle,
    mdTitle,
    lgTitle,
    description,
    buttonName,
    className,
    bgColor,
    textColor,
    children,
}) => {
    return (
        <div
            className={`relative hover:shadow-xl transition duration-200 p-4 justify-between flex rounded-xl border border-transparent ${bgColor} ${className}`}
        >
            <Image
                alt={mdTitle + lgTitle}
                src={`/products/${imgSrc}`}
                layout="fill"
                objectFit="cover"
                className="absolute"
            />
            <div className="relative flex flex-col gap-2 justify-end h-full w-full">
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
                    <h1
                        style={{ textShadow: "0 0 0.07em" }}
                        className={`text-5xl font-black  ${textColor}`}
                    >
                        {lgTitle}
                    </h1>
                )}
                {description && (
                    <p className="text-gray-600 font-semibold">{description}</p>
                )}

                <div className="">
                    <Button
                        className="hover:bg-gray-200 rounded-xl bg-gray-50 text-gray-800 h-9 px-6 shadow-xl"
                        aschild
                    >
                        <Link href={"/shop"}>Browse</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BentoItem;
