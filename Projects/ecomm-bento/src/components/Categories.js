/* eslint-disable @next/next/no-img-element */
//  DOCUMENTATION
//    @params categories: {name, iconSrc, iconSvg}
//    @params className
//    @params setSelectedCategory()

const Categories = ({ categories, className, setSelectedCategory }) => {
    return (
        <div
            className={`border-b border-gray-200 flex flex-row justify-between px-5 mt-4 ${className}`}
        >
            <div
                className="cursor-pointer flex flex-col items-center border-b-2 border-black pb-2"
                onClick={() => setSelectedCategory("All")}
            >
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
                    class="lucide lucide-globe"
                >
                    {" "}
                    <circle cx="12" cy="12" r="10" />{" "}
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />{" "}
                    <path d="M2 12h20" />{" "}
                </svg>
                <p className="text-xxsm text-black font-bold">All</p>
            </div>

            {categories.map((category, index) => {
                return (
                    <div
                        key={index}
                        className="cursor-pointer flex flex-col items-center border-b-2 border-black pb-2"
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        {category.iconSvg ? (
                            category.iconSvg
                        ) : (
                            <img
                                className="h-7 w-7 mx-auto"
                                src={category.iconSrc}
                                alt=""
                            />
                        )}

                        <p className="text-xxsm text-black font-bold">
                            {category.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;
