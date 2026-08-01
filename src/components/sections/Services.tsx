"use client";

import { Cpu, Layers, Zap, BarChart3 } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="w-full border-t border-[#111] bg-[#050505]">
      <div className="w-full max-w-[1400px] mx-auto pt-24 pb-20">
        <div className="text-center mb-16 text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase">
          Why Businesses Choose Aexyl.in
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {/* Feature 1 */}
          <div className="flex flex-col items-start p-10 lg:border-r border-[#111]">
            <Cpu className="w-5 h-5 text-[#FF3B30] mb-6" />
            <h3 className="text-[15px] font-bold text-white mb-3">Modern Technology</h3>
            <p className="text-[#888] text-[13px] leading-relaxed">
              AI-powered systems built for today's businesses.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start p-10 lg:border-r border-[#111]">
            <Layers className="w-5 h-5 text-[#FF3B30] mb-6" />
            <h3 className="text-[15px] font-bold text-white mb-3">Custom Solutions</h3>
            <p className="text-[#888] text-[13px] leading-relaxed">
              Every system is tailored to your specific business needs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start p-10 lg:border-r border-[#111]">
            <Zap className="w-5 h-5 text-[#FF3B30] mb-6" />
            <h3 className="text-[15px] font-bold text-white mb-3">Automation First</h3>
            <p className="text-[#888] text-[13px] leading-relaxed">
              Reduce manual work and improve operational efficiency.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-start p-10">
            <BarChart3 className="w-5 h-5 text-[#FF3B30] mb-6" />
            <h3 className="text-[15px] font-bold text-white mb-3">Long-Term Growth</h3>
            <p className="text-[#888] text-[13px] leading-relaxed">
              Infrastructure designed to support your future growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
