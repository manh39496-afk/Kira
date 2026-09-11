export interface Character {
  id: string;
  name: string;
  title: string;
  faction: string;
  element: string;
  weapon: string;
  description: string;
  portrait?: string;
  portraitAlt?: string;
  accent: string;
}

export const characters: Character[] = [
  {
    id: 'kael',
    name: 'Kael Dunreth',
    title: 'The Forgotten Soldier',
    faction: 'Unaligned',
    element: 'Aether',
    weapon: 'War-sword & Sigil',
    description:
      'A common soldier who survived the Fall of Aethel with no memory of how. The sigil burning on his wrist marks him as something the Church, the Crown, and the things beneath the world all want to claim. He wants only to be left alone — the realm will not allow it.',
    accent: '#b87333',
  },
  {
    id: 'lyssara',
    name: 'Lyssara Veyne',
    title: 'Scholar of the Hollow Archive',
    faction: 'The Veranthor Accord',
    element: 'Rune',
    weapon: 'Ink & Binding',
    description:
      'A scholar exiled for asking questions the Archive was built to bury. Lyssara has spent a decade tracing the sigil Kael carries. She is patient, precise, and far more dangerous than her ink-stained fingers suggest — the Accord listens when she speaks.',
    accent: '#2f6d8f',
  },
  {
    id: 'tharic',
    name: 'Tharic the Unbound',
    title: 'Breaker of the Iron Vow',
    faction: 'Free Companies',
    element: 'Iron',
    weapon: 'Great-axe',
    description:
      "Once a sworn brother of the Iron Vow, Tharic broke his oath to follow a dead friend's last command. He is loud where Kael is quiet, reckless where Lyssara is careful, and the only one of the three who will say plainly what the others are still afraid to admit.",
    accent: '#8c4a2f',
  },
  {
    id: 'sera',
    name: 'Sera Marenne',
    title: 'The Red Cloak of Veranthor',
    faction: 'The Veranthor Accord',
    element: 'Ember',
    weapon: 'Twin axes',
    description:
      "A noble-born duelist who chose the Accord over her family's name. Sera guards Lyssara with a loyalty that looks like devotion and fights like someone who has already decided what she is willing to lose. She does not trust Kael — she is beginning to need him.",
    accent: '#a8324a',
  },
  {
    id: 'vael',
    name: 'Vael the Hollow',
    title: 'The Crown Beneath',
    faction: 'Unknown',
    element: 'Void',
    weapon: 'The Hollow Crown',
    description:
      "Something that was once a king. Vael has no body the living can find and no voice the living can hear, yet the sigil answers to him. Whether he is the realm's last hope or its final ruin is the question every chapter circles without answering.",
    accent: '#5a4a6a',
  },
  {
    id: 'mira',
    name: 'Mira of Saltwatch',
    title: 'The Collector',
    faction: 'The Church of Aethel',
    element: 'Ash',
    weapon: 'Chain & Decree',
    description:
      'A Church inquisitor sent to recover what Kael carries — or destroy it, and him. Mira believes mercy is a luxury the realm cannot afford, and she may be right. She is not cruel. She is certain, which is worse.',
    accent: '#4a5a4f',
  },
];
