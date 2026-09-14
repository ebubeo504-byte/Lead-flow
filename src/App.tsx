import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import DashboardPreview from "@/components/sections/DashboardPreview";
import Demo from "@/components/sections/Demo";
import UseCases from "@/components/sections/UseCases";
import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <HowItWorks />
        <Features />
        <DashboardPreview />
        <Demo />
        <UseCases />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
