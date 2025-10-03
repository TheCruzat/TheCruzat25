// module for random name in footer

// at some point, make this list a shared
// global for all sites in the ecosystem

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
  // Get a random index
  const randomIndex = Math.floor(Math.random() * aliases.length);

  // Get the item at the random index
  return aliases[randomIndex];
}

export default function MultiName() {
	return randoName();
}
