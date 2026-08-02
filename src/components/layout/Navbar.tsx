"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn, WA_LINKS, scrollToSection } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Workflow", href: "#workflow" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex items-center justify-between px-5 md:px-6 py-2.5 md:py-2 rounded-full w-full md:w-fit gap-4 md:gap-10",
          "transition-all duration-500 ease-out",
          isScrolled
            ? "bg-black/70 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
        )}
      >
        <div className="flex items-center gap-2">
          <a href="#" className="text-[15px] font-bold tracking-wider text-[#FF3B30]">
            AEXYL
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => scrollToSection(e as any, link.href.substring(1))}
                className="relative text-[13px] font-medium text-[#888] hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#FF3B30] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-0">
          <motion.button
            onClick={() => window.open(WA_LINKS.bookFreeCall, '_blank')}
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-white text-black px-4 md:px-5 py-2 rounded-full text-[12px] md:text-[13px] font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
          >
            Book Free Call
          </motion.button>
          
          <button 
            className="md:hidden text-white flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-2xl md:hidden flex flex-col p-6 border-l border-white/10"
          >
            <div className="flex justify-between items-center mb-16 pt-2">
              <div className="text-[15px] font-bold tracking-wider text-[#FF3B30]">
                AEXYL
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="text-[#AAA] flex items-center justify-center w-10 h-10 rounded-full bg-[#111] border border-[#222]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    scrollToSection(e as any, link.href.substring(1));
                  }}
                  className="text-[32px] font-bold text-white min-h-[48px] flex items-center tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="mt-12 pt-8 border-t border-[#222]">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open(WA_LINKS.bookFreeCall, '_blank');
                  }}
                  className="w-full bg-white text-black py-4 rounded-full font-bold text-[15px] min-h-[52px]"
                >
                  Book Free Strategy Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
