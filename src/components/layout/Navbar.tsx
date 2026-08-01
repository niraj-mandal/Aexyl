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
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex items-center justify-between px-6 py-2 rounded-full transition-all duration-300",
          "bg-[#0A0A0A]/90 backdrop-blur-md border border-[#1F1F1F] shadow-lg w-fit gap-10"
        )}
      >
        <div className="flex items-center gap-2">
          <a href="#" className="text-[15px] font-bold tracking-wider text-[#FF3B30]">
            AEXYL.IN
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-[13px] font-medium text-text-muted hover:text-text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <button className="bg-white text-black px-5 py-2 rounded-full text-[13px] font-semibold hover:bg-white/90 transition-all duration-300">
            Book Free Call
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
