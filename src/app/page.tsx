import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { KeyBenefits } from '@/components/KeyBenefits';
import { OurProducts } from '@/components/OurProducts';
import { GetInvolved } from '@/components/GetInvolved';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--harvest-cream)' }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <KeyBenefits />
      <OurProducts />
      <GetInvolved />
      <Footer />
      <Toaster />
    </div>
  );
}

