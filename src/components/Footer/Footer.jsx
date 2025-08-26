import React from "react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Templates", href: "#" },
      { name: "API", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Tutorials", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/FahadBinQaiser" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/fahaddev/" },
    { name: "Instagram", href: "https://www.instagram.com/pookieboii_x/" },
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-r ibm-plex-sans from-indigo-50 to-purple-50 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-4xl bricolage-grotesque text-gray-900">
                Sensiya
              </span>
            </div>

            <p className="text-gray-700 mb-6 text-[14px]">
              An intelligent design platform built for speed, clarity, powered
              by AI to accelerate every creative workflow
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-900 bricolage-grotesque text-lg hover:underline"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 bricolage-grotesque text-3xl mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 text-sm hover:border-b-2 hover:text-black transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-900 text-sm">
            © 2024 Sensiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
