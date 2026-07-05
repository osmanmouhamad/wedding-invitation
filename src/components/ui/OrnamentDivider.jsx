const sizes = {
  small: "w-12 sm:w-20",
  medium: "w-14 sm:w-24",
};

const tones = {
  olive: {
    line: "bg-primary/45",
    diamond: "border-primary/70",
  },
  ivory: {
    line: "bg-surface/35",
    diamond: "border-surface/70",
  },
};

function OrnamentDivider({
  size = "medium",
  tone = "olive",
  className = "",
}) {
  const selectedSize = sizes[size] ?? sizes.medium;
  const selectedTone = tones[tone] ?? tones.olive;

  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <span className={`h-px ${selectedSize} ${selectedTone.line}`} />
      <span
        className={`size-2 rotate-45 border ${selectedTone.diamond}`}
      />
      <span className={`h-px ${selectedSize} ${selectedTone.line}`} />
    </div>
  );
}

export default OrnamentDivider;