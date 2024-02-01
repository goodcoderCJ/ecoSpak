/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import houseCleaner from "../assets/housecleaner.jpg";
import screened from "../assets/Path 54@2x.png";
import flexible from "../assets/Path 55@2x.png";
import competitive from "../assets/Path 68@2x.png";
import smilingManSpray from "../assets/smilingmanspray.jpg";
import { IoIosArrowDown } from "react-icons/io";

import youngAfrica from "../assets/youngafrican.jpg";
import cleaning from "../assets/cleaning.jpg";

import sittingRoom from "../assets/sittingroom.jpg";
import Carousel from "../components/Carousel";
import testimonialPix from "../assets/unsplash_man-with-white-polo.png";
import learnfactory from "../assets/LEARNFACTORY.png";
import mjc from "../assets/mjc-logo.png";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  const [isAnswer1Shown, setIsAnswer1Shown] = useState(false);
  const [isAnswer2Shown, setIsAnswer2Shown] = useState(false);
  const [isAnswer3Shown, setIsAnswer3Shown] = useState(false);
  const [isAnswer4Shown, setIsAnswer4Shown] = useState(false);

  const showAnswer1Handler = () => {
    setIsAnswer1Shown(!isAnswer1Shown);
  };
  const showAnswer2Handler = () => {
    setIsAnswer2Shown(!isAnswer2Shown);
  };
  const showAnswer3Handler = () => {
    setIsAnswer3Shown(!isAnswer3Shown);
  };
  const showAnswer4Handler = () => {
    setIsAnswer4Shown(!isAnswer4Shown);
  };
  return (
    <div className="home-page ">
      {/* hero section */}
      <div className=" hero-section w-[100%] flex items-center justify-between py-[0.5em] ]">
        <div className="hero-text pl-[2%]   py-[4em] mx[1em] mt-[0] sm:mt-[-1em] md:mt-[-4em] lg:mt-[-6em]">
          <div className="hero-text-wrapper  y-[2em]">
            <div className="heading-h1">
              <h1 className="font-bold text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] text-[#00558e]">
                WE ARE ECOSPAK
              </h1>
            </div>
            <div className="headings">
              <p className="h2 text-[1.3rem]  sm:text-[1.5rem] md:text-[1.7rem] text-[#131212] font-extrabold">
                Professional Cleaning
              </p>
              <p className="h3 text-[1.3rem] sm:text-[1.5rem] md:text-[1.7rem] text-[#131212] font-extrabold mt-[-0.3em]">
                Service for Your Home
              </p>
            </div>
            <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-[#1b1b1b] text-semibold">
              Let our certified staff sweat the details so you don't have to.
            </p>
            <button
              className="hero-btn bg-[#EDC954] rounded-full py-[0.6em] sm:py-[0.4em]  md:py-[0.4em] lg:py-[0.4em] mt-[0.75em] w-[100px] sm:w-[130px] md:w-[140px] lg:w-[140px] font-bold text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text[1.1rem]"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="hero-image  ">
          <img
            src={houseCleaner}
            alt=""
            className=" w-[500px] sm:w-[550px] md:w-[600px] lg:w-[800px] h-[50%] rounded-tl-[50px] rounded-bl-[220px]  "
          />
        </div>
      </div>
      {/* Sub-hero-section : Why choose us */}
      <div className="sub-hero-section mt-[5em]">
        <div className="row flex justify-between px-[2%]">
          <div className="first-col w-[40%]  ">
            <div className="text-wrapper">
              <h4 className="h4 font-bold text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] text-[#00558e]">
                WHY CHOOSE US
              </h4>
              <h5 className="h5 text-[1.3rem]  sm:text-[1.5rem] md:text-[1.7rem] text-[#131212] font-extrabold">
                Why Choose Our
              </h5>
              <h6 className="h6 text-[1.3rem]  sm:text-[1.5rem] md:text-[1.7rem] text-[#131212] font-extrabold mt-[-0.3em]">
                Service Provider
              </h6>
            </div>
            <div className="icons-wrapper mt-[2.5em] flex flex-col ">
              <div className="divide flex mb-[2em]">
                <div className="icon9text mr-[1em] sm:w-[40%] md:w-[40%] lg:w-[45%] py-[1.2em] ">
                  <img
                    src={flexible}
                    alt=""
                    className="w-[100px] sm:w-[60px] md:w-[45px] lg:w-[45px]"
                  />
                  <p>Satisfaction Guaranteed</p>
                </div>
                <div className="icon9text sm:w-[40%] md:w-[40%] lg:w-[45%] py-[1.2em]">
                  <img
                    src={competitive}
                    alt=""
                    className="w-[100px] sm:w-[60px] md:w-[45px] lg:w-[45px]"
                  />
                  <p>Screened & Trained Team</p>
                </div>
              </div>
              <div className="divide flex ">
                <div className="icon9text  mr-[1em] sm:w-[40%] md:w-[40%] lg:w-[45%]  py-[1.2em]">
                  <img
                    src={screened}
                    alt=""
                    className=" w-[100px] sm:w-[60px] md:w-[45px] lg:w-[45px]"
                  />
                  <p>Flexible Arrival Time</p>
                </div>
                <div className="icon9text  sm:w-[40%] md:w-[40%] lg:w-[45%]  py-[1.2em]">
                  <img
                    src={flexible}
                    alt=""
                    className="w-[100px] sm:w-[60px] md:w-[45px] lg:w-[45px]"
                  />
                  <p>Competitive Pricing</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-col w-[60%]">
            <div className="customer  flex flex-col items-start justify-center rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]">
              <div className="customer-padup pl-[1em] sm:pl-[1em] md:pl-[1em] lg:pl-[1.5em] z-40">
                <p className="text-[2rem] text-[#ffffff] font-bold">500+</p>
                <p className="text-[1.1rem] text-[#e0e0e0] font-medium">
                  Customers
                </p>
              </div>
            </div>

            <div className="picture">
              <img
                src={smilingManSpray}
                alt=""
                className="w-[100%]  h-[100%]  rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[50px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="team-btn-wrapper flex items-center justify-center mt-[3em]">
        <button
          className="hero-btn bg-[#EDC954] rounded-full  py-[0.6em] sm:py-[0.4em] md:py-[0.4em] lg:py-[0.4em] mt-[0.75em] w-[130px] sm:w-[150px] md:w-[170px] lg:w-[170px]  font-bold text-[0.8rem] sm:text-[1rem] md:text-[1rem] lg:text[1.1rem]"
          onClick={() => navigate("/team")}
        >
          Join our Team
        </button>
      </div>

      {/* Work-section */}
      <div className="work-bg mt-[2em] ">
        <div className="work  py-[3em]">
          <div className="work-wrapper">
            <div className="work-text-section">
              <p className="font-bold text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] text-[#00558e]">
                HOW WE WORK
              </p>
              <h6 className="h6 text-[1.3rem]  sm:text-[1.5rem] md:text-[1.7rem] text-[#131212] font-extrabold">
                ecoSpak Working Process
              </h6>
            </div>
            <div className="work-image-wrapper mt-[1.7em] hidden sm:hidden md:grid lg:grid">
              <div className="first-image">
                <img src={youngAfrica} alt="" className="w-[100%] h-[100%]" />
              </div>
              <div className="second-image">
                <img src={cleaning} alt="" className="w-[100%] h-[100%] " />
              </div>
              <div className="third-image">
                <img src={sittingRoom} alt="" className="w-[100%] h-[100%] " />
              </div>
            </div>
            <div className="work-circle-number hidden sm:hidden md:flex lg:flex justify-center items-center mt-[1em]">
              <div className="work-no-wrapper bg-[#edc954]  p-[0.4em] w-[40px] h-[40px] flex items-center justify-center">
                <p className="work-no  text-[1rem] font-bold">1</p>
              </div>
              <div className="dots w-[32%] flex items-center justify-around ">
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
              </div>
              <div className="work-no-wrapper bg-[#edc954]  p-[0.4em] w-[40px] h-[40px] flex items-center justify-center">
                <p className="work-no  text-[1rem] font-bold">2</p>
              </div>
              <div className="dots w-[32%] flex items-center justify-around">
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
                <div className="dot">.</div>
              </div>
              <div className="work-no-wrapper bg-[#edc954]  p-[0.4em] w-[40px] h-[40px] flex items-center justify-center">
                <p className="work-no  text-[1rem] font-bold">3</p>
              </div>
            </div>
            {/* carousel for smaller screen */}
            <Carousel />
            {/* showcase numbering */}
            <div className="work-schedule mt-[1em] flex justify-between w-[90%] sm:w-[92%] md:w-[90%] lg:w-[84%] mx-[auto]">
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1rem]font-medium">
                Choose a Cleaning Plan
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1rem]font-medium">
                We Clean
              </p>
              <p className="text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1rem]font-medium">
                Back to Comfortable
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners section */}
      <div className="home-partners-section py-[3em]">
        <div className="home-partners-wrapper ">
          <div className="partners-heading flex items-center justify-center">
            <h5 className="font-bold text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] text-[#00558e] mt-[1em]">
              OUR PARTNERS
            </h5>
          </div>
          <div className="partners-logo-wrapper flex flex-col sm:flex-row md:flex-row lg:flex-row sm:items-center sm:justify-center md:items-center md:justify-center  py-[1em] sm:py-[2em] md:py-[2em] lg:py-[2em] mt-[1em]">
            <div className="learnfactory-logo-wrapper flex items-center justify-center mr-[0em] sm:mr-[3em] md:mr-[3em] lg:mr-[3em]">
              <img
                src={learnfactory}
                alt="learnfactory logo"
                width="150"
                height="50"
                className="lf-logo max-w-[100%]"
              />
            </div>
            <div className="mjc-global-logo-wrapper flex items-center justify-center mt-[2em] sm:mt-[0em] md:mt-[0em] lg:mt-[0em]">
              <img
                src={mjc}
                alt="mjc logo"
                width="100"
                height="50"
                className="mjc-logo max-w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="testimonial py-[3em] mt-[0em] mb-[1em] sm:mb-[2em] md:mb-[2em] lg:mb-[2em] ">
        <div className="testimonial-wrap wrapper wrap">
          <div className="testimonial-heading text-center">
            <h5 className="font-bold text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] text-[#00558e] mb-[1em]">
              TESTIMONIALS
            </h5>
            <h6 className="h5 text-[1.3rem]  sm:text-[1.5rem] md:text-[1.7rem] text-[#131212] font-extrabold">
              What Says Our Happy Clients
            </h6>
          </div>
          <div className="testimonial-persona mt-[2em]">
            <div className="row flex flex-col sm:flex-row md:flex-row lg:flex-row">
              <div className="testimonial-first-col w-[90%] sm:w-[45%] md:w-[45%] lg:w-[45%] shadow-md p-[3em] mr-[0em] sm:mr-[2em] md:mr-[2em] lg:mr-[2em]">
                <div className="col-1">
                  <div className="img-text">
                    <img
                      src={testimonialPix}
                      alt=""
                      className="lg:w-[60px] lg:h-[60px%]  md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] w-[50px] h-[50px]"
                    />
                    <div className="text">
                      <p>Roland</p>
                      <small>Client</small>
                    </div>
                  </div>
                  <FaQuoteRight className="quote" />
                </div>
                <div className="col-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="message">
                  <p>
                    Booking the after-party cleaning was one of the best things
                    I've ever done. I would never manage to deal with the mess
                    in one weekend. Thank you ecoSpak, you are the best
                  </p>
                </div>
              </div>
              <div className="testimonial-second-col w-[90%] sm:w-[45%] md:w-[45%] lg:w-[45%] shadow-md p-[3em] mt-[3em] sm:mt-[0em] md:mt-[0em] lg:mt-[0em]">
                <div className="col-1">
                  <div className="img-text">
                    <img
                      src={testimonialPix}
                      alt=""
                      className="lg:w-[60px] lg:h-[60px%]  md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] w-[50px] h-[50px]"
                    />
                    <div className="text">
                      <p>Patrick Okoyo </p>
                      <small>Client & CEO</small>
                    </div>
                  </div>
                  <FaQuoteRight className="quote" />
                </div>
                <div className="col-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="message p-0">
                  <p>
                    Cheap price and excellent service. We booked the cleaning
                    for our home and office and the crew did an amazing job
                    putting everything back to normal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently asked Questions */}
      <div className="FAQs py-[3em] mt-[0em] sm:mt-[1em] md:mt-[1em] lg:mt-[1em] mb-[19em] sm:mb[20em] md:mb-[20em] lg:mb-[20em] ">
        <div className="FAQs-wrapper wrap">
          <div className="FAQs-heading flex items-center justify-center">
            <h5 className="font-bold text-[0.8rem] sm:text-[1rem] md:text-[1.3rem] text-[#00558e] mb-[1em]">
              FREQUENTLY ASKED QUESTIONS
            </h5>
          </div>
          {/* question one */}
          <div className="question-answer-wrap">
            <div className="question flex items-center ">
              <p className="font-medium">
                What is the mode of operation of ecoSpak?
              </p>
              <IoIosArrowDown
                className="ml-[0.7em]"
                onClick={showAnswer1Handler}
              />
            </div>
            {isAnswer1Shown && (
              <div className="answer mt-[0.9em]">
                <p className="answer-p pl-[1em]">
                  ecoSpak operates her janitor services witin the interior and
                  exterior of homes, offices and companies
                </p>
              </div>
            )}
          </div>
          {/* question two */}
          <div className="question-answer-wrap">
            <div className="question flex items-center ">
              <p className="font-medium">Do ecoSpak operate on weekends?</p>
              <IoIosArrowDown
                className="ml-[0.7em]"
                onClick={showAnswer2Handler}
              />
            </div>
            {isAnswer2Shown && (
              <div className="answer mt-[0.9em]">
                <p className="answer-p pl-[1em]">
                  You are the one to select you package days and flexibilites
                  lies within it and cleanings are on daily basis, except on
                  Sundays which are usually our off days, we are working on
                  adding Sundays as an ONRING day, please be patient.
                </p>
              </div>
            )}
          </div>

          {/* question three */}
          <div className="question-answer-wrap">
            <div className="question flex items-center ">
              <p className="font-medium">
                Do we have a physical office for easy reach?
              </p>
              <IoIosArrowDown
                className="ml-[0.7em]"
                onClick={showAnswer3Handler}
              />
            </div>
            {isAnswer3Shown && (
              <div className="answer mt-[0.9em]">
                <p className="answer-p pl-[1em]">
                  Yes, our office is located at 44B Aba Owerri Road
                </p>
              </div>
            )}
          </div>

          {/* question four */}
          <div className="question-answer-wrap">
            <div className="question flex items-center ">
              <p className="font-medium">
                Household cleaning is a unique duty, how entrusted can ecoSpak
                be ?{" "}
              </p>
              <IoIosArrowDown
                className="ml-[0.7em]"
                onClick={showAnswer4Handler}
              />
            </div>
            {isAnswer4Shown && (
              <div className="answer mt-[0.9em]">
                <p className="answer-p pl-[1em]">
                  Your worries were considered before our existence and we do
                  not make it a mere writing, our team is trusted and tested
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
