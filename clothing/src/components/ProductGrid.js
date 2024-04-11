import products from './ProductData';

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-5xl font-bold mb-8 text-center">Our Best Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600">{product.price}</p>
              <p className="text-gray-800 mt-2">{product.description}</p>
              <p className="text-gray-800 mt-2">Sizes: {product.sizes.join(', ')}</p>
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
