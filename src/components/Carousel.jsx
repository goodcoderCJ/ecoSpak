import youngAfrica from "../assets/youngafrican.jpg";
import cleaning from "../assets/cleaning.jpg";

import sittingRoom from "../assets/sittingroom.jpg";

function Carousel() {
  return (
    <div className="carousel md:hidden lg:hidden pt[2em] mt-[2em] flex flex-col">
      <div className="carousel w=full  flex justify-between">
        <div id="item1" className="carousel-item w-[30%] ">
          <img src={youngAfrica} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-[30%]">
          <img src={cleaning} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-[30%]">
          <img src={sittingRoom} className="w-full" />
        </div>
      </div>
      <div className="flex justify-around mx-[auto] items-center w-[92%] py-1 gap-2">
        <a href="#item1" className="btn btn-xs font-bold">
          1
        </a>
        <a href="#item2" className="btn btn-xs font-bold">
          2
        </a>
        <a href="#item3" className="btn btn-xs font-bold">
          3
        </a>
      </div>
    </div>
  );
}

export default Carousel;
