export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceSeo {
  /** <title> tag, written around the phrases people search for */
  seoTitle: string
  benefits: string[]
  applications: string[]
  faqs: ServiceFaq[]
}

export const SERVICE_SEO: Record<string, ServiceSeo> = {
  'glass-tempering-bending': {
    seoTitle: 'Tempered & Bent Glass Supplier in UAE | The Glass Doctor',
    benefits: [
      'Up to five times stronger than standard annealed glass',
      'Breaks into small, blunt pieces instead of sharp shards',
      'Higher resistance to thermal stress in the UAE heat',
      'Custom cut, edged, drilled and bent to your exact sizes',
    ],
    applications: ['Glass doors and shopfronts', 'Shower enclosures', 'Glass railings and balustrades', 'Office partitions', 'Curved facades and display cases', 'Table tops and shelves'],
    faqs: [
      {
        question: 'What is tempered glass?',
        answer: 'Tempered (toughened) glass is safety glass made by heating glass to over 600°C and rapidly cooling it. It is up to five times stronger than ordinary glass and breaks into small, blunt pieces.',
      },
      {
        question: 'Can tempered glass be cut after tempering?',
        answer: 'No. Tempered glass cannot be cut or drilled once processed, so every panel is cut, edged and drilled to the final size before it goes into the tempering furnace.',
      },
      {
        question: 'Do you supply bent (curved) glass in the UAE?',
        answer: 'Yes. We bend glass to custom curves for facades, revolving doors, staircases, railings and display cases, in annealed, heat-strengthened or fully tempered options.',
      },
    ],
  },
  'glass-partitions': {
    seoTitle: 'Glass Partitions in Dubai, Sharjah & UAE | The Glass Doctor',
    benefits: [
      'Lets natural light flow through the whole space',
      'Tempered safety glass for durability and compliance',
      'Clear, frosted, tinted, decorative or smart glass options',
      'Frameless or framed systems with sound insulation options',
    ],
    applications: ['Office partitions and cabins', 'Meeting rooms and boardrooms', 'Clinics and reception areas', 'Retail and showrooms', 'Residential room dividers', 'Shower and bathroom partitions'],
    faqs: [
      {
        question: 'What is the difference between frameless and framed glass partitions?',
        answer: 'Frameless partitions use minimal fittings for a seamless, modern look. Framed partitions use aluminium profiles, which add structure and can improve sound insulation.',
      },
      {
        question: 'Can glass partitions give privacy?',
        answer: 'Yes. Frosted, sandblasted or tinted glass and decorative films add privacy, and smart glass can switch from clear to opaque at the touch of a button.',
      },
      {
        question: 'Do you install glass partitions in Dubai and Sharjah?',
        answer: 'Yes. We supply and install glass partitions across the UAE, including Dubai, Sharjah, Abu Dhabi, Ajman and the northern emirates.',
      },
    ],
  },
  'glass-lamination': {
    seoTitle: 'Laminated Safety Glass Supplier in UAE | The Glass Doctor',
    benefits: [
      'Stays intact when broken, held together by the interlayer',
      'Improves security and resists forced entry',
      'Blocks up to 99% of harmful UV rays',
      'Reduces outside noise for quieter interiors',
    ],
    applications: ['Skylights and glass roofs', 'Glass floors and stairs', 'Balustrades and railings', 'Acoustic partitions', 'Shopfronts and security glazing', 'High-performance facades'],
    faqs: [
      {
        question: 'What is laminated glass?',
        answer: 'Laminated glass is two or more layers of glass bonded with a tough interlayer such as EVA or PVB. If it breaks, the fragments stick to the interlayer instead of falling.',
      },
      {
        question: 'What is the difference between laminated and tempered glass?',
        answer: 'Tempered glass is stronger and breaks into small blunt pieces. Laminated glass stays in place when broken, so it is preferred overhead, for railings and for security. They can also be combined.',
      },
      {
        question: 'Does laminated glass reduce noise?',
        answer: 'Yes. The interlayer dampens sound, so laminated glass noticeably reduces outside noise compared with single glass of the same thickness.',
      },
    ],
  },
  'double-glazed-units': {
    seoTitle: 'Double Glazed Glass Units (DGU) in UAE | The Glass Doctor',
    benefits: [
      'Reduces heat gain and lowers air-conditioning costs',
      'Improves sound insulation from traffic and outdoor noise',
      'Low-E and solar control glass options',
      'Laminated inner panes available for added safety',
    ],
    applications: ['Windows and sliding doors', 'Curtain walls and facades', 'Villas and apartments', 'Offices and commercial buildings', 'Skylights', 'Hotels and hospitals'],
    faqs: [
      {
        question: 'What is a double glazed unit (DGU)?',
        answer: 'A DGU, also called an insulated glass unit (IGU), is two panes of glass separated by a sealed air or argon-filled space, which reduces heat transfer and noise.',
      },
      {
        question: 'Is double glazing worth it in the UAE?',
        answer: 'Yes. In the UAE climate double glazing reduces the heat entering through windows and facades, which keeps rooms cooler and lowers cooling costs.',
      },
      {
        question: 'Can double glazed units include Low-E or laminated glass?',
        answer: 'Yes. DGUs can be customised with Low-E coatings, solar control glass or laminated inner panes depending on the energy, safety and acoustic requirements.',
      },
    ],
  },
  'curtain-walls-aluminium': {
    seoTitle: 'Curtain Wall & Aluminium Works in UAE | The Glass Doctor',
    benefits: [
      'Slender aluminium profiles with large glazed areas',
      'Thermally broken systems for the UAE climate',
      'Powder coated or anodised finishes in many colours',
      'Designed, fabricated and installed to exact dimensions',
    ],
    applications: ['Curtain wall facades', 'Aluminium windows and doors', 'Sliding and folding doors', 'Shopfronts and entrances', 'Skylights and louvres', 'Aluminium cladding'],
    faqs: [
      {
        question: 'What is a curtain wall?',
        answer: 'A curtain wall is a non-structural building envelope made of an aluminium frame filled with glass. It carries its own weight and wind loads, allowing large, light-filled facades.',
      },
      {
        question: 'What aluminium works do you provide?',
        answer: 'Aluminium windows, sliding and folding doors, entrance doors, skylights, shopfronts, louvres and cladding, with powder coated or anodised finishes.',
      },
      {
        question: 'Do you handle curtain wall projects across the UAE?',
        answer: 'Yes. We take curtain wall and aluminium projects across the UAE, from shop drawings and wind-load checks to fabrication and installation.',
      },
    ],
  },
  'decorative-glass': {
    seoTitle: 'Back Painted & Printed Decorative Glass UAE | The Glass Doctor',
    benefits: [
      'Any solid colour, including corporate brand colours',
      'Digital ceramic printing for patterns, graphics and images',
      'Scratch-proof, UV-stable finish that will not fade or peel',
      'Easy to clean and moisture resistant',
    ],
    applications: ['Kitchen backsplashes', 'Feature and cladding walls', 'Elevator lobbies', 'Reception and branding walls', 'Bathroom wall panels', 'Exterior facades'],
    faqs: [
      {
        question: 'What is back painted glass?',
        answer: 'Back painted glass is clear glass with a heat-cured colour coating on the reverse side, giving a smooth, glossy and easy-to-clean coloured surface.',
      },
      {
        question: 'Is digitally printed glass durable?',
        answer: 'Yes. Ceramic inks are fused into the glass during tempering, so the print is scratch-proof, UV-stable and weather resistant, suitable even for exterior facades.',
      },
      {
        question: 'Can back painted glass be used as a kitchen splashback?',
        answer: 'Yes. It is one of the most popular uses, because the surface is hygienic, moisture resistant and easy to wipe clean.',
      },
    ],
  },
  'glass-processing': {
    seoTitle: 'Sandblasted & Frosted Glass in UAE | The Glass Doctor',
    benefits: [
      'Privacy without blocking natural light',
      'Full frosting, custom patterns or logos',
      'Anti-fingerprint protective coating',
      'Suitable for partitions, doors and enclosures',
    ],
    applications: ['Office partitions', 'Entrance and interior doors', 'Shower enclosures', 'Balustrades', 'Logo and branding glass', 'Decorative interior panels'],
    faqs: [
      {
        question: 'What is sandblasted glass?',
        answer: 'Sandblasted glass is created by blasting the surface with fine abrasive at high pressure, producing a uniform frosted, translucent finish that gives privacy while letting light through.',
      },
      {
        question: 'Can you sandblast our company logo on glass?',
        answer: 'Yes. Sandblasting can produce logos, patterns, stripes and custom designs on partitions, doors and panels.',
      },
      {
        question: 'Is sandblasted glass hard to clean?',
        answer: 'We apply a protective anti-fingerprint coating after blasting, which makes the surface easier to maintain and keeps it looking clean.',
      },
    ],
  },
  'smart-glass': {
    seoTitle: 'Smart Glass (Switchable Glass) in UAE | The Glass Doctor',
    benefits: [
      'Switches from clear to private instantly',
      'Controlled by switch, remote or smart home system',
      'Lets natural light through even in privacy mode',
      'Offers UV protection and can double as a projection screen',
    ],
    applications: ['Boardrooms and meeting rooms', 'Executive offices', 'Clinics and hospitals', 'Luxury bathrooms and bedrooms', 'Retail storefronts', 'Hotel rooms'],
    faqs: [
      {
        question: 'What is smart glass?',
        answer: 'Smart glass, also called switchable or PDLC glass, turns from transparent to opaque when the power is switched off, and back to clear when it is switched on.',
      },
      {
        question: 'Where is smart glass used?',
        answer: 'It is popular in boardrooms, executive offices, clinics, luxury bathrooms and storefronts, anywhere privacy is needed on demand without losing natural light.',
      },
      {
        question: 'Can smart glass be used as a projection screen?',
        answer: 'Yes. In its opaque state, smart glass can work as a rear-projection screen for presentations.',
      },
    ],
  },
}
