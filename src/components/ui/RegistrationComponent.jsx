import React from "react";
import Google from "../../assets/ui/Google.svg";

const RegistrationComponent = ({ img, desciption }) => {
  return (
    <button class="grow  font-medium py-2 px-4 rounded-md border border-1  border-[#00000026] text-[#424242bf]">
      <div className="flex items-center justify-center">
        <img className="w-7" src={Google} alt="" />
        <p className="pl-2">Continue with Google</p>
      </div>
    </button>
  );
};

export default RegistrationComponent;
