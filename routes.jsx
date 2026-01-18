import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router";
import Marketing from "./pages/marketing";
import Publishing from "./pages/publishing";

// import Temp from "./pages/temp";

const routes = [
  {
    name: "Home",
    id: "home",
    route: "/",
    icon: "home",
    isNav: true,
    component: <Home />,
  },

  {
    name: "Publishing",
    id: "publishing-services",
    icon: "dashboard_customize",
    route: "/publishing-services",
    isNav: true,
    component: <Publishing />,
  },
  {
    name: "Marketing",
    id: "marketing-services",
    icon: "dashboard_customize",
    route: "/marketing-services",
    isNav: true,
    component: <Marketing />,
  },
  {
    name: "About Us",
    id: "about",
    icon: "contact_support",
    route: "/about-us",
    isNav: true,
    component: <About />,
  },

  {
    name: "Contact Us",
    id: "contact",
    icon: "perm_contact_calendar",
    route: "/contact-us",
    isNav: true,
    component: <Contact />,
  },

  {
    name: "Not Found",
    id: "notfound",
    route: "/*",
    isNav: false,
    component: <NotFound />,
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
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/publishing-services" element={<Publishing />} />
      <Route path="/marketing-services" element={<Marketing />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      {/* <Route path="/temp" element={<Temp />} /> */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export { getRoutes, RootRoutes };
export default routes;
