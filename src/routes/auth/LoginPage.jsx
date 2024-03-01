import React from "react";
import Logo from "../../assets/ui/Logo.svg";
import InputFieldComponent from "../../components/ui/InputFieldComponent";
import PrimaryButtonComponent from "../../components/ui/PrimaryButtonComponent";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-svh relative w-full">
      <div className="flex gapy-2 flex-col w-full md:w-1/2 lg:w-1/4 px-4">
        <div className=" flex items-center justify-center">
          <img className="w-26" src={Logo} alt="Rearticle Logo" />
        </div>
        <div className="flex gap-y-6 flex-col">
          <h3 className="text-3xl text-[#424242] text-center font-bold">
            Tell us about you
          </h3>
          <InputFieldComponent placeholder="Your Name"></InputFieldComponent>
          <InputFieldComponent placeholder="Name of the Institution"></InputFieldComponent>
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
          <div className="flex w-full rounded-lg">
            <PrimaryButtonComponent name="Agree"></PrimaryButtonComponent>
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
