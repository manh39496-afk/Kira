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

export const characters: Character[] = [];
