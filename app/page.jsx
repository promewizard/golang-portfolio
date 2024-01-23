import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return <main>
    <Hero />
    <About />
    <Work />
    <Certificates />
    <Cta />
  </main>;
}
