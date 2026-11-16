// ============================================================
// Thomson Reserve — single source of truth for all site copy.
// This is the only file that should need editing as new facts
// (pricing, TOP, exact unit sizes) are released by the developer.
//
// Sourcing notes (see docs/thomson-reserve-research.md for detail):
// - Facts below are drawn from the developer's official "Thomson
//   Reserve Ebook" (V3 & V4, PropNex agent collateral) and Jennifer's
//   own Thomson_Reserve_Cheat_Sheet.docx, cross-checked against a
//   public report (The Edge Singapore) for the en-bloc price.
// - A third document in the research folder ("ThonsonReserveCheatSheet_V1.pdf")
//   contains conflicting facts (wrong location "Lentor Central", wrong
//   block count, wrong TOP date, slightly different unit-mix numbers)
//   that do NOT match the other two sources — treated as a stale/incorrect
//   draft and NOT used anywhere in this file. Flag raised with Jennifer.
// - Per her standing instruction, unit COUNTS and % mix are intentionally
//   left off this public site even though the collection names/types are
//   shown — she prefers those gated behind a "Contact Agent" CTA.
// - Any field genuinely not yet released is tagged // PLACEHOLDER and
//   written as an honest holding line, never a guessed number.
// ============================================================

export const site = {
  projectName: 'Thomson Reserve',
  developerLine: 'A premium development by Tamarind Development Pte. Ltd.',
  district: 'District 20',
  address: '1, 3, 5, 7, 9, 11 Bright Hill Drive, Singapore',
  tenure: '99-Year Leasehold',
  previewDate: '3 October 2026',
  launchDate: '17 October 2026',
  // Sales status (Jennifer, 16 Nov 2026). Update both values together.
  soldPercent: '90.62%',
  soldAsAt: '16 Nov 2026',
  agent: {
    name: 'Jennifer Wong',
    handle: '@ImJen.Wong',
    title: 'Property Strategist, PropNex Realty',
    ceaReg: 'R073354G', // PLACEHOLDER-RESOLVED: her Thomson_Reserve_Cheat_Sheet.docx shows
    // "R033754G" (likely a typo/digit transposition) — using the verified number
    // she gave for this project and that matches her Lucerne Grand site instead.
    agencyName: 'PropNex Realty Pte Ltd',
    agencyLicence: 'L3008022J', // verified via public CEA agency listing, Aug 2026
    email: 'jenniferWong.YL@propnex.com',
  },
}

