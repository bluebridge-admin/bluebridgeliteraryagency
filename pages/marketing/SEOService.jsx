import PageSection from "../../layout/PageSection";
import FontIcon from "../../components/FontIcon";
import Animate from "../../components/Animate";

function SEOService() {
  const benefits = [
    {
      icon: "visibility",
      title: "Increased Visibility",
      description: "Readers find you when searching for books in your genre",
    },
    {
      icon: "editor_choice",
      title: "Credibility & Authority",
      description: "Ranking high signals trust and professionalism",
    },
    {
      icon: "trending_up",
      title: "Organic Traffic Growth",
      description: "Steady stream of new readers without paid ads",
    },
    {
      icon: "star_shine",
      title: "Better Book Launches",
      description: "SEO-optimized pages perform better from day one",
    },
    {
      icon: "group",
      title: "Audience Building",
      description: "Turn casual browsers into dedicated fans",
    },
  ];

  const steps = [
    {
      title: "Keyword Research for Authors",
      description:
        "Discover what readers are searching for - genres, themes, author names, and book topics",
    },
    {
      title: "Optimized Book & Author Pages",
      description:
        "Craft meta descriptions, titles, and content that rank well and convert visitors",
    },
    {
      title: "Blog & Article Optimization",
      description: "Write or optimize posts that attract organic traffic and engage your audience",
    },
    {
      title: "Website & Portfolio SEO",
      description: "Technical optimization, site speed, mobile responsiveness, and clean structure",
    },
    {
      title: "Visibility Across Search Platforms",
      description:
        "Optimize for Google, Bing, and specialty platforms where readers discover books",
    },
  ];

  const idealFor = [
    "Fiction Authors",
    "Nonfiction Writers",
    "Bloggers",
    "Poets",
    "Academics",
    "Self-Published Authors",
    "Debut Authors",
    "Series Writers",
  ];

  return (
    <PageSection>
      <div className="text-center mb-16">
        <Animate animation="slideUp">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-dark/20 rounded-full mb-6 animate-float">
            <FontIcon icon="search" size="lg" className="text-emerald-600" />
          </div>
        </Animate>
        <Animate animation="slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground-heading mb-4">
            Search Engine Optimization for Authors
          </h2>

          <p className="text-xl lg:text-2xl text-emerald-600 font-semibold mb-6">
            Amplify Your Voice. Reach More Readers. Grow Your Author Brand.
          </p>
        </Animate>
        <Animate animation="slideUp">
          <p className="text-lg lg:text-xl text-foreground-body max-w-3xl mx-auto leading-relaxed">
            In today's digital landscape, being found online is essential. SEO helps your books,
            your name, and your brand appear when readers are actively searching. It's not just
            about traffic - it''s about connecting with the right audience at the right time.
          </p>
        </Animate>
      </div>

      <div className="mb-16">
        <Animate animation="slideUp">
          <h3 className="text-3xl font-bold text-foreground-heading text-center mb-10">
            Why SEO Matters for Authors
          </h3>
        </Animate>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Animate key={index} delay={index * 150}>
              <div className="bg-background-paper p-6 rounded-xl border border-[var(--color-silver-main)]/50 group hover:border-emerald-600 transition-colors h-full hover:shadow-lg">
                <div className="w-12 h-12 bg-primary-main/5 rounded-lg flex items-center justify-center mb-4  group-hover:bg-emerald-600 group-hover:primary-main/5 transition-all duration-300 group-hover:scale-110">
                  <FontIcon
                    icon={benefit.icon}
                    size="md"
                    className="text-emerald-600 group-hover:text-white"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground-heading mb-2">{benefit.title}</h4>
                <p className="text-lg text-foreground-body">{benefit.description}</p>
              </div>
            </Animate>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <Animate key={index} delay={index * 150}>
              <div
                key={index}
                className="bg-background-paper p-6 rounded-xl border border-[var(--color-silver-main)]/50 group hover:border-emerald-600 transition-colors h-full hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary-main/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:primary-main/5 transition-all duration-300 group-hover:scale-110">
                  <FontIcon
                    icon={benefit.icon}
                    size="md"
                    className="text-emerald-600 group-hover:text-white"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground-heading mb-2">{benefit.title}</h4>
                <p className="text-lg text-foreground-body">{benefit.description}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 lg:p-12 mb-16">
        <Animate>
          <h3 className="text-2xl font-bold mb-10 text-center">How We Help Authors Shine Online</h3>
        </Animate>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Animate animation="fadeIn" delay={100 * index}>
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8  bg-emerald-600 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="lg:text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-slate-300 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground-heading mb-6">Ideal For</h3>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {idealFor.map((type, index) => (
            <Animate animation="zoomIn" delay={100 * index} className="p-2">
              <span
                key={index}
                className="bg-emerald-600 text-white px-4 py-3 rounded-full font-medium"
              >
                {type}
              </span>
            </Animate>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export default SEOService;
