import { createBrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import DashboardLayout from "./DashboardLayout";
import {
  AllProjectsPage,
  LoginPage,
  MyProjectsPage,
  SharedProjectsPage,
  SignupPage,
} from "./LazyImports";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/auth/signup", element: <SignupPage /> },
  { path: "/auth/login", element: <LoginPage /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <AllProjectsPage /> },
      { path: "my-projects", element: <MyProjectsPage /> },
      { path: "shared-projects", element: <SharedProjectsPage /> },
    ],
  },
]);

export default router;
