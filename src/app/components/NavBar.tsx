import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/menu", label: "MENU" },
  { to: "/contact", label: "CONTACT" },
];

const ctaLinks = [
  { to: "/order", label: "ORDER" },
  { to: "/reservations", label: "TABLE RESERVE" },
];

export function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("root")?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px]"
        style={{ background: "rgba(19,19,19,0.9)", borderBottom: "1px solid #5c403d" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-[100px]">
          <div className="h-[80px] flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="shrink-0 font-['Bebas_Neue',sans-serif] text-[#e5e2e1] text-[28px] sm:text-[32px] tracking-[-1.6px] leading-none hover:text-[#ffb4ac] transition-colors"
            >
              L'Aura Fine Dining
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map(({ to, label }) => {
                const active = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`font-['Barlow_Condensed',sans-serif] font-medium text-[18px] tracking-[2px] uppercase transition-colors pb-1 ${
                      active
                        ? "text-[#ffb4ac] border-b-2 border-[#ffb4ac]"
                        : "text-[#e5bdb9] hover:text-[#ffb4ac]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {ctaLinks.map(({ to, label }) => {
                const active = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`luxury-cta-primary flex items-center justify-center font-['Barlow_Condensed',sans-serif] font-medium text-[17px] tracking-[1px] uppercase px-4 py-2 rounded-md transition-colors ${
                      active ? "ring-1 ring-[#f1dfbd]" : ""
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden text-[#e5e2e1] hover:text-[#ffb4ac] transition-colors p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div
            className="lg:hidden"
            style={{ background: "rgba(19,19,19,0.97)", borderTop: "1px solid #353534" }}
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map(({ to, label }) => {
                const active = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={`font-['Barlow_Condensed',sans-serif] font-medium text-[20px] tracking-[2px] uppercase py-2 transition-colors ${
                      active ? "text-[#ffb4ac]" : "text-[#e5bdb9] hover:text-[#ffb4ac]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <nav className="mobile-cta-bar" aria-label="Quick actions">
        <div className="mobile-cta-panel">
          {ctaLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`mobile-cta-link${active ? " is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
