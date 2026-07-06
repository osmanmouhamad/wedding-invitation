import { motion } from "framer-motion";

import { invitationData } from "../data/invitationData";

function Footer() {
  const { footer } = invitationData;

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#46513c] px-5 py-24 text-center sm:px-6 sm:py-32"
    >
      {/* Soft background light */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,250,242,0.14),transparent_28%),radial-gradient(circle_at_12%_85%,rgba(214,193,142,0.12),transparent_24%),radial-gradient(circle_at_88%_80%,rgba(214,193,142,0.1),transparent_22%)]"
      />

      {/* Decorative curved glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-36 w-[130%] -translate-x-1/2 rounded-b-[50%] border-b border-[#fffaf2]/15 bg-[#fffaf2]/5"
      />

      {/* Outer elegant border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-[2rem] border border-[#fffaf2]/20 sm:inset-6"
      />

      {/* Decorative dots */}
      <span
        aria-hidden="true"
        className="absolute left-[12%] top-[27%] size-1.5 rounded-full bg-[#d8c18e]/70 shadow-[0_0_16px_rgba(216,193,142,0.75)]"
      />
      <span
        aria-hidden="true"
        className="absolute right-[14%] top-[36%] size-1 rounded-full bg-[#fffaf2]/60"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[23%] left-[18%] size-1 rounded-full bg-[#fffaf2]/50"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[28%] right-[16%] size-1.5 rounded-full bg-[#d8c18e]/65 shadow-[0_0_14px_rgba(216,193,142,0.6)]"
      />

      <div className="relative mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex items-center justify-center gap-4"
        >
          <span className="h-px w-14 bg-[#d8c18e]/55 sm:w-20" />
          <span className="text-xl text-[#d8c18e]">✦</span>
          <span className="h-px w-14 bg-[#d8c18e]/55 sm:w-20" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.12, duration: 0.75, ease: "easeOut" }}
          className="mt-10 font-arabic text-2xl font-bold leading-relaxed text-[#fffaf2] sm:text-3xl"
        >
          {footer.welcomeMessage}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-xl border-y border-[#fffaf2]/15 py-8"
        >
          <p className="font-arabic text-xl leading-[2.15] text-[#fffaf2]/85 sm:text-2xl">
            {footer.message}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.42, duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-10 flex items-center justify-center gap-3"
        >
          <span className="size-1.5 rotate-45 border border-[#d8c18e]/85" />
          <span className="h-px w-16 bg-[#d8c18e]/55 sm:w-24" />
          <span className="size-1.5 rotate-45 border border-[#d8c18e]/85" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-8 font-english text-xs uppercase tracking-[0.32em] text-[#d8c18e]/85 sm:text-sm"
        >
          With Love &amp; Joy
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;