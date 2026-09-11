export interface Chapter {
  number: number;
  title: string;
  arc: string;
  excerpt: string;
  wordCount: number;
  status: 'published' | 'upcoming';
  date: string;
}

export const chapters: Chapter[] = [
  {
    number: 1,
    title: 'The Soldier Who Forgot',
    arc: 'Arc I — Embers of Aethel',
    excerpt:
      'Kael wakes in a field of ash with no memory of the battle that ended his company. A sigil burns on his wrist — a mark no living soul should carry.',
    wordCount: 4200,
    status: 'published',
    date: '2026-03-12',
  },
  {
    number: 2,
    title: 'The Road to Veranthor',
    arc: 'Arc I — Embers of Aethel',
    excerpt:
      'Among refugees fleeing the borderlands, Kael meets a scholar who claims to know what the sigil means — and why the Church wants it buried.',
    wordCount: 5100,
    status: 'published',
    date: '2026-03-19',
  },
  {
    number: 3,
    title: 'Salt and Iron',
    arc: 'Arc I — Embers of Aethel',
    excerpt:
      'A coastal village pays its tithe in salt and silence. When the Collector arrives, Kael must decide whether to intervene — and risk revealing what he carries.',
    wordCount: 4800,
    status: 'published',
    date: '2026-03-26',
  },
  {
    number: 4,
    title: 'The Hollow Crown',
    arc: 'Arc I — Embers of Aethel',
    excerpt:
      'In the ruins of Old Aethel, the truth of the Fall begins to surface. The crown was never lost — it was hidden, and something beneath it is still awake.',
    wordCount: 5600,
    status: 'published',
    date: '2026-04-02',
  },
  {
    number: 5,
    title: 'What the Storm Remembers',
    arc: 'Arc II — The Veranthor Accord',
    excerpt:
      'Lyssara arrives in the capital with a proposition the Council cannot refuse — and a blade they cannot see. Kael is offered a title he does not want.',
    wordCount: 6200,
    status: 'published',
    date: '2026-04-09',
  },
  {
    number: 6,
    title: 'Oaths in the Dark',
    arc: 'Arc II — The Veranthor Accord',
    excerpt:
      'An alliance is forged in candlelight and broken by dawn. When the first blade falls, no one is certain whose side it came from.',
    wordCount: 5900,
    status: 'upcoming',
    date: '2026-04-16',
  },
  {
    number: 7,
    title: 'The Weight of Wings',
    arc: 'Arc II — The Veranthor Accord',
    excerpt:
      "Coming soon — the Accord fractures, and the sigil's true cost comes due.",
    wordCount: 0,
    status: 'upcoming',
    date: '2026-04-23',
  },
];
