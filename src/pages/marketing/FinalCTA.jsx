import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import PageSection from "../../layout/PageSection";

function FinalCTA() {
  return (
    <PageSection className="bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl text-foreground-heading md:text-5xl font-bold mb-6">
          Your Story Deserves to Be Seen
        </h2>
        <p className="lg:text-xl text-foreground-body mb-10 leading-relaxed">
          Whether you're launching your first book or scaling your author brand, we're here to help
          you build credibility, reach more readers, and make a lasting impact. Let's bring your
          vision to life.
        </p>

        <NavLink
          to="/contact-us"
          className="bg-primary-main hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold  transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2 group"
        >
          Start Your Project Today
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </NavLink>
      </div>
    </PageSection>
  );
}

export default FinalCTA;
