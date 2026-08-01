"use client";

const BUSINESS_TYPES = [
  "Gyms", "Restaurants", "Salons", "Clinics", "Coaches", "Creators",
  "Local Businesses", "Startups", "Retailers", "Consultants", "Real Estate", "Law Firms"
];

const APPROACH_STEPS = [
  {
    number: "01",
    description: "Understand the business goals and current operations."
  },
  {
    number: "02",
    description: "Design the digital system — website, automation, and AI."
  },
  {
    number: "03",
    description: "Build and integrate all components end-to-end."
  },
  {
    number: "04",
    description: "Launch, optimize, and ensure everything runs efficiently."
  }
];

export function Approach() {
  return (
    <section id="approach" className="w-full bg-black py-32">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-40">
        
        {/* WHO WE HELP */}
        <div>
          <div className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
          <div className="text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase mb-10">
            Who We Help
          </div>
          <h2 className="text-[50px] md:text-[64px] lg:text-[76px] font-black tracking-[-0.03em] leading-[0.95] text-white mb-16">
            Built for every<br />
            kind of business.
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {BUSINESS_TYPES.map((type, i) => (
              <div 
                key={i}
                className="px-6 py-2.5 rounded-full border border-[#222] text-[#AAA] text-sm font-medium hover:bg-[#111] hover:text-white transition-colors cursor-default"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* OUR APPROACH */}
        <div>
          <div className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
          <div className="text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase mb-16">
            Our Approach
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 md:gap-24">
            
            {/* Left Side */}
            <div className="max-w-md">
              <h3 className="text-[40px] md:text-[50px] font-black leading-[0.95] tracking-tight text-white mb-8">
                We don't sell<br />
                marketing tricks.
              </h3>
              <p className="text-[#888] text-[15px] leading-relaxed">
                We build websites, AI systems, and automation infrastructure 
                that help businesses operate more efficiently and grow 
                sustainably.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col">
              {APPROACH_STEPS.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-8 py-6 ${index === 0 ? 'pt-0' : ''} ${index !== APPROACH_STEPS.length - 1 ? 'border-b border-[#111]' : ''}`}
                >
                  <span className="text-[#FF3B30] text-[13px] font-bold tracking-widest mt-1">
                    {step.number}
                  </span>
                  <p className="text-[#999] text-[15px] font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
