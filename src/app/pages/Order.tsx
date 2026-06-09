import { useState } from "react";
import { Link } from "react-router";
import { Trash2 } from "lucide-react";
import { useCart } from "../cart";

export default function Order() {
  const { items, adjustItem, removeItem, clearCart } = useCart();
  const [conciergeMessage, setConciergeMessage] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;
  const hasItems = items.length > 0;

  const handleConcierge = () => {
    if (!hasItems) {
      setConciergeMessage("Add at least one menu item before continuing.");
      return;
    }

    const orderItems = items
      .map((item) => `${item.quantity} x ${item.name}`)
      .join(", ");

    setConciergeMessage(
      `${orderItems} sent to the restaurant for dine-in table service. Demo total: $${total.toFixed(2)}.`
    );
  };

  return (
    <div className="flex flex-col min-h-screen pt-[80px]" style={{ background: "#131313" }}>
      <main className="flex justify-center px-6 sm:px-12 lg:px-[100px] py-16 sm:pt-[128px] pb-24">
        <div className="w-full max-w-[984px] flex flex-col gap-12">

          {/* Header */}
          <div className="flex flex-col gap-6">
            <h1
              className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] text-[56px] sm:text-[64px] uppercase leading-[1]"
            >
              DINE-IN ORDER
            </h1>
            <p
              className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[18px] leading-[28px] max-w-[680px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Review the dishes in your cart and send them to the restaurant for dine-in table service.
            </p>
            {/* Quality promise */}
            <div
              className="flex gap-4 items-start pl-5 pr-4 py-4"
              style={{ background: "#2a2a2a", borderLeft: "4px solid #d92b2b" }}
            >
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" className="shrink-0 mt-1">
                <path d="M8 0L16 22H0L8 0Z" fill="#d92b2b" />
              </svg>
              <div className="flex flex-col gap-1">
                <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">
                  DINE-IN ONLY
                </p>
                <p
                  className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  This order flow assumes the guest is already in the restaurant. No delivery, pickup, or reservation details are required here.
                </p>
              </div>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left – products */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div style={{ borderBottom: "1px solid #5c403d", paddingBottom: "9px" }}>
                <h2
                  className="font-['Barlow_Condensed',sans-serif] font-medium text-[#e5e2e1] text-[20px] tracking-[2px] uppercase"
                >
                  1. REVIEW TABLE ORDER
                </h2>
              </div>

              {!hasItems && (
                <div
                  className="p-6 flex flex-col gap-4"
                  style={{ background: "#2a2a2a", border: "1px solid #5c403d" }}
                >
                  <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[28px] uppercase leading-[32px]">
                    YOUR ORDER IS EMPTY
                  </p>
                  <p
                    className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    Add dishes from the menu first, then return here to review and send the order to the restaurant.
                  </p>
                  <Link
                    to="/menu"
                    className="luxury-cta-primary self-start font-['Barlow_Condensed',sans-serif] font-medium text-[18px] tracking-[1.6px] uppercase px-5 py-3 transition-colors"
                  >
                    BROWSE MENU
                  </Link>
                </div>
              )}

              {items.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden"
                  style={{ background: "#2a2a2a", border: "1px solid #5c403d" }}
                >
                  <div className="grid grid-cols-[96px_1fr] sm:grid-cols-[108px_1fr_auto] items-stretch min-h-[96px] sm:min-h-[108px]">
                    <div className="relative overflow-hidden bg-[#0e0e0e] aspect-square h-full w-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="min-w-0 flex flex-col justify-center gap-1 p-4 sm:p-5">
                      <h3 className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#e5e2e1] text-[24px] uppercase leading-[28px]">
                        {item.name}
                      </h3>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex flex-wrap items-center justify-between sm:justify-end gap-3 px-4 pb-4 sm:p-5 sm:pl-0">
                      <button
                        type="button"
                        onClick={() => {
                          setConciergeMessage("");
                          adjustItem(item.id, -1);
                        }}
                        className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                        style={{ background: "#0e0e0e", border: "1px solid #5c403d" }}
                        aria-label={`Decrease ${item.name}`}
                      >
                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
                          <path d="M0 2V0H14V2H0Z" fill="#E5E2E1" />
                        </svg>
                      </button>
                      <span className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] text-[18px] tracking-[1.8px] min-w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setConciergeMessage("");
                          adjustItem(item.id, 1);
                        }}
                        className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                        style={{ background: "#0e0e0e", border: "1px solid #5c403d" }}
                        aria-label={`Increase ${item.name}`}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M6 0H8V6H14V8H8V14H6V8H0V6H6V0Z" fill="#E5E2E1" />
                        </svg>
                      </button>
                      <span className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] text-[14px] min-w-[72px] text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setConciergeMessage("");
                          removeItem(item.id);
                        }}
                        className="w-8 h-8 flex items-center justify-center text-[#e5bdb9] hover:text-[#ffb4ac] transition-colors"
                        style={{ background: "#0e0e0e", border: "1px solid #5c403d" }}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={16} strokeWidth={1.8} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Right – scheduling + order summary */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Order summary */}
              <section
                className="relative"
                style={{ background: "#0e0e0e", border: "1px solid #5c403d", minHeight: "344px" }}
              >
                <div className="relative p-[25px] flex flex-col gap-4">
                  <p
                    className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] tracking-[1.2px] uppercase pb-3 pr-24"
                    style={{ borderBottom: "1px solid #201f1f" }}
                  >
                    CONFIRM ORDER
                  </p>

                  {hasItems && (
                    <button
                      type="button"
                      onClick={() => {
                        setConciergeMessage("");
                        clearCart();
                      }}
                      className="absolute right-[25px] top-[18px] px-3 py-2 font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] hover:text-[#ffb4ac] text-[10px] tracking-[1px] uppercase transition-colors"
                      style={{ border: "1px solid #5c403d", background: "#131313" }}
                    >
                      CLEAR
                    </button>
                  )}

                  <div className="flex items-center justify-between">
                    <p
                      className="font-['IBM_Plex_Sans',sans-serif] text-[#e5e2e1] text-[16px]"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      Subtotal
                    </p>
                    <span className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5e2e1] text-[16px]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p
                      className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px]"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      Service
                    </p>
                    <span className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[16px]">
                      Dine-in
                    </span>
                  </div>

                  <div
                    className="flex items-end justify-between pt-4"
                    style={{ borderTop: "1px solid #5c403d" }}
                  >
                    <p
                      className="font-['Barlow_Condensed',sans-serif] font-medium text-[#e5e2e1] text-[20px] tracking-[1px] uppercase"
                    >
                      TOTAL
                    </p>
                    <span
                      className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#d92b2b] text-[32px]"
                    >
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleConcierge}
                    className="luxury-cta-primary w-full flex items-center justify-center gap-2 py-4 font-['Barlow_Condensed',sans-serif] font-medium text-[20px] tracking-[2px] uppercase mt-2 transition-colors"
                    style={{
                      opacity: hasItems ? 1 : 0.45,
                      cursor: "pointer",
                    }}
                  >
                    SEND TO RESTAURANT
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#131313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {conciergeMessage && (
                    <p
                      role="status"
                      className="font-['IBM_Plex_Sans',sans-serif] text-[#e5e2e1] text-[14px] leading-[22px] p-3"
                      style={{ background: "#201f1f", border: "1px solid #5c403d", fontVariationSettings: '"wdth" 100' }}
                    >
                      {conciergeMessage}
                    </p>
                  )}

                  <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] text-center tracking-[1.2px]">
                    Demo dine-in order only. No payment is processed.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
