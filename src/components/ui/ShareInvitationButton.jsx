import { useState } from "react";

function ShareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="size-5"
    >
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.2 10.8 7.5-4.4M8.2 13.2l7.5 4.4" />
    </svg>
  );
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";

  document.body.appendChild(textArea);
  textArea.select();

  const copied = document.execCommand("copy");

  document.body.removeChild(textArea);

  if (!copied) {
    throw new Error("Copy failed");
  }
}

function ShareInvitationButton({ couple, sharing }) {
  const [status, setStatus] = useState("idle");

  async function handleShare() {
    const url = window.location.href;
    const title = `دعوة زفاف ${couple.groom} وبشرى ${couple.bride}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: sharing.shareText,
          url,
        });

        return;
      }

      await copyText(url);

      setStatus("copied");

      window.setTimeout(() => {
        setStatus("idle");
      }, 2500);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }

      setStatus("error");

      window.setTimeout(() => {
        setStatus("idle");
      }, 2500);
    }
  }

  const statusMessage =
    status === "copied"
      ? sharing.copiedLabel
      : status === "error"
        ? sharing.errorLabel
        : "";

  return (
    <div className="mt-10 flex flex-col items-center">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-primary/50 bg-primary px-7 py-3 font-arabic text-base text-surface shadow-[0_14px_30px_rgba(77,81,61,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2"
      >
        <ShareIcon />
        {sharing.label}
      </button>

      <p
        aria-live="polite"
        className="mt-3 min-h-6 font-arabic text-sm text-primary"
      >
        {statusMessage}
      </p>
    </div>
  );
}

export default ShareInvitationButton;