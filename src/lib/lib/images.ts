/* eslint-disable lines-around-comment, import/order, id-length -- otherwise it's going to be a mess */

// @ts-expect-error -- need the query parameters
import indeterminateClusters from '$lib/assets/images/indeterminate-clusters.png?width=1200'
// @ts-expect-error -- need the query parameters
import indeterminateClustersWebp from '$lib/assets/images/indeterminate-clusters.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import indeterminateClustersAvif from '$lib/assets/images/indeterminate-clusters.png?avif&width=1200'
// @ts-expect-error -- need the query parameters
import jeteHarmonic from '$lib/assets/images/jete-harmonic.png?width=1200'
// @ts-expect-error -- need the query parameters
import jeteHarmonicWebp from '$lib/assets/images/jete-harmonic.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import jeteHarmonicAvif from '$lib/assets/images/jete-harmonic.png?avif&width=1200'
// @ts-expect-error -- need the query parameters
import hairpinsBefore from '$lib/assets/images/hairpins-before.png?width=1200'
// @ts-expect-error -- need the query parameters
import hairpinsBeforeWebp from '$lib/assets/images/hairpins-before.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import hairpinsBeforeAvif from '$lib/assets/images/hairpins-before.png?avif&width=1200'
// @ts-expect-error -- need the query parameters
import hairpinsAfter from '$lib/assets/images/hairpins-after.png?width=1200'
// @ts-expect-error -- need the query parameters
import hairpinsAfterWebp from '$lib/assets/images/hairpins-after.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import hairpinsAfterAvif from '$lib/assets/images/hairpins-after.png?avif&width=1200'
// @ts-expect-error -- need the query parameters
import tempoRestBefore from '$lib/assets/images/tempo-multimeasure-rest-before.png?width=1200'
// @ts-expect-error -- need the query parameters
import tempoRestBeforeWebp from '$lib/assets/images/tempo-multimeasure-rest-before.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import tempoRestBeforeAvif from '$lib/assets/images/tempo-multimeasure-rest-before.png?avif&width=1200'
// @ts-expect-error -- need the query parameters
import tempoRestAfter from '$lib/assets/images/tempo-multimeasure-rest-after.png?width=1200'
// @ts-expect-error -- need the query parameters
import tempoRestAfterWebp from '$lib/assets/images/tempo-multimeasure-rest-after.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import tempoRestAfterAvif from '$lib/assets/images/tempo-multimeasure-rest-after.png?avif&width=1200'
// @ts-expect-error -- need the query parameters
import measureNumberBefore from '$lib/assets/images/measure-number-before.png?width=1200'
// @ts-expect-error -- need the query parameters
import measureNumberBeforeWebp from '$lib/assets/images/measure-number-before.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import measureNumberBeforeAvif from '$lib/assets/images/measure-number-before.png?avif&width=1200'
// @ts-expect-error -- need the query parameters
import measureNumberAfter from '$lib/assets/images/measure-number-after.png?width=1200'
// @ts-expect-error -- need the query parameters
import measureNumberAfterWebp from '$lib/assets/images/measure-number-after.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import measureNumberAfterAvif from '$lib/assets/images/measure-number-after.png?avif&width=1200'
// @ts-expect-error -- need the query parameters
import duplicateArticulationBefore from '$lib/assets/images/duplicate-articulation-before.png?width=1200'
// @ts-expect-error -- need the query parameters
import duplicateArticulationBeforeWebp from '$lib/assets/images/duplicate-articulation-before.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import duplicateArticulationBeforeAvif from '$lib/assets/images/duplicate-articulation-before.png?avif&width=1200'
// @ts-expect-error -- need the query parameters
import duplicateArticulationAfter from '$lib/assets/images/duplicate-articulation-after.png?width=1200'
// @ts-expect-error -- need the query parameters
import duplicateArticulationAfterWebp from '$lib/assets/images/duplicate-articulation-after.png?webp&width=1200'
// @ts-expect-error -- need the query parameters
import duplicateArticulationAfterAvif from '$lib/assets/images/duplicate-articulation-after.png?avif&width=1200'

export const images = {
    indeterminateClusters: {
        png: indeterminateClusters,
        webp: indeterminateClustersWebp,
        avif: indeterminateClustersAvif,
    },
    jeteHarmonic: {
        png: jeteHarmonic,
        webp: jeteHarmonicWebp,
        avif: jeteHarmonicAvif,
    },
    hairpinsBefore: {
        png: hairpinsBefore,
        webp: hairpinsBeforeWebp,
        avif: hairpinsBeforeAvif,
    },
    hairpinsAfter: {
        png: hairpinsAfter,
        webp: hairpinsAfterWebp,
        avif: hairpinsAfterAvif,
    },
    tempoRestBefore: {
        png: tempoRestBefore,
        webp: tempoRestBeforeWebp,
        avif: tempoRestBeforeAvif,
    },
    tempoRestAfter: {
        png: tempoRestAfter,
        webp: tempoRestAfterWebp,
        avif: tempoRestAfterAvif,
    },
    measureNumberBefore: {
        png: measureNumberBefore,
        webp: measureNumberBeforeWebp,
        avif: measureNumberBeforeAvif,
    },
    measureNumberAfter: {
        png: measureNumberAfter,
        webp: measureNumberAfterWebp,
        avif: measureNumberAfterAvif,
    },
    duplicateArticulationBefore: {
        png: duplicateArticulationBefore,
        webp: duplicateArticulationBeforeWebp,
        avif: duplicateArticulationBeforeAvif,
    },
    duplicateArticulationAfter: {
        png: duplicateArticulationAfter,
        webp: duplicateArticulationAfterWebp,
        avif: duplicateArticulationAfterAvif,
    },
} as const

export type ImageSource = keyof typeof images
