"use client";

export function ContactForm() {
  return (
    <form className="grid gap-5 rounded-3xl border border-white/10 bg-zinc-900/70 p-6 sm:grid-cols-2 sm:p-8">
      <div className="space-y-2">
        <label htmlFor="firstName" className="text-sm text-zinc-300">
          First name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className="w-full rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="lastName" className="text-sm text-zinc-300">
          Last name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className="w-full rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
        />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="email" className="text-sm text-zinc-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
        />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <label htmlFor="message" className="text-sm text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-accent-soft"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
