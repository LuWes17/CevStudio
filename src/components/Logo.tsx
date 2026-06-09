type LogoProps = {
  className?: string;
};

/**
 * Typographic wordmark for cev.studio.
 *
 * "cev" set tight in the display grotesque; the period replaced by a small
 * solid accent square — the single spot of colour in the mark. "studio"
 * trails in a lighter weight so the eye lands on "cev" first.
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`font-display inline-flex items-baseline leading-none tracking-tight select-none ${className}`}
      aria-label="cev.studio"
    >
      <span className="font-extrabold">cev</span>
      <span
        aria-hidden
        className="mx-[0.12em] inline-block h-[0.2em] w-[0.2em] translate-y-[-0.04em] bg-accent"
      />
      <span className="font-medium text-ink-soft">studio</span>
    </span>
  );
}
