(function () {
  "use strict";
  var D = window.PORTFOLIO, U = window.PORTFOLIO_UTIL, el = U.el;
  var root = document.querySelector("[data-case]");
  var slug = new URLSearchParams(location.search).get("p");
  var p = U.byslug(slug);

  if (!p) {
    document.title = "Project not found · Joman Alsharbini";
    root.appendChild(el("h1", { text: "That project isn't here", style: "margin:16px 0" }));
    root.appendChild(el("p", { text: "The link may be out of date. Choose a project from the list instead." }));
    root.appendChild(el("a", { class: "btn primary", href: "index.html#projects", text: "See all projects" }));
    return;
  }

  document.title = p.title + " · Joman Alsharbini";
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", p.tagline);
  var ogt = document.querySelector('meta[property="og:title"]'); if (ogt) ogt.setAttribute("content", p.title + " · Joman Alsharbini");
  var ogd = document.querySelector('meta[property="og:description"]'); if (ogd) ogd.setAttribute("content", p.tagline);

  function list(items) { return el("ul", null, items.map(function (t) { return el("li", { text: t }); })); }
  function section(title, nodes) { return el("section", null, [el("h2", { text: title })].concat(nodes)); }

  root.appendChild(el("header", { class: "case-head" }, [
    el("p", { class: "context", text: p.context }),
    el("h1", { text: p.title }),
    el("p", { class: "lead", text: p.tagline }),
    p.links.length ? el("div", { class: "case-links" }, p.links.map(function (l, i) {
      return el("a", { class: "btn" + (i === 0 ? " primary" : ""), href: l.href, text: l.label });
    })) : null
  ]));

  var facts = el("dl", { class: "case-facts" }, [
    el("div", null, [el("dt", { text: "My part" }), el("dd", { text: p.role })]),
    el("div", null, [el("dt", { text: "Team" }), el("dd", { text: p.team.join(", ") + ". " + p.teamNote + "." })]),
    el("div", null, [el("dt", { text: "Tools" }), el("dd", { text: p.tech.join(", ") })])
  ]);
  root.appendChild(facts);

  if (p.cover) root.appendChild(el("div", { class: "case-cover" }, [el("img", { src: p.cover, alt: p.coverAlt })]));

  var body = el("div", { class: "case-body" }, [
    section("The problem", [el("p", { text: p.problem })]),
    section("What we built", [el("p", { text: p.solution }), list(p.features)]),
    section("Results", [list(p.results)]),
    p.sample ? section("Example run", [el("pre", { class: "code-sample", text: p.sample })]) : null
  ]);
  root.appendChild(body);

  var gal = p.gallery.filter(function (g) { return g.src !== p.cover; });
  if (gal.length) {
    root.appendChild(el("div", { class: "gallery" }, gal.map(function (g) {
      return el("figure", null, [el("img", { src: g.src, alt: g.alt, loading: "lazy" }), el("figcaption", { text: g.caption })]);
    })));
  }

  var i = D.projects.indexOf(p), next = D.projects[(i + 1) % D.projects.length];
  root.appendChild(el("p", { class: "next-proj" }, [
    document.createTextNode("Next project: "),
    el("a", { href: U.projectUrl(next.slug), text: next.title })
  ]));
})();
