/**
 * ============================================================================
 * ADVANCE HAPPY BIRTHDAY — LUXURY ROMANTIC SURPRISE
 * Master Script & Ultra-Romantic Interactive Suite
 * Includes: Tap-to-Spawn Hearts, Typewriter Love Quotes, Infinite Love Meter,
 *           Polaroid Scrapbook, Romantic Audio Synth & Live Birthday Countdown
 * ============================================================================
 */

/* ==========================================================================
   EASY CONFIGURATION OBJECT (EDIT HER DETAILS HERE)
   ========================================================================== */
const CONFIG = {
  // 1. HER DETAILS
  herName: "My Dearest",          // Change to her real name or nickname (e.g., "Priya", "Ananya", "Sara")
  birthMonth: 11,                 // Month of birth: 11 = November (1 to 12)
  birthDay: 15,                   // Day of birth: 15
  birthYear: 2006,                // Her birth year: 2006
  
  // 2. HERO SECTION
  heroEyebrow: "ADVANCE BIRTHDAY CELEBRATION",
  heroTitle: "Your Special Day Is Almost Here…",
  heroSubtitle: "Some people make the world a little more beautiful just by being in it. This little surprise is for you.",
  heroNameWish: "ADVANCE HAPPY BIRTHDAY, {NAME} ♡",
  heroCaption: "“A little early, but filled with so much love.”",
  heroPhoto: "assets/images/hero.jpg",

  // 3. ROMANTIC TYPEWRITER PHRASES
  typewriterPhrases: [
    "You are the prettiest poem ever written ♡",
    "A smile that can heal any bad day in a second ✨",
    "Counting down every single heartbeat until your day 💕",
    "You don't need a crown, you are already royalty 👑",
    "Advance Happy Birthday to my favorite girl in the whole world 🌹"
  ],

  // 4. POLAROID MEMORY SCRAPBOOK (Her Real Photos)
  gallery: [
    {
      src: "assets/images/photo-1.jpg",
      caption: "A face that deserves a thousand smiles ♡",
      tag: "Memory 01",
      sticker: "🐾"
    },
    {
      src: "assets/images/photo-2.jpg",
      caption: "A little moment, a sweet memory ♡",
      tag: "Memory 02",
      sticker: "🌸"
    },
    {
      src: "assets/images/photo-3.jpg",
      caption: "Your smile makes ordinary moments special ✨",
      tag: "Memory 03",
      sticker: "🎂"
    },
    {
      src: "assets/images/photo-4.jpg",
      caption: "A little collection of beautiful things 👑",
      tag: "Memory 04",
      sticker: "✨"
    },
    {
      src: "assets/images/photo-5.jpg",
      caption: "If happiness had a picture… it's you ♡",
      tag: "Memory 05",
      sticker: "🌹"
    },
    {
      src: "assets/images/photo-6.jpg",
      caption: "Made with a little extra love 💕",
      tag: "Memory 06",
      sticker: "💖"
    }
  ],

  // 5. PERSONAL LOVE LETTER
  letterGreeting: "Hey, you ♡",
  letterParagraphs: [
    "I know your birthday is still a little away, but I didn't want to wait until the actual day to remind you how special you are.",
    "I hope the coming year brings you beautiful memories, peaceful days, endless reasons to smile, and all the little things your heart wishes for.",
    "You deserve happiness not just on your birthday, but on all the ordinary days in between, too.",
    "So here's a little advance wish, wrapped in a tiny website and sent with lots of warmth."
  ],
  letterClosing: "Advance Happy Birthday! ♡",

  // 6. ONE LAST LITTLE SURPRISE (Revealed on button click)
  surpriseTitle: "“You deserve a year full of beautiful beginnings.”",
  surpriseMessage: "May every sunrise give you fresh hopes, every sunset leave you with peace, and every moment in between remind you how deeply treasured and loved you truly are. Always keep smiling that smile that lights up entire rooms. ♡",

  // 7. FINAL CARD
  finalPreTitle: "Until Your Special Day…",
  finalTitle: "ADVANCE HAPPY BIRTHDAY ♡",
  finalQuote: "“May your next chapter be even more beautiful than the last.”",
  finalFooterText: "Made with all the love in the universe, just for you. ♡",

  // 8. MUSIC CONFIGURATION
  customMusicUrl: "assets/music.mp3"
};

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  applyConfigToDOM();
  initSplashScreen();
  initCountdown();
  initTapHeartsEffect();
  initTypewriter();
  initSendLoveButton();
  initReasonsCards();
  initScrapbookGallery();
  initEnvelope();
  initLoveMeter();
  initSurprise();
  initAmbientCanvas();
  initMusicPlayer();
  initBackToTop();
});

