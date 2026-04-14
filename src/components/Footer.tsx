import logo from "../assets/logoTop.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white text-[12px] mt-[10px]">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Newsletter Section - Top */}

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Logo Section */}
            <div className="lg:col-span-1">
              <div className="mb-3">
                <div className="flex items-center">
                  <img src={logo} alt="Logo" className="w-[4rem] md:w-[5rem]" />
                </div>
              </div>

              <div className="text-xs font-bold text-white/80 space-y-1">
                <p>
                  Africa's innovation infrastructure builder. Pan-African by
                  design, global in ambition.
                </p>
              </div>
            </div>

            {/* G-iHub Links */}
            <div>
              <h3 className="font-semibold mb-4">G-iHUB</h3>
              <nav className="space-y-3">
                <a
                  href="/about"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/leadership"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Leadership
                </a>
                <a
                  href="/mission"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Mission & Vision
                </a>
                <a
                  href="https://genomacholdings.com"
                  target="_blank"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Genomac Holdings
                </a>
              </nav>
            </div>

            {/* Programs Links */}
            <div>
              <h3 className="font-semibold text-md mb-4">PROGRAMS</h3>
              <nav className="space-y-3">
                <a
                  href="/founders"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Founders Challenge
                </a>
                <a
                  href="/incubation"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Incubation
                </a>
                <a
                  href="/founders"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Founders Program
                </a>
                <a
                  href="/university"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  University Programs
                </a>
              </nav>
            </div>

            {/* Platforms Links */}
            <div>
              <h3 className="font-semibold text-md mb-4">PLATFORMS</h3>
              <nav className="space-y-3">
                <a
                  href="https://startupverse.app"
                  target="_blank"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  StartupVerse
                </a>
                <a
                  href="https://omicsboard.com"
                  target="_blank"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  OmicsBoard
                </a>
                <a
                  href="https://certifyer.online"
                  target="_blank"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Certifyer
                </a>
                <a
                  href="https://healthmania.app"
                  target="_blank"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Healthmania
                </a>
              </nav>
            </div>

            {/* Connect with us */}
            <div>
              <h3 className="font-semibold text-md mb-4">CONNECT</h3>
              <nav className="space-y-3">
                <a
                  href="/partners"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Partner with us
                </a>
                <a
                  href="/research"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Research
                </a>
                <a
                  href="/events"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Events
                </a>
                <a
                  href="/contact"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Copyright and Compliance */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-xs text-white/60">
                  ©2025 G-iHub Technologies Limited. A Genomac Holdings Company. All rights reserved.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <a href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
                <a href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
