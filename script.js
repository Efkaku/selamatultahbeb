/* =============================================================
   A LITTLE GARDEN THAT CHANGES WITH TIME
   ---------------------------------------------------------------
   Plain ES5+/ES2015 JavaScript. No libraries, no build step,
   no modules. Drop index.html / style.css / script.js straight
   into a GitHub Pages branch and it runs.

   ---------------------------------------------------------------
   EDITING GUIDE  (everything you need is inside CONFIG below)
   ---------------------------------------------------------------
   1. Ganti nama / umur .................. CONFIG.girlfriendName, CONFIG.birthdayAge
   2. Ganti pesan LETTER ................ CONFIG.birthdayMessage  (array of paragraphs)
   3. Ganti isi surat ................... CONFIG.letterMessage    (array of paragraphs)
   4. Ganti 26 alasan ................... CONFIG.reasons          (26 items)
   5. Ganti foto + caption .............. CONFIG.photos
   6. Ganti pesan penutup ............... CONFIG.finaleMessage
   7. Ganti musik ....................... CONFIG.music
   ============================================================= */


/* =============================================================
   CONFIG — the only block you really need to touch
   ============================================================= */

const CONFIG = {

  /* --- who is this for ---
     Nama lengkapnya Ferra Fadhillah, tapi dia lebih suka dipanggil Beb. */
  girlfriendName: "Beb",
  birthdayAge: 26,

  /* --- Section: A Little Message (array = new paragraph) --- */
  birthdayMessage: [
    "Happy birthday, sayang.",
    "Hari ini kamu resmi berusia 26 tahun. Semoga di umur yang baru ini, kamu semakin dekat dengan semua hal yang kamu impikan.",
    "Aku mungkin nggak selalu pandai menyusun kata, tapi aku ingin kamu tahu bahwa aku bersyukur bisa mengenalmu, menemani perjalananmu, dan membuat cerita bersama kamu.",
    "Semoga hari ini menjadi salah satu dari banyak hari bahagia yang akan kamu ingat nanti.",
    "Happy 26th birthday. ❤️"
  ],

  /* --- Section: The Letter (array = new paragraph) --- */
  letterTitle: "My Future Wife",
  letterMessage: [
    "Dear Pacarku Tercinta,",
    "Aku susah ngomong perasaan di depan orang. Kalau ketemu langsung, biasanya aku cuma bisa bilang \"ya iyalah\" lalu diam. Jadi aku nulis di sini, biar nggak ada yang kepotong.",
    "Nama lengkapmu Ferra Fadhillah, tapi yang paling sering keluar dari mulut aku cuma satu: Beb. Entah kenapa, tiap kali mengucapkannya aku jadi lebih tenang.",
    "Aku nggak punya rencana besar buat masa depan. Tapi aku pengen nemenin kamu ngerasain semua versi kamu — yang lagi semangat, yang lagi capek, dan yang lagi ngakak sendiri.",
    "Dari semua hari yang udah kita lewatin, aku paling suka yang paling biasa-biasa. Makan bareng, ketawa bareng, chat panjang yang isinya cuma complain kecil. Dari situ aku tahu, aku nggak butuh hari dramatis buat bikin aku senang.",
    "Terima kasih udah sabar sama aku. Terima kasih udah nemenin aku ngeliat diri aku sendiri dengan lebih baik. Foto-foto di halaman ini bukan yang paling bagus dari kita, tapi itu yang kadang buat aku mikir \"sudah sejauh ini ternyata\".",
    "Umur 26 itu masih awal, kok. Kamu masih punya banyak waktu buat nulis cerita yang jauh lebih panjang dari surat ini. Happy ulang tahun, Beb — semoga tahun ini lebih ringan, dan lebih banyak alasan buat senyum."
  ],

  /* --- Section: 26 Reasons (exactly 26 items) ---
     Boleh string:  "Senyummu"
     Boleh object:  { title: "Senyummu", note: "opsional, kecil & italic" } */
  reasons: [
    "Senyummu",
    "Caramu tertawa",
    "Kebiasaan kecilmu",
    "Caramu peduli pada orang-orang yang kamu sayangi",
    "Caramu menyebut namaku",
    "Suara kantukmu",
    "Semangatmu atas hal-hal kecil",
    "Lawakanmu yang jelek, tapi aku suka diam-diam",
    "Wajahmu saat sedang berkonsentrasi",
    "Kamu selalu sadar saat aku lelah",
    "Pesanan makanan favoritmu",
    "Cerita-ceritamu tentang harimu",
    "Caramu yang mudah memaafkan",
    "Hatimu yang lembut",
    "Caramu menggenggam tanganku",
    "Caramu membuat hari biasa jadi spesial",
    "Nyanyian acakmu di atas motor",
    "Caramu menyemangatiku bahkan saat aku lagi jatuh",
    "Kesabaranmu padaku",
    "Rupamu saat benar-benar bahagia",
    "Tarian kocakmu",
    "Caramu membuatku merasa di rumah",
    "Pendapatmu yang jujur, meski kadang sedikit perih",
    "Pesan kecilmu saat bosan",
    "Betapa indahnya kamu mencintai",
    "Kamu saja — orang favoritku"
  ],

  /* --- Section: Memory Gallery ---
     Taruh file fotonya di ./assets/photos/ lalu ubah src-nya.
     Relative path WAJIB (./assets/...) supaya aman di GitHub Pages.
     Urutannya kronologis, dari yang paling lama. Jumlah bebas —
     galeri ini grid, jadi 6/9/12 foto tetap rapi. */
  photos: [
    { src: "./assets/photos/photo-01.jpg", caption: "wal pertama kita" },
    { src: "./assets/photos/photo-02.jpg", caption: "hari yang nggak pernah aku lupa" },
    { src: "./assets/photos/photo-03.jpg", caption: "candaan dan tawa paling lucu" },
    { src: "./assets/photos/photo-04.jpg", caption: "foto random, tetap favorit" },
    { src: "./assets/photos/photo-05.jpg", caption: "momen kecil hari itu" },
    { src: "./assets/photos/photo-06.jpg", caption: "hari yang paling aku ingat" },
    { src: "./assets/photos/photo-07.jpg", caption: "selfie time, like always" },
    { src: "./assets/photos/photo-08.jpg", caption: "kita, dalam versi terbaik kita" },
    { src: "./assets/photos/photo-09.jpg", caption: "dan masih banyak cerita lain" }
  ],

  /* --- Section: Final Surprise --- */
  finaleMessage: "No matter where life takes us,\nI hope we keep finding our way back to each other. ❤️",

  /* --- Section: The Letter (cinematic sequence timing, ms) --- */
  cinematic: {
    goldenDelay: 300,     // surat dibuka -> langit jadi golden hour
    nightDelay: 3600,     // golden hour -> malam
    releaseAfter: 22000   // kembali ke tema waktu asli
  },

  /* --- Music --- */
  music: {
    src: "./assets/music/sparkle.mp3",
    defaultVolume: 0.35,
    rememberPreference: true
  },

  /* --- Garden density (lower = lebih ringan) --- */
  garden: {
    stars: 90,
    fireflies: 14,
    grassBlades: 46,
    flowers: 14,
    pollen: 12,
    bees: 3,
    butterflies: 3,
    finaleStars: 60,
    finaleFireflies: 9,
    finaleFlowers: 9
  }
};


