import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope } from "lucide-react";
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
    <section className="relative py-24 overflow-hidden bg-primary">
      {/* SAME BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[600px] h-[400px] bg-primary-foreground/[0.06] rotate-12 rounded-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[700px] h-[350px] bg-primary-foreground/[0.04] -rotate-6 rounded-3xl" />
        <div className="absolute top-1/2 right-[10%] w-[300px] h-[200px] bg-primary-foreground/[0.03] rotate-[20deg] rounded-2xl" />
        <div className="absolute top-[20%] left-[5%] w-[200px] h-[150px] bg-primary-foreground/[0.05] -rotate-[15deg] rounded-2xl" />
      </div>

      {/* GRID PATTERN */}
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
        {/* BANNER LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE TEXT */}
          <motion.div
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
              className="text-4xl md:text-5xl font-bold text-primary-foreground mb-5"
              style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
            >
              {t("doctors.title")}
            </h2>

            <p className="text-primary-foreground/70 max-w-lg mb-8">
              {lang === "en"
                ? "Meet our highly qualified associate doctors dedicated to providing exceptional patient care."
                : "ہمارے اعلیٰ تعلیم یافتہ ایسوسی ایٹ ڈاکٹرز سے ملیں۔"}
            </p>

            {/* <Button className="bg-white text-primary hover:bg-white/90 rounded-xl">
              {t("doctors.book")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button> */}
          </motion.div>

          {/* RIGHT SIDE DOCTORS */}
          <motion.div
            className="relative flex justify-center lg:justify-end gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* ROTATED WHITE BACKGROUND */}
            <div className="absolute w-[520px] h-[1000px] bg-white/90 rotate-12 rounded-3xl right-4 top-[-50%] z-0" />

            {doctors.map((d, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-[180px] h-[240px] md:w-[220px] md:h-[280px] overflow-hidden rounded-2xl ">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="mt-4 font-semibold text-primary text-lg">
                  {d.name}
                </h3>

                <p className="text-primary text-sm">
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
