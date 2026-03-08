import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import doctorAhmed from "@/assets/doctor-ahmed.png";
import doctorSana from "@/assets/doctor-sana.png";

const doctors = [
  {
    name: "Dr. Ahmed Raza",
    spec: "Cardiologist",
    specUr: "ماہر امراض قلب",
    img: doctorAhmed,
  },
  {
    name: "Dr. Sana Malik",
    spec: "Endocrinologist",
    specUr: "ماہر غدود",
    img: doctorSana,
  },
];

const AssociateDoctors = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-primary">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[600px] h-[400px] bg-primary-foreground/[0.06] rotate-12 rounded-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[700px] h-[350px] bg-primary-foreground/[0.04] -rotate-6 rounded-3xl" />
        <div className="absolute top-1/2 right-[10%] w-[300px] h-[200px] bg-primary-foreground/[0.03] rotate-[20deg] rounded-2xl" />
        <div className="absolute top-[20%] left-[5%] w-[200px] h-[150px] bg-primary-foreground/[0.05] -rotate-[15deg] rounded-2xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="doc-grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#doc-grid)" />
        </svg>
      </div>

      <div className="container-medical relative z-10">
        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT TEXT */}
          <motion.div
            className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-white/10 border border-white/20">
              <Stethoscope className="w-4 h-4 text-primary-foreground" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground">
                {lang === "en" ? "Our Team" : "ہماری ٹیم"}
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-5"
              style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
            >
              {t("doctors.title")}
            </h2>

            <p className="text-primary-foreground/70 max-w-lg mx-auto lg:mx-0">
              {lang === "en"
                ? "Meet our highly qualified associate doctors dedicated to providing exceptional patient care."
                : "ہمارے اعلیٰ تعلیم یافتہ ایسوسی ایٹ ڈاکٹرز سے ملیں۔"}
            </p>
          </motion.div>

          {/* RIGHT DOCTORS */}
          <motion.div
            className="relative flex justify-center lg:justify-end gap-6 sm:gap-8 flex-wrap sm:flex-nowrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <div
              className="
              absolute 
              w-[300px] h-[700px] sm:w-[400px] sm:h-[850px] lg:w-[520px] lg:h-[1000px]
              bg-white/90 rotate-12 rounded-3xl
              right-0 sm:display:none lg:Display:none
              top-[-40%] sm:top-[-50%]
              z-0
            "
            /> */}
            {doctors.map((d, i) => (
              <div key={i} className="relative z-10 text-center">
                <div
                  className="
                  w-[150px] h-[200px]
                  sm:w-[180px] sm:h-[240px]
                  md:w-[200px] md:h-[260px]
                  lg:w-[220px] lg:h-[280px]
                  overflow-hidden rounded-2xl
                "
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="mt-4 font-semibold text-white text-base sm:text-lg">
                  {d.name}
                </h3>

                <p className="text-white text-xs sm:text-sm">
                  {lang === "en" ? d.spec : d.specUr}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AssociateDoctors;
