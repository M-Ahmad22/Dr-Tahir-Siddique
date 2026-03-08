import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Video, Users } from "lucide-react";

const lectures = [
  { icon: Video, title: "Upcoming Webinars", titleUr: "آئندہ ویبینارز", date: "March 15, 2026" },
  { icon: Users, title: "Medical Seminars", titleUr: "طبی سیمینارز", date: "April 5, 2026" },
  { icon: Calendar, title: "Public Awareness Sessions", titleUr: "عوامی آگاہی سیشنز", date: "April 20, 2026" },
];

const LecturesSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="lectures" className="section-padding bg-muted/30">
      <div className="container-medical">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("lectures.title")}
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {lectures.map((l, i) => (
            <motion.div
              key={i}
              className="medical-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <l.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {lang === "en" ? l.title : l.titleUr}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{l.date}</p>
              <Button variant="medical" size="sm">{t("lectures.register")}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LecturesSection;
