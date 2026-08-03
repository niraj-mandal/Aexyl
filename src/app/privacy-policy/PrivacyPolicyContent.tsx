"use client";

import { motion } from "framer-motion";

export function PrivacyPolicyContent() {
  const sections = [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      content: (
        <>
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
        </>
      ),
    },
    {
      id: "how-we-use-your-information",
      title: "2. How We Use Your Information",
      content: (
        <>
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
        </>
      ),
    },
    {
      id: "cookies",
      title: "3. Cookies",
      content: (
        <>
          <p className="mb-4">
            Our website may use cookies and analytics tools to improve user experience and understand website traffic.
          </p>
          <p>
            Users can disable cookies through their browser settings.
          </p>
        </>
      ),
    },
    {
      id: "third-party-services",
      title: "4. Third-Party Services",
      content: (
        <>
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
        </>
      ),
    },
    {
      id: "data-security",
      title: "5. Data Security",
      content: (
        <>
          <p className="mb-4">
            We take reasonable technical and organizational measures to protect your information.
          </p>
          <p>
            However, no internet transmission is completely secure.
          </p>
        </>
      ),
    },
    {
      id: "data-sharing",
      title: "6. Data Sharing",
      content: (
        <>
          <p className="mb-4">
            We never sell your personal information.
          </p>
          <p>
            Information is only shared when necessary to deliver our services or comply with legal obligations.
          </p>
        </>
      ),
    },
    {
      id: "your-rights",
      title: "7. Your Rights",
      content: (
        <>
          <p className="mb-4">You may request to:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#444]">
            <li>Access your data</li>
            <li>Correct your information</li>
            <li>Delete your data</li>
            <li>Withdraw consent</li>
          </ul>
        </>
      ),
    },
    {
      id: "contact",
      title: "8. Contact",
      content: (
        <>
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
        </>
      ),
    },
  ];

  return (
    <div className="w-full max-w-[900px] mx-auto px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-[13px] font-bold text-[#FF3B30] tracking-[0.1em] uppercase mb-8">
          Last Updated: August 2026
        </p>
        
        <div className="text-xl md:text-2xl text-[#DDD] font-medium leading-relaxed">
          <p className="mb-4">Welcome to AEXYL.</p>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
          </p>
        </div>
      </motion.div>

      <div className="space-y-8 text-[#888] text-[16px] md:text-[17px] leading-relaxed">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0A0A0A] border border-[#111] rounded-[24px] p-8 md:p-10 shadow-lg scroll-mt-32"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              {section.title}
            </h2>
            <div className="text-[#888]">
              {section.content}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
