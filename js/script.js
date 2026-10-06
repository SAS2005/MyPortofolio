"use strict";

const languageButtons = document.querySelectorAll("[data-language]");
const imageButtons = document.querySelectorAll("[data-image]");
const themeButton = document.getElementById("theme-toggle");
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-navigation");
const galleryImage = document.getElementById("gallery-image");
const galleryCaption = document.getElementById("gallery-caption");
const galleryCounter = document.getElementById("gallery-counter");

const galleryItems = [
  { file: "home.png", sv: "Startsida", en: "Home", crop: "chrome-new" },
  { file: "hotels.png", sv: "Hotellöversikt", en: "Hotel collection", crop: "chrome-new" },
  { file: "sign-in.png", sv: "Inloggning", en: "Sign in", crop: "" },
  { file: "contact.png", sv: "Kontakt", en: "Contact", crop: "chrome-old" },
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
const savedTheme = readPreference("portfolio-theme");
let darkMode = savedTheme === "dark" || (savedTheme !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
let currentImage = 0;

function updateTheme() {
  document.documentElement.classList.toggle("dark", darkMode);
  document.querySelector('meta[name="theme-color"]').content = darkMode ? "#17221c" : "#f8f7f3";
  const label = language === "sv"
    ? darkMode ? "Byt till ljust läge" : "Byt till mörkt läge"
    : darkMode ? "Switch to light mode" : "Switch to dark mode";
  themeButton.setAttribute("aria-label", label);
  themeButton.title = label;
  themeButton.firstElementChild.textContent = darkMode ? "☀" : "◐";
}

function showImage(index) {
  const item = galleryItems[index];
  if (!item) return;
  currentImage = index;
  galleryImage.src = `assets/images/projects/aurora/${item.file}`;
  galleryImage.className = item.crop;
  galleryImage.alt = `${language === "sv" ? "Skärmbild från" : "Screenshot from"} Aurora Grand Hotels: ${item[language]}`;
  galleryCaption.textContent = item[language];
  galleryCounter.textContent = `${index + 1}/${galleryItems.length}`;
  imageButtons.forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.image) === index)));
}

function changeLanguage(value) {
  if (!['sv', 'en'].includes(value)) return;
  language = value;
  document.documentElement.lang = value;
  document.title = value === "sv"
    ? "Shucayb Ahmed | Mjukvaruutvecklare & student inom data- och nätverksteknik"
    : "Shucayb Ahmed | Software Developer & Data/Network Engineering Student";
  document.querySelectorAll("[data-sv][data-en]").forEach((element) => {
    element.textContent = element.dataset[value];
  });
  document.querySelectorAll("[data-sv-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", element.getAttribute(`data-${value}-aria-label`));
  });
  languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === value)));
  updateTheme();
  showImage(currentImage);
}

function closeMenu() {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.language);
    savePreference("portfolio-lang", language);
  });
});

imageButtons.forEach((button) => button.addEventListener("click", () => showImage(Number(button.dataset.image))));

themeButton.addEventListener("click", () => {
  darkMode = !darkMode;
  updateTheme();
  savePreference("portfolio-theme", darkMode ? "dark" : "light");
});

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  navigation.classList.toggle("open", !open);
  menuButton.setAttribute("aria-expanded", String(!open));
});

navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const observedSections = document.querySelectorAll("main section[id]");
const navigationLinks = navigation.querySelectorAll("a[href^='#']");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navigationLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-20% 0px -65%", threshold: [0.05, 0.25, 0.5] });
  observedSections.forEach((section) => observer.observe(section));
}

changeLanguage(language);
