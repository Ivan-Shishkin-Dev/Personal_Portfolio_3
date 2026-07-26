const ICONS: Record<string, React.ReactNode> = {
  Videos: (
    <>
      <rect x="1.25" y="3.25" width="13.5" height="9.5" rx="2" />
      <path d="M6.6 5.9 10.4 8 6.6 10.1Z" />
    </>
  ),
  Podcasts: (
    <>
      <rect x="6" y="1.4" width="4" height="7.2" rx="2" />
      <path d="M3.9 7.1v.7a4.1 4.1 0 0 0 8.2 0v-.7" />
      <path d="M8 11.9v2.7" />
    </>
  ),
  Papers: (
    <>
      <path d="M9.4 1.4H4.3A1.3 1.3 0 0 0 3 2.7v10.6a1.3 1.3 0 0 0 1.3 1.3h7.4a1.3 1.3 0 0 0 1.3-1.3V5Z" />
      <path d="M9.4 1.4V5H13" />
      <path d="M5.6 8.9h4.8" />
      <path d="M5.6 11.3h3.2" />
    </>
  ),
  Essays: (
    <>
      <path d="M11.3 2.4a1.2 1.2 0 0 1 1.7 0l.6.6a1.2 1.2 0 0 1 0 1.7L5.4 12.9l-3 .7.7-3Z" />
      <path d="M10.6 3.1 12.9 5.4" />
    </>
  ),
  Books: (
    <>
      <path d="M8 4.5C6.6 3.2 4.6 2.8 2.4 2.9v8.8c2.2-.1 4.2.3 5.6 1.6c1.4-1.3 3.4-1.7 5.6-1.6V2.9c-2.2-.1-4.2.3-5.6 1.6Z" />
      <path d="M8 4.5v8.8" />
    </>
  ),
  Other: <path d="M4.2 2.2h7.6v11.6L8 10.9l-3.8 2.9Z" />,
};

export default function CategoryIcon({ category }: { category: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[category] ?? ICONS.Other}
    </svg>
  );
}
