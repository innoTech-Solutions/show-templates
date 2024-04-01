import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar/>
      <HeroSection className="flex-grow"/>
      <ProductGrid/>
      <div className="bg-[#1a1a1a] text-white py-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-sm">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">Do you offer international shipping?</AccordionTrigger>
                <AccordionContent className="text-sm">
                  Yes. We offer international shipping to most countries.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">How can I track my order?</AccordionTrigger>
                <AccordionContent className="text-sm">
                  Once your order has shipped, you will receive a tracking number via email.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      <Footer/>
    </div>
  );
}
