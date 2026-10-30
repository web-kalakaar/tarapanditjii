/* main.js — renders the whole site from detail.js (PANDIT) and servicesdata.js (SERVICES_DATA). */
(function () {
  "use strict";
  const D = window.PANDIT,
    S = window.SERVICES_DATA;
  const $ = (s, r = document) => r.querySelector(s),
    $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) =>
    String(s == null ? "" : s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const has = (v) => (Array.isArray(v) ? v.length > 0 : v !== "" && v != null);
  const waOk = /^\d{10,15}$/.test(D.whatsapp || "");
  const phoneDigits = (D.phone || "").replace(/[^\d+]/g, "");
  const phoneOk =
    !/X/i.test(D.phone || "") && phoneDigits.replace(/\D/g, "").length >= 10;
  if (!waOk)
    console.warn(
      "detail.js: set a real WhatsApp number (digits with country code) before launch.",
    );
  const wa = (msg) =>
    `https://wa.me/${waOk ? D.whatsapp : ""}?text=${encodeURIComponent(msg)}`;
  const place = [D.city, D.state].filter(Boolean).join(", ");

  const I = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 2.1 17.7L1 23l5.4-1.4a11.8 11.8 0 0 0 5.6 1.4h.01A11.8 11.8 0 0 0 20.5 3.5zM12 21.2a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.2.8.9-3.1-.2-.4A9.8 9.8 0 1 1 12 21.2zm5.4-7.3c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7c0 1.6 1.2 3.2 1.3 3.4s2.300 3.500 5.600 4.900c2 .9 2.800.9 3.800.8.600-.1 1.800-.7 2-1.500.3-.7.3-1.300.2-1.500s-.3-.2-.6-.3z"/></svg>',
    ph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.900 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    flame:
      '<svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true"><path d="M32 6c6 10 14 15 14 27a14 14 0 0 1-28 0c0-6 3-10 6-14 1 4 3 6 5 7-1-7 0-14 3-20z"/><path d="M12 56h40v3H12z" opacity=".6"/></svg>',
    lotus:
      '<svg viewBox="0 0 120 100" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M60 14c9 14 14 28 0 48-14-20-9-34 0-48z"/><path d="M60 62C44 56 30 44 26 26c18 0 30 12 34 36zM60 62c16-6 30-18 34-36-18 0-30 12-34 36z"/><path d="M60 62C38 62 18 54 8 40c18-4 38 2 52 22zM60 62c22 0 42-8 52-22-18-4-38 2-52 22z"/><path d="M20 76h80M34 86h52" opacity=".6"/></svg>',
  };
  const tagLabel = {
    included: "Included",
    family: "Family arranges",
    extra: "Extra cost",
  };
  const waBtn = (label, cls = "") => `${I.wa}<span>${label}</span>`;

  /* ---------- SEO ---------- */
  function seo() {
    const q = D.seo || {},
      url = D.siteUrl || location.href;
    document.title = q.title || document.title;
    const set = (sel, attr, val) => {
      const e = $(sel);
      if (e && val) e.setAttribute(attr, val);
    };
    set("meta[name=description]", "content", q.description);
    set("meta[name=keywords]", "content", q.keywords);
    set("link[rel=canonical]", "href", url);
    set("link[hreflang=en-in]", "href", url);
    set("link[hreflang=x-default]", "href", url);
    set('meta[property="og:title"]', "content", q.title);
    set('meta[property="og:description"]', "content", q.description);
    set('meta[property="og:url"]', "content", url);
    if (D.photo) {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:image");
      m.content = new URL(D.photo, url).href;
      document.head.appendChild(m);
    }
    if (has(D.latitude)) {
      set(
        'meta[name="geo.position"]',
        "content",
        `${D.latitude};${D.longitude}`,
      );
      set("meta[name=ICBM]", "content", `${D.latitude}, ${D.longitude}`);
    }
    const ld = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": url + "#business",
      name: D.siteName || D.name,
      description: q.description,
      url,
      image: D.photo ? new URL(D.photo, url).href : undefined,
      founder: {
        "@type": "Person",
        name: D.name,
        jobTitle: D.title,
        knowsLanguage: D.languages,
        alumniOf: has(D.education) ? D.education : undefined,
      },
      telephone: phoneOk ? phoneDigits : undefined,
      email: D.email || undefined,
      openingHours: undefined,
      address: {
        "@type": "PostalAddress",
        streetAddress: D.address || undefined,
        addressLocality: D.city,
        addressRegion: D.state,
        postalCode: D.postalCode,
        addressCountry: D.countryCode,
      },
      geo: has(D.latitude)
        ? {
            "@type": "GeoCoordinates",
            latitude: D.latitude,
            longitude: D.longitude,
          }
        : undefined,
      areaServed: (D.serviceArea || [])
        .map((n) => ({ "@type": "City", name: n }))
        .concat([{ "@type": "Country", name: D.country }]),
      sameAs: Object.values(D.social || {}).filter(Boolean),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Pooja & Vedic ceremony services",
        itemListElement: S.services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.short,
            areaServed: place,
          },
        })),
      },
    };
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: (D.faqs || []).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    [ld, faq].forEach((o) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.textContent = JSON.stringify(o);
      document.head.appendChild(s);
    });
  }

  /* ---------- static blocks ---------- */
  function portrait(cls = "") {
    return D.photo
      ? `<div class="arch ${cls}"><img src="${esc(D.photo)}" alt="${esc(D.photoAlt)}" width="480" height="600" loading="eager"></div>`
      : `<div class="arch ${cls}"><div class="arch-ph" role="img" aria-label="Portrait placeholder">${I.lotus}</div></div>`;
  }
  function header() {
    $("#announce").hidden = !D.announcement;
    $("#announce").textContent = D.announcement || "";
    $("#brand").innerHTML =
      `<span class="brand-mark" style="color:var(--gold)">${I.flame.replace("<svg", '<svg width="22" height="22"')}</span><span><b>${esc(D.name)}</b><small>${esc(D.title)} · ${esc(D.city)}</small></span>`;
    $$("[data-wa=hello]").forEach((a) => {
      a.innerHTML = waBtn("Enquire now");
      a.href = wa(
        `Namaste ${D.honorific}, I would like to enquire about a pooja.`,
      );
      a.target = "_blank";
      a.rel = "noopener";
    });
    if (!has(D.gallery)) $$("[data-opt=gallery]").forEach((a) => a.remove());
  }
  function hero() {
    $("#heroHi").textContent = D.titleHi || "";
    $("#heroH1").textContent = D.heroHeading;
    $("#heroSub").textContent = D.heroSub;
    const a = $("[data-wa=hero]");
    a.innerHTML = waBtn("Enquire on WhatsApp");
    a.href = wa(
      `Namaste ${D.honorific}, I would like to enquire about a pooja.`,
    );
    a.target = "_blank";
    a.rel = "noopener";
    $("#heroMeta").innerHTML =
      `<span>${I.pin}${esc(place)}</span>` +
      (has(D.languages) ? `<span>${esc(D.languages.join(", "))}</span>` : "") +
      (D.availability ? `<span>${I.clock}${esc(D.availability)}</span>` : "");
    $("#heroArt").innerHTML =
      portrait() +
      `<figcaption><b>${esc(D.name)}</b>${esc(D.title)}</figcaption>`;
  }
  function trust() {
    const t = [];
    if (has(D.experienceYears))
      t.push([D.experienceYears + "+", "Years of experience"]);
    if (has(D.ceremoniesCount))
      t.push([D.ceremoniesCount + "+", "Ceremonies conducted"]);
    t.push([S.services.length, "Pooja services"]);
    if (has(D.languages))
      t.push([D.languages.length, "Languages: " + D.languages.join(", ")]);
    t.push([D.city, "Home city, serving nearby towns"]);
    $("#trust").innerHTML = t
      .map(([b, s]) => `<div><b>${esc(b)}</b><span>${esc(s)}</span></div>`)
      .join("");
  }
  function about() {
    const rows = [
      ["Full name", D.name],
      ["Title", D.title],
      [
        "Experience",
        has(D.experienceYears) ? D.experienceYears + " years" : "",
      ],
      ["Education", (D.education || []).join(", ")],
      ["Sampradaya", D.sampradaya],
      ["Vedic knowledge", D.vedicKnowledge],
      ["Languages", (D.languages || []).join(", ")],
      ["Specialisation", (D.specialisation || []).join(", ")],
      ["Home location", place],
      ["Service area", (D.serviceArea || []).join(", ")],
    ].filter((r) => has(r[1]));
    $("#about-in").innerHTML =
      `<div>${portrait()}</div><div class="about-txt"><header class="sec-head" style="margin-bottom:0"><h2>About ${esc(D.honorific)}</h2><div class="rule"></div></header>
      ${(D.bio || []).map((p) => `<p>${esc(p)}</p>`).join("")}${D.bioHi ? `<p class="about-hi" lang="hi">${esc(D.bioHi)}</p>` : ""}
      <dl class="profile">${rows.map((r) => `<div><dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd></div>`).join("")}</dl>
      ${D.philosophy ? `<p class="quote">“${esc(D.philosophy)}”</p>` : ""}</div>`;
  }
  function blocks() {
    $("#whyGrid").innerHTML = D.why
      .map((w) => `<article><h3>${esc(w.t)}</h3><p>${esc(w.d)}</p></article>`)
      .join("");
    $("#steps").innerHTML = D.steps
      .map((s) => `<li><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></li>`)
      .join("");
    $("#samagriIntro").textContent = D.samagriIntro;
    $("#legend").innerHTML = D.samagriLegend
      .map(
        (l) =>
          `<div><span class="tag ${esc(l.k)}">${esc(l.t)}</span><h3>${esc(l.t)}</h3><p>${esc(l.d)}</p></div>`,
      )
      .join("");
    $("#faqList").innerHTML = D.faqs
      .map(
        (f) =>
          `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`,
      )
      .join("");
    if (has(D.testimonials)) {
      $("#reviews").hidden = false;
      $("#rev").innerHTML = D.testimonials
        .map(
          (r) =>
            `<blockquote class="card rev"><p>“${esc(r.text)}”</p><footer>${esc(r.name)}${r.ceremony ? " · " + esc(r.ceremony) : ""}</footer></blockquote>`,
        )
        .join("");
    }
  }

  /* ---------- gallery + lightbox ---------- */
  function gallery() {
    if (!has(D.gallery)) return;
    $("#gallery").hidden = false;
    $("#gal").innerHTML = D.gallery
      .map(
        (g, i) =>
          `<button data-i="${i}" aria-label="Open photo: ${esc(g.alt)}"><img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy"></button>`,
      )
      .join("");
    const lb = $("#lightbox");
    let cur = 0;
    const show = (i) => {
      cur = (i + D.gallery.length) % D.gallery.length;
      const g = D.gallery[cur];
      $("#lbIn").innerHTML =
        `<img src="${esc(g.src)}" alt="${esc(g.alt)}">${g.caption ? `<p>${esc(g.caption)}</p>` : ""}<button class="lb-btn lb-x" data-a="x" aria-label="Close">×</button><button class="lb-btn lb-prev" data-a="p" aria-label="Previous">‹</button><button class="lb-btn lb-next" data-a="n" aria-label="Next">›</button>`;
    };
    $("#gal").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      show(+b.dataset.i);
      lb.showModal();
    });
    lb.addEventListener("click", (e) => {
      const a = e.target.closest("[data-a]");
      if (a) {
        a.dataset.a === "x"
          ? lb.close()
          : show(cur + (a.dataset.a === "n" ? 1 : -1));
      } else if (e.target === lb) lb.close();
    });
    lb.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") show(cur + 1);
      if (e.key === "ArrowLeft") show(cur - 1);
    });
    let sx = 0;
    lb.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), {
      passive: true,
    });
    lb.addEventListener("touchend", (e) => {
      const d = e.changedTouches[0].clientX - sx;
      if (Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1));
    });
  }

  /* ---------- services ---------- */
  let cat = "all",
    term = "";
  const card = (
    s,
  ) => `<article class="card svc"><div class="svc-img">${s.image ? `<img src="${esc(s.image)}" alt="${esc(s.name)}" loading="lazy" width="640" height="360">` : I.flame}</div>
    <div class="svc-body"><h3>${esc(s.name)}</h3><span class="hi" lang="hi">${esc(s.nameHi)}</span><p>${esc(s.short)}</p>
    <div class="svc-foot"><span class="price">${esc(s.price)}</span><button class="link" data-open="${esc(s.slug)}" aria-label="View details for ${esc(s.name)}">Details and samagri</button></div></div></article>`;
  function renderServices() {
    const t = term.trim().toLowerCase();
    const list = S.services.filter(
      (s) =>
        (cat === "all" || s.category === cat) &&
        (!t ||
          [s.name, s.nameHi, s.short, s.description]
            .join(" ")
            .toLowerCase()
            .includes(t)),
    );
    $("#svcGrid").innerHTML = list.map(card).join("");
    $("#svcEmpty").hidden = list.length > 0;
  }
  function services() {
    $("#chips").innerHTML = S.categories
      .map(
        (c) =>
          `<button class="chip" role="tab" data-c="${esc(c.id)}" aria-selected="${c.id === "all"}">${esc(c.label)}</button>`,
      )
      .join("");
    $("#chips").addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      cat = b.dataset.c;
      $$(".chip").forEach((c) => c.setAttribute("aria-selected", c === b));
      renderServices();
    });
    $("#svcSearch").addEventListener("input", (e) => {
      term = e.target.value;
      renderServices();
    });
    $("#svcGrid").addEventListener("click", (e) => {
      const b = e.target.closest("[data-open]");
      if (b) openModal(b.dataset.open);
    });
    renderServices();
    $("#fPooja").innerHTML =
      '<option value="">Select a pooja</option>' +
      S.services.map((s) => `<option>${esc(s.name)}</option>`).join("") +
      "<option>Other / not sure</option>";
  }
  const modal = $("#modal");
  function openModal(slug) {
    const s = S.services.find((x) => x.slug === slug);
    if (!s) return;
    const sam = (s.samagri || [])
      .map(
        (m) =>
          `<li><span>${esc(m.item)}</span><span class="tag ${esc(m.by)}">${esc(tagLabel[m.by] || m.by)}</span></li>`,
      )
      .join("");
    const fact = (k, v) => (v ? `<div><span>${k}</span>${esc(v)}</div>` : "");
    $("#modalIn").innerHTML =
      `<button class="x" data-close aria-label="Close">×</button><p class="m-hi" lang="hi">${esc(s.nameHi)}</p><h2 id="mTitle">${esc(s.name)}</h2>
      <div class="m-price"><b>${esc(s.price)}</b><small>Final dakshina depends on the ceremony, duration, location and agreed arrangements. Confirm whether samagri and travel are included.</small></div>
      <p>${esc(s.description)}</p><div class="m-facts">${fact("Approximate duration", s.duration)}${fact("Suitable occasion", s.occasion)}${fact("Preparation", s.prep)}</div>
      ${sam ? `<h3>Samagri and responsibilities</h3><ul class="m-list">${sam}</ul>` : ""}
      <a class="btn btn-wa btn-lg" style="margin-top:1.5rem" target="_blank" rel="noopener" href="${wa(`Namaste ${D.honorific}, I would like to enquire about ${s.name}. Please share availability and charges.`)}">${waBtn("Enquire about this pooja on WhatsApp")}</a>`;
    document.body.style.overflow = "hidden";
    modal.showModal();
    $("#modalIn").scrollTop = 0;
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-close]")) modal.close();
  });
  modal.addEventListener("close", () => (document.body.style.overflow = ""));
  $("#lightbox").addEventListener(
    "close",
    () => (document.body.style.overflow = ""),
  );

  /* ---------- contact, footer, floating ---------- */
  function contact() {
    const li = (ic, k, v) =>
      `<li><span class="ic">${ic}</span><div><small>${k}</small>${v}</div></li>`;
    const items = [];
    if (phoneOk)
      items.push(
        li(
          I.ph,
          "Phone",
          `<a href="tel:${phoneDigits}"><b>${esc(D.phone)}</b></a>`,
        ),
      );
    if (waOk)
      items.push(
        li(
          I.wa,
          "WhatsApp",
          `<a href="${wa("Namaste " + D.honorific)}" target="_blank" rel="noopener"><b>Message ${esc(D.honorific)}</b></a>`,
        ),
      );
    if (D.email)
      items.push(
        li(
          I.mail,
          "Email",
          `<a href="mailto:${esc(D.email)}"><b>${esc(D.email)}</b></a>`,
        ),
      );
    items.push(
      li(
        I.pin,
        "Location",
        `<b>${esc(D.address ? D.address + ", " : "")}${esc(place)}</b>${D.travelNote ? `<br><span style="color:var(--mute);font-size:.9rem">${esc(D.travelNote)}</span>` : ""}`,
      ),
    );
    if (D.availability)
      items.push(li(I.clock, "Availability", `<b>${esc(D.availability)}</b>`));
    $("#contactInfo").innerHTML =
      `<h2>Let us plan your ceremony</h2><p>Share your ceremony details, preferred date and location. ${esc(D.honorific)} will confirm availability and arrangements with you.</p><ul class="clist">${items.join("")}</ul>`;
    $("#fSubmit").innerHTML = waBtn("Send enquiry on WhatsApp");
    const f = $("#enquiry");
    f.date.min = new Date().toISOString().split("T")[0];
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = Object.fromEntries(new FormData(f));
      const err = $("#formErr");
      let bad = [];
      ["name", "location", "pooja"].forEach((k) => {
        const ok = (v[k] || "").trim();
        f[k].classList.toggle("bad", !ok);
        if (!ok) bad.push(k);
      });
      const okm = (v.mobile || "").replace(/\D/g, "").length >= 10;
      f.mobile.classList.toggle("bad", !okm);
      if (!okm) bad.push("mobile");
      err.hidden = !bad.length;
      if (bad.length) {
        err.textContent =
          "Please check the highlighted fields: name, a 10-digit mobile number, pooja and location.";
        f[bad[0]].focus();
        return;
      }
      const msg = `Namaste ${D.honorific},\nName: ${v.name.trim()}\nMobile: ${v.mobile.trim()}\nPooja: ${v.pooja}\nPreferred date: ${v.date || "Not specified"}\nLocation: ${v.location.trim()}\nSamagri: ${v.samagri}\nRequirements: ${(v.notes || "").trim() || "None"}\n\nPlease confirm availability and the total charges.`;
      window.open(wa(msg), "_blank", "noopener,noreferrer");
    });
    $("#waFloat").href = wa(
      `Namaste ${D.honorific}, I would like to enquire about a pooja.`,
    );
    $("#waFloat").target = "_blank";
    $("#waFloat").rel = "noopener";
    $("#waFloat").innerHTML = I.wa;
    $("#mbar").innerHTML =
      (phoneOk
        ? `<a class="c" href="tel:${phoneDigits}">${I.ph}Call</a>`
        : `<a class="c" href="#services">Services</a>`) +
      `<a class="w" target="_blank" rel="noopener" href="${wa("Namaste " + D.honorific)}">${I.wa}WhatsApp</a>`;
  }
  function footer() {
    const soc = Object.entries(D.social || {})
      .filter((e) => e[1])
      .map(
        (e) =>
          `<li><a href="${esc(e[1])}" target="_blank" rel="noopener me">${esc(e[0][0].toUpperCase() + e[0].slice(1))}</a></li>`,
      )
      .join("");
    $("#footer").innerHTML =
      `<div class="foot-grid"><div><h3>${esc(D.name)}</h3><p>${esc(D.shortIntro)}</p></div>
      <div><h3>Explore</h3><ul><li><a href="#about">About</a></li><li><a href="#services">Pooja services</a></li><li><a href="#process">How it works</a></li><li><a href="#faq">FAQ</a></li><li><a href="#contact">Contact</a></li></ul></div>
      <div><h3>Popular pooja</h3><ul>${S.services
        .slice(0, 5)
        .map(
          (s) =>
            `<li><a href="#services" data-foot="${esc(s.slug)}">${esc(s.name)}</a></li>`,
        )
        .join("")}</ul></div>
      <div><h3>Contact</h3><ul>${phoneOk ? `<li><a href="tel:${phoneDigits}">${esc(D.phone)}</a></li>` : ""}${D.email ? `<li><a href="mailto:${esc(D.email)}">${esc(D.email)}</a></li>` : ""}<li>${esc(D.address ? D.address + ", " : "")}${esc(place)}, ${esc(D.country)}</li>${has(D.serviceArea) ? `<li>Serving ${esc(D.serviceArea.join(", "))}</li>` : ""}${soc}</ul></div></div>
      <div class="foot-bot"><span>© ${new Date().getFullYear()} ${esc(D.siteName || D.name)}. All rights reserved.</span><span>Details shared in an enquiry are used only to prepare your WhatsApp message.</span></div>`;
    $("#footer").addEventListener("click", (e) => {
      const a = e.target.closest("[data-foot]");
      if (a) {
        e.preventDefault();
        openModal(a.dataset.foot);
      }
    });
  }

  /* ---------- nav ---------- */
  const burger = $("#burger"),
    nav = $("#nav");
  burger.addEventListener("click", () => {
    const o = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", o);
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", false);
    }
  });
  addEventListener(
    "scroll",
    () => $("#header").classList.toggle("scrolled", scrollY > 10),
    { passive: true },
  );
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", false);
    }
  });

  seo();
  header();
  hero();
  trust();
  about();
  blocks();
  gallery();
  services();
  contact();
  footer();
})();
