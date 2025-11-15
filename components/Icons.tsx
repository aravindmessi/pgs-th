import React from "react";

interface IconProps {
  className?: string;
}

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#logo-gradient)" />
    <path d="M50 10L86.6 30V70L50 90L13.4 70V30L50 10Z" fill="#0A0A10" />
    <text x="50" y="56" dominantBaseline="central" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="30" fontWeight="700" fill="#E0E0E0">
      PGS
    </text>
    <defs>
      <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100">
        <stop stopColor="#8E2DE2" />
        <stop offset="1" stopColor="#4A00E0" />
      </linearGradient>
    </defs>
  </svg>
);

export const WebDevIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
  </svg>
);

export const AppDevIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
  </svg>
);

export const VideoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
  </svg>
);

export const ERPIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7l8 5 8-5m-8 5v10" />
  </svg>
);

export const CRMIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const AIIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

/* --- NAVIGATION ICONS --- */
export const ChevronLeftIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

export const ChevronRightIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/* --- ✔️ UPDATED OFFICIAL X ICON (based on your screenshot) --- */
export const XIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M714.163 536.244L1160 0H1057.98L669.482 450.043L372.947 0H0L463.243 681.159L0 1200H102.02L516.332 727.365L843.053 1200H1200L714.137 536.244H714.163ZM566.93 661.371L522.34 596.105L139.424 78.029H322.836L611.778 498.432L656.367 565.157L1065.01 1121.97H881.597L566.93 661.397V661.371Z"/>
  </svg>
);

/* --- SOCIAL ICONS --- */
export const InstagramIcon = ({ className }: IconProps) => (
  <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1.5" />
  </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5a2.25 2.25 0 11-.02 4.5 2.25 2.25 0 01.02-4.5zM3 8.75h4v12.5H3V8.75zm7 0h3.8v1.7h.05c.53-1 1.8-2 3.7-2 4 0 4.75 2.5 4.75 5.75v7.75h-4V15c0-1.7-.03-4-2.5-4-2.5 0-2.9 1.8-2.9 3.9v6.3H10V8.75z"/>
  </svg>
);

export const DribbbleIcon = ({ className }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path fill="none" stroke="#000" strokeWidth="2" d="M12 2c4.2 4.5 6.2 9.8 6 14.7M2 12c5 0 10 0 14.7-3M4.5 19c2.5-4 5.5-6.2 12-5" />
  </svg>
);

/* --- CONTACT ICONS --- */
export const MailIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.1a1 1 0 01.95.68l1.5 4.48a1 1 0 01-.5 1.2l-2.3 1.1a11 11 0 005.5 5.5l1.1-2.3a1 1 0 011.2-.5l4.48 1.5a1 1 0 01.7.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z"/>
  </svg>
);

export const LocationIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-4.5-6-10a6 6 0 1112 0c0 5.5-6 10-6 10z"/>
    <circle cx="12" cy="11" r="3" />
  </svg>
);

export const FastDeliveryIcon = ({ className }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

export const FlexiblePricingIcon = ({ className }: IconProps) => (
  <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-4-3a4 4 0 118 0 4 4 0 01-8 0z" />
  </svg>
);

export const StrongCommunicationIcon = ({ className }: IconProps) => (
  <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8-1.6 0-3.1-.3-4.5-.9L3 20l1.4-3.7C3.5 15 3 13.6 3 12c0-4.4 4-8 9-8s9 3.6 9 8z"/>
  </svg>
);

export const ScalableSolutionsIcon = ({ className }: IconProps) => (
  <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 6h12l3-6H3zm0 6v6h18v-6H3zm4 6l4-6m6 6l-4-6"/>
  </svg>
);

export const SupportIcon = ({ className }: IconProps) => (
  <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const VideoEditingIcon = ({ className }: IconProps) => (
  <svg className={className} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 3v18M19 3v18M12 7l4 5-4 5" />
  </svg>
);
