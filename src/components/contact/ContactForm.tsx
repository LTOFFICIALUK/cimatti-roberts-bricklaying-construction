"use client";

import { useState, FormEvent } from "react";
import { serviceOptions } from "@/lib/services";
import { siteConfig } from "@/lib/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

export const ContactForm = ({ compact = false }: { compact?: boolean }) => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: "New Enquiry — Cimatti & Roberts Website",
          from_name: "Cimatti & Roberts Website",
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
      setErrorMessage(result.message || "Something went wrong. Please call us directly.");
    } catch {
      setStatus("error");
      setErrorMessage(
        `Unable to send your message. Please call ${siteConfig.founders[0].name.split(" ")[0]} on ${siteConfig.founders[0].phoneDisplay} or ${siteConfig.founders[1].name.split(" ")[0]} on ${siteConfig.founders[1].phoneDisplay}.`,
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center"
        role="status"
      >
        <h3 className="text-xl font-bold text-green-900">Message Sent!</h3>
        <p className="mt-2 text-green-800">
          Thank you for your enquiry. Jason or Sam will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-green-700 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 ${compact ? "" : ""}`}
      aria-label="Contact form"
    >
      <div className={`grid gap-5 ${compact ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        <FormField label="Full Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your full name"
          />
        </FormField>

        <FormField label="Phone Number" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="Your phone number"
          />
        </FormField>

        {!compact && (
          <FormField label="Email" htmlFor="email" className="sm:col-span-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              placeholder="your@email.com (optional)"
            />
          </FormField>
        )}

        <FormField label="Service Required" htmlFor="service" className="sm:col-span-2">
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Project Details"
          htmlFor="message"
          required
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            required
            rows={compact ? 4 : 5}
            className={`${inputClass} resize-y`}
            placeholder="Tell us about your project..."
          />
        </FormField>
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] opacity-0"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-dark disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-charcoal placeholder:text-gray-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/20";

const FormField = ({
  label,
  htmlFor,
  required,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-charcoal">
      {label}
      {required && <span className="text-gold-dark"> *</span>}
    </label>
    {children}
  </div>
);
