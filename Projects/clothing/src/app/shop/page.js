"use client"
import React from "react";
import NavBar from "@/components/NavBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
/**
 * The Shop component displays a list of products with filtering, sorting, and pagination features.
 * It uses a variety of UI components such as Accordion, Pagination, Select, and Input from the Shadcn UI library.
 */
const Shop = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', category: 'Tops', price: '$19.99', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', category: 'Bottoms', price: '$24.99', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', category: 'Shoes', price: '$29.99', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', category: 'Tops', price: '$34.99', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', category: 'Bottoms', price: '$39.99', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', category: 'Shoes', price: '$44.99', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', category: 'Tops', price: '$49.99', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', category: 'Bottoms', price: '$54.99', image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Product 9', category: 'Shoes', price: '$59.99', image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Product 10', category: 'Tops', price: '$64.99', image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Product 11', category: 'Bottoms', price: '$69.99', image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Product 12', category: 'Shoes', price: '$74.99', image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Product 13', category: 'Tops', price: '$79.99', image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Product 14', category: 'Bottoms', price: '$84.99', image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Product 15', category: 'Shoes', price: '$89.99', image: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Product 16', category: 'Tops', price: '$94.99', image: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Product 17', category: 'Bottoms', price: '$99.99', image: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Product 18', category: 'Shoes', price: '$104.99', image: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Product 19', category: 'Tops', price: '$109.99', image: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Product 20', category: 'Bottoms', price: '$114.99', image: 'https://via.placeholder.com/150' },
  ];

  // Pagination variables
  const totalProducts = products.length;
  const productsPerPage = 6; // Change this to the desired number of products per page
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

  // Filter state
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  // Filtered products
  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

  // Categories for filtering
  const categories = [...new Set(products.map(product => product.category))];

  const [selectedSort, setSelectedSort] = React.useState("priceLowToHigh");

  const sortProducts = (sortType) => {
    switch (sortType) {
      case "priceLowToHigh":
        products.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
        break;
      case "priceHighToLow":
        products.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        break;
      case "popularity":
        // Implement popularity sorting logic
        break;
      case "newestArrivals":
        // Implement newest arrivals sorting logic
        break;
      default:
        break;
    }
  };

   // Search state
   const [searchTerm, setSearchTerm] = React.useState("");

    // Search handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Perform search
  const searchedProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8 flex">
        <div className="w-1/4 pr-8">
          <Accordion type="single" collapsible>
            {categories.map(category => (
              <AccordionItem key={category} value={category}>
                <AccordionTrigger>{category}</AccordionTrigger>
                <AccordionContent>
                  <button onClick={() => setSelectedCategory(category)} className="text-blue-500">Filter by {category}</button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-4">Shop</h1>
          <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4"
        />
          <Select>
            <SelectTrigger className="w-[180px] mb-10">
              <SelectValue placeholder="Sort By" />
              <SelectValue>{selectedSort}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="priceLowToHigh"
                onClick={() => {
                  setSelectedSort("priceLowToHigh");
                  sortProducts("priceLowToHigh");
                }}
              >
                Price: Low to High
              </SelectItem>
              <SelectItem
                value="priceHighToLow"
                onClick={() => {
                  setSelectedSort("priceHighToLow");
                  sortProducts("priceHighToLow");
                }}
              >
                Price: High to Low
              </SelectItem>
              <SelectItem
                value="popularity"
                onClick={() => {
                  setSelectedSort("popularity");
                  sortProducts("popularity");
                }}
              >
                Popularity
              </SelectItem>
              <SelectItem
                value="newestArrivals"
                onClick={() => {
                  setSelectedSort("newestArrivals");
                  sortProducts("newestArrivals");
                }}
              >
                Newest Arrivals
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visibleProducts.map(product => (
              <div key={product.id} className="bg-white p-4 rounded shadow">
                <img src={product.image} alt={product.name} className="w-full mb-2" />
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-500">{product.price}</p>
                <button className="mt-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            ))}
          </div>
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={prevPage} disabled={currentPage === 1} />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => setCurrentPage(index + 1)}
                    className={index + 1 === currentPage ? 'font-bold' : ''}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext onClick={nextPage} disabled={currentPage === totalPages} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
