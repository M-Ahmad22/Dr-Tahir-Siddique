import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion, Play } from "lucide-react";
import faqDoctor from "@/assets/faq-doctor.png";

const faqs = [
  {
    qEn: "What conditions does Prof. Dr. Tahir Siddique treat?",
    qUr: "پروفیسر ڈاکٹر طاہر صدیقی کن بیماریوں کا علاج کرتے ہیں؟",
    aEn: "Dr. Tahir specializes in Internal Medicine and Gastroenterology, treating conditions including GERD, Hepatitis B & C, Diabetes, Liver Diseases, IBS, Gastric Ulcers, Hypertension, and more.",
    aUr: "ڈاکٹر طاہر داخلی طب اور معدے کی بیماریوں میں مہارت رکھتے ہیں، بشمول جی ای آر ڈی، ہیپاٹائٹس بی و سی، ذیابیطس، جگر کی بیماریاں، آئی بی ایس اور بہت کچھ۔",
  },
  {
    qEn: "How can I book an appointment?",
    qUr: "میں اپوائنٹمنٹ کیسے بک کر سکتا ہوں؟",
    aEn: "You can book an appointment through our online form, via WhatsApp, or by calling our helpline. Both in-clinic and telehealth video consultations are available.",
    aUr: "آپ ہمارے آن لائن فارم، واٹس ایپ، یا ہیلپ لائن کے ذریعے اپوائنٹمنٹ بک کر سکتے ہیں۔ کلینک اور ٹیلی ہیلتھ دونوں دستیاب ہیں۔",
  },
  {
    qEn: "What are the clinic hours and location?",
    qUr: "کلینک کے اوقات اور مقام کیا ہیں؟",
    aEn: "The clinic is located at Doctors Hospital, Lahore. Timings are Monday to Saturday, 3:00 PM – 5:00 PM. Emergency consultations can be arranged via helpline.",
    aUr: "کلینک ڈاکٹرز ہسپتال، لاہور میں واقع ہے۔ اوقات پیر سے ہفتہ، 3 بجے سے 5 بجے تک۔ ایمرجنسی مشاورت ہیلپ لائن سے ممکن ہے۔",
  },
  {
    qEn: "Is telehealth / video consultation available?",
    qUr: "کیا ٹیلی ہیلتھ / ویڈیو مشاورت دستیاب ہے؟",
    aEn: "Yes, we offer secure video consultations for patients who cannot visit the clinic. Book a telehealth appointment through our website or WhatsApp.",
    aUr: "جی ہاں، ہم ان مریضوں کے لیے محفوظ ویڈیو مشاورت پیش کرتے ہیں جو کلینک نہیں آ سکتے۔ ویب سائٹ یا واٹس ایپ سے بک کریں۔",
  },
  {
    qEn: "What is the consultation fee?",
    qUr: "مشاورت فیس کتنی ہے؟",
    aEn: "The standard consultation fee is Rs. 5,000. Follow-up visits within 15 days may have reduced fees. Please contact our helpline for the latest information.",
    aUr: "معیاری مشاورت فیس 5,000 روپے ہے۔ 15 دنوں کے اندر فالو اپ میں کم فیس ہو سکتی ہے۔ تازہ ترین معلومات کے لیے ہیلپ لائن سے رابطہ کریں۔",
  },
  {
    qEn: "Do I need a referral to see Dr. Tahir?",
    qUr: "کیا ڈاکٹر طاہر سے ملنے کے لیے ریفرل ضروری ہے؟",
    aEn: "No referral is needed. You can directly book an appointment for consultation. However, please bring any previous medical records or test reports.",
    aUr: "کسی ریفرل کی ضرورت نہیں۔ آپ براہ راست اپوائنٹمنٹ بک کر سکتے ہیں۔ تاہم، پرانے طبی ریکارڈ یا ٹیسٹ رپورٹیں ساتھ لائیں۔",
  },
];

const FAQSection = () => {
  const { lang } = useLanguage();

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
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <MessageCircleQuestion className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              {lang === "en" ? "FAQ" : "عام سوالات"}
            </span>
          </motion.div>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {lang === "en"
              ? "Frequently Asked Questions"
              : "اکثر پوچھے گئے سوالات"}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Image with video overlay */}
          <motion.div
            className="relative rounded-2xl overflow-hidden hidden lg:block "
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={faqDoctor}
              alt="Doctor consultation"
              className="w-[80%] h-[470px]  object-cover rounded-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 w-[80%] bg-gradient-to-t from-foreground/30 via-transparent to-transparent rounded-2xl" />

            {/* Bottom badge */}
            <motion.div
              className="absolute bottom-6 w-[70%] left-6 right-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm font-semibold text-foreground">
                {lang === "en" ? "Have more questions?" : "مزید سوالات ہیں؟"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {lang === "en"
                  ? "Contact us via WhatsApp or call our helpline"
                  : "واٹس ایپ یا ہیلپ لائن پر رابطہ کریں"}
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Accordion with staggered entrance */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-3"
            >
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className="border border-border rounded-xl px-5 bg-card data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                      {lang === "en" ? faq.qEn : faq.qUr}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {lang === "en" ? faq.aEn : faq.aUr}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
