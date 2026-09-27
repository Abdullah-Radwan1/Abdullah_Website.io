import React, { useState } from "react";
import { Check, Send, Loader2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        "EmailJS credentials are not configured yet in your .env file. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY, or reach out directly to " +
          PERSONAL_INFO.email,
      );
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          subject:
            formData.subject || `Portfolio message from ${formData.name}`,
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey,
      );

      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      console.error("EmailJS Error:", err);
      const text =
        err && typeof err === "object" && "text" in err
          ? String((err as { text: unknown }).text)
          : null;
      setErrorMessage(
        text ||
          `Failed to send message. Please try again or reach out directly at ${PERSONAL_INFO.email}`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary/5 relative">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mx-auto mb-14 max-w-[680px]">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/10 border border-accent/30 text-accent text-[0.8125rem] font-semibold rounded-full uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-primary mb-3 leading-tight tracking-tight">
            Let's build something meaningful.
          </h2>
          <p className="text-lg text-primary/65 leading-relaxed">
            Whether you have a software engineering opportunity, a contract
            project, or technical inquiries, feel free to reach out.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Direct Message Form Card */}
          <div className="bg-white border border-primary/10 rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-primary mb-2">
              Send Direct Message
            </h3>
            <p className="text-sm text-primary/65 mb-6">
              Fill out the details below to dispatch a message directly to
              Abdullah Radwan.
            </p>

            {submitted ? (
              <div className="p-8 bg-secondary/10 border border-secondary/30 rounded-xl text-center flex flex-col items-center gap-3 animate-in fade-in duration-300">
                <div className="w-11 h-11 rounded-full bg-white text-secondary flex items-center justify-center shadow-xs">
                  <Check size={24} />
                </div>
                <h4 className="text-lg font-bold text-primary">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-primary/80 max-w-sm">
                  Thank you for reaching out. Abdullah will review your message
                  and reply promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold bg-white border border-primary/10 text-primary hover:bg-primary/5 shadow-xs transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-[0.8125rem] font-semibold text-primary/80 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md border border-primary/10 bg-primary/5 font-sans text-[0.9375rem] text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[0.8125rem] font-semibold text-primary/80 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md border border-primary/10 bg-primary/5 font-sans text-[0.9375rem] text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[0.8125rem] font-semibold text-primary/80 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Engineering Role / Software Opportunity"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md border border-primary/10 bg-primary/5 font-sans text-[0.9375rem] text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[0.8125rem] font-semibold text-primary/80 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, role details, or inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md border border-primary/10 bg-primary/5 font-sans text-[0.9375rem] text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-y"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-start gap-2 p-3 bg-primary/5/10 border border-bg-primary/30 rounded-md text-primary text-sm leading-relaxed">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md bg-accent text-white shadow-sm hover:bg-highlight hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
