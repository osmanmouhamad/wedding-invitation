import { motion } from "framer-motion";
import { invitationData } from "../data/invitationData";
import introBg from "../assets/intro-bg.webp";

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 text-primary">
      <span className="h-px w-14 bg-primary/45 sm:w-24" />
      <span className="size-2 rotate-45 border border-primary/70" />
      <span className="h-px w-14 bg-primary/45 sm:w-24" />
    </div>
  );
}

function Hero() {
  const { couple, event, venue, hero } = invitationData;

  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-[100svh] overflow-hidden bg-background px-4 text-center sm:px-6"
    >
      {/* Very soft architecture watermark */}
      <img
        src={introBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.08] saturate-[0.35] mix-blend-multiply"
      />

      {/* Ivory paper finish */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,247,239,0.95),rgba(238,231,217,0.9)_58%,rgba(201,190,160,0.28)_100%)]"
      />

      {/* Olive canopy — elegant, not fake curtains */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-52 bg-[radial-gradient(ellipse_at_center_top,rgba(116,121,87,0.88),rgba(116,121,87,0.5)_46%,transparent_74%)]"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-32 w-[135%] -translate-x-1/2 rounded-b-[50%] border-b border-surface/30 bg-primary/20 sm:h-40"
      />

      {/* Fine inner frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[1.7rem] border border-primary/25 sm:inset-5 sm:rounded-[2.2rem]"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-2 pb-24 pt-24 sm:pb-28 sm:pt-28">
        {/* Basmala */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="font-arabic text-xl text-text-dark sm:text-3xl"
        >
          {hero.basmala}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.18, duration: 0.65, ease: "easeOut" }}
          className="mt-6"
        >
          <Divider />
        </motion.div>

        {/* Invitation line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.7, ease: "easeOut" }}
          className="mt-8"
        >
          <p className="font-arabic text-lg text-text-dark/75 sm:text-xl">
            بكل الحب والفرح
          </p>

          <p className="mt-2 font-arabic text-base text-text-dark/60 sm:text-lg">
            يسرّنا دعوتكم لحضور حفل زفاف
          </p>
        </motion.div>

        {/* Main names */}
        <motion.h1
          initial={{ opacity: 0, y: 22, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.52, duration: 0.95, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center font-arabic font-bold leading-[0.9] text-text-dark"
        >
          <span className="text-[clamp(1rem,6vw,5.5rem)]">
            {couple.groom}
          </span>

          <span className="my-4 flex items-center gap-4">
            <span className="h-px w-10 bg-primary/55 sm:w-16" />
            <span className="font-english text-4xl font-normal text-primary sm:text-5xl">
              و
            </span>
            <span className="h-px w-10 bg-primary/55 sm:w-16" />
          </span>

          <span className="text-[clamp(1rem,6vw,5.5rem)]">
            {couple.bride}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.92, duration: 0.65, ease: "easeOut" }}
          className="mt-10"
        >
          <Divider />
        </motion.div>

        {/* Date only — details move to WeddingDetails */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.08, duration: 0.7, ease: "easeOut" }}
          className="mt-8"
        >
          <p className="font-arabic text-sm text-text-dark/55 sm:text-base">
            يوم فرحنا
          </p>

          <p
            dir="ltr"
            className="mt-2 font-english text-2xl tracking-[0.14em] text-primary sm:text-3xl"
          >
            {event.date}
          </p>
        </motion.div>

        {/* Scroll action */}
        <motion.a
          href="#details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 7, 0] }}
          transition={{
            opacity: { delay: 1.28, duration: 0.5 },
            y: {
              delay: 1.45,
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="mt-12 flex flex-col items-center gap-3 text-text-dark/65"
        >
          <span className="font-arabic text-sm">اكتشف تفاصيل دعوتنا</span>

          <span className="flex size-10 items-center justify-center rounded-full border border-primary/55 text-primary">
            ↓
          </span>
        </motion.a>
      </div>

      {/* Bottom olive ribbon */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-surface/25 bg-primary px-6 py-4">
        <p className="font-arabic text-base text-surface sm:text-lg">
          {venue.name} — {venue.address}
        </p>
      </div>
    </section>
  );
}

export default Hero;