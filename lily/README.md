# Our Love Story — Relationship Website

A beautiful, romantic single-page website to celebrate your relationship.

## Quick Start

Just open `index.html` in your browser — no build tools or server needed.

## How to Customise

**Everything you need to edit is in `config.js`.** You don't need to touch any other file.

### Names & Start Date

```js
partner1: "Aaron",
partner2: "Lily",
startDate: "2023-01-01",  // Format: YYYY-MM-DD
```

### Timeline Entries

Add, remove, or edit entries in the `timeline` array. Each entry has:

```js
{
  date: "January 2023",       // Display date (any format)
  title: "The Day We Met",    // Card heading
  text: "Your memory here.",  // Short description
  photo: null,                // Set to "photos/filename.jpg" for a real photo
}
```

### Map Pins

Edit the `mapPins` array. Use Google Maps to find lat/lng coordinates:

```js
{
  lat: 48.8566,
  lng: 2.3522,
  location: "Paris, France",
  date: "June 2023",
  description: "Your memory here.",
  photo: null,  // Set to "photos/filename.jpg"
}
```

### Love Letter

Customise the letter at the bottom of the page:

```js
letter: {
  salutation: "My Dearest Lily,",
  body: [
    "First paragraph...",
    "Second paragraph...",
  ],
  closing: "Forever yours,",
  signature: "Aaron",
}
```

### Adding Photos

1. Create a `photos/` folder next to `index.html`
2. Place your images in it
3. In `config.js`, replace `null` with the path: `"photos/your_image.jpg"`

Recommended image sizes:
- Timeline: 800×500px or similar 16:10 ratio
- Map/Modal: 800×500px

## File Structure

```
lily/
├── index.html   — Page structure (no need to edit)
├── style.css    — All styles (no need to edit)
├── app.js       — Application logic (no need to edit)
├── config.js    — ✏️ EDIT THIS FILE to personalise everything
├── README.md    — This file
└── photos/      — Put your images here
```

## Tech Stack

- Plain HTML / CSS / JavaScript (no frameworks, no build step)
- [Leaflet.js](https://leafletjs.com/) for the interactive map
- [CartoDB Voyager](https://carto.com/basemaps/) for soft map tiles
- [Google Fonts](https://fonts.google.com/) — Playfair Display + Lato
