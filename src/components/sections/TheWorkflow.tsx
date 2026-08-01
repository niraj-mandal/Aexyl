"use client";

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business, goals, current challenges, and growth stage.",
  },
  {
    number: "02",
    title: "Growth Strategy",
    description: "A custom digital blueprint is created — covering your website, automation, and AI systems.",
  },
  {
    number: "03",
    title: "Build & Automation",
    description: "We build all components end-to-end: website, AI agents, and workflow automation.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Everything goes live. We handle setup, testing, and ensure a smooth deployment.",
  },
  {
    number: "05",
    title: "Optimization",
    description: "Ongoing monitoring, improvements, and scaling as your business grows.",
  },
];

export function TheWorkflow() {
  return (
    <section id="the-workflow" className="w-full bg-black py-32">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-24">
          <div className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
          <div className="text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase mb-10">
            The Workflow
          </div>
          <h2 className="text-[50px] md:text-[64px] lg:text-[76px] font-black tracking-[-0.03em] leading-[0.95] text-white">
            How Aexyl Works
          </h2>
        </div>

        {/* Timeline List */}
        <div className="max-w-3xl">
          <div className="relative">
            {/* The vertical line that connects the circles */}
            <div className="absolute left-[23px] top-4 bottom-12 w-[1px] bg-[#111] md:left-[27px]" />
            
            <div className="flex flex-col gap-16">
              {WORKFLOW_STEPS.map((step, index) => (
                <div key={index} className="relative flex items-start gap-8 md:gap-12 group">
                  
                  {/* Circle Number */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-[54px] md:h-[54px] rounded-full border border-[#222] bg-[#0A0A0A] shrink-0 group-hover:border-[#333] transition-colors duration-300">
                    <span className="text-[#FF3B30] text-[13px] md:text-sm font-bold tracking-widest">
                      {step.number}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="pt-2">
                    <h3 className="text-2xl md:text-[28px] font-bold text-white mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#777] text-[15px] md:text-base font-medium leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
