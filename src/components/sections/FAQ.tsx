"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What services does AEXYL offer?",
    answer: "AEXYL helps businesses grow through premium website development, AI solutions, workflow automation, branding, SEO, and digital marketing. We create tailored digital systems that improve your online presence and drive measurable business growth.",
  },
  {
    question: "How long does a project usually take?",
    answer: "Most website projects are completed within 6-7 working days, while more advanced AI, automation, or custom development projects typically take 10-12 working days, depending on the scope and complexity.",
  },
  {
    question: "What makes AEXYL different from other agencies?",
    answer: "We don't just build websites—we build complete digital growth systems. Every project combines modern design, high performance, strategic thinking, and AI-powered solutions to help businesses generate more leads and operate more efficiently.",
  },
  {
    question: "Will my website be mobile-friendly and SEO optimized?",
    answer: "Absolutely. Every website we create is fully responsive, optimized for speed, built with SEO best practices, and designed to provide an excellent experience across desktop, tablet, and mobile devices.",
  },
  {
    question: "Do you provide support after the project is completed?",
    answer: "Yes. We continue to support our clients after launch with maintenance, updates, technical assistance, performance monitoring, and ongoing improvements based on the selected support plan.",
  },
  {
    question: "How do I get started?",
    answer: "Simply book a free strategy call or contact us through WhatsApp. We'll learn about your business, discuss your goals, recommend the right solution, and outline the next steps before starting your project.",
  },
  {
    question: "Do I need to pay before the project starts?",
    answer: "We typically begin with an initial deposit to reserve your project and start the planning and development process. The remaining balance is paid according to agreed project milestones, ensuring transparency for both sides.",
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
