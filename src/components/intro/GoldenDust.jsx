import { motion } from "framer-motion";

const particles = [
  { left: "12%", top: "18%", size: "size-1", delay: 0, duration: 6 },
  { left: "24%", top: "72%", size: "size-1.5", delay: 1.2, duration: 7 },
  { left: "38%", top: "14%", size: "size-1", delay: 0.7, duration: 6.5 },
  { left: "62%", top: "20%", size: "size-1.5", delay: 1.8, duration: 7.2 },
  { left: "83%", top: "31%", size: "size-1", delay: 0.4, duration: 6.8 },
  { left: "91%", top: "76%", size: "size-1.5", delay: 2, duration: 7.5 },
  { left: "10%", top: "52%", size: "size-1", delay: 1.5, duration: 6.4 },
  { left: "48%", top: "82%", size: "size-1", delay: 0.9, duration: 7 },
  { left: "73%", top: "64%", size: "size-1.5", delay: 2.2, duration: 6.7 },
];

function GoldenDust({ isOpening }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-5 overflow-hidden"
    >
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={
            isOpening
              ? {
                  opacity: 0,
                  scale: 0.4,
                  y: -18,
                }
              : {
                  opacity: [0.12, 0.65, 0.12],
                  y: [0, -18, -34],
                  x: [0, 5, -3],
                  scale: [0.7, 1, 0.75],
                }
          }
          transition={
            isOpening
              ? {
                  duration: 0.7,
                  ease: "easeOut",
                }
              : {
                  duration: particle.duration,
                  delay: 1.2 + particle.delay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
          }
          className={`absolute rounded-full bg-primary/70 blur-[1px] ${particle.size}`}
        />
      ))}
    </div>
  );
}

export default GoldenDust;