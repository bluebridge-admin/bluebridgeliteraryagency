import { BookOpen, Globe, Zap } from "lucide-react";

const ProcessesSection = () => {
  const steps = [
    {
      title: "Consultation",
      desc: "We discuss your goals and choose the right package.",
      icon: <Zap />,
    },
    {
      title: "Production",
      desc: "Editing, cover design, and formatting take place.",
      icon: <BookOpen />,
    },
    {
      title: "Distribution",
      desc: "Your book goes live on Amazon, B&N, and more.",
      icon: <Globe />,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-15 px-10 grid grid-cols-1 md:grid-cols-3 gap-12 rounded-4xl shadow-lg bg-white border border-slate-200">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#007BA7] flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground-body mb-2">{step.title}</h4>
              <p className="text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessesSection;
