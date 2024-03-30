const HeroSection = () => {
    return (
      <div className="bg-cover bg-center bg-[#1a1a1a] py-20 text-white">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left mb-8 sm:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Discover the Latest Trends in Fashion
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Explore our collection of clothing and accessories<br></br>
              for every style and occasion.
            </p>
            <a
              href="#"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
            >
              Shop Now
            </a>
          </div>
          <div className="hidden sm:block sm:w-1/2">
            <img
              src="/images/hero_img.jpg"
              alt="Sample Image"
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  