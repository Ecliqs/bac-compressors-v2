import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import TrustMarkers from '@/components/sections/TrustMarkers';
import Products from '@/components/sections/Products';
import Comparison from '@/components/sections/Comparison';
import Industries from '@/components/sections/Industries';
import ManufacturingStrength from '@/components/sections/ManufacturingStrength';
import WhyChoose from '@/components/sections/WhyChoose';
import Testimonials from '@/components/sections/Testimonials';
import LeadForm from '@/components/sections/LeadForm';
import FinalCTA from '@/components/sections/FinalCTA';
// import AIAdvisor from '@/components/sections/AIAdvisor';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/ui/StickyCTA';
import { Toaster } from '@/components/ui/toaster';
import LeadPopup from "@/components/LeadPopup"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustMarkers />
      <Products />
      {/* <AIAdvisor /> */}
      <Comparison />
      <Industries />
      <ManufacturingStrength />
      <WhyChoose />
      <Testimonials />
      <LeadForm />
      <FinalCTA />
      <Footer />
      <StickyCTA />
      <Toaster />
      <LeadPopup/> 
    </main>
  );
}
