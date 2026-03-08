import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  { name: "Ali Hassan", stars: 5, text: "Prof. Dr. Tahir is the most compassionate doctor I've ever visited. His diagnosis was spot-on and treatment was effective.", textUr: "پروفیسر ڈاکٹر طاہر سب سے زیادہ ہمدرد ڈاکٹر ہیں۔ ان کی تشخیص بالکل درست تھی۔", type: "patient" },
  { name: "Fatima Noor", stars: 5, text: "My Hepatitis C was completely cured under his care. Highly recommended specialist in Lahore.", textUr: "میرا ہیپاٹائٹس سی ان کی نگہداشت میں مکمل طور پر ٹھیک ہو گیا۔", type: "patient" },
  { name: "Ahmed Khan", stars: 5, text: "The gastroenterology expertise is exceptional. Dr. Tahir's teaching style and patient care are world-class.", textUr: "معدے کی بیماریوں میں مہارت غیر معمولی ہے۔ ڈاکٹر طاہر کی تدریس اور مریضوں کی دیکھ بھال عالمی معیار کی ہے۔", type: "student" },
  { name: "Sadia Bibi", stars: 4, text: "Very professional and caring doctor. The clinic staff is also very helpful and polite.", textUr: "بہت پیشہ ور اور مہربان ڈاکٹر۔ کلینک کا عملہ بھی بہت مددگار ہے۔", type: "patient" },
  { name: "Dr. Usman Iqbal", stars: 5, text: "Attending Dr. Tahir's internal medicine lectures transformed my clinical practice.", textUr: "ڈاکٹر طاہر کے لیکچرز نے میری طبی مشق کو بدل دیا۔", type: "student" },
];

const TestimonialsSlider = () => {
  const { t, lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 70%)" }} />

      <div className="container-medical relative z-10">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary mb-5">
            <Quote className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              {lang === "en" ? "Testimonials" : "تعریفات"}
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            {t("testimonials.title")}
          </h2>
        </motion.div>

        {/* Featured Testimonial Slider */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <div className="min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="medical-card p-8 md:p-10 text-center w-full"
              >
                <Quote className="w-8 h-8 text-primary/20 mx-auto mb-4" />
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-base md:text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "{lang === "en" ? testimonials[current].text : testimonials[current].textUr}"
                </p>
                <p className="font-bold text-foreground">{testimonials[current].name}</p>
                <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground capitalize mt-2 inline-block">
                  {testimonials[current].type}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            <button onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Bottom cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((item, i) => (
            <motion.div key={i} className="medical-card p-5"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: item.stars }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic line-clamp-3">"{lang === "en" ? item.text : item.textUr}"</p>
              <p className="font-semibold text-foreground text-xs mt-3">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
