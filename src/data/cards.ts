// card data for the home page and guides index.
// sections group cards under subheadings on the home page.
// each card links to a real page under /guides/.

export type Card = {
	title: string;
	description: string;
	href: string;
	accent: 'p1' | 'p2' | 'p3' | 'p4' | 'p5';
	icon: string;
};

export type CardSection = {
	heading: string;
	hint: string;
	cards: Card[];
};

// home page: grouped into thematic sections with subheadings
export const homeSections: CardSection[] = [
	{
		heading: 'thinking better',
		hint: 'concepts for cross-disciplinary minds',
		cards: [
			{
				title: 'polymath',
				description: 'deep knowledge across multiple fields',
				href: '/guides/polymath',
				accent: 'p1',
				icon: 'fa-solid fa-brain',
			},
			{
				title: 'multipotentialite',
				description: 'many interests, refusal to choose one',
				href: '/guides/multipotentialite',
				accent: 'p2',
				icon: 'fa-solid fa-infinity',
			},
			{
				title: 'interdisciplinary thinking',
				description: 'work at the intersection of fields',
				href: '/guides/interdisciplinary',
				accent: 'p3',
				icon: 'fa-solid fa-code-branch',
			},
			{
				title: 'interwingularity',
				description: 'linking ideas across your knowledge',
				href: '/guides/interwingularity',
				accent: 'p4',
				icon: 'fa-solid fa-diagram-project',
			},
			{
				title: 'associativity',
				description: 'how freely ideas trigger other ideas',
				href: '/guides/associativity',
				accent: 'p5',
				icon: 'fa-solid fa-bolt',
			},
			{
				title: 'adhd & pattern recognition',
				description: 'spotting what others miss',
				href: '/guides/adhd-pattern-recognition',
				accent: 'p1',
				icon: 'fa-solid fa-magnifying-glass',
			},
		],
	},
	{
		heading: 'memory',
		hint: 'retaining, recalling, and organizing what you know',
		cards: [
			{
				title: 'retentive memory',
				description: 'holding and recalling information',
				href: '/guides/retentive-memory',
				accent: 'p2',
				icon: 'fa-solid fa-hard-drive',
			},
			{
				title: 'knowledge networks',
				description: 'structure of how you know things',
				href: '/guides/knowledge-networks',
				accent: 'p3',
				icon: 'fa-solid fa-circle-nodes',
			},
			{
				title: 'second brain',
				description: 'externalize thinking into a trusted system',
				href: '/pkm/second-brain',
				accent: 'p4',
				icon: 'fa-solid fa-database',
			},
			{
				title: 'digital gardens',
				description: 'grow ideas in public, tend them over time',
				href: '/pkm/digital-gardens',
				accent: 'p5',
				icon: 'fa-solid fa-seedling',
			},
		],
	},
	{
		heading: 'knowledge management',
		hint: 'tools and methods for capturing ideas',
		cards: [
			{
				title: 'tools',
				description: 'software for thinking and creating',
				href: '/guides/tools',
				accent: 'p1',
				icon: 'fa-solid fa-wrench',
			},
			{
				title: 'techniques',
				description: 'methods and approaches for learning',
				href: '/guides/techniques',
				accent: 'p2',
				icon: 'fa-solid fa-lightbulb',
			},
			{
				title: 'graphic organizers',
				description: 'visual frameworks for structuring thought',
				href: '/guides/sketchnotes',
				accent: 'p3',
				icon: 'fa-solid fa-object-group',
			},
			{
				title: 'sketchnotes',
				description: 'visual capture & synthesis',
				href: '/guides/sketchnotes',
				accent: 'p4',
				icon: 'fa-solid fa-pen-fancy',
			},
			{
				title: 'annotations',
				description: 'highlights & underlines for marking what matters',
				href: '/guides/annotations',
				accent: 'p5',
				icon: 'fa-solid fa-highlighter',
			},
		],
	},
	{
		heading: 'electronics',
		hint: 'components, circuits, and building things',
		cards: [
			{
				title: 'circuit symbols',
				description: 'read schematics like a map',
				href: '/guides/circuit-symbols',
				accent: 'p5',
				icon: 'fa-solid fa-diagram-next',
			},
			{
				title: 'power basics',
				description: 'voltage, current, polarity, fusing',
				href: '/guides/power',
				accent: 'p1',
				icon: 'fa-solid fa-bolt',
			},
			{
				title: 'resistors',
				description: 'values, bands, dividers, pull-ups',
				href: '/guides/resistors',
				accent: 'p2',
				icon: 'fa-solid fa-grip-lines',
			},
			{
				title: 'capacitors',
				description: 'decoupling, electrolytic vs ceramic',
				href: '/guides/capacitors',
				accent: 'p3',
				icon: 'fa-solid fa-battery-half',
			},
			{
				title: 'diodes',
				description: 'signal, schottky, tvs, flyback',
				href: '/guides/diodes',
				accent: 'p4',
				icon: 'fa-solid fa-arrow-right',
			},
			{
				title: 'transistors',
				description: 'bjt & mosfet switching basics',
				href: '/guides/transistors',
				accent: 'p5',
				icon: 'fa-solid fa-plug-circle-bolt',
			},
			{
				title: '555 timer',
				description: 'astable, monostable, pwm tricks',
				href: '/guides/555',
				accent: 'p1',
				icon: 'fa-solid fa-hourglass-half',
			},
			{
				title: 'microcontrollers',
				description: 'arduino, rp2040, basics of pins & timing',
				href: '/guides/microcontrollers',
				accent: 'p2',
				icon: 'fa-solid fa-microchip',
			},
		],
	},
];

