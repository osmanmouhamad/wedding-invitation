import { motion } from "framer-motion";

import { invitationData } from "../data/invitationData";
import { formatInvitationDate } from "../utils/formatInvitationDate";
import OrnamentDivider from "../components/ui/OrnamentDivider";

function Footer() {
  const { couple, event, footer } = invitationData;

  const eventDate = formatInvitationDate(
    event.startsAt,
    event.timeZone,
  );

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-primary px-4 py-20 text-center sm:px-6 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_58%)]"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-24 w-[125%] -translate-x-1/2 rounded-b-[50%] border-b border-surface/20 bg-surface/5"
      />

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
          {footer.welcomeMessage}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
          className="mt-6 origin-center"
        >
          <OrnamentDivider tone="ivory" />
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
          className="mt-8 font-english text-lg tracking-[0.16em] text-surface/70 sm:text-xl"
        >
          {eventDate}
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
          aria-label={footer.backToTopLabel}
        >
          ↑
        </motion.a>
      </div>
    </footer>
  );
}

export default Footer;