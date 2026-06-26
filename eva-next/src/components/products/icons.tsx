type IconProps = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20l1.3-3.9A8 8 0 1112 20a7.9 7.9 0 01-4.2-1.2L4 20z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.5 0 1-.4 1-1l-.3-1.3-2-.5-.7.9c-1-.5-1.8-1.3-2.3-2.3l.9-.7-.5-2L9.5 8c-.6 0-1 .4-1 1z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 6.5l8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 4h3l1.2 4.4-2 1.6a12.5 12.5 0 005.3 5.3l1.6-2 4.4 1.2v3a2 2 0 01-2.1 2A16 16 0 013.5 6.1 2 2 0 015.5 4z" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5h16v10H10l-4 4v-4H4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M13.8 8.6h-1.3c-.7 0-1 .4-1 1v1.4H13.8l-.3 2.1h-1v5.4" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M11 4v10.3a2.7 2.7 0 11-2-2.6" />
      <path d="M11 4c.3 2 1.9 3.6 4 3.9" />
    </svg>
  );
}

export function CartIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="19.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="19.5" r="1" fill="currentColor" stroke="none" />
      <path d="M3.5 4h2l1.8 10.4a2 2 0 002 1.6h7.7a2 2 0 002-1.6L20.5 8H6" />
    </svg>
  );
}

export function ZapIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3l-7 11h6l-1 7 7-11h-6z" />
    </svg>
  );
}

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 10v4a1 1 0 001 1h2l9 4V5l-9 4H4a1 1 0 00-1 1z" />
      <path d="M18 9.5a3 3 0 010 5" />
      <path d="M8 15v3a2 2 0 002 2h.5" />
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ClockAlertIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CalendarCheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M8.5 14l2 2 4.5-4.5" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.2 12.3l2.6 2.6 5-5.2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5l7 2.6v5.4c0 4.6-3 7.8-7 9-4-1.2-7-4.4-7-9V6.1z" />
      <path d="M9 12l2.2 2.2L15.5 9.5" />
    </svg>
  );
}

export function UserShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="10.5" cy="8.5" r="3" />
      <path d="M5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M17.5 12.5l3 1v2.3c0 2-1.3 3.3-3 3.9-1.7-.6-3-1.9-3-3.9v-2.3z" />
    </svg>
  );
}

export function GlobeLockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="10.5" cy="11" r="7.5" />
      <path d="M3 11h15M10.5 3.5c2 2 3 4.7 3 7.5s-1 5.5-3 7.5c-2-2-3-4.7-3-7.5s1-5.5 3-7.5z" />
      <rect x="15.5" y="13.5" width="6" height="5" rx="1" />
      <path d="M16.7 13.5v-1a1.8 1.8 0 013.6 0v1" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.5-5.8-6.5-11A6.5 6.5 0 1118.5 10c0 5.2-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function MicWaveIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="9.5" y="3" width="5" height="9" rx="2.5" />
      <path d="M6 11a6 6 0 0012 0" />
      <path d="M12 17v3M9 20h6" />
    </svg>
  );
}
