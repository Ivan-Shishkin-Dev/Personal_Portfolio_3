import type { Metadata } from "next";
import SectionLayout from "@/components/SectionLayout";
import Contacts from "@/components/Contacts";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ways to reach me.",
};

export default function ContactPage() {
  return (
    <SectionLayout slug="contact">
      <Contacts />
    </SectionLayout>
  );
}
