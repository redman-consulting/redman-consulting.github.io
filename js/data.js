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
    color: "#B12B5D",
    colorDark: "#8a2148",
    icon: "stewardship"
  },
  {
    slug: "exchange-distribution",
    name: "Exchange & Distribution",
    tagline: "Funding, markets, and how resources move",
    description: "The flow of money and materials through public systems — grants, budgets, procurement, and the trade-offs that come with each.",
    color: "#E83241",
    colorDark: "#b42732",
    icon: "exchange"
  },
  {
    slug: "provisioning",
    name: "Provisioning",
    tagline: "Housing, food, and basic needs",
    description: "Making sure the built environment actually provides for the people living in it — shelter, nourishment, and everyday essentials.",
    color: "#DD5A02",
    colorDark: "#ac4601",
    icon: "provisioning"
  },
  {
    slug: "transportation",
    name: "Transportation",
    tagline: "Mobility, transit, and how people get where they're going",
    description: "Transit planning, freight demand, mobility management, and the grant strategy that keeps public transportation projects funded.",
    color: "#95233D",
    colorDark: "#741b2f",
    icon: "transportation"
  },
  {
    slug: "technics",
    name: "Technics",
    tagline: "Tools, methods, and technical practice",
    description: "The technical craft behind planning work — data, modeling, and the methods that turn analysis into a workable plan.",
    color: "#EC6F8D",
    colorDark: "#b8566d",
    icon: "technics"
  },
  {
    slug: "governance",
    name: "Governance",
    tagline: "Policy, regulation, and consensus-building",
    description: "The rules and relationships that make public decisions stick — regulation, coalition-building, and institutional design.",
    color: "#EEB311",
    colorDark: "#b98b0d",
    icon: "governance"
  },
  {
    slug: "transformation",
    name: "Transformation",
    tagline: "Change, adaptation, and what comes next",
    description: "Where planning meets change management — redevelopment, adaptation, and the messy middle of turning plans into reality.",
    color: "#FF7046",
    colorDark: "#c65736",
    icon: "transformation"
  },
  {
    slug: "source",
    name: "Source",
    tagline: "Research, theory, and where ideas come from",
    description: "The reading, research, and theory underneath the practice — where today's planning problems were first described.",
    color: "#A58D9B",
    colorDark: "#806d78",
    icon: "source"
  }
];

