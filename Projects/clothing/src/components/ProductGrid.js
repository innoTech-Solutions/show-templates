import products from './ProductData';
/**
 * The `ProductGrid` component displays a grid of products.
 * It fetches the product data from the `ProductData` module.
 * @component
 * @returns {JSX.Element} The rendered ProductGrid component.
 */
const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <h2 className="text-5xl font-bold mb-8 text-center">Our Best Products</h2>
      {/* Grid of products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            {/* Product Image */}
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            {/* Product Details */}
            <div className="p-4">
              {/* Product Title */}
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              {/* Product Price */}
              <p className="text-gray-600">{product.price}</p>
              {/* Product Description */}
              <p className="text-gray-800 mt-2">{product.description}</p>
              {/* Product Sizes */}
              <p className="text-gray-800 mt-2">Sizes: {product.sizes.join(', ')}</p>
              {/* Product Colors */}
              <p className="text-gray-800 mt-2">Colors: {product.colors.map((color, index) => (
                <span key={index} className="inline-block h-6 w-6 rounded-full mr-2" style={{ backgroundColor: color, border: '1px solid #333' }}></span>
              ))}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
