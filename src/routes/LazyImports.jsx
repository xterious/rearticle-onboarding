import { lazy } from "react";

const DashboardLayout = lazy(() => import("./DashboardLayout"));
const LoginPage = lazy(() => import("./auth/LoginPage"));
const SignupPage = lazy(() => import("./auth/SignupPage"));

// Projects Page
const AllProjectsPage = lazy(() => import("./project-pages/AllProjectsPage"));
const MyProjectsPage = lazy(() => import("./project-pages/MyProjectsPage"));
const SharedProjectsPage = lazy(() =>
  import("./project-pages/SharedProjectsPage")
);

export {
  DashboardLayout,
  LoginPage,
  SignupPage,
  AllProjectsPage,
  MyProjectsPage,
  SharedProjectsPage,
};
