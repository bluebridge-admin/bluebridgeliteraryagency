import Animate from "../../components/Animate";
import PageSection from "../../layout/PageSection";
import SubHeading from "../../components/SubHeading";
import MarketingImage from "../../assets/images/digital-marketing.avif";
import { NavLink } from "react-router";
import Heading from "../../components/Heading";

const Hero = () => {
  return (
    <PageSection className="relative min-h-[80vh] flex items-center justify-center ol-red">
      <div className="absolute inset-0 z-0">
        <img
          src={MarketingImage}
          alt="Library Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background-default)]/80 via-[var(--color-background-default)]/50 to-[var(--color-background-default)]"></div>
      </div>

      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[var(--color-primary-light)]/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

      <Animate>
        <Heading align="center">Marketing Services</Heading>
      </Animate>

      <Animate delay={200}>
        <SubHeading align="center" size="lg">
          Elevate Your
          <br /> <span className="text-gradient">Author Brand</span>
        </SubHeading>
      </Animate>

      <Animate delay={400}>
        <p className="text-xl md:text-3xl text-slate-700 py-12 leading-relaxed font-medium max-w-5xl mx-auto text-center">
          Build credibility, amplify your voice, and connect with readers worldwide. Professional
          services designed exclusively for authors who are ready to grow.
        </p>
      </Animate>

      <Animate delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink
            to="/contact-us"
            className="bg-primary-main hover:translate-y-[-4px] text-[var(--color-primary-contrastText)] px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-xl shadow-[var(--color-primary-main)]/30 hover:shadow-[var(--color-primary-main)]/50"
          >
            Get Started Today
          </NavLink>
        </div>
      </Animate>
    </PageSection>
  );
};

export default Hero;
