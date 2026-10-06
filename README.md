# Shucayb Ahmed — Portfolio

A bilingual portfolio for a software developer and Data and Network Engineering student. The site is built with plain HTML, CSS and JavaScript, with no framework or build step.

## Run locally

Open `index.html` directly, or use VS Code Live Server. You can also run a small local server from the project folder:

```bash
python3 -m http.server 8765
```

Then visit `http://127.0.0.1:8765/`.

## Project structure

```text
.
├── index.html              Content and page structure
├── css/style.css           Design, themes and responsive layout
├── js/script.js            Language, theme, menu and gallery
├── assets/
│   ├── documents/          CV and cover letter
│   └── images/             Profile, badges, logos and screenshots
└── README.md
```

## Edit content

Most text is in `index.html`. Bilingual text uses this format:

```html
<span data-sv="Projekt" data-en="Projects">Projekt</span>
```

Update the Swedish text in `data-sv`, the English text in `data-en`, and keep the visible fallback text in Swedish.

The main project cards are inside `<section id="projekt">`. Skills are in `<section id="kunskaper">`, education in `<section id="utbildning">`, and contact details in `<section id="kontakt">`.

## Edit design

Open `css/style.css`:

- `:root` contains the light-theme colours and shared values.
- `.dark` contains dark-theme colours.
- `.page-shell` controls the maximum page width.
- `.hero` controls the first screen.
- Media queries at the end adapt the site for tablets and phones.

## Replace files

Replace a file with the same filename, or update its path in `index.html`.

- Profile photo: `assets/images/shucayb-profile.png`
- CV: `assets/documents/shucayb-ahmed-cv.pdf`
- Cover letter: `assets/documents/shucayb-ahmed-personligt-brev.pdf`
- Aurora screenshots: `assets/images/projects/aurora/`

The Aurora gallery entries are stored in `galleryItems` in `js/script.js`.

## Features

- Swedish and English content with saved language preference
- Light and dark mode with saved preference
- Responsive desktop, tablet and mobile layouts
- Keyboard focus states and reduced-motion support
- Mobile navigation
- Project screenshot gallery
- Search and social sharing metadata

## Publish updates

The repository is configured for GitHub Pages from the `main` branch and `/ (root)`. After editing, run:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages will rebuild the site automatically. The published address is:

https://sas2005.github.io/MyPortofolio/

Keep personal documents in the repository only if you want them to be publicly downloadable from the portfolio.
