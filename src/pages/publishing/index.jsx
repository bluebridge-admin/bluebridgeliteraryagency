import { Check, ArrowRight, BookOpen, Star, Globe, Award, Zap } from "lucide-react";
import PageSection from "../../layout/PageSection";

import SubHeading from "../../components/SubHeading";
import Animate from "../../components/Animate";
import BooksImages from "../../assets/images/books.avif";
import { NavLink } from "react-router";
import { Helmet } from "react-helmet";
const packages = [
  {
    id: "bronze",
    title: "Bronze",
    subtitle: "Economical & Essential",
    description:
      "Our most economical publishing program, equipped with all the essentials for efficient international publication—plus the flexibility to add services anytime.",
    features: [
      "Cover and Interior Customization",
      "ISBN Assignment",
      "Paperback Availability",
      "ePub / eBook Availability",
      "Global Distribution",
      "Library of Congress Control Number",
      "Copyright Registration",
      "Unlimited Color / B&W Image Insertions",
      'Amazon "Look Inside" & Google Preview',
      'Barnes & Noble "Read Instantly"',
      "5 Free Paperback Copies",
    ],
    highlight: false,
    color: "bg-slate-100 text-slate-800",
  },
  {
    id: "silver",
    title: "Silver",
    subtitle: "Hardcover & Extended Value",
    description:
      "A wide-ranging package designed for authors ready to compete in today’s publishing market with strong presentation and editorial support.",
    features: [
      "Everything in Bronze, plus:",
      "Hardcover Availability",
      "Free Basic Editing (up to 35,000 words)",
      "In-depth Editorial Evaluation",
      "Booksellers Return Program",
      "iPage Listing Advertising",
      "Author Website Set-Up",
      "15 Paperback Copies",
      "5 Hardcover Copies",
    ],
    highlight: false,
    color: "bg-gray-100 text-gray-800",
  },
  {
    id: "gold",
    title: "Gold",
    subtitle: "Ultimate All-in-One Solution",
    description:
      "The ultimate publishing bundle combining premium editing, marketing exposure, and long-term visibility to help your book stand out.",
    features: [
      "Everything in Silver, plus:",
      "Free Basic Editing (up to 55,000 words)",
      "24-Month Booksellers Return Program",
      "Basic Search Engine Optimization",
      "30 Days Facebook Marketing",
      "Goodreads Giveaway Program",
      "20 Paperback Copies",
      "10 Hardcover Copies",
    ],
    highlight: true,
    color: "bg-[#007BA7] text-white",
  },
];

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

const FeatureItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-600 text-lg leading-relaxed">
    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
      <Check size={12} className="text-[#007BA7]" strokeWidth={3} />
    </div>
    <span>{text}</span>
  </li>
);

const PackageCard = ({ pkg }) => {
  const isGold = pkg.highlight;

  return (
    <div
      className={`relative flex flex-col h-full bg-white rounded-2xl transition-all duration-300 group
      ${
        isGold
          ? "ring-2 ring-[#007BA7] shadow-2xl shadow-blue-900/10 scale-100 md:scale-105 z-10"
          : "border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-100"
      }`}
    >
      {isGold && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#007BA7] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
            <Star size={12} fill="white" /> Most Popular
          </span>
        </div>
      )}

      <div className={`p-8 ${isGold ? "pb-6" : ""}`}>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
          <p className="text-sm font-semibold text-[#007BA7] uppercase tracking-wide">
            {pkg.subtitle}
          </p>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed min-h-[80px]">{pkg.description}</p>
      </div>

      <div className="px-8 flex-grow">
        <div className="w-full h-px bg-slate-100 mb-6" />
        <ul className="space-y-4 mb-8">
          {pkg.features.map((feature, idx) => (
            <FeatureItem key={idx} text={feature} />
          ))}
        </ul>
      </div>

      {/* <div className="p-8 mt-auto">
        <button
          className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group-hover:gap-3
          ${
            isGold
              ? "bg-[#007BA7] text-white hover:bg-[#006288] shadow-lg shadow-[#007BA7]/25"
              : "bg-slate-50 text-slate-700 hover:bg-[#007BA7] hover:text-white border border-slate-200 hover:border-[#007BA7]"
          }`}
        >
          View Details <ArrowRight size={16} />
        </button>
      </div> */}
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-50" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Animate animation="fadeIn">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#007BA7] font-bold tracking-wide uppercase text-sm mb-3">
              Our Solutions
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Publishing Packages
            </h3>
            <p className="text-lg text-gray-600">
              Choose the perfect pathway for your book. From digital-first launches to full-scale
              hardcover distribution, we have a solution tailored to your goals.
            </p>
          </div>
        </Animate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-start">
          {packages.map((pkg, index) => (
            <Animate key={index} animation="slideLeft" delay={200 * index}>
              <PackageCard key={pkg.id} pkg={pkg} />
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      title: "Consultation",
      desc: "We discuss your goals and choose the right package.",
      icon: <Zap />,
    },
    {
      title: "Production",
      desc: "Editing, cover design, and formatting take place.",
      icon: <BookOpen />,
    },
    {
      title: "Distribution",
      desc: "Your book goes live on Amazon, B&N, and more.",
      icon: <Globe />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#007BA7] flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

function Publishing() {
  return (
    <>
      <Helmet>
        <title>Content Publishing & CMS Management Services | Blue Bridge</title>
        <meta
          name="description"
          content="Stop struggling with your CMS. We handle content uploading, formatting, and publishing for WordPress, HubSpot, and more. Ensure error-free, SEO-optimized posts every time."
        />
      </Helmet>
      <Hero />
      <Animate animation="slideUp">
        <ProcessSection />
      </Animate>
      <ServicesSection />
      <CTASection />
    </>
  );
}

export default Publishing;
