"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn, WA_LINKS, scrollToSection } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Workflow", href: "#the-workflow" },
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
            className="hidden md:block bg-white text-black px-4 md:px-5 py-2 rounded-full text-[12px] md:text-[13px] font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
          >
            Book Free Call
          </motion.button>
          
          <button 
            className="md:hidden text-white flex items-center justify-center w-8 h-8 rounded-full bg-transparent"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-[-100vh] z-[90] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 left-4 right-4 z-[100] bg-[#0A0A0A] rounded-3xl p-6 border border-[#222] shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="text-[15px] font-bold tracking-wider text-[#FF3B30]">
                  AEXYL
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-white flex items-center justify-center w-8 h-8 rounded-full bg-transparent"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col gap-8 mb-10">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      scrollToSection(e as any, link.href.substring(1));
                    }}
                    className="text-[15px] font-bold text-[#DDD] flex items-center justify-between tracking-wide group"
                  >
                    {link.name}
                    <span className="text-[#555] group-hover:text-white transition-colors">→</span>
                  </a>
                ))}
              </div>
                
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open(WA_LINKS.bookFreeCall, '_blank');
                }}
                className="w-full bg-white text-black py-4 rounded-full font-bold text-[15px] min-h-[52px]"
              >
                Book Free Call
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
