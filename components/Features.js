const FEATURES = [
  {
    title: "Auto follow-ups",
    description: "Send payment reminders or missed-call follow-ups automatically instead of chasing everyone manually.",
    icon: "⏰",
  },
  {
    title: "Smart FAQ replies",
    description: "Store your common answers once and let AutoBotWa reply instantly to repeated questions.",
    icon: "💬",
  },
  {
    title: "Simple setup",
    description: "No coding, no dashboards full of graphs you never open. Plug it in and go.",
    icon: "⚙️",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-b border-slate-800 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          A tiny tool that quietly does the boring work.
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-xl">
          AutoBotWa isn&apos;t trying to be an &quot;all-in-one platform&quot;. 
          It just handles the repetitive WhatsApp stuff you don&apos;t have time for.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col gap-2"
            >
              <span className="h-10 w-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-xl">
                {item.icon}
              </span>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}