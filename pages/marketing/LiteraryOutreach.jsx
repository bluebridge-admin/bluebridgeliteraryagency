import PageSection from "../../layout/PageSection";
import FontIcon from "../../components/FontIcon";
import Animate from "../../components/Animate";

function LiteraryOutreach() {
  const included = [
    "Ten professionally written query letters tailored to your work",
    "Customized for manuscript or screenplay format",
    "Sent directly to carefully selected publishers and film producers",
    "Strategic market placement based on genre and audience",
  ];

  const whyChoose = [
    {
      icon: "workspace_premium",
      title: "Licensed Literary Agents",
      description: "Industry professionals with proven track records",
    },
    {
      icon: "avg_pace",
      title: "Time-Saving",
      description: "We handle research, writing, and submissions",
    },
    {
      icon: "ads_click",
      title: "Market Expertise",
      description: "Access to insider knowledge and industry connections",
    },
    {
      icon: "check_circle",
      title: "Professional Response",
      description: "Guaranteed response within 2-4 weeks",
    },
  ];

  return (
    <PageSection>
      <div className="text-center mb-16">
        <Animate animation="fadeIn">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 animate-float">
            <FontIcon icon="mail" size="lg" className="text-amber-600" />
          </div>
        </Animate>
        <Animate animation="slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Maximize Your Story's Potential
          </h2>
          <p className="text-xl lg:text-2xl text-amber-600 font-semibold mb-6">
            Literary & Film Outreach by Licensed Agents
          </p>
        </Animate>
        <Animate animation="slideUp">
          <p className="lg:text-xl text-foreground-body font-semibold max-w-5xl mx-auto leading-relaxed">
            Your manuscript or screenplay deserves to be seen by the right people. Our licensed
            literary agents conduct strategic outreach to publishers and film producers, positioning
            your work for serious consideration. This is premium service for authors ready to take
            the next step.
          </p>
        </Animate>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">What's Included</h3>
          <ul className="space-y-4">
            {included.map((item, index) => (
              <Animate key={index} animation="fadeIn" delay={100 * index}>
                <li key={index} className="flex items-start gap-3">
                  <FontIcon icon="check_circle" size="lg" className="text-amber-600" />
                  <span className="lg:text-lg text-slate-700">{item}</span>
                </li>
              </Animate>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <Animate animation="fadeIn">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose This Service</h3>
          </Animate>
          <div className="space-y-6">
            {whyChoose.map((item, index) => (
              <Animate key={index} animation="fadeIn" delay={100 * index}>
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontIcon icon={item.icon} size="lg" className="text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
      <Animate animation="bounce">
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 lg:p-10 border border-amber-200">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-row justify-start items-base gap-2">
              <FontIcon icon="star_shine" size="md" className="text-amber-600" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Professional, Strategic, Exclusive
              </h3>
            </div>

            <p className="lg:text-lg text-slate-700 leading-relaxed">
              This is not mass email blasting. Each query letter is thoughtfully crafted and
              strategically sent to industry professionals who align with your work. With licensed
              agents handling your outreach, you gain access to opportunities that typically remain
              behind closed doors.
            </p>
          </div>
        </div>
      </Animate>
      {/* </div>
    </section> */}
    </PageSection>
  );
}

export default LiteraryOutreach;
