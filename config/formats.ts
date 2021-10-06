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
		ruleset: ['Standard'],
		banlist: ['AG', 'Arena Trap', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 8] OU (Blitz) Y/T",

		mod: 'gen8',
		ruleset: ['[Gen 8] OU Y/T', 'Blitz'],
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
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
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
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687415/">ZU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3680071/">ZU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3678037/">ZU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] PU'],
		banlist: ['PU', 'Centiskorch', 'Drampa', 'Exeggutor-Alola', 'Gallade', 'Haunter', 'Magmortar', 'Magneton', 'Omastar', 'Rotom-Frost', 'Turtonator', 'Vikavolt', 'Silvally-Dragon', 'Silvally-Ground', 'Sneasel', 'Damp Rock', 'Grassy Seed'],
	},
	{
		name: "[Gen 8] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660866/">LC UU</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] LC'],
		banlist: [
			// LC OU
			'Abra', 'Archen', 'Carvanha', 'Dewpider', 'Diglett-Base', 'Dwebble', 'Ferroseed', 'Foongus', 'Frillish', 'Grookey',
			'Koffing', 'Larvesta', 'Magnemite', 'Mareanie', 'Mienfoo', 'Mudbray', 'Munchlax', 'Natu', 'Onix', 'Pawniard', 'Ponyta',
			'Ponyta-Galar', 'Porygon', 'Slowpoke', 'Spritzee', 'Staryu', 'Timburr', 'Trapinch', 'Tyrunt', 'Vulpix',
			// LC UUBL
			'Farfetch\u2019d-Galar', 'Scorbunny', 'Shellder', 'Wingull',
		],
	},
	{
		name: "[Gen 8] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656824/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671157/">CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674024/">CAP Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 8] CAP LC",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] LC', '+CAP'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles",

		mod: 'gen8',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'Limit One Restricted', 'Dynamax Clause'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles Series 9",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679374/">BSS Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672698/">BSS Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8'],
	},
	{
		name: "[Gen 8] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660866/">LC UU</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] LC'],
		banlist: [
			// LC OU
			'Abra', 'Chinchou', 'Dewpider', 'Diglett-Base', 'Drilbur', 'Ferroseed', 'Foongus', 'Frillish', 'Grookey',
			'Koffing', 'Magnemite', 'Mareanie', 'Mienfoo', 'Mudbray', 'Munchlax', 'Onix', 'Natu', 'Pawniard', 'Ponyta',
			'Ponyta-Galar', 'Porygon', 'Scraggy', 'Spritzee', 'Staryu', 'Timburr', 'Trapinch', 'Tyrunt', 'Vulpix',
			// LC BL
			'Carvanha', 'Farfetch\u2019d-Galar', 'Shellder', 'Wingull',
		],
	},
	{
		name: "[Gen 8] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656824/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671157/">CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674024/">CAP Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', '+CAP'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles",

		mod: 'gen8',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'Limit One Restricted', 'Dynamax Clause'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles Series 9",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679374/">BSS Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672698/">BSS Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8'],
	},
	{
		name: "[Gen 8] Mythical Melee",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689825/">Mythical Melee Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', '-All Pokemon', '+Mythical', '+Restricted Legendary', '+Sub-Legendary'],
		banlist: ['Eternatus-Eternamax'],
	},
	{
		name: "[Gen 8] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660866/">LC UU</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] LC'],
		banlist: [
			// LC OU
			'Abra', 'Chinchou', 'Dewpider', 'Diglett-Base', 'Drilbur', 'Ferroseed', 'Foongus', 'Frillish', 'Grookey',
			'Koffing', 'Magnemite', 'Mareanie', 'Mienfoo', 'Mudbray', 'Munchlax', 'Onix', 'Natu', 'Pawniard', 'Ponyta',
			'Ponyta-Galar', 'Porygon', 'Scraggy', 'Spritzee', 'Staryu', 'Timburr', 'Trapinch', 'Tyrunt', 'Vulpix',
			// LC BL
			'Carvanha', 'Farfetch\u2019d-Galar', 'Shellder', 'Wingull',
		],
	},
	{
		name: "[Gen 8] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656824/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671157/">CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674024/">CAP Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', '+CAP'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles",

		mod: 'gen8',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'Limit One Restricted', 'Dynamax Clause'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles Series 9",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679374/">BSS Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672698/">BSS Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8'],
	},
	{
		name: "[Gen 8] Mythical Melee",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689825/">Mythical Melee Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', '-All Pokemon', '+Mythical', '+Restricted Legendary', '+Sub-Legendary'],
		banlist: ['Eternatus-Eternamax'],
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// Yesterday/Tomorrow Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Yesterday/Tomorrow Doubles",
	},
	{
		name: "[Gen 8] Doubles OU Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689189/">Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658826/">Doubles OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673519/">Doubles OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 8] Doubles Ubers Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661142/">Doubles Ubers</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] Doubles UU Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658504/">Doubles UU</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['[Gen 8] Doubles OU Y/T'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 8] Doubles LC Y/T",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658672/">Doubles LC</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup', 'Dynamax Clause', 'Swagger Clause', 'Sleep Clause Mod'],
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
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
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