/**
 * 1. Populate dynamic text and attributes from CONFIG
 */
function applyConfigToDOM() {
  const heroNameEl = document.getElementById("hero-her-name");
  if (heroNameEl) {
    heroNameEl.textContent = CONFIG.heroNameWish.replace("{NAME}", CONFIG.herName);
  }

  const heroCaptionEl = document.getElementById("hero-caption-text");
  if (heroCaptionEl) {
    heroCaptionEl.textContent = CONFIG.heroCaption;
  }

  const heroImg = document.getElementById("hero-img");
  if (heroImg) {
    heroImg.src = CONFIG.heroPhoto;
    heroImg.onerror = () => handleImageFallback(heroImg, "Hero Portrait");
  }

  const letterGreetingEl = document.getElementById("letter-greeting-text");
  if (letterGreetingEl) letterGreetingEl.textContent = CONFIG.letterGreeting;

  const letterBodyEl = document.getElementById("letter-body-paragraphs");
  if (letterBodyEl && CONFIG.letterParagraphs) {
    letterBodyEl.innerHTML = CONFIG.letterParagraphs
      .map(p => `<p>${escapeHTML(p)}</p>`)
      .join("");
  }

  const letterSignEl = document.getElementById("letter-sign-text");
  if (letterSignEl) letterSignEl.textContent = CONFIG.letterClosing;

  const surpriseHeadline = document.getElementById("surprise-headline-text");
  if (surpriseHeadline) surpriseHeadline.textContent = CONFIG.surpriseTitle;

  const surpriseBody = document.getElementById("surprise-body-text");
  if (surpriseBody) surpriseBody.textContent = CONFIG.surpriseMessage;
}

/**
 * 2. Opening Splash Screen Logic
 */
function initSplashScreen() {
  const splashScreen = document.getElementById("splash-screen");
  const openBtn = document.getElementById("open-surprise-btn");
  const mainContent = document.getElementById("main-content");

  if (!splashScreen || !openBtn) return;

  openBtn.addEventListener("click", () => {
    // Erupt a shower of floating hearts
    triggerHeartCelebration(window.innerWidth / 2, window.innerHeight / 2);

    splashScreen.classList.add("fade-out");

    setTimeout(() => {
      splashScreen.style.display = "none";
      if (mainContent) mainContent.focus();
    }, 1200);
  });
}

/**
 * 3. Interactive Tap-To-Spawn Hearts Everywhere!
 * Touching or clicking anywhere on screen creates sweet floating hearts.
 */
function initTapHeartsEffect() {
  const container = document.getElementById("tap-hearts-container");
  if (!container) return;

  const heartIcons = ["💖", "💕", "💗", "✨", "🌸", "🌹", "💝"];

  function spawnHeart(x, y) {
    const heart = document.createElement("span");
    heart.className = "tap-floating-heart";
    heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    const randX = (Math.random() - 0.5) * 80;
    const randRot = (Math.random() - 0.5) * 60;
    heart.style.setProperty("--rand-x", `${randX}px`);
    heart.style.setProperty("--rand-rot", `${randRot}deg`);

    container.appendChild(heart);
    setTimeout(() => heart.remove(), 1400);
  }

  // Handle both click and touchstart
  window.addEventListener("pointerdown", (e) => {
    // Ignore clicks on buttons/inputs to avoid interfering with primary action
    const count = Math.floor(Math.random() * 2) + 2;
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        spawnHeart(e.clientX + (Math.random() - 0.5) * 20, e.clientY + (Math.random() - 0.5) * 20);
      }, i * 60);
    }
  }, { passive: true });
}

