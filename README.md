# Nour Elislem Haddad — Portfolio

Bilingual (FR/EN) single-page portfolio with dedicated project detail pages, built with **HTML5**, **CSS3** and **vanilla JavaScript**. No build step, no backend, works on GitHub Pages and locally.

## Overview

- **Language:** Bilingual French / English, toggled via localStorage
- **Stack:** HTML5, CSS3, Vanilla JavaScript
- **Deploy:** GitHub Pages (static, no server needed)
- **Contact:** noor.haddad810@gmail.com

## Run locally

1. Open the project folder in VS Code or Cursor.
2. Either:
   - Right-click `index.html` → **Open with Live Server** (recommended), or
   - Open `index.html` directly in your browser (CV auto-detection works best with Live Server or GitHub Pages).
3. Project detail pages live under `projects/` and can be opened directly (e.g. `projects/novlexportal.html`).

## File structure

```text
portfolio/
├── index.html               ← Single-page portfolio
├── style.css                ← All styles
├── script.js                ← All JS, translations, data, render functions
├── README.md
├── projects/                ← Individual project detail pages
│   ├── novlexportal.html
│   ├── ecommerce.html
│   ├── solidarity-refugee.html
│   ├── speedygo.html
│   ├── elearning.html
│   └── gym-management.html
└── assets/
    ├── images/
    │   ├── profil.jpg
    │   ├── WhatsApp Image 2026-10-22 at 12.07.33 PM.jpeg  ← Award ceremony photo
    │   ├── WhatsApp Scan 2026-10-22 at 14.29.57.pdf       ← Award certificate
    │   └── *.pdf                                          ← Certification documents
    ├── videos/
    │   ├── demonstration_Novlex_Portal.mp4                  ← NovLexPortal
    │   ├── stage 4eme.mp4                                 ← E-Commerce
    │   ├── Copie de Orange White Modern Pitch Deck Presentation.mp4  ← Solidarity
    │   └── Copie de Orange and Yellow Modern Delivery Express Presentation.mp4 ← SpeedyGo
    └── cv/
        ├── CV_Nour_Elislem_Haddad_EN.pdf
        └── CV_Nour_Elislem_Haddad_FR.pdf
```

## How translations work

All UI text lives in the `translations` object in `script.js` under two keys: `en` and `fr`.

**In HTML**, use `data-i18n="key.path"` on any element:
```html
<h2 data-i18n="about.title">About Me</h2>
```

**In script.js**, `applyI18n(lang)` traverses all `[data-i18n]` elements, resolves the key via `getNested()`, and sets `textContent` (or `innerHTML` for array values that render as `<li>` items).

Project pages use the same mechanism with keys like `projectPages.novlex.overview`.

For attribute translations (e.g. `alt`, `aria-label`), use:
```html
<img data-i18n-attr="alt:a11y.profileAlt">
```

## How to update project content

All project data is in the `projects` array in `script.js`. Each project object has:

```js
{
  id: "novlex",           // used for routing to projects/novlex.html
  year: "2026",
  video: "assets/videos/demo vf.mp4",
  methodology: { en: "...", fr: "..." },
  projectType: { en: "...", fr: "..." },
  award: { en: "...", fr: "..." },   // optional
  en: { name, subtitle, category, description, features, stack, contribution, ... },
  fr: { name, subtitle, category, description, features, stack, contribution, ... },
}
```

The `renderProjects()` function reads this array and generates the showcase layout automatically.

To update the **project detail pages**, edit the `projectPages` object in `translations.en` / `translations.fr` in `script.js`. Keys map 1:1 to `data-i18n` attributes in the HTML files.

## How to add new media

**Profile photo:** Replace `assets/images/profil.jpg` (keep the same filename).

**Project videos:** Add MP4 files to `assets/videos/` and update the `video` field in the project object in `script.js`.

**CV files:** Drop updated PDFs into `assets/cv/` using the exact filenames:
- `CV_Nour_Elislem_Haddad_EN.pdf`
- `CV_Nour_Elislem_Haddad_FR.pdf`

## How to add a new project

1. Add a new entry to the `projects` array in `script.js` with all required fields.
2. Add translations under `translations.en.projectPages` and `translations.fr.projectPages`.
3. Create a new HTML file in `projects/` following the pattern of an existing page.
4. Link the video/image in the project object.

## How to add a project detail page

Copy an existing page (e.g. `projects/ecommerce.html`) and:
- Update the `data-i18n` attribute values to point to your new `projectPages.<id>.*` keys.
- Add the content keys to `translations.en.projectPages` and `translations.fr.projectPages` in `script.js`.
- The page inherits FR/EN switching automatically via localStorage and `applyI18n`.

## GitHub Pages deployment

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch `main` (or `master`) and folder **`/ (root)`**.
5. Save. After a minute the site will be at `https://<username>.github.io/<repo-name>/`.

All paths use relative references so the site works both at the root and under a subdirectory.

## Customise

| What | Where |
|------|--------|
| LinkedIn & GitHub URLs | `SITE.linkedin` and `SITE.github` at the top of `script.js` |
| Contact email | `SITE.email` at the top of `script.js` |
| English / French copy | `translations` object in `script.js` |
| Skills, experience, projects, education | Data arrays in `script.js` |
| Colours & layout | CSS custom properties in `style.css` |
| Profile photo | `assets/images/profil.jpg` |
| CV downloads | `assets/cv/` |
| Project demo videos | `assets/videos/` |

## Licence

Personal portfolio — content © Nour Elislem Haddad.
