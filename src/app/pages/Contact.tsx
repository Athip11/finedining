import { Link } from "react-router";

export default function Contact() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=99%20Cloud%20Tower%20Downtown";
  const embeddedMapUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=-74.0149%2C40.7034%2C-73.9958%2C40.7148&layer=mapnik&marker=40.7091%2C-74.0053";

  return (
    <div className="flex flex-col min-h-screen pt-[80px]" style={{ background: "#0e0e0e" }}>
      <main className="flex justify-center px-6 sm:px-12 lg:px-[100px] py-16 sm:pt-[128px] pb-24">
        <div className="w-full max-w-[984px] flex flex-col gap-8">

          {/* Heading */}
          <h1
            className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase tracking-[-2.4px]"
            style={{ fontSize: "clamp(56px, 10vw, 120px)", lineHeight: "1" }}
          >
            CONNECT
          </h1>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Left column – info + CTA */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Info card */}
              <div
                className="flex flex-col gap-6 p-[25px]"
                style={{ background: "#2a2a2a", border: "1px solid #5c403d" }}
              >
                {/* Location */}
                <div className="flex flex-col gap-2">
                  <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] tracking-[1.2px] uppercase">
                    LOCATION
                  </p>
                  <div className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[32px] leading-[40px]">
                    <p>The Penthouse</p>
                    <p>99 Cloud Tower</p>
                    <p>Downtown</p>
                  </div>
                </div>

                <hr style={{ borderColor: "#5c403d" }} />

                {/* Hours */}
                <div className="flex flex-col gap-3">
                  <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] tracking-[1.2px] uppercase">
                    HOURS OF OPERATION
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] text-[12px] tracking-[0.6px] uppercase px-3 py-1"
                      style={{ background: "#353534", border: "1px solid #5c403d" }}
                    >
                      DINNER ONLY
                    </span>
                    <span
                      className="font-['JetBrains_Mono',sans-serif] font-medium text-[#ffb4ac] text-[12px] tracking-[0.6px] uppercase px-3 py-1"
                      style={{ background: "#353534", border: "1px solid #5c403d" }}
                    >
                      CLOSED MONDAYS
                    </span>
                  </div>
                  <p
                    className="font-['IBM_Plex_Sans',sans-serif] text-[#e5e2e1] text-[18px] leading-[28px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    18:00 – 23:00
                  </p>
                </div>

                <hr style={{ borderColor: "#5c403d" }} />

                {/* Contact */}
                <div className="flex flex-col gap-1">
                  <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] tracking-[1.2px] uppercase mb-1">
                    DIRECT LINE
                  </p>
                  <a
                    href="tel:+15550199923"
                    className="font-['IBM_Plex_Sans',sans-serif] text-[#e5e2e1] hover:text-[#ffb4ac] text-[18px] leading-[28px] transition-colors"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    +1 (555) 019-9923
                  </a>
                  <a
                    href="mailto:concierge@lauradining.com"
                    className="font-['IBM_Plex_Sans',sans-serif] text-[#e5e2e1] hover:text-[#ffb4ac] text-[18px] leading-[28px] transition-colors"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    concierge@lauradining.com
                  </a>
                </div>
              </div>

              {/* Reserve CTA */}
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="luxury-cta-outline w-full text-center font-['Barlow_Condensed',sans-serif] font-semibold text-[24px] uppercase py-[13px] transition-colors"
                >
                  OPEN IN MAPS
                </a>
                <Link
                  to="/reservations"
                  className="luxury-cta-primary w-full text-center font-['Barlow_Condensed',sans-serif] font-semibold text-[32px] uppercase py-[17px] transition-colors"
                >
                  RESERVE YOUR TABLE
                </Link>
                <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] tracking-[1.2px] uppercase text-center">
                  RESERVATIONS HIGHLY RECOMMENDED
                </p>
              </div>
            </div>

            {/* Right column – map */}
            <div
              className="lg:col-span-7 relative min-h-[400px] lg:min-h-[616px] overflow-hidden"
              style={{ background: "#201f1f", border: "1px solid #5c403d" }}
            >
              {/* Interactive map */}
              <div className="absolute inset-0">
                <iframe
                  title="Interactive map to L'Aura Fine Dining"
                  src={embeddedMapUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{ background: "linear-gradient(to top, #0e0e0e 0%, transparent 50%)" }}
              />

              {/* Pin */}
              <div className="pointer-events-none absolute" style={{ top: "45%", left: "60%", transform: "translate(-50%,-50%)" }}>
                <div
                  className="w-4 h-4 rounded-full bg-[#d92b2b]"
                  style={{ boxShadow: "0 0 20px rgba(217,43,43,0.8)" }}
                />
                <div className="mt-2">
                  <span
                    className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] text-[12px] tracking-[1.2px] uppercase px-3 py-1 backdrop-blur-sm"
                    style={{ background: "#353534", border: "1px solid #5c403d" }}
                  >
                    CLOUD TOWER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
