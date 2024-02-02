import { FaCheck, FaDollarSign } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

function Pricing() {
  return (
    <>
      <div className="pricing-section mb-[1em] sm:mb-[1em] md:mb-[15em] lg:mb-[25em]">
        <div className="pricing-wrapper wrap py-[3em]">
          <div className="pricing-section-headings mt-[2em] mb-[3em]">
            <h1 className="text-[#00558e] text-[0.8rem] text-center font-bold mb-[0.6em]">
              PRICING PLANS
            </h1>
            <h3 className="text-[1.5rem] text-center font-bold">
              We Offer Best Price to Help You
            </h3>
          </div>
          <div className="pricing-section-grid mb-[3em]">
            <div className="pricing-col-1 rounded-tl-[10px] rounded-tr-[10px] shadow-md">
              <div className="clipit pricing-col-1-bg rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]  ">
                <div className="pricing-bg-content">
                  <p>Basic</p>
                  <b className="flex items-center justify-center my-[1em] text-[1.3rem]  text-bold">
                    <FaDollarSign className="" />
                    <p className="ml-[-0.2em]">50</p>
                  </b>
                  <p>/visit</p>
                </div>
              </div>
              <div className="pricing-checked-text">
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Affordable</p>
                </div>
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Accessible</p>
                </div>
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Within Range</p>
                </div>
                <div className="text-crossed">
                  <FaX className="cancel" />
                  <p>Unscalable</p>
                </div>
              </div>
            </div>

            <div className="pricing-col-2 rounded-tl-[10px] rounded-tr-[10px] shadow-md">
              <div className="clipit pricing-col-2-bg rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
                <div className="pricing-bg-content">
                  <p>Standard</p>
                  <b className="flex items-center justify-center my-[1em] text-[1.3rem]  text-bold">
                    <FaDollarSign />
                    <p className="ml-[-0.2em]">75</p>
                  </b>
                  <p>/visit</p>
                </div>
              </div>
              <div className="pricing-checked-text">
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Adaptable</p>
                </div>
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>User Friendly</p>
                </div>
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Pragmatic</p>
                </div>
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Scalable</p>
                </div>
                <div className="text-crossed">
                  <FaX className="cancel" />
                  <p>Unadaptable</p>
                </div>
              </div>
            </div>

            <div className="pricing-col-3 rounded-tl-[10px] rounded-tr-[10px] shadow-md">
              <div className="clipit pricing-col-3-bg rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
                <div className="pricing-bg-content">
                  <p>Super</p>
                  <b className="flex items-center justify-center my-[1em] text-[1.3rem]  text-bold">
                    <FaDollarSign />
                    <p className="ml-[-0.2em]">100</p>
                  </b>
                  <p>/visit</p>
                </div>
              </div>
              <div className="pricing-checked-text">
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Quick</p>
                </div>
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>A Game Changer</p>
                </div>
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Consistent</p>
                </div>
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Thorough</p>
                </div>
                <div className="text-crossed">
                  <FaCheck className="good" />
                  <p>Customer Friendly</p>
                </div>
                <div className="text-crossed">
                  <FaX className="cancel" />
                  <p>Unresponsive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
