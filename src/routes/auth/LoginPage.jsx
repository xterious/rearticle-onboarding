import React from "react";
import Logo from "../../assets/ui/Logo.svg";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-svh relative w-full">
      <div className="flex gapy-2 flex-col w-full md:w-1/2 lg:w-1/4 px-4">
        <img className="w-18" src={Logo} alt="Rearticle Logo" />
        <div className="flex gap-y-6 flex-col">
          <h3 className="text-3xl text-[#424242] text-center font-bold">
            Tell us about you
          </h3>
          <input
            type="text"
            className="border border-gray-300 rounded-md pl-4 pr-20 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
          />
          <input
            type="text"
            class="border border-gray-300 rounded-md pl-4 pr-20 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Name of the Institution"
          />
          <p className="text-[#424242b3] text-xs/[22px] font-medium cursor-default text-center">
            By clicking “Agree”, you agree to our
            <a href="#" className="text-blue-600 underline ml-1">
              Terms
            </a>
            . Our <br />
            <a href="#" className="text-blue-600 underline mr-1">
              Privacy Policy
            </a>
            explains how we process your data
          </p>
          <div className="flex bg-red-300 w-full rounded-lg">
            <button class="shadow-md grow bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded">
              Agree
            </button>
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-5">
        <div>
          <a href="#" className="text-blue-600 text-xs mr-1">
            Terms of Use
          </a>
          <span className="text-xs">{"| "}</span>
          <a href="#" className="text-blue-600 text-xs ">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
