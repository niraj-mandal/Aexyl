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
    <section id="workflow" className="py-32 w-full bg-[#050505]">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-24">
          <div className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
          <div className="text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase mb-10">
            What We Build
          </div>
          <h2 className="text-[50px] md:text-[64px] lg:text-[76px] font-black tracking-[-0.03em] leading-[0.95] text-white max-w-4xl">
            End-to-end digital solutions <br />
            designed to generate leads.
          </h2>
        </div>

        {/* List items */}
        <div className="flex flex-col">
          {BUILD_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row md:items-center justify-between py-12 ${index === 0 ? 'border-t border-[#111]' : ''} border-b border-[#111] group hover:bg-[#0A0A0A] transition-colors duration-300 px-4 -mx-4 rounded-xl`}
            >
              {/* Left Side: Number & Title */}
              <div className="flex items-center gap-8 md:gap-12 mb-6 md:mb-0">
                <span className="text-[60px] md:text-[80px] font-black text-[#1A1A1A] leading-none group-hover:text-[#222] transition-colors duration-300">
                  {item.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              {/* Right Side: Tags */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 md:max-w-2xl justify-start md:justify-end text-[#777] text-[13px] font-medium leading-relaxed">
                {item.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="flex items-center gap-3 md:gap-4">
                    <span>{tag}</span>
                    {tagIndex !== item.tags.length - 1 && (
                      <span className="text-[#333] font-black">·</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