/* =============================================================
   SMALL HELPERS
   ============================================================= */

const $  = (selector, scope) => (scope || document).querySelector(selector);
const $$ = (selector, scope) => Array.prototype.slice.call((scope || document).querySelectorAll(selector));

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function pickOne(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;              /* private mode / storage blocked */
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    /* nothing to do — preference simply is not remembered */
  }
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}


/* =============================================================
   1. THE SKY MODEL
   ---------------------------------------------------------------
   Sky colours are not swapped instantly. We keep a list of
   "keyframes" across the day and interpolate between them using
   the visitor's local clock, so the garden is always mid-transition
   exactly like the real sky outside.
   ============================================================= */

const SKY_KEYFRAMES = [
  { hour: 0.0,  top: "#080b26", mid: "#171a44", low: "#3b2a5e", night: 1.00 },
  { hour: 4.2,  top: "#131845", mid: "#32305f", low: "#5c4470", night: 0.86 },
  { hour: 5.6,  top: "#3c3b7e", mid: "#c9748b", low: "#ffb37e", night: 0.34 },
  { hour: 6.7,  top: "#5fa8dd", mid: "#a9d3ef", low: "#ffd9ae", night: 0.07 },
  { hour: 9.0,  top: "#4fa7e0", mid: "#8fcbf0", low: "#d7ecf7", night: 0.00 },
  { hour: 13.0, top: "#47a2e2", mid: "#86c8f2", low: "#cfe9f7", night: 0.00 },
  { hour: 16.4, top: "#54a8de", mid: "#9ad2ee", low: "#ffe3b4", night: 0.00 },
  { hour: 17.8, top: "#4b4d95", mid: "#e08a72", low: "#ffc98a", night: 0.13 },
  { hour: 18.9, top: "#33306e", mid: "#a4608c", low: "#f58f6e", night: 0.46 },
  { hour: 19.8, top: "#16173f", mid: "#2e2456", low: "#5b3668", night: 0.82 },
  { hour: 21.0, top: "#0a0e2c", mid: "#1b1c48", low: "#402c62", night: 1.00 },
  { hour: 24.0, top: "#080b26", mid: "#171a44", low: "#3b2a5e", night: 1.00 }
];

const PHASES = {
  sunrise: { label: "sunrise", themeColor: "#f4a58f" },
  day:     { label: "day",     themeColor: "#8fc8ee" },
  golden:  { label: "sunset",  themeColor: "#e08a72" },
  night:   { label: "night",   themeColor: "#151a3f" }
};

const SKY_TIMING = {
  sunriseFrom: 5.0, sunriseTo: 7.0,
  dayFrom: 7.0, dayTo: 17.0,
  goldenFrom: 17.0, goldenTo: 19.0,
  nightFrom: 19.0, nightTo: 5.0,
  sunRiseAt: 5.6, sunSetAt: 19.3,
  /* The moon rises while the sun is still setting, so the two bodies
     are never drawn on top of each other during sunset. */
  moonRiseAt: 17.5, moonSetAt: 7.5
};

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  return {
    r: parseInt(clean.substring(0, 2), 16),
    g: parseInt(clean.substring(2, 4), 16),
    b: parseInt(clean.substring(4, 6), 16)
  };
}

