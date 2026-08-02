"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How long does a website take?",
    answer: "For a standard premium website, our timeline is typically 4-6 weeks from discovery to launch. Enterprise and custom web app projects can take 8-12 weeks depending on complexity.",
  },
  {
    question: "Do I need hosting?",
    answer: "We handle the hosting setup for you using premium, secure servers. If you already have hosting, we can deploy there as well, but our managed hosting ensures the best performance and security.",
  },
  {
    question: "Can you manage my social media?",
    answer: "Yes, our Growth and Scale packages include dedicated social media management, content creation, and posting schedules to ensure consistent engagement with your audience.",
  },
  {
    question: "Do you provide SEO?",
    answer: "Absolutely. All our websites come with Local SEO optimization built-in. Advanced SEO strategies, content marketing, and backlinking are available in our higher-tier packages.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes! You can start with our Starter package and seamlessly upgrade to Growth or Scale as your business expands. We build everything modularly to support future growth without needing a complete rewrite.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-black py-20 md:py-32">
      <div className="w-full max-w-[900px] mx-auto px-5 md:px-6">
        
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[12px] font-bold text-[#555] tracking-[0.2em] uppercase">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index}
              className="border-b border-[#111]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group cursor-pointer min-h-[64px]"
              >
                <span className={`text-[17px] md:text-xl font-medium tracking-tight transition-colors duration-300 pr-4 md:pr-0 ${openIndex === index ? 'text-white underline underline-offset-8 decoration-[#FF3B30]' : 'text-[#DDD] group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 ml-4 text-[#555] group-hover:text-[#999] transition-colors duration-300"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="pb-6 md:pb-8 text-[#888] text-[16px] md:text-[15px] font-medium leading-[1.6] md:leading-relaxed pr-6 md:pr-8"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
