/* Redman Consulting demo — content model
   All copy here is placeholder/demo content standing in for the client's
   real posts, written to show how the template renders once real content
   is dropped in. Swap freely. */

const RC_CATEGORIES = [
  {
    slug: "stewardship-resources",
    name: "Stewardship & Resources",
    tagline: "Natural resources, climate change, the planet",
    description: "How communities plan around the natural systems they depend on — water, land, air, and the climate realities reshaping all three.",
    color: "#b81f5c",
    colorDark: "#8f1849",
    icon: "stewardship"
  },
  {
    slug: "exchange-distribution",
    name: "Exchange & Distribution",
    tagline: "Funding, markets, and how resources move",
    description: "The flow of money and materials through public systems — grants, budgets, procurement, and the trade-offs that come with each.",
    color: "#e0213f",
    colorDark: "#b0182f",
    icon: "exchange"
  },
  {
    slug: "provisioning",
    name: "Provisioning",
    tagline: "Housing, food, and basic needs",
    description: "Making sure the built environment actually provides for the people living in it — shelter, nourishment, and everyday essentials.",
    color: "#df6a2a",
    colorDark: "#b3521f",
    icon: "provisioning"
  },
  {
    slug: "transportation",
    name: "Transportation",
    tagline: "Mobility, transit, and how people get where they're going",
    description: "Transit planning, freight demand, mobility management, and the grant strategy that keeps public transportation projects funded.",
    color: "#7a1f3b",
    colorDark: "#5c1730",
    icon: "transportation"
  },
  {
    slug: "technics",
    name: "Technics",
    tagline: "Tools, methods, and technical practice",
    description: "The technical craft behind planning work — data, modeling, and the methods that turn analysis into a workable plan.",
    color: "#ea7fa1",
    colorDark: "#c95d81",
    icon: "technics"
  },
  {
    slug: "governance",
    name: "Governance",
    tagline: "Policy, regulation, and consensus-building",
    description: "The rules and relationships that make public decisions stick — regulation, coalition-building, and institutional design.",
    color: "#eeb62d",
    colorDark: "#c99616",
    icon: "governance"
  },
  {
    slug: "transformation",
    name: "Transformation",
    tagline: "Change, adaptation, and what comes next",
    description: "Where planning meets change management — redevelopment, adaptation, and the messy middle of turning plans into reality.",
    color: "#ef8a2e",
    colorDark: "#c66c1c",
    icon: "transformation"
  },
  {
    slug: "source",
    name: "Source",
    tagline: "Research, theory, and where ideas come from",
    description: "The reading, research, and theory underneath the practice — where today's planning problems were first described.",
    color: "#a08d95",
    colorDark: "#7d6d74",
    icon: "source"
  }
];

const RC_ARTICLES = [
  { id: "grant-strategy-transit", cat: "transportation", title: "Building a Grant Strategy That Survives Contact With Reality", date: "June 3, 2026", excerpt: "Winning the grant is the easy part. Here's what it takes to keep a multi-year transit funding strategy on track through changing priorities and budget cycles." },
  { id: "mobility-management-101", cat: "transportation", title: "What Mobility Management Actually Means", date: "May 18, 2026", excerpt: "A plain-language look at how transit and human-services agencies coordinate to get elderly, disabled, and low-income riders where they need to go." },
  { id: "freight-demand-modeling", cat: "transportation", title: "Freight Demand Modeling for Non-Engineers", date: "April 22, 2026", excerpt: "You don't need to run the model yourself to ask the right questions about it. A field guide for planners and policy staff." },
  { id: "climate-resilient-infrastructure", cat: "stewardship-resources", title: "Planning Infrastructure for a Climate That Won't Hold Still", date: "June 10, 2026", excerpt: "Stationarity is dead. What that means for how we size, site, and sequence infrastructure investment." },
  { id: "watersheds-and-jurisdictions", cat: "stewardship-resources", title: "Watersheds Don't Care About Jurisdictions", date: "May 2, 2026", excerpt: "Natural systems cross city lines. Governance structures usually don't. Here's how that gap gets bridged — or doesn't." },
  { id: "reading-a-budget", cat: "exchange-distribution", title: "How to Actually Read a Public Agency Budget", date: "May 27, 2026", excerpt: "A working framework for finding out what an agency's budget really prioritizes, not just what the press release says." },
  { id: "housing-basic-needs", cat: "provisioning", title: "Housing as Infrastructure, Not Just Shelter", date: "April 9, 2026", excerpt: "What changes when a community plans for housing the same way it plans for roads and water systems." },
  { id: "consensus-building-basics", cat: "governance", title: "Consensus-Building When Nobody Agrees on the Problem", date: "March 30, 2026", excerpt: "Before you can build consensus on a solution, you often have to build consensus on what's actually broken." },
  { id: "redevelopment-lessons", cat: "transformation", title: "Three Redevelopment Lessons From Projects That Didn't Go As Planned", date: "March 14, 2026", excerpt: "What years of transportation and land-use redevelopment work teach you about managing change nobody fully controls." },
  { id: "limits-to-growth-again", cat: "source", title: "Revisiting Limits to Growth, Fifty Years Later", date: "February 26, 2026", excerpt: "The 1972 report predicted a lot of what planners are still arguing about today. Worth another look." },
  { id: "technical-tools-overview", cat: "technics", title: "The Technical Toolkit Every Planning Generalist Should Know", date: "February 11, 2026", excerpt: "You don't have to be a specialist in everything, but you do need to know what each tool is for." },
  { id: "checklist-culture", cat: "governance", title: "In Defense of the Boring Checklist", date: "January 22, 2026", excerpt: "Grant compliance checklists don't inspire anyone, but they're often the difference between funded and defunded." }
];

function rcArticlesForCategory(slug) {
  return RC_ARTICLES.filter(a => a.cat === slug);
}

function rcRecentArticles(limit = 4) {
  return RC_ARTICLES.slice(0, limit);
}

function rcCategoryBySlug(slug) {
  return RC_CATEGORIES.find(c => c.slug === slug);
}