function rgbToHex(r, g, b) {
  const clampChannel = (value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0");
  return "#" + clampChannel(r) + clampChannel(g) + clampChannel(b);
}

function mixHex(fromHex, toHex, amount) {
  const a = hexToRgb(fromHex);
  const b = hexToRgb(toHex);
  return rgbToHex(
    a.r + (b.r - a.r) * amount,
    a.g + (b.g - a.g) * amount,
    a.b + (b.b - a.b) * amount
  );
}

/* Interpolates the sky palette for a fractional hour (0 – 24). */
function sampleSky(hour) {
  const time = ((hour % 24) + 24) % 24;

  let lower = SKY_KEYFRAMES[0];
  let upper = SKY_KEYFRAMES[SKY_KEYFRAMES.length - 1];

  for (let i = 0; i < SKY_KEYFRAMES.length - 1; i += 1) {
    if (time >= SKY_KEYFRAMES[i].hour && time <= SKY_KEYFRAMES[i + 1].hour) {
      lower = SKY_KEYFRAMES[i];
      upper = SKY_KEYFRAMES[i + 1];
      break;
    }
  }

  const span = upper.hour - lower.hour;
  const ratio = span === 0 ? 0 : (time - lower.hour) / span;

  return {
    gradient: "linear-gradient(to bottom, " +
      mixHex(lower.top, upper.top, ratio) + " 0%, " +
      mixHex(lower.mid, upper.mid, ratio) + " 52%, " +
      mixHex(lower.low, upper.low, ratio) + " 100%)",
    night: lower.night + (upper.night - lower.night) * ratio
  };
}

/* Decoration follows --night continuously. Text and panels must NOT:
   crossfading a foreground colour at the same rate as its own
   background walks both of them through mid-grey, and contrast
   collapses to almost nothing right in the middle of every sunset.
   So inside the dusk band we commit to the nearer theme instead of
   averaging. Someone opening the site at 19:30 therefore always gets
   a fully readable page, while a live sunset still crossfades over
   the length of the CSS transition. */
const CONTRAST_BAND = { from: 0.30, to: 0.52 };

function steppedNight(night) {
  if (night <= CONTRAST_BAND.from) { return 0; }
  if (night >= CONTRAST_BAND.to) { return 1; }
  return (night - CONTRAST_BAND.from) < (CONTRAST_BAND.to - night) ? 0 : 1;
}

function getPhaseName(hour) {
  const time = ((hour % 24) + 24) % 24;

  if (time >= SKY_TIMING.sunriseFrom && time < SKY_TIMING.sunriseTo) { return "sunrise"; }
  if (time >= SKY_TIMING.dayFrom && time < SKY_TIMING.dayTo) { return "day"; }
  if (time >= SKY_TIMING.goldenFrom && time < SKY_TIMING.goldenTo) { return "golden"; }
  return "night";
}

/* Sun and moon travel along a slow arc; both are always "somewhere". */
function getCelestialPositions(hour) {
  const time = ((hour % 24) + 24) % 24;

  let sunProgress = (time - SKY_TIMING.sunRiseAt) / (SKY_TIMING.sunSetAt - SKY_TIMING.sunRiseAt);
  sunProgress = clamp(sunProgress, 0, 1);

  let moonProgress;
  if (time >= SKY_TIMING.moonRiseAt) {
    moonProgress = (time - SKY_TIMING.moonRiseAt) / (SKY_TIMING.moonSetAt + 24 - SKY_TIMING.moonRiseAt);
  } else if (time <= SKY_TIMING.moonSetAt) {
    moonProgress = (time + 24 - SKY_TIMING.moonRiseAt) / (SKY_TIMING.moonSetAt + 24 - SKY_TIMING.moonRiseAt);
  } else {
    moonProgress = 1;
  }
  moonProgress = clamp(moonProgress, 0, 1);

  return {
    sun: {
      x: 8 + sunProgress * 84,
      y: 62 - Math.sin(sunProgress * Math.PI) * 47
    },
    moon: {
      x: 6 + moonProgress * 88,
      y: 58 - Math.sin(moonProgress * Math.PI) * 45
    }
  };
}

function getCurrentHour() {
  const now = new Date();
  return now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
}


/* =============================================================
   2. THEME ENGINE
   ============================================================= */

const theme = {
  lastPhase: null,
  shiftTimer: null
};

function updateTimeTheme() {
  const hour = getCurrentHour();
  const sky = sampleSky(hour);
  const positions = getCelestialPositions(hour);
  const phaseName = getPhaseName(hour);

  const root = document.documentElement;

  root.style.setProperty("--night", sky.night.toFixed(3));
  root.style.setProperty("--inkNight", String(steppedNight(sky.night)));
  root.style.setProperty("--panelNight", String(steppedNight(sky.night)));
  root.dataset.phase = phaseName;

  const skyElement = $("#sky");
  if (skyElement) { skyElement.style.backgroundImage = sky.gradient; }

  const sun = $("#sun");
  if (sun) {
    sun.style.setProperty("--x", positions.sun.x.toFixed(2) + "%");
    sun.style.setProperty("--y", positions.sun.y.toFixed(2) + "%");
  }

  const moon = $("#moon");
  if (moon) {
    moon.style.setProperty("--x", positions.moon.x.toFixed(2) + "%");
    moon.style.setProperty("--y", positions.moon.y.toFixed(2) + "%");
  }

  const fireflies = $("#fireflies");
  if (fireflies) { fireflies.classList.toggle("is-on", sky.night > 0.35); }

  updateThemeColor(phaseName);

  /* When the phase itself changes we stretch every CSS transition
     so the change reads as one slow, cinematic movement. */
  if (theme.lastPhase !== null && theme.lastPhase !== phaseName) {
    playPhaseShift();
  }
  theme.lastPhase = phaseName;
}

function updateThemeColor(phaseName) {
  const meta = $('meta[name="theme-color"]');
  if (meta) { meta.setAttribute("content", PHASES[phaseName].themeColor); }
}

function playPhaseShift() {
  const root = document.documentElement;

  root.classList.add("is-shifting");
  window.clearTimeout(theme.shiftTimer);
  theme.shiftTimer = window.setTimeout(function () {
    root.classList.remove("is-shifting");
  }, 9500);

  triggerShootingStar();
}

function initializeTheme() {
  /* First paint must land on the finished theme, not fade towards it. */
  document.documentElement.classList.add("no-fade");

  updateTimeTheme();

  /* Hand control back to the CSS transitions after the first frame. */
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      document.documentElement.classList.remove("no-fade");
    });
  });

  /* Keep checking: leave the tab open across sunset and the garden
     quietly changes by itself. */
  window.setInterval(updateTimeTheme, 30000);

  /* Also refresh immediately when the tab becomes visible again. */
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) { updateTimeTheme(); }
  });
}


