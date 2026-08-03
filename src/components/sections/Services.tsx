"use client";

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    num: "01",
    title: "Website Development",
    features: ["Mobile First", "Fast Loading", "SEO", "Forms"],
  },
  {
    num: "02",
    title: "AI Automation",
    features: ["AI Agents", "CRM", "WhatsApp", "Workflows"],
  },
  {
    num: "03",
    title: "Growth Systems",
    features: ["Funnels", "Analytics", "Automation"],
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-1, 1], [-4, 4]);
  const parallaxY = useTransform(smoothY, [-1, 1], [-4, 4]);

  return (
    <section 
      id="services"
      className="w-full bg-[#050505] py-24 md:py-40 px-6 md:px-12 flex justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-[1440px] flex flex-col">
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
          
          return (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              {/* Divider */}
              <div 
                className={cn(
                  "w-full h-[1px] bg-white transition-opacity duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                  isMobile ? "opacity-15" : isHovered ? "opacity-40" : "opacity-15"
                )}
              />

              <div className="py-8 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 relative cursor-default">
                
                {/* Left Side: Number and Title */}
                <motion.div 
                  className="flex items-center gap-6 md:gap-12"
                  style={{ 
                    x: isHovered && !isMobile ? parallaxX : 0, 
                    y: isHovered && !isMobile ? parallaxY : 0 
                  }}
                >
                  <div 
                    className={cn(
                      "font-black text-4xl md:text-5xl lg:text-6xl text-white transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                      isHovered && !isMobile ? "-translate-x-[6px]" : "translate-x-0"
                    )}
                    style={{ 
                      opacity: isMobile ? 0.18 : isOtherHovered ? 0.1 : 0.18,
                    }}
                  >
                    {service.num}
                  </div>
                  
                  <div 
                    className={cn(
                      "font-[800] tracking-[-0.04em] text-3xl md:text-5xl lg:text-6xl transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] origin-left",
                      (isHovered || isMobile) ? "text-white" : "text-[#777]",
                      isHovered && !isMobile ? "scale-[1.03]" : "scale-100"
                    )}
                    style={{
                      opacity: isMobile ? 1 : isOtherHovered ? 0.35 : 1,
                    }}
                  >
                    {service.title}
                  </div>
                </motion.div>

                {/* Right Side: Features */}
                <div className="flex flex-wrap md:justify-end items-center gap-x-2 gap-y-2 md:w-1/2 ml-[72px] md:ml-0 mt-2 md:mt-0">
                  {service.features.map((feature, fIndex) => (
                    <div key={feature} className="flex items-center gap-2">
                      {fIndex > 0 && (
                        <div
                          className={cn(
                            "text-[#444] text-sm md:text-base hidden md:block transition-opacity duration-500",
                            isHovered ? "opacity-100" : "opacity-0"
                          )}
                        >
                          ·
                        </div>
                      )}
                      
                      <motion.div
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                        animate={isMobile ? { opacity: 1, y: 0 } : (isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 })}
                        transition={{ 
                          duration: 0.5, 
                          delay: isMobile ? 0 : isHovered ? fIndex * 0.05 : 0, 
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                        className={cn(
                          "font-medium text-sm md:text-[15px] text-[#777]",
                          isMobile ? "bg-[#111] px-3 py-1.5 rounded-md border border-white/5" : ""
                        )}
                      >
                        {feature}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
        {/* Final Divider */}
        <div className="w-full h-[1px] bg-white opacity-15" />
      </div>
    </section>
  );
}
