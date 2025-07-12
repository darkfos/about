import type { Theme } from '@/entities/theme';

import type { Entity, Author, Components } from '@/shared/types';

export interface Blog extends Entity{
  title?: string;
  likes: number;
  views: number;
  section: Array<Components>;
  theme: Theme;
  author: Author
}
