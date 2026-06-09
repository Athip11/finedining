import { Link } from "react-router";
import imgHeroBackground from "../../imports/HomeGenerated/fine-dining-hero.png";
import imgChefsTable from "../../imports/HomeGenerated/chef-table-service.png";
import imgWinePairing from "../../imports/HomeGenerated/wine-pairing-cellar.png";
import imgFounderPortrait from "../../imports/AboutGenerated/founder-portrait-half-body.png";
import imgRestaurantEntrance from "../../imports/AboutGenerated/restaurant-entrance.png";
import imgTastingCourse from "../../imports/MenuGenerated/tasting-appetizer.jpg";

const navHighlights = [
  {
    to: "/about",
    kicker: "ABOUT",
    title: "THE HOUSE",
    description:
      "Meet the philosophy, founder, and service standards behind L'Aura's dining room.",
    image: imgFounderPortrait,
    alt: "L'Aura founder portrait",
  },
  {
    to: "/menu",
    kicker: "MENU",
    title: "THE SEQUENCE",
    description:
      "Browse tasting chapters, add dishes to the table order, and review the evening's courses.",
    image: imgTastingCourse,
    alt: "Fine dining tasting course",
  },
  {
    to: "/contact",
    kicker: "CONTACT",
    title: "FIND THE ROOM",
    description:
      "Check location details, opening hours, and the best way to reach the restaurant.",
    image: imgRestaurantEntrance,
    alt: "L'Aura restaurant entrance",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#131313" }}>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[819px] pt-[80px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-55 pointer-events-none overflow-hidden">
          <img
            src={imgHeroBackground}
            alt=""
            className="absolute w-full object-cover"
            style={{ top: "-10%", height: "120%" }}
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 py-24 text-center">
          {/* Heading */}
          <h1
            className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] tracking-[-2.4px] uppercase leading-none mb-6"
            style={{ fontSize: "clamp(64px, 10vw, 120px)", lineHeight: "0.92" }}
            aria-label="A Symphony of Flavors"
          >
            <span aria-hidden="true">A SYMPHONY</span>
            <br />
            <span aria-hidden="true">OF FLAVORS</span>
          </h1>

          <p
            className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[18px] leading-[28px] text-center mb-10 max-w-[672px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Experience award-winning culinary artistry in an intimate, elegant setting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/reservations"
              className="luxury-cta-primary font-['Barlow_Condensed',sans-serif] font-medium text-[20px] tracking-[2px] uppercase px-8 py-[17px] rounded-[4px] transition-colors"
            >
              RESERVE YOUR TABLE
            </Link>
            <Link
              to="/menu"
              className="luxury-cta-outline font-['Barlow_Condensed',sans-serif] font-medium text-[20px] tracking-[2px] uppercase px-[33px] py-[17px] rounded-[4px] transition-colors"
            >
              VIEW TASTING MENU
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Bento Grid */}
      <main className="flex justify-center px-6 sm:px-12 lg:px-[100px] pt-20 sm:pt-28 lg:pt-32 pb-24">
        <div className="w-full max-w-[984px] flex flex-col gap-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ gridTemplateRows: "auto" }}>
            {/* Chef's Table – large card */}
            <article
              className="lg:col-span-8 relative overflow-hidden min-h-[430px] flex flex-col justify-end"
              style={{ background: "#2a2a2a", border: "1px solid #4a4a4a" }}
            >
              {/* BG image with gradient overlay */}
                <div className="absolute inset-0 opacity-55 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, #2a2a2a, transparent)" }}
                />
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={imgChefsTable}
                    alt="Chef's Table"
                    className="absolute w-full object-cover"
                    style={{ top: "-25%", height: "151%" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="relative z-10 p-6 sm:p-[25px] pt-[180px]">
                <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase mb-2">
                  EXCLUSIVE
                </p>
                <h2
                  className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase leading-none mb-4"
                  style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                >
                  THE CHEF'S TABLE EXPERIENCE
                </h2>
                <p
                  className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px] mb-6 max-w-[448px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  An exclusive 10-course journey guided by our executive chef, exploring the boundaries of taste and texture.
                </p>
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-2 font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] text-[12px] tracking-[1.2px] hover:text-[#ffb4ac] transition-colors pb-1"
                  style={{ borderBottom: "1px solid #d92b2b" }}
                >
                  Discover More
                  <svg width="9" height="9" viewBox="0 0 9.33 9.33" fill="none">
                    <path d="M1 1l7.33 7.33M1 8.33L8.33 1" stroke="#E5E2E1" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Wine Pairing – small card */}
            <article
              className="lg:col-span-4 flex flex-col min-h-[320px] lg:min-h-[430px]"
              style={{ background: "#2a2a2a", border: "1px solid #4a4a4a" }}
            >
              {/* Image */}
              <div className="h-[192px] relative overflow-hidden shrink-0">
                <img
                  src={imgWinePairing}
                  alt="Wine Pairing"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex flex-col gap-2 p-6 sm:p-[25px] flex-1 justify-end">
                <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e4c191] text-[12px] tracking-[1.2px] uppercase">
                  RARE VINTAGES
                </p>
                <h2
                  className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[32px] uppercase leading-[36px]"
                >
                  WINE PAIRING
                </h2>
                <p
                  className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Expertly curated selections to complement every course, featuring rare and limited-production vintages.
                </p>
              </div>
            </article>
          </div>

          <section className="flex flex-col gap-8" aria-labelledby="explore-heading">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4" style={{ borderBottom: "1px solid #353534", paddingBottom: "17px" }}>
              <div className="flex flex-col gap-3">
                <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">
                  START HERE
                </p>
                <h2
                  id="explore-heading"
                  className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase tracking-[-1.6px]"
                  style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: "1" }}
                >
                  EXPLORE L'AURA
                </h2>
              </div>
              <p
                className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px] max-w-[420px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                A quick guide to the main pages, from the story of the room to the menu and contact details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {navHighlights.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group min-h-[420px] relative overflow-hidden flex flex-col justify-end transition-transform hover:-translate-y-1"
                  style={{ background: "#2a2a2a", border: "1px solid #4a4a4a" }}
                >
                  <div className="absolute inset-0 opacity-70 group-hover:opacity-85 transition-opacity">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, #131313 0%, rgba(19,19,19,0.72) 36%, rgba(19,19,19,0.12) 100%)" }}
                  />
                  <div className="relative z-10 p-6 flex flex-col gap-3">
                    <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">
                      {item.kicker}
                    </p>
                    <h3 className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[32px] uppercase leading-[36px]">
                      {item.title}
                    </h3>
                    <p
                      className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[15px] leading-[23px]"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      {item.description}
                    </p>
                    <span
                      className="self-start pt-1 font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] group-hover:text-[#ffb4ac] text-[12px] tracking-[1.2px] uppercase transition-colors"
                      style={{ borderBottom: "1px solid #d92b2b" }}
                    >
                      Open Page
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
