/* eslint-disable @next/next/no-img-element */
//  DOCUMENTATION
//    @params shopItems: {name, imgSrc, description, ...}

// TODO: IMPLEMENT category, just map.

const Shop = ({ shopItems, className }) => {

    return (
        <div
            className={`mx-auto flex flex-wrap md:justify-start justify-center pt-6 gap-8 ${className}`}
        >
            {shopItems.map((item) => {
                return (
                    <div
                        key={item.name}
                        className="m-5"
                    >
                        <img
                            src={`/${item.imgSrc}`}
                            alt={`${item.name}`}
                            className="w-64 h-64 object-cover rounded-lg bg-cover"
                        />

                        <div className="flex flex-row justify-between items-start mt-4">
                            <div>
                                <p className="text-sm text-gray-800 font-bold">
                                    {item.name} {item.team}
                                </p>

                                {item.sizes && <p className="text-sm text-gray-800"> Sizes: {item.sizes}</p>}
                                {item.colors && <p className="text-sm text-gray-800">Colors: {item.colors}</p>}

                                <p className="text-sm text-gray-800 font-bold">
                                    ₱{item.price}
                                </p>
                            </div>

                            <div>
                                {/* TODO: RATING PLACEHOLDER ONLY */}
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <p className="text-sm">4.5</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Shop;

// <div
//     // className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}
//     className={`mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8${className}`}
// >
//     {shopItems.map((item) => {
//         return (
//             <div
//                 key={item.name}
//                 className="rounded border-gray-300"
//                 // className="border rounded-lg overflow-hidden max-w-96"
//             >
//                 <div className="relative">
//                     <img
//                         src={`/products/${item.imgSrc}`}
//                         alt={`${item.name}`}
//                         className="w-full h-64 object-cover"
//                     />
//                 </div>
//                 <div className="p-6">
//                     <p className="text-lg font-semibold text-gray-700">
//                         {item.name} {item.team}
//                     </p>
//                     <p className="text-base text-gray-500 mt-2">
//                         ₱{item.price}
//                     </p>
//                     {item.sizes && <p>Sizes: {item.sizes}</p>}
//                     {item.colors && <p>Colors: {item.colors}</p>}
//                 </div>
//             </div>
//         );
//     })}
// </div>
