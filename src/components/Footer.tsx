import logo from "../assets/logoTop.png";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white pt-24 pb-12 mt-10">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16 lg:mb-20">
          
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <p className="text-[0.85rem] text-[#8c8c8c] leading-relaxed max-w-xs pr-4">
              Africa's innovation infrastructure builder. Pan-African by design, global in ambition.
            </p>
          </div>

          {/* G-iHub Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">G-IHUB</h3>
            <nav className="flex flex-col space-y-4 text-[0.85rem]">
              <a href="/about" className="text-[#8c8c8c] hover:text-white transition-colors">About Us</a>
              <a href="/leadership" className="text-[#8c8c8c] hover:text-white transition-colors">Leadership</a>
              <a href="/mission" className="text-[#8c8c8c] hover:text-white transition-colors">Mission & Vision</a>
              <a href="https://genomacholdings.com" target="_blank" rel="noopener noreferrer" className="text-[#8c8c8c] hover:text-white transition-colors">Genomac Holdings</a>
            </nav>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">PROGRAMS</h3>
            <nav className="flex flex-col space-y-4 text-[0.85rem]">
              <a href="/founders" className="text-[#8c8c8c] hover:text-white transition-colors">Founders Challenge</a>
              <a href="/incubation" className="text-[#8c8c8c] hover:text-white transition-colors">Incubation</a>
              <a href="/founders" className="text-[#8c8c8c] hover:text-white transition-colors">Founders Program</a>
              <a href="/university" className="text-[#8c8c8c] hover:text-white transition-colors">University programs</a>
            </nav>
          </div>

          {/* Platforms Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">PLATFORMS</h3>
            <nav className="flex flex-col space-y-4 text-[0.85rem]">
              <a href="https://startupverse.app" target="_blank" rel="noopener noreferrer" className="text-[#8c8c8c] hover:text-white transition-colors">StartupVerse</a>
              <a href="https://omicsboard.com" target="_blank" rel="noopener noreferrer" className="text-[#8c8c8c] hover:text-white transition-colors">OmicsBoard</a>
              <a href="https://certifyer.online" target="_blank" rel="noopener noreferrer" className="text-[#8c8c8c] hover:text-white transition-colors">Certifyer</a>
              <a href="https://healthmania.app" target="_blank" rel="noopener noreferrer" className="text-[#8c8c8c] hover:text-white transition-colors">Healthmania</a>
            </nav>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">CONNECT</h3>
            <nav className="flex flex-col space-y-4 text-[0.85rem]">
              <a href="/partners" className="text-[#8c8c8c] hover:text-white transition-colors">Partner With Us</a>
              <a href="/research" className="text-[#8c8c8c] hover:text-white transition-colors">Research</a>
              <a href="/events" className="text-[#8c8c8c] hover:text-white transition-colors">Events</a>
              <a href="/contact" className="text-[#8c8c8c] hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

        </div>

        {/* Bottom Section - Divider & Copyright */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.8rem] text-[#8c8c8c]">
            © 2026 Genomac Innovation Hub. A Genomac Holdings company.
          </p>

          <div className="flex items-center gap-8">
            <a href="/terms" className="text-[0.8rem] text-[#8c8c8c] hover:text-white transition-colors">Terms of Service</a>
            <a href="/privacy" className="text-[0.8rem] text-[#8c8c8c] hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
