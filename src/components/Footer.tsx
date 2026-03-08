import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = ["nav.home", "nav.about", "nav.services", "nav.blog", "nav.contact"];
  const serviceLinks = ["services.colonoscopy", "services.endoscopy", "services.diabetes", "services.hepB", "services.hepC"];

  return (
    <footer className="medical-gradient-bg text-primary-foreground">
      <div className="container-medical py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <Cross className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">Prof. Dr. Tahir Siddique</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((k) => (
                <li key={k}>
                  <a href={`#${k.split(".")[1]}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {t(k)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((k) => (
                <li key={k}>
                  <span className="text-sm text-primary-foreground/70">{t(k)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.newsletter")}</h4>
            <div className="flex gap-2">
              <Input
                placeholder={t("footer.email")}
                className="rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="rounded-xl bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground shrink-0">
                {t("footer.subscribe")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-medical py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-primary-foreground/60">{t("footer.rights")}</p>
          <div className="flex gap-4 text-xs text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-primary-foreground">{t("footer.gdpr")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
