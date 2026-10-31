# 🌹 Advance Happy Birthday — Luxury Surprise Website

A handcrafted, luxury romantic digital surprise website built with pure HTML5, CSS3, and Vanilla JavaScript. Designed specifically as an **Advance Birthday Surprise** for someone very special.

Inspired by luxury editorial aesthetics (Chanel, Dior, high-end perfume films) with deep midnight plum (`#1D1028`), rich burgundy (`#3B1026`), and champagne gold (`#E8C98A`) accents.

---

## 📁 1. Project Folder Structure

```text
love/
├── index.html              # Main website structure & semantic layout
├── style.css               # Luxury CSS design system & animations
├── script.js               # Dynamic countdown, letter envelope & CONFIG
├── README.md               # Deployment guide & customization instructions
└── assets/
    └── images/
        ├── hero.jpg        # Her main portrait photo (3:4 ratio)
        ├── photo-1.jpg     # Memory 01: "A face that deserves a thousand smiles."
        ├── photo-2.jpg     # Memory 02: "A little moment, a beautiful memory."
        ├── photo-3.jpg     # Memory 03: "Your smile makes ordinary moments special."
        ├── photo-4.jpg     # Memory 04: "A little collection of beautiful things."
        ├── photo-5.jpg     # Memory 05: "If happiness had a picture…"
        └── photo-6.jpg     # Memory 06: "Made with a little extra love."
```

---

## ✨ 2. Features Included

1. **Opening Splash Screen**: Fullscreen cinematic intro with glowing golden heart, warm greeting, and an animated *"Open Your Surprise ♡"* button.
2. **Hero Section (Advance Birthday Wish)**:
   - Clear distinction: *Advance Happy Birthday* (not birthday-day).
   - Golden framed portrait with soft candlelight glow and corner accents.
   - Dynamic wish: `ADVANCE HAPPY BIRTHDAY, [HER NAME] ♡`.
3. **Live Birthday Countdown**:
   - Calculates the exact countdown to the **next upcoming November 15** from the viewer's device date.
   - Glassmorphic countdown cards: **Days**, **Hours**, **Minutes**, **Seconds**.
   - Turns into a celebratory birthday message when November 15 arrives, and automatically targets the following year once passed.
4. **Photo Gallery (Personal Memories)**:
   - 6 editable memory cards with romantic captions.
   - Click to view in high-resolution Lightbox modal.
   - Elegant hover animations, rounded corners, and touch-friendly mobile layout.
5. **Interactive Love Letter Envelope**:
   - 3D envelope with a golden wax seal.
   - Tap the envelope or wax seal to watch the flap fold open and the warm ivory letter paper slide out with a heartfelt letter.
6. **One Last Little Surprise**:
   - Shimmering golden *"Tap to Reveal ♡"* button.
   - Triggers a heart-and-sparkle canvas celebration burst.
   - Reveals an intimate blessing with an *"Experience Again ↺"* replay button.
7. **Romantic Background Music Player**:
   - Subtle floating music toggle button at top-right (muted by default per browser standards).
   - Built-in Web Audio API romantic chime synthesizer (plays dreamy melody without needing any MP3 file!).
   - Also supports custom MP3: simply place your favorite song at `assets/music.mp3`.
8. **Graceful Fallbacks**:
   - If any image file is missing or renamed, the website automatically renders a custom inline luxury SVG placeholder with gold borders so the layout never breaks.

---

## ✏️ 3. How to Customize Her Name, Dates, & Text

All customizable content is located right at the **top of `script.js`** inside the `CONFIG` object:

```javascript
const CONFIG = {
  // 1. HER DETAILS
  herName: "Priya",        // <-- Type her name or nickname here!
  birthMonth: 11,          // <-- Month (11 = November)
  birthDay: 15,            // <-- Day of birthday (15)
  birthYear: 2006,         // <-- Her birth year
  
  // 2. HERO SECTION
  heroNameWish: "ADVANCE HAPPY BIRTHDAY, {NAME} ♡",
  heroCaption: "“A little early, but filled with so much love.”",
  
  // 3. PERSONAL LOVE LETTER
  letterGreeting: "Hey, you ♡",
  letterParagraphs: [
    "I know your birthday is still a little away, but I didn't want to wait until the actual day to remind you how special you are.",
    "I hope the coming year brings you beautiful memories, peaceful days, endless reasons to smile...",
    // Add your own custom paragraphs here!
  ],
  letterClosing: "Advance Happy Birthday! ♡",
  
  // 4. FINAL SURPRISE MESSAGE
  surpriseTitle: "“You deserve a year full of beautiful beginnings.”",
  surpriseMessage: "May every sunrise give you fresh hopes, every sunset leave you with peace...",
};
```

---

## 🖼️ 4. How to Replace the Photos

1. Open the folder: `love/assets/images/`.
2. Replace the photos with your own photos using the exact same filenames:
   - **`hero.jpg`** — Main portrait photo shown at the top.
   - **`photo-1.jpg`** — Memory 1
   - **`photo-2.jpg`** — Memory 2
   - **`photo-3.jpg`** — Memory 3
   - **`photo-4.jpg`** — Memory 4
   - **`photo-5.jpg`** — Memory 5
   - **`photo-6.jpg`** — Memory 6
3. *Tip:* Portrait orientation (3:4 aspect ratio) looks the most stunning. The website uses `object-fit: cover` to ensure faces are never stretched or distorted.

---

## 🚀 5. How to Deploy to GitHub Pages (Free & 100% Online)

You can publish this website online for free so you can send her a link via WhatsApp or Instagram!

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and log in.
2. Click the **+** (plus icon) in the top right and select **New repository**.
3. Name it (for example: `for-her` or `birthday-surprise`).
4. Set the repository to **Public**.
5. Click **Create repository**.

### Step 2: Upload Project Files
1. On the new repository page, click **Upload an existing file**.
2. Drag and drop all the files and folders from this folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/` (with all images inside `assets/images/`)
   - `README.md`
3. Click **Commit changes**.

### Step 3: Enable GitHub Pages
1. In your GitHub repository, click on **Settings** (gear icon at the top).
2. On the left sidebar, click on **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**.
5. Wait 1 to 2 minutes. GitHub will give you a live URL, like:
   `https://yourusername.github.io/for-her/`
6. Share that special link with her! 💖

---

## 📱 6. Mobile Responsiveness & Testing Checklist

The website was designed mobile-first specifically for **Vivo Android smartphones** (viewport width 360px–393px, height 780px–873px) as well as iPhones, tablets, and desktop displays.

### Verification Checklist:
- [x] **No Horizontal Scroll**: `overflow-x: hidden` with fluid grid and `clamp()` typography prevents any horizontal overflow.
- [x] **Countdown Grid Fit**: Fits cleanly in one row on 360px wide screens without wrapping numbers awkwardly.
- [x] **Touch Targets**: All interactive elements (Opening button, Wax Seal, Surprise Reveal, Audio toggle, Lightbox close) have touch areas of at least 44px × 44px.
- [x] **Safe Areas**: Padding accounts for mobile status bar notches (`env(safe-area-inset-top)`).
- [x] **Battery & Mobile Performance**: Ambient rose petal particles automatically pause when switching tabs or when the user scrolls away.
- [x] **Accessibility**: Respects `prefers-reduced-motion` for viewers who prefer no motion.
- [x] **Dynamic Countdown Accuracy**: Accurately counts down to November 15 based on the user's local clock.

---

*Made with all the care, elegance, and warmth she deserves.* ♡
