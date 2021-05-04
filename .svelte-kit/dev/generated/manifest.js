const c = [
	() => import("../../../src/routes/$layout.svelte"),
	() => import("../../../src/routes/$error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/docs/$layout.svelte"),
	() => import("../../../src/routes/docs/getting-started/adding-scripts.svelte"),
	() => import("../../../src/routes/docs/getting-started/style-guide.svelte"),
	() => import("../../../src/routes/docs/getting-started/resources.svelte"),
	() => import("../../../src/routes/docs/getting-started.svelte"),
	() => import("../../../src/routes/docs/library/general-library.svelte"),
	() => import("../../../src/routes/docs/library/configuration.svelte"),
	() => import("../../../src/routes/docs/library/enigma-string.svelte"),
	() => import("../../../src/routes/docs/library/transposition.svelte"),
	() => import("../../../src/routes/docs/library/articulation.svelte"),
	() => import("../../../src/routes/docs/library/expression.svelte"),
	() => import("../../../src/routes/docs/library/note-entry.svelte"),
	() => import("../../../src/routes/docs/library.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/docs/getting-started/adding-scripts.svelte
	[/^\/docs\/getting-started\/adding-scripts\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/docs/getting-started/style-guide.svelte
	[/^\/docs\/getting-started\/style-guide\/?$/, [c[0], c[3], c[5]], [c[1]]],

	// src/routes/docs/getting-started/resources.svelte
	[/^\/docs\/getting-started\/resources\/?$/, [c[0], c[3], c[6]], [c[1]]],

	// src/routes/docs/getting-started.svelte
	[/^\/docs\/getting-started\/?$/, [c[0], c[3], c[7]], [c[1]]],

	// src/routes/docs/library/general-library.svelte
	[/^\/docs\/library\/general-library\/?$/, [c[0], c[3], c[8]], [c[1]]],

	// src/routes/docs/library/configuration.svelte
	[/^\/docs\/library\/configuration\/?$/, [c[0], c[3], c[9]], [c[1]]],

	// src/routes/docs/library/enigma-string.svelte
	[/^\/docs\/library\/enigma-string\/?$/, [c[0], c[3], c[10]], [c[1]]],

	// src/routes/docs/library/transposition.svelte
	[/^\/docs\/library\/transposition\/?$/, [c[0], c[3], c[11]], [c[1]]],

	// src/routes/docs/library/articulation.svelte
	[/^\/docs\/library\/articulation\/?$/, [c[0], c[3], c[12]], [c[1]]],

	// src/routes/docs/library/expression.svelte
	[/^\/docs\/library\/expression\/?$/, [c[0], c[3], c[13]], [c[1]]],

	// src/routes/docs/library/note-entry.svelte
	[/^\/docs\/library\/note-entry\/?$/, [c[0], c[3], c[14]], [c[1]]],

	// src/routes/docs/library.svelte
	[/^\/docs\/library\/?$/, [c[0], c[3], c[15]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];