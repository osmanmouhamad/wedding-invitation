import { motion } from "framer-motion";
import OrnamentDivider from "../components/ui/OrnamentDivider";
import { invitationData } from "../data/invitationData";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="size-7"
    >
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.75 7.38L3.5 20l1.15-4.12A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M9.2 7.7c.2-.45.42-.46.62-.47h.32c.1 0 .26.04.4.34l.7 1.62c.08.2.1.34 0 .52l-.34.55c-.1.16-.2.3-.08.54.12.24.55.9 1.18 1.45.82.73 1.5.96 1.73 1.07.23.12.37.1.5-.07l.65-.76c.16-.2.33-.16.55-.08l1.74.82c.23.1.38.16.44.25.05.08.05.5-.12.96-.16.46-.95.88-1.32.94-.34.06-.78.09-1.26-.07-.3-.1-.68-.22-1.16-.43-.5-.22-2.08-.77-3.54-2.37-1.14-1.25-1.8-2.62-2-3.06-.2-.44-.02-.68.15-.9Z" />
    </svg>
  );
}

function ContactSection() {
  const { contacts } = invitationData;

  const whatsAppUrl = `https://wa.me/${contacts.whatsAppPhone}?text=${encodeURIComponent(
    contacts.whatsAppMessage,
  )}`;

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-[130%] -translate-x-1/2 rounded-b-[50%] bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-arabic text-lg font-semibold text-primary">
            {contacts.eyebrow}
          </p>

          <h2 className="mt-4 font-arabic text-4xl font-bold text-primary sm:text-5xl">
            {contacts.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-arabic text-lg leading-9 text-primary">
            {contacts.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.65 }}
          className="mt-8 origin-center"
        >
          <OrnamentDivider size="small" />
        </motion.div>

        <motion.a
          href={whatsAppUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.65, ease: "easeOut" }}
          className="mx-auto mt-12 flex max-w-sm flex-col items-center rounded-3xl border border-primary/30 bg-[#fffdf8] px-8 py-10 text-center shadow-[0_14px_35px_rgba(38,48,31,0.1)] transition-colors hover:bg-[#f4ecdc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="flex size-16 items-center justify-center rounded-full border border-primary/40 bg-primary text-surface shadow-[0_10px_25px_rgba(38,48,31,0.16)]">
            <WhatsAppIcon />
          </span>

          <p className="mt-5 font-arabic text-xl font-bold text-primary">
            للتواصل والاعتذار
          </p>

          <p
            dir="ltr"
            className="mt-5 font-english text-xl font-semibold tracking-wide text-primary"
          >
            +{contacts.whatsAppPhone}
          </p>

          <span className="mt-4 font-arabic text-sm font-bold text-primary">
            اضغط للتواصل عبر واتساب
          </span>
        </motion.a>
      </div>
    </section>
  );
}

export default ContactSection;