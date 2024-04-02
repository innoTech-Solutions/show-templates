/* eslint-disable @next/next/no-img-element */

const Shop = ({ shopItems, className }) => {

    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`} >
            {shopItems.map((item) => {
                return (
                    <div
                        key={item.name}
                        className="border rounded-lg overflow-hidden max-w-96"
                    >
                        <div className="relative">
                            <img
                                src={`/products/${item.imgSrc}`}
                                alt={`${item.name}`}
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <p className="text-lg font-semibold text-gray-700">
                                {item.name} {item.team}
                            </p>
                            <p className="text-base text-gray-500 mt-2">
                                ₱{item.price}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Shop;
