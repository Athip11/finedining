import { Link } from "react-router";

export function Footer() {
  return (
    <footer
      className="w-full shrink-0"
      style={{ background: "#0e0e0e", borderTop: "1px solid #5c403d" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-[100px] py-16 sm:py-24">
        <div className="max-w-[984px] grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] text-[56px] leading-[1] tracking-[-2px] uppercase">
              L'AURA
            </span>
            <p
              className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Copyright 2024 L'Aura Fine Dining. 99 Cloud Tower.
              <br />
              18:00 - 23:00, Closed Mondays.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/menu", label: "Menu" },
              { to: "/contact", label: "Contact" },
              { to: "/order", label: "Order" },
              { to: "/reservations", label: "Reservations" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px] hover:text-[#ffb4ac] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col sm:items-end gap-2">
            {[
              { label: "Instagram", href: "https://www.instagram.com/laurafinedining" },
              { label: "Facebook", href: "https://www.facebook.com/laurafinedining" },
              { label: "Newsletter", href: "mailto:concierge@lauradining.com?subject=L'Aura%20Newsletter" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px] hover:text-[#ffb4ac] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
