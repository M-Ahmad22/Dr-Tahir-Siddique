import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users, ArrowRight } from "lucide-react";
import doctorVideo from "@/assets/doctor-intro.mp4";

const AboutPreview = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const bioEn =
    "Prof. Dr. Tahir Siddique is a renowned Internal Medicine Specialist and Gastroenterologist with over 29 years of clinical excellence. As Dean of Medicine at Services Institute of Medical Sciences, he combines world-class patient care with medical education leadership. His expertise spans gastroenterology, hepatology, endoscopy, and diabetes management — serving thousands of patients across Pakistan with compassion and precision.";

  const bioUr =
    "پروفیسر ڈاکٹر طاہر صدیقی ایک معروف ماہر داخلی طب اور ماہر معدہ ہیں جن کا 29 سال سے زیادہ طبی تجربہ ہے۔ سروسز انسٹی ٹیوٹ آف میڈیکل سائنسز میں ڈین آف میڈیسن کے طور پر، وہ عالمی معیار کی مریضوں کی دیکھ بھال کو طبی تعلیم کی قیادت کے ساتھ جوڑتے ہیں۔";

  const bio = lang === "en" ? bioEn : bioUr;
  const words = bio.split(" ");

  const stats = [
    {
      icon: Award,
      value: "29+",
      labelEn: "Years Experience",
      labelUr: "سال کا تجربہ",
    },
    {
      icon: Users,
      value: "50K+",
      labelEn: "Patients Treated",
      labelUr: "مریضوں کا علاج",
    },
    {
      icon: BookOpen,
      value: "200+",
      labelEn: "Research Papers",
      labelUr: "تحقیقی مقالے",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="about-dots"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="hsl(var(--primary))" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-dots)" />
        </svg>
      </div>

      <div className="container-medical relative z-10">
        {/* Section label */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              {lang === "en" ? "About the Doctor" : "ڈاکٹر کے بارے میں"}
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 max-w-4xl"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("about.title")}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-primary font-medium mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("about.role")}
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT VIDEO */}
          <motion.div className="relative" style={{ y, opacity }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <video
                  src={doctorVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 z-20"
                style={{
                  background:
                    "linear-gradient(to top, hsl(var(--foreground) / 0.7), transparent)",
                }}
              >
                <p className="text-primary-foreground text-sm font-semibold">
                  {lang === "en"
                    ? "Introduction — Prof. Dr. Tahir Siddique"
                    : "تعارف — پروفیسر ڈاکٹر طاہر صدیقی"}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="medical-card p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xl font-black text-foreground">
                    {s.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {lang === "en" ? s.labelEn : s.labelUr}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <div>
            {/* Bio text */}
            <div className="text-base md:text-lg leading-[1.8] mb-10">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em] text-muted-foreground"
                  initial={{ opacity: 0.1, y: 8, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.03,
                    duration: 0.5,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Highlights */}
            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {[
                {
                  en: "Dean of Medicine — Services Institute of Medical Sciences",
                  ur: "ڈین آف میڈیسن — سروسز انسٹی ٹیوٹ",
                },
                {
                  en: "MBBS • FCPS • MPH • MHPE — Comprehensive Qualifications",
                  ur: "ایم بی بی ایس • ایف سی پی ایس • ایم پی ایچ • ایم ایچ پی ای",
                },
                {
                  en: "Serving at Services Hospital Lahore — Pakistan's premier institution",
                  ur: "سروسز ہسپتال لاہور — پاکستان کا معروف ادارہ",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                  <p className="text-sm text-foreground font-medium">
                    {lang === "en" ? item.en : item.ur}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            {/* <motion.div>
              <a
                href="/about"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all"
              >
                {t("about.readMore")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
