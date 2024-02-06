export const categories = [`headphones`, `speakers`, `earphones`] as const;

export type Category = (typeof categories)[number];
