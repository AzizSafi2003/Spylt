// src/App.jsx
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLenis } from "./context/SmoothScroll";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import Preloader from "./components/Preloader";

// Register GSAP plugins globally ONCE
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useLenis();

  // Sync Lenis with ScrollTrigger globally
  useEffect(() => {
    // Only initialize Lenis after preloader completes
    if (isLoading) return;

    const lenis = lenisRef?.current;
    if (!lenis) return;

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker for smooth animation frame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after content is visible
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [lenisRef, isLoading]);

  // Handle preloader complete
  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Preloader - shown until loading completes */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main content - hidden until preloader finishes */}
      <main
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"
        }`}
      >
        <Navbar />
        <HeroSection />
        <MessageSection />
        <FlavorSection />
        <NutritionSection />
        <div>
          <BenefitSection />
          <TestimonialSection />
        </div>
        <FooterSection />
      </main>
    </>
  );
};

export default App;
