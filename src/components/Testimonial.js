import pic01 from "./../files/avatar-ali.png";
import pic02 from "./../files/avatar-anisha.png";
import pic03 from "./../files/avatar-richard.png";

function Testimonial() {
  return (
    <section>
      <div className=" max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* --heading-- */}
        <h2 className="text-4xl font-bold text-center">
          what's different about manage..?
        </h2>
        {/* --Testimonial containor-- */}
        <div className=" flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* --test 01-- */}
          <div
            className=" flex flex-col items-center p-6 space-y-6 rounded-lg 
                 bg-veryLightGray md:w-1/3"
          >
            <img src={pic01} className="w-16 -mt-14 " alt="" />
            <h5 className=" text-lg font-bold">Anisha Ali</h5>
            <p className=" text-sm text-darkGrayishBlue">
              Having a vehicle for your personal use is an integral part of
              modern life. While many people prefer to own a bike for
              practicality and economic value, owning a car is a much better
              option for most couples and families. One of the biggest benefits
              of
            </p>
          </div>

          {/* --test 02-- */}
          <div
            className="hidden md:flex flex flex-col items-center p-6 space-y-6 rounded-lg 
                 bg-veryLightGray md:w-1/3"
          >
            <img src={pic03} className="w-16 -mt-14 " alt="" />
            <h5 className=" text-lg font-bold">walter white</h5>
            <p className=" text-sm text-darkGrayishBlue">
              Having a vehicle for your personal use is an integral part of
              modern life. While many people prefer to own a bike for
              practicality and economic value, owning a car is a much better
              option for most couples and families. One of the biggest benefits
              of
            </p>
          </div>

          {/* --test 03-- */}
          <div
            className=" hidden flex md:flex flex-col items-center p-6 space-y-6 rounded-lg 
                 bg-veryLightGray md:w-1/3"
          >
            <img src={pic01} className="w-16 -mt-14 " alt="" />
            <h5 className=" text-lg font-bold">kabuut ali</h5>
            <p className=" text-sm text-darkGrayishBlue">
              Having a vehicle for your personal use is an integral part of
              modern life. While many people prefer to own a bike for
              practicality and economic value, owning a car is a much better
              option for most couples and families. One of the biggest benefits
              of
            </p>
          </div>
        </div>
        {/* button */}
        <div className=" my-16">
          <a
            className="   p-3 
        px-6 pt-2 text-white bg-brightRed 
        rounded-full self-baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
      {/* --CTA section-- */}
      <section className=" bg-brightRed ">
        {/* --flex contaior --*/}
        <div
          className=" container flex flex-col items-center justify-between px-6 
         py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
        >
          {/* --heading-- */}
          <h2
            className=" text-5xl font-bold leading-tight text-center
             text-white md:text-4xl md:max-w-xl md:text-left"
          >
            Simplify how your team works today
          </h2>
          <div>
            <a
              className="   p-3 
        px-6 pt-2 text-brightRed bg-white 
        rounded-full self-baseline hover:bg-gray-900"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Testimonial;
