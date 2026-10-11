export interface AreaFaq {
  question: string
  answer: string
}

export interface Area {
  id: string
  name: string
  seoTitle: string
  metaDescription: string
  intro: string[]
  districts: string[]
  faqs: AreaFaq[]
}

const quoteFaq = (name: string): AreaFaq => ({
  question: `How do I get a quote for a glass project in ${name}?`,
  answer: `Call or WhatsApp us on +971 50 259 7995, email sales@theglassdoctor.ae, or send your requirements through the contact form. Share the location in ${name}, approximate sizes and photos or drawings if you have them, and our team will get back to you with the next steps and a quotation.`,
})

export const AREAS: Area[] = [
  {
    id: 'sharjah',
    name: 'Sharjah',
    seoTitle: 'Glass & Aluminium Company in Sharjah | The Glass Doctor UAE',
    metaDescription:
      'Sharjah-based glass company for tempered glass, glass partitions, laminated, smart and double glazed glass, curtain walls and aluminium works. Call +971 50 259 7995.',
    intro: [
      'The Glass Doctor is based in Sharjah, which makes the emirate our home market. From villas and apartments to offices, showrooms and industrial facilities, we supply, fabricate and install glass and aluminium solutions for homeowners, contractors, designers and businesses across Sharjah.',
      'Being local means we can visit your site, take accurate measurements and coordinate fabrication and installation closely with your project. Whether you need a frameless glass partition for an office, tempered glass for a shopfront, laminated glass for a balcony or a full aluminium and glass facade, we handle the work end to end.',
    ],
    districts: ['Al Majaz', 'Al Nahda', 'Al Khan', 'Al Taawun', 'Muwaileh', 'Al Qasimia', 'University City', 'Industrial Areas', 'Sajaa', 'Al Zahia', 'Khor Fakkan', 'Kalba'],
    faqs: [
      {
        question: 'Where is The Glass Doctor located?',
        answer: 'We are based in Sharjah, United Arab Emirates, and serve customers across Sharjah and all other emirates of the UAE.',
      },
      {
        question: 'What glass services do you offer in Sharjah?',
        answer: 'Glass tempering and bending, frameless and framed glass partitions, laminated safety glass, double glazed units, smart (switchable) glass, back painted and printed decorative glass, sandblasted glass, curtain walls and aluminium works.',
      },
      quoteFaq('Sharjah'),
    ],
  },
  {
    id: 'dubai',
    name: 'Dubai',
    seoTitle: 'Glass & Aluminium Company in Dubai | The Glass Doctor UAE',
    metaDescription:
      'Glass partitions, tempered and laminated glass, smart glass, double glazed units, curtain walls and aluminium works for offices, villas and retail in Dubai.',
    intro: [
      'Dubai is one of the most demanding markets for architectural glass, with high-rise offices, retail spaces, hotels and luxury villas that expect clean lines and flawless finishing. The Glass Doctor supplies and installs glass and aluminium solutions for fit-out contractors, interior designers, developers and private clients across Dubai.',
      'Our most requested services in Dubai include frameless office glass partitions and meeting rooms, smart glass for boardrooms and clinics, tempered glass doors and shopfronts, double glazed units for heat and noise control, and aluminium windows, doors and curtain wall systems. Every panel is measured and fabricated to your exact specifications.',
    ],
    districts: ['Business Bay', 'Downtown Dubai', 'Dubai Marina', 'JLT', 'DIFC', 'Al Quoz', 'Al Barsha', 'Jumeirah', 'Deira', 'Dubai Silicon Oasis', 'Arabian Ranches', 'Dubai Hills'],
    faqs: [
      {
        question: 'Do you install glass partitions in Dubai offices?',
        answer: 'Yes. We supply and install frameless and framed glass partitions, glass meeting rooms and glass doors for offices across Dubai, in clear, frosted, tinted or smart glass.',
      },
      {
        question: 'Can you work with fit-out contractors and interior designers in Dubai?',
        answer: 'Yes. We regularly work from drawings and specifications provided by contractors and designers, and fabricate each panel to the required sizes and finishes.',
      },
      quoteFaq('Dubai'),
    ],
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    seoTitle: 'Glass & Aluminium Works in Abu Dhabi | The Glass Doctor UAE',
    metaDescription:
      'Tempered, laminated, smart and double glazed glass, glass partitions, curtain walls and aluminium works for commercial and residential projects in Abu Dhabi.',
    intro: [
      'The Glass Doctor serves commercial and residential projects in Abu Dhabi, from office towers and government-standard fit-outs to private villas and hospitality spaces. We fabricate glass to precise specifications and coordinate delivery and installation for projects in the capital.',
      'In Abu Dhabi our work typically covers double glazed and laminated glass for facades, curtain walls and aluminium systems, office glass partitions, smart glass for privacy, and tempered glass for doors, railings and shower enclosures.',
    ],
    districts: ['Al Reem Island', 'Khalifa City', 'Mussafah', 'Yas Island', 'Saadiyat Island', 'Al Raha', 'Al Reef', 'Mohammed Bin Zayed City', 'Corniche', 'Al Ain'],
    faqs: [
      {
        question: 'Do you take projects in Abu Dhabi?',
        answer: 'Yes. We serve all emirates, including Abu Dhabi city and Al Ain, for both commercial and residential glass and aluminium projects.',
      },
      {
        question: 'Which glass is best for facades in Abu Dhabi heat?',
        answer: 'Double glazed units with Low-E or solar control glass are the usual choice, as they reduce heat gain and cooling costs. Laminated inner panes can be added for safety and sound insulation.',
      },
      quoteFaq('Abu Dhabi'),
    ],
  },
  {
    id: 'ajman',
    name: 'Ajman',
    seoTitle: 'Glass & Aluminium Company in Ajman | The Glass Doctor UAE',
    metaDescription:
      'Tempered glass, glass partitions, shower glass, aluminium windows and doors, laminated and double glazed glass for homes and businesses in Ajman.',
    intro: [
      'Ajman is right next to our base in Sharjah, so we can support projects there quickly, from site visits and measurements to fabrication and installation. We work with homeowners, shop owners, offices and contractors across the emirate.',
      'Common projects in Ajman include tempered glass shopfronts and doors, glass partitions for offices and clinics, shower enclosures, glass railings and balconies, and aluminium windows and doors.',
    ],
    districts: ['Al Nuaimiya', 'Al Rashidiya', 'Al Jurf', 'Al Rawda', 'Al Mowaihat', 'Al Zahra', 'Ajman Industrial Area', 'Al Hamidiya', 'Emirates City'],
    faqs: [
      {
        question: 'Do you provide glass installation in Ajman?',
        answer: 'Yes. Ajman is close to our Sharjah base and we provide supply and installation of glass and aluminium works throughout the emirate.',
      },
      {
        question: 'Can you replace broken tempered glass in Ajman?',
        answer: 'Yes. Tempered glass cannot be cut after tempering, so we measure the opening and fabricate a new panel to the exact size before installing it.',
      },
      quoteFaq('Ajman'),
    ],
  },
  {
    id: 'ras-al-khaimah',
    name: 'Ras Al Khaimah',
    seoTitle: 'Glass & Aluminium Works in Ras Al Khaimah | The Glass Doctor',
    metaDescription:
      'Glass partitions, tempered and laminated glass, double glazed units, smart glass, curtain walls and aluminium works for projects in Ras Al Khaimah (RAK).',
    intro: [
      'The Glass Doctor supplies and installs architectural glass and aluminium systems for projects in Ras Al Khaimah, including resorts and hospitality, villas, offices and retail developments.',
      'In RAK we commonly deliver double glazed and laminated glass for sea-facing and high-exposure buildings, aluminium windows and doors, glass railings and balustrades, and glass partitions for commercial interiors.',
    ],
    districts: ['Al Hamra', 'Al Marjan Island', 'Al Nakheel', 'Khuzam', 'Al Dhait', 'Mina Al Arab', 'Julphar', 'Al Jazeera Al Hamra'],
    faqs: [
      {
        question: 'Do you serve Ras Al Khaimah?',
        answer: 'Yes. We take glass and aluminium projects across Ras Al Khaimah, for both commercial and residential customers.',
      },
      {
        question: 'Which glass suits sea-facing buildings in RAK?',
        answer: 'Laminated and double glazed glass are good choices for exposed and sea-facing elevations, combined with well-sealed, corrosion-resistant aluminium frames.',
      },
      quoteFaq('Ras Al Khaimah'),
    ],
  },
  {
    id: 'umm-al-quwain',
    name: 'Umm Al Quwain',
    seoTitle: 'Glass & Aluminium Works in Umm Al Quwain | The Glass Doctor',
    metaDescription:
      'Tempered glass, glass partitions, shower glass, laminated and double glazed glass, aluminium windows and doors for homes and businesses in Umm Al Quwain.',
    intro: [
      'The Glass Doctor serves homeowners, businesses and contractors in Umm Al Quwain with custom glass and aluminium works, fabricated to size and installed by our team.',
      'Typical projects include tempered glass doors and shopfronts, shower enclosures, glass railings, aluminium windows and doors, and glass partitions for offices and clinics.',
    ],
    districts: ['Al Salamah', 'Al Raas', 'Al Humrah', 'Al Maidan', 'Umm Al Quwain Marina', 'Falaj Al Mualla'],
    faqs: [
      {
        question: 'Do you take projects in Umm Al Quwain?',
        answer: 'Yes. We serve all emirates of the UAE, including Umm Al Quwain, for glass and aluminium supply and installation.',
      },
      {
        question: 'What glass is safest for homes with children?',
        answer: 'Tempered glass breaks into small, blunt pieces, and laminated glass stays in place when broken. Both are recommended for doors, railings and low-level glazing.',
      },
      quoteFaq('Umm Al Quwain'),
    ],
  },
  {
    id: 'fujairah',
    name: 'Fujairah',
    seoTitle: 'Glass & Aluminium Works in Fujairah | The Glass Doctor UAE',
    metaDescription:
      'Glass partitions, tempered, laminated and double glazed glass, curtain walls and aluminium works for hotels, villas, offices and retail in Fujairah.',
    intro: [
      'The Glass Doctor supplies and installs glass and aluminium systems for projects in Fujairah and the east coast, including hotels and resorts, villas, offices and retail spaces.',
      'For Fujairah projects we often recommend laminated and double glazed glass for coastal and high-sun elevations, along with aluminium windows and doors, glass railings and tempered glass for entrances and shopfronts.',
    ],
    districts: ['Fujairah City', 'Dibba Al Fujairah', 'Al Faseel', 'Sakamkam', 'Mirbah', 'Qidfa', 'Al Aqah', 'Masafi'],
    faqs: [
      {
        question: 'Do you install glass in Fujairah and the east coast?',
        answer: 'Yes. We take projects in Fujairah and along the east coast, including Dibba, Khor Fakkan and Kalba.',
      },
      {
        question: 'Which glass reduces heat in Fujairah villas?',
        answer: 'Double glazed units with Low-E or solar control glass reduce heat gain through windows and facades, keeping interiors cooler and lowering air-conditioning costs.',
      },
      quoteFaq('Fujairah'),
    ],
  },
]
