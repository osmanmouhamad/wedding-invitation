import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <div className="flex min-w-0 flex-1 flex-col items-center text-center">
      <span className="font-english text-[clamp(2rem,9vw,5.5rem)] leading-none tabular-nums text-text-dark">
        {String(value).padStart(2, "0")}
      </span>

      <span className="mt-3 font-arabic text-sm text-text-dark/60 sm:mt-4 sm:text-base">
        {label}
      </span>
    </div>
  );
}

function SmallOrnament() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-3 text-primary"
    >
      <span className="h-px w-12 bg-primary/40 sm:w-20" />
      <span className="size-2 rotate-45 border border-primary/70" />
      <span className="h-px w-12 bg-primary/40 sm:w-20" />
    </div>
  );
}

function Countdown() {
  const { event } = invitationData;

  const [timeLeft, setTimeLeft] = useState(() =>
    getRemainingTime(event.countdownDate),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getRemainingTime(event.countdownDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [event.countdownDate]);

  return (
    <section
      id="countdown"
      dir="rtl"
      className="relative overflow-hidden bg-background px-4 py-24 text-center sm:px-6 sm:py-32"
    >
      {/* Soft paper texture / light */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,247,239,0.78),transparent_62%)]"
      />

      {/* Very soft olive shape at top */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-32 w-[120%] -translate-x-1/2 rounded-b-[50%] bg-primary/7 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-english text-xs uppercase tracking-[0.35em] text-primary sm:text-sm"
        >
          Countdown
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.75, ease: "easeOut" }}
          className="mt-4 font-arabic text-4xl text-text-dark sm:text-5xl"
        >
          نترقب فرحتنا بشوق
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="mt-4 font-arabic text-lg text-text-dark/65 sm:text-xl"
        >
          17 تموز 2026 — الساعة 7:00 مساءً
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28, duration: 0.65, ease: "easeOut" }}
          className="mt-8 origin-center"
        >
          <SmallOrnament />
        </motion.div>

        {timeLeft.isFinished ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 font-arabic text-2xl text-text-dark"
          >
            بدأت فرحتنا ✦
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            className="mx-auto mt-12 max-w-3xl"
          >
            {/* Main horizontal countdown */}
            <div
              dir="ltr"
              className="grid grid-cols-4 border-y border-primary/35 py-7 sm:py-10"
            >
              <TimeUnit value={timeLeft.days} label="يوم" />

              <div className="border-l border-primary/25">
                <TimeUnit value={timeLeft.hours} label="ساعة" />
              </div>

              <div className="border-l border-primary/25">
                <TimeUnit value={timeLeft.minutes} label="دقيقة" />
              </div>

              <div className="border-l border-primary/25">
                <TimeUnit value={timeLeft.seconds} label="ثانية" />
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.65, ease: "easeOut" }}
          className="mt-10 origin-center"
        >
          <SmallOrnament />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.58, duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-lg font-arabic text-xl leading-9 text-text-dark/75 sm:text-2xl"
        >
          حضوركم هو أجمل ما يكتمل به هذا اليوم.
        </motion.p>
      </div>
    </section>
  );
}

export default Countdown;