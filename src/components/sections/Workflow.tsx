"use client";

import { motion } from "framer-motion";

const BUILD_ITEMS = [
  {
    number: "01",
    title: "Website Development",
    tags: ["Mobile First Design", "Fast Loading", "WhatsApp Integration", "Contact Forms", "Google Maps", "SEO Ready"],
  },
  {
    number: "02",
    title: "Local SEO",
    tags: ["Google Business Profile", "Location Keywords", "Ranking Optimization", "Competitor Analysis", "Local Citations"],
  },
  {
    number: "03",
    title: "AI Automation",
    tags: ["AI Chatbot", "Lead Qualification", "Automated Follow Ups", "WhatsApp Automation", "24/7 Responses"],
  },
  {
    number: "04",
    title: "Social Media Growth",
    tags: ["Content Creation", "Reels Management", "Posting Schedule", "Engagement Strategy", "Analytics Reporting"],
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="py-20 md:py-32 w-full bg-[#050505]">
      <div className="w-full max-w-[1400px] mx-auto px-5 md:px-6">
        
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
            What We Build
          </div>
          <h2 className="text-[46px] md:text-[64px] lg:text-[76px] font-black tracking-[-0.03em] leading-[0.95] text-white max-w-4xl">
            End-to-end digital solutions <br />
            designed to generate leads.
          </h2>
        </motion.div>

        {/* List items */}
        <div className="flex flex-col relative">
          {/* Vertical progress line for mobile */}
          <div className="absolute left-[35px] top-16 bottom-16 w-[1px] bg-gradient-to-b from-transparent via-[#222] to-transparent md:hidden" />
          {BUILD_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col md:flex-row md:items-center justify-between py-14 md:py-12 ${index === 0 ? 'border-t border-[#111]' : ''} border-b border-[#111] group hover:bg-transparent md:hover:bg-[#0A0A0A] transition-colors duration-300 px-4 -mx-4 rounded-xl relative`}
            >
              {/* Left Side: Number & Title */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-8 md:mb-0">
                <span className="text-[72px] md:text-[80px] font-black text-[#1A1A1A] leading-none group-hover:text-[#222] transition-colors duration-300 bg-[#050505] relative z-10 inline-block pr-6 md:pr-0">
                  {item.number}
                </span>
                <h3 className="text-[28px] md:text-3xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Right Side: Tags */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 md:max-w-2xl justify-start md:justify-end text-[#888] text-[15px] md:text-[13px] font-medium leading-relaxed pl-2 md:pl-0">
                {item.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="flex items-center gap-3 md:gap-4">
                    <span>{tag}</span>
                    {tagIndex !== item.tags.length - 1 && (
                      <span className="text-[#333] font-black">·</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
