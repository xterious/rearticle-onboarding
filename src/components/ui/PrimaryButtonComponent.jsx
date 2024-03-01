import React from "react";

const PrimaryButtonComponent = ({ name = "Submit", onClick }) => {
  return (
    <button
      onClick={onClick}
      class="shadow-md grow bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded"
    >
      {" "}
      {name}
    </button>
  );
};

export default PrimaryButtonComponent;
