import useSmoothScroll from "./hooks/useSmoothScroll";
import useTheme from "./hooks/useTheme";
import Preloader from "./components/Preloader";
import CursorDot from "./components/CursorDot";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Collections from "./components/Collections";
import UseCases from "./components/UseCases";
import ReferEarn from "./components/ReferEarn";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function App() {
  useSmoothScroll();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="grain-overlay" />
      <Preloader />
      <CursorDot />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ValueProps />
        <Marquee />
        <About />
        <Collections />
        <UseCases />
        <ReferEarn />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
