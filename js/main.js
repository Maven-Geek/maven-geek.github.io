/* Renders the content from data.js into index.html. You should not need to edit this file. */
(function () {
  "use strict";
  var P = window.PORTFOLIO;
  if (!P) return;

  // ---------- helpers ----------
  function h(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "text") node.textContent = v;
        else if (k === "class") node.className = v;
        else node.setAttribute(k, v);
      });
    }
    (children || []).forEach(function (c) {
      if (c === null || c === undefined) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }
  function isExternal(url) { return /^https?:\/\//i.test(url || ""); }
  function link(label, url, cls) {
    var ext = isExternal(url);
    return h("a", { href: url, class: cls || null, target: ext ? "_blank" : null, rel: ext ? "noopener" : null, text: label });
  }
  function slots(name) { return document.querySelectorAll('[data-fill="' + name + '"]'); }
  function fillText(name, value) { slots(name).forEach(function (n) { n.textContent = value; }); }
  function fill(name, nodes) {
    slots(name).forEach(function (slot) {
      slot.textContent = "";
      nodes.forEach(function (n) { slot.appendChild(n.cloneNode(true)); });
    });
  }
  function fmtDate(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  // ---------- intro ----------
  fillText("name", P.name);
  fillText("roleline", P.role + (P.location ? " in " + P.location : ""));
  document.title = P.name + ", " + P.role;

  fill("intro", (P.intro || []).map(function (t) { return h("p", { text: t }); }));

  var actions = [];
  if (P.links.email) actions.push(link("Email me", "mailto:" + P.links.email, "btn btn-primary"));
  if (P.links.resume) actions.push(h("a", { href: P.links.resume, class: "btn", download: "", text: "Download resume" }));
  if (P.links.github) actions.push(link("GitHub", P.links.github, "btn btn-quiet"));
  if (P.links.linkedin) actions.push(link("LinkedIn", P.links.linkedin, "btn btn-quiet"));
  fill("actions", actions);

  var facts = [];
  (P.facts || []).forEach(function (f) {
    facts.push(h("div", { class: "fact" }, [h("dt", { text: f.label }), h("dd", { text: f.value })]));
  });
  fill("facts", facts);

  // Photo, with initials as the fallback until images/profile.jpg exists
  var initials = P.name.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase();
  fillText("initials", initials);
  var portrait = document.querySelector(".portrait");
  var img = document.querySelector('[data-fill="photo"]');
  img.alt = "Photo of " + P.name;
  img.addEventListener("load", function () { portrait.classList.add("has-photo"); });
  img.addEventListener("error", function () { portrait.classList.remove("has-photo"); });
  if (P.photo) img.src = P.photo;

  // ---------- skills ----------
  var skills = [];
  (P.skills || []).forEach(function (s) {
    skills.push(h("div", { class: "skill-row" }, [h("dt", { text: s.group }), h("dd", { text: s.items.join(", ") })]));
  });
  fill("skills", skills);

  // ---------- projects ----------
  fill("projects", (P.projects || []).map(function (p) {
    var links = (p.links || []).map(function (l) { return link(l.label, l.url, "text-link"); });
    return h("article", { class: "project" }, [
      h("h3", { text: p.title }),
      h("p", { text: p.summary }),
      p.stack && p.stack.length ? h("p", { class: "stack" }, [h("span", { class: "stack-label", text: "Built with " }), p.stack.join(", ")]) : null,
      links.length ? h("p", { class: "links" }, links) : null
    ]);
  }));

  // ---------- experience ----------
  fill("experience", (P.experience || []).map(function (e) {
    return h("article", { class: "job" }, [
      h("div", { class: "job-head" }, [
        h("h3", { text: e.role }),
        h("p", { class: "job-when", text: e.start + " to " + e.end })
      ]),
      h("p", { class: "job-org", text: e.org + (e.place ? ", " + e.place : "") }),
      h("ul", null, (e.points || []).map(function (pt) { return h("li", { text: pt }); }))
    ]);
  }));

  // ---------- articles ----------
  var articles = (P.articles || []).slice().sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
  if (articles.length === 0) {
    fill("articles", [h("li", { class: "empty" }, [
      "The first article is on its way. ",
      P.links.linkedin ? link("Follow on LinkedIn", P.links.linkedin, "text-link") : null,
      P.links.linkedin ? " to catch it." : null
    ])]);
  } else {
    fill("articles", articles.map(function (a) {
      var meta = [a.readTime, a.where ? "on " + a.where : null].filter(Boolean).join(", ");
      return h("li", { class: "article" }, [
        h("time", { datetime: a.date, text: fmtDate(a.date) }),
        h("div", null, [
          h("h3", null, [link(a.title, a.url)]),
          a.summary ? h("p", { text: a.summary }) : null,
          meta ? h("p", { class: "meta", text: meta }) : null
        ])
      ]);
    }));
  }

  // ---------- education and certifications ----------
  fill("education", (P.education || []).map(function (e) {
    return h("li", null, [h("strong", { text: e.title }), h("span", { text: e.org + (e.when ? ", " + e.when : "") })]);
  }));
  fill("certifications", (P.certifications || []).map(function (c) {
    var title = c.url ? link(c.title, c.url) : h("strong", { text: c.title });
    if (c.url) title.classList.add("strong-link");
    return h("li", null, [title, h("span", { text: c.org + (c.when ? ", " + c.when : "") })]);
  }));

  // ---------- contact and footer ----------
  fillText("contactLine", P.contactLine || "");
  var contact = [];
  if (P.links.email) contact.push(link(P.links.email, "mailto:" + P.links.email, "contact-email"));
  var small = [];
  if (P.links.github) small.push(link("GitHub", P.links.github, "text-link"));
  if (P.links.linkedin) small.push(link("LinkedIn", P.links.linkedin, "text-link"));
  if (P.links.resume) small.push(h("a", { href: P.links.resume, class: "text-link", download: "", text: "Resume (PDF)" }));
  contact.push(h("p", { class: "links" }, small));
  fill("contactLinks", contact);
  fillText("footer", "© " + new Date().getFullYear() + " " + P.name + ". Built with plain HTML and CSS.");

  // ---------- lineage rail: section navigation that tracks your place ----------
  var rail = document.querySelector(".rail-list");
  var blocks = Array.prototype.slice.call(document.querySelectorAll("[data-node]"));
  var items = blocks.map(function (b) {
    var a = h("a", { href: "#" + b.id }, [h("span", { class: "node", "aria-hidden": "true" }), h("span", { text: b.getAttribute("data-node") })]);
    var li = h("li", null, [a]);
    rail.appendChild(li);
    return li;
  });
  function setActive(idx) {
    items.forEach(function (li, i) {
      li.classList.toggle("is-active", i === idx);
      li.classList.toggle("is-done", i < idx);
      var a = li.querySelector("a");
      if (i === idx) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
    });
  }
  function onScroll() {
    var line = window.innerHeight * 0.35;
    var idx = -1;
    blocks.forEach(function (b, i) { if (b.getBoundingClientRect().top <= line) idx = i; });
    setActive(idx);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  // ---------- theme toggle ----------
  var root = document.documentElement;
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.querySelector(".theme-toggle").addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // One orchestrated entrance for the intro
  requestAnimationFrame(function () { document.body.classList.add("ready"); });
})();
