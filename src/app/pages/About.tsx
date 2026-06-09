import { Link } from "react-router";
import imgChef from "../../imports/AboutLAuraFineDining/2771a5d1b857fa8dbb85015380d00a070ec04481.png";
import imgFounderPortrait from "../../imports/AboutGenerated/founder-portrait-half-body.png";
import imgRestaurantEntrance from "../../imports/AboutGenerated/restaurant-entrance.png";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-[80px]" style={{ background: "#131313" }}>
      <main className="flex justify-center px-6 sm:px-12 lg:px-[100px] py-16 sm:py-24">
        <div className="w-full max-w-[984px] flex flex-col gap-20">

          {/* ── Hero: OUR STORY ── */}
          <section className="relative">
            {/* Chef image – desktop: right aligned */}
            <div
              className="hidden lg:block absolute right-0 top-0 w-[42%] h-[480px] opacity-80"
              style={{ background: "#2a2a2a", border: "1px solid #353534" }}
            >
              <img
                src={imgChef}
                alt="Chef preparing fine dining dish"
                className="w-full h-full object-cover"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>

            {/* Mobile chef image */}
            <div
              className="lg:hidden w-full h-[280px] mb-8 opacity-80 overflow-hidden"
              style={{ background: "#2a2a2a", border: "1px solid #353534" }}
            >
              <img
                src={imgChef}
                alt="Chef preparing fine dining dish"
                className="w-full h-full object-cover"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>

            {/* Heading */}
            <div className="relative z-10 lg:w-[48%]">
              <h1
                className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase tracking-[-6px] leading-none mb-8"
                style={{ fontSize: "clamp(72px, 10vw, 120px)", lineHeight: "1" }}
                aria-label="Our Story"
              >
                <span aria-hidden="true">OUR</span><br /><span aria-hidden="true">STORY</span>
              </h1>

              {/* Story text box */}
              <div
                className="relative p-10 sm:p-12"
                style={{
                  background: "#2a2a2a",
                  border: "1px solid #353534",
                  marginTop: "24px",
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute"
                  style={{
                    top: "-15px",
                    left: "-15px",
                    width: "32px",
                    height: "32px",
                    borderTop: "2px solid #d92b2b",
                    borderLeft: "2px solid #d92b2b",
                  }}
                />
                <p
                  className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[18px] leading-[29px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  L'Aura was born from a desire to push the boundaries of modern gastronomy. We reject the conventional,
                  favoring an approach that strips away pretense to reveal the raw, elemental power of flavor. In our kitchen,
                  intensity is measured, heat is controlled, and every component is engineered to provoke a reaction.
                </p>
              </div>
            </div>
          </section>

          {/* ── Philosophy Section ── */}
          <section className="flex flex-col gap-12">
            {/* Section heading */}
            <div style={{ borderBottom: "1px solid #353534", paddingBottom: "17px" }}>
              <h2
                className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase tracking-[-1.6px]"
                style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: "1" }}
              >
                PHILOSOPHY
              </h2>
            </div>

            {/* Bento grid */}
            <div className="relative" style={{ minHeight: "600px" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Art on a plate – large image card */}
                <div
                  className="relative overflow-hidden min-h-[400px] flex flex-col justify-end"
                  style={{ background: "#2a2a2a", border: "1px solid #353534" }}
                >
                  <div className="absolute inset-0 opacity-90 overflow-hidden">
                    <img
                      src={imgFounderPortrait}
                      alt="L'Aura founder inside the dining room"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{ background: "linear-gradient(to top, #131313 0%, rgba(19,19,19,0.16) 55%, transparent 100%)" }}
                  />
                  <div className="relative z-10 p-6 flex flex-col gap-3">
                    <span
                      className="self-start font-['JetBrains_Mono',sans-serif] font-medium text-[#fff6f4] text-[12px] tracking-[1.2px] uppercase px-2 py-1 rounded-[2px]"
                      style={{ background: "#d92b2b" }}
                    >
                      HOUSE STANDARD
                    </span>
                    <h3
                      className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[32px] uppercase leading-[36px]"
                    >
                      SERVICE BEFORE SPECTACLE.
                    </h3>
                  </div>
                </div>

                {/* Right column: text card + stat */}
                <div className="flex flex-col gap-6">
                  {/* Text card */}
                  <div
                    className="p-8"
                    style={{ background: "#1c1b1b", border: "1px solid #353534" }}
                  >
                    {/* Decorative icon */}
                    <div className="mb-6">
                      <svg width="60" height="30" viewBox="0 0 330 30" fill="none">
                        <path d="M0 15h330" stroke="#5C403D" strokeWidth="1" />
                        <circle cx="165" cy="15" r="6" fill="#5C403D" />
                      </svg>
                    </div>
                    <p
                      className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[32px] uppercase leading-[38px]"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      "Discipline is hospitality before it becomes flavor."
                    </p>
                    <p className="mt-5 font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">
                      Founder, L'Aura
                    </p>
                  </div>

                  {/* Stat card */}
                  <div
                    className="p-8 flex flex-col gap-5"
                    style={{ background: "#2a2a2a", border: "1px solid #353534" }}
                  >
                    <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] tracking-[1.2px] uppercase">
                      SEASONAL STANDARD
                    </p>
                    <div className="flex flex-col gap-2">
                      <span
                        className="font-['Bebas_Neue',sans-serif] text-[#ffb4ac] leading-none"
                        style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
                      >
                        DAILY
                      </span>
                      <p
                        className="font-['Barlow_Condensed',sans-serif] font-medium text-[#e5e2e1] text-[20px] tracking-[1px] uppercase"
                      >
                        MARKET-LED MENU EDITS
                      </p>
                      <p
                        className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[15px] leading-[23px]"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        The kitchen adjusts prep, garnish, and pacing around the best ingredients available for service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wide ingredient shot */}
              <div
                className="mt-6 relative h-[200px] sm:h-[300px] overflow-hidden"
                style={{ background: "#2a2a2a", border: "1px solid #353534" }}
              >
                <img
                  src={imgRestaurantEntrance}
                  alt="L'Aura restaurant entrance at evening"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(19,19,19,0.4)" }}
                />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="flex flex-col items-center gap-6 py-8">
            <p
              className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[32px] tracking-[1.6px] uppercase text-center"
            >
              EXPERIENCE IT YOURSELF
            </p>
            <Link
              to="/reservations"
              className="luxury-cta-primary font-['Barlow_Condensed',sans-serif] font-medium text-[20px] tracking-[2px] uppercase px-8 py-4 transition-colors"
            >
              RESERVE YOUR TABLE
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
