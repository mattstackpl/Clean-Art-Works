# 🎨 Clean Art Works - Design System

Ten plik stanowi definicję całego systemu wizualnego (Design System) dla projektu Clean Art Works. Utrzymywanie spójności kolorów i wielkości fontów pozwala na szybkie budowanie kolejnych podstron.

## 1. Brand Colors (Token: `brand`)
Główna paleta kolorystyczna oparta o niebieskie odcienie czystości.
- **Primary:** `#2656A1` (`bg-brand`, `text-brand`) - Używany do głównych przycisków i akcentów.
- **Dark:** `#0F3056` - Ciemniejszy odcień przycisków na :hover.
- **Light:** `#EAF2FF` - Delikatne, jasnoniebieskie tła.
- **Pastel / Pastel Dark / Pastel Hover:** Zestaw specjalnych błękitów używany np. w sekcji About Us.

## 2. Accents & Surfaces
- **Accent:** `#FCB734` (`bg-accent`, `text-accent`) - Jasna, żarowiasta limonka przyciągająca wzrok do CTA (Call To Action).
- **Surface (Tła):**
  - Domyślne tło strony: `#F8F9FB`
  - Ciemna sekcja (Hero/Stopka): `#0B1B36`
  - Ocieplone tło (Referencje): `#FFF8F2`

## 3. Typografia (Typography System)
Zamiast "twardych" wartości w kodzie HTML, korzystaj z poniższych systemowych klas (tokenów) aby utrzymać spójność nagłówków.

- **Headings Font:** `Outfit`, sans-serif
- **Body Font:** `Inter`, sans-serif

### Klasy (Tokeny) tekstowe:
- `.text-display-hero`: Masywny nagłówek na głównym banerze (Hero).
- `.text-display-huge`: Największy tekst na stronie, m.in ściana referencji (Reviews Wall).
- `.text-stat`: Token zacieśniony dla wielkich liczb (np. "99%").
- `.text-h1`: H1 standardowy (np. nagłówek formularza kontaktowego, sekcja About).
- `.text-h2`: H2 standardowy pod-nagłówek wprowadzający do sekcji.
- `.text-h3`: Tytuły w kartach usług / kafelkach.
- `.text-h4`: Małe tytuły w elementach (np. tytuł adresu e-mail, belka FAQ).
- `.text-body-lg`: Większy tekst paragrafowy do opisów ("lead").
- `.text-body`: Podstawowy rozmiar paragrafu (16px).
- `.text-body-sm`: Mniejszy tekst dla detali i stopek (14-15px).
- `.text-label`: Szeroko rozstrzelony, drukowany tekst (UPPERCASE) dla odznak/tagów (np. "MEET THE TEAM").

## 4. Grid System & Układ
Do zarządzania szerokością i wyśrodkowaniem treści używaj gotowych komponentów:
- `.container-default`: `max-w-7xl` (1280px) z paddingami bocznych `px-6 lg:px-8`. Główny kręgosłup strony.
- `.container-full`: Używany by rozciągnąć sekcje na całą szerokość ekranu (`w-full`), zachowując elegancki odstęp po 60px z obu stron (np. zdjęcie wielkiego biura w About Us).

## 5. Architektura Plików (Dla Frontendu)
- `index.html` - Strona główna.
- `about.html` - Szkielet podstrony.
- `theme.js` - Konfiguracja Tailwind CSS (Design Tokens, Kolory, System Typografii). Osadzone jako `.js`, aby działało lokalnie przez protokół `file://` bez używania NodeJS/Webpacka.
- `main.js` - Globalne interakcje (Obsługa menu mobilnego, FAQ, skrolujący header).
