export type Contact = {
  label: string;
  handle: string;
  href: string;
  note?: string;
};

export const contacts: Contact[] = [
  {
    label: "Email",
    handle: "Best way to reach me",
    href: "mailto:shishkinivan2006@gmail.com",
    note: "I read it daily",
  },
  {
    label: "Schedule a meet",
    handle: "cal.com/ivanshishkin",
    href: "https://cal.com/ivanshishkin/quick-chat",
    note: "For optics — or if needed",
  },
  {
    label: "GitHub",
    handle: "Ivan-Shishkin-Dev",
    href: "https://github.com/Ivan-Shishkin-Dev",
    note: "Code, public",
  },
  {
    label: "LinkedIn",
    handle: "/in/ivan-shishkin-dev",
    href: "https://www.linkedin.com/in/ivan-shishkin-dev/",
    note: "Work history",
  },
];
