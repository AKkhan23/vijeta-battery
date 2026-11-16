type Props = {
  className?: string;
  strokeWidth?: number;
};

export function ArrowUpRight({ className = "h-4 w-4", strokeWidth = 1.8 }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Bolt({ className = "h-4 w-4" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M13.6 2 4.8 13.4h5.4L9 22l8.9-11.6h-5.4L13.6 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: Props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6.1 2.7 4.3 3.6c-.9.5-1.4 1.5-1.2 2.5.7 5.3 4.4 9 9.7 9.7 1 .1 2-.4 2.5-1.2l.9-1.8c.3-.6.1-1.4-.4-1.8l-2.3-1.6c-.5-.3-1.1-.3-1.6 0l-1 .7c-1.6-.8-2.9-2.1-3.7-3.7l.7-1c.3-.5.3-1.1 0-1.6L6.9 3c-.4-.5-1.2-.6-1.8-.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: Props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <rect x="2" y="4.5" width="16" height="11" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="m2.8 5.6 7.2 5.2 7.2-5.2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-4 w-4" }: Props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M10 18s6-5.3 6-9.6A6 6 0 0 0 4 8.4C4 12.7 10 18 10 18Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.3" r="2.1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12.04 2.5a9.4 9.4 0 0 0-8.1 14.14L2.5 21.5l4.98-1.4a9.4 9.4 0 1 0 4.56-17.6Zm0 17.05a7.6 7.6 0 0 1-3.88-1.06l-.28-.17-2.89.81.79-2.82-.18-.29a7.65 7.65 0 1 1 6.44 3.53Zm4.34-5.41c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.52 2 .78 2.41.62 2.85.58.44-.04 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        fill="currentColor"
      />
    </svg>
  );
}
