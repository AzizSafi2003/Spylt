import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(150% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(150% at 50% 50%)"
            : "circle(6% at 50% 50%)", // Start from 6% circle centered
        }}
        className="video-box"
      >
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />

        <div className="video-overlay">
          <img src="/images/circle-text.svg" alt="" className="spin-circle" />
          <div className="play-btn">
            <img src="/images/play.svg" alt="" className="play-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
