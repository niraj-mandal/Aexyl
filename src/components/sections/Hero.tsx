"use client";

import { motion } from "framer-motion";
import { Globe, Bot, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import { WA_LINKS } from "@/lib/utils";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,59,48,0.06)_0%,transparent_70%)] animate-glow-pulse pointer-events-none" />

      <motion.div 
        className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        
        {/* Left Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div variants={fadeUp} className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
          <motion.div variants={fadeUp} className="text-[11px] font-semibold text-[#555] tracking-[0.2em] mb-12">
            JORHAT · ASSAM · NORTHEAST INDIA
          </motion.div>

          <motion.h1 
            className="text-[48px] md:text-[72px] lg:text-[100px] xl:text-[120px] font-black leading-[0.9] md:leading-[0.88] tracking-[-0.04em] text-white mb-6 md:mb-8"
            variants={stagger}
          >
            {["The Growth", "Infrastructure", "Behind Modern"].map((line, i) => (
              <motion.span key={i} variants={fadeUp} className="block">
                {line}
              </motion.span>
            ))}
            <motion.span variants={fadeUp} className="block text-gradient">
              Businesses.
            </motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[#888] text-[16px] md:text-[15px] max-w-[360px] md:max-w-[420px] leading-relaxed mb-10 px-2 md:px-0">
            We build websites, AI systems, and automation infrastructure that help businesses operate more efficiently and grow sustainably.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full md:w-auto mb-10 md:mb-8 px-2 md:px-0">
            <motion.button 
              onClick={() => window.open(WA_LINKS.bookFreeCall, '_blank')}
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-white text-black px-6 py-4 md:py-3 rounded-full text-[15px] md:text-sm font-bold transition-colors cursor-pointer w-full md:w-auto min-h-[56px] md:min-h-[52px]"
            >
              Book Free Strategy Call
            </motion.button>
            <motion.button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(17,17,17,1)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-transparent border border-[#333] text-white px-6 py-4 md:py-3 rounded-full text-[15px] md:text-sm font-bold transition-colors cursor-pointer w-full md:w-auto min-h-[56px] md:min-h-[52px]"
            >
              See Packages
            </motion.button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-x-5 gap-y-4 md:gap-5 text-[#555] text-[13px] md:text-[11px] font-semibold tracking-wide w-full md:max-w-none">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B30]" /> Websites</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B30]" /> AI Agents</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B30]" /> Automation</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B30]" /> Growth Systems</span>
          </motion.div>
        </div>

        {/* Right Dashboard UI */}
        <motion.div className="relative mt-12 md:mt-0" variants={slideRight}>
          <div className="animate-float">
            <div className="w-full bg-[#0B0B0B] border border-[#1A1A1A] rounded-[24px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:shadow-2xl">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                </div>
                <div className="text-[10px] font-bold tracking-widest text-[#555]">
                  AEXYL SYSTEMS
                </div>
              </div>

              {/* Grid Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { Icon: Globe, title: "Website Systems", desc: "Fast, modern websites built for trust and conversion." },
                  { Icon: Bot, title: "AI Agents", desc: "Automate inquiries, customer support, and follow-ups." },
                  { Icon: Zap, title: "Automation Workflows", desc: "Eliminate repetitive tasks and streamline operations." },
                  { Icon: TrendingUp, title: "Growth Infrastructure", desc: "The systems that help businesses scale efficiently." },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#050505] border border-[#111] p-5 rounded-xl transition-all duration-300 hover:border-[#222] hover:translate-y-[-2px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  >
                    <card.Icon className="w-5 h-5 text-[#FF3B30] mb-4" />
                    <div className="text-sm font-bold text-white mb-2">{card.title}</div>
                    <div className="text-[11px] text-[#777] leading-relaxed">{card.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Bar */}
              <div className="flex justify-between items-center pt-4 border-t border-[#111]">
                <span className="text-[#555] text-[11px] font-medium">Built for modern businesses</span>
                <div className="flex items-center gap-1.5 text-[#555] text-[11px] font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" /> Active
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
