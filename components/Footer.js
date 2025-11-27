export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-800 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} AutoBotWa. Built as a frontend demo.</p>
        <div className="flex gap-4">
          <a href="#pricing" className="hover:text-emerald-400">
            Pricing
          </a>
          <a href="#" className="hover:text-emerald-400">
            Privacy
          </a>
          <a href="#" className="hover:text-emerald-400">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
