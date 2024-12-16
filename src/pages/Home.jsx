import About from '../components/About';
import { BackgroundBeamsDemo } from '../components/BackgroundBeamsDemo';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Integration from '../components/Integration';
import { SmoothScrollHero } from '../components/SmoothScrollHero';
import { TimelineDemo } from '../components/TimelineDemo';
import { BackgroundBeams } from '../components/ui/background-beams';

export const Home = () => {
  return (
    <div className=''>
      <SmoothScrollHero />
  
        <Hero />
    
      <About />
      <Integration />
      <TimelineDemo />
      {/* <Contact /> */}
      <BackgroundBeamsDemo />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
};
