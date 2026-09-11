export interface Region {
  id: string;
  name: string;
  type: string;
  summary: string;
  detail: string;
  image: string;
  imageAlt: string;
}

export const regions: Region[] = [
  {
    id: 'aethel',
    name: 'Old Aethel',
    type: 'Fallen Capital',
    summary:
      'The heart of the old kingdom, now a crater of ash and broken spires where the sky still bleeds color at dusk.',
    detail:
      'Aethel was the seat of the Crown for nine centuries. When the Fall came, the city did not burn — it sank. The crater it left behind is called the Hollow, and the Church has forbidden entry on pain of death. Those who have gone in anyway describe a throne room that is still warm, and a crown that is still waiting.',
    image:
      'https://images.pexels.com/photos/29223328/pexels-photo-29223328.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'A castle shrouded in mist surrounded by alpine forests',
  },
  {
    id: 'veranthor',
    name: 'Veranthor',
    type: 'Free City-State',
    summary:
      'A coastal city of scholars, salt-trade, and quiet ambition, where the Accord was signed in a room with no windows.',
    detail:
      'Veranthor survived the Fall by refusing to take a side. It took in the scholars the Church expelled, the soldiers the Crown disbanded, and the coin both of them needed. It is ruled by a Council of nine who vote in secret and never, ever raise their voices. The Accord that bears its name is the closest thing the fractured realm has to a peace.',
    image:
      'https://images.pexels.com/photos/11267011/pexels-photo-11267011.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'A charming historic village on a cliff with rustic architecture and lush greenery',
  },
  {
    id: 'iron-vow',
    name: 'The Iron Marches',
    type: 'Borderlands',
    summary:
      'A belt of fortresses and frozen moorland where the Free Companies hold the line against what came out of the Hollow.',
    detail:
      'The Marches were built to keep something in, not to keep armies out. The Free Companies who garrison them are sworn for life and paid in land they will never farm. The cold here is a thing with teeth. Veterans say the wind sounds different the closer you get to the Hollow, and that the silence after it stops is worse.',
    image:
      'https://images.pexels.com/photos/11336947/pexels-photo-11336947.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'A mysterious forest scene with tall tree trunks shrouded in mist and fog',
  },
  {
    id: 'saltwatch',
    name: 'Saltwatch',
    type: 'Church Dominion',
    summary:
      'A theocratic coast where the Church of Aethel collects tithes in salt and silence, and the Collectors do not knock.',
    detail:
      'Saltwatch was a fishing province before the Church claimed it. Now its cathedrals are built from ship-bones and salt-crystal, and its Collectors are as feared as any army. The Church teaches that the Fall was a judgement, that the sigil is a sin, and that the Hollow must never be disturbed. Mira of Saltwatch is their finest instrument.',
    image:
      'https://images.pexels.com/photos/18745912/pexels-photo-18745912.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1',
    imageAlt: 'Historic stone buildings in a Tuscan village setting',
  },
];

export interface LoreEntry {
  id: string;
  title: string;
  body: string;
}

export const lore: LoreEntry[] = [
  {
    id: 'the-fall',
    title: 'The Fall of Aethel',
    body: 'No one agrees on what happened the night Aethel fell. The Church calls it a judgement. The scholars of Veranthor call it a mistake. The Free Companies, who were closest, do not call it anything — they simply do not speak of it. What is known: the sky over the city turned the color of a bruise, the ground opened, and nine centuries of kings went into the dark. The sigil Kael carries appeared that night, on the wrist of every soldier in the field. He is the only one who survived to wear it.',
  },
  {
    id: 'the-sigil',
    title: 'The Aethelmark',
    body: "The sigil — the Aethelmark — is not a tattoo and not a brand. It surfaces through the skin without wound and cannot be removed by blade, fire, or acid. It responds to proximity to the Hollow, growing warmer and brighter the closer the bearer comes. The Church considers it a mark of sin. Lyssara's research suggests it is older than the Crown itself, and that the kings of Aethel did not create it — they inherited it, and feared it.",
  },
  {
    id: 'the-accord',
    title: 'The Veranthor Accord',
    body: 'Signed three years after the Fall, the Accord is a fragile peace between the Free Companies, the Church, and the surviving noble houses. It holds because no faction is strong enough to win a war and every faction knows it. The Accord is also, quietly, a conspiracy: Lyssara helped draft it, and buried a clause in its final paragraph that gives its signatories the right to enter the Hollow. No one has invoked it yet. Kael may be the reason they do.',
  },
];
