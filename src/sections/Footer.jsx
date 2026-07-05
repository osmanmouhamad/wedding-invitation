import { motion } from "framer-motion";
import { invitationData } from "../data/invitationData";

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-14 bg-surface/35 sm:w-24" />
      <span className="size-2 rotate-45 border border-surface/70" />
      <span className="h-px w-14 bg-surface/35 sm:w-24" />
    </div>
  );
}

function Footer() {
  const { couple, event, footer } = invitationData;

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-primary px-4 py-20 text-center sm:px-6 sm:py-24"
    >
      {/* Soft light texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_58%)]"
      />

      {/* Upper curved decoration */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-24 w-[125%] -translate-x-1/2 rounded-b-[50%] border-b border-surface/20 bg-surface/5"
      />

      {/* Fine border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-surface/20 sm:inset-5 sm:rounded-[2rem]"
      />

      <div className="relative mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-arabic text-xl text-surface/90 sm:text-2xl"
        >
          شرفتمونا بحضوركم
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
          className="mt-6 origin-center"
        >
          <Divider />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.28, duration: 0.8, ease: "easeOut" }}
          className="mt-8 font-arabic text-4xl font-bold leading-relaxed text-surface sm:text-5xl"
        >
          {couple.groom}
          <span className="mx-3 font-english text-3xl font-normal text-secondary sm:text-4xl">
            &
          </span>
          {couple.bride}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-lg font-arabic text-lg leading-9 text-surface/75 sm:text-xl"
        >
          {footer.message}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.52, duration: 0.65 }}
          dir="ltr"
          className="mt-8 font-english text-lg tracking-[0.16em] text-surface/70 sm:text-xl"
        >
          {event.date}
        </motion.p>

        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: [0, -4, 0] }}
          viewport={{ once: true }}
          transition={{
            opacity: { delay: 0.65, duration: 0.55 },
            y: {
              delay: 1,
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="mt-10 inline-flex size-10 items-center justify-center rounded-full border border-surface/40 text-lg text-surface transition hover:bg-surface/10"
          aria-label="العودة إلى بداية الدعوة"
        >
          ↑
        </motion.a>
      </div>
    </footer>
  );
}

export default Footer;