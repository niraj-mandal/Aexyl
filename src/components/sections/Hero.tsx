"use client";

import { Globe, Bot, Zap, TrendingUp, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
        
        {/* Left Text Content */}
        <div className="flex flex-col items-start text-left">
          <div className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
          <div className="text-[11px] font-semibold text-[#555] tracking-[0.2em] mb-12">
            JORHAT · ASSAM · NORTHEAST INDIA
          </div>

          <h1 className="text-[72px] lg:text-[100px] xl:text-[120px] font-black leading-[0.88] tracking-[-0.04em] text-white mb-8">
            The Growth<br />
            Infrastructure<br />
            Behind<br />
            Modern<br />
            <span className="text-gradient">Businesses.</span>
          </h1>

          <p className="text-[#888] text-[15px] max-w-[420px] leading-relaxed mb-10">
            We build websites, AI systems, and automation infrastructure that help businesses operate more efficiently and grow sustainably.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-white/90 transition-colors">
              Book Free Strategy Call
            </button>
            <button className="bg-transparent border border-[#333] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#111] transition-colors">
              See Packages
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-[#555] text-[11px] font-semibold tracking-wide">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B30]" /> Websites</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B30]" /> AI Agents</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B30]" /> Automation</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B30]" /> Growth Systems</span>
          </div>
        </div>

        {/* Right Dashboard UI */}
        <div className="relative">
          <div className="w-full bg-[#0B0B0B] border border-[#1A1A1A] rounded-2xl p-6 shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
              </div>
              <div className="text-[10px] font-bold tracking-widest text-[#555]">
                AEXLY SYSTEMS
              </div>
            </div>

            {/* Grid Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Card 1 */}
              <div className="bg-[#050505] border border-[#111] p-5 rounded-xl">
                <Globe className="w-5 h-5 text-[#FF3B30] mb-4" />
                <div className="text-sm font-bold text-white mb-2">Website Systems</div>
                <div className="text-[11px] text-[#777] leading-relaxed">
                  Fast, modern websites built for trust and conversion.
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#050505] border border-[#111] p-5 rounded-xl">
                <Bot className="w-5 h-5 text-[#FF3B30] mb-4" />
                <div className="text-sm font-bold text-white mb-2">AI Agents</div>
                <div className="text-[11px] text-[#777] leading-relaxed">
                  Automate inquiries, customer support, and follow-ups.
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-[#050505] border border-[#111] p-5 rounded-xl">
                <Zap className="w-5 h-5 text-[#FF3B30] mb-4" />
                <div className="text-sm font-bold text-white mb-2">Automation Workflows</div>
                <div className="text-[11px] text-[#777] leading-relaxed">
                  Eliminate repetitive tasks and streamline operations.
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="bg-[#050505] border border-[#111] p-5 rounded-xl">
                <TrendingUp className="w-5 h-5 text-[#FF3B30] mb-4" />
                <div className="text-sm font-bold text-white mb-2">Growth Infrastructure</div>
                <div className="text-[11px] text-[#777] leading-relaxed">
                  The systems that help businesses scale efficiently.
                </div>
              </div>
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
      </div>
    </section>
  );
}
