import { useEffect } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Main from "./layout/Main";

import RootRoutes from "./routes";
import { useLocation } from "react-router";

const HEAD_DATA = {
  "/": {
    title: "Blue Bridge Literary Agency | Publishing & Marketing",
    description:
      "Expert publishing solutions & marketing brilliance for authors. Navigate your path to sustainable literary prosperity with our comprehensive author services.",
  },
  "/about-us": {
    title: "About Us | Blue Bridge Literary Agency",
    description:
      "Your partners in growth. Learn how Blue Bride Literary Agency helps businesses thrive through custom SEO, web design, and marketing strategies. Meet your new team today.",
  },
  "/marketing-services": {
    title: "Marketing Services | SEO & Web Design",
    description:
      "We build brands that matter. Explore our suite of creative services, including custom web design, branding, and content marketing. Let's create something unique together.",
  },
  "/publishing-services": {
    title: " Content Publishing & CMS Management Services | Blue Bridge",
    description:
      "Stop struggling with your CMS. We handle content uploading, formatting, and publishing for WordPress, HubSpot, and more. Ensure error-free, SEO-optimized posts every time.",
  },
  "/contact-us": {
    title: "Contact Us | SEO & Marketing Services | Blue Bridge Literary Agency",
    description:
      "Have a question about your marketing strategy? We're here to help. Reach out to the [Agency Name] team via phone, email, or chat. Let's discuss your goals.",
  },
};

function Head() {
  const { pathname } = useLocation();

  return (
    <>
      <title key="contact-title">{HEAD_DATA?.[pathname]?.title}</title>
      <meta
        key="contact-meta-description"
        name="description"
        content={HEAD_DATA?.[pathname]?.description}
      />
    </>
  );
}

export default Head;
