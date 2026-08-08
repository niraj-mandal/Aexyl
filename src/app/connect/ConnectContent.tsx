"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/utils";
import { Globe, Phone, Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export function ConnectContent() {
  const whatsappMessage = "Hi AEXYL, I found you through your business card and would like to know more about your services.";
  
  const links = [
    {
      title: "VISIT WEBSITE",
      href: "https://aexyl.in",
      icon: <Globe className="w-5 h-5 shrink-0" />,
      primary: true,
      accent: false,
    },
    {
      title: "WHATSAPP",
      href: waLink(whatsappMessage),
      icon: <MessageCircle className="w-5 h-5 shrink-0" />,
      primary: false,
      accent: false,
    },
    {
      title: "INSTAGRAM",
      href: "https://www.instagram.com/aexyl.in",
      icon: <InstagramIcon />,
      primary: false,
      accent: false,
    },
    {
      title: "CALL AEXYL",
      href: "tel:+918724029014",
      icon: <Phone className="w-5 h-5 shrink-0" />,
      primary: false,
      accent: false,
    },
    {
      title: "EMAIL AEXYL",
      href: "mailto:aexyl.in@gmail.com?subject=Business%20Inquiry",
      icon: <Mail className="w-5 h-5 shrink-0" />,
      primary: false,
      accent: false,
    },
    {
      title: "BOOK A FREE STRATEGY CALL",
      href: "tel:+918724029014",
      icon: <Calendar className="w-5 h-5 shrink-0" />,
      primary: true,
      accent: true,
    }
  ];

  return (
    <div className="min-h-[100dvh] bg-[#050505] text-white flex flex-col relative overflow-hidden font-sans selection:bg-[#FF3B4A]/30">
      
      {/* Background Noise/Grain */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Signature AEXYL Orb */}
      <motion.div 
        animate={{
          x: ["-3%", "3%", "-3%"],
          y: ["-3%", "3%", "-3%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[450px] h-[280px] md:h-[450px] rounded-[100%] bg-[#FF3B4A] opacity-[0.14] blur-[80px] md:blur-[100px] pointer-events-none z-0"
      />
      
      <main className="flex-1 w-full max-w-[92%] sm:max-w-md md:max-w-lg mx-auto py-12 md:py-16 flex flex-col items-center relative z-10 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))]">
        
        {/* Micro brand detail */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-2 mb-8 md:mb-10 px-4 py-1.5 rounded-full bg-white/[0.025] border border-white/[0.04] backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF3B4A] shadow-[0_0_8px_rgba(255,59,74,0.6)] animate-pulse" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/60 font-mono">
            AEXYL / CONNECT
          </span>
        </motion.div>

        {/* Hero Area */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-10 w-full"
        >
          <div className="text-3xl md:text-[32px] font-bold tracking-[0.15em] text-[#FF3B30] uppercase mb-8">
            AEXYL.IN
          </div>
          
          <h1 className="text-[28px] md:text-3xl font-black tracking-[-0.03em] leading-[1.1] text-white mb-6 max-w-[95%]">
            THE GROWTH INFRASTRUCTURE<br />BEHIND MODERN BUSINESSES.
          </h1>
          
          <p className="text-[#888] text-[15px] font-medium leading-[1.6] max-w-[85%] md:max-w-[75%]">
            We build websites, AI systems, automation, and growth infrastructure that help businesses operate more efficiently and grow sustainably.
          </p>
        </motion.div>

        {/* Central Glass Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col gap-3.5 p-4 sm:p-5 md:p-6 rounded-[24px] bg-white/[0.035] border border-white/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-[24px] relative overflow-hidden"
        >
          {/* Subtle internal top highlight for glass effect */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />

          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + (idx * 0.08), 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                scale: 1.015,
                backgroundColor: link.primary 
                  ? "rgba(255,255,255,0.09)" 
                  : "rgba(255,255,255,0.05)",
                borderColor: link.accent 
                  ? "rgba(255,59,74,0.4)" 
                  : link.primary 
                    ? "rgba(255,255,255,0.18)" 
                    : "rgba(255,255,255,0.12)"
              }}
              whileTap={{ scale: 0.985 }}
              className={`group relative w-full h-[60px] md:h-[64px] px-5 rounded-[16px] flex items-center justify-between text-[13px] md:text-[14px] font-semibold tracking-wide transition-colors duration-300 border overflow-hidden ${
                link.primary 
                  ? "bg-white/[0.06] text-white border-white/[0.10]" 
                  : "bg-white/[0.015] text-white/90 border-white/[0.04]"
              }`}
            >
              {/* Internal glow for accent button */}
              {link.accent && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B4A]/0 via-[#FF3B4A]/[0.05] to-[#FF3B4A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
              
              <div className="flex items-center gap-4 relative z-10">
                <span className={`flex items-center justify-center transition-colors duration-300 ${
                  link.accent ? "text-[#FF3B4A]" : link.primary ? "text-white" : "text-white/50 group-hover:text-white/90"
                }`}>
                  {link.icon}
                </span>
                <span className="mt-[2px]">{link.title}</span>
              </div>
              
              <div 
                className={`relative z-10 transition-all duration-300 transform group-hover:translate-x-1 ${
                  link.accent ? "text-[#FF3B4A]" : "text-white/20 group-hover:text-white/60"
                }`}
              >
                <ArrowRight className="w-[18px] h-[18px]" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </main>

      {/* Minimal Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="w-full text-center pb-8 pt-4 relative z-10"
      >
        <div className="text-[12px] md:text-[13px] text-white/30 font-medium px-4 leading-[1.6]">
          <span className="text-white/50 font-bold tracking-wider uppercase">AEXYL.IN</span>
          <br />
          <span className="text-[11px] md:text-[12px]">Websites • AI Systems • Automation • Growth</span>
          <br />
          <span className="mt-4 block text-[10px] uppercase font-mono tracking-widest text-white/20">
            &copy; {new Date().getFullYear()} AEXYL
          </span>
        </div>
      </motion.footer>
    </div>
  );
}
