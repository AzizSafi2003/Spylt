import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section md:mt-52 mt-20 pb-24">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] md:h-auto h-auto relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10 relative">
          <h1 className="general-title text-center text-milk py-5 md:text-[6vw] text-[8vw] leading-none">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 left-0 w-full h-auto object-contain opacity-60"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 left-0 w-full h-auto object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-10">
          <a href="#" className="social-btn">
            <img src="./images/yt.svg" alt="YouTube" />
          </a>
          <a href="#" className="social-btn">
            <img src="./images/insta.svg" alt="Instagram" />
          </a>
          <a href="#" className="social-btn">
            <img src="./images/tiktok.svg" alt="TikTok" />
          </a>
        </div>

        {/* Links section - fully responsive */}
        <div className="mt-20 md:mt-40 md:px-16 px-6 flex xl:flex-row flex-col xl:gap-16 gap-10 justify-between text-milk font-paragraph md:text-lg text-base font-medium relative z-10">
          {/* Links container */}
          <div className="flex md:items-start items-center md:justify-start justify-center md:gap-16 gap-8 md:flex-nowrap flex-wrap">
            {/* Column 1 - Hidden on mobile, visible on desktop */}
            <div className="md:block hidden min-w-30">
              <p className="hover:text-light-brown transition-colors cursor-pointer">
                SPYLT Flavors
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 md:min-w-35 min-w-25">
              <p className="hover:text-light-brown transition-colors cursor-pointer">
                Chug Club
              </p>
              <p className="hover:text-light-brown transition-colors cursor-pointer">
                Student Marketing
              </p>
              <p className="hover:text-light-brown transition-colors cursor-pointer">
                Dairy Dealers
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 md:min-w-30 min-w-25">
              <p className="hover:text-light-brown transition-colors cursor-pointer">
                Company
              </p>
              <p className="hover:text-light-brown transition-colors cursor-pointer">
                Contacts
              </p>
              <p className="hover:text-light-brown transition-colors cursor-pointer">
                Tasty Talk
              </p>
            </div>
          </div>

          {/* Newsletter text - full width on md/lg, side by side on xl */}
          <div className="xl:max-w-sm w-full xl:text-right text-center md:mt-0 mt-4">
            <p className="leading-relaxed md:text-lg text-sm">
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
          </div>
        </div>

        {/* Copyright section */}
        <div className="copyright-box md:px-16 px-5">
          <p className="text-sm opacity-70">
            Copyright © 2025 Spylt - All Rights Reserved
          </p>

          <div className="flex items-center gap-8">
            <p className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              Privacy Policy
            </p>
            <span className="w-px h-4 bg-milk/30 hidden md:block"></span>
            <p className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
