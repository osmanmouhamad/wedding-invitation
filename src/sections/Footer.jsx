import { motion } from "framer-motion";

import { invitationData } from "../data/invitationData";

function LeafMark() {
  return (
    <svg
      viewBox="0 0 32 20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="size-7 text-primary"
    >
      <path d="M16 18C16 8 10 3 2 2c1 8 6 13 14 16Z" />
      <path d="M16 18c0-10 6-15 14-16-1 8-6 13-14 16Z" />
      <path d="M16 18V8" />
    </svg>
  );
}

function Footer() {
  const { footer } = invitationData;

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#e5ddca] px-3 py-16 sm:px-6 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,253,248,0.42),transparent_65%),radial-gradient(circle_at_bottom,rgba(86,97,70,0.1),transparent_42%)]"
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 24, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.75rem] border border-primary/30 bg-[#fffdf8]/95 px-5 py-14 text-center shadow-[0_18px_55px_rgba(38,48,31,0.1)] sm:rounded-[2.25rem] sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-2 rounded-[1.35rem] border border-secondary/20 sm:inset-3 sm:rounded-[1.8rem]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(86,97,70,0.1),transparent_72%)]"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 bg-secondary/60 sm:w-20" />
              <LeafMark />
              <span className="h-px w-12 bg-secondary/60 sm:w-20" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14, duration: 0.7 }}
              className="mt-9 font-arabic-display text-3xl leading-relaxed text-text-dark sm:text-4xl"
            >
              {footer.welcomeMessage}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.75 }}
              className="mx-auto mt-8 max-w-xl border-y border-primary/15 px-3 py-8"
            >
              <p className="font-arabic text-xl leading-[2.1] text-text-dark/80 sm:text-2xl">
                {footer.message}
              </p>

              <p className="mt-5 font-arabic text-lg font-bold text-primary sm:text-xl">
                {footer.closingMessage}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.65 }}
              className="mx-auto mt-10 flex items-center justify-center gap-3"
            >
              <span className="size-1.5 rotate-45 border border-secondary/80" />
              <span className="h-px w-16 bg-secondary/55 sm:w-24" />
              <span className="size-1.5 rotate-45 border border-secondary/80" />
            </motion.div>
          </div>
        </motion.article>
      </div>
    </footer>
  );
}

export default Footer;