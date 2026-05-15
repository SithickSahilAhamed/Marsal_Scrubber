import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const WHATSAPP_NUMBER = '918870410181';

const quickLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why MARSAL', href: '#why' },
  { label: 'Usage', href: '#usage' },
  { label: 'Distributors', href: '#distributors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaWhatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp', color: 'hover:bg-green-500' },
  { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
];

function handleScroll(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#F4D000] rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-black text-gray-900 text-base">M</span>
              </div>
              <div>
                <p className="font-black text-xl leading-none">MARSAL</p>
                <p className="text-yellow-400 text-xs font-medium">Sparkle Clean in Seconds</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Professional cleaning products designed for powerful stain removal, durability, and everyday performance. Trusted by homes, hotels, and restaurants across India.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center transition-colors duration-200 ${social.color}`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Contact Us</p>
            <ul className="space-y-4">
              <li>
                <a href="tel:+918870410181" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <span className="w-8 h-8 bg-white/10 group-hover:bg-[#1D4ED8] rounded-lg flex items-center justify-center transition-colors">
                    <FiPhone size={14} />
                  </span>
                  <span className="text-sm">+91 88704 10181</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@marsal.in" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <span className="w-8 h-8 bg-white/10 group-hover:bg-[#1D4ED8] rounded-lg flex items-center justify-center transition-colors">
                    <FiMail size={14} />
                  </span>
                  <span className="text-sm">info@marsal.in</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20MARSAL!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 bg-white/10 group-hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors">
                    <FaWhatsapp size={14} />
                  </span>
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Products</p>
              <div className="space-y-1">
                {['Stainless Steel Scrubber', 'Heavy Duty Scrub Pads'].map((p) => (
                  <p key={p} className="text-gray-500 text-xs">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} MARSAL Cleaning Products. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Made with ❤️ for Indian Kitchens
          </p>
        </div>
      </div>
    </footer>
  );
}
