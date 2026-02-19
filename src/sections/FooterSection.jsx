import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section md:mt-52 pb-24">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>

        {/* Refined links section with better spacing */}
        <div className="mt-40 md:px-16 px-5 flex gap-16 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          {/* Links container with even column distribution */}
          <div className="flex items-start md:gap-20 gap-8">
            {/* Column 1 - Single item, aligned top */}
            <div className="min-w-30">
              <p className="hover:text-light-brown transition-colors cursor-pointer hidden md:block">
                SPYLT Flavors
              </p>
            </div>

            {/* Column 2 - Two items with vertical spacing */}
            <div className="flex flex-col gap-3 min-w-35 md:ml-20">
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

            {/* Column 3 - Two items with vertical spacing */}
            <div className="flex flex-col gap-3 min-w-30">
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

          {/* Newsletter/description text - better max-width and alignment */}
          <div className="md:max-w-sm md:text-right mt-12">
            <p className="leading-relaxed">
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
          </div>
        </div>

        {/* Refined copyright section */}
        <div className="copyright-box md:px-16 px-5">
          <p className="text-sm opacity-70">
            Copyright © 2025 Spylt - All Rights Reserved
          </p>

          <div className="flex items-center gap-8">
            <p className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              Privacy Policy
            </p>
            <span className="w-px h-4 bg-milk/30"></span>
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
