import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | Aexyl.in",
  description: "Terms of Service for Aexyl.in. Read our terms and conditions for using our website and services.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full relative bg-black pt-32 pb-24 min-h-screen">
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}
