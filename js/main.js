/* Redman Consulting demo — shared behavior:
   header/footer injection, mobile nav, category wheel + info popup,
   blog/category/article rendering, tab switching. */

const RC_NAV = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "view.html", label: "View" },
  { href: "blog.html", label: "Blog" },
  { href: "contact.html", label: "Contact" }
];

function rcIconSvg(iconName) {
  // returns the inline markup wrapper; actual icon loaded via <img> for simplicity/perf
  return `<img src="assets/icons/${iconMap(iconName)}.svg" alt="" />`;
}
function iconMap(name) { return name; }

function renderHeader({ title = null, page = "" } = {}) {
  const el = document.getElementById("site-header");
  if (!el) return;
  const navLinks = RC_NAV.map(n => {
    const active = n.href.replace(".html", "") === page ? " active" : "";
    return `<li><a class="${active.trim()}" href="${n.href}">${n.label}</a></li>`;
  }).join("");

  el.innerHTML = `
  <div class="header-bar">
    <a class="brand" href="index.html">
      <span class="brand-mark"><img src="assets/logo-circle.svg" alt="Redman Consulting logo" /></span>
      <span class="brand-tagline">Strategic Planning for a Changing Planet</span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">&#9776;</button>
    <nav class="main-nav" id="mainNav"><ul>${navLinks}</ul></nav>
  </div>
  ${title ? `<div class="page-title-band"><h1>${title}</h1></div>` : `<div style="height:30px"></div>`}
  <svg class="header-wave" viewBox="0 0 1500 100" preserveAspectRatio="none">
    <path d="M0,100 L1500,100 L1500,15 C1200,15 1050,90 750,90 C450,90 300,15 0,15 Z"/>
  </svg>`;

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const recent = rcRecentArticles(4);
  const newsItems = recent.map(a => `<li><a href="article.html?cat=${a.cat}&id=${a.id}">${a.title}</a></li>`).join("");

  el.innerHTML = `
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <div class="footer-logo"><img src="assets/logo-horizontal.svg" alt="Redman Consulting" /></div>
        <p>Deborah Redman enjoys helping her clients understand the issues they face, expand the range of opportunities available, and take practical steps toward well-considered goals. She sees the big picture, but has her feet on the ground.</p>
        <p>Deborah has served as a Project Manager for public and private clients, on projects involving all aspects of transportation and urban planning. With 30 years of experience, she provides technical analysis, policy, and strategic planning, and conducts public outreach and involvement efforts on controversial topics, always using a creative, solution-oriented management style to address complex, difficult issues.</p>
        <div class="social-row">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Twitter">tw</a>
          <a href="#" aria-label="RSS">rss</a>
        </div>
      </div>
      <div>
        <h4>Recent Articles</h4>
        <ul class="footer-news">${newsItems}</ul>
      </div>
      <div>
        <h4>Categories</h4>
        <ul>${RC_CATEGORIES.slice(0,5).map(c => `<li><a href="category.html?cat=${c.slug}">${c.name}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:hello@policycontinuum.com">hello@policycontinuum.com</a></li>
          <li><a href="contact.html">Send a message &rarr;</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} Redman Consulting. All rights reserved. (Demo site)</span>
      <nav><a href="index.html">Home</a><a href="about.html">About</a><a href="view.html">View</a><a href="blog.html">Blog</a><a href="contact.html">Contact</a></nav>
    </div>
  </div>`;
}

/* ---------------- Category wheel + popup (home page) ---------------- */
async function initWheel() {
  const wrap = document.getElementById("wheel");
  if (!wrap) return;

  try {
    const res = await fetch("assets/infographic.svg");
    if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
    const markup = await res.text();
    wrap.innerHTML = markup;
  } catch (err) {
    console.error("Could not load infographic.svg", err);
    wrap.innerHTML = `<p style="text-align:center;color:var(--rc-muted)">Category wheel graphic unavailable.</p>`;
    return;
  }

  const hotspots = wrap.querySelectorAll(".wheel-hotspot[data-cat]");
  hotspots.forEach(node => {
    const cat = rcCategoryBySlug(node.dataset.cat);
    if (!cat) return;
    node.addEventListener("click", () => openPopup(cat));
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPopup(cat);
      }
    });
  });
}

function openPopup(cat) {
  const overlay = document.getElementById("rcPopupOverlay");
  if (!overlay) return;
  overlay.innerHTML = `
    <div class="rc-popup" role="dialog" aria-modal="true">
      <div class="rc-popup-head" style="background:linear-gradient(120deg, ${cat.color}, ${cat.colorDark})">
        <h3>${cat.name}</h3>
        <button class="rc-popup-close" id="rcPopupClose" aria-label="Close">&times;</button>
        <svg class="rc-popup-wave" viewBox="0 0 400 40" preserveAspectRatio="none"><path d="M0,0 L400,0 L400,10 C300,38 100,38 0,6 Z"/></svg>
      </div>
      <div class="rc-popup-body">
        <div class="rc-popup-icon">${rcIconSvg(cat.icon)}</div>
        <div class="tagline">${cat.tagline}</div>
        <p>${cat.description}</p>
        <a class="btn btn-solid" style="background:${cat.color};border-color:${cat.color}" href="category.html?cat=${cat.slug}">Explore ${cat.name}</a>
      </div>
    </div>`;
  overlay.classList.add("open");
  document.getElementById("rcPopupClose").addEventListener("click", closePopup);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closePopup(); });
  document.addEventListener("keydown", escClose);
}
function closePopup() {
  const overlay = document.getElementById("rcPopupOverlay");
  overlay.classList.remove("open");
  overlay.innerHTML = "";
  document.removeEventListener("keydown", escClose);
}
function escClose(e) { if (e.key === "Escape") closePopup(); }

/* ---------------- Blog landing grid ---------------- */
function renderCategoryGrid() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;
  grid.innerHTML = RC_CATEGORIES.map(cat => `
    <a class="category-card" href="category.html?cat=${cat.slug}" style="background:${cat.color}">
      <h3>${cat.name}</h3>
      <div class="card-fade">
        <svg class="card-wave" viewBox="0 0 400 30" preserveAspectRatio="none"><path d="M0,30 L400,30 L400,10 C300,-15 100,-15 0,12 Z"/></svg>
        <div class="card-icon">${rcIconSvg(cat.icon)}</div>
      </div>
      <div class="card-spacer"></div>
    </a>`).join("");
}

/* ---------------- Category / article listing page ---------------- */
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function renderCategoryPage() {
  const root = document.getElementById("categoryPage");
  if (!root) return;
  const slug = getParam("cat") || RC_CATEGORIES[0].slug;
  const cat = rcCategoryBySlug(slug) || RC_CATEGORIES[0];
  const articles = rcArticlesForCategory(cat.slug);

  document.title = `${cat.name} — Redman Consulting`;
  renderHeader({ title: cat.name, page: "" });
  document.querySelector(".site-header").style.background = `linear-gradient(100deg, ${cat.color}, ${cat.colorDark})`;

  const cardsHtml = articles.length ? articles.map(a => `
    <div class="article-card">
      <div class="ac-head" style="background:${cat.color}">${a.title}</div>
      <div class="ac-body">
        <div class="ac-date">${a.date}</div>
        <p>${a.excerpt}</p>
        <a class="read-more" style="color:${cat.color}" href="article.html?cat=${cat.slug}&id=${a.id}">Read More &rarr;</a>
      </div>
    </div>`).join("") : `<p>No articles published in this category yet — check back soon.</p>`;

  root.innerHTML = `
    <div class="category-main">
      <h1 style="color:${cat.color}">${cat.name}</h1>
      <p style="max-width:640px;margin-top:-18px;margin-bottom:32px;color:var(--rc-muted)">${cat.description}</p>
      <div class="article-cards">${cardsHtml}</div>
    </div>
    <div class="category-side">
      ${sidebarHtml(cat.slug)}
    </div>`;
}

function sidebarHtml(activeSlug) {
  const catItems = RC_CATEGORIES.map(c => `<li><a class="${c.slug===activeSlug?'current':''}" href="category.html?cat=${c.slug}">${c.name}</a></li>`).join("");
  const recentItems = rcRecentArticles(4).map(a => `<li><a href="article.html?cat=${a.cat}&id=${a.id}">${a.title}</a></li>`).join("");
  return `
    <div class="side-block">
      <h4>Categories</h4>
      <ul>${catItems}</ul>
    </div>
    <div class="side-block recent">
      <h4>Recent Articles</h4>
      <ul>${recentItems}</ul>
    </div>`;
}

/* ---------------- Single article page ---------------- */
function renderArticlePage() {
  const root = document.getElementById("articlePage");
  if (!root) return;
  const catSlug = getParam("cat") || RC_CATEGORIES[0].slug;
  const id = getParam("id");
  const cat = rcCategoryBySlug(catSlug) || RC_CATEGORIES[0];
  const article = RC_ARTICLES.find(a => a.id === id) || rcArticlesForCategory(cat.slug)[0] || RC_ARTICLES[0];

  document.title = `${article.title} — Redman Consulting`;
  renderHeader({ title: cat.name, page: "" });
  document.querySelector(".site-header").style.background = `linear-gradient(100deg, ${cat.color}, ${cat.colorDark})`;

  const hasFullContent = Array.isArray(article.content) && article.content.length > 0;

  if (hasFullContent) {
    root.innerHTML = `
      <div class="article-body">
        <div class="kicker" style="color:${cat.color}">${cat.name}</div>
        <h1>${article.title}</h1>
        <p class="article-byline"><strong>${article.byline || article.date}</strong></p>
        ${renderArticleContentBlocks(article.content)}
        ${article.signoff ? `<p class="article-signoff"><em>${article.signoff}</em></p>` : ""}
      </div>
      <div class="category-side">
        ${sidebarHtml(cat.slug)}
      </div>`;
    return;
  }

  root.innerHTML = `
    <div class="article-body">
      <div class="kicker" style="color:${cat.color}">${cat.name}</div>
      <h1>${article.title}</h1>
      <div class="tabs">
        <button class="tab-btn active" data-tab="issues" style="background:${cat.color}">Issues</button>
        <button class="tab-btn" data-tab="solutions" style="background:${cat.colorDark}">Solutions</button>
      </div>
      <div class="tab-panel active" data-panel="issues">
        <div class="article-figure"><img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&q=60" alt="" /></div>
        <p><strong>${article.date}</strong></p>
        <p>${article.excerpt}</p>
        <p>This is where the full write-up of the issue goes — background, why it matters, and what's at stake for the agencies and communities involved. In the finished site this pulls from the real article content; this demo shows the layout and interaction pattern with placeholder copy.</p>
        <p>A second paragraph continues the discussion, giving room for supporting detail, data points, or a short case example before handing off to the Solutions tab.</p>
      </div>
      <div class="tab-panel" data-panel="solutions">
        <p>The Solutions tab is where the same article pivots from diagnosis to approach — what's actually being done or recommended, in practical terms.</p>
        <p>Swap this placeholder for the real recommendations, next steps, or case outcomes tied to "${article.title}".</p>
      </div>
    </div>
    <div class="category-side">
      ${sidebarHtml(cat.slug)}
    </div>`;

  root.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      root.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      root.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add("active");
    });
  });
}

function renderArticleContentBlocks(blocks) {
  return blocks.map(block => {
    if (block.type === "h2") return `<h2>${block.text}</h2>`;
    if (block.type === "note") return `<p class="article-note"><em>${block.text}</em></p>`;
    return `<p>${block.text}</p>`;
  }).join("");
}
