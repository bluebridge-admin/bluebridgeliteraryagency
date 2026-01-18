import { BarChart, Target, TrendingUp, Zap } from "lucide-react";
import PageSection from "../../layout/PageSection";
import Animate from "../../components/Animate";
import FontIcon from "../../components/FontIcon";

function YouTubeViews() {
  const benefits = [
    {
      number: "01",
      title: "Instant Credibility",
      description:
        "Higher view counts signal popularity and quality, encouraging organic viewers to watch and engage",
    },
    {
      number: "02",
      title: "Organic Reach Boost",
      description:
        "YouTube's algorithm favors videos with momentum - more views lead to more recommendations",
    },
    {
      number: "03",
      title: "Attract Media & Reviewers",
      description:
        "Book bloggers, influencers, and media outlets notice content that already has traction",
    },
    {
      number: "04",
      title: "Stand Out in a Crowded Market",
      description: "Thousands of authors compete for attention - guaranteed views give you an edge",
    },
    {
      number: "05",
      title: "Create Buzz Around Book Launches",
      description: "Launch day visibility sets the tone for long-term success",
    },
  ];

  const howWeHelp = [
    {
      icon: Target,
      title: "Targeted Audience",
      description: "Real viewers interested in books and your genre",
    },
    {
      icon: TrendingUp,
      title: "Organic Growth",
      description: "No bots or fake engagement - authentic results",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "See results quickly and maintain momentum",
    },
    {
      icon: BarChart,
      title: "Campaign Optimization",
      description: "Ongoing support to maximize impact",
    },
  ];

  return (
    <PageSection>
      <div className="text-center mb-16">
        <Animate animation="fadeIn">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 animate-float">
            <FontIcon icon="trending_up" size="lg" />
          </div>
        </Animate>
        <Animate animation="slideUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-heading mb-6">
            Unlock Your Author Brand with Guaranteed YouTube Views
          </h2>
        </Animate>
        <Animate animation="slideUp">
          <p className="text-lg lg:text-xl text-foreground-body font-medium max-w-3xl mx-auto leading-relaxed">
            Visibility on YouTube isn't just about numbers - it's about authority, momentum, and
            algorithmic advantage. Guaranteed views give your book trailers, interviews, and author
            content the initial push needed to reach a wider audience organically.
          </p>
        </Animate>
      </div>

      <div className="mb-16">
        <Animate animation="fadeIn">
          <h3 className="text-3xl font-bold text-foreground-heading text-center mb-10">
            Why Guaranteed Views Matter
          </h3>
        </Animate>
        <div className="space-y-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Animate key={index} animation="fadeIn" delay={100 * index}>
              <div className="bg-slate-50 rounded-xl p-6 md:p-8 flex flex-col  gap-3 border border-slate-400/30 shadow-md">
                <div className="flex-shrink-0 flex flex-row items-center justify-start gap-2">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">{benefit.number}</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground-heading mb-2">
                    {benefit.title}
                  </h4>
                </div>

                <p className="lg:text-lg text-foreground-body">{benefit.description}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-10 md:p-14">
        <Animate animation="fadeIn">
          <h3 className="text-2xl font-bold mb-10 text-center">How We Help</h3>
        </Animate>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {howWeHelp.map((item, index) => (
            <Animate key={index} animation="fadeIn" delay={100 * index}>
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="lg:text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="lg:text-lg text-slate-300">{item.description}</p>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
      <Animate animation="fadeIn">
        <div className="mt-12 text-center">
          <p className="text-lg lg:text-xl text-medium text-slate-700 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold">Trust-focused and results-driven.</span> Our approach
            prioritizes real engagement and sustainable growth, ensuring your content gets the
            visibility it deserves while maintaining integrity and authenticity.
          </p>
        </div>
      </Animate>
    </PageSection>
  );
}

export default YouTubeViews;