/**
 * 4. Animated Typewriter Love Quotes
 */
function initTypewriter() {
  const textEl = document.getElementById("typewriter-text");
  if (!textEl || !CONFIG.typewriterPhrases.length) return;

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentPhrase = CONFIG.typewriterPhrases[phraseIdx];

    if (!isDeleting) {
      charIdx++;
      textEl.textContent = currentPhrase.substring(0, charIdx);

      if (charIdx === currentPhrase.length) {
        // Pause at end of sentence
        setTimeout(() => { isDeleting = true; typeLoop(); }, 2400);
        return;
      }
    } else {
      charIdx--;
      textEl.textContent = currentPhrase.substring(0, charIdx);

      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % CONFIG.typewriterPhrases.length;
      }
    }

    const speed = isDeleting ? 30 : 65;
    setTimeout(typeLoop, speed);
  }

  typeLoop();
}

/**
 * 5. Send Love Button & Live Counter
 */
function initSendLoveButton() {
  const btn = document.getElementById("send-love-btn");
  const badge = document.getElementById("love-count-badge");
  if (!btn || !badge) return;

  let count = 100;

  btn.addEventListener("click", (e) => {
    count++;
    badge.textContent = `${count} ❤️`;

    // Burst hearts from button position
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    triggerSparkleBurst(cx, cy);

    // Audio chime note
    playChimeTone(587.33); // D5 note
  });
}

/**
 * 6. Reasons Why You Are Special Cards
 */
function initReasonsCards() {
  const cards = document.querySelectorAll(".reason-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const rect = card.getBoundingClientRect();
      triggerSparkleBurst(rect.left + rect.width / 2, rect.top + 50);
      playChimeTone(523.25); // C5 note
    });
  });
}

/**
 * 7. Live Birthday Countdown Calculator (Targets next November 15)
 */
function initCountdown() {
  const daysEl = document.getElementById("days-val");
  const hoursEl = document.getElementById("hours-val");
  const minutesEl = document.getElementById("minutes-val");
  const secondsEl = document.getElementById("seconds-val");
  const targetDateText = document.getElementById("target-date-text");
  const statusMsg = document.getElementById("countdown-status-msg");

  function getNextBirthdayDate() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let target = new Date(currentYear, CONFIG.birthMonth - 1, CONFIG.birthDay, 0, 0, 0, 0);

    const endOfBirthday = new Date(currentYear, CONFIG.birthMonth - 1, CONFIG.birthDay, 23, 59, 59, 999);
    if (now > endOfBirthday) {
      target = new Date(currentYear + 1, CONFIG.birthMonth - 1, CONFIG.birthDay, 0, 0, 0, 0);
    }
    return target;
  }

  function update() {
    const now = new Date();
    const target = getNextBirthdayDate();
    const diff = target - now;

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    if (targetDateText) {
      targetDateText.textContent = `${monthNames[CONFIG.birthMonth - 1]} ${CONFIG.birthDay}, ${target.getFullYear()}`;
    }

    const isBirthdayToday = (
      now.getMonth() === CONFIG.birthMonth - 1 &&
      now.getDate() === CONFIG.birthDay
    );

    if (isBirthdayToday) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      if (statusMsg) {
        statusMsg.innerHTML = "✨ 🎉 <strong>TODAY IS YOUR SPECIAL DAY! HAPPY BIRTHDAY!</strong> 🎂 ✨";
      }
      return;
    }

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");

    if (statusMsg) {
      statusMsg.textContent = days === 1 
        ? "Only 1 day left until your magical celebration! ♡"
        : `${days} beautiful days left to celebrate your presence in this world ♡`;
    }
  }

  update();
  setInterval(update, 1000);
}

/**
 * 8. Polaroid Scrapbook Gallery & Lightbox Modal
 */
