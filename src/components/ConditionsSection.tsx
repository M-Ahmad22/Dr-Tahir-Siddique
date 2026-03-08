import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import condAbdomen from "@/assets/cond-abdomen.png";
import condAbdomen1 from "@/assets/condAbdomen.jpg";
import condGerd from "@/assets/cond-gerd.png";
import condHypertension from "@/assets/cond-hypertension.png";
import condDiabetes from "@/assets/cond-diabetes.png";
import condHepatitis from "@/assets/cond-hepatitis.png";
import condHeart from "@/assets/cond-heart.png";
import condLiver from "@/assets/cond-liver.png";
import condTyphoid from "@/assets/cond-typhoid.png";
import condStomach from "@/assets/cond-stomach.png";
import condAnemia from "@/assets/cond-anemia.png";
import condPneumonia from "@/assets/cond-pneumonia.png";
import condJaundice from "@/assets/cond-jaundice.png";
import condUlcer from "@/assets/cond-ulcer.png";
import condIbs from "@/assets/cond-ibs.png";

const conditions = [
  {
    en: "Abdomen Pain",
    ur: "پیٹ کا درد",
    descEn: "Diagnosis & treatment of chronic and acute abdominal pain",
    descUr: "دائمی اور شدید پیٹ درد کی تشخیص اور علاج",
    img: condAbdomen,
  },
  {
    en: "GERD",
    ur: "جی ای آر ڈی",
    descEn: "Gastroesophageal reflux disease management",
    descUr: "معدے کی تیزابیت کا انتظام",
    img: condGerd,
  },
  {
    en: "Hypertension",
    ur: "ہائی بلڈ پریشر",
    descEn: "Blood pressure monitoring and control plans",
    descUr: "بلڈ پریشر کی نگرانی اور کنٹرول",
    img: condHypertension,
  },
  {
    en: "Diabetes Mellitus",
    ur: "ذیابیطس",
    descEn: "Comprehensive diabetes care and insulin therapy",
    descUr: "جامع ذیابیطس کی دیکھ بھال اور انسولین تھراپی",
    img: condDiabetes,
  },
  {
    en: "Hepatitis B & C",
    ur: "ہیپاٹائٹس بی اور سی",
    descEn: "Antiviral treatment and liver health monitoring",
    descUr: "اینٹی وائرل علاج اور جگر کی صحت کی نگرانی",
    img: condHepatitis,
  },
  {
    en: "Heart Diseases",
    ur: "دل کی بیماریاں",
    descEn: "Cardiovascular assessment and preventive care",
    descUr: "دل کی تشخیص اور حفاظتی دیکھ بھال",
    img: condHeart,
  },
  {
    en: "Liver Diseases",
    ur: "جگر کی بیماریاں",
    descEn: "Fatty liver, cirrhosis and liver function tests",
    descUr: "فیٹی لیور، سروسس اور جگر کے ٹیسٹ",
    img: condLiver,
  },
  {
    en: "Typhoid Fever",
    ur: "ٹائیفائیڈ بخار",
    descEn: "Accurate diagnosis and antibiotic therapy",
    descUr: "درست تشخیص اور اینٹی بایوٹک تھراپی",
    img: condTyphoid,
  },
  {
    en: "Stomach Pain",
    ur: "معدے کا درد",
    descEn: "Endoscopic evaluation and treatment plans",
    descUr: "اینڈوسکوپک تشخیص اور علاج کے منصوبے",
    img: condStomach,
  },
  {
    en: "Anemia",
    ur: "خون کی کمی",
    descEn: "Iron deficiency workup and nutritional guidance",
    descUr: "آئرن کی کمی کی جانچ اور غذائی رہنمائی",
    img: condAnemia,
  },
  {
    en: "Pneumonia",
    ur: "نمونیا",
    descEn: "Respiratory infection treatment and recovery",
    descUr: "سانس کے انفیکشن کا علاج اور صحت یابی",
    img: condPneumonia,
  },
  {
    en: "Jaundice",
    ur: "یرقان",
    descEn: "Bilirubin management and underlying cause treatment",
    descUr: "بلیروبن کا انتظام اور بنیادی وجہ کا علاج",
    img: condJaundice,
  },
  {
    en: "Gastric Ulcer",
    ur: "معدے کا السر",
    descEn: "H. pylori eradication and ulcer healing",
    descUr: "ایچ پائلوری کا خاتمہ اور السر کا علاج",
    img: condUlcer,
  },
  {
    en: "IBS",
    ur: "آئی بی ایس",
    descEn: "Irritable bowel syndrome symptom management",
    descUr: "آئی بی ایس کی علامات کا انتظام",
    img: condIbs,
  },
];

const ConditionsSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="section-padding bg-primary/20 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
        }}
      />

      <div className="container-medical relative z-10">
        {/* Header with blur reveal */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              {lang === "en" ? "Comprehensive Care" : "جامع نگہداشت"}
            </span>
          </motion.div>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {t("conditions.title")}
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            {lang === "en"
              ? "Specialized treatment for a wide range of medical conditions with precision and compassion"
              : "درستگی اور ہمدردی کے ساتھ طبی حالات کی ایک وسیع رینج کا خصوصی علاج"}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {conditions.map((c, i) => (
            <motion.div
              key={i}
              className="group relative w-[160px] sm:w-[180px] md:w-[200px] lg:w-[210px]
      rounded-3xl overflow-hidden cursor-pointer
      bg-gradient-to-b from-white/80 to-white/40
      backdrop-blur-xl
      border border-white/30
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      transition-all duration-500
      hover:-translate-y-3
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              initial={{ opacity: 0, y: 40, scale: 0.92, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
            >
              {/* Image */}
              <div className="relative h-[180px] flex items-center justify-center p-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                <img
                  src={c.img}
                  alt={c.en}
                  className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <span
                  className="absolute top-3 right-3 w-7 h-7 rounded-full 
        bg-primary/10 backdrop-blur-md text-primary text-[10px] font-bold 
        flex items-center justify-center border border-primary/20"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Text */}
              <div className="px-5 pb-5">
                <h3 className="font-semibold text-foreground text-sm mb-1 leading-tight">
                  {lang === "en" ? c.en : c.ur}
                </h3>

                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                  {lang === "en" ? c.descEn : c.descUr}
                </p>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
