import { Link } from "react-router";
import imgHeroBackground from "../../imports/HomeGenerated/fine-dining-hero.png";
import imgChefsTable from "../../imports/HomeGenerated/chef-table-service.png";
import imgWinePairing from "../../imports/HomeGenerated/wine-pairing-cellar.png";
import imgFounderPortrait from "../../imports/AboutGenerated/founder-portrait-half-body.png";
import imgRestaurantEntrance from "../../imports/AboutGenerated/restaurant-entrance.png";
import imgTastingCourse from "../../imports/MenuGenerated/tasting-appetizer.jpg";
import imgJournalEvents from "../../imports/BlogGenerated/laura-journal-events.png";

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

type Review = {
  id: string;
  author: string;
  rating: number;
  quote: string;
};

const reviews: Review[] = [
  { id: "review-1", author: "Camille R.", rating: 5, quote: "The pacing felt effortless and every course had a clear point of view." },
  { id: "review-2", author: "Daniel K.", rating: 5, quote: "A polished room without stiffness. The wine pairing was exceptional." },
  { id: "review-3", author: "Nora S.", rating: 4, quote: "Memorable cooking, attentive service, and a beautifully calm dining room." },
];

const journalEntries = [
  {
    category: "SEASONAL MENU",
    date: "JUN 14",
    title: "SUMMER TASTING MENU BEGINS",
    excerpt:
      "A new 10-course sequence built around citrus, shellfish, herbs, and embered vegetables.",
    action: "Reserve",
    to: "/reservations",
  },
  {
    category: "WINE EVENT",
    date: "JUN 20",
    title: "RARE BURGUNDY PAIRING NIGHT",
    excerpt:
      "One evening of limited-production Burgundy selections paired with the chef's menu.",
    action: "Reserve Seat",
    to: "/reservations",
  },
  {
    category: "HOUSE NEWS",
    date: "JUN 27",
    title: "CHEF'S TABLE OPENS THURSDAYS",
    excerpt:
      "Our most intimate counter experience adds a new weekly seating.",
    action: "Discover More",
    to: "/reservations",
  },
];

const embeddedMapUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=-74.0149%2C40.7034%2C-73.9958%2C40.7148&layer=mapnik&marker=40.7091%2C-74.0053";
const directionsUrl = "https://www.google.com/maps/search/?api=1&query=99%20Cloud%20Tower%20Downtown";

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

          <section className="flex flex-col gap-8" aria-labelledby="journal-heading">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4" style={{ borderBottom: "1px solid #353534", paddingBottom: "17px" }}>
              <div className="flex flex-col gap-3">
                <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">
                  BLOG
                </p>
                <h2
                  id="journal-heading"
                  className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase tracking-[-1.6px]"
                  style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: "1" }}
                >
                  JOURNAL & EVENTS
                </h2>
              </div>
              <p
                className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px] max-w-[420px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Seasonal notes, intimate events, and dining room updates from L'Aura.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <article className="lg:col-span-7 overflow-hidden" style={{ background: "#2a2a2a", border: "1px solid #5c403d" }}>
                <div className="relative h-[280px] sm:h-[380px] overflow-hidden">
                  <img
                    src={imgJournalEvents}
                    alt="Fine dining tasting course with wine in a candlelit dining room"
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(19,19,19,0.78), rgba(19,19,19,0.08))" }} />
                  <div className="absolute left-5 top-5 font-['JetBrains_Mono',sans-serif] font-medium text-[#131313] text-[12px] tracking-[1.2px] uppercase px-3 py-2" style={{ background: "#e4c191" }}>
                    Featured
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">
                    {journalEntries[0].category} / {journalEntries[0].date}
                  </p>
                  <h3 className="mt-3 font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[34px] uppercase leading-[38px]">
                    {journalEntries[0].title}
                  </h3>
                  <p
                    className="mt-4 font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {journalEntries[0].excerpt}
                  </p>
                  <Link
                    to={journalEntries[0].to}
                    className="mt-6 inline-flex items-center gap-2 font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] text-[12px] tracking-[1.2px] hover:text-[#ffb4ac] transition-colors pb-1"
                    style={{ borderBottom: "1px solid #d92b2b" }}
                  >
                    {journalEntries[0].action}
                    <svg width="9" height="9" viewBox="0 0 9.33 9.33" fill="none">
                      <path d="M1 1l7.33 7.33M1 8.33L8.33 1" stroke="#E5E2E1" strokeWidth="1.5" />
                    </svg>
                  </Link>
                </div>
              </article>

              <div className="grid gap-6 lg:col-span-5">
                {journalEntries.slice(1).map((entry) => (
                  <article key={entry.title} className="flex min-h-[220px] flex-col justify-between p-6" style={{ background: "#201f1f", border: "1px solid #4a4a4a" }}>
                    <div>
                      <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e4c191] text-[12px] tracking-[1.2px] uppercase">
                        {entry.category} / {entry.date}
                      </p>
                      <h3 className="mt-3 font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[28px] uppercase leading-[32px]">
                        {entry.title}
                      </h3>
                      <p
                        className="mt-4 font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[15px] leading-[23px]"
                        style={{ fontVariationSettings: '"wdth" 100' }}
                      >
                        {entry.excerpt}
                      </p>
                    </div>
                    <Link
                      to={entry.to}
                      className="mt-6 inline-flex w-fit items-center gap-2 font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] text-[12px] tracking-[1.2px] hover:text-[#ffb4ac] transition-colors pb-1"
                      style={{ borderBottom: "1px solid #d92b2b" }}
                    >
                      {entry.action}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-8" aria-labelledby="reviews-heading">
            <div style={{ borderBottom: "1px solid #353534", paddingBottom: "17px" }}>
              <div>
                <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">
                  GUEST IMPRESSIONS
                </p>
                <h2 id="reviews-heading" className="mt-3 font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase tracking-[-1.6px]" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: "1" }}>
                  NOTES FROM THE ROOM
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.id} className="flex min-h-[230px] flex-col justify-between p-6" style={{ background: "#2a2a2a", border: "1px solid #5c403d" }}>
                  <div>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[#e4c191] text-[14px] tracking-[2px]" aria-label={`${review.rating} out of 5 stars`}>
                      {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </p>
                    <p className="mt-5 font-['IBM_Plex_Sans',sans-serif] text-[#e5e2e1] text-[16px] leading-[25px]">"{review.quote}"</p>
                  </div>
                  <p className="mt-6 font-['JetBrains_Mono',sans-serif] text-[#ffb4ac] text-[12px] tracking-[1.2px] uppercase">{review.author}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12" aria-labelledby="visit-heading" style={{ border: "1px solid #5c403d" }}>
            <div className="flex flex-col justify-center gap-5 p-6 sm:p-10 lg:col-span-5" style={{ background: "#2a2a2a" }}>
              <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">PLAN THE EVENING</p>
              <h2 id="visit-heading" className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: "1" }}>FIND THE ROOM</h2>
              <div className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[26px]">
                <p>The Penthouse, 99 Cloud Tower, Downtown</p>
                <p>Dinner 18:00 - 23:00, closed Mondays</p>
                <p>Direct line: +1 (555) 019-9923</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="tel:+15550199923" className="luxury-cta-outline px-5 py-3 font-['Barlow_Condensed',sans-serif] font-medium text-[18px] tracking-[1px] uppercase">CALL</a>
                <a href={directionsUrl} target="_blank" rel="noreferrer" className="luxury-cta-outline px-5 py-3 font-['Barlow_Condensed',sans-serif] font-medium text-[18px] tracking-[1px] uppercase">OPEN MAPS</a>
                <Link to="/reservations" className="luxury-cta-primary px-6 py-3 font-['Barlow_Condensed',sans-serif] font-medium text-[18px] tracking-[1px] uppercase">RESERVE</Link>
              </div>
            </div>
            <div className="min-h-[340px] p-3 lg:col-span-7" style={{ background: "#201f1f" }}>
              <iframe
                title="Map to L'Aura Fine Dining"
                src={embeddedMapUrl}
                className="h-full min-h-[316px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
