import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Cross, Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.services", href: "#services" },
    // { key: "nav.courses", href: "#courses" },
    { key: "nav.lectures", href: "#lectures" },
    { key: "nav.blog", href: "#blog" },
    { key: "nav.testimonials", href: "#testimonials" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-medical flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg medical-gradient-bg flex items-center justify-center">
            <Cross className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-sm md:text-base text-foreground hidden sm:block">
            Prof. Dr. Tahir Siddique
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border hover:bg-accent transition-colors"
          >
            {lang === "en" ? "اردو" : "EN"}
          </button>
          <Button
            variant="hero"
            size="sm"
            className="hidden md:inline-flex"
            asChild
          >
            <a href="#appointment">{t("nav.bookAppointment")}</a>
          </Button>
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border/50"
              onClick={() => setMobileOpen(false)}
            >
              {t(l.key)}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full mt-3" asChild>
            <a href="#appointment">{t("nav.bookAppointment")}</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
