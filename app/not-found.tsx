import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-heading mt-4 text-paper">
        Page{" "}
        <span className="bg-gold-gradient bg-clip-text text-transparent">Not Found</span>
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Head back
        to the {SITE.name} homepage to keep exploring.
      </p>
      <Link href="/" className="btn-gold mt-8">
        Back to Home
      </Link>
    </section>
  );
}