// pkm index page: personal knowledge management subtypes
export const pkmCards: Card[] = [
	{
		title: 'second brain',
		description: 'externalize thinking into a trusted system',
		href: '/pkm/second-brain',
		accent: 'p1',
		icon: 'fa-solid fa-database',
	},
	{
		title: 'digital gardens',
		description: 'grow ideas in public, tend them over time',
		href: '/pkm/digital-gardens',
		accent: 'p2',
		icon: 'fa-solid fa-seedling',
	},
	{
		title: 'zettelkasten',
		description: 'atomic notes with unique ids, linked by association',
		href: '/pkm/zettelkasten',
		accent: 'p3',
		icon: 'fa-solid fa-layer-group',
	},
	{
		title: 'bidirectional linking',
		description: 'notes that reference each other, building a web',
		href: '/pkm/bidirectional-linking',
		accent: 'p4',
		icon: 'fa-solid fa-arrows-left-right',
	},
	{
		title: 'graph view',
		description: 'see your knowledge as a network, not a list',
		href: '/pkm/graph-view',
		accent: 'p5',
		icon: 'fa-solid fa-circle-nodes',
	},
	{
		title: 'spaced repetition pkm',
		description: 'flashcards meet your notes for durable memory',
		href: '/pkm/spaced-repetition-pkm',
		accent: 'p1',
		icon: 'fa-solid fa-clock-rotate-left',
	},
	{
		title: 'daily notes',
		description: 'capture everything in one place per day',
		href: '/pkm/daily-notes',
		accent: 'p2',
		icon: 'fa-solid fa-calendar-day',
	},
	{
		title: 'progressive summarization',
		description: 'highlight, bold, summarize: layers of emphasis',
		href: '/pkm/progressive-summarization',
		accent: 'p3',
		icon: 'fa-solid fa-filter',
	},
];

// flat list kept for backward compatibility with any code that expects a single array
export const homeCards: Card[] = homeSections.flatMap(section => section.cards);

// guides index page: focused on electronic components
export const componentCards: Card[] = [
	{
		title: 'cables & wire',
		description: 'solid vs stranded, gauge',
		href: '/guides/cables',
		accent: 'p2',
		icon: 'fa-solid fa-ethernet',
	},
	{
		title: 'diodes',
		description: 'direction, drop, protection',
		href: '/guides/diodes',
		accent: 'p4',
		icon: 'fa-solid fa-bolt',
	},
	{
		title: 'variable resistors',
		description: 'pots: divider & rheostat',
		href: '/guides/variable-resistors',
		accent: 'p5',
		icon: 'fa-solid fa-sliders',
	},
	{
		title: 'resistors',
		description: 'values & color codes',
		href: '/guides/resistors',
		accent: 'p5',
		icon: 'fa-solid fa-grip-lines',
	},
	{
		title: 'capacitors',
		description: 'store & smooth energy',
		href: '/guides/capacitors',
		accent: 'p3',
		icon: 'fa-solid fa-battery-half',
	},
	{
		title: 'leds',
		description: 'blink, dim, and color',
		href: '/guides/leds',
		accent: 'p3',
		icon: 'fa-solid fa-lightbulb',
	},
	{
		title: 'switches',
		description: 'spst, dpdt, click!',
		href: '/guides/switches',
		accent: 'p1',
		icon: 'fa-solid fa-toggle-on',
	},
	{
		title: 'relays',
		description: 'electrically operated switches',
		href: '/guides/relays',
		accent: 'p4',
		icon: 'fa-solid fa-gear',
	},
	{
		title: 'transistors',
		description: 'tiny current magicians',
		href: '/guides/transistors',
		accent: 'p2',
		icon: 'fa-solid fa-plug-circle-bolt',
	},
	{
		title: 'connectors',
		description: 'plugs, sockets, headers',
		href: '/guides/connectors',
		accent: 'p2',
		icon: 'fa-solid fa-link',
	},
	{
		title: '555 timer ic',
		description: 'classic timers & fun circuits',
		href: '/guides/555',
		accent: 'p5',
		icon: 'fa-solid fa-hourglass-half',
	},
	{
		title: '4000 series ics',
		description: 'cmos logic basics',
		href: '/guides/ic-4000',
		accent: 'p4',
		icon: 'fa-solid fa-border-all',
	},
	{
		title: '74 series ics',
		description: 'ttl logic basics',
		href: '/guides/ic-7400',
		accent: 'p1',
		icon: 'fa-solid fa-table-cells-large',
	},
];
