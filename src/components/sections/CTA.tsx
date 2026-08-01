"use client";

export function CTA() {
  return (
    <section className="w-full bg-black py-32 flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Red Dash */}
        <div className="w-8 h-[2px] bg-[#FF3B30] mb-8" />
        
        {/* Title */}
        <h2 className="text-[50px] md:text-[72px] lg:text-[84px] font-black tracking-[-0.03em] leading-[0.95] text-white mb-6">
          Ready To Build Your<br />
          Growth System?
        </h2>
        
        {/* Subtitle */}
        <p className="text-[#888] text-[15px] md:text-lg font-medium leading-relaxed max-w-2xl mb-12">
          Let's build the websites, automation, and infrastructure behind your<br className="hidden md:block" />
          next stage of growth.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-white/90 transition-colors">
            Book Free Strategy Call
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-[#333] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#111] transition-colors">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
