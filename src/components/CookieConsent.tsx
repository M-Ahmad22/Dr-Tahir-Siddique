import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 medical-card p-5 animate-fade-up">
      <p className="text-sm text-muted-foreground mb-3">
        We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.
      </p>
      <div className="flex gap-2">
        <Button variant="hero" size="sm" onClick={accept}>Accept</Button>
        <Button variant="ghost" size="sm" onClick={accept}>Decline</Button>
      </div>
    </div>
  );
};

export default CookieConsent;
