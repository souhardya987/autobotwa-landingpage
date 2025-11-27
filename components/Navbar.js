export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 text-sm font-bold">
            W
          </div>
          <span className="font-semibold tracking-tight">
            AutoBotWa
          </span>
        </div>

        <nav className="hidden md:flex text-sm gap-6 text-slate-300">
          <a href="#features" className="hover:text-emerald-400">Features</a>
          <a href="#highlights" className="hover:text-emerald-400">Highlights</a>
          <a href="#pricing" className="hover:text-emerald-400">Pricing</a>
          <a href="#footer" className="hover:text-emerald-400">Contact</a>
        </nav>

        <button className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-slate-700 hover:border-slate-500">
          Log in
        </button>
      </div>
    </header>
  );
}
