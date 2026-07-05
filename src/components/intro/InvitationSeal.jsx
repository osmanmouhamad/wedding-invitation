import { motion } from "framer-motion";
function InvitationSeal({ onOpen, isOpening }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      disabled={isOpening}
      aria-label="Open Wedding Invitation"
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
     animate={
  isOpening
    ? {
        opacity: [1, 1, 0],
        scale: [1, 1.08, 1.42],
        y: [0, -4, 0],
        filter: [
          "brightness(1)",
          "brightness(1.22)",
          "brightness(1.45)",
        ],
      }
    : {
        opacity: 1,
        y: [0, -6, 0],
        scale: [1, 1.015, 1],
      }
}
      transition={
        isOpening
          ? undefined
          : {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      whileHover={isOpening ? undefined : { scale: 1.05 }}
      whileTap={isOpening ? undefined : { scale: 0.97 }}
      className="relative flex size-68 flex-col items-center justify-center rounded-full border-2 border-primary bg-[radial-gradient(circle_at_top,#fffaf0,var(--color-surface)_65%)] shadow-[inset_0_0_35px_rgba(216,207,182,0.45),0_35px_90px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
    >
      <span className="absolute inset-3 rounded-full border border-primary/40" />

      <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_45%)]" />

      <span className="absolute top-10 size-1.5 rounded-full bg-primary" />

      <div className="relative z-10 flex items-end gap-3">
        <span className="font-english text-8xl font-semibold text-text-dark">
          S
        </span>

        <span className="mb-4 font-english text-4xl text-primary">&</span>

        <span className="font-english text-8xl font-semibold text-text-dark">
          B
        </span>
      </div>

      <p className="relative z-10 mt-4 font-arabic text-base text-text-dark">
        اضغط لبدء الدعوة
      </p>

      <span className="absolute bottom-10 size-1.5 rounded-full bg-primary" />
    </motion.button>
  );
}

export default InvitationSeal;