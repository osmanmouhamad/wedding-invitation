import { motion } from "framer-motion";
import ShareInvitationButton from "../components/ui/ShareInvitationButton";
import { invitationData } from "../data/invitationData";
import {
  formatInvitationDate,
  formatInvitationTime,
} from "../utils/formatInvitationDate";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-7"
    >
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
      <path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-7"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-7"
    >
      <path d="M12 21s6.5-5.5 6.5-11A6.5 6.5 0 1 0 5.5 10C5.5 15.5 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function DetailCard({ icon, label, children, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className="flex min-h-56 flex-col items-center justify-center px-5 py-9 text-center"
    >
      <span className="flex size-14 items-center justify-center rounded-full border border-primary/45 bg-background text-primary shadow-[0_12px_30px_rgba(38,48,31,0.12)]">
        {icon}
      </span>

      <p className="mt-5 font-arabic text-lg font-bold text-primary">
        {label}
      </p>

      <div className="mt-3 text-primary">{children}</div>
    </motion.article>
  );
}

function LocationCard({ venue, label, delay }) {
  return (
    <motion.a
      href={venue.mapUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`افتح موقع ${venue.name} على الخريطة`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group flex min-h-56 flex-col items-center justify-center px-5 py-9 text-center transition-colors hover:bg-background/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
    >
      <span className="flex size-14 items-center justify-center rounded-full border border-primary/45 bg-primary text-surface shadow-[0_12px_30px_rgba(38,48,31,0.18)]">
        <PinIcon />
      </span>

      <p className="mt-5 font-arabic text-lg font-bold text-primary">
        {label}
      </p>

      <p
        dir="ltr"
        className="mt-3 font-english text-2xl font-semibold tracking-wide text-primary"
      >
        {venue.name}
      </p>

      <p className="mt-2 font-arabic text-lg font-semibold text-primary">
        {venue.address}
      </p>

      <span className="mt-4 inline-flex items-center gap-2 font-arabic text-sm font-bold text-primary">
        افتح الموقع على الخريطة
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-x-1"
        >
          ←
        </span>
      </span>
    </motion.a>
  );
}

function WeddingDetails() {
  const { couple, event, venue, details, sharing } = invitationData;

  const eventDate = formatInvitationDate(
    event.startsAt,
    event.timeZone,
  );

  const eventTime = formatInvitationTime(
    event.startsAt,
    event.timeZone,
  );

  return (
    <section
      id="details"
      dir="rtl"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-48 w-[130%] -translate-x-1/2 rounded-b-[50%] bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-english text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            {details.eyebrow}
          </p>

          <h2 className="mt-4 font-arabic text-4xl font-bold text-primary sm:text-5xl">
            {details.title}
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-arabic text-lg leading-9 text-primary">
            {details.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-10 h-px w-32 origin-center bg-primary/60"
        />

        <div className="mt-12 grid overflow-hidden rounded-4xl border border-primary/40 bg-surface shadow-[0_22px_60px_rgba(38,48,31,0.14)] md:grid-cols-3">
          <DetailCard
            icon={<CalendarIcon />}
            label={details.dateLabel}
            delay={0.1}
          >
            <p className="font-arabic text-2xl font-bold text-primary">
              {eventDate}
            </p>
          </DetailCard>

          <div className="border-y border-primary/30 md:border-x md:border-y-0">
            <DetailCard
              icon={<ClockIcon />}
              label={details.timeLabel}
              delay={0.2}
            >
              <p className="font-arabic text-2xl font-bold text-primary">
                {eventTime}
              </p>
            </DetailCard>
          </div>

          <LocationCard
            venue={venue}
            label={details.venueLabel}
            delay={0.3}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="mt-12 text-center font-arabic text-xl font-semibold text-primary"
        >
          {details.closingText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.42, duration: 0.7, ease: "easeOut" }}
        >
          <ShareInvitationButton couple={couple} sharing={sharing} />
        </motion.div>
      </div>
    </section>
  );
}

export default WeddingDetails;