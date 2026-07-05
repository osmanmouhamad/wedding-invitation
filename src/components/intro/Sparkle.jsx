import { AnimatePresence, motion } from "framer-motion";

function Sparkle({ isOpening }) {
  const sparks = [
    { x: 0, y: -42, delay: 0 },
    { x: 34, y: -20, delay: 0.04 },
    { x: 38, y: 18, delay: 0.08 },
    { x: 0, y: 42, delay: 0.12 },
    { x: -38, y: 18, delay: 0.16 },
    { x: -34, y: -20, delay: 0.2 },
  ];

  return (
    <AnimatePresence>
      {isOpening && (
        <div className="pointer-events-none absolute left-1/2 top-[34%] z-30 -translate-x-1/2 -translate-y-1/2">
          {/* Soft glow behind the birds */}
          <motion.span
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.2, 1.6, 2.4] }}
            transition={{ delay: 1.4, duration: 0.65, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-2xl"
          />

          {/* Center sparkle */}
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.35, 0.7],
              rotate: [-30, 0, 25],
            }}
            transition={{ delay: 1.44, duration: 0.55, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-english text-5xl text-primary drop-shadow-[0_0_18px_rgba(216,207,182,0.95)]"
          >
            ✦
          </motion.span>

          {/* Small particles */}
          {sparks.map((spark, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: spark.x,
                y: spark.y,
                scale: [0, 1, 0.3],
              }}
              transition={{
                delay:  1.48 + spark.delay,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-1/2 size-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(216,207,182,0.9)]"
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

export default Sparkle;