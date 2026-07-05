import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import birdWhite from "../../assets/bird-white.webp";

function Birds({ isOpening }) {
  const [birdsReady, setBirdsReady] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = birdWhite;

    const preloadBird = async () => {
      try {
        await image.decode();
      } catch {
        // Some browsers may not support decode(), but the image can still load normally.
      } finally {
        setBirdsReady(true);
      }
    };

    preloadBird();
  }, []);

  const idleTransition = {
    left: { duration: 1.4, ease: "easeOut" },
    top: { duration: 1.4, ease: "easeOut" },
    opacity: { duration: 0.5 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
    rotate: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const openingTransition = {
    duration: 1.7,
    times: [0, 0.26, 0.68, 0.82, 1],
    ease: "easeInOut",
  };

  return (
    <>
      {/* Left dove */}
      <motion.div
        initial={{
          left: "6%",
          top: "-20%",
          x: "-50%",
          opacity: 0,
          rotate: -18,
        }}
        animate={
          !birdsReady
            ? {
                opacity: 0,
              }
            : isOpening
              ? {
                  left: ["14%", "25%", "43%", "50%", "50%"],
                  top: ["15%", "12%", "26%", "34%", "34%"],
                  x: "-50%",
                  y: 0,
                  opacity: [1, 1, 1, 1, 0],
                  scale: [1, 1.04, 1.08, 1, 0.88],
                  rotate: [-3, 4, -2, 0, 0],
                }
              : {
                  left: "14%",
                  top: "15%",
                  x: "-50%",
                  y: [0, -8, 0],
                  opacity: 1,
                  scale: 1,
                  rotate: [-3, 2, -3],
                }
        }
        transition={isOpening ? openingTransition : idleTransition}
        className="pointer-events-none absolute z-20 w-16 transform-gpu will-change-transform sm:w-20 md:w-24"
      >
        <img
          src={birdWhite}
          alt=""
          aria-hidden="true"
          draggable="false"
          decoding="async"
          fetchPriority="high"
          className="w-full drop-shadow-[0_8px_18px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

      {/* Right dove */}
      <motion.div
        initial={{
          left: "94%",
          top: "-20%",
          x: "-50%",
          opacity: 0,
          rotate: 18,
        }}
        animate={
          !birdsReady
            ? {
                opacity: 0,
              }
            : isOpening
              ? {
                  left: ["86%", "75%", "57%", "50%", "50%"],
                  top: ["15%", "12%", "26%", "34%", "34%"],
                  x: "-50%",
                  y: 0,
                  opacity: [1, 1, 1, 1, 0],
                  scale: [1, 1.04, 1.08, 1, 0.88],
                  rotate: [3, -4, 2, 0, 0],
                }
              : {
                  left: "86%",
                  top: "15%",
                  x: "-50%",
                  y: [0, -8, 0],
                  opacity: 1,
                  scale: 1,
                  rotate: [3, -2, 3],
                }
        }
        transition={isOpening ? openingTransition : idleTransition}
        className="pointer-events-none absolute z-20 w-16 transform-gpu will-change-transform sm:w-20 md:w-24"
      >
        <img
          src={birdWhite}
          alt=""
          aria-hidden="true"
          draggable="false"
          decoding="async"
          fetchPriority="high"
          className="w-full scale-x-[-1] drop-shadow-[0_8px_18px_rgba(0,0,0,0.3)]"
        />
      </motion.div>
    </>
  );
}

export default Birds;