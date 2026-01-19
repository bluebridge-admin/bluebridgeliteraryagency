import Hero from "./Hero";
import WebsiteCreation from "./WebsiteCreation";
import SEOService from "./SEOService";
import CinematicBookTrailers from "./CinematicBookTrailers";
import YouTubeViews from "./YouTubeViews";
import LiteraryOutreach from "./LiteraryOutreach";
import FinalCTA from "./FinalCTA";
import { Helmet } from "react-helmet";

function Marketing() {
  return (
    <>
      <Helmet>
        <title key="marketing-title">
          Marketing Services | SEO & Web Design | Blue Bride Literary Agency
        </title>
        <meta
          key="marketing-meta-description"
          name="description"
          content="We build brands that matter. Explore our suite of creative services, including custom web design, branding, and content marketing. Let's create something unique together."
        />
      </Helmet>
      <Hero />
      <WebsiteCreation />
      <SEOService />
      <CinematicBookTrailers />
      <YouTubeViews />
      <LiteraryOutreach />
      <FinalCTA />
    </>
  );
}

export default Marketing;
