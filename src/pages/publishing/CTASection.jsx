import { NavLink } from "react-router";
import Animate from "../../components/Animate";
import PageSection from "../../layout/PageSection";
import PackageCard from "./PackageCard";

const CTASection = () => {
  return (
    <section className="py-24 bg-[#007BA7] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <Animate animation="fadeIn">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Publish Your Book?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of successful authors who trusted us with their story. Your journey from
            manuscript to marketplace starts here.
          </p>
          <NavLink
            to="/contact-us"
            className="bg-white text-[#007BA7] px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1"
          >
            Start Your Publishing Journey
          </NavLink>
        </div>
      </Animate>
    </section>
  );
};

export default CTASection;
