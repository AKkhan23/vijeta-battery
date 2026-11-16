type Props = {
  index: string;
  text: string;
  light?: boolean;
  className?: string;
};

export function SectionLabel({ index, text, light = false, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <span
        className={`font-mono text-[0.6875rem] font-medium tracking-[0.16em] ${
          light ? "text-white/60" : "text-royal"
        }`}
      >
        {index}
      </span>
      <span
        aria-hidden="true"
        className={`h-px w-7 ${light ? "bg-white/30" : "bg-royal/40"}`}
      />
      <span
        className={`eyebrow ${light ? "text-white/70" : "text-ink/55"}`}
      >
        {text}
      </span>
    </div>
  );
}
