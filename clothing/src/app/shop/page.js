const Shop = () => {
    const products = [
      { id: 1, name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', price: '$24.99', image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', price: '$29.99', image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Product 4', price: '$34.99', image: 'https://via.placeholder.com/150' },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <img src={product.image} alt={product.name} className="w-full mb-2" />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
              <button className="mt-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Shop;
  