import { contacts } from "@/content/contacts";
import EmailCard from "./EmailCard";

function renderHandle(handle: string) {
  const at = handle.indexOf("@");
  if (at <= 0) return handle;
  return (
    <>
      {handle.slice(0, at)}
      <wbr />
      {handle.slice(at)}
    </>
  );
}

export default function Contacts() {
  return (
    <section className="contact-block" aria-label="Contact">
      <h2 className="block-heading">Contact</h2>
      <div className="contact-strip">
        {contacts.map((c) => {
          if (c.label === "Email") {
            return <EmailCard key={c.label} contact={c} />;
          }
          const external = c.href.startsWith("http");
          return (
            <a
              key={c.label}
              className="contact-card"
              href={c.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <div className="label">
                <span>{c.label}</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </div>
              <div className="handle">{renderHandle(c.handle)}</div>
              <div className="note">{c.note}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
