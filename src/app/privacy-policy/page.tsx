import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Aexyl.in",
  description: "Privacy Policy for Aexyl.in. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full relative bg-black pt-32 pb-24 min-h-screen">
        <div className="w-full max-w-[800px] mx-auto px-5 md:px-8">
          
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-[13px] font-medium text-[#888] tracking-[0.1em] uppercase">
              Last Updated: August 2026
            </p>
          </div>

          <div className="space-y-12 text-[#888] text-[16px] md:text-[17px] leading-relaxed">
            
            <div>
              <p className="text-xl text-[#DDD] font-medium mb-6">
                Welcome to AEXYL.
              </p>
              <p>
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
              </p>
            </div>

            <hr className="border-[#111]" />

            <section id="information-we-collect" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-white mb-6">1. Information We Collect</h2>
              <p className="mb-4">We may collect:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#444]">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Website URL</li>
                <li>Business information you voluntarily submit</li>
                <li>Messages sent through our contact forms</li>
                <li>Analytics data</li>
                <li>Browser information</li>
                <li>Device information</li>
                <li>Cookies</li>
              </ul>
            </section>

            <hr className="border-[#111]" />

            <section id="how-we-use-your-information" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-white mb-6">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#444]">
                <li>Respond to inquiries</li>
                <li>Deliver our services</li>
                <li>Improve our website</li>
                <li>Analyze website performance</li>
                <li>Communicate project updates</li>
                <li>Send requested information</li>
                <li>Improve customer experience</li>
              </ul>
            </section>

            <hr className="border-[#111]" />

            <section id="cookies" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-white mb-6">3. Cookies</h2>
              <p className="mb-4">
                Our website may use cookies and analytics tools to improve user experience and understand website traffic.
              </p>
              <p>
                Users can disable cookies through their browser settings.
              </p>
            </section>

            <hr className="border-[#111]" />

            <section id="third-party-services" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-white mb-6">4. Third-Party Services</h2>
              <p className="mb-4">We may use trusted third-party providers including:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#444] mb-6">
                <li>Google Analytics</li>
                <li>Google Search Console</li>
                <li>Meta Pixel</li>
                <li>WhatsApp</li>
                <li>Hostinger</li>
                <li>Vercel</li>
              </ul>
              <p>
                Each provider has its own privacy policy.
              </p>
            </section>

            <hr className="border-[#111]" />

            <section id="data-security" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-white mb-6">5. Data Security</h2>
              <p className="mb-4">
                We take reasonable technical and organizational measures to protect your information.
              </p>
              <p>
                However, no internet transmission is completely secure.
              </p>
            </section>

            <hr className="border-[#111]" />

            <section id="data-sharing" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-white mb-6">6. Data Sharing</h2>
              <p className="mb-4">
                We never sell your personal information.
              </p>
              <p>
                Information is only shared when necessary to deliver our services or comply with legal obligations.
              </p>
            </section>

            <hr className="border-[#111]" />

            <section id="your-rights" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-white mb-6">7. Your Rights</h2>
              <p className="mb-4">You may request to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[#444]">
                <li>Access your data</li>
                <li>Correct your information</li>
                <li>Delete your data</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <hr className="border-[#111]" />

            <section id="contact" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-white mb-6">8. Contact</h2>
              <p className="mb-6">For any privacy-related questions contact:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-medium mb-1">AEXYL</h3>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email:</h3>
                  <a href="mailto:info@aexyl.in" className="text-[#FF3B30] hover:text-[#FF3B30]/80 transition-colors">
                    info@aexyl.in
                  </a>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Website:</h3>
                  <a href="https://aexyl.in" className="text-[#FF3B30] hover:text-[#FF3B30]/80 transition-colors">
                    https://aexyl.in
                  </a>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
