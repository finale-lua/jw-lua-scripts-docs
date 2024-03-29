<script lang="ts">
    import { page } from '$app/stores'
    import luaLogo from '$lib/assets/images/lua-logo.png'
    import Markdown from '@nick-mazuk/ui-svelte/src/typography/markdown/markdown.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'

    const content = `# Library

- [finale_version](#finale_version)
- [group_overlaps_region](#group_overlaps_region)
- [group_is_contained_in_region](#group_is_contained_in_region)
- [staff_group_is_multistaff_instrument](#staff_group_is_multistaff_instrument)
- [get_selected_region_or_whole_doc](#get_selected_region_or_whole_doc)
- [get_first_cell_on_or_after_page](#get_first_cell_on_or_after_page)
- [get_top_left_visible_cell](#get_top_left_visible_cell)
- [get_top_left_selected_or_visible_cell](#get_top_left_selected_or_visible_cell)
- [is_default_measure_number_visible_on_cell](#is_default_measure_number_visible_on_cell)
- [is_default_number_visible_and_left_aligned](#is_default_number_visible_and_left_aligned)
- [update_layout](#update_layout)
- [get_current_part](#get_current_part)
- [get_page_format_prefs](#get_page_format_prefs)
- [get_smufl_metadata_file](#get_smufl_metadata_file)
- [is_font_smufl_font](#is_font_smufl_font)
- [simple_input](#simple_input)

## finale_version

\`\`\`lua
library.finale_version(major, minor, build)
\`\`\`

Returns a raw Finale version from major, minor, and (optional) build parameters. For 32-bit Finale
this is the internal major Finale version, not the year.

| Input | Type | Description |
| --- | --- | --- |
| \`major\` | \`number\` | Major Finale version |
| \`minor\` | \`number\` | Minor Finale version |
| \`build\` (optional) | \`number\` | zero if omitted |

| Output type | Description |
| --- | --- |
| \`number\` |  |

## group_overlaps_region

\`\`\`lua
library.group_overlaps_region(staff_group, region)
\`\`\`

Returns true if the input staff group overlaps with the input music region, otherwise false.

| Input | Type | Description |
| --- | --- | --- |
| \`staff_group\` | \`FCGroup\` |  |
| \`region\` | \`FCMusicRegion\` |  |

| Output type | Description |
| --- | --- |
| \`boolean\` |  |

## group_is_contained_in_region

\`\`\`lua
library.group_is_contained_in_region(staff_group, region)
\`\`\`

Returns true if the entire input staff group is contained within the input music region.
If the start or end staff are not visible in the region, it returns false.

| Input | Type | Description |
| --- | --- | --- |
| \`staff_group\` | \`FCGroup\` |  |
| \`region\` | \`FCMusicRegion\` |  |

| Output type | Description |
| --- | --- |
| \`boolean\` |  |

## staff_group_is_multistaff_instrument

\`\`\`lua
library.staff_group_is_multistaff_instrument(staff_group)
\`\`\`

Returns true if the entire input staff group is a multistaff instrument.

| Input | Type | Description |
| --- | --- | --- |
| \`staff_group\` | \`FCGroup\` |  |

| Output type | Description |
| --- | --- |
| \`boolean\` |  |

## get_selected_region_or_whole_doc

\`\`\`lua
library.get_selected_region_or_whole_doc()
\`\`\`

Returns a region that contains the selected region if there is a selection or the whole document if there isn't.
SIDE-EFFECT WARNING: If there is no selected region, this function also changes finenv.Region() to the whole document.

| Output type | Description |
| --- | --- |
| \`FCMusicRegion\` |  |

## get_first_cell_on_or_after_page

\`\`\`lua
library.get_first_cell_on_or_after_page(page_num)
\`\`\`

Returns the first FCCell at the top of the input page. If the page is blank, it returns the first cell after the input page.

| Input | Type | Description |
| --- | --- | --- |
| \`page_num\` | \`number\` |  |

| Output type | Description |
| --- | --- |
| \`FCCell\` |  |

## get_top_left_visible_cell

\`\`\`lua
library.get_top_left_visible_cell()
\`\`\`

Returns the topmost, leftmost visible FCCell on the screen, or the closest possible estimate of it.

| Output type | Description |
| --- | --- |
| \`FCCell\` |  |

## get_top_left_selected_or_visible_cell

\`\`\`lua
library.get_top_left_selected_or_visible_cell()
\`\`\`

If there is a selection, returns the topmost, leftmost cell in the selected region.
Otherwise returns the best estimate for the topmost, leftmost currently visible cell.

| Output type | Description |
| --- | --- |
| \`FCCell\` |  |

## is_default_measure_number_visible_on_cell

\`\`\`lua
library.is_default_measure_number_visible_on_cell (meas_num_region, cell, staff_system, current_is_part)
\`\`\`

Returns true if measure numbers for the input region are visible on the input cell for the staff system.

| Input | Type | Description |
| --- | --- | --- |
| \`meas_num_region\` | \`FCMeasureNumberRegion\` |  |
| \`cell\` | \`FCCell\` |  |
| \`staff_system\` | \`FCStaffSystem\` |  |
| \`current_is_part\` | \`boolean\` | true if the current view is a linked part, otherwise false |

| Output type | Description |
| --- | --- |
| \`boolean\` |  |

## is_default_number_visible_and_left_aligned

\`\`\`lua
library.is_default_number_visible_and_left_aligned (meas_num_region, cell, system, current_is_part, is_for_multimeasure_rest)
\`\`\`

Returns true if measure number for the input cell is visible and left-aligned.

| Input | Type | Description |
| --- | --- | --- |
| \`meas_num_region\` | \`FCMeasureNumberRegion\` |  |
| \`cell\` | \`FCCell\` |  |
| \`system\` | \`FCStaffSystem\` |  |
| \`current_is_part\` | \`boolean\` | true if the current view is a linked part, otherwise false |
| \`is_for_multimeasure_rest\` | \`boolean\` | true if the current cell starts a multimeasure rest |

| Output type | Description |
| --- | --- |
| \`boolean\` |  |

## update_layout

\`\`\`lua
library.update_layout(from_page, unfreeze_measures)
\`\`\`

Updates the page layout.

| Input | Type | Description |
| --- | --- | --- |
| \`from_page\` (optional) | \`number\` | page to update from, defaults to 1 |
| \`unfreeze_measures\` (optional) | \`boolean\` | defaults to false |

## get_current_part

\`\`\`lua
library.get_current_part()
\`\`\`

Returns the currently selected part or score.

| Output type | Description |
| --- | --- |
| \`FCPart\` |  |

## get_page_format_prefs

\`\`\`lua
library.get_page_format_prefs()
\`\`\`

Returns the default page format prefs for score or parts based on which is currently selected.

| Output type | Description |
| --- | --- |
| \`FCPageFormatPrefs\` |  |

## get_smufl_metadata_file

\`\`\`lua
library.get_smufl_metadata_file(font_info)
\`\`\`

| Input | Type | Description |
| --- | --- | --- |
| \`font_info\` (optional) | \`FCFontInfo\` | if non-nil, the font to search for; if nil, search for the Default Music Font |

| Output type | Description |
| --- | --- |
| \`file handle\|nil\` |  |

## is_font_smufl_font

\`\`\`lua
library.is_font_smufl_font(font_info)
\`\`\`

| Input | Type | Description |
| --- | --- | --- |
| \`font_info\` (optional) | \`FCFontInfo\` | if non-nil, the font to check; if nil, check the Default Music Font |

| Output type | Description |
| --- | --- |
| \`boolean\` |  |

## simple_input

\`\`\`lua
library.simple_input(title, text)
\`\`\`

Creates a simple dialog box with a single 'edit' field for entering values into a script, similar to the old UserValueInput command. Will automatically resize the width to accomodate longer strings.

| Input | Type | Description |
| --- | --- | --- |
| \`title\` (optional) | \`string\` | the title of the input dialog box |
| \`text\` (optional) | \`string\` | descriptive text above the edit field |
: string`
</script>

<Seo
    title="General Library"
    siteName="Finale Lua Docs"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://www.finalelua.com${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://finalelua.com${luaLogo}`,
            width: 630,
            height: 630,
        },
    }}"
/>

<Markdown content="{content}" headerIds />
