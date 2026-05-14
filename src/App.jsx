import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import Hero from './sections/Hero';
import Products from './sections/Products';
import WhyMarsal from './sections/WhyMarsal';
import Showcase from './sections/Showcase';
import Usage from './sections/Usage';
import Distributors from './sections/Distributors';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyMarsal />
        <Showcase />
        <Usage />
        <Distributors />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
