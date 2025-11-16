import { Suspense } from "react";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoSection from "@/components/contact/ContactInfoSection";

export const metadata = {
  title: "Contact Us - ThematicQ",
  description:
    "Get in touch with ThematicQ - Let's create unforgettable events together",
};

export default async function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={<HeaderSkeleton />}>
        <ContactHeader />
      </Suspense>
      <ContactForm />
      <ContactInfoSection />
    </main>
  );
}

function HeaderSkeleton() {
  return <div className="w-full h-[40vh] bg-gray-900 animate-pulse"></div>;
}
