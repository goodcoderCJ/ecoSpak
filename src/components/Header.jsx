import { NavLink } from "react-router-dom";
import useScrool from "../hooks/useScroll";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

import logo from "../assets/logo.png";
import Contact from "../pages/Contact";

function Header() {
  const scrolled = useScrool();
  const [toggleMenu, setToggleMenu] = useState("hidden");
  const handleClick = () => {
    const toggle = toggleMenu === "hidden" ? "grid" : "hidden";
    setToggleMenu(toggle);
  };

  const [contactModal, setAboutModal] = useState(false);

  const toggleContactModal = () => {
    setAboutModal(!contactModal);
  };

  return (
    <>
      <header className="header">
        <div className="flex justify-between">
          <div className="nav-first-sec  w-[70%] sm:w-[70%] md:w-[60%] bg-[#edc954]  flex items-center justify-center">
            <div className="nav-first-sec-wrap w-[95%] sm:-w[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex items-center justify-between py-[1.2em]  ">
              <div className="nav-first-sec-item1 flex items-center">
                <div className="icon mr-[0.5em]">
                  <FaLocationDot className="text-[1rem]" />
                </div>
                <span className="address text-[0.7rem]  sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] font-semibold">
                  #48B Aba-Owerri, Nigeria
                </span>
              </div>

              <div className="nav-first-sec-item2 flex items-center  ">
                <div className="icon mr-[0.5em]">
                  <MdEmail className="text-[1rem]" />
                </div>
                <span className="email-address text-[0.7rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem]  font-semibold">
                  ecospak@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="nav-second-sec w-[30%] sm:w-[40%] md:w-[40%]  bg-[#00558e] flex items-center justify-center ">
            <div className="nav-second-sec-wrapper w-[80%] sm:w-[40%] md:w-[30%] lg:w-[25%] flex items-center justify-around py-[1.4em] ">
              <div className="social-icons flex items-center">
                <BsFacebook className="text-white text-[0.9rem]" />
              </div>
              <div className="social-icons flex items-center">
                <RiTwitterXFill className="text-white text-[0.9rem]" />
              </div>
              <div className="social-icons flex items-center">
                <BsInstagram className="text-white text-[0.9rem]" />
              </div>
              <div className="social-icons flex items-center">
                <FaLinkedin className="text-white text-[0.9rem]" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={"main-header" + scrolled && "border-b shadow-sm"}>
        <div
          className={
            "wrap flex items-center justify-between py-[0.4em] sm:py-[0.5em] lg:py-[0.5em]"
          }
        >
          <div className="logo ">
            <img src={logo} alt="ecospak-logo" />
          </div>
          <nav
            className={`${toggleMenu} space-x-8 justify-items-center md:block md:static absolute left-0 top-16 w-screen gap-5 md:w-fit bg-[#00558e] md:bg-transparent text-[whitesmoke] md:text-[#2c2a2a] py-[1em] sm:py-[1em] lg:py-[0]  transition-all z-50
            duration-200`}
          >
            <NavLink
              to="/"
              activeClassName="active"
              className="font-medium ml-[1.3em] sm:ml-[1.3em] md:ml-[0] lg:ml-[0]"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="active"
              className="font-medium"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              activeClassName="active"
              className="font-medium"
            >
              Services
            </NavLink>
            <NavLink
              to="/pricing"
              activeClassName="active"
              className="font-medium"
            >
              Pricing
            </NavLink>
            <button
              className="font-medium cursor-pointer"
              onClick={toggleContactModal}
            >
              Contact
            </button>
            <NavLink
              to="/login"
              activeClassName="active"
              className="font-medium"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              activeClassName="active"
              className="font-medium"
            >
              Signup
            </NavLink>
          </nav>
          <div className="menu-wrapper bg-[#00558e] md:hidden block p-[0.5em]">
            <div className="menu-bar flex items-center justify-center">
              <BiMenu
                className="text-[white] z-50 text-[1.2rem]"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
      {contactModal && <Contact onClose={toggleContactModal} />}
    </>
  );
}
export default Header;
