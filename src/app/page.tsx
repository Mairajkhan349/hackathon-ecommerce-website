import Navbar from "@/components/layout/navbar/page";
import Hero from "@/components/layout/hero-section/page";


export default function Home() {
  return (
    <div className=" bg-white h-screen">
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
