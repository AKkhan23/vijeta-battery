type Props = {
  index?: string;
  text: string;
  light?: boolean;
  className?: string;
};

export function SectionLabel({ text, light = false, className = "" }: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`eyebrow ${light ? "text-white/70" : "text-ink/55"}`}>
        {text}
      </span>
    </div>
  );
}
