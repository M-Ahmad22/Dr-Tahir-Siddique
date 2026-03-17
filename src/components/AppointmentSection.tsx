import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  CreditCard,
  Video,
  Building2,
} from "lucide-react";
import { useState } from "react";

const AppointmentSection = () => {
  const { t, lang } = useLanguage();

  const [appointmentType, setAppointmentType] = useState<
    "physical" | "telehealth"
  >("physical");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();

  /* Generate available days (today → end of month, no Sundays) */
  const getAvailableDays = () => {
    const days: number[] = [];

    const monthIndex = today.getMonth();
    const todayDate = today.getDate();
    const totalDays = new Date(currentYear, monthIndex + 1, 0).getDate();

    for (let d = todayDate; d <= totalDays; d++) {
      const checkDate = new Date(currentYear, monthIndex, d);

      if (checkDate.getDay() !== 0) {
        days.push(d);
      }
    }

    return days;
  };

  const availableDays = getAvailableDays();

  /* Generate time slots every 20 minutes */
  const generateTimeSlots = () => {
    const slots: string[] = [];

    for (let h = 15; h <= 19; h++) {
      for (let m = 0; m < 60; m += 15) {
        // stop after 7:45 PM
        if (h === 19 && m > 45) break;

        const hour = h > 12 ? h - 12 : h;
        const ampm = h >= 12 ? "PM" : "AM";
        const minute = m.toString().padStart(2, "0");

        slots.push(`${hour}:${minute} ${ampm}`);
      }
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  /* Submit */
  const handleSubmit = () => {
    const phoneRegex = /^03[0-9]{9}$/;

    if (!name.trim()) {
      alert("Please enter patient name");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Enter a valid Pakistani phone number (03XXXXXXXXX)");
      return;
    }

    if (!day) {
      alert("Please select appointment day");
      return;
    }

    if (!time) {
      alert("Please select appointment time");
      return;
    }

    const number = "923036311116";
    const fullDate = `${day} ${currentMonth} ${currentYear}`;

    const text = `
New Appointment Request

Name: ${name}
Phone: ${phone}
Date: ${fullDate}
Time: ${time}
Appointment Type: ${
      appointmentType === "physical" ? "Clinic Visit" : "Video Consultation"
    }
Message: ${message}
`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="appointment"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
        }}
      />

      <div className="container-medical relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              {lang === "en" ? "Schedule Visit" : "ملاقات شیڈول"}
            </span>
          </motion.div>

          <h2
            className="text-3xl md:text-5xl font-bold text-foreground"
            style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
          >
            {t("appointment.title")}
          </h2>
        </motion.div>

        {/* Appointment Type Toggle */}
        <motion.div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted rounded-xl p-1.5 gap-1">
            <button
              onClick={() => setAppointmentType("physical")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold ${
                appointmentType === "physical"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Clinic Visit
            </button>

            <button
              onClick={() => setAppointmentType("telehealth")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold ${
                appointmentType === "telehealth"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <Video className="w-4 h-4" />
              Video Call
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* FORM */}
          <motion.div className="lg:col-span-3 medical-card p-10 md:p-12">
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Patient Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />

                <Input
                  placeholder="03XXXXXXXXX"
                  value={phone}
                  maxLength={11}
                  required
                  inputMode="numeric"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setPhone(value);
                  }}
                />
              </div>

              {/* Date */}
              <div className="grid sm:grid-cols-3 gap-4">
                <select
                  value={day}
                  required
                  onChange={(e) => setDay(e.target.value)}
                  className="rounded-xl border px-3 py-2"
                >
                  <option value="">Day</option>

                  {availableDays.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>

                <Input value={currentMonth} readOnly className="bg-muted" />
                <Input value={currentYear} readOnly className="bg-muted" />
              </div>

              {/* Time */}
              <select
                value={time}
                required
                onChange={(e) => setTime(e.target.value)}
                className="rounded-xl border px-3 py-2"
              >
                <option value="">Select Time Slot</option>

                {timeSlots.map((slot) => (
                  <option key={slot}>{slot}</option>
                ))}
              </select>

              <Textarea
                placeholder="Describe your problem (optional)"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <Button
                variant="hero"
                className="w-full"
                size="lg"
                onClick={handleSubmit}
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Phone,
                label: "Helpline",
                value: "0300-4004045, 0312-4139327",
              },
              {
                icon: MapPin,
                label: "Clinic",
                value: "Doctors Hospital Lahore",
              },
              {
                icon: Clock,
                label: "Timing",
                value: "Mon – Sat",
              },
              {
                icon: CreditCard,
                label: "Fee",
                value: "Rs. 5000",
              },
            ].map((item, i) => (
              <div key={i} className="medical-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
