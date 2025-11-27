const PLANS = [
  {
    name: "Starter",
    price: "₹299",
    note: "For side projects and solo founders",
    features: [
      "Up to 300 automated messages / month",
      "1 WhatsApp number",
      "Basic FAQ replies",
    ],
    popular: false,
  },
  {
    name: "Small Team",
    price: "₹799",
    note: "Best for small shops and clinics",
    features: [
      "Up to 2,000 automated messages / month",
      "3 team members",
      "Follow-up & reminder flows",
      "Basic email support",
    ],
    popular: true,
  },
  {
    name: "Growing",
    price: "₹1,999",
    note: "For agencies and growing brands",
    features: [
      "Up to 10,000 automated messages / month",
      "Team inbox",
      "Priority support",
      "Custom onboarding call",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-slate-800 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Simple pricing. Pause anytime.
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-xl">
          Start small, upgrade only if it actually saves you time.
          There&apos;s a free 7-day trial on every plan.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={
                "flex flex-col rounded-2xl border bg-slate-900/70 p-5" +
                (plan.popular
                  ? " border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.25)]"
                  : " border-slate-800")
              }
            >
              {plan.popular && (
                <span className="self-start mb-3 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  Most picked
                </span>
              )}
              <h3 className="text-base font-semibold">{plan.name}</h3>
              <p className="mt-1 text-xs text-slate-400">{plan.note}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-semibold">{plan.price}</span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-slate-300 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex gap-2">
                    <span className="mt-0.5 text-emerald-400">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-5 w-full rounded-full border border-slate-700 py-2 text-sm hover:border-emerald-400">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[11px] text-slate-500">
          *Pricing is for demo purposes only. This project is a frontend assignment.
        </p>
      </div>
    </section>
  );
}