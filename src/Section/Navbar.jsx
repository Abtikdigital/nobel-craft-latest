import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/navbar/image.png";

const Navbar = () => {
  const location = useLocation();
  const isActive = location.pathname;
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navbar = [
    { path: "/", title: "Home" },
    { path: "/About-us", title: "About Us" },
    { path: "/Services", title: "Services" },
    { path: "/Projects", title: "Projects" },
    { path: "/Contact-us", title: "Contact Us" },
  ];

  return (
    <>
      <div
        className="hidden md:flex sticky top-0 w-full bg-white z-50 items-center justify-between shadow-md px-6 py-2"
     
      >
        <div>
          <img src={Logo} className="w-48" alt="Logo" />
        </div>

        <div className="flex gap-10">
          {navbar.map((link) => {
            const active = isActive === link.path;
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
          className={`transition-all duration-500  ease-in-out overflow-hidden ${
            isNavbarOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ padding: isNavbarOpen ? "10px 25px" : "0 25px" }}
        >
          <div className="flex flex-col gap-3">
            {navbar.map((link, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;