import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import { Footer, MobileCTA } from "./components/Footer";
import ScrollRuler from "./components/ScrollRuler";
import { T } from "./theme";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div style={{ background: T.bg, color: T.ink900 }}>
      <ScrollRuler />
      <Header />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </div>
  );
}
