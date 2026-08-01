"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Workflow", href: "#workflow" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

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
          "flex items-center justify-between px-6 py-2 rounded-full w-fit gap-10",
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
                className="relative text-[13px] font-medium text-[#888] hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#FF3B30] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-white text-black px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
          >
            Book Free Call
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
