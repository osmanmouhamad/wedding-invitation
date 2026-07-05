import { motion } from "framer-motion";
import { invitationData } from "../data/invitationData";

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="size-8"
    >
      <path d="M12 21s6.5-5.5 6.5-11A6.5 6.5 0 1 0 5.5 10C5.5 15.5 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function LocationMap() {
  const { venue } = invitationData;

  return (
    <section
      id="location"
      dir="rtl"
      className="relative overflow-hidden bg-surface px-4 py-24 sm:px-6 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-36 w-[120%] -translate-x-1/2 rounded-b-[50%] bg-primary/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-english text-xs uppercase tracking-[0.35em] text-primary sm:text-sm"
        >
          Location
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.75, ease: "easeOut" }}
          className="mt-4 font-arabic text-4xl text-text-dark sm:text-5xl"
        >
          مكان الحفل
        </motion.h2>

        <motion.a
          href={venue.mapUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Open ${venue.name} in Google Maps`}
          className="group mt-10 flex items-center gap-5 rounded-[2rem] border border-primary/25 bg-background/60 px-5 py-6 text-right shadow-[0_18px_45px_rgba(77,81,61,0.12)] transition sm:px-8"
        >
          <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-surface shadow-[0_10px_25px_rgba(77,81,61,0.2)]">
            <MapPinIcon />
          </span>

          <div className="flex-1">
            <p className="font-arabic text-lg text-text-dark/60">
              موقع الاحتفال
            </p>

            <p
              dir="ltr"
              className="mt-1 font-english text-2xl tracking-wide text-primary sm:text-3xl"
            >
              {venue.name}
            </p>

            <p className="mt-1 font-arabic text-lg text-text-dark/70">
              {venue.address}
            </p>
          </div>

          <span className="font-arabic text-primary transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-6 font-arabic text-base text-text-dark/60"
        >
          اضغط على البطاقة لفتح الموقع على الخريطة
        </motion.p>
      </div>
    </section>
  );
}

export default LocationMap;