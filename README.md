# A Little Garden That Changes With Time

A birthday surprise that opens like a small garden and quietly follows the
time of day on your device: a soft sunrise in the morning, warm daylight
during the day, a long golden hour before sunset, and a night garden full of
fireflies at the end.

No framework, no build step, no server. Open `index.html` and it runs.

---

## Quick start

Double-click `index.html`, or drag it into any browser. That's it.

For a shareable link, upload the folder to GitHub Pages:

1. Create a repository and upload the contents of this folder to the root.
2. **Settings → Pages → Source → Deploy from a branch → `main` / `/ (root)`.**
3. Your site will be live at `https://<username>.github.io/<repo>/`.

Every asset is referenced with a relative path (`./assets/...`), so it works
from a subfolder, from `file://`, and from a domain root without changes.

---

## Where to put your stuff

### 1. Her name

Open `script.js` and change the first value in `CONFIG`:

```js
girlfriendName: "[NAMA]",
```

This name is then used everywhere — the hero, the message, the letter, the
finale, and the footer. Any literal `[NAMA]` you type inside the message or
letter copy is replaced automatically too.

### 2. Her age

```js
birthdayAge: 26,
```

One number. The hero, "26 Reasons", the finale, and the footer all follow it.
If you change it away from 26, update the section heading text in `index.html`
(that one is a title, not a number) and the `reasons` list length in step 3.

### 3. The 26 reasons

Same `CONFIG` object, under `reasons`. Keep exactly `birthdayAge` items.

Plain string:

```js
"Your smile",
```

Or with a small note underneath:

```js
{ title: "Your smile", note: "the kind that fixes my whole day" },
```

### 4. The message and the letter

Also in `CONFIG`. Each array entry becomes one paragraph, so add or remove
lines freely.

```js
birthdayMessage: [ "first paragraph", "second paragraph", "..." ],
letterMessage:   [ "Dear [NAMA],", "the body of your letter", "..." ],
letterTitle: "A Letter For You",
```

### 5. The final surprise

```js
finaleMessage: "here's our first line,\nand here's the second one",
```

Line breaks are preserved.

---

## Photos

Nine photos live in `assets/photos/`, named in chronological order so the
scrapbook reads like a timeline:

```
photo-01.jpg   photo-02.jpg   photo-03.jpg   photo-04.jpg   photo-05.jpg
photo-06.jpg   photo-07.jpg   photo-08.jpg   photo-09.jpg
```

To swap in your own, replace the files and keep the names — nothing else
changes. Captions and any other count live in `CONFIG.photos`:

```js
photos: [
  { src: "./assets/photos/photo-01.jpg", caption: "wal pertama kita" },
  ...
],
```

Add or remove entries freely; the gallery is a grid, so 6, 9 or 12 photos all
lay out cleanly.

The full-size originals (22 MB) are kept in `assets/_originals/`, which is
git-ignored on purpose — only the compressed versions (~1.1 MB total, max
edge 1280 px) are pushed, so the site loads fast on mobile data.

Photos are soft-focused and gently desaturated, so mixed lighting still looks
intentional. Anything that fails to load falls back to a painted placeholder
instead of a broken image icon.

---

## Music (optional)

1. Put an MP3 at `assets/music/background.mp3` — or point `CONFIG.music.src`
   somewhere else.
2. Turn the corner speaker on, bottom-right.

The current track is `background.mp3` (~3:50, "One Less Lonely Girl"). Nothing
plays automatically and no request is made until you press play, so a missing
file never breaks the page. If the track can't be found, the button disables
itself and tells you where to put the file, then stays out of your way.

Prefer a different file type? Change the `type` attribute on the `<audio>`
element in `index.html` to match.

---

## How the day follows you

The theme is driven entirely by the device clock — no data is sent anywhere.

| Local time | What you'll see |
| ---------- | --------------- |
| 05:00 – 07:00 | Sunrise — pink horizon, long soft shadows |
| 07:00 – 17:00 | Day — blue sky, drifting clouds, bees and butterflies |
| 17:00 – 19:00 | Golden hour — honeyed light, warm haze |
| 19:00 – 05:00 | Night — stars, moon arc, fireflies rising |

It re-checks every 30 seconds and immediately when you switch back to the tab,
so leaving the page open overnight is fine. The times live at the top of
`script.js` under `CONFIG.theme` if you'd like to shift them.

Two places deliberately ignore the clock, because they're about a moment
rather than a time of day:

- **The envelope** steps the sky to golden hour and slowly into night as you
  read. Close it and the real sky comes back.
- **The finale** is always night, so the fireflies always mean something.

---

## Notes

- Everything is keyboard reachable. The envelope opens with <kbd>Enter</kbd>
  and moves focus into the letter; <kbd>Esc</kbd> closes it.
- If your system asks for reduced motion, the page honours it: content appears
  without animating, flowers are simply already bloomed, and no particles fly.
- The only outside resource is a Google Font, and it degrades to system fonts
  if it can't load. Delete the two `<link>` tags in `index.html` to go fully
  offline.
- Tested in current Chrome, Edge, Firefox and Safari on both mobile and
  desktop, and passes WCAG AA (4.5:1) text contrast at every minute of the
  day.

---

## Files

```
index.html                 structure and content
style.css                  all visual design
script.js                  CONFIG + all behaviour
assets/photos/             your 9 photos (compressed, pushed)
assets/music/              optional MP3
assets/icons/              optional extras
assets/_originals/         full-size originals, git-ignored
```

Change the words, drop in your photos, and it's hers.
