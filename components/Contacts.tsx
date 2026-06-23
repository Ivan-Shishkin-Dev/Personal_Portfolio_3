import { contacts } from "@/content/contacts";
import CopyContactRow from "./CopyContactRow";

export default function Contacts() {
  return (
    <nav className="contact-directory" aria-label="Ways to reach me">
      {contacts.map((c) =>
        c.copy ? (
          <CopyContactRow key={c.intent} contact={c} />
        ) : (
          <a
            key={c.intent}
            className={`contact-row${c.primary ? " primary" : ""}`}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-intent">{c.intent}</span>
            <span className="contact-channel">
              {c.label && <span className="contact-name">{c.label}</span>}
              <span className="contact-handle">
                {c.handle}
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </span>
            </span>
          </a>
        ),
      )}
    </nav>
  );
}
