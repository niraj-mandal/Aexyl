import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// WhatsApp
const WA_NUMBER = "918724029014";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_LINKS = {
  bookFreeCall: waLink(
`Hi Aexyl 👋

I'm interested in booking a free consultation for my business.

Business Name:
Industry:
Location:

I'd like to know how Aexyl can help me grow my business through branding, website development, social media, and digital marketing.

Please let me know your availability.`
  ),

  getStarted: waLink(
`Hi Aexyl 👋

I'd like to get started with your services.

Please guide me through the next steps and help me choose the right package for my business.`
  ),

  viewPackages: waLink(
`Hi Aexyl,

I'm interested in learning more about your pricing and packages.

Could you recommend the best option for my business?`
  ),

  startYourProject: waLink(
`Hi Aexyl 👋

I have a project I'd like to discuss.

Business Name:
Industry:
Current Website (if any):

I'm looking for help with growing my business online.`
  ),

  contactUs: waLink(
`Hi Aexyl 👋

I came across your website and would like to discuss my business requirements.

Please get back to me.`
  ),

  workWithUs: waLink(
`Hi Aexyl 👋

I'd like to work with Aexyl.

Please tell me about your services and how we can get started.`
  ),

  requestAQuote: waLink(
`Hi Aexyl 👋

I'd like a custom quotation for my business.

Business Name:
Industry:
Services Required:

Please provide an estimate.`
  ),

  getAFreeAudit: waLink(
`Hi Aexyl 👋

I'd like to receive a free digital audit for my business.

Business Name:
Website:
Instagram:

Looking forward to your recommendations.`
  ),

  socialMediaPackage: waLink(
`Hi Aexyl 👋

I'm interested in your Social Media Growth Package.

Please share pricing, deliverables, and the onboarding process.`
  ),

  websitePackage: waLink(
`Hi Aexyl 👋

I'm interested in getting a premium website designed for my business.

Please share the process, timeline, and pricing.`
  ),

  brandingPackage: waLink(
`Hi Aexyl 👋

I'd like to discuss branding services for my business.

Please share how the branding process works.`
  ),

  seoPackage: waLink(
`Hi Aexyl 👋

I'm interested in improving my Google rankings through SEO.

Please tell me more about your SEO services.`
  ),

  footerCta: waLink(
`Hi Aexyl 👋

I found your website and would love to discuss my business.

Please let me know how we can get started.`
  ),

  packageInquiry: (name: string) => waLink(
`Hi Aexyl 👋

I'm interested in your ${name} package.

Could you recommend the best option for my business and share the details?`
  ),
};

export function scrollToSection(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