function initScrapbookGallery() {
  const galleryGrid = document.getElementById("gallery-grid");
  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("modal-backdrop");

  if (!galleryGrid) return;

  // Render authentic polaroids with washi tape and stickers
  galleryGrid.innerHTML = CONFIG.gallery.map((item, index) => `
    <article class="polaroid-card" data-index="${index}" tabindex="0" role="button" aria-label="View photo: ${escapeHTML(item.caption)}">
      <div class="washi-tape" aria-hidden="true"></div>
      <div class="polaroid-sticker" aria-hidden="true">${escapeHTML(item.sticker || '💖')}</div>
      <div class="gallery-image-frame">
        <img src="${escapeHTML(item.src)}" 
             alt="${escapeHTML(item.caption)}" 
             loading="lazy" 
             class="gallery-img">
      </div>
      <p class="polaroid-caption">${escapeHTML(item.caption)}</p>
      <div class="polaroid-tag">${escapeHTML(item.tag || `Memory 0${index + 1}`)}</div>
    </article>
  `).join("");

  const cards = galleryGrid.querySelectorAll(".polaroid-card");
  cards.forEach(card => {
    const img = card.querySelector("img");
    if (img) {
      img.onerror = () => handleImageFallback(img, "Memory Photo");
    }

    const openCard = () => {
      const idx = parseInt(card.dataset.index, 10);
      const data = CONFIG.gallery[idx];
      if (data && modal && modalImg && modalCaption) {
        modalImg.src = data.src;
        modalCaption.textContent = data.caption;
        if (typeof modal.showModal === "function") {
          modal.showModal();
        } else {
          modal.setAttribute("open", "true");
        }
      }
    };

    card.addEventListener("click", openCard);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCard();
      }
    });
  });

  const closeModal = () => {
    if (modal) {
      if (typeof modal.close === "function") {
        modal.close();
      } else {
        modal.removeAttribute("open");
      }
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }
}

/**
 * 9. Interactive Love Letter Envelope
 */
function initEnvelope() {
  const envelope = document.getElementById("envelope");
  const waxSeal = document.getElementById("wax-seal");
  const hintText = document.getElementById("envelope-hint-text");

  if (!envelope) return;

  let isOpen = false;

  function toggleEnvelope() {
    isOpen = !isOpen;
    envelope.classList.toggle("open", isOpen);
    envelope.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      if (hintText) hintText.innerHTML = "<span>💌</span> Tap again to fold the letter back";
      const rect = envelope.getBoundingClientRect();
      triggerHeartCelebration(rect.left + rect.width / 2, rect.top + 60);
      playChimeTone(698.46); // F5 note
    } else {
      if (hintText) hintText.innerHTML = "<span>👆</span> Tap the envelope to open";
    }
  }

  envelope.addEventListener("click", (e) => {
    if (isOpen && e.target.closest(".letter-inner")) return;
    toggleEnvelope();
  });

  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleEnvelope();
    }
  });

  if (waxSeal) {
    waxSeal.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleEnvelope();
    });
  }
}

/**
 * 10. The Infinite Love Meter Logic
 */
