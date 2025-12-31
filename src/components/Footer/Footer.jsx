import React from "react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Anaylyze", href: "#analyze" },
      { name: "Pricing", href: "#pricing" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/FahadBinQaiser" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/fahaddev/" },
    { name: "Instagram", href: "https://www.instagram.com/fahad_devx/" },
  ];

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-black text-white">Sensiya</span>
            </div>

            <p className="text-zinc-400 mb-6 text-base leading-relaxed max-w-sm">
              We audit SaaS landing pages and show you exactly what's killing
              your conversions.
            </p>

            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-[#D12B27] transition-colors duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <p className="text-zinc-500 text-sm text-center">
            © 2025 Sensiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
