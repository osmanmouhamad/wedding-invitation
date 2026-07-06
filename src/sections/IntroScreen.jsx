import { motion } from "framer-motion";
import Background from "../components/intro/Background";
import Birds from "../components/intro/Birds";
import InvitationSeal from "../components/intro/InvitationSeal";
import InvitationText from "../components/intro/InvitationText";
import InvitationTitle from "../components/intro/InvitationTitle";
import Sparkle from "../components/intro/Sparkle";
import SealAura from "../components/intro/SealAura";
//import GoldenDust from "../components/intro/GoldenDust";

function IntroScreen({ onOpen, isOpening }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
      transition={
        isOpening
          ? {
              delay: 2.05,
              duration: 0.65,
              ease: "easeInOut",
            }
          : { duration: 0 }
      }
      className="relative min-h-svh overflow-hidden px-4 sm:px-6"
    >
      <Background isOpening={isOpening} />
      {/* <GoldenDust isOpening={isOpening} /> */}
      <Birds isOpening={isOpening} />
      <Sparkle isOpening={isOpening} />
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
        >
          <InvitationTitle />
        </motion.div>
        <div className="relative flex items-center justify-center">
          <SealAura isOpening={isOpening} />
        </div>
        {/* Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.85, ease: "easeOut" }}
        >
          <InvitationSeal onOpen={onOpen} isOpening={isOpening} />
        </motion.div>

        {/* Arabic text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: "easeOut" }}
        >
          <InvitationText />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default IntroScreen;
