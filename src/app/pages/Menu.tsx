import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../cart";
import imgTasting from "../../imports/MenuGenerated/tasting-appetizer.jpg";
import imgRawBar from "../../imports/MenuGenerated/raw-bar.jpg";
import imgFire from "../../imports/MenuGenerated/from-fire.jpg";
import imgDessert from "../../imports/MenuGenerated/dessert.jpg";
import imgDuck from "../../imports/MenuGenerated/dry-aged-duck-breast.jpg";
import imgLeek from "../../imports/MenuGenerated/embered-leek-consomme.jpg";
import imgLamb from "../../imports/MenuGenerated/koji-aged-lamb.jpg";
import imgCaviar from "../../imports/MenuGenerated/ossetra-caviar-service.jpg";
import imgTuna from "../../imports/MenuGenerated/tuna-tartare.jpg";
import imgOysters from "../../imports/MenuGenerated/oyster-trio.jpg";
import imgCrab from "../../imports/MenuGenerated/king-crab-chawanmushi.jpg";
import imgHamachi from "../../imports/MenuGenerated/hamachi-collar-tataki.jpg";
import imgWagyu from "../../imports/MenuGenerated/wagyu-striploin.jpg";
import imgBlackCod from "../../imports/MenuGenerated/black-cod.jpg";
import imgCauliflower from "../../imports/MenuGenerated/embered-cauliflower.jpg";
import imgSquab from "../../imports/MenuGenerated/squab-cherry-smoke.jpg";
import imgLobster from "../../imports/MenuGenerated/lobster-saffron.jpg";
import imgCeleriac from "../../imports/MenuGenerated/celeriac-en-croute.jpg";
import imgChocolate from "../../imports/MenuGenerated/dark-chocolate-cremeux.jpg";
import imgPavlova from "../../imports/MenuGenerated/citrus-pavlova.jpg";
import imgPetitFour from "../../imports/MenuGenerated/petit-four-selection.jpg";
import imgSouffle from "../../imports/MenuGenerated/black-sesame-souffle.jpg";
import imgSorbet from "../../imports/MenuGenerated/yuzu-pear-sorbet.jpg";

interface CourseItem {
  title: string;
  description: string;
  tag: string;
  tagColor: string;
  price: string;
  image: string;
}

