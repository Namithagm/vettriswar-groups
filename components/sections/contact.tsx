"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/constants";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import Reveal from "@/components/ui/reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok || !result.success) {
        setServerError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setServerError("Network error — please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="relative bg-ink py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-heading mt-4 text-paper">
            Let&apos;s Start a{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal direction="left" className="space-y-6">
            <div className="glass-card space-y-6 p-8">
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-paper-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.emails.general}`}
                    className="mt-1 block text-sm text-paper hover:text-gold"
                  >
                    {SITE.emails.general}
                  </a>
                  <a
                    href={`mailto:${SITE.emails.sales}`}
                    className="mt-1 block text-sm text-paper hover:text-gold"
                  >
                    {SITE.emails.sales}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-paper-muted">
                    Phone
                  </p>
                  {SITE.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-sm text-paper hover:text-gold"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-paper-muted">
                    Office
                  </p>
                  <p className="mt-1 text-sm text-paper">{SITE.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-paper-muted">
                    Working Hours
                  </p>
                  <p className="mt-1 text-sm text-paper">{SITE.hours.weekdays}</p>
                  <p className="text-sm text-paper">{SITE.hours.saturday}</p>
                  <p className="text-sm text-paper">{SITE.hours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="glass-card overflow-hidden">
              <iframe
                title={`${SITE.name} location`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  SITE.address.mapQuery
                )}&output=embed`}
                className="h-64 w-full grayscale invert-[0.92] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="glass-card p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-12 w-12 text-gold" />
                  <h3 className="mt-5 font-display text-xl text-paper">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-paper-muted">
                    Thanks for reaching out — we&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs uppercase tracking-widest text-paper-muted"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        {...register("name")}
                        className="w-full rounded-lg border border-paper/15 bg-paper/[0.03] px-4 py-3 text-sm text-paper placeholder:text-paper-muted/50 focus:border-gold/50 focus:outline-none"
                        placeholder="Jane Doe"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs uppercase tracking-widest text-paper-muted"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full rounded-lg border border-paper/15 bg-paper/[0.03] px-4 py-3 text-sm text-paper placeholder:text-paper-muted/50 focus:border-gold/50 focus:outline-none"
                        placeholder="jane@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-xs uppercase tracking-widest text-paper-muted"
                      >
                        Phone{" "}
                        <span className="normal-case text-paper-muted/50">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="phone"
                        {...register("phone")}
                        className="w-full rounded-lg border border-paper/15 bg-paper/[0.03] px-4 py-3 text-sm text-paper placeholder:text-paper-muted/50 focus:border-gold/50 focus:outline-none"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-1.5 block text-xs uppercase tracking-widest text-paper-muted"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        {...register("subject")}
                        className="w-full rounded-lg border border-paper/15 bg-paper/[0.03] px-4 py-3 text-sm text-paper placeholder:text-paper-muted/50 focus:border-gold/50 focus:outline-none"
                        placeholder="Project inquiry"
                      />
                      {errors.subject && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs uppercase tracking-widest text-paper-muted"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className="w-full resize-none rounded-lg border border-paper/15 bg-paper/[0.03] px-4 py-3 text-sm text-paper placeholder:text-paper-muted/50 focus:border-gold/50 focus:outline-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {serverError && (
                    <p role="alert" className="text-sm text-red-400">
                      {serverError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
