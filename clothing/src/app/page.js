import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <HeroSection className="flex-grow" />
      <ProductGrid />
      <Footer />
    </div>
  );
}
