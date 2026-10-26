"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Phone, Mail, Send } from "lucide-react";
import { PHONE, EMAIL } from "@/lib/contact-info";

export default function Contact() {
  const [state, handleSubmit] = useForm("mbgdnqpy");

  const field =
    "w-full rounded-xl border border-sky-soft bg-white px-4 py-3 focus:border-sky";

  return (
    <section id="contact" className="bg-sky-soft py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">Let&apos;s work together</h2>
  <p className="mt-4 max-w-md text-lg text-ink-soft">
  Need a <span className="hl">UGC-style video</span>, a{" "}
  <span className="hl">reel</span> edited,{" "}
  <span className="hl">AI clips</span> generated, or a{" "}
  <span className="hl">website</span> or{" "}
  <span className="hl">MVP-Tools</span> built for your brand or
  business? Get in touch for a{" "}
  <span className="hl">free consultation</span>. Share your idea,
  and I will recommend the best approach for your project.
</p>
          <ul className="mt-8 space-y-4 font-semibold">
            <li className="flex items-center gap-3">
              <span className="rounded-xl bg-sun p-3"><Phone size={20} /></span>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="min-w-0 break-words">{PHONE}</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-xl bg-sun p-3"><Mail size={20} /></span>
              <a href={`mailto:${EMAIL}`} className="min-w-0 break-all">{EMAIL}</a>
            </li>
          </ul>
        </div>

        {state.succeeded ? (
          <div className="card-white flex flex-col justify-center p-6" role="status">
            <h3 className="text-2xl font-bold">Thank you, your message is sent!</h3>
            <p className="mt-2 text-lg text-ink-soft">
              I will reply within 24 hours. Please check your email, and your spam folder too.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-white space-y-4 p-6">
            <label className="block">
              <span className="mb-1 block font-semibold">Name</span>
              <input name="name" type="text" required className={field} autoComplete="name" />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold">Email</span>
              <input id="email" name="email" type="email" required className={field} autoComplete="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-1 block font-semibold text-red-700"
              />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold">Message</span>
              <textarea id="message" name="message" rows={5} required className={field} />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-1 block font-semibold text-red-700"
              />
            </label>
            <button
              type="submit"
              disabled={state.submitting}
              className="btn-primary"
            >
              <Send size={18} /> {state.submitting ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
