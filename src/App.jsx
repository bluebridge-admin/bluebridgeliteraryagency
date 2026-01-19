import { useEffect } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Main from "./layout/Main";

import { RootRoutes } from "./routes";
import { useLocation } from "react-router";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Custom Cursor
    console.log("import.meta.env: ", import.meta.env);
    const cursor = document.getElementById("cursor");
    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <>
      <div className="bg-noise -z-10"></div>
      <div className="custom-cursor -z-10" id="cursor"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-[80px] opacity-60 -z-10"></div>
      <Header />
      <Main>
        <RootRoutes />
      </Main>
      <Footer />
    </>
  );
}

export default App;
