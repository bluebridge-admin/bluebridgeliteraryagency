import Animate from "../../components/Animate";
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import ProcessesSection from "./ProcessesSection";
import CTASection from "./CTASection";

function Publishing() {
  return (
    <>
      <Helmet>
        <title key="publishing-title">
          Content Publishing & CMS Management Services | Blue Bridge
        </title>
        <meta
          key="publishing-meta-description"
          name="description"
          content="Stop struggling with your CMS. We handle content uploading, formatting, and publishing for WordPress, HubSpot, and more. Ensure error-free, SEO-optimized posts every time."
        />
      </Helmet>
      <Hero />
      <Animate animation="slideUp">
        <ProcessesSection />
      </Animate>
      <ServicesSection />
      <CTASection />
    </>
  );
}

export default Publishing;
