import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import serviceColonoscopy from "@/assets/service-colonoscopy.png";
import serviceEndoscopy from "@/assets/service-endoscopy.png";
import serviceDiabetes from "@/assets/service-diabetes.png";
import serviceHepatitis from "@/assets/service-hepatitis.png";
import serviceGastro from "@/assets/service-gastro.png";
import serviceFamily from "@/assets/service-family.png";

const services = [
  { key: "services.colonoscopy", desc: "Advanced diagnostic and therapeutic colonoscopy procedures.", img: serviceColonoscopy },
  { key: "services.endoscopy", desc: "Upper GI endoscopy for accurate diagnosis.", img: serviceEndoscopy },
  { key: "services.diabetes", desc: "Comprehensive diabetes care and management plans.", img: serviceDiabetes },
  { key: "services.hepB", desc: "Evidence-based Hepatitis B treatment protocols.", img: serviceHepatitis },
  { key: "services.hepC", desc: "Complete Hepatitis C cure with modern antivirals.", img: serviceGastro },
  { key: "services.constipation", desc: "Effective constipation diagnosis and treatment.", img: serviceFamily },
];

const ServicesPreview = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-medical">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We provide a wide range of medical services with compassionate and comprehensive healthcare tailored to your individual needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              className="medical-card overflow-hidden group"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={t(s.key)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(s.key)}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}>
          <Button variant="heroOutline" asChild>
            <a href="/services">{t("services.viewAll")}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
