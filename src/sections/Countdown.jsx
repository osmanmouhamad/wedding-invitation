import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import OrnamentDivider from "../components/ui/OrnamentDivider";
import { invitationData } from "../data/invitationData";

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
    <div className="rounded-2xl border border-primary/20 bg-[#f4ecdc] px-1 py-4 text-center sm:px-4 sm:py-6">
      <p className="font-english text-[clamp(2rem,8vw,4.3rem)] font-semibold leading-none tabular-nums text-primary">
        {String(value).padStart(2, "0")}
      </p>

      <p
        dir="rtl"
        className="mt-3 font-arabic text-xs font-bold text-text-dark/75 sm:text-base"
      >
        {label}
      </p>
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

  const timeUnits = [
    { value: timeLeft.days, label: "يوم" },
    { value: timeLeft.hours, label: "ساعة" },
    { value: timeLeft.minutes, label: "دقيقة" },
    { value: timeLeft.seconds, label: "ثانية" },
  ];

  return (
    <section
      id="countdown"
      dir="rtl"
      className="relative overflow-hidden bg-[#e5ddca] px-3 py-16 sm:px-6 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,253,248,0.4),transparent_66%)]"
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 24, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.75rem] border border-primary/30 bg-[#fffdf8]/95 px-5 py-12 text-center shadow-[0_18px_55px_rgba(38,48,31,0.1)] sm:rounded-[2.25rem] sm:px-12 sm:py-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-2 rounded-[1.35rem] border border-secondary/20 sm:inset-3 sm:rounded-[1.8rem]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(ellipse_at_top,rgba(86,97,70,0.07),transparent_72%)]"
          />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="font-english text-xs font-semibold uppercase tracking-[0.32em] text-primary sm:text-sm"
            >
              {countdown.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-4 font-arabic-display text-4xl text-text-dark sm:text-5xl"
            >
              {countdown.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.65 }}
              className="mt-7 origin-center"
            >
              <OrnamentDivider size="small" />
            </motion.div>

            {timeLeft.isFinished ? (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 font-arabic text-2xl font-bold text-primary sm:text-3xl"
              >
                {countdown.finishedMessage}
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.36, duration: 0.75 }}
                dir="ltr"
                className="mt-10 grid grid-cols-4 gap-2 sm:mt-12 sm:gap-3"
              >
                {timeUnits.map((unit) => (
                  <TimeUnit
                    key={unit.label}
                    value={unit.value}
                    label={unit.label}
                  />
                ))}
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.48, duration: 0.7 }}
              className="mx-auto mt-10 max-w-xl font-arabic text-lg leading-9 text-text-dark/75 sm:text-xl"
            >
              {countdown.supportingText}
            </motion.p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Countdown;