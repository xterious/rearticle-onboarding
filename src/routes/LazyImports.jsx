import { lazy } from "react";

const LoginPage = lazy(() => import("./auth/LoginPage"));
const SignupPage = lazy(() => import("./auth/SignupPage"));

// Projects Page
const AllProjectsPage = lazy(() => import("./project-pages/AllProjectsPage"));
const MyProjectsPage = lazy(() => import("./project-pages/MyProjectsPage"));
const SharedProjectsPage = lazy(() =>
  import("./project-pages/SharedProjectsPage")
);

export {
  LoginPage,
  SignupPage,
  AllProjectsPage,
  MyProjectsPage,
  SharedProjectsPage,
};
