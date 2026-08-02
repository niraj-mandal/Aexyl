"use client";

import { motion } from "framer-motion";
import { WA_LINKS } from "@/lib/utils";

export function CTA() {
  return (
    <section className="w-full bg-black py-24 md:py-32 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,59,48,0.04)_0%,transparent_70%)] animate-glow-pulse pointer-events-none" />

      <motion.div
        className="w-full max-w-4xl mx-auto px-5 md:px-6 flex flex-col items-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        
        {/* Red Dash */}
        <div className="w-8 h-[2px] bg-[#FF3B30] mb-8" />
        
        {/* Title */}
        <h2 className="text-[44px] md:text-[72px] lg:text-[84px] font-black tracking-[-0.03em] leading-[0.95] text-white mb-6 px-4 md:px-0">
          Ready To Build <br className="md:hidden" /> Your Growth<br className="hidden md:block" />
          System?
        </h2>
        
        {/* Subtitle */}
        <p className="md:hidden text-[#888] text-[15px] font-medium leading-[1.6] px-4 mb-12">
          Let's build the websites, automation, and<br />infrastructure behind your next stage of growth.
        </p>
        <p className="hidden md:block text-[#888] text-lg font-medium leading-relaxed max-w-2xl mb-12">
          Let's build the websites, automation, and infrastructure behind your<br />next stage of growth.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 md:px-0">
          <motion.button
            onClick={() => window.open(WA_LINKS.bookFreeCall, '_blank')}
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-full sm:w-auto bg-white text-black px-8 py-4 md:py-4 rounded-full text-[15px] md:text-sm font-bold cursor-pointer min-h-[56px] md:min-h-[52px]"
          >
            Book Free Strategy Call
          </motion.button>
          <motion.button
            onClick={() => window.open(WA_LINKS.contactUs, '_blank')}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(17,17,17,1)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-full sm:w-auto bg-transparent border border-[#333] text-white px-8 py-4 md:py-4 rounded-full text-[15px] md:text-sm font-bold cursor-pointer min-h-[56px] md:min-h-[52px]"
          >
            Contact Us
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
}
