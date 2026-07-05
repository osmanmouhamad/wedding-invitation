import { motion, useReducedMotion } from "framer-motion";

function AnimatedBird({ side = "left", isOpening }) {
  const reduceMotion = useReducedMotion();
  const isLeft = side === "left";

  const restLeft = isLeft ? "18%" : "70%";
  const meetingLeft = "calc(50% - 3rem)";

  const idleAnimation = {
    left: restLeft,
    top: "20%",
    y: reduceMotion ? 0 : [0, -7, 0],
    rotate: reduceMotion ? 0 : isLeft ? [-3, 2, -3] : [3, -2, 3],
    opacity: 1,
    scale: 1,
  };

  const openingAnimation = {
    left: [
      restLeft,
      isLeft ? "34%" : "62%",
      meetingLeft,
      meetingLeft,
    ],
    top: ["20%", "16%", "34%", "34%"],
    y: 0,
    opacity: [1, 1, 1, 0],
    scale: [1, 1.06, 1, 0.9],
    rotate: isLeft ? [-3, 5, 0, 0] : [3, -5, 0, 0],
  };

  const idleTransition = {
    left: { duration: 1.4, ease: "easeOut" },
    top: { duration: 1.4, ease: "easeOut" },
    opacity: { duration: 0.4 },
    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  const openingTransition = {
    duration: 1.8,
    times: [0, 0.5, 0.82, 1],
    ease: "easeInOut",
  };

  const wingDuration = isOpening ? 0.22 : 1.15;

  return (
    <motion.div
      initial={{
        left: isLeft ? "-12%" : "112%",
        top: "-18%",
        opacity: 0,
      }}
      animate={isOpening ? openingAnimation : idleAnimation}
      transition={isOpening ? openingTransition : idleTransition}
      className="pointer-events-none absolute z-20 w-24 sm:w-28"
    >
      <svg
        viewBox="0 0 160 100"
        aria-hidden="true"
        className={`w-full drop-shadow-[0_8px_18px_rgba(0,0,0,0.3)] ${
          isLeft ? "" : "-scale-x-100"
        }`}
      >
        {/* Back wing */}
        <motion.g
          style={{ transformOrigin: "76px 58px" }}
          animate={
            reduceMotion
              ? {}
              : { rotate: isOpening ? [-12, 22, -12] : [-5, 9, -5] }
          }
          transition={{
            duration: wingDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            fill="#f1eee6"
            d="M72 58C55 41 53 17 64 4c1 18 9 31 27 42-6 5-12 9-19 12Z"
          />
        </motion.g>

        {/* Front wing */}
        <motion.g
          style={{ transformOrigin: "86px 60px" }}
          animate={
            reduceMotion
              ? {}
              : { rotate: isOpening ? [10, -18, 10] : [4, -7, 4] }
          }
          transition={{
            duration: wingDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            fill="#fffdf7"
            d="M84 60c10-20 28-30 48-29-11 11-17 23-18 36-15 0-25-2-30-7Z"
          />
        </motion.g>

        {/* Tail */}
        <path
          fill="#f7f3ea"
          d="M61 64C44 73 28 74 15 68c12-6 20-14 26-24 6 10 12 16 20 20Z"
        />

        {/* Body */}
        <path
          fill="#fffdf7"
          d="M60 61c17-11 31-16 47-13 12 2 21-5 28-16 1 12-4 23-15 30 8 4 15 9 21 16-15 0-28-5-39-13-16 5-31 4-42-4Z"
        />

        {/* Beak + eye */}
        <path fill="#d8b66f" d="M135 42l12 3-11 4Z" />
        <circle cx="130" cy="40" r="2.3" fill="#2d372d" />
      </svg>
    </motion.div>
  );
}

export default AnimatedBird;