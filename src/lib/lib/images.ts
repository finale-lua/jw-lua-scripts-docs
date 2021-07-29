import indeterminateClusters from '$lib/assets/images/indeterminate-clusters.png?width=1200'
import indeterminateClustersWebp from '$lib/assets/images/indeterminate-clusters.png?webp&width=1200'
import indeterminateClustersAvif from '$lib/assets/images/indeterminate-clusters.png?avif&width=1200'
import jeteHarmonic from '$lib/assets/images/jete-harmonic.png?width=1200'
import jeteHarmonicWebp from '$lib/assets/images/jete-harmonic.png?webp&width=1200'
import jeteHarmonicAvif from '$lib/assets/images/jete-harmonic.png?avif&width=1200'
import hairpinsBefore from '$lib/assets/images/hairpins-before.png?width=1200'
import hairpinsBeforeWebp from '$lib/assets/images/hairpins-before.png?webp&width=1200'
import hairpinsBeforeAvif from '$lib/assets/images/hairpins-before.png?avif&width=1200'
import hairpinsAfter from '$lib/assets/images/hairpins-after.png?width=1200'
import hairpinsAfterWebp from '$lib/assets/images/hairpins-after.png?webp&width=1200'
import hairpinsAfterAvif from '$lib/assets/images/hairpins-after.png?avif&width=1200'
import tempoRestBefore from '$lib/assets/images/tempo-multimeasure-rest-before.png?width=1200'
import tempoRestBeforeWebp from '$lib/assets/images/tempo-multimeasure-rest-before.png?webp&width=1200'
import tempoRestBeforeAvif from '$lib/assets/images/tempo-multimeasure-rest-before.png?avif&width=1200'
import tempoRestAfter from '$lib/assets/images/tempo-multimeasure-rest-after.png?width=1200'
import tempoRestAfterWebp from '$lib/assets/images/tempo-multimeasure-rest-after.png?webp&width=1200'
import tempoRestAfterAvif from '$lib/assets/images/tempo-multimeasure-rest-after.png?avif&width=1200'
import measureNumberBefore from '$lib/assets/images/measure-number-before.png?width=1200'
import measureNumberBeforeWebp from '$lib/assets/images/measure-number-before.png?webp&width=1200'
import measureNumberBeforeAvif from '$lib/assets/images/measure-number-before.png?avif&width=1200'
import measureNumberAfter from '$lib/assets/images/measure-number-after.png?width=1200'
import measureNumberAfterWebp from '$lib/assets/images/measure-number-after.png?webp&width=1200'
import measureNumberAfterAvif from '$lib/assets/images/measure-number-after.png?avif&width=1200'
import duplicateArticulationBefore from '$lib/assets/images/duplicate-articulation-before.png?width=1200'
import duplicateArticulationBeforeWebp from '$lib/assets/images/duplicate-articulation-before.png?webp&width=1200'
import duplicateArticulationBeforeAvif from '$lib/assets/images/duplicate-articulation-before.png?avif&width=1200'
import duplicateArticulationAfter from '$lib/assets/images/duplicate-articulation-after.png?width=1200'
import duplicateArticulationAfterWebp from '$lib/assets/images/duplicate-articulation-after.png?webp&width=1200'
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
