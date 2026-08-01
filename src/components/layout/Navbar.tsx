"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Workflow", href: "#workflow" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex items-center justify-between px-6 py-2 rounded-full transition-all duration-300",
          "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl w-fit gap-10"
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
                className="text-[13px] font-medium text-[#888] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <button className="bg-white text-black px-5 py-2 rounded-full text-[13px] font-semibold hover:bg-white/90 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Book Free Call
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
