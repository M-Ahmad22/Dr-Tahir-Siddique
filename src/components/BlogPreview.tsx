import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";

const posts = [
  {
    img: blog1,
    title: "Understanding GERD: Symptoms & Treatment",
    titleUr: "جی ای آر ڈی: علامات اور علاج",
    desc: "Learn about gastroesophageal reflux disease and modern treatment options.",
  },
  {
    img: blog2,
    title: "Medical Education in Pakistan 2026",
    titleUr: "پاکستان میں طبی تعلیم 2026",
    desc: "Exploring the future of medical training and continuing education.",
  },
  {
    img: blog3,
    title: "Nutrition Tips for Digestive Health",
    titleUr: "ہاضمے کی صحت کے لیے غذائی مشورے",
    desc: "Dietary guidelines for maintaining a healthy digestive system.",
  },
  {
    img: blog1,
    title: "Understanding GERD: Symptoms & Treatment",
    titleUr: "جی ای آر ڈی: علامات اور علاج",
    desc: "Learn about gastroesophageal reflux disease and modern treatment options.",
  },
  {
    img: blog2,
    title: "Medical Education in Pakistan 2026",
    titleUr: "پاکستان میں طبی تعلیم 2026",
    desc: "Exploring the future of medical training and continuing education.",
  },
  {
    img: blog3,
    title: "Nutrition Tips for Digestive Health",
    titleUr: "ہاضمے کی صحت کے لیے غذائی مشورے",
    desc: "Dietary guidelines for maintaining a healthy digestive system.",
  },
];

const BlogPreview = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="blog" className="section-padding bg-primary/20">
      <div className="container-medical">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t("blog.title")}
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={i}
              className="medical-card overflow-hidden"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  {lang === "en" ? p.title : p.titleUr}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <Button variant="link" className="px-0">
                  {t("blog.readMore")} →
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
