import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-[#4fbf8b]/10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Logo + About */}
        <div className="flex-1 min-w-[220px]">
          <img
            className="w-28 md:w-32"
            src={assets.logo}
            alt="GreenCart Logo"
          />
          <p className="max-w-[410px] mt-6 text-sm md:text-base leading-relaxed">
            We deliver fresh groceries by thousands, we aim to make your
            shopping experience simple and affordable.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-8">
          {footerLinks.map((section, index) => (
            <div key={index} className="min-w-[120px]">
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:text-[#4fbf8b] transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <p className="py-4 text-center text-xs sm:text-sm md:text-base text-gray-500/80">
        © {new Date().getFullYear()} GreenCart. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