function initLoveMeter() {
  const heartBtn = document.getElementById("charge-meter-btn");
  const progressFill = document.getElementById("meter-progress-fill");
  const pctText = document.getElementById("meter-pct-text");
  const statusText = document.getElementById("meter-status-text");

  if (!heartBtn || !progressFill) return;

  let loveLevel = 20;

  const messages = [
    { min: 0, max: 35, text: "A sweet little spark of love… 💕" },
    { min: 36, max: 70, text: "Growing warmer with every single heartbeat… 💖" },
    { min: 71, max: 99, text: "Almost bursting with pure love! Keep tapping! ✨" },
    { min: 100, max: 999, text: "100% MAXIMUM LOVE REACHED! 🎉💖" },
    { min: 1000, max: 999999, text: "ERROR: Out of bounds! My love for you is INFINITE! ♾️💕" }
  ];

  heartBtn.addEventListener("click", () => {
    if (loveLevel < 100) {
      loveLevel += 25;
      if (loveLevel > 100) loveLevel = 100;
    } else if (loveLevel === 100) {
      loveLevel = 1000;
    } else {
      loveLevel += 1000;
    }

    // Update fill
    const displayFill = Math.min(loveLevel, 100);
    progressFill.style.width = `${displayFill}%`;

    // Update status
    if (loveLevel <= 100) {
      pctText.textContent = `${loveLevel}% Love`;
    } else {
      pctText.innerHTML = `♾️ Infinite Love!`;
    }

    const matchedMsg = messages.find(m => loveLevel >= m.min && loveLevel <= m.max);
    if (matchedMsg && statusText) {
      statusText.textContent = matchedMsg.text;
    }

    // Trigger celebration when reaching 100 or infinite
    const rect = heartBtn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    if (loveLevel >= 100) {
      triggerHeartCelebration(cx, cy);
      playChimeTone(880.00); // A5 celebratory chime
    } else {
      triggerSparkleBurst(cx, cy);
      playChimeTone(659.25); // E5 chime
    }
  });
}

/**
 * 11. Interactive Surprise Reveal & Fireworks
 */
function initSurprise() {
  const revealBtn = document.getElementById("reveal-surprise-btn");
  const triggerWrapper = document.getElementById("surprise-trigger-wrapper");
  const revealedCard = document.getElementById("surprise-revealed-card");
  const replayBtn = document.getElementById("replay-surprise-btn");

  if (!revealBtn || !revealedCard) return;

  function reveal() {
    triggerWrapper.style.display = "none";
    revealedCard.classList.remove("hidden");

    const cx = window.innerWidth / 2;
    triggerHeartCelebration(cx, window.innerHeight / 2);
    playChimeTone(523.25);
  }

  function reset() {
    revealedCard.classList.add("hidden");
    triggerWrapper.style.display = "inline-block";
    revealBtn.focus();
  }

  revealBtn.addEventListener("click", reveal);
  if (replayBtn) replayBtn.addEventListener("click", reset);
}

/**
 * 12. Ambient Particle Canvas (Rose Petals & Floating Golden Hearts)
 */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const PARTICLE_COUNT = window.innerWidth < 600 ? 30 : 50;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  class AmbientParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      const rand = Math.random();
      this.type = rand > 0.6 ? "petal" : (rand > 0.25 ? "sparkle" : "heart");
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = this.type === "petal" ? Math.random() * 8 + 6 : (this.type === "heart" ? Math.random() * 6 + 4 : Math.random() * 3 + 1.5);
      this.speedY = this.type === "petal" ? Math.random() * 0.9 + 0.4 : Math.random() * 0.6 + 0.3;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.6;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1.5;
      this.opacity = this.type === "petal" ? Math.random() * 0.4 + 0.2 : Math.random() * 0.6 + 0.3;
      this.oscillationSpeed = Math.random() * 0.02 + 0.01;
      this.oscillationAngle = Math.random() * Math.PI * 2;
    }

    update() {
      this.y += this.speedY;
      this.oscillationAngle += this.oscillationSpeed;
      this.x += Math.sin(this.oscillationAngle) * 0.8 + this.speedX;
      this.rotation += this.rotationSpeed;

      if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;

      if (this.type === "petal") {
        ctx.fillStyle = "#E06D8A";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size, -this.size / 2, -this.size, this.size, 0, this.size * 1.4);
        ctx.bezierCurveTo(this.size, this.size, this.size, -this.size / 2, 0, 0);
        ctx.fill();
      } else if (this.type === "heart") {
        const s = this.size;
        ctx.fillStyle = "#FF8DA1";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-s / 2, -s / 2, -s, s / 3, 0, s);
        ctx.bezierCurveTo(s, s / 3, s / 2, -s / 2, 0, 0);
        ctx.fill();
      } else {
        ctx.fillStyle = "#F7E5B5";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#E8C98A";
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new AmbientParticle());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });

  animate();
}

