import { motion } from "framer-motion";

function SealAura({ isOpening }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={
          isOpening
            ? {
                opacity: [0.18, 0.55, 0],
                scale: [1, 1.45, 1.8],
              }
            : {
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.06, 1],
              }
        }
        transition={
          isOpening
            ? {
                delay: 1.5,
                duration: 1.1,
                ease: "easeOut",
              }
            : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="size-72 rounded-full bg-primary/20 blur-3xl sm:size-80 md:size-96"
      />
    </div>
  );
}

export default SealAura;