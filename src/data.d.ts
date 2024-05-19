import type { string } from 'astro/zod';

export interface features {
  title: string;
  body: string;
  icon: string;
}

export interface portfolio {
  title: string;
  image: string;
  link: string;
}

export interface socialNetworks {
  icon: string;
  username: string;
  link: string;
}
