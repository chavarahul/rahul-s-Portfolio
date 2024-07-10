import Image from "next/image";
import Hero from "../components/pages/Hero";
import Contact from "../components/pages/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-screen pl-[4.7rem] max-xl:pl-0 Scroller border-none">
       <Hero/>
       <Contact/>
       
    </main>
  );
}
