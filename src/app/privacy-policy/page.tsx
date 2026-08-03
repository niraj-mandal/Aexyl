import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Aexyl.in",
  description: "Privacy Policy for Aexyl.in. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full relative bg-black pt-32 pb-24 min-h-screen">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