interface MenuCategory {
  id: string;
  label: string;
  kicker: string;
  headline: string;
  description: string;
  accent: string;
  courses: CourseItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "tasting",
    label: "Tasting Journey",
    kicker: "SIGNATURE SEQUENCE",
    headline: "THE JOURNEY",
    description:
      "A guided progression of seasonal plates built around texture, heat, smoke, and precise acidity.",
    accent: "#d92b2b",
    courses: [
      {
        title: "AMUSE-BOUCHE",
        description:
          "A delicate tartlet filled with whipped truffle mascarpone and a crown of Ossetra caviar.",
        tag: "PREMIUM",
        tagColor: "#e4c191",
        price: "$48",
        image: imgTasting,
      },
      {
        title: "HOKKAIDO SCALLOP CRUDO",
        description:
          "Diver-caught scallops dressed in yuzu kosho vinaigrette with aerated sea foam and crisp daikon.",
        tag: "COLD",
        tagColor: "#e5bdb9",
        price: "$72",
        image: imgRawBar,
      },
      {
        title: "DRY-AGED DUCK BREAST",
        description:
          "14-day dry-aged duck with black garlic puree and a tart reduction of seasonal plum.",
        tag: "SIGNATURE",
        tagColor: "#e4c191",
        price: "$96",
        image: imgDuck,
      },
      {
        title: "EMBERED LEEK CONSOMME",
        description:
          "Clear roasted leek broth, charred allium oil, smoked potato, and shaved winter truffle.",
        tag: "BROTH",
        tagColor: "#e5bdb9",
        price: "$44",
        image: imgLeek,
      },
      {
        title: "KOJI AGED LAMB",
        description:
          "Koji-aged lamb loin with fermented pepper glaze, burnt eggplant, and rosemary ash.",
        tag: "AGED",
        tagColor: "#e4c191",
        price: "$112",
        image: imgLamb,
      },
      {
        title: "TEXTURES OF DARK CHOCOLATE",
        description:
          "85% single-origin cacao, dark chocolate ganache, cocoa nib tuile, and gold leaf.",
        tag: "SWEET",
        tagColor: "#e5bdb9",
        price: "$38",
        image: imgDessert,
      },
    ],
  },
  {
    id: "raw",
    label: "Raw Bar",
    kicker: "CHILLED SERVICE",
    headline: "RAW & MINERAL",
    description:
      "Cold preparations with brine, citrus, and delicate aromatics for the first half of the evening.",
    accent: "#e4c191",
    courses: [
      {
        title: "OSSETRA CAVIAR SERVICE",
        description:
          "Royal Ossetra with buckwheat blinis, cultured creme fraiche, chive, and cured yolk.",
        tag: "CAVIAR",
        tagColor: "#e4c191",
        price: "$145",
        image: imgCaviar,
      },
      {
        title: "TUNA TARTARE",
        description:
          "Bluefin tuna with smoked soy, sesame crisp, green apple, and shiso oil.",
        tag: "RAW",
        tagColor: "#e5bdb9",
        price: "$58",
        image: imgTuna,
      },
      {
        title: "OYSTER TRIO",
        description:
          "Three market oysters with yuzu mignonette, fermented chili, and cucumber granite.",
        tag: "BRINE",
        tagColor: "#e5bdb9",
        price: "$42",
        image: imgOysters,
      },
      {
        title: "KING CRAB CHAWANMUSHI",
        description:
          "Silken custard with chilled king crab, dashi gel, preserved lemon, and bronze fennel.",
        tag: "CRAB",
        tagColor: "#e4c191",
        price: "$66",
        image: imgCrab,
      },
      {
        title: "HAMACHI COLLAR TATAKI",
        description:
          "Lightly torched hamachi collar with ponzu, radish, sea lettuce, and ginger blossom.",
        tag: "TORCHED",
        tagColor: "#e5bdb9",
        price: "$62",
        image: imgHamachi,
      },
    ],
  },
  {
    id: "fire",
    label: "From Fire",
    kicker: "HEARTH & CHAR",
    headline: "SMOKE, HEAT, CUT",
    description:
      "Wood-fired mains and deeply reduced sauces designed for richer pairings and slower dining.",
    accent: "#ffb4ac",
    courses: [
      {
        title: "WAGYU STRIPLOIN",
        description:
          "Charred wagyu, bone marrow jus, fermented onion, and grilled maitake.",
        tag: "WAGYU",
        tagColor: "#e4c191",
        price: "$128",
        image: imgWagyu,
      },
      {
        title: "BLACK COD",
        description:
          "Miso-cured cod with burnt scallion, kombu beurre blanc, and pickled sea beans.",
        tag: "SEA",
        tagColor: "#e5bdb9",
        price: "$88",
        image: imgBlackCod,
      },
      {
        title: "EMBERED CAULIFLOWER",
        description:
          "Cauliflower roasted over coals with hazelnut, vadouvan, and smoked cream.",
        tag: "VEGETAL",
        tagColor: "#e5bdb9",
        price: "$54",
        image: imgCauliflower,
      },
      {
        title: "SQUAB WITH CHERRY SMOKE",
        description:
          "Roasted squab, cherry-smoked jus, pickled walnut, and lacquered beetroot.",
        tag: "GAME",
        tagColor: "#e4c191",
        price: "$104",
        image: imgSquab,
      },
      {
        title: "LOBSTER WITH SAFFRON",
        description:
          "Butter-poached lobster tail with saffron sabayon, fennel pollen, and crisp potato.",
        tag: "LOBSTER",
        tagColor: "#e4c191",
        price: "$118",
        image: imgLobster,
      },
      {
        title: "CELERIAC EN CROUTE",
        description:
          "Salt-baked celeriac, smoked whey, mushroom XO, and black garlic crumble.",
        tag: "PLANT",
        tagColor: "#e5bdb9",
        price: "$64",
        image: imgCeleriac,
      },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    kicker: "FINAL COURSE",
    headline: "SWEET & BITTER",
    description:
      "Desserts and after-dinner pairings that finish the meal with restraint rather than excess.",
    accent: "#e5bdb9",
    courses: [
      {
        title: "DARK CHOCOLATE CREMEUX",
        description:
          "Chocolate cremeux with espresso soil, cocoa tuile, and smoked sea salt.",
        tag: "COCOA",
        tagColor: "#e4c191",
        price: "$38",
        image: imgChocolate,
      },
      {
        title: "CITRUS PAVLOVA",
        description:
          "Torched meringue, lemon curd, grapefruit, basil, and olive oil gelato.",
        tag: "BRIGHT",
        tagColor: "#e5bdb9",
        price: "$32",
        image: imgPavlova,
      },
      {
        title: "PETIT FOUR SELECTION",
        description:
          "A rotating set of small-format sweets prepared for the table.",
        tag: "TABLE",
        tagColor: "#e5bdb9",
        price: "$28",
        image: imgPetitFour,
      },
      {
        title: "BLACK SESAME SOUFFLE",
        description:
          "Warm sesame souffle with malted milk ice cream and salted caramel lacquer.",
        tag: "WARM",
        tagColor: "#e4c191",
        price: "$36",
        image: imgSouffle,
      },
      {
        title: "YUZU PEAR SORBET",
        description:
          "Yuzu pear sorbet, compressed Asian pear, sake lees, and frozen shiso.",
        tag: "CLEAN",
        tagColor: "#e5bdb9",
        price: "$30",
        image: imgSorbet,
      },
    ],
  },
];

