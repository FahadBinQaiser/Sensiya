import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/FahadBinQaiser" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/fahaddev/" },
    { name: "Instagram", href: "https://www.instagram.com/fahad_devx/" },
  ];

  return (
    <footer className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <span className="text-5xl sm:text-7xl font-black text-white">
              Sensiya
            </span>
          </div>

          <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
            We audit SaaS landing pages and show you exactly what's killing your
            conversions.
          </p>

          <div className="flex gap-8 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 text-lg hover:text-[#D12B27] transition-colors duration-200"
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className="border-t border-zinc-800 pt-8 w-full">
            <p className="text-zinc-500 text-sm text-center">
              © 2025 Sensiya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
