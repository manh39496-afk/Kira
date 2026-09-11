export interface Artwork {
  id: string;
  title: string;
  description: string;
  category: 'Character' | 'Environment' | 'Scene' | 'Concept';
  image?: string;
  imageAlt?: string;
  span: 'wide' | 'tall' | 'square';
}

export const artworks: Artwork[] = [];
