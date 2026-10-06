export interface GalleryProject {
  id: string
  title: string
  description: string
  category: string
  location?: string
  images: string[]
  coverImage: string
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'premium-glass-solutions',
    title: 'Premium Glass Solutions',
    description: 'High-end tempered glass installation with custom finishing and precision engineering for modern architectural spaces',
    category: 'Residential',
    location: 'UAE',
    coverImage: 'ProductGallery/Pr1/img1.jpg',
    images: [
      'ProductGallery/Pr1/img1.jpg',
      'ProductGallery/Pr1/img1.1.jpg',
      'ProductGallery/Pr1/img1.2.jpg',
      'ProductGallery/Pr1/img1.3.jpg',
      'ProductGallery/Pr1/img1.4.jpg',
      'ProductGallery/Pr1/img1.5.jpg',
      'ProductGallery/Pr1/img1.6.jpg',
      'ProductGallery/Pr1/img1.7.jpg',
    ],
  },
  {
    id: 'interior-glass-works',
    title: 'Interior Glass Works',
    description: 'Sophisticated interior glass installations featuring partitions, doors, and custom glass solutions for residential and commercial interiors',
    category: 'Commercial',
    location: 'UAE',
    coverImage: 'ProductGallery/Pr2/1ca707a5-5075-4564-b380-d04b15d227fc.jpg',
    images: [
      'ProductGallery/Pr2/1ca707a5-5075-4564-b380-d04b15d227fc.jpg',
      'ProductGallery/Pr2/1f18cb22-6a15-44fa-af83-790b0fc55fe9.jpg',
      'ProductGallery/Pr2/31e15bb6-48b7-4597-833f-8836acb32201.jpg',
      'ProductGallery/Pr2/35003cc6-c4e2-4cb9-83de-ac1844efb968.jpg',
      'ProductGallery/Pr2/538a1560-ace5-4133-a830-f40987a3bc01.jpg',
      'ProductGallery/Pr2/593ef454-beac-43f9-a99d-d5fb08afbc85.jpg',
      'ProductGallery/Pr2/5f10678f-3e02-431b-9bb4-ae9cb2465844.jpg',
      'ProductGallery/Pr2/a3f9222a-f6a5-4006-8828-a097332eb536.jpg',
      'ProductGallery/Pr2/b849ad94-aab1-4b1a-8882-ff477caf6f3e.jpg',
      'ProductGallery/Pr2/d0752107-0622-459b-83b5-e4a0acc55b2d.jpg',
      'ProductGallery/Pr2/dc9ea53f-ec69-4ca9-a90a-23b1be577043.jpg',
      'ProductGallery/Pr2/e5d9de5d-143e-43ed-a6d2-70cc72672900.jpg',
      'ProductGallery/Pr2/ec095beb-80e9-41dd-a9f5-6225a5fcb93a.jpg',
      'ProductGallery/Pr2/eca10019-2700-42a9-84e2-66f91d876cb4.jpg',
      'ProductGallery/Pr2/ef93a636-1601-439e-912f-31499dd046df.jpg',
      'ProductGallery/Pr2/f9b44c55-72cf-45d6-b490-ca0c0f72a036.jpg',
    ],
  },
  {
    id: 'elevator-glasses',
    title: 'Elevator Glasses',
    description: 'Premium elevated glass installations showcasing architectural excellence and innovative glass engineering solutions',
    category: 'Residential',
    location: 'UAE',
    coverImage: 'ProductGallery/Pr3/8c6e41cc-417b-4a01-ae41-58772942ebff.jpg',
    images: [
      'ProductGallery/Pr3/8c6e41cc-417b-4a01-ae41-58772942ebff.jpg',
      'ProductGallery/Pr3/8e1e03b2-5463-4c0c-86a7-c9d2f6e13fc1.jpg',
    ],
  },
]

export const GALLERY_CATEGORIES = [
  'All Projects',
  'Commercial',
  'Residential',
]
