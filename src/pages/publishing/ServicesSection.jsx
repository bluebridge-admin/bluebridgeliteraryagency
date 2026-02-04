import Animate from "../../components/Animate";
import PageSection from "../../layout/PageSection";
import PackageCard from "./PackageCard";
import PACKAGES from "./packages.json";

const ServicesSection = () => {
  return (
    <>
      <PageSection id="packages">
        <Animate animation="fadeIn">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#007BA7] font-bold tracking-wide uppercase text-sm mb-3">
              Our Solutions
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {PACKAGES.blackAndWhite.title}
            </h3>
            <p className="text-lg text-gray-600">{PACKAGES.blackAndWhite.description}</p>
          </div>
        </Animate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-start">
          {PACKAGES.blackAndWhite.packages.map((pkg, index) => (
            <Animate key={index} animation="slideLeft" delay={200 * index}>
              <PackageCard key={pkg.id} pkg={pkg} />
            </Animate>
          ))}
        </div>
      </PageSection>
      <PageSection>
        <Animate animation="fadeIn">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {PACKAGES.colored.title}
            </h3>
            <p className="text-lg text-gray-600">{PACKAGES.colored.description}</p>
          </div>
        </Animate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-start">
          {PACKAGES.colored.packages.map((pkg, index) => (
            <Animate key={index} animation="slideLeft" delay={200 * index}>
              <PackageCard key={pkg.id} pkg={pkg} />
            </Animate>
          ))}
        </div>
      </PageSection>
    </>
  );
};

export default ServicesSection;
