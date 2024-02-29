import router from "../routes/Routes";
import { RouterProvider } from "react-router-dom";

const Providers = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Providers;
