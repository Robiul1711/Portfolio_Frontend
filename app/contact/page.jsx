import ContactAddress from "@/component/contact/ContactAddress";
import ContactForm from "@/component/contact/ContactForm";
import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white section-padding-x section-padding-y  md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <ContactAddress />

        <ContactForm />
      </div>
    </div>
  );
}
