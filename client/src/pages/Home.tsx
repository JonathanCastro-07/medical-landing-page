import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

/**
 * Landing Page - Medical Records System
 * 
 * Design Philosophy: Medical Minimalism Contemporary
 * - Clean, professional layout with soft colors
 * - Focus on trust, security, and simplicity
 * - Generous whitespace and clear hierarchy
 * - Smooth transitions and subtle interactions
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Security />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
