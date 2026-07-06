import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { invitationData } from "../data/invitationData";
import OrnamentDivider from "../components/ui/OrnamentDivider";

function getRemainingTime(targetDate) {
  const targetTime = new Date(targetDate).getTime();

  if (Number.isNaN(targetTime)) {
    return {
      isFinished: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const difference = Math.max(targetTime - Date.now(), 0);

  return {
    isFinished: difference === 0,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function formatEventDateTime(dateValue) {
  const date = new Date(dateValue);

  const formattedDate = new Intl.DateTimeFormat("ar-LB-u-nu-latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Beirut",
  }).format(date);

  const timeParts = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Beirut",
  }).formatToParts(date);

  const hour24 = Number(
    timeParts.find((part) => part.type === "hour")?.value ?? 0,
  );

  const minutes =
    timeParts.find((part) => part.type === "minute")?.value ?? "00";

  const hour12 = hour24 % 12 || 12;
  const period = hour24 >= 12 ? "مساءً" : "صباحًا";

  return `${formattedDate} — الساعة ${hour12}:${minutes} ${period}`;
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex min-w-16 flex-col items-center gap-2 sm:min-w-20">
      <span className="font-display text-3xl font-semibold text-primary sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>

      <span className="font-arabic text-xs text-text-dark/65 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

function Countdown() {
  const { event } = invitationData;

  const [timeLeft, setTimeLeft] = useState(() =>
    getRemainingTime(event.startsAt),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getRemainingTime(event.startsAt));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [event.startsAt]);

  const eventDateTime = formatEventDateTime(event.startsAt);

  return (
    <section className="relative overflow-hidden bg-surface px-5 py-24 sm:px-8 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(116,121,87,0.12),transparent_42%)]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
          className="font-arabic text-lg text-primary sm:text-xl"
        >
          نترقب فرحتنا بشوق
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-4 font-display text-4xl font-semibold text-text-dark sm:text-5xl"
        >
          Countdown
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="mt-7"
        >
          <OrnamentDivider size="small" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="mt-7 font-arabic text-base text-text-dark/75 sm:text-lg"
        >
          {eventDateTime}
        </motion.p>

        {timeLeft.isFinished ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 font-arabic text-2xl text-primary sm:text-3xl"
          >
            بدأت فرحتنا ✦
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-8 sm:gap-x-7"
          >
            <TimeUnit value={timeLeft.days} label="يوم" />
            <TimeUnit value={timeLeft.hours} label="ساعة" />
            <TimeUnit value={timeLeft.minutes} label="دقيقة" />
            <TimeUnit value={timeLeft.seconds} label="ثانية" />
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, delay: 0.34 }}
          className="mt-12 max-w-md font-arabic text-base leading-8 text-text-dark/65 sm:text-lg"
        >
          حضوركم هو أجمل ما يكتمل به هذا اليوم.
        </motion.p>
      </div>
    </section>
  );
}

export default Countdown;