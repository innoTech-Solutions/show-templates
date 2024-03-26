import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <NavBar />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}
