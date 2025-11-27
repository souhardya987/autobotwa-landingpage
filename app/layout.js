import "./globals.css";

export const metadata = {
  title: "AutoBotWa – WhatsApp Automation for Small Businesses",
  description: "Simple WhatsApp automation for reminders, leads, and support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
