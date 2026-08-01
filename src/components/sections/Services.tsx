"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Zap, BarChart3 } from "lucide-react";

const SERVICES = [
  { Icon: Cpu, title: "Modern Technology", desc: "AI-powered systems built for today's businesses.", border: true },
  { Icon: Layers, title: "Custom Solutions", desc: "Every system is tailored to your specific business needs.", border: true },
  { Icon: Zap, title: "Automation First", desc: "Reduce manual work and improve operational efficiency.", border: true },
  { Icon: BarChart3, title: "Long-Term Growth", desc: "Infrastructure designed to support your future growth.", border: false },
];

export function Services() {
  return (
    <section id="services" className="w-full border-t border-[#111] bg-[#050505]">
      <div className="w-full max-w-[1400px] mx-auto pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase"
        >
          Why Businesses Choose Aexyl.in
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`flex flex-col items-start p-10 ${service.border ? 'lg:border-r' : ''} border-[#111] group cursor-default`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <service.Icon className="w-5 h-5 text-[#FF3B30] mb-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,59,48,0.4)]" />
              </motion.div>
              <h3 className="text-[15px] font-bold text-white mb-3">{service.title}</h3>
              <p className="text-[#888] text-[13px] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
