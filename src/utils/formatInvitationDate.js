export function formatInvitationDate(dateValue, timeZone) {
  return new Intl.DateTimeFormat("ar-LB-u-nu-latn", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone,
  }).format(new Date(dateValue));
}

export function formatInvitationTime(dateValue, timeZone) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).formatToParts(new Date(dateValue));

  const hour24 = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = parts.find((part) => part.type === "minute")?.value ?? "00";

  const hour12 = hour24 % 12 || 12;
  const period = hour24 >= 12 ? "مساءً" : "صباحًا";

  return `${hour12}:${minute} ${period}`;
}

export function formatInvitationDateTime(dateValue, timeZone) {
  return `${formatInvitationDate(dateValue, timeZone)} — الساعة ${formatInvitationTime(dateValue, timeZone)}`;
}