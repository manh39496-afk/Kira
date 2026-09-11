export interface Region {
  id: string;
  name: string;
  type: string;
  summary: string;
  detail: string;
  image?: string;
  imageAlt?: string;
}

export const regions: Region[] = [];

export interface LoreEntry {
  id: string;
  title: string;
  body: string;
}

export const lore: LoreEntry[] = [];
