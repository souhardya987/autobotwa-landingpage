# AutoBotWa – WhatsApp Automation Landing Page

This is a simple, responsive landing page for **AutoBotWa**, a fictional WhatsApp automation tool for small businesses.  
The goal of the project is to showcase clean frontend architecture, reusable components, and a practical, no-nonsense UI rather than a flashy marketing page.

---

## 🔧 Tech Stack

- **Next.js (App Router, JavaScript)**
- **Tailwind CSS** for styling
- **Vercel v0** for initial UI section generation
- Deployed on **Vercel**

---

## 🧩 Features

The landing page includes:

- **Hero section** with main value proposition and CTAs  
- **Features section** (3 core features)  
- **Product highlights / light testimonials**  
- **Pricing section** with 3 plans  
- **Footer** with quick links and basic info  
- Fully **responsive** layout (mobile → desktop)

---

## 📁 Project Structure

```txt
app/
  globals.css        # Global styles (Tailwind)
  layout.js          # Root layout
  page.js            # Main landing page – stitches all sections

components/
  Navbar.js          # Top navigation bar
  Hero.js            # Hero section (heading, subtext, CTA + mock chat UI)
  Features.js        # Features grid
  Highlights.js      # Product highlights / short testimonials
  Pricing.js         # Pricing cards
  Footer.js          # Footer with links