/* =============================================================
   3. GARDEN CONTENT GENERATORS
   ============================================================= */

const FLOWER_HUES = [344, 352, 8, 28, 46, 282, 300, 318, 12, 62];

function createStars(container, count, areaBottom) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    star.className = "star is-lit";
    star.style.left = randomBetween(1, 99).toFixed(2) + "%";
    star.style.top = randomBetween(1, areaBottom).toFixed(2) + "%";
    star.style.setProperty("--i", i % 40);
    star.style.setProperty("--o", randomBetween(0.35, 1).toFixed(2));
    star.style.setProperty("--tw", randomBetween(2.8, 6.5).toFixed(2) + "s");
    star.style.setProperty("--twd", randomBetween(0, 5).toFixed(2) + "s");
    fragment.appendChild(star);
  }

  container.appendChild(fragment);
}

function createFireflies(container, count, areaBottom) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const fly = document.createElement("span");
    fly.className = "firefly";
    fly.style.setProperty("--x", randomBetween(3, 97).toFixed(2) + "%");
    fly.style.setProperty("--b", randomBetween(2, areaBottom).toFixed(2) + "%");
    fly.style.setProperty("--dur", randomBetween(7, 14).toFixed(2) + "s");
    fly.style.setProperty("--dly", randomBetween(0, 6).toFixed(2) + "s");
    fragment.appendChild(fly);
  }

  container.appendChild(fragment);
}

function createGrass(container, count) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const blade = document.createElement("span");
    blade.className = "blade";
    blade.style.setProperty("--x", randomBetween(0, 100).toFixed(2) + "%");
    blade.style.setProperty("--h", randomBetween(16, 46).toFixed(0) + "px");
    blade.style.setProperty("--r", randomBetween(-11, 11).toFixed(1) + "deg");
    blade.style.setProperty("--dur", randomBetween(3.4, 6.6).toFixed(2) + "s");
    blade.style.setProperty("--dly", randomBetween(0, 4).toFixed(2) + "s");
    fragment.appendChild(blade);
  }

  container.appendChild(fragment);
}

/* One flower = stem + leaves + head with petals. Reused by the
   ambient garden and by the finale night garden. */
function createFlower(container, options) {
  const settings = options || {};
  const petalCount = settings.petals || 6;

  const flower = document.createElement("div");
  flower.className = "flower";

  flower.style.setProperty("--x", (settings.x !== undefined ? settings.x : randomBetween(2, 98)).toFixed(2) + "%");
  flower.style.setProperty("--h", (settings.height || randomBetween(46, 96)).toFixed(0) + "px");
  flower.style.setProperty("--hue", pickOne(FLOWER_HUES));
  flower.style.setProperty("--i", settings.index || 0);
  flower.style.setProperty("--dur", randomBetween(3.8, 6.4).toFixed(2) + "s");
  flower.style.setProperty("--dly", randomBetween(0, 3.2).toFixed(2) + "s");

  const sway = document.createElement("div");
  sway.className = "flower-sway";

  const stem = document.createElement("span");
  stem.className = "flower-stem";
  sway.appendChild(stem);

  const leaves = settings.leaves === undefined ? 2 : settings.leaves;
  for (let i = 0; i < leaves; i += 1) {
    const leaf = document.createElement("span");
    leaf.className = "leaf";
    leaf.style.bottom = "calc(var(--h) * " + (0.25 + i * 0.22).toFixed(2) + ")";
    /* Direction only — the scale is owned by CSS so the leaf can grow. */
    leaf.style.setProperty("--dir", i % 2 === 0 ? "1" : "-1");
    leaf.style.setProperty("--leaf-x", i % 2 === 0 ? "1px" : "-14px");
    sway.appendChild(leaf);
  }

  const head = document.createElement("span");
  head.className = "flower-head";

  for (let p = 0; p < petalCount; p += 1) {
    const petal = document.createElement("i");
    petal.className = "petal";
    petal.style.setProperty("--p", p);
    head.appendChild(petal);
  }

  const core = document.createElement("i");
  core.className = "flower-core";
  head.appendChild(core);

  sway.appendChild(head);
  flower.appendChild(sway);
  container.appendChild(flower);

  return flower;
}

function createFlowers(container, count, areaBottom) {
  const flowers = [];
  for (let i = 0; i < count; i += 1) {
    flowers.push(createFlower(container, {
      x: randomBetween(1, 99),
      height: randomBetween(42, 104),
      index: i % 12,
      petals: 6
    }));
  }
  return flowers;
}

function createPollen(container, count) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const mote = document.createElement("span");
    mote.className = "mote";
    mote.style.setProperty("--x", randomBetween(2, 98).toFixed(2) + "%");
    mote.style.setProperty("--b", randomBetween(0, 30).toFixed(2) + "%");
    mote.style.setProperty("--dx", randomBetween(-70, 70).toFixed(0) + "px");
    mote.style.setProperty("--dur", randomBetween(13, 24).toFixed(2) + "s");
    mote.style.setProperty("--dly", randomBetween(0, 12).toFixed(2) + "s");
    fragment.appendChild(mote);
  }

  container.appendChild(fragment);
}

function createBee() {
  const bee = document.createElement("div");
  bee.className = "creature bee";
  bee.innerHTML =
    '<span class="bee-wing wl"></span>' +
    '<span class="bee-body"></span>' +
    '<span class="bee-wing wr"></span>';

  bee.style.top = randomBetween(26, 66).toFixed(1) + "%";
  bee.style.setProperty("--dur", randomBetween(26, 44).toFixed(1) + "s");
  bee.style.setProperty("--dly", randomBetween(-30, 0).toFixed(1) + "s");

  return bee;
}

