import Animate from "../../components/Animate";
import PageSection from "../../layout/PageSection";
import PackageCard from "./PackageCard";

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
      "Everything in Bronze, plus:",
      "Hardcover Availability",
      "Free Basic Editing (up to 35,000 words)",
      "In-depth Editorial Evaluation",
      "Booksellers Return Program",
      "iPage Listing Advertising",
      "Author Website Set-Up",
      "15 Paperback Copies",
      "5 Hardcover Copies",
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

const ServicesSection = () => {
  return (
    <PageSection id="packages">
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
    </PageSection>
  );
};

export default ServicesSection;
