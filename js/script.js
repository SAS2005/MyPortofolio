"use strict";

const languageButtons = document.querySelectorAll("[data-language]");
const imageButtons = document.querySelectorAll("[data-image]");
const themeButton = document.getElementById("theme-toggle");
const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");
const galleryCounter = document.getElementById("gallery-counter");

const images = [
  { file: "home.png", sv: "Startsida", en: "Home", crop: "chrome-new", height: 1912 },
  {
    file: "hotels.png",
    sv: "Hotellöversikt",
    en: "Hotel collection",
    crop: "chrome-new",
    height: 1912,
  },
  { file: "sign-in.png", sv: "Inloggning", en: "Sign in", crop: "", height: 1601 },
  { file: "contact.png", sv: "Kontakt", en: "Contact", crop: "chrome-old", height: 1912 },
];

function readPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    return;
  }
}

let language = readPreference("portfolio-lang") === "en" ? "en" : "sv";
const storedTheme = readPreference("portfolio-theme");
let dark =
  storedTheme === "dark" ||
  (storedTheme !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
let currentImage = 0;

function updateTheme() {
  document.documentElement.classList.toggle("dark", dark);
  const label =
    language === "sv"
      ? dark
        ? "Byt till ljust läge"
        : "Byt till mörkt läge"
      : dark
        ? "Switch to light mode"
        : "Switch to dark mode";
  themeButton.setAttribute("aria-label", label);
  themeButton.title = label;
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.firstElementChild.textContent = dark ? "☀" : "◐";
}

function showImage(index) {
  if (!Number.isInteger(index) || !images[index]) return;
  currentImage = index;
  const image = images[index];
  galleryImage.src = "assets/images/projects/aurora/" + image.file;
  galleryImage.className = image.crop;
  galleryImage.height = image.height;
  galleryImage.alt =
    (language === "sv"
      ? "Skärmbild från Aurora Grand Hotels: "
      : "Screenshot of Aurora Grand Hotels: ") + image[language];
  galleryCaption.textContent = image[language];
  galleryCounter.textContent = index + 1 + "/" + images.length;
  imageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.image) === index));
  });
}

function changeLanguage(value) {
  if (value !== "sv" && value !== "en") return;
  language = value;
  document.documentElement.lang = language;
  document.title =
    language === "sv"
      ? "Shucayb Ahmed — Fullstackutvecklare"
      : "Shucayb Ahmed — Full-stack Developer";

  document.querySelectorAll("[data-sv][data-en]").forEach((element) => {
    element.textContent = element.getAttribute("data-" + language);
  });
  document.querySelectorAll("[data-sv-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", element.getAttribute("data-" + language + "-aria-label"));
  });
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
  updateTheme();
  showImage(currentImage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.language);
    savePreference("portfolio-lang", language);
  });
});
imageButtons.forEach((button) => {
  button.addEventListener("click", () => showImage(Number(button.dataset.image)));
});
themeButton.addEventListener("click", () => {
  dark = !dark;
  updateTheme();
  savePreference("portfolio-theme", dark ? "dark" : "light");
});

changeLanguage(language);