function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.className = "creature butterfly";
  butterfly.innerHTML =
    '<span class="bf-wing l"></span>' +
    '<span class="bf-body"></span>' +
    '<span class="bf-wing r"></span>';

  butterfly.style.top = randomBetween(30, 74).toFixed(1) + "%";
  butterfly.style.setProperty("--hue", pickOne([318, 330, 348, 288, 42]));
  butterfly.style.setProperty("--dur", randomBetween(30, 52).toFixed(1) + "s");
  butterfly.style.setProperty("--dly", randomBetween(-20, 0).toFixed(1) + "s");

  return butterfly;
}

function initializeGarden() {
  const reduced = prefersReducedMotion();

  createStars($("#stars"), CONFIG.garden.stars, 68);
  createFireflies($("#fireflies"), CONFIG.garden.fireflies, 62);
  createGrass($("#grass"), CONFIG.garden.grassBlades);
  createPollen($("#pollen"), CONFIG.garden.pollen);

  const flowers = createFlowers($("#flowers"), CONFIG.garden.flowers, 0);
  growFlowers(flowers, 380);

  const creatures = $("#creatures");
  for (let i = 0; i < CONFIG.garden.bees; i += 1) {
    creatures.appendChild(createBee());
  }
  for (let i = 0; i < CONFIG.garden.butterflies; i += 1) {
    creatures.appendChild(createButterfly());
  }
  if (reduced) {
    creatures.style.opacity = "0.4";
  }

  /* A random shooting star now and then at night. */
  window.setInterval(function () {
    const night = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--night")) || 0;
    if (night > 0.4 && Math.random() > 0.45) {
      triggerShootingStar();
    }
  }, 22000);
}

function growFlowers(flowers, delay) {
  window.setTimeout(function () {
    flowers.forEach(function (flower) { flower.classList.add("is-grown"); });
  }, delay || 0);
}

function triggerShootingStar() {
  const star = $("#ambientShootingStar");
  if (!star) { return; }

  star.classList.remove("is-flying");
  /* force reflow so the animation can restart */
  void star.offsetWidth;
  star.classList.add("is-flying");

  window.setTimeout(function () { star.classList.remove("is-flying"); }, 2200);
}


/* =============================================================
   4. PAGE CONTENT FROM CONFIG
   ============================================================= */

function fillText(element, paragraphs) {
  element.innerHTML = "";
  paragraphs.forEach(function (text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    element.appendChild(paragraph);
  });
}

