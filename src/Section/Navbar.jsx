import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/navbar/image.png";

const Navbar = () => {
  const location = useLocation();
  const isActive = location.pathname;
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState(null);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    // Close mobile services dropdown when navbar closes
    if (isNavbarOpen) {
      setIsMobileServicesOpen(false);
    }
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms delay before closing
    setServicesTimeout(timeout);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const navbar = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About Us" },
    { 
      path: "/Services", 
      title: "Services",
      hasSubmenu: true,
      submenu: [
        { path: "/Services/construction", title: "Construction" },
        { path: "/Services/steel-furniture", title: "Steel Furniture" },
        { path: "/Services/steel-fabrication", title: "Steel Fabrication" },
        { path: "/Services/electrical-goods", title: "Electrical Goods" },
        { path: "/Services/building-hardware", title: "Building Hardware" },
        
      ]
    },
    { path: "/projects", title: "Projects" },
    { path: "/contact-us", title: "Contact Us" },
  ];

  const servicesItem = navbar.find(item => item.path === "/Services");

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex sticky top-0 w-full bg-white z-50 items-center justify-between shadow-md px-6 py-2">
        <div>
          <img src={Logo} className="w-48" alt="Logo" />
        </div>

        <div className="flex gap-10">
          {navbar.map((link) => {
            const active = isActive === link.path || (link.hasSubmenu && link.submenu?.some(sub => isActive === sub.path));
            
            if (link.hasSubmenu) {
              return (
                <div
                  key={link.path}
                  className="relative group"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <Link
                    to={link.path}
                    className="relative group active:scale-98 active:opacity-80 transition-all duration-150 ease-in-out flex items-center gap-1"
                  >
                    <div
                      className={`inline-block text-base transition-all duration-300 ease-in-out
                        ${active ? "text-red-600 font-semibold" : "text-gray-800 font-normal"}
                        group-hover:text-red-600`}
                    >
                      {link.title}
                    </div>
                    <ChevronDown 
                      size={16} 
                      className={`transition-all duration-300 ease-in-out ${isServicesOpen ? 'rotate-180' : 'rotate-0'} 
                        ${active ? "text-red-600" : "text-gray-800"} group-hover:text-red-600`}
                    />
                    
                    {/* underline from center */}
                    <span
                      className={`
                        absolute -bottom-0.5 left-1/2 transform -translate-x-1/2
                        h-[2px] bg-red-600 transition-all duration-300 ease-in-out
                        ${active ? "w-full" : "w-0"} group-hover:w-full`}
                    />
                  </Link>

                  {/* Desktop Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300 ease-in-out origin-top z-50
                      ${isServicesOpen 
                        ? 'opacity-100 scale-y-100 translate-y-0 visible' 
                        : 'opacity-0 scale-y-95 -translate-y-2 invisible'}`}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <div className="py-2">
                      {link.submenu?.map((subItem, index) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-3 text-sm transition-all duration-200 ease-in-out hover:bg-red-50 hover:text-red-600 hover:pl-5 border-b border-gray-50 last:border-b-0 relative overflow-hidden
                            ${isActive === subItem.path ? "text-red-600 bg-red-50 font-medium pl-5" : "text-gray-700"}
                            ${isServicesOpen ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-2 opacity-0'}`}
                          style={{ 
                            transitionDelay: isServicesOpen ? `${index * 50}ms` : '0ms',
                            animationFillMode: 'forwards'
                          }}
                        >
                          <span className="relative z-10">{subItem.title}</span>
                          {/* Hover effect background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent transform scale-x-0 transition-transform duration-200 ease-out origin-left group-hover:scale-x-100"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                to={link.path}
                key={link.path}
                className="relative group active:scale-98 active:opacity-80 transition-all duration-150 ease-in-out"
              >
                <div
                  className={`inline-block text-base transition-all duration-400 ease-in-out
                    ${active ? "text-red-600 font-semibold" : "text-gray-800 font-normal"}
                    group-hover:text-red-600 group-hover:text-shadow-xs`}
                >
                  {link.title}
                </div>

                {/* underline from center */}
                <span
                  className={`
                    absolute -bottom-0.5 left-1/2 transform -translate-x-1/2
                    h-[2px] bg-red-600 transition-all duration-400 ease-in-out
                    ${active ? "w-full" : "w-0"} group-hover:w-full`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden sticky top-0 bg-white z-50">
        <div className="relative flex items-center justify-between" style={{ padding: "10px 25px" }}>
          <img src={Logo} className="w-48" alt="Logo" />
          <button
            onClick={toggleNavbar}
            className="border border-gray-300 absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-200 rounded-md hover:bg-gray-100 active:scale-95"
            style={{ padding: "6px" }}
          >
            {isNavbarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isNavbarOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ padding: isNavbarOpen ? "10px 25px" : "0 25px" }}
        >
          <div className="flex flex-col gap-3">
            {navbar.map((link, index) => {
              if (link.hasSubmenu) {
                return (
                  <div key={link.path} className="flex flex-col">
                <div
                  className={`flex items-center justify-between border border-gray-200 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-red-50 hover:text-red-600 active:scale-95 ${
                    isActive === link.path || link.submenu?.some(sub => isActive === sub.path)
                      ? "text-red-600 bg-red-50 font-semibold"
                      : "text-gray-800 font-normal"
                  } ${isNavbarOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                  style={{
                    padding: "8px 12px",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={toggleNavbar}
                    className="flex-1 text-center"
                  >
                    {link.title}
                  </Link>
                  <button
                    onClick={toggleMobileServices}
                    className="ml-2 p-1 hover:bg-red-100 rounded transition-all duration-200"
                  >
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ease-in-out ${
                        isMobileServicesOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Mobile Submenu */}
                <div
                  className={`transition-all duration-400 ease-in-out overflow-hidden ml-4 ${
                    isMobileServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    {link.submenu?.map((subItem, subIndex) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={toggleNavbar}
                        className={`text-sm border border-gray-200 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-red-50 hover:text-red-600 active:scale-95 hover:shadow-sm ${
                          isActive === subItem.path
                            ? "text-red-600 bg-red-50 font-medium shadow-sm"
                            : "text-gray-600 font-normal"
                        } ${isMobileServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                        style={{
                          padding: "6px 12px",
                          transitionDelay: isMobileServicesOpen ? `${subIndex * 75}ms` : '0ms',
                        }}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
                  </div>
                );
              }

              return (
                <Link
                  to={link.path}
                  key={link.path}
                  onClick={toggleNavbar}
                  className={`text-center block border border-gray-200 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-red-50 hover:text-red-600 active:scale-95 ${
                    isActive === link.path
                      ? "text-red-600 bg-red-50 font-semibold"
                      : "text-gray-800 font-normal"
                  } ${isNavbarOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                  style={{
                    padding: "8px",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;