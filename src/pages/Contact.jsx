/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaX } from "react-icons/fa6";

import { useEffect, useState } from "react";

function Contact({ onClose }) {
  useEffect(() => {
    const escapeKeyClose = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", escapeKeyClose);
    return () => {
      document.removeEventListener("keydown", escapeKeyClose);
    };
  }, [onClose]);
  const initialState = {
    fullname: "",
    email: "",
    info: "",
  };
  const [data, setData] = useState({ initialState });
  const { fullname, email, info } = data;

  const onChangeHandler = (e) => {
    const inputSetter = {
      [e.target.name]: e.target.value,
    };

    setData({ ...data, ...inputSetter });
    console.log(email);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const notValid = fullname === "" || email === "" || info === "";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="contact-overlay fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)] z-[1000] flex items-center justify-center"
    >
      <div className="contact-modal z-[1000]">
        <div className="contact-first-col bg-[#00558e] z-50  px-[1.5em] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] flex ">
          <div className="contact-col-wrapper  flex flex-col justify-between ">
            <h1 className=" text-[#dbdbdb] text-[0.9rem] sm:text-[0.9rem] md:text-[1.2rem] lg:text-[1.2rem] font-medium mt-[1.5em] ">
              Contact Us
            </h1>
            <div className="contact-icon-text-wrapper flex flex-col justify-between mb-[1em]">
              <div className="contact-icon-text flex items-center text-[#dbdbdb] mb-[1.3em]">
                <FaLocationDot className="mr-[0.8em] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1rem]" />
                <p className="text-[0.7rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1rem]">
                  #44 Aba Owerri Road
                </p>
              </div>

              <div className="contact-icon-text flex items-center  text-[#dbdbdb] mb-[1.3em]">
                <MdEmail className="mr-[0.8em] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1rem]" />
                <p className="text-[0.7rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1rem]">
                  ecospak@gmail.com
                </p>
              </div>

              <div className="contact-icon-text flex items-center text-[#dbdbdb]">
                <FaPhone className="mr-[0.8em] text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1rem]" />
                <p className="text-[0.7rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1rem]">
                  +2348012334567
                </p>
              </div>
            </div>

            <div className="contact-social-icons flex  mb-[1.5em]">
              <div className="contact-facebook w-[20px] sm:w-[22px] md:w-[22px] lg:w-[22px] h-[20px] sm:h-[22px] md:h-[22px] lg:h-[22px] rounded-full bg-[#edc954] flex items-center justify-center mr-[0.6em]">
                <BsFacebook className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.75rem]" />
              </div>

              <div className="contact-twitter  w-[20px] sm:w-[22px] md:w-[22px] lg:w-[22px] h-[20px] sm:h-[22px] md:h-[22px] lg:h-[22px] rounded-full bg-[#edc954] flex items-center justify-center mr-[0.6em]">
                <RiTwitterXFill className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.75rem]" />
              </div>

              <div className="contact-twitter w-[20px] sm:w-[22px] md:w-[22px] lg:w-[22px] h-[20px] sm:h-[22px] md:h-[22px] lg:h-[22px] rounded-full bg-[#edc954] flex items-center justify-center mr-[0.6em]">
                <BsInstagram className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.75rem]" />
              </div>

              <div className="contact-twitter w-[20px] sm:w-[22px] md:w-[22px] lg:w-[22px] h-[20px] sm:h-[22px] md:h-[22px] lg:h-[22px] rounded-full bg-[#edc954] flex items-center justify-center">
                <FaLinkedin className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.75rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-second-col bg-[#ffffff] parent-container  rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] flex items-center justify-center py-[2.5em]">
          <div className="contact-second-col-row  ">
            <div className="contact-form-col-1 "></div>
            <div className="contact-form-col-2">
              <div className="contact-form-heading my-[1.5em]">
                <h2 className="text-[#00558e] text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] font-medium mb-[0.4em]">
                  Get in Touch
                </h2>
                <small className="text-[#a7a7a7] text-[0.8rem] mb-[0.7em]">
                  Feel free to drop us a line below
                </small>
              </div>
              <form className="contact-form-input-body">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  placeholder="Your Name"
                  className="bg-[#ececec] w-[80%] p-[0.7em] text-[0.7rem] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] mb-[1em] outline-none"
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  placeholder="Your Email "
                  className="bg-[#ececec] w-[80%] p-[0.7em] text-[0.7rem] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] mb-[1em] outline-none"
                />

                <textarea
                  name="info"
                  id="info"
                  value={info}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  cols="30"
                  rows="8"
                  placeholder="Type in your message here..."
                  className="bg-[#ececec] w-[80%] p-[0.7em] text-[0.7rem] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] mb-[1em] hidden sm:hidden md:block lg:block outline-none"
                ></textarea>
                {/* text-area to replace that of bigger screen with smaller one on smaller screens */}
                <textarea
                  name="info"
                  id="info"
                  value={info}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  cols="30"
                  rows="5"
                  placeholder="Type in your message here..."
                  className="bg-[#ececec] w-[80%] p-[0.7em] text-[0.7rem] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] mb-[1em] block sm:block md:hidden lg:hidden outline-none"
                ></textarea>
                <div className="contact-send-close-btn-wrap flex justify-between w-[80%] sm:w-[80%] md:w-[60%] lg:-[60%]">
                  <button
                    type="submit"
                    className=" w-[90px] bg-[#edc954] font-extrabold p-[0.4em]"
                    disabled={notValid}
                    onClick={(e) => {
                      onSubmitHandler(e);
                    }}
                  >
                    SEND
                  </button>
                  <button
                    className=" w-[90px] border border-[#00558e] font-extrabold p-[0.4em]"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>

            <FaX className="contact-close-btn  mt-[1em]" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
