"use client";

import { Check } from "lucide-react";

const WEBSITE_FEATURES = [
  "Premium Responsive Website",
  "Mobile-First Design",
  "Domain Connection",
  "Secure SSL & HTTPS Setup",
  "Contact Form",
  "WhatsApp Integration",
  "Google Maps Integration",
  "Basic On-Page SEO",
  "Performance Optimization",
  "Speed Optimization",
];

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "₹699",
    description: "Essential systems for businesses getting online.",
    features: [
      "Secure Website Hosting",
      "Monthly Website Content Updates",
      "Website Maintenance",
      "Local SEO",
      "Free SSL Certificate",
      "Security Monitoring",
      "Email Support"
    ],
    highlighted: false
  },
  {
    name: "Growth",
    price: "₹1,299",
    description: "The complete growth stack for businesses ready to scale.",
    features: [
      "Everything in Starter",
      "Google Business Profile Management",
      "Local SEO Optimization",
      "8 Social Media Posts / Month",
      "WhatsApp Business Optimization",
      "Monthly Performance Report",
      "Priority Support"
    ],
    highlighted: true
  },
  {
    name: "Scale",
    price: "₹2,499",
    description: "Advanced automation and your outsourced digital growth system.",
    features: [
      "Everything in Growth",
      "15 Social Media Posts / Month",
      "Unlimited Minor Website Updates",
      "AI Chatbot Setup & Maintenance",
      "Facebook & Instagram Ad Management",
      "Advanced SEO Optimization",
      "Lead Capture Optimization",
      "24/7 Dedicated Support"
    ],
    highlighted: false
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-32 w-full bg-black">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="w-8 h-[2px] bg-[#FF3B30] mb-4" />
          <div className="text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase mb-10">
            Our Packages
          </div>
          <h2 className="text-[50px] md:text-[64px] lg:text-[76px] font-black tracking-[-0.03em] leading-[0.95] text-white max-w-3xl">
            Everything you need<br />
            to grow online.
          </h2>
        </div>

        {/* Website Launch Package Card */}
        <div className="bg-[#0A0A0A] border border-[#111] rounded-2xl p-8 md:p-12 mb-20 max-w-4xl mx-auto shadow-2xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-4 bg-[#FF3B30] rounded-full" />
            <span className="text-[11px] font-bold text-[#555] tracking-[0.2em] uppercase">Website Launch Package</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-10">
            {WEBSITE_FEATURES.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#FF3B30] shrink-0" />
                <span className="text-[#888] text-[13px] font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-white text-black py-4 rounded-full font-bold text-sm hover:bg-white/90 transition-colors">
            Launch My Website
          </button>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, i) => (
            <div 
              key={i} 
              className={`relative bg-[#0A0A0A] rounded-2xl p-8 flex flex-col ${
                tier.highlighted ? 'border border-[#FF3B30] shadow-[0_0_30px_rgba(255,59,48,0.1)]' : 'border border-[#111]'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF3B30] text-white text-[9px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full z-10">
                  Most Popular
                </div>
              )}

              <h3 className="text-sm font-semibold text-[#888] mb-4">{tier.name}</h3>
              
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-black text-white">{tier.price}</span>
                <span className="text-[#555] text-xs font-medium mb-1">/month</span>
              </div>

              <p className="text-[#777] text-[13px] font-medium leading-relaxed min-h-[50px] mb-8">
                {tier.description}
              </p>

              <button 
                className={`w-full py-3 rounded-full text-sm font-bold mb-10 transition-colors ${
                  tier.highlighted 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-transparent border border-[#333] text-white hover:bg-[#111]'
                }`}
              >
                Choose {tier.name} &rarr;
              </button>

              <div className="flex flex-col gap-4 mt-auto">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                    <span className="text-[#999] text-[13px] font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
