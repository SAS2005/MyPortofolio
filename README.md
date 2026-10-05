# Min portfolio – HTML, CSS och JavaScript

## 1. Öppna hemsidan

Packa upp hela ZIP-filen. Dubbelklicka på `index.html` för att öppna sidan i din webbläsare. Du behöver inte installera något.

För att redigera: öppna hela mappen i en textredigerare, exempelvis VS Code. Spara dina ändringar och uppdatera webbläsaren. VS Codes Live Server är valfritt om du vill att sidan ska uppdateras automatiskt.

## 2. Mappstruktur

```text
shucayb-portfolio-html-css-js/
├── index.html                 Sidans text och innehåll
├── README.md                  Den här guiden
├── css/
│   └── style.css              Färger, typsnitt och layout
├── js/
│   └── script.js              Språk, färgläge och bildgalleri
└── assets/
    ├── images/
    │   ├── shucayb-profile.png Profilbild
    │   ├── favicon.svg        Ikon i webbläsarfliken
    │   ├── og.png             Bild som kan användas vid delning
    │   └── projects/
    │       └── aurora/        Projektets fyra skärmbilder
    └── documents/
        ├── shucayb-ahmed-cv.pdf
        └── shucayb-ahmed-personligt-brev.pdf
```

All kod är vanlig HTML, CSS och JavaScript. Inga paket, ramverk, konton, API-nycklar, byggverktyg eller tjänstekopplingar krävs. Alla bilder, stilar och skript laddas från din egen mapp.

## 3. Ändra texter

I `index.html` är innehållet uppdelat i kommenterade avsnitt. Sök efter texten du vill ändra.

En text med två språk ser ut så här:

```html
<span data-sv="Lite om mig" data-en="A little about me">
  Lite om mig
</span>
```

- `data-sv` innehåller svenska texten.
- `data-en` innehåller engelska texten.
- Texten mellan taggarna visas innan JavaScript startar. Skriv den svenska texten där också.

Uppdatera alla tre när du ändrar texten. Texten uppdateras av `changeLanguage()` i JavaScript-filen.

## 4. Ändra design

Öppna `css/style.css`. Den har numrerade kommentarer och tydligt indragna regler.

- `:root` innehåller färger för ljust läge.
- `.dark` innehåller färger för mörkt läge.
- `h1`, `h2` och `body` styr bland annat typsnitt och textstorlek.
- `.page-shell` styr sidans bredd.
- `@media` anpassar sidan för mobil och mindre skärmar.

Exempel:

```css
:root {
  --background: #f8f7f3;
  --foreground: #253831;
}
```

## 5. Byt bild eller CV

Ersätt en fil med samma namn, eller ändra sökvägen i `index.html`.

```html
<img src="assets/images/shucayb-profile.png" alt="Shucayb Ahmed">
```

Alla sökvägar är relativa så att sidan fungerar både när du dubbelklickar på filen och när du lägger upp den i en undermapp på ett webbhotell.

## 6. Ändra Auroras bildgalleri

I `js/script.js` finns listan `images`. Varje post anger bildfil, svenska och engelska bildtexter samt CSS-klass för visningen.

För att lägga till en bild:

1. Lägg bilden i `assets/images/projects/aurora/`.
2. Lägg till en post i `images` i `js/script.js`.
3. Lägg till en knapp i `index.html`, under `gallery-controls`.
4. Sätt knappens `data-image` till bildens position i listan. Första bilden har nummer 0, nästa 1 och så vidare.

Klasserna `chrome-new` och `chrome-old` döljer webbläsarens verktygsfält på de befintliga skärmbilderna med CSS. Originalbilderna är oförändrade. Använd `crop: ""` om din nya bild redan saknar verktygsfält. Uppdatera `height` om bildens proportioner skiljer sig.

## 7. JavaScript-funktionerna

- `changeLanguage()` byter text och tillgänglighetsetiketter.
- `updateTheme()` visar ljust eller mörkt läge.
- `showImage()` byter projektbild och bildtext.
- `readPreference()` och `savePreference()` läser och sparar inställningar i webbläsaren.

Språk och färgläge sparas när webbläsaren tillåter det. Vissa webbläsare begränsar lagring för lokala filer. Då fungerar knapparna fortfarande, men valen kanske inte finns kvar efter att sidan stängts.

## 8. Publicera med GitHub Pages

1. Skapa ett nytt offentligt repository på GitHub, exempelvis `portfolio`.
2. Ladda upp `index.html`, `README.md` samt mapparna `css`, `js` och `assets` till repositoryts översta nivå.
3. Öppna repositoryts **Settings** och välj **Pages**.
4. Under **Build and deployment**, välj **Deploy from a branch**.
5. Välj grenen `main`, mappen `/ (root)` och klicka **Save**.

GitHub visar adressen när publiceringen är klar. Den brukar bli `https://ditt-användarnamn.github.io/portfolio/`.

Denna fristående version ändrar inte den tidigare publicerade webbplatsen automatiskt. E-postlänkar öppnar besökarens e-postprogram. LinkedIn-länken öppnar din profil. Projektbilderna är skärmbilder, inte en inbäddad hotellapplikation.

## 9. Mobil, surfplatta och dator

Layouten anpassar sig automatiskt efter skärmens bredd. Datorer får flera kolumner, medan mobiler får en kolumn. Menyn är alltid synlig och knapparna har minst 44 px hög tryckyta. Projektbilderna följer sidans bredd. Webbläsarens zoom är tillåten.

I slutet av `css/style.css` finns de samlade reglerna för skärmstorlekar:

- Upp till 900 px: meny och kolumner anpassas för surfplatta.
- Upp till 760 px: innehåll i en kolumn och galleri med två knappar per rad.
- Upp till 380 px: tätare marginaler och enklare utbildningslista.

Du kan kontrollera utseendet på din dator genom att göra webbläsarfönstret smalare och bredare. För att öppna sidan på en fysisk mobil kan du lägga upp filerna på ditt webbhotell.    
