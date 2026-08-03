"use client";

import { motion } from "framer-motion";

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
    <section id="approach" className="w-full bg-black py-20 md:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-6 flex flex-col gap-20 md:gap-40">
        
        {/* WHO WE HELP */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
            <div className="text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase mb-10">
              Who We Help
            </div>
            <h2 className="text-[46px] md:text-[64px] lg:text-[76px] font-black tracking-[-0.03em] leading-[0.95] text-white mb-12 md:mb-16">
              Built for every<br />
              kind of business.
            </h2>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            {BUSINESS_TYPES.map((type, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="px-5 md:px-6 py-2.5 rounded-full border border-[#222] text-[#AAA] text-[15px] md:text-sm font-medium hover:bg-[#111] hover:text-white transition-colors cursor-default"
              >
                {type}
              </motion.div>
            ))}
          </div>
        </div>

        {/* OUR APPROACH */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
            <div className="text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase mb-16">
              Our Approach
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 md:gap-24">
            
            {/* Left Side */}
            <motion.div
              className="max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-[38px] md:text-[50px] font-black leading-[0.95] tracking-tight text-white mb-6 md:mb-8">
                We don&apos;t sell<br />
                marketing tricks.
              </h3>
              <p className="text-[#888] text-[16px] md:text-[15px] leading-relaxed md:leading-relaxed pr-4 md:pr-0">
                We build websites, AI systems, and automation infrastructure 
                that help businesses operate more efficiently and grow 
                sustainably.
              </p>
            </motion.div>

            {/* Right Side */}
            <div className="flex flex-col">
              {APPROACH_STEPS.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-start gap-8 py-6 ${index === 0 ? 'pt-0' : ''} ${index !== APPROACH_STEPS.length - 1 ? 'border-b border-[#111]' : ''}`}
                >
                  <span className="text-[#FF3B30] text-[14px] md:text-[13px] font-bold tracking-widest mt-1">
                    {step.number}
                  </span>
                  <p className="text-[#999] text-[16px] md:text-[15px] font-medium leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
