export interface Product {
  name: string
  description: string
  image: string
  tall: boolean
}

export const PRODUCTS: Product[] = [
  {
    name: 'Glass Tempering & Bending',
    description:
      'Advanced tempering and precision bending for safety and durability.',
    image:
      'ProductsImage/img1.jpg',
    tall: true,
  },
  {
    name: 'Glass Partitions',
    description:
      'Elegant partitions for offices and residential spaces.',
    image:
      'ProductsImage/img2.jpg',
    tall: false,
  },
  {
    name: 'Smart Glasses',
    description:
      'Innovative smart glass technology for modern spaces.',
    image:
      'ProductsImage/img3.jpg',
    tall: false,
  },
  {
    name: 'Double Glazed Unit',
    description:
      'Premium aluminum solutions combining elegance and performance.',
    image:
      'ProductsImage/img4.jpg',
    tall: true,
  },
  {
    name: 'Curtain Walls & Aluminium Works',
    description:
      'High-performance curtain wall systems for modern buildings.',
    image:
      'ProductsImage/img5.jpg',
    tall: false,
  },
  {
    name: 'Laminated Glasses',
    description:
      'High-security safety glass with superior impact resistance and UV protection.',
    image:
      'Laminated glass.jpg',
    tall: false,
  },
]
