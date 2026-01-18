import PageSection from "../../layout/PageSection";
import FontIcon from "../../components/FontIcon";
import Animate from "../../components/Animate";

function WebsiteCreation() {
  const features = [
    {
      icon: "home",
      title: "Home Page",
      description: "Welcome readers with a stunning first impression",
    },
    {
      icon: "person",
      title: "About the Author",
      description: "Share your story and connect authentically",
    },
    {
      icon: "image",
      title: "Gallery",
      description: "Showcase your books, covers, and visual brand",
    },
    {
      icon: "shopping_cart",
      title: "Order Page",
      description: "Direct readers to purchase your books",
    },
    {
      icon: "contact_mail",
      title: "Contact Page",
      description: "Make it easy for readers and media to reach you",
    },
    {
      icon: "dashboard",
      title: "Custom Section",
      description: "Blog, events, trailers, FAQs - your choice",
    },
  ];

  const securityPoints = [
    "Full website ownership - no third-party control",
    "Secure data protection for you and your readers",
    "Build trust with professional, encrypted connections",
    "Long-term stability and brand consistency",
  ];

  return (
    <PageSection className="bg-slate-900 diagonal" pb={"200px"}>
      <div className="text-center mb-16">
        <Animate animation="slideUp">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-dark/10 rounded-full mb-6 animate-float">
            <FontIcon icon="auto_stories" size="lg" className="text-primary-main" />
          </div>
        </Animate>
        <Animate animation="slideUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Website Creation & Setup for Authors
          </h2>
        </Animate>
        <Animate animation="slideUp">
          <p className="text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            Your website is your digital home - a place where readers discover your work, learn your
            story, and connect with your brand. We create professional, secure, and author-focused
            websites that establish your credibility and help you own your presence online.
          </p>
        </Animate>
      </div>
      <Animate animation="slideUp">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12 mb-12 border border-[var(--color-silver-main)]/30 shadow-sm relative overflow-hidden group">
          <div className="flex items-start gap-4 mb-6">
            <div>
              <div className="flex flex-row justify-start items-base gap-2">
                <FontIcon icon="security" className="text-primary-main" size="lg" />
                <h3 className="text-2xl font-bold text-foreground-heading mb-4">
                  Why Securing Your Website Matters
                </h3>
              </div>

              <p className="text-lg font-medium text-foreground-body mb-6">
                In a world of rented platforms and social media uncertainty, your website is the one
                space you truly control. Security isn't just technical - it's about trust,
                ownership, and protecting your brand.
              </p>
              <ul className="space-y-3">
                {securityPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 ">
                    <FontIcon icon="check_circle" className="text-primary-main" size="sm" />
                    <span className="text-foreground-body">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Animate>
      <div className="py-12">
        <Animate animation="slideUp">
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            What Your Website Package Includes
          </h3>
        </Animate>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Animate animation="slideUp" delay={100 * index}>
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-silver-main)]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <FontIcon icon={feature.icon} size="md" />
                </div>
                <h4 className="text-xl font-semibold text-foreground-heading mb-2">
                  {feature.title}
                </h4>
                <p className="text-foreground-body">{feature.description}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
      <Animate animation="fadeIn">
        <div className="bg-primary-main/80 rounded-2xl p-8 text-center">
          <p className="text-white lg:text-xl">
            <span className="font-semibold">Everything handled for you.</span> From domain setup to
            security certificates, we take care of the technical details so you can focus on what
            matters most - your writing.
          </p>
        </div>
      </Animate>
    </PageSection>
  );
}

export default WebsiteCreation;
