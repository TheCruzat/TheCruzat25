// components/RandomName.tsx
'use client';

import { useEffect, useState } from 'react';

const aliases = [
  'Julio English',
  'Pirks the Pilot',
  'Petey PASCAL',
  'P1RK5',
  'Dan DeLorean',
  'Doe Scameron',
  'Dizzo Loops',
  'Dan Diesel',
  'Ricky Ticardo',
  'The Rule Regulator',
  'Boba Phatt',
  'The Cold Brew King',
  'El Vaquero Chileno',
  'Lord of SE',
  'Pac Pickleson',
  'Cannibal Hector',
  'Bronco Dilator',
  'Darming Chaniels',
  'Dancy Faniels',
  'Dantronix',
  'Pete Rows',
  'Tintin\' Quarantino',
  'Z3R0 FOX',
  'The Dancellor',
  'Danny Miami',
  'The Danimal',
  'Dann Campbell',
  'Petifer Daniston',
  'Rollin Like Burritos and Blunts',
  'Scarfield',
  'Ann Dackroyd',
  'The Polysyllabic Maverick',
  'The Mad Hatter of Antimatter',
  'The Salmon Upstream',
  'Soundwav the Killer',
  'Hordak the Tyrant',
  'Danold Thump',
  'Cambot THC-1138',
  'Live from the Humming Top',
  'Peyuco Prime aka Double-P',
  'Brother to Reverend Nathaniel',
  'The Crown Prince of FA Nonsense',
  'The Firemaster',
  'THe Breakfast Burrito Master',
  'Lucky Conejo',
  'Moe\'s Favorite',
  'Sudi\'s Masterpiece',
  'The Allfather'
];

function randoName() {
  const randomIndex = Math.floor(Math.random() * aliases.length);
  return aliases[randomIndex];
}

export default function RandomName() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setName(randoName());
  }, []);

  return <>{name}</>;
}
