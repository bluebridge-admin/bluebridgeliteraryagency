import { Helmet } from "react-helmet";
import Animate from "../../components/Animate";
import Heading from "../../components/Heading";

import SubHeading from "../../components/SubHeading";

import PageSection from "../../layout/PageSection";

const About = () => {
  return (
    <>
      <Helmet>
        <title key="about-title">
          About Us | Digital Marketing Agency | Blue Bride Literary Agency
        </title>
        <meta
          key="about-meta-description"
          name="description"
          content="Your partners in growth. Learn how Blue Bride Literary Agency helps businesses thrive through custom SEO, web design, and marketing strategies. Meet your new team today."
        />
      </Helmet>
      <PageSection className="min-h-screen relative">
        <div className="bg-outline-text top-1/8 -left-10">TEAM</div>

        <Animate animation="slideLeft">
          <Heading>Who We Are</Heading>
        </Animate>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
          <div className="z-10 order-2 lg:order-1">
            <Animate animation="slideLeft" delay={200}>
              <SubHeading>
                Three Decades of Unwavering <span className="text-gradient">Expertise</span>
              </SubHeading>
            </Animate>
            <Animate animation="slideLeft" delay={400}>
              <p className="text-lg md:text-xl text-foreground-body leading-relaxed font-medium mb-12">
                Blue Bridge Literary Agency stands as a beacon of excellence in the provision of
                comprehensive publishing solutions. Our mission is to empower authors from aspiring
                writers to seasoned wordsmiths.
              </p>
            </Animate>
            <Animate animation="slideLeft" delay={600}>
              <div className="grid grid-cols-3 gap-6 mb-12 border-y border-slate-200/60 py-8">
                <div>
                  <p className="text-3xl md:text-4xl font-black text-primary-main">30+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                    Years Active
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-primary-main">500+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                    Books Published
                  </p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-primary-main">150+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                    Bestsellers
                  </p>
                </div>
              </div>
            </Animate>
            <Animate animation="slideLeft" delay={800}>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary-main shadow-sm group-hover:bg-primary-main group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-black text-slate-900 mb-2">
                      Integrity &amp; Accuracy
                    </h5>
                    <p className="text-foreground-body font-medium text-md">
                      Dedicated to the art and precision of literary management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-primary-main shadow-sm group-hover:bg-primary-main group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">psychology</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-black text-slate-900 mb-2">
                      Sustainable Prosperity
                    </h5>
                    <p className="text-foreground-body font-medium text-md">
                      Facilitating informed decisions for long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </Animate>
          </div>

          <div className="relative order-1 lg:order-2">
            <Animate animation="zoomIn" delay={1000}>
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-700">
                <img
                  alt="The Bridge"
                  className="w-full h-auto object-cover"
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-main/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl -z-0"></div>
            </Animate>
          </div>
        </div>
        <Animate animation="zoomIn">
          <div className="bg-white/80 backdrop-blur-md p-8 md:p-15 rounded-[3rem] shadow-xl text-center border border-slate-400/25 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-main/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all group-hover:bg-primary-main/10 duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary-main mb-12 relative z-10">
              Our Core Mission
            </h4>
            <p className="text-xl lg:text-4xl font-black text-slate-900 leading-tight max-w-5xl mx-auto italic relative z-10">
              We believe in the transformative power of stories and aim to amplify&nbsp;
              <span className="text-primary-main relative inline-block">diverse voices</span>&nbsp;
              that resonate with readers across genres.
            </p>
          </div>
        </Animate>
      </PageSection>
    </>
  );
};

export default About;