export const header = {
  logoText: 'Thomson Reserve',
  navLinks: [
    { label: 'Highlights', href: '#highlights' },
    { label: 'Facilities', href: '#gallery' },
    { label: 'Unit Types', href: '#unit-types' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Why Choose', href: '#why-choose' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel: 'Check Availability',
}

export const hero = {
  eyebrow: 'Now selling · 90.62% sold as at 16 Nov 2026',
  headline: '2 minutes to Upper Thomson MRT',
  subheadline:
    'A new condo on Bright Hill Drive, bordered by Windsor Nature Park and the Central Catchment Nature Reserve.',
  primaryCta: 'Check Availability',
  secondaryCta: 'See Location Highlights',
  facts: [
    { label: 'District', value: '20' },
    { label: 'Tenure', value: '99 Years' },
    { label: 'Total Units', value: '1,268' },
    { label: 'Sold', value: '90.62%' },
  ],
}

export const highlights = {
  sectionLabel: 'Location & Connectivity',
  heading: 'Three dimensions of living rarely found at one address',
  sub: 'What Bright Hill Drive means for an upgrading family.',
  cards: [
    {
      icon: 'train',
      title: 'Doorstep to Upper Thomson MRT',
      body:
        'A sheltered link takes you to Upper Thomson MRT (Thomson-East Coast Line) Exit 2 in about 2 minutes. Orchard, Marina Bay and Shenton Way are direct, and the Circle Line is one stop away at Caldecott.',
    },
    {
      icon: 'leaf',
      title: 'Bordered by protected nature reserves',
      body:
        'Next to Windsor Nature Park and the Central Catchment Nature Reserve: over 2,000 hectares of protected forest. Reserve land cannot be built on, so nature-facing views stay open.',
    },
    {
      icon: 'school',
      title: 'Within a well-regarded school belt',
      body:
        'Ai Tong School is within 1km, giving Phase 2C priority for Primary 1. Catholic High, CHIJ St Nicholas Girls’, Marymount Convent and Eunoia JC are within 2km.',
    },
    {
      icon: 'basket',
      title: 'Everyday amenities within walking distance',
      body:
        'Thomson Plaza is directly opposite, with FairPrice Finest, Sheng Siong and a Koufu food court. Upper Thomson Road’s cafes and MacRitchie’s trails are close by.',
    },
  ],
  legacyNote:
    'Thomson Reserve is the redevelopment of the former Thomson View Condominium, which went through five collective sale attempts before being acquired by the UOL / Singapore Land Group / CapitaLand Development consortium for S$810 million (about S$1,178 psf ppr) — reported by The Edge Singapore.',
}

export const gallery = {
  sectionLabel: 'Facilities',
  heading: 'Grand Clubhouse, Island Club & Wellness Club',
  sub:
    'A 5-hectare site (about 7 football fields) with 80+ facilities across three clubs. Selected facilities:',
  // PLACEHOLDER: swap these labelled tiles for approved renderings once Jennifer
  // confirms she has clearance to publish images beyond the agent-only ebook.
  facilities: [
    { zone: 'Island Club', name: 'Infinity Lap Pool (50m)' },
    { zone: 'Island Club', name: 'Cedar Room, Function Room' },
    { zone: 'Grand Clubhouse', name: 'Canopy Lap Pool (50m) & Hammock Cove' },
    { zone: 'Grand Clubhouse', name: 'Little Explorer Nook, Kids Play Room' },
    { zone: 'Grand Clubhouse', name: 'Grand Lawn Pavilion' },
    { zone: 'Wellness Club', name: 'Hydro Spa Pool & Wellness Pods' },
    { zone: 'Wellness Club', name: 'Pilates & Wellness Studio' },
    { zone: 'Wellness Club', name: 'Private Gym' },
  ],
}

// Unit type NAMES only — counts and % mix intentionally withheld per Jennifer's
// standing instruction (see Lucerne Grand precedent). Shown as gated "Draft" cards.
export const floorPlans = {
  sectionLabel: 'Unit Types',
  heading: 'Two collections, ten configurations',
  sub:
    '2 to 5-bedroom homes across a Classic Collection and a Luxury Collection with private-lift access. Layouts are draft; message Jennifer for exact sizes and the latest floor plans.',
  collections: [
    {
      name: 'Classic Collection',
      description: 'Well-proportioned homes across four mid-rise towers.',
      types: [
        '2-Bedroom',
        '2-Bedroom Premium',
        '2-Bedroom Premium + Study',
        '3-Bedroom',
        '3-Bedroom Premium',
        '3-Bedroom Premium + Study',
        '4-Bedroom',
      ],
    },
    {
      name: 'Luxury Collection',
      description: 'Private-lift homes in the development’s two signature 30-storey towers.',
      types: ['4-Bedroom Premium (Private Lift)', '4-Bedroom Premium + Study (Private Lift)', '5-Bedroom Suite (Private Lift)'],
    },
  ],
  gatedCtaLabel: 'Get Latest Layout',
}

export const pricing = {
  sectionLabel: 'Pricing',
  heading: 'Ask for the current price list',
  sub:
    'With 90.62% sold as at 16 Nov 2026, prices depend on which units are still open. Jennifer will send you the current price list and the remaining units.',
  // PLACEHOLDER: replace with indicative PSF-from figure once released, in the
  // same "From $2,xxx psf" style used on the Lucerne Grand site.
  note: 'Current price list and remaining units on request.',
}

export const whyChoose = {
  sectionLabel: 'Why Choose Thomson Reserve',
  heading: 'A rare joint venture, at genuine scale',
  sub: 'A short, factual look at who is building it and why the scale matters.',
  points: [
    {
      title: 'Three established Singapore developers, building as one',
      body:
        'Tamarind Development Pte. Ltd. is a joint venture between UOL Group Limited, Singapore Land Group Limited and CapitaLand Development Pte. Ltd. — all SGX-listed, with a combined track record spanning decades, including recent projects such as Skye at Holland and Parktown Residences.',
    },
    {
      title: 'An experienced project team',
      body:
        'Main contractor Lian Beng Construction, architect P&T Consultants, landscape architect 2nd Edition Pte. Ltd., and interior design by Eco Plan Asia Pte. Ltd.',
    },
    {
      title: 'Genuine scale',
      body:
        '1,268 units across six towers (two 30-storey, four 21-storey) on a 5-hectare site, with 1,014 carpark lots and 80+ facilities. Larger developments typically mean lower per-owner maintenance costs and more comparable transactions for resale price discovery.',
    },
    {
      title: 'A well-documented land history',
      body:
        'The former Thomson View Condominium took five collective sale attempts before succeeding — the consortium eventually paid S$810 million (about S$1,178 psf ppr), reported at the time as a comparatively favourable land cost against other Rest-of-Central-Region sites.',
    },
  ],
}

export const faq = {
  sectionLabel: 'FAQ',
  heading: 'Common questions',
  items: [
    {
      q: 'Is Thomson Reserve still selling?',
      a: 'Yes. Preview was on 3 October 2026 and the official launch on 17 October 2026, and it was 90.62% sold as at 16 Nov 2026. Ask Jennifer which units are still available.',
    },
    {
      q: 'Where exactly is Thomson Reserve?',
      a: 'At 1, 3, 5, 7, 9, 11 Bright Hill Drive, District 20 — the site of the former Thomson View Condominium.',
    },
    {
      q: 'How far is it from Upper Thomson MRT?',
      a: 'About a 2-minute sheltered walk to Exit 2, via a pedestrian link from the main entrance.',
    },
    {
      q: 'What is the tenure?',
      a: '99-year leasehold.',
    },
    {
      q: 'What is the unit mix?',
      a: '2 to 5-bedroom homes across a Classic Collection and a Luxury Collection (with private lift access). Contact Jennifer for exact configurations, sizes and the latest layouts.',
    },
    {
      q: 'What is the price?',
      a: 'Prices depend on which units are still available. Ask Jennifer for the current price list.',
    },
    {
      q: 'When is TOP (completion)?',
      a: 'Not yet confirmed by the developer as at time of writing — this page will be updated the moment it is released.',
    },
    {
      q: 'Who is the developer?',
      a: 'Tamarind Development Pte. Ltd., a joint venture between UOL Group Limited, Singapore Land Group Limited and CapitaLand Development Pte. Ltd.',
    },
    {
      q: 'Is this a good fit for an HDB upgrader?',
      a: 'Thomson Reserve sits in a mature, established District 20 estate with a strong school belt and direct CBD access on the TEL — factors many upgrading families weigh heavily. Whether it fits your specific budget, timeline and CPF/loan position depends on your numbers — happy to run through them with you.',
    },
  ],
}

export const registerCta = {
  heading: 'Check which units are left',
  sub:
    'Leave your details and Jennifer will send the remaining units, the current price list and viewing times, with no obligation.',
  ctaLabel: 'Check Availability',
  microcopy: 'Takes under a minute. Your information goes directly to Jennifer, not a call centre.',
}

export const footer = {
  agentBlock: {
    name: 'Jennifer Wong',
    title: 'Property Strategist, PropNex Realty',
    handle: '@ImJen.Wong',
    email: 'jenniferWong.YL@propnex.com',
  },
  disclaimer:
    'Thomson Reserve is an independent, unofficial marketing site prepared by a PropNex-appointed agent. Information is compiled from the developer’s marketing materials and publicly available sources, believed accurate at the time of publishing and subject to the developer’s final confirmation. This is not the official developer website. All renderings referenced are artist’s impressions.',
  cea: 'Prepared by Jennifer Wong · PropNex Realty Pte Ltd · CEA Licence No. L3008022J · CEA Registration No. R073354G',
}
