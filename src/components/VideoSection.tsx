import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Play, Youtube, ExternalLink } from "lucide-react";

const videos = [
  {
    titleEn: "Understanding Gastroenterology",
    titleUr: "معدے کی بیماریوں کو سمجھیں",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    titleEn: "Hepatitis C Treatment Guide",
    titleUr: "ہیپاٹائٹس سی علاج گائیڈ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    titleEn: "Diabetes Management Tips",
    titleUr: "ذیابیطس کے انتظام کی تجاویز",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    titleEn: "Patient Awareness Session",
    titleUr: "مریضوں کی آگاہی سیشن",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    titleEn: "Digestive Health Awareness",
    titleUr: "نظامِ ہضم کی آگاہی",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    titleEn: "Liver Disease Prevention",
    titleUr: "جگر کی بیماری سے بچاؤ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    titleEn: "Digestive Health Awareness",
    titleUr: "نظامِ ہضم کی آگاہی",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    titleEn: "Liver Disease Prevention",
    titleUr: "جگر کی بیماری سے بچاؤ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
];

const VideoSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
        }}
      />

      <div className="container-medical relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary mb-5">
            <Youtube className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              {lang === "en" ? "Media & Videos" : "میڈیا اور ویڈیوز"}
            </span>
          </motion.div>

          <h2
            className="text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {lang === "en" ? "Watch & Learn" : "دیکھیں اور سیکھیں"}
          </h2>

          <p className="max-w-2xl mx-auto text-base text-muted-foreground mt-3">
            {lang === "en"
              ? "Educational videos and awareness sessions by Prof. Dr. Tahir Siddique"
              : "پروفیسر ڈاکٹر طاہر صدیقی کی تعلیمی ویڈیوز اور آگاہی سیشنز"}
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Video */}
          <a
            href={videos[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video relative">
                <img
                  src={videos[0].thumbnail}
                  className="w-full h-full object-cover"
                  alt={videos[0].titleEn}
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Play className="text-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-foreground">
                  {lang === "en" ? videos[0].titleEn : videos[0].titleUr}
                </h3>

                <p className="text-xs text-muted-foreground mt-1">
                  Prof. Dr. Tahir Siddique
                </p>
              </div>
            </motion.div>
          </a>

          {/* Right List */}
          <div className="space-y-4">
            {videos.slice(1, 4).map((v, i) => (
              <a
                key={i}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="group flex gap-4 rounded-xl bg-card border border-border p-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="relative w-40 h-24 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={v.thumbnail}
                      className="w-full h-full object-cover"
                      alt={v.titleEn}
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Play className="text-white w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center min-w-0">
                    <h3 className="font-semibold text-foreground text-sm line-clamp-2">
                      {lang === "en" ? v.titleEn : v.titleUr}
                    </h3>

                    <p className="text-xs text-muted-foreground mt-1">
                      Prof. Dr. Tahir Siddique
                    </p>

                    <div className="flex items-center gap-1 mt-2 text-primary text-xs font-medium">
                      <ExternalLink className="w-3 h-3" />
                      {lang === "en" ? "Watch Now" : "ابھی دیکھیں"}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>

        {/* Horizontal More Videos */}
        {videos.length > 4 && (
          <div className="mt-14">
            <h3 className="text-lg font-semibold mb-5 text-foreground">
              {lang === "en" ? "More Videos" : "مزید ویڈیوز"}
            </h3>

            <div className="flex gap-5 overflow-x-auto pb-4">
              {videos.slice(4).map((v, i) => (
                <a
                  key={i}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[260px]"
                >
                  <div className="rounded-xl overflow-hidden border border-border bg-card hover:shadow-md transition">
                    <div className="aspect-video relative">
                      <img
                        src={v.thumbnail}
                        className="w-full h-full object-cover"
                        alt={v.titleEn}
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <Play className="text-white w-4 h-4 ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <h4 className="text-sm font-semibold line-clamp-2">
                        {lang === "en" ? v.titleEn : v.titleUr}
                      </h4>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