/**
 * 13. Sparkle & Heart Celebration Confetti Canvas
 */
let burstCanvas, burstCtx;
function initBurstCanvas() {
  burstCanvas = document.getElementById("burst-canvas");
  if (!burstCanvas) return;
  burstCtx = burstCanvas.getContext("2d");
  burstCanvas.width = window.innerWidth;
  burstCanvas.height = window.innerHeight;
  window.addEventListener("resize", () => {
    if (burstCanvas) {
      burstCanvas.width = window.innerWidth;
      burstCanvas.height = window.innerHeight;
    }
  });
}

function triggerSparkleBurst(x, y) {
  if (!burstCanvas) initBurstCanvas();
  if (!burstCanvas || !burstCtx) return;

  const count = 30;
  const particles = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 6 + 2;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1,
      size: Math.random() * 4 + 2,
      color: Math.random() > 0.5 ? "#FF8DA1" : "#E8C98A",
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015
    });
  }

  function frame() {
    burstCtx.clearRect(0, 0, burstCanvas.width, burstCanvas.height);
    let active = false;
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15;
      p.alpha -= p.decay;
      if (p.alpha > 0) {
        active = true;
        burstCtx.save();
        burstCtx.globalAlpha = p.alpha;
        burstCtx.fillStyle = p.color;
        burstCtx.shadowBlur = 6;
        burstCtx.shadowColor = p.color;
        burstCtx.beginPath();
        burstCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        burstCtx.fill();
        burstCtx.restore();
      }
    }
    if (active) requestAnimationFrame(frame);
    else burstCtx.clearRect(0, 0, burstCanvas.width, burstCanvas.height);
  }
  frame();
}

function triggerHeartCelebration(cx, cy) {
  if (!burstCanvas) initBurstCanvas();
  if (!burstCanvas || !burstCtx) return;

  const count = window.innerWidth < 600 ? 60 : 100;
  const particles = [];
  const colors = ["#F5DDE5", "#E8C98A", "#E06D8A", "#F7E5B5", "#FF8DA1", "#FF5C8A"];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 10 + 3;
    particles.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      size: Math.random() * 11 + 6,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      isHeart: Math.random() > 0.3,
      alpha: 1,
      decay: Math.random() * 0.015 + 0.008
    });
  }

  function render() {
    burstCtx.clearRect(0, 0, burstCanvas.width, burstCanvas.height);
    let active = false;

    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22;
      p.vx *= 0.98;
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.alpha > 0) {
        active = true;
        burstCtx.save();
        burstCtx.translate(p.x, p.y);
        burstCtx.rotate((p.rotation * Math.PI) / 180);
        burstCtx.globalAlpha = p.alpha;
        burstCtx.fillStyle = p.color;

        if (p.isHeart) {
          const s = p.size;
          burstCtx.beginPath();
          burstCtx.moveTo(0, 0);
          burstCtx.bezierCurveTo(-s / 2, -s / 2, -s, s / 3, 0, s);
          burstCtx.bezierCurveTo(s, s / 3, s / 2, -s / 2, 0, 0);
          burstCtx.fill();
        } else {
          burstCtx.beginPath();
          burstCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          burstCtx.fill();
        }
        burstCtx.restore();
      }
    }

    if (active) {
      requestAnimationFrame(render);
    } else {
      burstCtx.clearRect(0, 0, burstCanvas.width, burstCanvas.height);
    }
  }
  render();
}

/**
 * 14. Gentle Romantic Chime Sound Effect (Web Audio)
 */
let sharedAudioCtx = null;
function playChimeTone(freq = 523.25) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!sharedAudioCtx) sharedAudioCtx = new AudioContextClass();
    if (sharedAudioCtx.state === "suspended") sharedAudioCtx.resume();

    const osc = sharedAudioCtx.createOscillator();
    const gain = sharedAudioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, sharedAudioCtx.currentTime);

    gain.gain.setValueAtTime(0, sharedAudioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.06, sharedAudioCtx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, sharedAudioCtx.currentTime + 0.9);

    osc.connect(gain);
    gain.connect(sharedAudioCtx.destination);

    osc.start();
    osc.stop(sharedAudioCtx.currentTime + 0.9);
  } catch (err) {
    // Audio context may require user gesture on some devices
  }
}

