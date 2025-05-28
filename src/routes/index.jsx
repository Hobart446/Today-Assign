import { createBrowserRouter } from "react-router-dom";
import HomepageThree from "../pages/HomeThree";
import AboutPage from "../pages/AboutPage";
import PricingPageTwo from "../pages/PricingPageTwo";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ContactPageThree from "../pages/ContactPageThree";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageThree />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/pricing-2",
    element: <PricingPageTwo />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/contact-3",
    element: <ContactPageThree />,
  },
]);
