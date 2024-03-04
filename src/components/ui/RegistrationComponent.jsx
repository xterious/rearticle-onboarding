import React from "react";
import Google from "../../assets/ui/Google.svg";
import Microsoft from "../../assets/ui/Microsoft.svg";

const RegistrationComponent = () => {
  const renderButton = (logo, text) => (
    <button className="grow font-medium py-2 px-4 rounded-md border border-1 border-[#00000026] text-[#424242bf]">
      <div className="flex items-center justify-center">
        <img className="w-7" src={logo} alt="" />
        <p className="pl-2">{text}</p>
      </div>
    </button>
  );

  return (
    <div className="flex flex-col gap-3">
      {renderButton(Google, "Continue with Google")}
      {renderButton(Microsoft, "Continue with Microsoft")}
    </div>
  );
};

export default RegistrationComponent;
