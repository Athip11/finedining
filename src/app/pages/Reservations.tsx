import { useState } from "react";
import imgRestaurantInterior from "../../imports/ReservationsLAuraFineDiningThemed/caa92780510d74246b7c1adf0779d632147a6c94.png";

export default function Reservations() {
  const today = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    dietary: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setSubmitted(false);
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-[13px] py-[15px] font-['IBM_Plex_Sans',sans-serif] text-[#e5e2e1] text-[16px] focus:outline-none focus:border-[#d92b2b] transition-colors rounded-[0px]";
  const inputStyle = {
    background: "#1a1a1a",
    border: "1px solid #5c403d",
    colorScheme: "dark" as const,
    fontVariationSettings: '"wdth" 100',
  };

  const labelClass =
    "font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] tracking-[1.2px] uppercase";

  return (
    <div className="flex flex-col min-h-screen pt-[80px]" style={{ background: "#131313" }}>
      {/* Restaurant interior hero */}
      <div className="relative h-[220px] sm:h-[300px] overflow-hidden">
        <img
          src={imgRestaurantInterior}
          alt="L'Aura restaurant interior"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, #131313 100%)" }}
        />
      </div>

      <main className="flex justify-center px-6 sm:px-12 lg:px-[100px] pb-24 -mt-8 relative z-10">
        <div className="w-full max-w-[984px] flex flex-col gap-8">

          {/* Header */}
          <div className="flex flex-col gap-3">
            <h1
              className="font-['Bebas_Neue',sans-serif] text-[#e5e2e1] text-[48px] sm:text-[64px] uppercase leading-[1]"
            >
              SECURE YOUR EXPERIENCE
            </h1>
            <p
              className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[18px] leading-[28px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Prepare for an evening of uncompromising culinary intensity. Choose your table details, then confirm the policies before sending your request.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left – policies */}
            <aside className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-3 lg:gap-4">
              {/* Dress Code */}
              <div style={{ background: "#2a2a2a", border: "1px solid #5c403d" }}>
                <div
                  className="flex items-center gap-3 px-4 lg:px-[25px] pt-4 lg:pt-[25px] pb-3 lg:pb-[13px]"
                  style={{ borderBottom: "1px solid #353534" }}
                >
                  <svg width="21" height="18" viewBox="0 0 21 18" fill="none">
                    <path d="M10.5 0L21 18H0L10.5 0Z" fill="#D92B2B" />
                  </svg>
                  <p className={labelClass}>DRESS CODE</p>
                </div>
                <p
                  className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[15px] lg:text-[16px] leading-[23px] lg:leading-[24px] px-4 lg:px-[25px] py-4 lg:py-[25px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Smart Elegant attire is strictly enforced. No shorts, athletic wear, or open-toed sandals permitted.
                </p>
              </div>

              {/* Deposit Policy */}
              <div style={{ background: "#2a2a2a", border: "1px solid #5c403d" }}>
                <div
                  className="flex items-center gap-3 px-4 lg:px-[25px] pt-4 lg:pt-[25px] pb-3 lg:pb-[13px]"
                  style={{ borderBottom: "1px solid #353534" }}
                >
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <rect x="0" y="0" width="20" height="16" rx="2" fill="#D92B2B" />
                  </svg>
                  <p className={labelClass}>DEPOSIT POLICY</p>
                </div>
                <p
                  className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[15px] lg:text-[16px] leading-[23px] lg:leading-[24px] px-4 lg:px-[25px] py-4 lg:py-[25px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  A <strong className="text-[#e5e2e1] font-medium">$50 per person</strong> credit card hold is required to secure your booking. This will not be charged unless cancellation terms are breached.
                </p>
              </div>

              {/* Cancellations */}
              <div style={{ background: "#2a2a2a", border: "1px solid #5c403d" }}>
                <div
                  className="flex items-center gap-3 px-4 lg:px-[25px] pt-4 lg:pt-[25px] pb-3 lg:pb-[13px]"
                  style={{ borderBottom: "1px solid #353534" }}
                >
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path d="M9 0L18 5V15L9 20L0 15V5L9 0Z" fill="#FFB4AB" opacity="0.9" />
                  </svg>
                  <p className={labelClass} style={{ color: "#ffb4ab" }}>CANCELLATIONS</p>
                </div>
                <p
                  className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[15px] lg:text-[16px] leading-[23px] lg:leading-[24px] px-4 lg:px-[25px] py-4 lg:py-[25px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Cancellations must be made at least <strong className="text-[#e5e2e1] font-medium">48 hours</strong> in advance. Late cancellations forfeit the deposit hold.
                </p>
              </div>
            </aside>

            {/* Right – form */}
            <div className="order-1 lg:order-2 lg:col-span-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-[25px]"
                style={{ background: "#1c1b1b", border: "1px solid #5c403d" }}
              >
                {submitted && (
                  <div
                    role="status"
                    className="flex flex-col gap-2 p-4"
                    style={{ background: "#201f1f", border: "1px solid #d92b2b" }}
                  >
                    <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#d92b2b] text-[12px] tracking-[1.2px] uppercase">
                      REQUEST READY
                    </p>
                    <p
                      className="font-['IBM_Plex_Sans',sans-serif] text-[#e5e2e1] text-[16px] leading-[24px]"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      {form.firstName}, your table request for {form.guests} on {form.date} at {form.time} is staged for concierge review. This demo keeps the request on-screen only.
                    </p>
                  </div>
                )}

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reservation-first-name" className={labelClass}>FIRST NAME</label>
                    <input
                      id="reservation-first-name"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jean"
                      className={inputClass}
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reservation-last-name" className={labelClass}>LAST NAME</label>
                    <input
                      id="reservation-last-name"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Dupont"
                      className={inputClass}
                      style={inputStyle}
                      required
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reservation-email" className={labelClass}>EMAIL</label>
                    <input
                      id="reservation-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className={inputClass}
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reservation-phone" className={labelClass}>PHONE</label>
                    <input
                      id="reservation-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Date, Time, Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reservation-date" className={labelClass}>DATE</label>
                    <input
                      id="reservation-date"
                      type="date"
                      name="date"
                      min={today}
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reservation-time" className={labelClass}>TIME</label>
                    <select
                      id="reservation-time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: "none" }}
                      required
                    >
                      <option value="">Select time</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reservation-guests" className={labelClass}>GUESTS</label>
                    <select
                      id="reservation-guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: "none" }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={String(n)}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Occasion & Dietary */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
                  style={{ borderTop: "1px solid #353534" }}
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reservation-occasion" className={labelClass}>SPECIAL OCCASION</label>
                    <select
                      id="reservation-occasion"
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: "none" }}
                    >
                      <option value="">None</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="proposal">Proposal</option>
                      <option value="business">Business Dinner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="reservation-dietary" className={labelClass}>DIETARY RESTRICTIONS</label>
                    <input
                      id="reservation-dietary"
                      name="dietary"
                      value={form.dietary}
                      onChange={handleChange}
                      placeholder="ALLERGIES / RESTRICTIONS"
                      className={inputClass}
                      style={{ ...inputStyle, color: form.dietary ? "#e5e2e1" : "#4a4a4a" }}
                    />
                  </div>
                </div>

                {/* Terms acknowledgement */}
                <label
                  className="flex items-start gap-3 cursor-pointer"
                  style={{ background: "#201f1f", padding: "16px", border: `1px solid ${form.agreed ? "#d92b2b" : "#5c403d"}` }}
                >
                  <div
                    className="w-4 h-4 mt-1 rounded-[2px] flex items-center justify-center shrink-0"
                    style={{ background: form.agreed ? "#d92b2b" : "#1a1a1a", border: "1px solid #5c403d" }}
                  >
                    {form.agreed && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={form.agreed}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <p
                    className="font-['IBM_Plex_Sans',sans-serif] text-[#e5bdb9] text-[16px] leading-[24px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    I acknowledge and accept the Dress Code, Deposit, and Cancellation policies outlined above.
                  </p>
                </label>

                <button
                  type="submit"
                  disabled={!form.agreed}
                  className="luxury-cta-primary w-full py-5 font-['Barlow_Condensed',sans-serif] font-semibold text-[24px] tracking-[2px] uppercase transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    boxShadow: form.agreed ? "0 10px 26px rgba(197, 168, 128, 0.24)" : "none",
                  }}
                >
                  CONFIRM RESERVATION
                </button>

                <p className="font-['JetBrains_Mono',sans-serif] font-medium text-[#e5bdb9] text-[12px] text-center tracking-[1.2px]">
                  We will confirm your reservation within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
