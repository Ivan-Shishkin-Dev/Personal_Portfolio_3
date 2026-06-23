export type Contact = {
  intent: string;
  handle: string;
  label?: string;
  href?: string;
  copy?: string;
  primary?: boolean;
};

export const contacts: Contact[] = [
  {
    intent: "Email",
    handle: "click to copy",
    copy: "shishkinivan2006@gmail.com",
  },
  {
    intent: "Meet With Me",
    label: "Calendar",
    handle: "cal.com/ivanshishkin",
    href: "https://cal.com/ivanshishkin/quick-chat",
  },
  {
    intent: "Public Code",
    label: "GitHub",
    handle: "Ivan-Shishkin-Dev",
    href: "https://github.com/Ivan-Shishkin-Dev",
  },
  {
    intent: "Work History",
    label: "LinkedIn",
    handle: "/in/ivan-shishkin-dev",
    href: "https://www.linkedin.com/in/ivan-shishkin-dev/",
  },
];
