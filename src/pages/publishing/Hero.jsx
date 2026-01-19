import Animate from "../../components/Animate";
import PageSection from "../../layout/PageSection";
import SubHeading from "../../components/SubHeading";
import MarketingImage from "../../assets/images/digital-marketing.avif";
import { Check, ArrowRight, BookOpen, Star, Globe, Award, Zap } from "lucide-react";
import { NavLink } from "react-router";
import Heading from "../../components/Heading";
import BooksImages from "../../assets/images/books.avif";

const Hero = () => {
  return (
    <PageSection>
      <div className="absolute inset-0 z-0">
        <img
          src={BooksImages}
          alt="Library Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background-default)]/80 via-[var(--color-background-default)]/50 to-[var(--color-background-default)]"></div>
      </div>

      <div className="mx-auto  relative z-10">
        <div className="text-center py-20 mx-auto">
          <Animate animation="fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#007BA7] font-semibold text-sm mb-8 animate-fade-in-up">
              <Award size={16} />
              <h1>Award-Winning Publishing Services</h1>
            </div>
          </Animate>

          <Animate animation="slideUp" delay={400}>
            <SubHeading align="center" size="lg">
              Publishing
              <br />
              <span className="text-gradient">Made Professional</span>
            </SubHeading>

            <p className="mt-6 text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We provide top-quality publishing services, helping you share your stories, articles,
              and books with the world through a seamless, author-first process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#packages"
                className="w-full sm:w-auto px-8 py-4 bg-[#007BA7] text-white rounded-full font-bold text-lg hover:bg-[#006288] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#007BA7]/30 flex items-center justify-center gap-2"
              >
                Explore Publishing <ArrowRight size={20} />
              </a>
              <NavLink
                to="/contact-us"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:border-[#007BA7]/30"
              >
                Schedule Consultation
              </NavLink>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-gray-500 font-medium">Books Published</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">50k+</div>
                <div className="text-sm text-gray-500 font-medium">Copies Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-gray-500 font-medium">Author Rights</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-gray-500 font-medium">Support</div>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </PageSection>
  );
};

export default Hero;
