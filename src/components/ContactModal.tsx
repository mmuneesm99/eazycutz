"use client";

import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";
import { useEffect, useRef, useState } from "react";
import { publicPath } from "@/lib/publicPath";

const DURATION_MS = 200;

/** Static-host friendly contact endpoint (no Next API on GitHub Pages export). */
const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/infoeazycutz@gmail.com";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      setHasEntered(false);
      setStatus("idle");
      setErrorMessage("");
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setHasEntered(true));
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => closeModal(), DURATION_MS);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `Contact form: ${name.trim()}`,
          _cc: "contact@tovance.com",
          _template: "table",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          typeof data.message === "string"
            ? data.message
            : "Something went wrong."
        );
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity duration-200 ease-out ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={dialogRef}
        className={`flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200 ease-out md:flex-row ${
          isClosing
            ? "scale-95 opacity-0"
            : hasEntered
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex w-full flex-shrink-0 flex-col bg-black md:w-[320px] lg:w-[380px]">
          <div className="relative hidden flex-1 px-4 pb-6 md:mt-4 md:block">
            <div className="relative aspect-[437/650] max-h-[calc(90vh-140px)] w-full">
              <Image
                src={publicPath("/contact_us.jpg")}
                alt=""
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </div>
          <div className="relative h-32 w-full md:hidden">
            <Image
              src={publicPath("/contact_us.jpg")}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto bg-white">
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-1 flex-col p-6 pt-10 sm:p-8">
            <h2 id="contact-modal-title" className="text-2xl font-bold text-gray-800">
              Contact Us
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Book a demo or ask us anything — we usually reply within one business day.
            </p>

            <form className="mt-6 flex flex-1 flex-col gap-4" onSubmit={handleSubmit}>
              {status === "success" && (
                <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800">
                  Message sent. We&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && errorMessage && (
                <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
                  {errorMessage}
                </div>
              )}
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="David"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={status === "sending"}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-brand-violet focus:outline-none focus:ring-1 focus:ring-brand-violet disabled:opacity-70"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "sending"}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-brand-violet focus:outline-none focus:ring-1 focus:ring-brand-violet disabled:opacity-70"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={status === "sending"}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-brand-violet focus:outline-none focus:ring-1 focus:ring-brand-violet disabled:opacity-70"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 w-full rounded-lg bg-gradient-to-r from-brand-violet to-[#001CD5] px-4 py-3 text-base font-medium text-white shadow-md transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