/**
 * 15. Romantic Background Music Player
 */
function initMusicPlayer() {
  const musicBtn = document.getElementById("music-toggle-btn");
  const bgAudio = document.getElementById("bg-audio");
  if (!musicBtn) return;

  let isPlaying = false;
  let synthInterval = null;
  let hasCustomFile = false;

  if (bgAudio && CONFIG.customMusicUrl) {
    bgAudio.src = CONFIG.customMusicUrl;
    bgAudio.addEventListener("canplaythrough", () => {
      hasCustomFile = true;
    });
    bgAudio.addEventListener("error", () => {
      hasCustomFile = false;
    });
  }

  function playSynthMelody() {
    if (!sharedAudioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) sharedAudioCtx = new AudioContextClass();
    }
    if (sharedAudioCtx && sharedAudioCtx.state === "suspended") {
      sharedAudioCtx.resume();
    }

    const notes = [349.23, 440.00, 523.25, 587.33, 698.46, 783.99, 880.00];

    function playNote(freq, duration = 1.4) {
      if (!sharedAudioCtx || sharedAudioCtx.state !== "running") return;
      const osc = sharedAudioCtx.createOscillator();
      const gain = sharedAudioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, sharedAudioCtx.currentTime);

      gain.gain.setValueAtTime(0, sharedAudioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.07, sharedAudioCtx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, sharedAudioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(sharedAudioCtx.destination);

      osc.start();
      osc.stop(sharedAudioCtx.currentTime + duration);
    }

    playNote(notes[0], 2.2);
    playNote(notes[2], 2.2);

    synthInterval = setInterval(() => {
      const freq = notes[Math.floor(Math.random() * notes.length)];
      playNote(freq, 1.8);
      if (Math.random() > 0.5) {
        setTimeout(() => {
          playNote(notes[Math.floor(Math.random() * notes.length)], 2.2);
        }, 300);
      }
    }, 1400);
  }

  function stopSynthMelody() {
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
    if (sharedAudioCtx && sharedAudioCtx.state === "running") {
      sharedAudioCtx.suspend();
    }
  }

  function toggleMusic() {
    isPlaying = !isPlaying;
    musicBtn.classList.toggle("playing", isPlaying);

    if (isPlaying) {
      musicBtn.setAttribute("title", "Pause music");
      if (hasCustomFile && bgAudio) {
        bgAudio.play().catch(() => playSynthMelody());
      } else {
        playSynthMelody();
      }
    } else {
      musicBtn.setAttribute("title", "Play romantic music");
      if (bgAudio) bgAudio.pause();
      stopSynthMelody();
    }
  }

  musicBtn.addEventListener("click", toggleMusic);
}

/**
 * 16. Back to top button
 */
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * 17. Graceful Fallback Image Generator
 */
function handleImageFallback(imgElement, label = "Photo") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#3B1026"/>
          <stop offset="60%" stop-color="#1D1028"/>
          <stop offset="100%" stop-color="#100817"/>
        </radialGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF5D6"/>
          <stop offset="50%" stop-color="#E8C98A"/>
          <stop offset="100%" stop-color="#B8934A"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <rect x="30" y="30" width="540" height="740" rx="16" fill="none" stroke="url(#gold)" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.4"/>
      <circle cx="300" cy="350" r="70" fill="none" stroke="url(#gold)" stroke-width="2"/>
      <text x="300" y="365" font-family="'Great Vibes', cursive, serif" font-size="64" fill="url(#gold)" text-anchor="middle">♡</text>
      <text x="300" y="470" font-family="'Playfair Display', Georgia, serif" font-size="24" fill="#F7E5B5" text-anchor="middle" letter-spacing="3">${escapeHTML(label)}</text>
    </svg>
  `;
  imgElement.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/**
 * Utility: HTML Escape for security
 */
function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