function renderReasons() {
  const grid = $("#reasonsGrid");
  const list = CONFIG.reasons.slice(0, 26);
  const fragment = document.createDocumentFragment();

  list.forEach(function (reason, index) {
    const title = typeof reason === "string" ? reason : reason.title;
    const note = typeof reason === "string" ? "" : (reason.note || "");

    const card = document.createElement("article");
    card.className = "reason-card";
    card.setAttribute("role", "listitem");
    card.style.setProperty("--i", index);
    card.style.setProperty("--hue", FLOWER_HUES[index % FLOWER_HUES.length]);

    const number = document.createElement("span");
    number.className = "reason-num";
    number.setAttribute("aria-hidden", "true");
    number.textContent = String(index + 1).padStart(2, "0");

    const text = document.createElement("p");
    text.className = "reason-text";
    text.innerHTML = "<span class=\"visually-hidden\">Alasan " + (index + 1) + ": </span>" + escapeHtml(title);

    if (note) {
      const small = document.createElement("span");
      small.className = "reason-note";
      small.textContent = note;
      text.appendChild(small);
    }

    card.appendChild(number);
    card.appendChild(text);
    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderGallery() {
  const scrapbook = $("#scrapbook");
  const fragment = document.createDocumentFragment();

  CONFIG.photos.forEach(function (photo, index) {
    const card = document.createElement("figure");
    card.className = "photo-card" + (index % 3 === 0 ? " taped" : "");
    card.style.setProperty("--i", index);
    card.style.setProperty("--hue", FLOWER_HUES[index % FLOWER_HUES.length]);
    card.style.setProperty("--tilt", randomBetween(-5.5, 5.5).toFixed(1) + "deg");
    card.style.setProperty("--lift", randomBetween(0, 22).toFixed(0) + "px");

    const frame = document.createElement("div");
    frame.className = "photo-frame";
    frame.style.setProperty("--ph", 300 + ((index * 37) % 110));

    /* Placeholder sits underneath, so a missing file never shows a
       broken image icon — it just stays pretty. */
    const fallback = document.createElement("div");
    fallback.className = "photo-fallback";
    fallback.innerHTML = "<span>add " + (index + 1) + "</span>";
    frame.appendChild(fallback);

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.alt || (photo.caption ? photo.caption + " — foto kita berdua" : "Foto kita berdua");
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", function () {
      /* No file yet -> keep the pretty pastel placeholder instead of
         showing a broken image icon. */
      image.classList.add("is-missing");
    });
    frame.appendChild(image);

    const caption = document.createElement("figcaption");
    caption.className = "photo-caption";
    caption.textContent = photo.caption;

    card.appendChild(frame);
    card.appendChild(caption);
    fragment.appendChild(card);
  });

  scrapbook.appendChild(fragment);
}

function renderContent() {
  const name = CONFIG.girlfriendName;
  const age = String(CONFIG.birthdayAge);

  $$(".js-name").forEach(function (node) { node.textContent = name; });
  ["#heroAge", "#heroKickerAge", "#reasonsCount", "#finaleAge", "#footerAge"].forEach(function (selector) {
    const node = $(selector);
    if (node) { node.textContent = age; }
  });

  /* `[NAMA]` typed straight into the CONFIG copy is replaced too, so you
     never have to hunt for the placeholder. */
  const named = function (value) {
    const swap = function (text) { return String(text).replace(/\[NAMA\]/g, name); };
    return Array.isArray(value) ? value.map(swap) : swap(value);
  };

  const messageBody = $("#messageBody");
  if (messageBody) { fillText(messageBody, named(CONFIG.birthdayMessage)); }

  const letterBody = $("#letterBody");
  if (letterBody) { fillText(letterBody, named(CONFIG.letterMessage)); }

  const letterTitle = $("#letterPaperTitle");
  if (letterTitle && CONFIG.letterTitle) { letterTitle.textContent = CONFIG.letterTitle; }

  const finaleText = $("#finaleMessageText");
  if (finaleText) {
    finaleText.innerHTML = escapeHtml(named(CONFIG.finaleMessage)).replace(/\n/g, "<br>");
  }

  renderReasons();
  renderGallery();
}


/* =============================================================
   5. SCROLL REVEAL
   ============================================================= */

function initializeScrollAnimations() {
  const reveals = $$("[data-reveal]");
  reveals.forEach(function (node, index) {
    node.style.setProperty("--i", Math.min(index, 6));
  });

  const groups = $$("#reasonsGrid").concat($$("#scrapbook")).concat($$(".hero-inner"));
  const targets = reveals.concat(groups);

  function showAll() {
    targets.forEach(function (node) { node.classList.add("is-visible"); });
  }

  if (!("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

  targets.forEach(function (node) { observer.observe(node); });

  /* Safety net for fast scrolling: a flick, or the End key, can move a
     section right past the observer's threshold between two frames and
     it would stay invisible. Once per frame we confirm anything already
     at or above the fold has been shown. */
  let pending = targets.slice();
  let scheduled = false;

  function sweep() {
    scheduled = false;
    if (!pending.length) { return; }

    const limit = window.innerHeight * 0.92;
    const stillWaiting = [];

    pending.forEach(function (node) {
      if (node.getBoundingClientRect().top < limit) {
        node.classList.add("is-visible");
        observer.unobserve(node);
      } else {
        stillWaiting.push(node);
      }
    });

    pending = stillWaiting;
  }

  function onScroll() {
    if (scheduled || !pending.length) { return; }
    scheduled = true;
    window.requestAnimationFrame(sweep);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  sweep();
}


/* =============================================================
   6. HERO BUTTON
   ============================================================= */

function initializeHero() {
  const startButton = $("#startJourney");
  const messageSection = $("#message");
  const hint = $("#scrollHint");

  if (startButton && messageSection) {
    startButton.addEventListener("click", function () {
      scrollToSection(messageSection);
    });
  }

  if (hint) {
    window.addEventListener("scroll", function () {
      hint.classList.toggle("is-hidden", window.scrollY > 120);
    }, { passive: true });
  }
}

function scrollToSection(target) {
  const reduce = prefersReducedMotion();
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}


/* =============================================================
   7. THE LETTER  (envelope + Golden Hour cinematic)
   ============================================================= */

const letter = {
  section: null,
  envelope: null,
  button: null,
  paper: null,
  timers: []
};

function initializeLetter() {
  letter.section = $("#letter");
  letter.envelope = $("#envelope");
  letter.button = $("#envelopeBtn");
  letter.paper = $("#letterPaper");

  const closeButton = $("#letterClose");

  if (letter.button) {
    letter.button.addEventListener("click", openLetter);
  }
  if (closeButton) {
    closeButton.addEventListener("click", closeLetter);
  }

  /* Escape closes the letter and hands focus back to the envelope. */
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") { return; }
    if (!letter.envelope || !letter.envelope.classList.contains("is-open")) { return; }
    event.preventDefault();
    closeLetter();
  });
}

function clearLetterTimers() {
  letter.timers.forEach(function (timerId) { window.clearTimeout(timerId); });
  letter.timers = [];
}

function openLetter() {
  if (!letter.envelope || letter.envelope.classList.contains("is-open")) { return; }

  clearLetterTimers();
  letter.envelope.classList.add("is-open");
  if (letter.section) { letter.section.classList.add("is-reading"); }
  letter.button.setAttribute("aria-expanded", "true");
  letter.button.setAttribute("aria-label", "Surat sudah dibuka");

  playGoldenHourSequence();

  /* Once the paper has finished growing: put it on screen (on a phone
     it lives below the fold) and hand it the focus for keyboard users. */
  letter.timers.push(window.setTimeout(function () {
    if (letter.paper) { letter.paper.focus({ preventScroll: true }); }
    revealInViewport(letter.paper, "smooth");
  }, 2600));
}

/* Scrolls just enough to make `element` fully visible, centred when it
   fits and top-aligned when it does not. Does nothing if it already is. */
function revealInViewport(element, behavior) {
  if (!element) { return; }

  const rect = element.getBoundingClientRect();
  if (rect.top >= 8 && rect.bottom <= window.innerHeight - 8) { return; }

  const offset = Math.max(16, (window.innerHeight - rect.height) / 2);
  const target = Math.max(0, window.scrollY + rect.top - offset);

  window.scrollTo({
    top: target,
    behavior: (behavior === "smooth" && !prefersReducedMotion()) ? "smooth" : "auto"
  });
}

function closeLetter() {
  if (!letter.envelope || !letter.envelope.classList.contains("is-open")) { return; }

  clearLetterTimers();
  letter.envelope.classList.remove("is-open");
  if (letter.section) { letter.section.classList.remove("is-reading"); }
  letter.button.setAttribute("aria-expanded", "false");
  letter.button.setAttribute("aria-label", "Buka surat ulang tahun");
  stopGoldenHourSequence();
  letter.button.focus({ preventScroll: true });
  /* The page just got shorter — put the envelope back on screen. */
  revealInViewport(letter.envelope, "auto");
}

/* Day -> Golden Hour -> Night, played gently behind the letter. */
function playGoldenHourSequence() {
  if (!letter.section) { return; }

  letter.section.dataset.step = "golden";
  document.body.dataset.cinematic = "golden";

  letter.timers.push(window.setTimeout(function () {
    letter.section.dataset.step = "night";
    document.body.dataset.cinematic = "night";
  }, CONFIG.cinematic.nightDelay));

  letter.timers.push(window.setTimeout(function () {
    stopGoldenHourSequence();
  }, CONFIG.cinematic.releaseAfter));
}

function stopGoldenHourSequence() {
  if (!letter.section) { return; }
  letter.section.dataset.step = "day";
  delete document.body.dataset.cinematic;
}


/* =============================================================
   8. MUSIC
   ---------------------------------------------------------------
   The <audio> tag already points at the file with preload="auto", so
   the track is buffering while the page paints and the first play()
   has nothing to wait for. We try to start on load (browsers allow it
   on a returning visit) and, if the browser refuses, start on the
   visitor's very first gesture instead.
   ============================================================= */

const music = {
  element: null,
  button: null,
  icon: null,
  text: null,
  panel: null,
  volumeInput: null,
  note: null,
  available: true,
  isPlaying: false,
  gestureArmed: false
};

function initializeMusic() {
  music.element = $("#bgm");
  music.button = $("#musicBtn");
  music.icon = $("#musicIcon");
  music.text = $("#musicText");
  music.panel = $("#musicPanel");
  music.volumeInput = $("#musicVolume");
  music.note = $("#musicNote");

  if (!music.element || !music.button) { return; }

  const storedVolume = readStorage("bg26:volume");
  const initialVolume = storedVolume !== null
    ? clamp(parseInt(storedVolume, 10) / 100, 0, 1)
    : CONFIG.music.defaultVolume;

  music.element.volume = initialVolume;
  if (music.volumeInput) { music.volumeInput.value = Math.round(initialVolume * 100); }

  music.element.addEventListener("error", handleMusicUnavailable);
  music.element.addEventListener("ended", function () { setMusicState(false); });
  music.element.addEventListener("playing", function () { setMusicState(true); });

  music.button.addEventListener("click", function () {
    if (!music.available) { return; }
    if (music.element.paused) { startMusic(); } else { stopMusic(); }
  });

  const volumeToggle = $("#musicVolToggle");
  if (volumeToggle && music.panel) {
    volumeToggle.addEventListener("click", function () {
      const willOpen = music.panel.hasAttribute("hidden");
      if (willOpen) {
        music.panel.removeAttribute("hidden");
        volumeToggle.setAttribute("aria-expanded", "true");
      } else {
        music.panel.setAttribute("hidden", "");
        volumeToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (music.volumeInput) {
    music.volumeInput.addEventListener("input", function () {
      const next = clamp(parseInt(music.volumeInput.value, 10) / 100, 0, 1);
      music.element.volume = next;
      if (CONFIG.music.rememberPreference) { writeStorage("bg26:volume", String(Math.round(next * 100))); }
    });
  }

  /* Start right away unless the visitor turned the music off before.
     Autoplay may be refused — that is normal, and armGestureAutoplay()
     picks it up on their first tap, click or scroll. */
  if (readStorage("bg26:music") !== "off") {
    startMusic(true);
  }
}

/* Called when the browser blocked an autoplay attempt: the next touch
   anywhere on the page starts the music instead. */
function armGestureAutoplay() {
  if (music.gestureArmed || !music.available) { return; }
  music.gestureArmed = true;

  const events = ["pointerdown", "mousedown", "touchstart", "keydown", "wheel", "scroll"];

  function disarm() {
    music.gestureArmed = false;
    events.forEach(function (name) {
      window.removeEventListener(name, onGesture, true);
    });
  }

  function onGesture(event) {
    /* Reaching for the music controls? Let the button itself decide. */
    const controls = $(".music");
    if (controls && event.target && controls.contains(event.target)) {
      disarm();
      return;
    }

    disarm();

    if (!music.available || music.isPlaying) { return; }
    if (CONFIG.music.rememberPreference && readStorage("bg26:music") === "off") { return; }
    startMusic(true);
  }

  events.forEach(function (name) {
    window.addEventListener(name, onGesture, { capture: true, passive: true });
  });
}

function startMusic(silent) {
  if (!music.available) { return; }

  /* The tag ships with the src so the file is already buffering.
     CONFIG stays authoritative if you repointed it. */
  const wanted = CONFIG.music.src;
  if (music.element.getAttribute("src") !== wanted) {
    music.element.src = wanted;
    music.element.load();
  }

  const promise = music.element.play();

  if (promise && typeof promise.catch === "function") {
    promise.catch(function () {
      setMusicState(false);
      armGestureAutoplay();
    });
  }

  if (CONFIG.music.rememberPreference) { writeStorage("bg26:music", "on"); }

  /* Open the volume panel on first successful play so the
     "Music" control is not a dead end. */
  if (music.panel && !music.panel.hasAttribute("hidden")) { return; }
  if (!silent) { openVolumePanel(); }
}

function stopMusic() {
  music.element.pause();
  setMusicState(false);
  if (CONFIG.music.rememberPreference) { writeStorage("bg26:music", "off"); }
}

function openVolumePanel() {
  if (!music.panel) { return; }
  music.panel.removeAttribute("hidden");
  const volumeToggle = $("#musicVolToggle");
  if (volumeToggle) { volumeToggle.setAttribute("aria-expanded", "true"); }
}

function setMusicState(playing) {
  music.isPlaying = playing;
  music.button.classList.toggle("is-playing", playing);
  music.button.setAttribute("aria-pressed", playing ? "true" : "false");
  music.button.setAttribute("aria-label", playing ? "Matikan musik latar" : "Putar musik latar");
  music.icon.textContent = playing ? "🔊" : "🔇";
  music.text.textContent = playing ? "Music on" : "Music";
}

function handleMusicUnavailable() {
  music.available = false;
  setMusicState(false);

  /* Never try to resume this track again in this browser. */
  if (CONFIG.music.rememberPreference) {
    writeStorage("bg26:music", "off");
  }

  music.button.classList.add("is-unavailable");
  music.button.setAttribute("aria-disabled", "true");
  music.button.setAttribute("title", "Musik belum tersedia");
  music.button.setAttribute("aria-label", "Musik belum tersedia");

  if (music.note) {
    music.note.textContent = "Musik belum ada — taruh file mp3 di assets/music/sparkle.mp3";
    music.note.classList.add("is-error");
    music.note.classList.remove("is-ok");
  }
}


/* =============================================================
   9. FINAL SURPRISE
   ============================================================= */

const finale = {
  section: null,
  button: null,
  message: null,
  firing: false
};

function initializeFinale() {
  finale.section = $("#finale");
  finale.button = $("#surpriseBtn");
  finale.message = $("#finaleMessage");

  buildFinaleScene();
  observeFinale();

  if (finale.button) {
    finale.button.addEventListener("click", fireSurprise);
  }
}

function buildFinaleScene() {
  const starLayer = $("#finaleStars");
  const fireflyLayer = $("#finaleFireflies");
  const flowerLayer = $("#finaleFlowers");

  if (starLayer) { createStars(starLayer, CONFIG.garden.finaleStars, 90); }
  if (fireflyLayer) { createFireflies(fireflyLayer, CONFIG.garden.finaleFireflies, 34); }

  const flowers = flowerLayer
    ? createFlowers(flowerLayer, CONFIG.garden.finaleFlowers, 0)
    : [];

  finale.flowers = flowers;
}

function observeFinale() {
  if (!finale.section) { return; }

  if (!("IntersectionObserver" in window)) {
    finale.section.classList.add("finale-scene-ready");
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting || entry.target.classList.contains("finale-scene-ready")) { return; }

      entry.target.classList.add("finale-scene-ready");
      growFlowers(finale.flowers || [], 400);

      /* shooting star, a few seconds after the words appear */
      window.setTimeout(function () {
        const star = $("#finaleShooting");
        if (star) {
          star.classList.remove("is-flying");
          void star.offsetWidth;
          star.classList.add("is-flying");
        }
      }, 4200);

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.25 });

  observer.observe(finale.section);
}

function fireSurprise() {
  if (finale.firing) { return; }
  finale.firing = true;

  const burst = document.createElement("div");
  burst.className = "glow-burst";
  document.body.appendChild(burst);
  window.setTimeout(function () { burst.remove(); }, 2600);

  spawnConfetti(46);
  spawnHearts(22);

  finale.message.classList.add("is-shown");
  finale.button.disabled = true;
  finale.button.style.opacity = ".55";
  finale.button.style.pointerEvents = "none";
}

function spawnConfetti(amount) {
  const layer = $("#confettiLayer");
  if (!layer || prefersReducedMotion()) { return; }

  const colors = ["#f9b3ac", "#f7c873", "#c9b6ef", "#9dc48f", "#ffd8d2", "#ffffff"];

  for (let i = 0; i < amount; i += 1) {
    const bit = document.createElement("span");
    bit.className = "confetti-bit";
    bit.style.left = randomBetween(2, 96).toFixed(2) + "%";
    bit.style.setProperty("--c", pickOne(colors));
    bit.style.setProperty("--dx", randomBetween(-120, 120).toFixed(0) + "px");
    bit.style.setProperty("--rot", randomBetween(-720, 720).toFixed(0) + "deg");
    bit.style.setProperty("--dur", randomBetween(2.6, 4.6).toFixed(2) + "s");
    bit.style.animationDelay = randomBetween(0, 0.9).toFixed(2) + "s";
    layer.appendChild(bit);

    window.setTimeout((function (node) {
      return function () { node.remove(); };
    })(bit), 6000);
  }
}

function spawnHearts(amount) {
  const layer = $("#heartsLayer");
  if (!layer || prefersReducedMotion()) { return; }

  const glyphs = ["❤", "💗", "💕", "♥", "❣"];

  for (let i = 0; i < amount; i += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = pickOne(glyphs);
    heart.style.left = randomBetween(2, 96).toFixed(2) + "%";
    heart.style.setProperty("--c", pickOne(["#ff8f9e", "#ffb3c6", "#f7a8c4", "#ffd1d9"]));
    heart.style.setProperty("--size", randomBetween(14, 32).toFixed(0) + "px");
    heart.style.setProperty("--dx", randomBetween(-90, 90).toFixed(0) + "px");
    heart.style.setProperty("--dur", randomBetween(4, 7.5).toFixed(2) + "s");
    heart.style.animationDelay = randomBetween(0, 1.6).toFixed(2) + "s";
    layer.appendChild(heart);

    window.setTimeout((function (node) {
      return function () { node.remove(); };
    })(heart), 9500);
  }
}


/* =============================================================
   10. BOOT
   ============================================================= */

function initialize() {
  initializeTheme();
  initializeGarden();
  renderContent();
  initializeScrollAnimations();
  initializeHero();
  initializeLetter();
  initializeMusic();
  initializeFinale();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}