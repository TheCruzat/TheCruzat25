// components/random-bg.tsx
'use client';

import { useEffect, useState } from 'react';

const pth = '/assets/bg/';

const themeSets = [
	{ file: pth + 'bg-dock.webp', bg: 'bg-theme-0', border: 'border-theme-0' },
	{ file: pth + 'bg-glimmer.webp', bg: 'bg-theme-1', border: 'border-theme-1' },
	{ file: pth + 'bg-lake.webp', bg: 'bg-theme-2', border: 'border-theme-2' },
	{ file: pth + 'bg-river.webp', bg: 'bg-theme-3', border: 'border-theme-3' },
	{ file: pth + 'bg-river2.webp', bg: 'bg-theme-4', border: 'border-theme-4' },
	{ file: pth + 'bg-tables.webp', bg: 'bg-theme-5', border: 'border-theme-5' },
	{ file: pth + 'bg-trail.webp', bg: 'bg-theme-6', border: 'border-theme-6' },
	{ file: pth + 'bg-trees.webp', bg: 'bg-theme-7', border: 'border-theme-7' }
];

function randomPick(set: Array<any>) {
	const rndx = Math.floor(Math.random() * set.length);
	return set[rndx];
}

export function useRandomTheme() {
  const [theme, setTheme] = useState<typeof themeSets[0] | null>(null);

  useEffect(() => {
    setTheme(randomPick(themeSets));
  }, []);

  return theme;
}
