import { Link } from "react-router-dom";
import Logo from "../assets/Footer/Logo.png";
import {
  MailIcon,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,


} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"
const Footer = () => {
  const footerData = [
    {
      sectionTitle: "Contact",
      list: [
        {
          data: `Address C/O Dorjee Wangmu 
Khrimu, post office-kitpi, Tawang, Tawang, 
Tawang, Arunachal Pradesh, India 
Pin 790104.`,
          icon: MapPin,
        },
        { data: "thutant518@gmail.com", icon: MailIcon },
        { data: "+91 70854 87001", icon: Phone },
      ],
    },
    {
      sectionTitle: "Services",
      list: [
        { data: "Construction", link: "/services/construction" },
        { data: "Steel Furniture", link: "/services/steel-furniture" },
        { data: "Steel Fabrication", link: "/services/steel-fabrication" },
        { data: "Steel Iron", link: "/services/steel-iron" },
        { data: "Steel Iron Fabrication", link: "/services/steel-iron-fabrication" },
        { data: "Electrical Goods", link: "/services/electrical-goods" },
        { data: "Building Hardware", link: "/services/building-hardware" },
      ],
    },
    {
      sectionTitle: "Quick Links",
      list: [
        { data: "Home", link: "/" },
        { data: "About Us", link: "/about-us" },
        { data: "Contact", link: "/contact" },
      ],
    },
    {
      sectionTitle: "Resources",
      list: [
        { data: "Blog", link: "/blog" },
        { data: "Privacy Policy", link: "/privacy-policy" },
        { data: "Terms of Service", link: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, link: "/facebook" },
    { icon: Twitter, link: "/twitter" },
    { icon: Instagram, link: "/instagram" },
    { icon: FaWhatsapp, link: "https://api.whatsapp.com/send/?phone=917085487001&text&type=phone_number&app_absent=0" },

  ];

  return (
    <footer className="bg-white text-gray-800 px-6 md:px-10 py-10">
      {/* Logo */}
      <div className="mb-10">
        <img src={Logo} alt="Footer Logo" className="w-40" />
      </div>

      {/* Top Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
        {footerData.map((section, index) => (
          <div
            key={index}
            className={index === 0 ? "md:col-span-2" : "md:col-span-1"}
          >
            <h2 className="text-md font-semibold uppercase tracking-wide text-gray-700 mb-5">
              {section.sectionTitle}
            </h2>
            <div className="flex flex-col gap-3">
              {section.list.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start text-sm text-gray-600 gap-3"
                >
                  {item.icon && (
                    <div className="min-w-[20px] mt-[2px] flex-shrink-0">
                      <item.icon size={16} />
                    </div>
                  )}
                  <div className="break-words">
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="relative text-gray-600 hover:text-[#FF1616] group font-light w-fit"
                      >
                        <span>{item.data}</span>
                        <span className="block absolute bottom-0 left-0 h-[1px] w-full bg-[#FF1616] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </Link>
                    ) : (
                      <span className="font-light whitespace-pre-line">{item.data}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Grid with Social + Legal Links aligned to top grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-6">
        {/* Social Icons */}
        <div className="md:col-span-2 flex items-center gap-3">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              target="_balnk"
              href={item.link}
              className="rounded-full group bg-gray-200 hover:bg-red-500 transition-colors duration-300 p-2 flex items-center justify-center"
            >
              <item.icon
                size={22}
                className="text-gray-700 group-hover:text-white transition duration-300"
              />
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <div className="md:col-span-1 flex items-center">
          <Link
            to="/privacy-policy"
            className="relative group text-sm text-gray-500 hover:text-[#FF1616] w-fit"
          >
            <span>Privacy Policy</span>
            <span className="block absolute bottom-0 left-0 h-[1px] w-full bg-[#FF1616] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
        <div className="md:col-span-1 flex items-center">
          <Link
            to="/refund-policy"
            className="relative group text-sm text-gray-500 hover:text-[#FF1616] w-fit"
          >
            <span>Refund Policy</span>
            <span className="block absolute bottom-0 left-0 h-[1px] w-full bg-[#FF1616] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
        <div className="md:col-span-1 flex items-center">
          <Link
            to="/terms"
            className="relative group text-sm text-gray-500 hover:text-[#FF1616] w-fit"
          >
            <span>Terms of Service</span>
            <span className="block absolute bottom-0 left-0 h-[1px] w-full bg-[#FF1616] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-200 pt-5">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
