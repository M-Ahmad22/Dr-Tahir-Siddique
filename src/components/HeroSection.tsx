import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Star,
  Award,
  Stethoscope,
  Heart,
  Activity,
} from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.png";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { t } = useLanguage();

  // Typewriter for doctor name
  const doctorName = "Prof. Dr. Tahir Siddique";
  const [displayedName, setDisplayedName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const pause =
      !isDeleting && nameIndex === doctorName.length
        ? 2500
        : isDeleting && nameIndex === 0
          ? 500
          : speed;

    const timeout = setTimeout(() => {
      if (!isDeleting && nameIndex < doctorName.length) {
        setDisplayedName(doctorName.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      } else if (!isDeleting && nameIndex === doctorName.length) {
        setIsDeleting(true);
      } else if (isDeleting && nameIndex > 0) {
        setDisplayedName(doctorName.slice(0, nameIndex - 1));
        setNameIndex(nameIndex - 1);
      } else {
        setIsDeleting(false);
      }
    }, pause);

    return () => clearTimeout(timeout);
  }, [nameIndex, isDeleting]);

  // Rotating specialties
  const specialties = [
    "Gastroenterology",
    "Hepatology",
    "Endoscopy",
    "Diabetes Care",
  ];
  const [currentSpecialty, setCurrentSpecialty] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Letter-by-letter stagger for headline words
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.04,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  const renderAnimatedText = (text: string, startDelay: number) =>
    text.split("").map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        custom={i + startDelay}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* ── Subtle SVG background pattern ── */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="medical-grid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-grid)" />
        </svg>
      </div>

      {/* ── Soft radial accent blurs ── */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
        }}
      />

      {/* ── Decorative medical SVG shapes ── */}
      <motion.div
        className="absolute top-40 left-[5%] text-primary/[0.06]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stethoscope className="w-24 h-24" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[5%] text-primary/[0.05]"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Heart className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="absolute top-[48%] left-[5%] text-primary/[0.04]"
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Activity className="w-20 h-20" />
      </motion.div>

      {/* ── Subtle ECG line across the bottom ── */}
      <div className="absolute bottom-16 left-0 right-0 opacity-[0.06]">
        <svg
          viewBox="0 0 1200 60"
          className="w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 L200,30 L220,30 L240,10 L260,50 L280,5 L300,55 L320,25 L340,30 L600,30 L620,30 L640,10 L660,50 L680,5 L700,55 L720,25 L740,30 L1000,30 L1020,30 L1040,10 L1060,50 L1080,5 L1100,55 L1120,25 L1140,30 L1200,30"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="container-medical grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 pb-20 relative z-10">
        {/* ── LEFT COLUMN: Text Content ── */}
        <div className="order-1 lg:order-1">
          {/* Credential label */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase">
              MBBS • FCPS • MPH • MHPE
            </span>
          </motion.div>

          {/* Doctor name — typewriter */}
          <div className="text-lg md:text-xl font-bold tracking-widest uppercase text-foreground mb-3 h-[1.6em]">
            {displayedName}
            <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
          </div>

          {/* Main headline — letter-by-letter reveal */}
          <h1 className="mb-4">
            <span
              className="block text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight text-foreground"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 700,
              }}
            >
              {renderAnimatedText("Expert", 0)}
            </span>
            <span
              className="block text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight text-primary"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 700,
              }}
            >
              {renderAnimatedText("Internal Medicine", 6)}
            </span>
            <span
              className="block text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.3] text-muted-foreground mt-1 overflow-hidden h-[1.4em]"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              <span className="inline-block mr-2">&</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSpecialty}
                  className="inline-block text-primary/70"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" as const }}
                >
                  {specialties[currentSpecialty]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Titles */}
          <motion.div
            className="flex flex-wrap gap-2 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {["Professor of Medicine", "Dean of Medicine"].map((title) => (
              <span
                key={title}
                className="px-3 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {title}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="text-xs text-muted-foreground mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Services Institute of Medical Sciences — Services Hospital Lahore
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            24 Years of Trusted Medical Excellence in Lahore. Advanced
            gastroenterology care and medical education.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <a
              href="#appointment"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              {t("hero.cta")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-border text-foreground bg-card hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5"
            >
              {t("hero.viewServices")}
            </a>
          </motion.div>

          {/* ── Metrics row ── */}
          <motion.div
            className="flex flex-wrap gap-8 md:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <MetricItem
              icon={<Award className="w-5 h-5 text-primary" />}
              value="24+"
              label={t("hero.experience")}
            />
            <MetricItem
              icon={<Star className="w-5 h-5 text-primary" />}
              value="99%"
              label={t("hero.satisfaction")}
            />
            <MetricItem
              icon={<Clock className="w-5 h-5 text-primary" />}
              value="<15 min"
              label={t("hero.waitTime")}
            />
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Doctor Image with Blue Cross BG ── */}
        <motion.div
          className="order-2 lg:order-2 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="relative w-full max-w-[480px]">
            {/* Blue diagonal cross background */}
            <div className="absolute inset-0 z-0">
              {/* Vertical bar */}
              <div
                className="absolute top-[-60%] right-[-35%] w-[85%] h-[165%] rounded-3xl bg-primary origin-center rotate-[40deg] rounded-b-[120px] "
                style={{ opacity: 0.9 }}
              />
              {/* Horizontal accent bar */}
              <div className="absolute top-[-60%] right-[-38%] w-[95%] h-[170%] rounded-3xl bg-primary/20 origin-center rotate-[40deg] rounded-b-[120px] " />
            </div>

            {/* Doctor image */}
            <div className="relative z-10">
              <img
                src={heroDoctor}
                alt="Prof. Dr. Tahir Siddique"
                className="w-full max-w-[420px] mx-auto relative z-10 drop-shadow-2xl"
                loading="eager"
              />
              {/* Bottom gradient fade */}
              {/* <div
                className="absolute bottom-0 left-0 right-0 h-28 z-20"
                style={{
                  background:
                    "linear-gradient(to top, hsl(var(--background)), transparent)",
                }}
              /> */}
              {/* Name overlay */}
              <div className="absolute bottom-4 left-0 right-0 z-30 text-center">
                <p className="text-white text-sm font-bold tracking-wide">
                  Prof. Dr. Tahir Siddique
                </p>
                <p className="text-xs text-primary font-medium">
                  MedSync Association
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Simple metric display ── */
const MetricItem = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xl font-bold text-foreground leading-none">{value}</p>
      <p className="text-[11px] text-muted-foreground mt-0.5">{label}</p>
    </div>
  </div>
);

export default HeroSection;
