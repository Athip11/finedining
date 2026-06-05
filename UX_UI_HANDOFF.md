# UX/UI Handoff - L'Aura Fine Dining

## Project State

This is a Vite/React fine dining website demo for `L'Aura Fine Dining`.

Current local URL:

```txt
http://localhost:5173/#/
```

The app uses hash routing, so the main pages are:

```txt
/
/about
/menu
/order
/reservations
/contact
```

There is no real backend, database, payment, or booking API yet. Current checkout and reservation interactions are frontend-only demo flows.

## Recent Work Completed

- Updated metadata/SEO in `index.html`.
- Switched routing to hash routing to make static hosting safer.
- Improved reservation flow so submit shows an in-page confirmation instead of `alert()`.
- Improved order flow so the concierge button validates and shows frontend-only feedback.
- Expanded the Menu page into category tabs:
  - Tasting Journey
  - Raw Bar
  - From Fire
  - Dessert
- Added 22 total menu items.
- Generated and compressed unique JPG images for every menu item.
- Confirmed `1 menu item = 1 unique image`.
- Ran `npm run build` successfully after the latest menu image changes.

Generated menu assets live here:

```txt
src/imports/MenuGenerated/
```

## UX Review Captures

Screenshots captured during UX review:

```txt
ux-capture-home.png
ux-capture-about.png
ux-capture-menu.png
ux-capture-order.png
ux-capture-reservations.png
ux-capture-contact.png
```

All are in the project root:

```txt
C:\Users\mrath\Downloads\finedining
```

## Current UX Assessment

The visual direction is strong: dark, cinematic, premium, and consistent with a luxury fine dining brand.

The main UX weakness is not visual polish, but user-flow clarity. The site has two high-intent paths:

- Reserve a table
- Order at-home curated kits

Those are currently both visible in the nav as `RESERVATIONS` and `ORDER`, but the difference is not immediately obvious. A fine dining visitor may assume `ORDER` means ordering the dishes from the main menu, while the current Order page is actually for prepared at-home kits.

## Priority Improvements

### 1. Clarify `Order` vs `Reservations`

Current issue:

`ORDER` sounds like ordering restaurant menu items, but the page is really about curated at-home kits.

Recommended options:

- Rename nav item from `ORDER` to `AT-HOME KITS`.
- Or rename to `PRIVATE KITS`.
- Or keep `ORDER`, but add a clear page subtitle and supporting copy above the fold.

Suggested framing:

```txt
AT-HOME KITS
Curated finishing kits for private dining at home.
```

Why this matters:

It prevents users from expecting the Menu page dishes to be directly orderable.

### 2. Improve Menu Mobile Flow

Current issue:

On mobile, the Menu page is very tall. The category selector appears before users see any actual food images. Since the new requirement is `1 menu item = 1 image`, the food imagery should appear earlier.

Recommended changes:

- Make category controls more compact on mobile.
- Consider horizontal scroll tabs for categories.
- Reduce intro spacing above the menu list.
- Keep the category description sidebar shorter or move it below the first menu item on mobile.

Goal:

Users should see the first menu image within the first viewport or soon after.

### 3. Improve Reservation Mobile Flow

Current issue:

Reservation policies appear before the form. On mobile, users have to scroll through policy cards before reaching form fields.

Recommended changes:

- Convert policies into compact accordions on mobile.
- Or show a one-line policy summary first, with details expandable.
- Prioritize date, time, guests, and contact fields earlier.

Goal:

Reduce friction for the main conversion flow: booking a table.

### 4. Add More Inline Reservation CTAs

Current issue:

The Menu page CTA is at the bottom. Users browsing long category lists may not see a reservation action soon enough.

Recommended changes:

- Add a compact CTA near the active menu category intro.
- Or add a secondary CTA after 2-3 visible dishes.
- Avoid a loud sticky CTA unless it still feels premium.

Suggested label:

```txt
Reserve this tasting
```

### 5. Improve Contact Completion Actions

Current issue:

The Contact page looks good, but the map and contact details are mostly passive.

Recommended changes:

- Make phone clickable with `tel:`.
- Make email clickable with `mailto:`.
- Add an `Open in Maps` link/button.

Goal:

Let users complete the contact/location task quickly.

## Accessibility / Polish Notes

These are not blockers, but worth addressing:

- Some headings with visual line breaks read as joined words in DOM snapshots:
  - `A SYMPHONYOF FLAVORS`
  - `OURSTORY`
- Menu category buttons have accessible names that run together:
  - `SIGNATURE SEQUENCETasting Journey6 selections`
- All-caps condensed typography is strong visually, but small labels/buttons can be harder to read.
- Consider adding more descriptive `aria-label`s for category buttons.
- Keep checking for mobile overflow after layout changes.

## Technical Notes

Useful commands:

```bash
npm run build
npm audit
```

Current build status after the latest changes:

```txt
npm run build: passing
```

Browser QA notes:

- `localhost:5173` worked during the latest checks.
- `127.0.0.1:5173` was blocked by the in-app browser during one later test, while `localhost:5173` still worked.
- No console errors/warnings were seen during the UX review.

## Suggested Next Work Order

1. Rename or reframe `Order` as at-home kits.
2. Tighten Menu mobile layout so images appear sooner.
3. Make Reservation policies compact on mobile.
4. Add a tasteful inline reservation CTA on Menu.
5. Make Contact actions clickable.
6. Clean up heading/accessibility names.

## Important Constraint

Do not add real backend/payment/booking behavior yet unless explicitly requested. Keep flows frontend-only and honest in the UI.