const RC_ARTICLES = [
  {
    id: "de-souping-the-stones",
    cat: "governance",
    title: "De-Souping the Stones: Community Building, Meet Wrecking Ball",
    date: "January 19, 2017",
    byline: "Community Building Article by Deborah Hart Redman — January 19, 2017",
    excerpt: "Stone Soup is a classic parable of community building — a story about what gets added when people share. A look at what happens when policy starts taking ingredients out instead.",
    content: [
      { type: "note", text: "After the Trump wrecking crew strikes — nothing left but the stones. Dig in America!" },
      { type: "h2", text: "Stone Soup: a Classic Community Building Parable" },
      { type: "p", text: "When I was a kid, growing up on the shores of Lake Erie, south of Buffalo, one of my favorite stories was Stone Soup. I think I first heard it in Sunday School, at Wayside Presbyterian Church. As we huddled around the paste jar, making the Virgin Mary and adoring shepherds out of clothes pins and cotton wool, we listened to a silver-haired lady tell us how a couple of starving pilgrims (or soldiers, or monks or tramps) tricked and cajoled people into adding salt and pepper, and a few vegetables, and then some fishes and meats and their most valuable spices to a collective soup. Beginning with three stones (or nails, or an axe, as variously told) the nourishing ingredients were brought forward from the villagers' hoarded supplies, as the soup grew tastier and larger until it could easily feed everyone. A joyful feast followed." },
      { type: "p", text: "Stone Soup remains a classic parable of community building. It shows how we all do better, how we all become happier and richer, when we contribute, collaborate, cooperate, share and celebrate with each other, especially with those beyond our families. With strangers, in fact. It is the bone broth, if you will, of FDR's New Deal, of LBJ's Great Society, MLK's civil rights movement — everything that the progressive wing of the Democratic party has contributed to America's true greatness." },
      { type: "p", text: "But a new dish is now brewing in the gilded offices of Trump Tower, one based on a foul extractive recipe forged from four decades of miserly, miserable behavior by the Republicans (and neoliberal Democrats, too) at local, state and national levels. One by one, this crowd has been “adding by subtracting” — taking the yummy ingredients out of the soup and declaring each subtraction a victory for the common good." },
      { type: "p", text: "By systematically de-souping the stones, we have been told, we force everyone to be self-sufficient. And so, we succumb, over the years, to mind-numbing Orwellian-named programs to reduce aid to families, to mothers, to children, to the environment, to public schools. We witness arcane formulas and decades of neglect that cripple Social Security and Medicare and Medicaid. We don't help the disabled, the elderly, the poor. We make life more difficult for students and their teachers; for unions, and thus for workers. We withdraw from aiding the world's refugees even as we help create them, we ignore the distended bellies of famine-struck children." },
      { type: "p", text: "Little by little, we enact policies designed to remove the meat and fishes, and then the carrots and celery, and finally, now, even the salt and pepper. These same policies funnel all those nourishing ingredients up to the richest families in the town. We declare war on earth itself, the large kettle that holds us all, because the folks on the hill, or living in the great urban towers, want to hoard some more treasure for another generation." },
      { type: "p", text: "Our last generation?" },
      { type: "p", text: "We have been told, and nearly half of us believe, that sharing is just a fancy liberal word for theft, especially if it is enacted through our elected government or implemented through government policy. Tax-supported meals on wheels creates weakness, and Paul Ryan and Scott Walker and Mitch McConnell and Sam Brownback and Fox News and right-wing radio tell us that we should be returning meals to the heels that made us poor to begin with. Ayn Rand and her neoliberal market idolatry, Reagan's voodoo economics, trickle-down theory — all discredited in theory and practice (look at the state of the soup in Kansas, if you need proof!) — continue to provide the shibboleths shielding this massive Republican campaign to buttress a cruel, destructive, dysfunctional and needless inequality. We are now about to expand and lock this inequality into permanent position, by abolishing the estate tax. The hoarded vegetables will stay hoarded, locked away from 99% of us." },
      { type: "p", text: "We're all in the soup now." },
      { type: "p", text: "It's now 20 odd hours before the inauguration of a “president” with dwindling legitimacy, and no moral authority. This Man in Trump Tower, this baby-man who habitually lies, who is brimming over with the smallest of motives and lowest of impulses, is positioned to pee in what's left of our soup, spoiling it for everyone. The Trump cabinet is crammed with a toxic stew of overlords that embody the new crony-capitalist kleptocratic kakocracy — rule by the worst thieves ever." },
      { type: "p", text: "To wit: an EPA head who defends extractive industries and sues every attempt to clean up the environment; an oil monarch Secretary of State who is more concerned about drilling rights than human rights, and more familiar with corporate interests than America's interests; an unqualified Education secretary who uses ill-gotten pyramid scheme billions to undermine public schools and establish fundamentalist right-wing Christian for-profit schools; a Health and Human Services head who personally games the system to make money off insider information and his own legislative actions; a soft-spoken Confederate Attorney General who will return us to private prisons and harsh sentencing and who will ignore the Republicans' war on Black (and Blue) voters; a Labor secretary who hates workers, workplace health and safety regulations, unions and the minimum wage; a HUD nominee who by his own admission knows nothing about running an agency and, in a Freudian slip, avowed that he would not “intentionally ... help any American.”" },
      { type: "p", text: "The economic and national security advisers, save for one or two, are all equally alarming, threatening to demolish the whole soup kitchen, and maybe raze our village as an afterthought. Or by mistake." },
      { type: "p", text: "This cabinet of billionaires and hacks is poised, slotted spoons in hand, to remove every single juicy bit they can find from our collective pot, and deposit them in their own bowls. No shame over the brazen efficiency of it all." },
      { type: "p", text: "To speed up this great dismantling, Congress has taken extreme and unusual steps to substitute its “wisdom” for the technical expertise of career civil servants in the agencies tasked to protect us from corporate crimes, thus opening up the entire federal regulatory apparatus to an unprecedented level of greed, ignorance, corruption and outright theft." },
      { type: "p", text: "Circling back around to Dear Leader, this awful Hell's Kitchen is overseen by an unpopular self-serving autocrat, a proudly ignorant bully, our first true American fascist, who has convinced his loyal followers that he's working for them." },
      { type: "p", text: "Watch now as he ladles out a big bowl of nothing but rocks, and boasts via Twitter that it's mmmmm...mmmmm...GOOD!" },
      { type: "p", text: "Now THAT takes stones." }
    ]
  },
  {
    id: "driverless-cars-ethics",
    cat: "technics",
    title: "Driverless Cars Swerve Into Ethical Ditch",
    date: "June 22, 2016",
    excerpt: "MIT survey data on how people want driverless cars programmed — and what they'd actually buy — exposes an uncomfortable gap between our stated values and our self-interest.",
    content: [
      { type: "p", text: "Some interesting news from MIT was heard on Oregon Public Broadcasting today. As the reality of driverless cars grows near (and we'll be discussing the labor and environmental implications another time), 2015 online public surveys conducted by MIT researchers revealed that most people would want vehicles programmed to save the maximum number of lives (a utilitarian approach). Yet, if programming that would sacrifice those in the driver's car to save more lives outside the car, the likelihood of purchasing such a vehicle decreases by a third. Sounds like a species of the tragedy of the commons." },
      { type: "p", text: "Often when we automate an activity, we end up concealing moral choices by burying it in computer code, or walling it up inside obscure bureaucratic procedures. In the case of driverless cars, it is, for a moment, the reverse: we have to shed light on the millions of individual approaches to how we handle risk when we drive, in order to be able to tell the coder what outcome we want. Save more lives? Save children and old people? Save rich people? Hit animals rather than dent our fender?" },
      { type: "p", text: "A little shudder arises at the thought of vehicle manufacturers and the insurance and medical industries getting their claws into this conversation." }
    ],
    signoff: "DHR 6-24-2016"
  },
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
