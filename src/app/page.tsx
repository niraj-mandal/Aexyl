import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Workflow } from "@/components/sections/Workflow";
import { Approach } from "@/components/sections/Approach";
import { TheWorkflow } from "@/components/sections/TheWorkflow";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full relative">
        <Hero />
        <Services />
        <Workflow />
        <Packages />
        <Approach />
        <TheWorkflow />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
