import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-medical max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("contact.title")}
        </motion.h2>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Working Hours */}
            <div className="medical-card p-6 flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />

              <div>
                <p className="font-semibold text-foreground mb-1">
                  {t("contact.hours")}
                </p>
                <p className="text-sm text-muted-foreground">
                  Monday – Saturday
                </p>
                <p className="text-sm text-muted-foreground">
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* Emergency */}
            <div className="medical-card p-6 flex items-start gap-4 border-emergency">
              <Phone className="w-6 h-6 text-emergency shrink-0 mt-1" />

              <div>
                <p className="font-semibold text-emergency mb-1">
                  {t("contact.emergency")}
                </p>
                <p className="text-md text-muted-foreground p-3">03124139327</p>
                <p className="text-md text-muted-foreground p-3">03004004045</p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-md h-[320px] w-full">
              <iframe
                src="https://maps.google.com/maps?q=Doctors%20Hospital%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Doctors Hospital Lahore Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
