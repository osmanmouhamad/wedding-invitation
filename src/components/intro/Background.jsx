import { motion } from "framer-motion";
import introBg from "../../assets/intro-bg-optimized.webp";

function Background({ isOpening }) {
  return (
    <>
      {/* Architecture background — brighter and softer */}
      <motion.img
        src={introBg}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.05, x: 0 }}
        animate={
          isOpening
            ? {
                opacity: [1, 1, 0.95],
                scale: [1.02, 1.07, 1.12],
                x: [0, -3, 0],
              }
            : {
                opacity: 1,
                scale: [1.02, 1.045, 1.02],
                x: [0, 2, 0],
              }
        }
        transition={
          isOpening
            ? {
                duration: 2.4,
                ease: "easeInOut",
              }
            : {
                opacity: { duration: 1.1, ease: "easeOut" },
                scale: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.94] contrast-[0.92] saturate-[0.8]"
      />

      {/* Overall ivory wash — makes intro closer to Hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,247,239,0.28),rgba(238,231,217,0.12)_48%,rgba(116,121,87,0.18))]"
      />

      {/* Warm center light behind title and seal */}
      <motion.div
        aria-hidden="true"
        animate={
          isOpening
            ? {
                opacity: [0.38, 0.62, 0.2],
                scale: [1, 1.22, 1.6],
              }
            : {
                opacity: [0.34, 0.48, 0.34],
                scale: [1, 1.05, 1],
              }
        }
        transition={
          isOpening
            ? {
                duration: 2.1,
                ease: "easeInOut",
              }
            : {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,250,240,0.62),rgba(255,248,235,0.22)_42%,transparent_68%)]"
      />

      {/* Soft lower fog */}
      <motion.div
        aria-hidden="true"
        animate={
          isOpening
            ? {
                opacity: [0.08, 0.18, 0],
                x: ["-8%", "4%", "10%"],
                scale: [1, 1.12, 1.26],
              }
            : {
                opacity: [0.06, 0.14, 0.06],
                x: ["-8%", "7%", "-8%"],
                scale: [1, 1.06, 1],
              }
        }
        transition={
          isOpening
            ? {
                duration: 2.2,
                ease: "easeInOut",
              }
            : {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="absolute left-1/2 top-[67%] h-[25%] w-[145%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,250,240,0.4),transparent_68%)] blur-3xl"
      />

      {/* Light olive edge depth, not black */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(77,81,61,0.2)_100%)]"
      />

      {/* Gentle depth from top to bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-primary/20"
      />

      {/* Luxury inner frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-primary/25 sm:inset-5 sm:rounded-[2rem]"
      />

      {/* Minimal corner ornaments */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-7 top-7 h-10 w-10 border-l border-t border-primary/40 sm:left-10 sm:top-10 sm:h-14 sm:w-14"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-7 top-7 h-10 w-10 border-r border-t border-primary/40 sm:right-10 sm:top-10 sm:h-14 sm:w-14"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 left-7 h-10 w-10 border-b border-l border-primary/40 sm:bottom-10 sm:left-10 sm:h-14 sm:w-14"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 right-7 h-10 w-10 border-b border-r border-primary/40 sm:bottom-10 sm:right-10 sm:h-14 sm:w-14"
      />
    </>
  );
}

export default Background;