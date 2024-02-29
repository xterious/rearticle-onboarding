import { Suspense } from "react";
import router from "../routes/Routes";
import { RouterProvider } from "react-router-dom";

const Providers = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default Providers;
