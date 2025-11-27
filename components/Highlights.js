export default function Highlights() {
  return (
    <section
      id="highlights"
      className="border-b border-slate-800 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Built for how people actually use WhatsApp.
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl">
            Most tools assume you have a full-time marketing team.
            AutoBotWa is closer to a helpful intern that only lives inside WhatsApp.
          </p>
        </div>

        <div className="grid gap-4 text-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-slate-100">
              &quot;We use it just to send polite reminders for overdue payments.
              It already saved us a lot of awkward texts.&quot;
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              — Riya, freelance designer
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-slate-100">
              AutoBotWa replies first, then forwards only serious leads to us.
              So our phone isn&apos;t buzzing all day.
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              — Local gym owner in Pune
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}