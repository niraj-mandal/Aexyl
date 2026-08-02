"use client";

import { motion } from "framer-motion";

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business, goals, current challenges, and growth stage.",
  },
  {
    number: "02",
    title: "Growth Strategy",
    description: "A custom digital blueprint is created — covering your website, automation, and AI systems.",
  },
  {
    number: "03",
    title: "Build & Automation",
    description: "We build all components end-to-end: website, AI agents, and workflow automation.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Everything goes live. We handle setup, testing, and ensure a smooth deployment.",
  },
  {
    number: "05",
    title: "Optimization",
    description: "Ongoing monitoring, improvements, and scaling as your business grows.",
  },
];

export function TheWorkflow() {
  return (
    <section id="the-workflow" className="w-full bg-black py-20 md:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-6">
        
        {/* Section Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
          <div className="text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase mb-10">
            The Workflow
          </div>
          <h2 className="text-[46px] md:text-[64px] lg:text-[76px] font-black tracking-[-0.03em] leading-[0.95] text-white">
            How Aexyl Works
          </h2>
        </motion.div>

        {/* Timeline List */}
        <div className="max-w-3xl">
          <div className="relative">
            {/* The vertical line that connects the circles */}
            <div className="absolute left-[24px] md:left-[27px] top-4 bottom-12 w-[1px] bg-[#111]" />
            
            <div className="flex flex-col gap-12 md:gap-16">
              {WORKFLOW_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-8 md:gap-12 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  
                  {/* Circle Number */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-[54px] md:h-[54px] rounded-full border border-[#222] bg-[#0A0A0A] shrink-0 group-hover:border-[#333] transition-colors duration-300">
                    <span className="text-[#FF3B30] text-[13px] md:text-sm font-bold tracking-widest">
                      {step.number}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="pt-2">
                    <h3 className="text-[26px] md:text-[28px] font-bold text-white mb-2 md:mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#888] text-[16px] md:text-base font-medium leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                  
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
