import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/92423XXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