export default function Menu() {
  const [activeCategoryId, setActiveCategoryId] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find((category) => category.id === activeCategoryId) ?? menuCategories[0];
  const { addItem, adjustItem, removeItem, clearCart, items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const getCourseId = (course: CourseItem) =>
    `${activeCategory.id}-${course.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const getPriceValue = (price: string) => Number(price.replace(/[^0-9.]/g, ""));

  return (
    <div className="flex flex-col min-h-screen pt-[80px]" style={{ background: "#131313" }}>
      <main className="flex justify-center px-6 sm:px-12 lg:px-[100px] py-8 sm:py-24">
        <div className="w-full max-w-[984px] flex flex-col gap-7 sm:gap-12">
          <section className="flex flex-col items-center text-center gap-3 sm:gap-4">
            <h1
              className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase tracking-[-2.4px] leading-none"
              style={{ fontSize: "clamp(48px, 10vw, 120px)", lineHeight: "0.92" }}
            >
              MENU
            </h1>
            <p
              className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[18px] leading-[28px] max-w-[640px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Browse by chapter, then enter the course list that fits the evening.
            </p>
          </section>

          <section
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 pb-1"
            aria-label="Menu categories"
          >
            {menuCategories.map((category) => {
              const active = activeCategory.id === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  className="min-w-[190px] sm:min-w-0 text-left p-4 sm:p-5 flex flex-col gap-2 sm:gap-3 transition-colors"
                  style={{
                    background: active ? "#2a2a2a" : "#1c1b1b",
                    border: `1px solid ${active ? category.accent : "#353534"}`,
                    boxShadow: active ? `4px 4px 0 ${category.accent}` : "none",
                  }}
                  aria-pressed={active}
                  aria-label={`${category.label}, ${category.kicker}, ${category.courses.length} selections`}
                >
                  <span
                    className="font-['JetBrains_Mono',sans-serif] font-medium text-[11px] tracking-[1.2px] uppercase"
                    style={{ color: category.accent }}
                  >
                    {category.kicker}
                  </span>
                  <span className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[28px] uppercase leading-[32px]">
                    {category.label}
                  </span>
                  <span className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[14px] leading-[20px]">
                    {category.courses.length} selections
                  </span>
                </button>
              );
            })}
          </section>

          <section
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            aria-live="polite"
          >
            <div className="lg:col-span-8 lg:order-1 flex flex-col gap-4">
              {activeCategory.courses.map((course, index) => {
                  const courseId = getCourseId(course);
                  const cartItem = items.find((item) => item.id === courseId);

                  return (
                    <article
                      key={course.title}
                      className="overflow-hidden"
                      style={{ background: "#2a2a2a", border: "1px solid #353534" }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-12">
                        <div className="sm:col-span-4 h-[180px] sm:h-auto min-h-[180px] overflow-hidden" style={{ background: "#131313" }}>
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                            fetchpriority={index === 0 ? "high" : "auto"}
                            decoding="async"
                          />
                        </div>
                        <div className="sm:col-span-8 p-5 sm:p-6 flex flex-col gap-4">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <h3 className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[28px] sm:text-[30px] uppercase leading-[32px] sm:leading-[34px]">
                              {course.title}
                            </h3>
                            <span className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[14px] tracking-[1.2px] shrink-0">
                              {course.price}
                            </span>
                          </div>
                          <p
                            className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px]"
                            style={{ fontVariationSettings: '"wdth" 100' }}
                          >
                            {course.description}
                          </p>
                          <div className="min-h-[48px] flex flex-wrap items-center justify-between gap-3">
                            <div className="min-h-[36px] flex flex-wrap items-center gap-3">
                              {cartItem && (
                                <>
                                <span className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] tracking-[1.2px] uppercase">
                                  In order x{cartItem.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => adjustItem(courseId, -1)}
                                  className="w-8 h-8 flex items-center justify-center rounded-[2px] hover:opacity-80 transition-opacity"
                                  style={{ background: "#0e0e0e", border: "1px solid #5c403d" }}
                                  aria-label={`Decrease ${course.title}`}
                                >
                                  <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
                                    <path d="M0 2V0H14V2H0Z" fill="#E5E2E1" />
                                  </svg>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeItem(courseId)}
                                  className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] hover:text-[#ffb4ac] text-[12px] tracking-[1.2px] uppercase transition-colors"
                                >
                                  REMOVE
                                </button>
                                </>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                addItem({
                                  id: courseId,
                                  name: course.title,
                                  price: getPriceValue(course.price),
                                  description: course.description,
                                  image: course.image,
                                  category: activeCategory.label,
                                })
                              }
                              className="luxury-cta-primary shrink-0 font-['Barlow_Condensed',sans-serif] font-medium text-[18px] tracking-[1.4px] uppercase px-5 py-3 transition-colors"
                            >
                              ADD TO ORDER
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
              })}
            </div>

            <aside
              className="lg:col-span-4 lg:order-2 lg:sticky lg:top-[104px] p-4 sm:p-[25px] flex flex-col gap-4 sm:gap-5"
              style={{ background: "#1c1b1b", border: "1px solid #353534" }}
            >
              <p
                className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] tracking-[1.2px] uppercase"
                style={{ color: activeCategory.accent }}
              >
                {activeCategory.kicker}
              </p>
              <div className="flex flex-col gap-3">
                <h2
                  className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] uppercase tracking-[-1.6px]"
                  style={{ fontSize: "clamp(38px, 6vw, 72px)", lineHeight: "0.95" }}
                >
                  {activeCategory.headline}
                </h2>
                <p
                  className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {activeCategory.description}
                </p>
              </div>
              <div
                className="flex flex-col gap-3 pt-4"
                style={{ borderTop: "1px solid #353534" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] tracking-[1.2px] uppercase">
                    Current Order
                  </p>
                  <span className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">
                    {cartCount} items
                  </span>
                </div>
                {items.length === 0 ? (
                  <p
                    className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[14px] leading-[22px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    No dishes added yet.
                  </p>
                ) : (
                  <div className="flex flex-col gap-2 max-h-[220px] overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div key={item.id} className="grid grid-cols-[1fr_auto_auto] items-start gap-3">
                        <span className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[14px] leading-[20px]">
                          {item.name}
                        </span>
                        <span className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] text-[12px] shrink-0">
                          x{item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] hover:text-[#ffb4ac] text-[11px] tracking-[1.1px] uppercase transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={clearCart}
                    className="self-start font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] hover:text-[#ffb4ac] text-[12px] tracking-[1.2px] uppercase transition-colors"
                  >
                    Clear Order
                  </button>
                )}
                <Link
                  to="/order"
                  className="luxury-cta-primary self-start font-['Barlow_Condensed',sans-serif] font-medium text-[18px] tracking-[1.6px] uppercase px-5 py-3 transition-colors"
                >
                  GO TO ORDER{cartCount > 0 ? ` (${cartCount})` : ""}
                </Link>
              </div>
            </aside>
          </section>

          <section className="flex flex-col items-center gap-6 py-8">
            <h3 className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[32px] tracking-[1.6px] uppercase text-center">
              HAVE ANY QUESTIONS?
            </h3>
            <p
              className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px] text-center max-w-[420px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Our concierge can help with dietary notes, timing, or table service.
            </p>
            <Link
              to="/contact"
              className="luxury-cta-primary font-['Barlow_Condensed',sans-serif] font-medium text-[20px] tracking-[2px] uppercase px-8 py-4 transition-colors"
            >
              CALL US
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
