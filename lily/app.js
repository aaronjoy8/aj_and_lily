// ╔══════════════════════════════════════════════════════════════╗
// ║                    APPLICATION LOGIC                         ║
// ║                                                              ║
// ║  This file reads from config.js and builds the page.         ║
// ║  You should NOT need to edit this file — edit config.js      ║
// ║  instead to personalise your site.                           ║
// ╚══════════════════════════════════════════════════════════════╝

(function () {
  "use strict";

  // ── POPULATE HERO ────────────────────────────

  document.getElementById("partner1Name").textContent = CONFIG.partner1;
  document.getElementById("partner2Name").textContent = CONFIG.partner2;

  const startDate = new Date(CONFIG.startDate + "T00:00:00");
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("sinceDate").textContent =
    startDate.toLocaleDateString("en-US", dateOptions);

  // ── LIVE COUNTER ─────────────────────────────

  function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("counterDays").textContent = days.toLocaleString();
    document.getElementById("counterHours").textContent = String(hours).padStart(2, "0");
    document.getElementById("counterMinutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("counterSeconds").textContent = String(seconds).padStart(2, "0");
  }

  updateCounter();
  setInterval(updateCounter, 1000);

  // ── FLOATING HEARTS ──────────────────────────

  const heartsContainer = document.querySelector(".floating-hearts");
  const heartSymbols = ["♥", "♡", "❤"];

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = heartSymbols[i % heartSymbols.length];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 0.6 + Math.random() * 1 + "rem";
    heart.style.animationDelay = Math.random() * 8 + "s";
    heart.style.animationDuration = 6 + Math.random() * 6 + "s";
    heartsContainer.appendChild(heart);
  }

  // ── BUILD TIMELINE ───────────────────────────

  const timelineContainer = document.getElementById("timelineContainer");

  CONFIG.timeline.forEach(function (entry, index) {
    const el = document.createElement("div");
    el.className = "timeline-entry";
    el.style.transitionDelay = (index % 3) * 0.15 + "s";

    var card = document.createElement("div");
    card.className = "timeline-card";

    var photoDiv = document.createElement("div");
    photoDiv.className = "timeline-photo";
    if (entry.photo) {
      var img = document.createElement("img");
      img.src = entry.photo;
      img.alt = entry.title;
      img.loading = "lazy";
      photoDiv.appendChild(img);
    } else {
      var placeholder = document.createElement("div");
      placeholder.className = "timeline-photo-placeholder";
      placeholder.textContent = "Add your photo here";
      photoDiv.appendChild(placeholder);
    }
    card.appendChild(photoDiv);

    var body = document.createElement("div");
    body.className = "timeline-body";
    var dateP = document.createElement("p");
    dateP.className = "timeline-date";
    dateP.textContent = entry.date;
    var titleH = document.createElement("h3");
    titleH.className = "timeline-title";
    titleH.textContent = entry.title;
    var textP = document.createElement("p");
    textP.className = "timeline-text";
    textP.textContent = entry.text;
    body.appendChild(dateP);
    body.appendChild(titleH);
    body.appendChild(textP);
    card.appendChild(body);

    el.appendChild(card);

    timelineContainer.appendChild(el);
  });

  // ── BUILD LOVE LETTER ────────────────────────

  const letter = CONFIG.letter;
  document.getElementById("letterSalutation").textContent = letter.salutation;
  document.getElementById("letterSignature").textContent = letter.signature;

  const letterBody = document.getElementById("letterBody");
  letterBody.innerHTML = "";
  letter.body.forEach(function (para) {
    const p = document.createElement("p");
    p.textContent = para;
    letterBody.appendChild(p);
  });

  document.querySelector(".letter-closing").textContent = letter.closing;

  // ── SCROLL ANIMATIONS (Intersection Observer) ─

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".timeline-entry, .animate-on-scroll").forEach(function (el) {
    observer.observe(el);
  });

  // ── NAVIGATION VISIBILITY & ACTIVE STATE ─────

  const nav = document.getElementById("nav");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    const scrollY = window.scrollY;

    // Show nav after scrolling past hero
    if (scrollY > window.innerHeight * 0.5) {
      nav.classList.add("visible");
    } else {
      nav.classList.remove("visible");
    }

    // Highlight active section
    let current = "";
    sections.forEach(function (section) {
      const top = section.offsetTop - 120;
      if (scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // ── INTERACTIVE MAP (Leaflet.js) ─────────────

  const map = L.map("mapContainer", {
    scrollWheelZoom: false,
    zoomControl: true,
  }).setView(CONFIG.mapCenter, CONFIG.mapZoom);

  // Soft, romantic map tiles (CartoDB Voyager)
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }
  ).addTo(map);

  // Custom heart-shaped marker icon
  const heartIconSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36">' +
    '<path d="M18 32 C 6 20, 0 12, 6 6 C 10 2, 15 4, 18 9 C 21 4, 26 2, 30 6 C 36 12, 30 20, 18 32Z" ' +
    'fill="#C9A0A0" stroke="#fff" stroke-width="1.5"/>' +
    "</svg>";

  const heartIcon = L.divIcon({
    html: '<div class="marker-pin">' + heartIconSvg + "</div>",
    className: "custom-marker",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });

  // Place pins
  CONFIG.mapPins.forEach(function (pin) {
    const photoHTML = pin.photo
      ? '<img src="' + pin.photo + '" alt="' + pin.location + '" />'
      : '<div style="height:130px;display:flex;align-items:center;justify-content:center;' +
        "font-size:0.75rem;color:#7A7075;background:linear-gradient(135deg,#F5EDE0,#E8D0D0);" +
        '"><span>📷 Add photo</span></div>';

    const popupContent =
      '<div class="map-popup" data-location="' + pin.location + '" ' +
      'data-date="' + pin.date + '" ' +
      'data-description="' + pin.description.replace(/"/g, "&quot;") + '" ' +
      'data-photo="' + (pin.photo || "") + '">' +
      '<div class="map-popup-photo">' + photoHTML + "</div>" +
      '<div class="map-popup-body">' +
      '<p class="map-popup-location">' + pin.location + "</p>" +
      '<p class="map-popup-date">' + pin.date + "</p>" +
      '<p class="map-popup-desc">' + pin.description + "</p>" +
      "</div>" +
      "</div>";

    L.marker([pin.lat, pin.lng], { icon: heartIcon })
      .addTo(map)
      .bindPopup(popupContent, {
        maxWidth: 280,
        minWidth: 240,
        closeButton: true,
        className: "romantic-popup",
      });
  });

  // ── MEMORY MODAL ─────────────────────────────

  const modal = document.getElementById("memoryModal");
  const modalPhoto = document.getElementById("modalPhoto");
  const modalLocation = document.getElementById("modalLocation");
  const modalDate = document.getElementById("modalDate");
  const modalDescription = document.getElementById("modalDescription");

  function openModal(data) {
    modalLocation.textContent = data.location;
    modalDate.textContent = data.date;
    modalDescription.textContent = data.description;

    if (data.photo) {
      modalPhoto.innerHTML =
        '<img src="' + data.photo + '" alt="' + data.location + '" />';
    } else {
      modalPhoto.innerHTML =
        '<div class="modal-photo-placeholder">Add your photo here</div>';
    }

    modal.hidden = false;
    // Trigger reflow for transition
    void modal.offsetWidth;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(function () {
      modal.hidden = true;
    }, 400);
  }

  // Click popup to open full modal
  document.addEventListener("click", function (e) {
    const popup = e.target.closest(".map-popup");
    if (popup) {
      openModal({
        location: popup.dataset.location,
        date: popup.dataset.date,
        description: popup.dataset.description,
        photo: popup.dataset.photo || null,
      });
    }
  });

  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  // ── PAGE TITLE ───────────────────────────────

  document.title = CONFIG.partner1 + " & " + CONFIG.partner2 + " — Our Love Story";
})();
