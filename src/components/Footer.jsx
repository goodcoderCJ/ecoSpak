import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/ecospark.png";
function Footer() {
  return (
    <div className="footer-sec ">
      <div className="footer-bg bg-[#00558e]">
        <div className="footer-wrapper  flex flex-col">
          <div className="footer-first-col wrap flex justify-between py-[2em]">
            <div className="inner-col-1 flex flex-row justify-between sm:justify-normal md:justify-normal lg:justify-normal sm:flex-col md:flex-col lg:flex-col mt-[2em] ">
              <img src={logo} alt="" className="w-[100px] h-[30px]  " />
              <div className="inner-col-1-text mt-[2em] hidden sm:block md:block lg:block">
                <p className="text-[#ffffff] text-[1.2rem]">
                  We Clean{" "}
                  <span className="text-[#edc954]  text-[1.2rem]">Corners</span>
                  , We Do Not
                </p>
                <p className="text-[#ffffff]  text-[1.2rem]">Cut Them</p>
              </div>
              <div className="icons flex justify-between  mt-[1em]">
                <div className="first-icon footer-icon ">
                  <BsFacebook />
                </div>
                <div className="second-icon footer-icon">
                  <RiTwitterXFill />
                </div>
                <div className="third-icon footer-icon">
                  <BsInstagram />
                </div>
                <div className="fourth-icon footer-icon">
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className="inner-col-two text-[#ffffff] hidden sm:block md:block lg:block">
              <b className=" text-[1rem] font-bold ">Quick Links</b>
              <div className="links flex flex-col justify-between py-[1.5em] ">
                <Link to="/" className="mb-[0.4em]">
                  Home
                </Link>
                <Link to="/about" className="mb-[0.4em]">
                  About
                </Link>
                <Link to="/services" className="mb-[0.4em]">
                  Services
                </Link>
                <Link to="/pricing" className="mb-[0.4em]">
                  Pricing
                </Link>
                <button className=" text-left mb-[0.4em]">Contact Us</button>
                <Link to="/login" className="mb-[0.4em]">
                  Sign in
                </Link>
                <Link to="/signup" className="">
                  Sign up
                </Link>
              </div>
            </div>
            <div className="inner-col-three text-[#ffffff] hidden sm:block md:block lg:block">
              <b className=" text-[1rem] font-bold ">Services</b>
              <div className="services-lists flex flex-col justify-between py-[1.5em]">
                <p className="mb-[0.4em]">House Cleaning</p>
                <p className="mb-[0.4em]">Office Cleaning</p>
                <p className="mb-[0.4em]">Furniture Cleaning</p>
                <p className="mb-[0.4em]">Construction Cleaning</p>
                <p className="mb-[0.4em]">Carpet Cleaning</p>
                <p>Glass Cleaning</p>
              </div>
            </div>
          </div>
          <div className="footer-second-col  text-[#ffffff]">
            <p>
              Copyright &copy; {new Date().getFullYear()} ecoSpak. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
