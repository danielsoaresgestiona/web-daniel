import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PhilosophySection from './components/PhilosophySection';
import BrandKitSection from './components/BrandKitSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: 'Raleway, sans-serif', background: '#1A1F2B' }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PhilosophySection />
        <BrandKitSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
