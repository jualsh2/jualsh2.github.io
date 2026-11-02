(function () {
  "use strict";
  var D = window.PORTFOLIO;
  var P = D.person;

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function $(sel) { return document.querySelector(sel); }
  function projectUrl(slug) { return "project.html?p=" + encodeURIComponent(slug); }
  function byslug(slug) { return D.projects.filter(function (p) { return p.slug === slug; })[0]; }

  /* ---------- Theme ---------- */
  function currentTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paintToggle() {
    var label = document.querySelector("[data-theme-label]");
    if (label) label.textContent = currentTheme() === "dark" ? "Light mode" : "Dark mode";
  }
  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paintToggle();
    });
    paintToggle();
  }
  window.PORTFOLIO_UTIL = { el: el, byslug: byslug, projectUrl: projectUrl };

  if (!document.querySelector("[data-featured]")) return; // case-study page

  /* ---------- Hero ---------- */
  $('[data-field="role"]').textContent = P.role + " · " + P.location;
  $('[data-field="intro"]').textContent = P.intro;
  document.querySelectorAll('[data-link="github"]').forEach(function (a) { a.href = P.github; });
  document.querySelectorAll('[data-link="linkedin"]').forEach(function (a) { a.href = P.linkedin; });

  /* ---------- Featured ---------- */
  var feat = $("[data-featured]");
  D.projects.filter(function (p) { return p.featured; }).forEach(function (p) {
    var img = el("img", { src: p.cover, alt: p.coverAlt, loading: "lazy", width: "800", height: "550" });
    var tags = el("ul", { class: "tags", "aria-label": "Technologies" }, p.tech.slice(0, 6).map(function (t) { return el("li", { text: t }); }));
    feat.appendChild(el("article", { class: "feature" }, [
      el("a", { class: "feature-media", href: projectUrl(p.slug), tabindex: "-1", "aria-hidden": "true" }, [img]),
      el("div", null, [
        el("p", { class: "context", text: p.context }),
        el("h3", null, [el("a", { href: projectUrl(p.slug), text: p.title })]),
        el("p", { text: p.tagline }),
        el("p", { class: "role-line", text: "My part: " + p.role }),
        tags,
        el("a", { class: "btn", href: projectUrl(p.slug), text: "Read the case study" })
      ])
    ]));
  });

  /* ---------- All projects: filter + search ---------- */
  var list = $("[data-project-list]");
  var filters = $("[data-filters]");
  var search = $("[data-search]");
  var count = $("[data-count]");
  var active = "all";

  D.categories.forEach(function (c) {
    var b = el("button", { type: "button", "aria-pressed": c.id === active ? "true" : "false", text: c.label });
    b.addEventListener("click", function () {
      active = c.id;
      filters.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      renderList();
    });
    filters.appendChild(b);
  });
  search.addEventListener("input", renderList);

  function renderList() {
    var q = search.value.trim().toLowerCase();
    var shown = D.projects.filter(function (p) {
      var inCat = active === "all" || p.category.indexOf(active) !== -1;
      var hay = [p.title, p.tagline, p.context, p.tech.join(" ")].join(" ").toLowerCase();
      return inCat && (!q || hay.indexOf(q) !== -1);
    });
    list.innerHTML = "";
    shown.forEach(function (p) {
      list.appendChild(el("li", { class: "pcard-wrap" }, [
        el("a", { class: "pcard", href: projectUrl(p.slug) }, [
          p.cover ? el("img", { src: p.cover, alt: "", loading: "lazy", width: 800, height: 500 }) : null,
          el("div", { class: "pcard-body" }, [
            el("p", { class: "pcard-meta", text: p.context }),
            el("h3", { text: p.title }),
            el("p", { class: "pcard-tag", text: p.tagline }),
            el("ul", { class: "tags", "aria-label": "Technologies" }, p.tech.slice(0, 4).map(function (t) { return el("li", { text: t }); }))
          ])
        ])
      ]));
    });
    if (!shown.length) list.appendChild(el("li", { class: "empty", text: "No project matches that search. Try a technology like Python or PHP, or choose All." }));
    count.textContent = shown.length + (shown.length === 1 ? " project shown" : " projects shown");
  }
  renderList();

  /* ---------- About ---------- */
  var about = $("[data-about]");
  P.about.forEach(function (t) { about.appendChild(el("p", { text: t })); });

  var exp = $("[data-experience]");
  D.experience.forEach(function (e) {
    exp.appendChild(el("li", null, [
      el("h3", { text: e.title }),
      el("p", { class: "meta", text: e.org + ", " + e.date }),
      el("ul", null, e.points.map(function (t) { return el("li", { text: t }); }))
    ]));
  });

  var lead = $("[data-leadership]");
  D.leadership.forEach(function (l) {
    lead.appendChild(el("li", null, [el("span", { text: l.title + ", " + l.org }), el("span", { text: l.date })]));
  });

  /* ---------- Skills ---------- */
  var sk = $("[data-skills]");
  D.skills.forEach(function (g) {
    var ul = el("ul", { class: "skill-list" });
    g.items.forEach(function (s) {
      var links = el("span", { class: "skill-links" });
      links.appendChild(document.createTextNode("Used in "));
      s.projects.forEach(function (slug, i) {
        var p = byslug(slug);
        if (!p) return;
        if (i > 0) links.appendChild(document.createTextNode(i === s.projects.length - 1 ? " and " : ", "));
        links.appendChild(el("a", { href: projectUrl(slug), text: p.title }));
      });
      ul.appendChild(el("li", null, [el("span", { class: "skill-name", text: s.name }), links]));
    });
    sk.appendChild(el("div", null, [el("h3", { text: g.group }), ul]));
  });

  $('[data-field="avatar"]').src = "assets/img/bitmoji.webp";

  /* ---------- Education & certificates ---------- */
  var edu = $("[data-education]");
  D.education.forEach(function (e) {
    edu.appendChild(el("li", null, [
      el("h3", { text: e.degree }),
      el("p", { class: "meta", text: e.org + ", " + e.date }),
      e.note ? el("p", { text: e.note, style: "font-size:1rem" }) : null
    ]));
  });
  var certs = $("[data-certificates]");
  D.certificates.forEach(function (c) {
    var org = c.issuer.replace(/\s*\(Coursera\)/, "");
    var via = /Coursera/.test(c.issuer) ? "Coursera" : c.issuer;
    var kind = c.kind || "Course";
    var media = el("div", { class: "cert-media" });
    var fallback = function () { media.textContent = ""; media.appendChild(el("span", { class: "cert-fallback", text: org })); };
    if (c.image) {
      var im = el("img", { src: c.image, alt: "Certificate: " + c.name + ", " + org, loading: "lazy", referrerpolicy: "no-referrer" });
      im.addEventListener("error", fallback);
      media.appendChild(im);
    } else fallback();
    var body = [
      media,
      el("div", { class: "cert-body" }, [
        el("p", { class: "cert-meta" }, [el("span", { text: kind === "Membership" ? "Membership" : "Course via " + via }), el("span", { text: c.date })]),
        el("h4", { class: "cert-name", text: c.name }),
        el("p", { class: "cert-org", text: org }),
        c.verify ? el("span", { class: "cert-verify", text: "Verify credential \u2197" }) : null
      ])
    ];
    certs.appendChild(el("li", null, [c.verify
      ? el("a", { class: "cert", href: c.verify, target: "_blank", rel: "noopener", "aria-label": c.name + ", " + org + ", " + c.date + ". Verify credential, opens in a new tab" }, body)
      : el("div", { class: "cert" }, body)]));
  });

  /* ---------- Portrait toggle ---------- */
  var pt = $("[data-portrait]");
  if (pt) pt.addEventListener("click", function () {
    var on = pt.getAttribute("aria-pressed") !== "true";
    pt.setAttribute("aria-pressed", String(on));
  });

  /* ---------- Contact ---------- */
  var ct = $("[data-contact]");
  ct.appendChild(el("a", { class: "btn primary", href: "mailto:" + P.email, text: P.email }));
  ct.appendChild(el("a", { class: "btn", href: "tel:" + P.phoneHref, text: P.phone }));
  ct.appendChild(el("a", { class: "btn", href: P.linkedin, text: "LinkedIn" }));
  ct.appendChild(el("a", { class: "btn", href: P.github, text: "GitHub" }));
})();
