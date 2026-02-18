// src/App.jsx
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLenis } from "./context/SmoothScroll";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";

// Register GSAP plugins globally ONCE
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenisRef = useLenis();

  // Sync Lenis with ScrollTrigger globally
  useEffect(() => {
    const lenis = lenisRef?.current;
    if (!lenis) return;

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker for smooth animation frame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [lenisRef]);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <div className="h-dvh" />
    </main>
  );
};

export default App;
