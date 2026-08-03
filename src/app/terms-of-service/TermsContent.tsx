"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function TermsContent() {
  const sections = [
    {
      id: "services",
      title: "1. Services",
      content: (
        <>
          <p className="mb-4">AEXYL provides services including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#444]">
            <li>Website Design</li>
            <li>Website Development</li>
            <li>AI Solutions</li>
            <li>Business Automation</li>
            <li>Branding</li>
            <li>SEO</li>
            <li>Digital Marketing</li>
            <li>Consulting</li>
          </ul>
        </>
      ),
    },
    {
      id: "project-scope",
      title: "2. Project Scope",
      content: (
        <>
          <p className="mb-4">Project deliverables are defined before work begins.</p>
          <p>Additional requests outside the agreed scope may require additional charges.</p>
        </>
      ),
    },
    {
      id: "payments",
      title: "3. Payments",
      content: (
        <>
          <p className="mb-4">Project timelines begin after the required initial payment is received.</p>
          <p className="mb-4">Invoices should be paid according to agreed milestones.</p>
          <p>Late payments may delay project delivery.</p>
        </>
      ),
    },
    {
      id: "client-responsibilities",
      title: "4. Client Responsibilities",
      content: (
        <>
          <p className="mb-4">Clients agree to provide:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#444] mb-4">
            <li>Required content</li>
            <li>Logos</li>
            <li>Images</li>
            <li>Brand assets</li>
            <li>Feedback</li>
            <li>Approvals</li>
          </ul>
          <p>Delays in providing materials may affect project timelines.</p>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property",
      content: (
        <>
          <p className="mb-4">After full payment, ownership of the completed deliverables transfers to the client unless otherwise agreed.</p>
          <p>AEXYL reserves the right to showcase completed work in its portfolio unless confidentiality has been agreed upon in writing.</p>
        </>
      ),
    },
    {
      id: "revisions",
      title: "6. Revisions",
      content: (
        <>
          <p className="mb-4">Each package includes the agreed number of revisions.</p>
          <p>Additional revisions may incur additional charges.</p>
        </>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "7. Limitation of Liability",
      content: (
        <p>AEXYL is not responsible for indirect, incidental, or consequential damages arising from the use of our services.</p>
      ),
    },
    {
      id: "website-availability",
      title: "8. Website Availability",
      content: (
        <p>While we strive for maximum uptime, we cannot guarantee uninterrupted website availability due to hosting providers, internet outages, or third-party services.</p>
      ),
    },
    {
      id: "termination",
      title: "9. Termination",
      content: (
        <>
          <p className="mb-4">Either party may terminate the agreement according to the agreed project terms.</p>
          <p>Completed work and payments remain subject to the original agreement.</p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "10. Governing Law",
      content: (
        <p>These Terms are governed by the applicable laws of India.</p>
      ),
    },
    {
      id: "contact",
      title: "11. Contact",
      content: (
        <>
          <p className="mb-6">For any questions contact:</p>
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
        <Link 
          href="/"
          className="inline-flex items-center text-[14px] font-medium text-[#888] hover:text-white transition-colors duration-300 mb-8 group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span> Back to Home
        </Link>
        
        <div className="flex items-center text-[13px] font-medium text-[#555] mb-6 tracking-wide">
          <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Terms of Service</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Terms of Service
        </h1>
        <p className="text-[13px] font-bold text-[#FF3B30] tracking-[0.1em] uppercase mb-8">
          Last Updated: August 2026
        </p>
        
        <div className="text-xl md:text-2xl text-[#DDD] font-medium leading-relaxed">
          By accessing the AEXYL website or using our services, you agree to these Terms of Service.
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
