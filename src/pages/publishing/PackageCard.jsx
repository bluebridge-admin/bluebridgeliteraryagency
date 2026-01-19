import { Check, Star } from "lucide-react";
import Animate from "../../components/Animate";

const FeatureItem = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-600 text-lg leading-relaxed">
    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
      <Check size={12} className="text-[#007BA7]" strokeWidth={3} />
    </div>
    <span>{text}</span>
  </li>
);

const PackageCard = ({ pkg }) => {
  const isGold = pkg.highlight;

  return (
    <div
      className={`relative flex flex-col h-full bg-white rounded-2xl transition-all duration-300 group
      ${
        isGold
          ? "ring-2 ring-[#007BA7] shadow-2xl shadow-blue-900/10 scale-100 md:scale-105 z-10"
          : "border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-100"
      }`}
    >
      {isGold && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#007BA7] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
            <Star size={12} fill="white" /> Most Popular
          </span>
        </div>
      )}

      <div className={`p-8 ${isGold ? "pb-6" : ""}`}>
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
          <p className="text-sm font-semibold text-[#007BA7] uppercase tracking-wide">
            {pkg.subtitle}
          </p>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed min-h-[80px]">{pkg.description}</p>
      </div>

      <div className="px-8 flex-grow">
        <div className="w-full h-px bg-slate-100 mb-6" />
        <ul className="space-y-4 mb-8">
          {pkg.features.map((feature, idx) => (
            <FeatureItem key={idx} text={feature} />
          ))}
        </ul>
      </div>

      {/* <div className="p-8 mt-auto">
        <button
          className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group-hover:gap-3
          ${
            isGold
              ? "bg-[#007BA7] text-white hover:bg-[#006288] shadow-lg shadow-[#007BA7]/25"
              : "bg-slate-50 text-slate-700 hover:bg-[#007BA7] hover:text-white border border-slate-200 hover:border-[#007BA7]"
          }`}
        >
          View Details <ArrowRight size={16} />
        </button>
      </div> */}
    </div>
  );
};

export default PackageCard;
