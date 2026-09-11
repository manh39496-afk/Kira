export interface Artwork {
  id: string;
  title: string;
  description: string;
  category: 'Character' | 'Environment' | 'Scene' | 'Concept';
  image: string;
  imageAlt: string;
  span: 'wide' | 'tall' | 'square';
}

export const artworks: Artwork[] = [
  {
    id: 'art-1',
    title: 'The Hollow at Dusk',
    description: 'The crater of Old Aethel, where the sky still bleeds color. Digital painting study.',
    category: 'Environment',
    image:
      'https://images.pexels.com/photos/29393670/pexels-photo-29393670.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'A castle surrounded by mist and mountains at dawn',
    span: 'wide',
  },
  {
    id: 'art-2',
    title: 'Kael — The Forgotten',
    description: 'Character concept: Kael Dunreth, the sigil visible on his wrist. Ink and digital.',
    category: 'Character',
    image:
      'https://images.pexels.com/photos/15459501/pexels-photo-15459501.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100&dpr=1',
    imageAlt: 'A serious man in medieval attire with a fur cloak and hood',
    span: 'tall',
  },
  {
    id: 'art-3',
    title: 'The Iron Marches',
    description: 'The frozen moorland and fortresses of the borderlands. Environment key art.',
    category: 'Environment',
    image:
      'https://images.pexels.com/photos/235635/pexels-photo-235635.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'A tranquil foggy forest scene with sunlight streaming through trees',
    span: 'wide',
  },
  {
    id: 'art-4',
    title: 'Lyssara in the Archive',
    description: 'Lyssara Veyne among the forbidden shelves. Mood piece, candlelit study.',
    category: 'Scene',
    image:
      'https://images.pexels.com/photos/27409011/pexels-photo-27409011.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'A cozy study with a vintage desk, open books, and a quill',
    span: 'wide',
  },
  {
    id: 'art-5',
    title: 'Sera — The Red Cloak',
    description: 'Sera Marenne in the colors of the Accord. Costume and color study.',
    category: 'Character',
    image:
      'https://images.pexels.com/photos/11940334/pexels-photo-11940334.png?auto=compress&cs=tinysrgb&w=800&h=1100&dpr=1',
    imageAlt: 'A woman in fantasy costume with a hood and swords against a red background',
    span: 'tall',
  },
  {
    id: 'art-6',
    title: 'Saltwatch Cathedral',
    description: 'The ship-bone cathedrals of the Church dominion. Architecture concept.',
    category: 'Concept',
    image:
      'https://images.pexels.com/photos/16603128/pexels-photo-16603128.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'A panoramic view of a historic town with Renaissance architecture',
    span: 'wide',
  },
  {
    id: 'art-7',
    title: 'Vael — The Crown Beneath',
    description: 'Concept for Vael, the thing that was once a king. Dark key art.',
    category: 'Character',
    image:
      'https://images.pexels.com/photos/38386072/pexels-photo-38386072.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100&dpr=1',
    imageAlt: 'A warrior in tribal attire with intricate adornments standing in a forest',
    span: 'tall',
  },
  {
    id: 'art-8',
    title: 'The Veranthor Coast',
    description: 'The salt-trade coast at first light. Environment study, warm palette.',
    category: 'Environment',
    image:
      'https://images.pexels.com/photos/30037076/pexels-photo-30037076.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'A picturesque village with rustic stone houses and lush greenery',
    span: 'wide',
  },
  {
    id: 'art-9',
    title: 'The Manuscript',
    description: 'Prop design: the forbidden manuscript from the Hollow Archive.',
    category: 'Concept',
    image:
      'https://images.pexels.com/photos/39321045/pexels-photo-39321045.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'A close-up view of an ancient manuscript with elaborate script and colorful text',
    span: 'wide',
  },
];
