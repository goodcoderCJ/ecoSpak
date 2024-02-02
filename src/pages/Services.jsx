import { FaHouse } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa6";
import { FaChair } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa6";
import { FaChessBoard } from "react-icons/fa6";
import { FaGlassWaterDroplet } from "react-icons/fa6";

function Services() {
  return (
    <>
      <div className="services-section bg-[#f5f3f3] mb-[4em] sm:mb-[10em] md:mb-[25em] lg:mb-[25em]">
        <div className="services-wrapper wrap py-[3em]">
          <div className="services-content-wrapper">
            <div className="services-first-col text-center">
              <h1 className="text[0.8rem] font-bold text-[#00558e]">
                WHAT WE DO
              </h1>
              <h3 className="font-bold text-[1.8rem] mb-[1.3em] mt-[0.2em]">
                Outstanding <span className="text-[#00558e]">Service</span>{" "}
                Makes the Difference
              </h3>
            </div>
            <div className="services-second-col services-grid">
              <div className="services-grid-child-1">
                <div className="services-icon flex items-center justify-center mb-[0.8em]">
                  <FaHouse />
                </div>
                <h6 className="text-center font-medium mb-[0.5em]">
                  House Cleaning
                </h6>
                <p className="text-[0.8rem] text-center">
                  Taking the initiative to give your home a perfect touch
                </p>
              </div>

              <div className="services-grid-child-2">
                <div className="services-icon flex items-center justify-center mb-[0.8em]">
                  <FaHospital />
                </div>
                <h6 className="text-center font-medium mb-[0.5em]">
                  Office Cleaning
                </h6>
                <p className="text-[0.8rem] text-center">
                  Ensure that all offices, entrance and rooms are kept clean on
                  a daily basis
                </p>
              </div>

              <div className="services-grid-child-3">
                <div className="services-icon flex items-center justify-center mb-[0.8em]">
                  <FaChair />
                </div>
                <h6 className="text-center font-medium mb-[0.5em]">
                  Furniture Cleaning
                </h6>
                <p className="text-[0.8rem] text-center">
                  Providing a deep and thorough cleaning of upholstery
                </p>
              </div>

              <div className="services-grid-child-4">
                <div className="services-icon flex items-center justify-center mb-[0.8em]">
                  <FaIndustry />
                </div>
                <h6 className="text-center font-medium mb-[0.5em]">
                  Construction Cleaning
                </h6>
                <p className="text-[0.8rem] text-center">
                  Intensive cleaning of both the interior and exterior of a
                  property
                </p>
              </div>

              <div className="services-grid-child-5">
                <div className="services-icon flex items-center justify-center mb-[0.8em]">
                  <FaChessBoard />
                </div>
                <h6 className="text-center font-medium mb-[0.5em]">
                  Carpet Cleaning
                </h6>
                <p className="text-[0.8rem] text-center">
                  Removal of stains, dirt and allergens from carpets by means of
                  vacuuming and the likes
                </p>
              </div>

              <div className="services-grid-child-6">
                <div className="services-icon flex items-center justify-center mb-[0.8em]">
                  <FaGlassWaterDroplet />
                </div>
                <h6 className="text-center font-medium mb-[0.5em]">
                  Glass Cleaning
                </h6>
                <p className="text-[0.8rem] text-center">
                  Proper washing and cleaning of glass windows and surfaces to
                  remove dust and other substances
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
