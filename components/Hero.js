export default function Hero() {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-14 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-medium text-emerald-400 mb-2">
            Built for busy small businesses
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Stop copy-pasting replies on WhatsApp.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
            AutoBotWa sends follow-ups, reminders and FAQ replies for you,
            so you can spend more time actually running your business.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-2.5 rounded-full bg-emerald-500 text-slate-950 text-sm font-medium hover:bg-emerald-400">
              Try it free for 7 days
            </button>
            <button className="px-5 py-2.5 rounded-full border border-slate-700 text-sm hover:border-slate-500">
              Watch 2-min demo
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            No credit card required · Works with your existing WhatsApp number
          </p>
        </div>

        {/* quick mock UI on the right */}
        <div className="lg:justify-self-end w-full max-w-md mx-auto">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-[0_0_80px_rgba(16,185,129,0.18)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400">Today · Auto replies</span>
              <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300">
                12 chats active
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="rounded-2xl bg-slate-800/80 px-3 py-2 w-fit max-w-[80%]">
                <p className="text-slate-100">
                  Hi! Can you share today&apos;s menu?
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-500 text-slate-950 px-3 py-2 w-fit max-w-[80%] ml-auto">
                <p>
                  Sure! Here&apos;s today&apos;s menu 👇
                  <span className="block text-[10px] opacity-80">
                    (Sent by AutoBotWa)
                  </span>
                </p>
              </div>
              <div className="rounded-2xl bg-slate-800/80 px-3 py-2 w-fit max-w-[80%]">
                <p className="text-slate-100">
                  Can I reschedule my appointment to tomorrow?
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-500 text-slate-950 px-3 py-2 w-fit max-w-[80%] ml-auto">
                <p>
                  No problem, pick a time here:
                  <span className="block underline text-[11px] mt-1">
                    tap to choose available slots
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-slate-500 text-center">
            Just a UI mock — not connected to real chats (yet).
          </p>
        </div>
      </div>
    </section>
  );
}
