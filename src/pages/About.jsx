import domestic from "../assets/Domestic_Cleaning_Services_Residential_Cleaning_Services-5485263.jpg";
import fair from "../assets/faironyellow.jpg";
import { FaCheck } from "react-icons/fa6";

function About() {
  return (
    <>
      <section className="about-section mb-[15em] sm:mb-[25em] md:mb-[25em] lg:mb-[25em] ">
        <div className="about-content-wrap wrap  py-[3em]">
          <div className="about-grid">
            <div className="about-first-col">
              <div className="about-img-1">
                <img src={fair} alt="" className="rounded-2xl" />
              </div>
              <div className="about-text-amidst-img rounded-2xl">
                <p className="text-[2rem] text-[#00558e] font-extrabold">2+</p>
                <p className="text-[1rem] text-[#00558e] font-medium">
                  Years Experience
                </p>
              </div>
              <div className="about-img-2">
                <img src={domestic} alt="" className="rounded-2xl" />
              </div>
            </div>
            <div className="about-second-col">
              <h1 className="text-[1rem] text-[#00558e] font-bold mb-[2em]">
                ABOUT US
              </h1>
              <div className="about-heading mb-[1em]">
                <p className="text-[2rem]  font-bold mb-[-0.3em]">
                  We Create the Perfect{" "}
                </p>
                <p className="text-[2rem] font-bold mb-[2em]">
                  <span className="text-[#00558e]">Shine</span> Every Time
                </p>
              </div>
              <div className="checked-wrapper">
                <div className="checked flex items-center mb-[3.5em]">
                  <div className="about-icon-bg  bg-[#00558e] mr-[1em] p-[0.2em]">
                    <FaCheck className="about-icon  text-[#ffffff]" />
                  </div>
                  <p>Loaded with Professional and Honest Cleaners</p>
                </div>
                <div className="checked flex items-center mb-[3.5em]">
                  <div className="about-icon-bg  bg-[#00558e] mr-[1em] p-[0.2em]">
                    <FaCheck className="about-icon  text-[#ffffff]" />
                  </div>
                  <p>Provide the Finest Cleaning Supplies</p>
                </div>
                <div className="checked flex items-center mb-[3.5em]">
                  <div className="about-icon-bg  bg-[#00558e] mr-[1em] p-[0.2em]">
                    <FaCheck className="about-icon  text-[#ffffff]" />
                  </div>
                  <p>100% Satisfaction Cleaning Service</p>
                </div>
                <div className="checked flex items-center ">
                  <div className="about-icon-bg  bg-[#00558e] mr-[1em] p-[0.2em]">
                    <FaCheck className="about-icon  text-[#ffffff]" />
                  </div>
                  <p>We are bonded and insured</p>
                </div>
              </div>
            </div>
          </div>
          <div className="founders-message">
            <p className="font-medium">
              {" "}
              Founded in 2021, specializing in multiple areas of Residential and
              Commercial cleaning services, ecoSpak has an eye for detail and
              the dedication to ensure that you are 100% satisfied!
            </p>
            <p className="font-medium">
              {" "}
              EcoSpak was founded in the hopes of providing the best quality
              cleaning services to families and firms all over Abia State. We
              know that in trying times, a clean environment can make all the
              difference
            </p>
          </div>
          <div className="about-mission-vision-wrapper mt-[3em]">
            <div className="welcome-grid mission flex flex-col justify-center">
              <div>
                <p className="font-bold">Welcome!</p>{" "}
                <div className="welcome-line mt-[0.4em]"></div>
              </div>
              <p className="mt-[2em] font-bold">
                AT ECOSPAK, CLEANING IS MADE EASY AND EFFECTIVE. LET YOUR
                ENVIRON SPARK WITH ECOSPAK{" "}
              </p>
            </div>
            <div className="join-grid mission flex flex-col justify-center">
              <p className="mt-[2em] font-bold">
                JOIN US TO BALANCE THE ECO FRIENDLINESS OF THE WORLD
              </p>
            </div>
            <div className="vision-grid mission flex flex-col justify-center">
              <h5 className="font-bold">OUR VISION</h5>
              <p className="font-bold mt-[0.4em]">
                To be characterized by being an eco friendly cleaning service
                provider
              </p>
              <p className="font-bold">
                We envision a world where the process of connecting customers
                with our reliable cleaners is a transformative experience
              </p>
            </div>
            <div className="mission-grid mission flex flex-col justify-center">
              <h5 className="font-bold">OUR MISSION</h5>
              <p className="font-bold mt-[0.4em]">
                Redefine the standard of cleanliness
              </p>
              <p className="font-bold">
                Contributing to the overall well being and harmony of
                individuals, families and companies by aiding them keep their
                environ clean and safe,in turn enabling them have fun easily
                without worrying.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
