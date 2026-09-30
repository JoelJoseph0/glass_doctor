export interface ServiceDetail {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: 'glass-tempering-bending',
    title: 'Glass Tempering & Bending',
    subtitle: 'About Glass Tempering',
    description: 'Tempered glass (also known as toughened glass) is an ultra-durable safety glass engineered for superior strength and security. Manufactured by heating standard annealed glass to over 600°C and rapidly cooling it through an intense air-quenching process, tempered glass is up to five times stronger and significantly more resistant to thermal stress. Designed with safety in mind, if broken, it disintegrates into small, blunt, granular pieces rather than sharp, dangerous shards. Because tempered glass cannot be cut or drilled once processed, every panel is custom-cut, edged, and fabricated to your exact specifications before entering the tempering furnace—delivering a flawless, high-performance solution for architectural facades, doors, partitions, and custom glass installations.\n\nGlass Bending\n\nBent glass combines structural performance with striking architectural design, transforming flat glass into custom curves and unique geometries. Created by heating glass to its softening point (around 600°C) and carefully shaping it over precision molds or within automated bending furnaces, curved glass offers smooth optical clarity and high durability. Available in annealed, heat-strengthened, or fully tempered safety glass options, curved glass allows architects and designers to eliminate harsh angles and create seamless visual flow. From curved building facades and revolving entrance doors to custom spiral staircases, glass railings, and display cases, every pane is engineered to your exact dimensions for a perfect fit.',
    image: 'ProductsImage/img1.jpg',
  },
  {
    id: 'glass-partitions',
    title: 'Glass Partitions',
    subtitle: 'About Glass Partitions',
    description: 'Glass partitions are modern space dividers that combine functionality with aesthetic appeal, allowing natural light to flow throughout your space while maintaining defined work areas. Our frameless and framed glass partition systems are engineered using premium tempered safety glass, ensuring durability and compliance with international safety standards. Available in clear, frosted, tinted, or decorative options, glass partitions create an open, collaborative environment perfect for contemporary offices, boardrooms, and commercial interiors. With sound insulation properties and customizable configurations, our partition systems offer flexible solutions for any architectural requirement—from full-height office dividers to elegant meeting room enclosures.',
    image: 'ProductsImage/img2.jpg',
  },
  {
    id: 'glass-lamination',
    title: 'Glass Lamination',
    subtitle: 'About Glass Lamination',
    description: 'Laminated glass is the ultimate high-security safety glass, engineered to provide exceptional impact resistance, structural integrity, and acoustic insulation. Manufactured by bonding two or more layers of glass together under heat and pressure using a tough, transparent interlayer—such as EVA & PVB—laminated glass remains intact even if shattered. When impacted, broken glass fragments adhere firmly to the internal interlayer, preventing dangerous falling shards, maintaining a protective barrier, and reducing the risk of forced entry. Beyond its superior safety and security benefits, laminated glass blocks up to 99% of harmful UV rays and significantly dampens exterior noise, making it the premier choice for structural skylights, glass floors, acoustic partitions, balustrades, and high-performance architectural facades.',
    image: 'ProductsImage/img3.jpg',
  },
  {
    id: 'double-glazed-units',
    title: 'Double Glazed Units (DGU)',
    subtitle: 'About Double Glazed Units (DGU)',
    description: 'Double Glazed Units (DGU)—also known as Insulated Glass Units (IGU)—are engineered to deliver maximum thermal efficiency, sound insulation, and energy savings for modern buildings. A DGU consists of two panes of glass separated by a hermetically sealed air space, typically filled with dry air or noble gases like Argon, and bound together using high-performance spacers and dual-seal structural sealants. By preventing thermal transfer, DGUs dramatically reduce indoor heat gain in summer and heat loss in winter, lowering HVAC energy costs while improving overall indoor comfort. Customizable with Low-E coatings, solar control glass, or laminated inner panes, DGUs offer the ideal combination of environmental performance, acoustic dampening, and architectural versatility for exterior curtain walls, windows, and commercial facades.',
    image: 'ProductsImage/img4.jpg',
  },
  {
    id: 'decorative-glass',
    title: 'Decorative Glass Solutions',
    subtitle: 'About Backpainted & Digitally Printed Glass',
    description: 'Transform ordinary glass into vibrant, customizable design features with our decorative glass solutions. Backpainted Glass combines high-clarity glass with premium, heat-cured color coatings applied to the reverse side, delivering a smooth, durable, and moisture-resistant finish ideal for hygienic wall cladding and splashbacks. For intricate patterns, custom graphics, or high-definition imagery, Digital Ceramic Glass Printing fuses ceramic inks directly into the glass surface during the tempering process. The result is a scratch-proof, UV-stable, and weather-resistant finish that will never fade or peel over time. Whether you need solid corporate colors, subtle translucent textures, or full-scale architectural graphics, our decorative glass capabilities offer endless aesthetic possibilities for interior feature walls, elevator lobbies, kitchen backsplashes, and custom exterior facades.',
    image: 'ProductsImage/img5.jpg',
  },
  {
    id: 'glass-processing',
    title: 'Glass Processing Services',
    subtitle: 'Comprehensive Glass Finishing Solutions',
    description: 'About Sandblasted Glass\n\nSandblasted glass offers a sophisticated, timeless solution for controlling privacy and light diffusion without compromising natural illumination. Created by blasting the glass surface with fine abrasive materials at high pressure, this technique carves away a thin layer to produce a uniform, frosted, and translucent finish. From simple full-coverage privacy panels to custom geometric patterns, corporate logos, and intricate decorative shading, sandblasting allows for complete aesthetic customization. Once blasted, the surface is treated with a protective anti-fingerprint coating to ensure easy maintenance and lasting clarity. Ideal for office partitions, entrance doors, shower enclosures, balustrades, and interior decorative panels, sandblasted glass effortlessly blends functional privacy with elegant architectural design.',
    image: 'ProductsImage/img6.jpg',
  },
  {
    id: 'smart-glass',
    title: 'Smart Glass Technology',
    subtitle: 'About Smart Glass (Switchable Privacy Glass)',
    description: 'Smart Glass—also known as Switchable Glass or PDLC Glass—is an advanced architectural solution that transforms glass from fully transparent to completely opaque at the flick of a switch, remote control, or smart home command. Utilizing Polymer Dispersed Liquid Crystal (PDLC) technology laminated between two layers of glass, the liquid crystals align when an electrical current is applied to make the glass crystal clear. When turned off, the crystals scatter light to instantly create complete privacy while still allowing natural light to filter through. Beyond on-demand privacy, Smart Glass offers UV protection, acoustic insulation, and can even double as an HD rear-projection screen. It is the premier choice for executive boardrooms, healthcare facilities, luxury residential spaces, high-end partition walls, and modern storefront displays.',
    image: 'ProductsImage/img3.jpg',
  },
]

// Map product names to service IDs
export function getServiceIdFromProductName(productName: string): string {
  const mapping: Record<string, string> = {
    'Glass Tempering & Bending': 'glass-tempering-bending',
    'Glass Partitions': 'glass-partitions',
    'Smart Glasses': 'smart-glass',
    'Double Glazed Unit': 'double-glazed-units',
    'Curtain Walls': 'double-glazed-units',
    'Laminated Glasses': 'glass-lamination',
    'Glass Processing Services': 'glass-processing',
  }
  
  return mapping[productName] || 'glass-tempering-bending'
}
