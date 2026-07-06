import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import OrnamentDivider from "../components/ui/OrnamentDivider";
import { invitationData } from "../data/invitationData";
import { formatInvitationDateTime } from "../utils/formatInvitationDate";

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

function TimeUnit({ value, label }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center text-center">
      <span className="font-english text-[clamp(2rem,9vw,5.5rem)] font-semibold leading-none tabular-nums text-primary">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-3 font-arabic text-sm font-bold text-text-dark/80 sm:mt-4 sm:text-base">
        {label}
      </span>
    </div>
  );
}

function Countdown() {
  const { event, countdown } = invitationData;

  const [timeLeft, setTimeLeft] = useState(() =>
    getRemainingTime(event.startsAt),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getRemainingTime(event.startsAt));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [event.startsAt]);

  const eventDateTime = formatInvitationDateTime(
    event.startsAt,
    event.timeZone,
  );

  return (
    <section
      id="countdown"
      dir="rtl"
      className="relative overflow-hidden bg-surface px-4 py-24 text-center sm:px-6 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(86,97,70,0.12),transparent_62%)]"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-32 w-[120%] -translate-x-1/2 rounded-b-[50%] bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-english text-sm font-semibold uppercase tracking-[0.35em] text-primary"
        >
          {countdown.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.75, ease: "easeOut" }}
          className="mt-4 font-arabic text-4xl font-bold text-text-dark sm:text-5xl"
        >
          {countdown.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="mt-4 font-arabic text-lg font-semibold text-text-dark/85 sm:text-xl"
        >
          {eventDateTime}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28, duration: 0.65, ease: "easeOut" }}
          className="mt-8 origin-center"
        >
          <OrnamentDivider size="small" />
        </motion.div>

        {timeLeft.isFinished ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 font-arabic text-2xl font-bold text-primary"
          >
            {countdown.finishedMessage}
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div
              dir="ltr"
              className="grid grid-cols-4 divide-x divide-primary/35 rounded-2xl border border-primary/45 bg-background px-2 py-7 shadow-[0_14px_38px_rgba(38,48,31,0.1)] sm:px-5 sm:py-10"
            >
              <TimeUnit value={timeLeft.days} label="يوم" />
              <TimeUnit value={timeLeft.hours} label="ساعة" />
              <TimeUnit value={timeLeft.minutes} label="دقيقة" />
              <TimeUnit value={timeLeft.seconds} label="ثانية" />
            </div>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-xl font-arabic text-lg font-semibold leading-9 text-text-dark/80 sm:text-xl"
        >
          {countdown.supportingText}
        </motion.p>
      </div>
    </section>
  );
}

export default Countdown;