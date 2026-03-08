import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "en" | "ur";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", ur: "ہوم" },
  "nav.about": { en: "About", ur: "تعارف" },
  "nav.services": { en: "Services", ur: "خدمات" },
  "nav.lectures": { en: "Lectures", ur: "لیکچرز" },
  "nav.blog": { en: "Blog", ur: "بلاگ" },
  "nav.testimonials": { en: "Testimonials", ur: "تعریفات" },
  "nav.contact": { en: "Contact", ur: "رابطہ" },
  "nav.bookAppointment": { en: "Book Appointment", ur: "اپوائنٹمنٹ بک کریں" },

  // Hero
  "hero.headline": {
    en: "Expert Internal Medicine & Gastroenterology Care",
    ur: "ماہر داخلی طب اور معدے کی دیکھ بھال",
  },
  "hero.subtext": {
    en: "24 Years of Trusted Medical Excellence in Lahore",
    ur: "لاہور میں 24 سال کی طبی مہارت",
  },
  "hero.cta": { en: "Book Appointment", ur: "اپوائنٹمنٹ بک کریں" },
  "hero.viewServices": { en: "View Services", ur: "خدمات دیکھیں" },
  "hero.experience": { en: "Years Experience", ur: "سال کا تجربہ" },
  "hero.satisfaction": { en: "Patient Satisfaction", ur: "مریضوں کی اطمینان" },
  "hero.waitTime": { en: "Under 15 Min Wait Time", ur: "15 منٹ سے کم انتظار" },

  // Stats
  "stats.experience": { en: "24+ Years Experience", ur: "24+ سال کا تجربہ" },
  "stats.reviews": { en: "691+ Verified Reviews", ur: "691+ تصدیق شدہ جائزے" },
  "stats.conditions": {
    en: "50+ Conditions Treated",
    ur: "50+ بیماریوں کا علاج",
  },
  "stats.procedures": {
    en: "10+ Specialized Procedures",
    ur: "10+ خصوصی طریقہ کار",
  },

  // About
  "about.title": {
    en: "About Prof. Dr. Tahir Siddique",
    ur: "پروفیسر ڈاکٹر طاہر صدیقی کے بارے میں",
  },
  "about.role": {
    en: "Internal Medicine Specialist | Gastroenterologist",
    ur: "ماہر داخلی طب | ماہر معدہ",
  },
  "about.bio": {
    en: "Prof. Dr. Tahir Siddique is a renowned Internal Medicine Specialist and Gastroenterologist with over 24 years of clinical experience. He is dedicated to providing compassionate, evidence-based care to patients across Pakistan.",
    ur: "پروفیسر ڈاکٹر طاہر صدیقی ایک معروف ماہر داخلی طب اور ماہر معدہ ہیں جن کا 24 سال سے زیادہ طبی تجربہ ہے۔",
  },
  "about.readMore": { en: "Read Full Profile", ur: "مکمل پروفائل پڑھیں" },

  // Services
  "services.title": { en: "Key Services", ur: "اہم خدمات" },
  "services.viewAll": { en: "View All Services", ur: "تمام خدمات دیکھیں" },
  "services.colonoscopy": { en: "Colonoscopy", ur: "کالونوسکوپی" },
  "services.endoscopy": { en: "Endoscopy", ur: "اینڈوسکوپی" },
  "services.diabetes": { en: "Diabetes Management", ur: "ذیابیطس کا انتظام" },
  "services.hepB": { en: "Hepatitis B Treatment", ur: "ہیپاٹائٹس بی کا علاج" },
  "services.hepC": { en: "Hepatitis C Treatment", ur: "ہیپاٹائٹس سی کا علاج" },
  "services.constipation": { en: "Constipation Treatment", ur: "قبض کا علاج" },

  // Conditions
  "conditions.title": { en: "Conditions Treated", ur: "علاج شدہ بیماریاں" },
  "conditions.viewAll": {
    en: "View All Conditions",
    ur: "تمام بیماریاں دیکھیں",
  },

  // Appointment
  "appointment.title": { en: "Book an Appointment", ur: "اپوائنٹمنٹ بک کریں" },
  "appointment.name": { en: "Full Name", ur: "پورا نام" },
  "appointment.phone": { en: "Phone Number", ur: "فون نمبر" },
  "appointment.date": { en: "Select Date", ur: "تاریخ منتخب کریں" },
  "appointment.time": { en: "Select Time", ur: "وقت منتخب کریں" },
  "appointment.type": { en: "Consultation Type", ur: "مشاورت کی قسم" },
  "appointment.clinic": { en: "Clinic Visit", ur: "کلینک" },
  "appointment.telehealth": { en: "Telehealth", ur: "ٹیلی ہیلتھ" },
  "appointment.message": { en: "Message", ur: "پیغام" },
  "appointment.submit": { en: "Submit Appointment", ur: "اپوائنٹمنٹ جمع کریں" },
  "appointment.helpline": { en: "Helpline", ur: "ہیلپ لائن" },
  "appointment.clinicName": {
    en: "Doctors Hospital, Lahore",
    ur: "ڈاکٹرز ہسپتال، لاہور",
  },
  "appointment.timing": {
    en: "Mon – Sat, 3:00 PM – 5:00 PM",
    ur: "پیر – ہفتہ، 3:00 بجے – 5:00 بجے",
  },
  "appointment.fee": {
    en: "Consultation Fee: Rs. 5,000",
    ur: "مشاورت فیس: 5,000 روپے",
  },

  // Lectures
  "lectures.title": { en: "Online Lectures", ur: "آن لائن لیکچرز" },
  "lectures.register": { en: "Register", ur: "رجسٹر کریں" },

  // Courses
  "courses.title": { en: "Medical Courses", ur: "طبی کورسز" },
  "courses.enroll": { en: "Enroll Now", ur: "ابھی داخلہ لیں" },

  // Blog
  "blog.title": { en: "Latest Articles", ur: "تازہ ترین مضامین" },
  "blog.readMore": { en: "Read More", ur: "مزید پڑھیں" },

  // Testimonials
  "testimonials.title": {
    en: "What Our Patients Say",
    ur: "ہمارے مریض کیا کہتے ہیں",
  },

  // Doctors
  "doctors.title": {
    en: "Associate Doctors MedSync Association",
    ur: "ایسوسی ایٹ ڈاکٹرز – میڈ سنک ایسوسی ایشن",
  },
  "doctors.book": { en: "Book Appointment", ur: "اپوائنٹمنٹ بک کریں" },

  // Contact
  "contact.title": { en: "Location", ur: "رابطہ اور مقام" },
  "contact.emergency": { en: "Emergency Contact", ur: "ایمرجنسی رابطہ" },
  "contact.hours": {
    en: "Clinic Hours: Mon – Sat, 3 PM – 5 PM",
    ur: "کلینک اوقات: پیر – ہفتہ، 3 بجے – 5 بجے",
  },

  // Gallery
  "gallery.title": { en: "Gallery", ur: "گیلری" },

  // FAQ
  "faq.title": {
    en: "Frequently Asked Questions",
    ur: "اکثر پوچھے گئے سوالات",
  },

  // Videos
  "videos.title": { en: "Watch & Learn", ur: "دیکھیں اور سیکھیں" },

  // Footer
  "footer.description": {
    en: "Dedicated to providing compassionate, evidence-based medical care for over 24 years.",
    ur: "24 سال سے زیادہ عرصے سے ہمدردانہ، ثبوت پر مبنی طبی نگہداشت فراہم کر رہے ہیں۔",
  },
  "footer.quickLinks": { en: "Quick Links", ur: "فوری لنکس" },
  "footer.services": { en: "Services", ur: "خدمات" },
  "footer.newsletter": { en: "Newsletter", ur: "نیوز لیٹر" },
  "footer.subscribe": { en: "Subscribe", ur: "سبسکرائب" },
  "footer.email": { en: "Enter your email", ur: "اپنا ای میل درج کریں" },
  "footer.rights": {
    en: "© 2026 Prof. Dr. Tahir Siddique. Designed by MedSync Association",
    ur: "© 2026 پروفیسر ڈاکٹر طاہر صدیقی۔ ڈیزائن از میڈ سنک ایسوسی ایشن",
  },
  "footer.privacy": { en: "Privacy Policy", ur: "رازداری کی پالیسی" },
  "footer.gdpr": { en: "GDPR", ur: "جی ڈی پی آر" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ur" : "en"));
  }, []);

  const t = useCallback(
    (key: string) => translations[key]?.[lang] || key,
    [lang],
  );

  const dir = lang === "ur" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
