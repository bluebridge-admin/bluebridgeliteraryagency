import { useEffect, useState } from "react";
import Hero from "./Hero";
import Animate from "../../components/Animate";
import PageSection from "../../layout/PageSection";
import Partners from "./Partners";
import { NavLink } from "react-router";
import SubHeading from "../../components/SubHeading";
import Testimonies from "./Testimonies";
import FontIcon from "../../components/FontIcon";
import { Helmet } from "react-helmet";

const CTAButton = ({ href, children }) => (
  <NavLink
    to={href}
    className="w-165px group bg-primary-main text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-3"
  >
    {children}

    <FontIcon icon="arrow_forward" />
  </NavLink>
);

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <Helmet>
        <title key="home-title">
          Blue Bridge Literary Agency | Publishing and Marketing Agency
        </title>
        <meta
          key="home-meta-description"
          name="description"
          content="Turning Ideas Into Ink, Your Story, Our Canvas"
        />
      </Helmet>
      <PageSection id="home" className="flex items-center justify-center min-h-[85vh] ">
        <div className="bg-outline-text top-1/4 -left-10">CREATIVITY</div>
        <div className="w-full h-100 grid lg:grid-cols-12 gap-12 items-between justify-between mb-50">
          <div className={`lg:col-span-7 z-10 `}>
            <Animate animation="slideUp">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-blue-100 shadow-sm mt-10 mb-8 ">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-main"></span>
                </span>
                <h1 className="text-[10px] font-black tracking-[0.2em] text-primary-main uppercase">
                  Turning Ideas Into Ink!
                </h1>
              </div>
            </Animate>
            <Animate animation="slideUp" delay={200}>
              <SubHeading size="xl">
                Your Story, <br />
                <span className="text-gradient">Our Canvas</span>
              </SubHeading>
            </Animate>
            <Animate animation="slideUp" delay={400}>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12 font-serif italic">
                "Publishing Success, Marketing Brilliance! We transform creative visions into global
                literary legacies."
              </p>
            </Animate>
            <Animate animation="slideUp" delay={600}>
              <div className="flex flex-col sm:flex-row gap-5 ">
                <CTAButton href="/contact-us">Start Now</CTAButton>
              </div>
            </Animate>
          </div>

          <div className="hidden lg:col-span-5 lg:block animate-float">
            <Hero />
          </div>
        </div>
      </PageSection>
      <PageSection className=" bg-slate-900 relative diagonal">
        <Animate>
          <Testimonies />
        </Animate>
      </PageSection>
      <PageSection maxWidth={false} className="py-30">
        <Partners />
      </PageSection>
    </>
  );
};

export default Home;
