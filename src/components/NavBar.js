import { useState } from "react";
import logo from "./../files/logo.svg";

function NavBar() {

    const [btn, setBtn] = useState(true)

    function handleClick(){
        setBtn(btn => !btn)
    }
    let variable = null
     variable = btn ? 'hidden' : "" ;


  return (
    <nav className=" relative container mx-auto p-6 ">
      {/* --flex box-- */}
      <div className=" flex items-center justify-between ">
        {/* --first item logo-- */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* --second item rowlist-- */}
        <div className=" hidden  md:flex space-x-6 ">
          <a href="#" className=" hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className=" hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className=" hover:text-darkGrayishBlue">
            About US
          </a>
          <a href="#" className=" hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className=" hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        {/* --third item button-- */}
        <a
          className=" hidden md:block p-3 
        px-6 pt-2 text-white bg-brightRed 
        rounded-full self-baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
        <button className="md:hidden flex flex-col space-y-1 border p-1 rounded shadow "
                onClick={handleClick}>
            <div className="h-0.5 w-6 bg-black relative rounded"></div>
            <div className="h-0.5 w-6 bg-black relative rounded"></div>
            <div className="h-0.5 w-6 bg-black relative rounded"></div>
        </button>
      </div>
      <div className={` flex md:hidden flex-col text-center font-bold space-y-4 mt-5 absolute bg-white left-6 right-6
       shadow pb-2 pt-2 ${variable} `}>
            <a href="#" className=" text-bold ">Pricing</a>
            <a href="#" className=" text-bold ">Product</a>
            <a href="#" className=" text-bold ">About US</a>
            <a href="#" className=" text-bold ">Career</a>
            <a href="#" className=" text-bold ">Community</a>
      </div>
    </nav>
  );
}

export default NavBar;
