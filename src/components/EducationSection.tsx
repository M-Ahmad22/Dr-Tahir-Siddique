import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import { useRef } from "react";

const education = [
  {
    year: "1997",
    title: "MBBS",
    titleUr: "ایم بی بی ایس",
    desc: "Bachelor of Medicine & Surgery",
    descUr: "بیچلر آف میڈیسن اینڈ سرجری",
  },
  {
    year: "2005",
    title: "FCPS",
    titleUr: "ایف سی پی ایس",
    desc: "Fellow of College of Physicians & Surgeons",
    descUr: "فیلو آف کالج آف فزیشنز",
  },
  {
    year: "2015",
    title: "MHPE",
    titleUr: "ایم ایچ پی ای",
    desc: "Masters in Health Professions Education",
    descUr: "ماسٹرز ان ہیلتھ پروفیشنز",
  },
  {
    year: "2018",
    title: "MPH",
    titleUr: "ایم پی ایچ",
    desc: "Master of Public Health",
    descUr: "ماسٹر آف پبلک ہیلتھ",
  },
];

const experience = [
  {
    year: "2021–Present",
    title: "Professor & Dean",
    titleUr: "پروفیسر اور ڈین",
    desc: "Dean of Medicine, Services Hospital Lahore",
    descUr: "ڈین آف میڈیسن، سروسز ہسپتال لاہور",
  },
  {
    year: "2018–2021",
    title: "Professor of Medicine",
    titleUr: "پروفیسر آف میڈیسن",
    desc: "Services Institute of Medical Sciences",
    descUr: "سروسز انسٹی ٹیوٹ آف میڈیکل سائنسز",
  },
  {
    year: "2012–2018",
    title: "Associate Professor",
    titleUr: "ایسوسی ایٹ پروفیسر",
    desc: "Department of Internal Medicine",
    descUr: "شعبہ داخلی طب",
  },
  {
    year: "2005–2012",
    title: "Assistant Professor",
    titleUr: "اسسٹنٹ پروفیسر",
    desc: "Clinical Practice & Teaching",
    descUr: "کلینکل پریکٹس اور تدریس",
  },
];

const EducationSection = () => {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-primary/20"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="edu-lines"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="0"
                stroke="hsl(var(--primary))"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#edu-lines)" />
        </svg>
      </div>

      <div className="container-medical relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary mb-5">
              <GraduationCap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
                {lang === "en" ? "Credentials" : "اسناد"}
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {lang === "en" ? "Education &" : "تعلیم اور"}
              <br />
              <span className="text-primary">
                {lang === "en" ? "Experience" : "تجربہ"}
              </span>
            </h2>
          </motion.div>
          <motion.div
            className="flex items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              {lang === "en"
                ? "A distinguished journey through Pakistan's premier medical institutions from foundational training to leadership in academic medicine."
                : "پاکستان کے اعلیٰ طبی اداروں سے ایک ممتاز سفر — بنیادی تربیت سے تعلیمی طب میں قیادت تک۔"}
            </p>
          </motion.div>
        </div>

        {/* Two column layout with center timeline */}
        <div className="relative">
          {/* Center animated line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden lg:block">
            <motion.div
              className="w-full bg-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-0">
            {/* Education - Left */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {lang === "en" ? "Education" : "تعلیم"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {lang === "en"
                      ? "Academic Qualifications"
                      : "تعلیمی قابلیت"}
                  </p>
                </div>
              </motion.div>

              <div className="space-y-4">
                {education.map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="group relative"
                    initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                  >
                    <div className="medical-card p-5 border-l-4 border-l-primary hover:border-l-primary/80 transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary mb-2">
                            {item.year}
                          </span>
                          <h4 className="text-lg font-bold text-foreground">
                            {lang === "en" ? item.title : item.titleUr}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {lang === "en" ? item.desc : item.descUr}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all mt-6 shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience - Right (offset down on desktop) */}
            <div className="lg:mt-0 mt-0">
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {lang === "en" ? "Experience" : "تجربہ"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {lang === "en" ? "Professional Journey" : "پیشہ ورانہ سفر"}
                  </p>
                </div>
              </motion.div>

              <div className="space-y-4">
                {experience.map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="group relative"
                    initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                  >
                    <div className="medical-card p-5 border-l-4 border-l-emerald-500 hover:border-l-emerald-400 transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 mb-2">
                            {item.year}
                          </span>
                          <h4 className="text-lg font-bold text-foreground">
                            {lang === "en" ? item.title : item.titleUr}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {lang === "en" ? item.desc : item.descUr}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all mt-6 shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
