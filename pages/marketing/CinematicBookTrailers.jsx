import Animate from "../../components/Animate";
import FontIcon from "../../components/FontIcon";
import PageSection from "../../layout/PageSection";

import CimemaImage from "../../assets/images/cinema.avif";
// import Cimema404 from "../../assets/404.html";

const CinematicBookTrailers = () => {
  return (
    <PageSection className="bg-[var(--color-dark-primary)] text-white relative diagonal" py="200px">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src={CimemaImage} alt="Cinema Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-primary)] via-[var(--color-dark-primary)] to-transparent z-0"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        <Animate>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-gold-dark)]/20 text-[var(--color-gold-light)] font-bold text-xs uppercase tracking-widest mb-6 border border-[var(--color-gold-main)]/30">
            <FontIcon icon="star" size="sm" /> Premium Service
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Cinematic <span className="text-[var(--color-gold-main)]">Book Trailers</span>
          </h2>
          <p className="text-lg text-[var(--color-silver-main)] mb-8 leading-relaxed">
            Capture Attention. Spark Emotion. Drive Sales. A book trailer is a cinematic experience
            that immerses potential readers in your story before they turn the first page.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "40-90 second cinematic video",
              "Professional voiceover",
              "Custom music & color grading",
              "Optimized for social media",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[var(--color-background-default)]"
              >
                <FontIcon icon="check_circle" className="text-[var(--color-gold-main)]" size="sm" />
                {item}
              </li>
            ))}
          </ul>

          <button className="gradient-gold text-[var(--color-dark-primary)] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-yellow-500/20 transition-all hover:scale-105">
            View Samples
          </button>
        </Animate>

        <Animate delay={300}>
          <div className="relative group">
            <div className="aspect-video rounded-2xl bg-[var(--color-background-paper)]/10 border border-[var(--color-gold-main)]/20 flex items-center justify-center backdrop-blur-sm shadow-2xl overflow-hidden">
              <img
                src="/404.html"
                alt="Cinematic Preview"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="w-20 h-20 rounded-full bg-[var(--color-gold-main)] text-[var(--color-dark-primary)] flex items-center justify-center pl-1 cursor-pointer hover:scale-110 transition-transform relative z-10 shadow-lg shadow-[var(--color-gold-main)]/50">
                <FontIcon icon="play_arrow" size="lg" />
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-gold-main)]/20 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>
        </Animate>
      </div>
    </PageSection>
  );
};

export default CinematicBookTrailers;
