"use client"
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

import logos from "@/data/logos";
import LogoCarousel from "@/components/LogoCarousel";
import Testimonials from "@/components/Testemonial";

export default function Home() {

    return (
        <div className="flex flex-col h-screen">
            <NavBar />
            <HeroSection className="flex-grow" />
            <LogoCarousel logos={logos} />
            <ProductGrid />
            <Testimonials />
            <Footer />
        </div>
    );
}
