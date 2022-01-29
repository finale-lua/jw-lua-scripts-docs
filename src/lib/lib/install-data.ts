export const os = ['macOS', 'Windows'] as const
export type OS = typeof os[number]
export const pluginVersions = ['RGP Lua', 'JW Lua'] as const
export type PluginVersion = typeof pluginVersions[number]
export const finaleVersions = ['2014.5', '25', '26'] as const
export type FinaleVersion = typeof finaleVersions[number]

export const finaleName: Record<FinaleVersion, { short: string; full: string }> = {
    '2014.5': {
        short: 'Finale 2014.5 or earlier',
        full: 'Finale 2014.5 or earlier',
    },
    '25': {
        short: 'Finale 25',
        full: 'Finale 25',
    },
    '26': {
        short: 'Finale 26+',
        full: 'Finale 26 or later',
    },
}
