import planImage from "../assets/9.png";
import designImage from "../assets/10.png";
import buildImage from "../assets/1.png";
import { MdStar } from "react-icons/md";

const Review = () => {
  return (
    <div className="w-screen h-[100vh] relative">
      <h1 className="high-review absolute top-[5%] left-[5%] text-[120px] font-playfair text-white opacity-[10%]">
      <span className="inline-block">REVIEWS</span>
      </h1>
      <h1 className="high-review overflow-hidden absolute top-[10%] left-[8%] text-[120px] font-playfair text-white">
        <span className="inline-block">REVIEWS</span>
      </h1>
      
      <p className="left-bio text-white w-[16%] absolute top-[50%] left-[5%] text-[18px]">
        Transforming Homes, Exceeding Expectations: Hear from Our Happy Clients
      </p>
      <a
        href="/"
        className="white-btn inline-block w-[150px] h-[35px] bg-white flex items-center justify-center font-popins font-semibold rounded-[5px] absolute top-[80%] left-[5%]"
      >
        SEE MORE
      </a>
      <div className="w-[60%] h-[60%] absolute top-[35%] right-[5%] flex justify-between">

        <div className="reviews-section w-[32%] relative h-full">
          <div className="w-full h-[70%] overflow-hidden">
            <img className="hover:scale-[1.2] object-center transition duration-[1s] hover:cursor-pointer" src={planImage} />
          </div>
          <div className="absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]"></div>
          <div className="absolute bottom-[0%] font-popins w-full h-[55%] flex flex-col justify-between text-white p-2">
            <div className="w-full h-[50px] flex items-center justify-between">
              <h1 className="text-[25px] font-medium">Sarah K.</h1>
              <div className="w-[50%] h-full flex text-[25px] items-center justify-center">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
            </div>
            <p className="text-justify text-[15px] absolute bottom-[5%] w-[90%]">
              Exceptional service from start to finish! The team transformed our
              space into something truly remarkable. Their attention to detail
              and professionalism made the entire renovation process stress-free
            </p>
          </div>
        </div>
        <div className="reviews-section w-[32%] relative h-full">
          <div className="w-full h-[70%] overflow-hidden">
            <img className="hover:scale-[1.2] object-center transition duration-[1s] hover:cursor-pointer"  src={designImage} />
          </div>
          <div className="absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]"></div>
          <div className="absolute bottom-[0%] font-popins w-full h-[55%] flex flex-col justify-between text-white p-2">
            <div className="w-full h-[50px] flex items-center justify-between">
              <h1 className="text-[25px] font-medium">James R.</h1>
              <div className="w-[50%] h-full flex text-[25px] items-center justify-center">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
            </div>
            <p className="text-justify text-[15px] absolute bottom-[10%] w-[90%]">
              We could not be happier with our home makeover! The crew was
              punctual, skilled, and very communicative throughout. Highly
              recommend for anyone looking for quality renovations.
            </p>
          </div>
        </div>
        <div className="reviews-section w-[32%] relative h-full">
          <div className="w-full h-[70%] overflow-hidden">
            <img className="hover:scale-[1.2] object-center transition duration-[1s] hover:cursor-pointer"  src={buildImage} />
          </div>
          <div className="absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]"></div>
          <div className="absolute bottom-[6%] font-popins w-full h-[50%] flex flex-col justify-between text-white p-2">
            <div className="w-full h-[50px] flex items-center justify-between">
              <h1 className="text-[25px] font-medium">Olivia W.</h1>
              <div className="w-[50%] h-full flex text-[25px] items-center justify-center">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
            </div>
            <p className="text-justify text-[15px] absolute bottom-[-10%] w-[90%]">
              Outstanding craftsmanship! From design to execution, the
              renovation exceeded our expectations. Our home feels brand new,
              and we loved how seamlessly the project was managed.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Review