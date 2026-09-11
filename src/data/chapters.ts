export interface Chapter {
  number: number;
  title: string;
  arc: string;
  excerpt: string;
  wordCount: number;
  status: 'published' | 'upcoming';
  date: string;
}

export const chapters: Chapter[] = [];
