const pth = '/bg/';
const primaryColors = [
	"#5a6c4b",
	"#614626",
	"#527ea3",
	"#4f9ce2",
	"#606e40",
	"#ab5a38",
	"#679332",
	"#4a5b3f"
];
const themeSets = [
	{ 	file: pth + 'bg-dock.webp', 		bg: 'bg-['+primaryColors[0]+']',	border: 'border-['+primaryColors[0]+']' },
	{ 	file: pth + 'bg-glimmer.webp', 		bg: 'bg-['+primaryColors[1]+']',	border: 'border-['+primaryColors[1]+']' },
	{ 	file: pth + 'bg-lake.webp', 		bg: 'bg-['+primaryColors[2]+']',	border: 'border-['+primaryColors[2]+']' },
	{ 	file: pth + 'bg-river.webp', 		bg: 'bg-['+primaryColors[3]+']',	border: 'border-['+primaryColors[3]+']' },
	{ 	file: pth + 'bg-river2.webp', 		bg: 'bg-['+primaryColors[4]+']',	border: 'border-['+primaryColors[4]+']' },
	{ 	file: pth + 'bg-tables.webp', 		bg: 'bg-['+primaryColors[5]+']',	border: 'border-['+primaryColors[5]+']' },
	{ 	file: pth + 'bg-trail.webp', 		bg: 'bg-['+primaryColors[6]+']',	border: 'border-['+primaryColors[6]+']' },
	{ 	file: pth + 'bg-trees.webp', 		bg: 'bg-['+primaryColors[7]+']',	border: 'border-['+primaryColors[7]+']' }
];

function randomPick(set) {
  const rndx = Math.floor(Math.random() * set.length);
  return set[rndx];
}

export default function RandomTheme(i = null) {
	if(i !== null) return themeSets[i];
	else return randomPick(themeSets);
}

/*

find a way to automate this nonsense

border-[#5a6c4b] bg-[#5a6c4b]
border-[#614626] bg-[#614626]
border-[#527ea3] bg-[#527ea3]
border-[#4f9ce2] bg-[#4f9ce2]
border-[#606e40] bg-[#606e40]
border-[#ab5a38] bg-[#ab5a38]
border-[#679332] bg-[#679332]
border-[#4a5b3f] bg-[#4a5b3f]
*/
