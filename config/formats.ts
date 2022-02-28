// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"
Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
export const Formats: FormatList = [
];
--------------------------------------------------------------------------------
If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	// Yesterday/Tomorrow Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Yesterday/Tomorrow Singles",
	},
	{
		name: "[Gen 8] OU Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672210/">OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672556/">OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674058/">OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Wifi Timer'],
		banlist: ['AG', 'Power Construct'],
	},
	{
		name: "[Gen 8] UU Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3681331/">UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679621/">UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674793/">UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU Y/T'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 8] RU Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687060/">RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661013/">RU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676023/">RU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] UU Y/T'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8] NU Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687023/">NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673598/">NU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676265/">NU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] RU Y/T'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 8] PU Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3686048/">PU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676106/">PU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] NU Y/T'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8] LC Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661419/">LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Little Cup', 'Standard', 'Wifi Timer'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vullaby', 'Vulpix-Alola', 'Woobat',
			'Chlorophyll', 'Moody', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Anything Goes Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672172/">AG Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675040/">AG Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672899/">AG Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Wifi Timer'],
	},

	// Yesterday/Tomorrow Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Yesterday/Tomorrow Doubles",
	},
	{
		name: "[Gen 8] Doubles OU Y/T",
		gameType: 'doubles',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689189/">Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658826/">Doubles OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673519/">Doubles OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 8] Doubles Ubers Y/T",
		gameType: 'doubles',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679374/">BSS Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672698/">BSS Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard Doubles'],
		banlist: [],
	},
	{
		name: "[Gen 8] Doubles UU Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689825/">Mythical Melee Discussion</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['[Gen 8] Doubles OU Y/T'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 8] Doubles LC Y/T",
		gameType: 'doubles',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660866/">LC UU</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup'],
		banlist: ['Corsola-Galar', 'Cutiefly', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix', 'Vulpix-Alola'],
	},
	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 8] Balanced Hackmons Y/T",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656408/">Balanced Hackmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659817/">BH Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['-Nonexistent', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'Calyrex-Shadow', 'Cramorant-Gorging', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Shedinja', 'Zacian-Crowned',
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Intrepid Sword', 'Libero',
			'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout',
			'Water Bubble', 'Wonder Guard', 'Comatose + Sleep Talk', 'Bolt Beak', 'Double Iron Bash', 'Octolock', 'Shell Smash',
			'Rusted Sword',
		],
		onChangeSet(set) {
			const item = this.dex.toID(set.item);
			if (set.species === 'Zacian' && item === 'rustedsword') {
				set.species = 'Zacian-Crowned';
				set.ability = 'Intrepid Sword';
				const ironHead = set.moves.indexOf('ironhead');
				if (ironHead >= 0) {
					set.moves[ironHead] = 'behemothblade';
				}
			}
			if (set.species === 'Zamazenta' && item === 'rustedshield') {
				set.species = 'Zamazenta-Crowned';
				set.ability = 'Dauntless Shield';
				const ironHead = set.moves.indexOf('ironhead');
				if (ironHead >= 0) {
					set.moves[ironHead] = 'behemothbash';
				}
			}
		},
	},
];
