import { motion } from "framer-motion";

import OrnamentDivider from "../components/ui/OrnamentDivider";
import { invitationData } from "../data/invitationData";

function Hero({ onShowDetails }) {
  const { couple, hero } = invitationData;

  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-[100svh] overflow-hidden bg-[#e5ddca] px-3 py-3 sm:px-6 sm:py-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,253,248,0.18),transparent_65%)]"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-1.5rem)] max-w-4xl items-center justify-center sm:min-h-[calc(100svh-3rem)]">
        <motion.article
          initial={{ opacity: 0, y: 22, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-[1.75rem] border border-primary/30 bg-[#fffdf8] px-5 py-10 text-center shadow-[0_18px_55px_rgba(38,48,31,0.1)] sm:rounded-[2.25rem] sm:px-12 sm:py-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-2 rounded-[1.35rem] border border-secondary/20 sm:inset-3 sm:rounded-[1.8rem]"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.65 }}
            >
              <p className="font-arabic-display text-xl text-text-dark sm:text-3xl">
                {hero.basmala}
              </p>

              <blockquote className="mx-auto mt-5 max-w-xl font-arabic text-[0.83rem] leading-7 text-text-dark/75 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-9">
                {hero.verse}
              </blockquote>

              <p className="mt-3 font-arabic text-sm font-bold text-primary/85">
                {hero.verseReference}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.28, duration: 0.65, ease: "easeOut" }}
              className="mt-8 origin-center"
            >
              <OrnamentDivider />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.85, ease: "easeOut" }}
              className="mt-9 flex flex-col items-center font-arabic-display leading-[1.05] text-text-dark sm:mt-11"
            >
              <span className="text-[clamp(2.5rem,11vw,5.8rem)]">
                {couple.groom}
              </span>

              <span className="my-4 flex items-center gap-4 sm:my-5">
                <span className="h-px w-12 bg-secondary/60 sm:w-20" />

                <span className="font-arabic text-3xl text-primary sm:text-4xl">
                  و
                </span>

                <span className="h-px w-12 bg-secondary/60 sm:w-20" />
              </span>

              <span className="text-[clamp(2.5rem,11vw,5.8rem)]">
                {couple.bride}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.7, ease: "easeOut" }}
              className="mt-10 sm:mt-12"
            >
              <button
                type="button"
                onClick={onShowDetails}
                className="group inline-flex items-center gap-3 rounded-full border border-primary/45 bg-[#eee5d4] px-6 py-3 font-arabic text-sm font-bold text-primary shadow-[0_10px_24px_rgba(38,48,31,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 sm:px-8 sm:text-base"
              >
                <span>{hero.scrollLabel}</span>

                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </button>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Hero;