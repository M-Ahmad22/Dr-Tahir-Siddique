import { useLanguage } from "@/contexts/LanguageContext";
import { Award, MessageSquare, Stethoscope, Activity } from "lucide-react";
import "./StatsMarquee.css";

const stats = [
  {
    icon: Award,
    value: "24+",
    valueKey: "stats.experience",
    gradient: "white",
  },
  {
    icon: MessageSquare,
    value: "691+",
    valueKey: "stats.reviews",
    gradient: "white",
  },
  {
    icon: Stethoscope,
    value: "50+",
    valueKey: "stats.conditions",
    gradient: "white",
  },
  {
    icon: Activity,
    value: "10+",
    valueKey: "stats.procedures",
    gradient: "white",
  },
];

const StatItem = ({
  s,
  t,
}: {
  s: (typeof stats)[0];
  t: (k: string) => string;
}) => (
  <div className="flex items-center gap-5 px-8 md:px-12 py-6 md:py-8 shrink-0 group cursor-default">
    <div
      className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center  group-hover:scale-110 transition-transform duration-300`}
    >
      <s.icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <p className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
        {s.value}
      </p>
      <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider whitespace-nowrap">
        {t(s.valueKey).replace(/^\d+\+?\s*/, "")}
      </p>
    </div>
    <div className="w-px h-12 bg-border/50 ml-4" />
  </div>
);

const StatsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-primary/20 ">
      <div className="stats-marquee">
        <div className="stats-marquee-track">
          {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
            <StatItem key={i} s={s} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
