import BackgroundImage from "../assets/13.png";
import BedImageOne from "../assets/14.png";
import BedImageTwo from "../assets/17.png";
import BedImageThree from "../assets/15.png";
import BedImageFour from "../assets/16.png";
import { HiArrowLongDown } from "react-icons/hi2";

const Inspire = () => {
  return (
    <div className="w-screen h-[180vh] relative">
      <img
        src={BackgroundImage}
        className="w-full h-full object-cover absolute"
      />
      <div className="w-full h-full bg-black absolute opacity-[50%]"></div>
      <h1 className="inspire-heading text-white font-playfair text-[100px] absolute opacity-[10%] top-[5%] right-[15%]">
        <span className="inline-block">GET INSPIRED</span>
      </h1>
      <h1 className="inspire-heading text-white font-playfair text-[100px] absolute top-[10%] right-[10%]">
        <span className="inline-block">GET INSPIRED</span>
      </h1>
      <div className="w-[90%] h-[30%] absolute left-[5%] top-[30%] flex justify-between">
        <div className="first-box w-[64%] h-full bg-red-800 overflow-hidden relative">
          <img
            src={BedImageOne}
            className="w-full h-full object-cover absolute"
          />
          <div className="absolute left-[2%] top-[5%]">
            <p className="text-white font-popins">House in Zelenogorsk</p>
            <p className="text-white font-popins">Repino, 300 m2</p>
          </div>
        </div>
        <div className="second-box w-[35%] h-full bg-red-800 overflow-hidden relative">
          <img
            src={BedImageTwo}
            className="absolute w-full h-full object-cover"
          />
          <div className="w-full h-full bg-[#1E1E1E] absolute opacity-[50%] backdrop-blur-[50px]"></div>
          <div className="absolute left-[2%] top-[5%]">
            <p className="text-white font-popins">House in Zelenogorsk</p>
            <p className="text-white font-popins">Repino, 300 m2</p>
          </div>
          <div className="absolute top-[50%] text-white left-[50%] flex flex-col items-center justify-between translate-x-[-50%] translate-y-[-50%]">
            <p className="font-popins">Learn More</p>
            <HiArrowLongDown className="text-[100px]" />
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[30%] absolute left-[5%] top-[65%] flex justify-between">
        <div className="third-box w-[35%] h-full overflow-hidden relative">
          <img
            src={BedImageThree}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute left-[2%] top-[5%]">
            <p className="text-white font-popins">House in Zelenogorsk</p>
            <p className="text-white font-popins">Repino, 300 m2</p>
          </div>
        </div>

        <div className="third-box w-[64%] h-full overflow-hidden relative">
          <img
            src={BedImageFour}
            className="w-full h-full object-cover absolute object-bottom"
          />
          <div className="absolute left-[2%] top-[5%]">
            <p className="text-white font-popins">House in Zelenogorsk</p>
            <p className="text-white font-popins">Repino, 300 m2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspire;
