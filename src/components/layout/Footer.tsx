"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="w-full bg-black border-t border-[#111] pt-20 pb-12 overflow-hidden relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <a href="#" className="text-xl font-bold tracking-[0.15em] text-[#FF3B30] uppercase">
              AEXYL.IN
            </a>
            <div className="flex flex-col gap-8">
              <p className="text-[#888] text-[15px] max-w-sm leading-relaxed">
                Growth Infrastructure<br />
                For Modern Businesses
              </p>
              <div className="w-8 h-[2px] bg-[#801010]" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:items-end justify-between gap-8">
            <div className="flex gap-4">
              {/* WhatsApp */}
              <motion.a
                href="#" aria-label="WhatsApp"
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-10 h-10 rounded-full border border-[#222] bg-[#0A0A0A] flex items-center justify-center text-[#888] hover:text-white hover:border-[#444] hover:bg-[#111] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </motion.a>
              {/* Email */}
              <motion.a
                href="#" aria-label="Email"
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-10 h-10 rounded-full border border-[#222] bg-[#0A0A0A] flex items-center justify-center text-[#888] hover:text-white hover:border-[#444] hover:bg-[#111] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </motion.a>
              {/* Instagram */}
              <motion.a
                href="#" aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-10 h-10 rounded-full border border-[#222] bg-[#0A0A0A] flex items-center justify-center text-[#888] hover:text-white hover:border-[#444] hover:bg-[#111] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href="#" aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-10 h-10 rounded-full border border-[#222] bg-[#0A0A0A] flex items-center justify-center text-[#888] hover:text-white hover:border-[#444] hover:bg-[#111] transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </motion.a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#111] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-[#555] font-medium">
            &copy; {new Date().getFullYear()} AEXYL.IN. All rights reserved.
          </div>
          <div className="flex gap-6 text-[13px] text-[#555] font-medium">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
