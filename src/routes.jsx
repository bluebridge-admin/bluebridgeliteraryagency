import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import { Navigate, Route, Routes } from "react-router";
import Marketing from "./pages/marketing";
import Publishing from "./pages/publishing";

const routes = [
  {
    name: "Home",
    id: "home",
    route: "/",
    icon: "home",
    isNav: true,
    component: <Home />,
    title: "Blue Bridge Literary Agency | Publishing and Marketing Agency",
    metaDescription: "Turning Ideas Into Ink, Your Story, Our Canvas",
  },

  {
    name: "Publishing",
    id: "publishing-services",
    icon: "dashboard_customize",
    route: "/publishing-services",
    isNav: true,
    component: <Publishing />,
    title: "Content Publishing & CMS Management Services | Blue Bridge",
    metaDescription:
      "Stop struggling with your CMS. We handle content uploading, formatting, and publishing for WordPress, HubSpot, and more. Ensure error-free, SEO-optimized posts every time.",
  },
  {
    name: "Marketing",
    id: "marketing-services",
    icon: "dashboard_customize",
    route: "/marketing-services",
    isNav: true,
    component: <Marketing />,
    title: "Marketing Services | SEO & Web Design | Blue Bride Literary Agency",
    metaDescription:
      "We build brands that matter. Explore our suite of creative services, including custom web design, branding, and content marketing. Let's create something unique together.",
  },
  {
    name: "About Us",
    id: "about",
    icon: "contact_support",
    route: "/about-us",
    isNav: true,
    component: <About />,
    title: "About Us | Digital Marketing Agency | Blue Bride Literary Agency",
    metaDescription:
      "Your partners in growth. Learn how Blue Bride Literary Agency helps businesses thrive through custom SEO, web design, and marketing strategies. Meet your new team today.",
  },

  {
    name: "Contact Us",
    id: "contact",
    icon: "perm_contact_calendar",
    route: "/contact-us",
    isNav: true,
    component: <Contact />,
    title: "Contact Us | SEO & Marketing Services | Blue Bridge Literary Agency",
    metaDescription:
      "Have a question about your marketing strategy? We're here to help. Reach out to the [Agency Name] team via phone, email, or chat. Let's discuss your goals.",
  },

  {
    name: "Not Found",
    id: "notfound",
    route: "/*",
    isNav: false,
    // component: <NotFound />,
    component: <Navigate to="/" />,
    title: "",
    metaDescription: "",
  },
];

const getRoutes = () =>
  routes.map((route) => {
    if (route.route) {
      return <Route key={route.route} exact path={route.route} element={route.component} />;
    }

    return null;
  });

const RootRoutes = () => {
  return <Routes>{getRoutes()}</Routes>;
};

export { getRoutes, RootRoutes };
export default routes;
