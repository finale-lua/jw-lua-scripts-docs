<script lang="ts">
    import { page } from '$app/stores'
    import Button from '@nick-mazuk/ui-svelte/src/elements/button/button.svelte'
    import Github from '@nick-mazuk/ui-svelte/src/elements/icon/github.svelte'
    import Accordion from '@nick-mazuk/ui-svelte/src/components/accordion/accordion.svelte'
    import AccordionGroup from '@nick-mazuk/ui-svelte/src/components/accordion/accordion-group/accordion-group.svelte'

    import Container from '@nick-mazuk/ui-svelte/src/utilities/container/container.svelte'
    import Seo from '@nick-mazuk/ui-svelte/src/utilities/seo/seo.svelte'
    import Spacer from '@nick-mazuk/ui-svelte/src/utilities/spacer/spacer.svelte'
    import Feature from '$lib/components/home/feature.svelte'
    import Image from '$lib/components/image.svelte'

    import luaLogo from '$lib/assets/images/lua-logo.gif'
</script>

<Seo
    title=""
    siteName="JW Lua Scripts"
    description="Use Finale faster than the blink of an eye. Simplify workflows to just one click. All for free, forever."
    canonicalUrl="{`https://jw-lua-scripts-docs.vercel.app/${$page.path}`}"
    openGraph="{{
        image: {
            src: `https://jw-lua-scripts-docs.vercel.app${luaLogo}`,
            width: 128,
            height: 128,
        },
    }}"
/>

<main id="main-content">
    <section class="wrapper my-16">
        <h1 class="sr-only">About JW Lua scripts</h1>
        <h2 class="h3 sm:h1 text-center text-balance">Real speed.<br />Unlimited power.</h2>
        <Spacer />
        <p
            class="text-lg sm:text-2xl font-semibold text-gray-700 text-center max-w-lg mx-auto text-balance"
        >
            Use Finale faster than the blink of an eye. Simplify workflows to just one click. All
            for free, forever.
        </p>
        <Spacer />
        <div class="flex justify-center">
            <Button href="/scripts" size="large">View all scripts</Button>
        </div>
    </section>
    <div class="py-16 bg-gray-100 border-t border-b mt-56">
        <div class="wrapper">
            <div
                class="relative rounded-xl shadow-xl -mt-64 z-10 aspect-w-2 aspect-h-1 w-full overflow-hidden"
            >
                <Image
                    source="indeterminateClusters"
                    alt=""
                    width="{1600}"
                    class="absolute w-full h-full object-cover"
                />
            </div>
        </div>
        <Feature
            title="Create advanced notation in a second"
            description="String harmonics, jeté, and microtonal transpositions are notoriously difficult in Finale. Now, create this advanced notation in just a second. Literally."
            images="{['jeteHarmonic']}"
        />
        <Feature
            reversed
            title="Fix those annoying Finale bugs"
            description="No more colliding hairpins and dynamics. No more manually adjusting measure numbers. No more tempo marks that are wider than the multimeasure rest. Fix each of these in just one click."
            images="{[
                'hairpinsBefore',
                'hairpinsAfter',
                'tempoRestBefore',
                'tempoRestAfter',
                'measureNumberBefore',
                'measureNumberAfter',
            ]}"
        />
        <Feature
            title="…and do so much more"
            description="JW Lua hooks directly into Finale. That means you can do almost anything with JW Lua—fix playback, generate parts, or even see how many notes you wrote. Anything is possible! And as more people write JW Lua scripts, we all benefit."
            images="{['duplicateArticulationBefore', 'duplicateArticulationAfter']}"
        />
    </div>
    <section class="py-16 bg-primary text-background dark:text-foreground">
        <div class="wrapper">
            <h2 class="h4 text-center">By Finale users, for Finale users</h2>
            <Spacer y="{0.5}" />
            <div class="mx-auto max-w-lg text-lg">
                These JW Lua scripts are created by the Finale community. And they are free and open
                source, meaning you can view the source code, modify them, and add your own.
            </div>
            <Spacer />
            <div class="flex justify-center space-x-3">
                <Button prefix="{Github}" href="https://github.com/Nick-Mazuk/jw-lua-scripts">
                    View on GitHub
                </Button>
                <div class="light">
                    <Button variant="secondary" href="/docs/getting-started">Contribute</Button>
                </div>
            </div>
        </div>
    </section>
    <section class="my-16 wrapper !max-w-2xl">
        <h2 class="h4 text-center">FAQ</h2>
        <Spacer />
        <AccordionGroup>
            <Accordion title="What is JW Lua?" size="small">
                <p>
                    JW Lua is a plugin created by Jari Williams that allows other Finale users to
                    create plugins for Finale.
                </p>
                <p>
                    The popularity of JW Lua has exploded over the last few years. Popular Finale
                    tools like the JetStream Finale Controller and the Perfect Layout plugin are
                    created with JW Lua.
                </p>
                <p>
                    And because JW Lua hooks directly into Finale, pretty much anything is possible.
                    If you can do something in Finale, JW Lua can probably do it as well.
                </p>
            </Accordion>
            <Accordion title="What is a JW Lua script?" size="small">
                <p>
                    JW Lua is a plugin for Finale. This plugin can run code created by Finale users
                    called JW Lua scripts.
                </p>
            </Accordion>
            <Accordion title="Why should I use JW Lua?" size="small">
                <p>
                    JW Lua is fast. Insanely fast. Most scripts run in less than 0.01 seconds.
                    That's 10x faster than the blink of an eye.
                </p>
                <p>
                    If there's something that normally takes you several minutes to do, JW Lua can
                    do it in just a single click.
                </p>
            </Accordion>
            <Accordion title="Do I need to know how to code?" size="small">
                <p>Absolutely not! You don't need to write any code to use a JW Lua script.</p>

                <p>
                    Though if you want to create your own JW Lua script, you will need to learn how
                    to code. Luckily, there's a YouTube playlist on <a
                        href="https://www.youtube.com/playlist?list=PLsFZ0c2Wsoy9ZF6a0ZihC_-SPf3FkOh8o"
                        target="_blank"
                        rel="noreferrer"
                    >
                        learning to code in JW Lua
                    </a>.
                </p>
            </Accordion>
            <Accordion title="What version of Finale will I need?" size="small">
                <p>
                    JW Lua scripts work best on Finale v25 or later. However, many scripts will also
                    work on earlier versions of Finale. Most scripts are only checked with the most
                    recent version of Finale (this is community-run, after all), though there's no
                    reason to believe they won't work on earlier versions.
                </p>
                <p>
                    JW Lua works on both macOS and Windows versions of Finale. We do not know if JW
                    Lua will work if or when MakeMusic releases a version of Finale optimized for
                    Apple Silicon.
                </p>
            </Accordion>
            <Accordion title="Who wrote these scripts?" size="small">
                <p>
                    Many people in the Finale community contribute to these scripts. Prominent
                    contributors include:
                </p>
                <ul>
                    <li><strong>Robert Patterson</strong>, the creator of the Patterson plugins</li>
                    <li><strong>Nick Mazuk</strong>, the creator of Finale Superuser</li>
                    <li>
                        <strong>CJ Garcia</strong>, prominent member of the JetStream Finale
                        Controler team
                    </li>
                    <li>
                        <strong>Jacob Winkler</strong>, prominent member of the JetStream Finale
                        Controler team
                    </li>
                </ul>
                <p>
                    Because these scripts are open source, can find a complete list of contributors
                    in the <a
                        href="https://github.com/Nick-Mazuk/jw-lua-scripts"
                        target="_blank"
                        rel="noreferrer">GitHub repository</a
                    >.
                </p>
                <p>
                    But rest assured, all scripts and edits are peer-reviewed before they are
                    published to this site. That helps to keep them high-quality.
                </p>
            </Accordion>
            <Accordion title="How can I get help?" size="small">
                <p>There are a few ways:</p>
                <ul>
                    <li>
                        <strong
                            >Check out the <a sveltekit:prefetch href="/help">help docs</a></strong
                        >. The most common questions are answered in there.
                    </li>
                    <li>
                        <strong>
                            Check out the <a
                                href="https://www.facebook.com/groups/742277119576336/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Facebook group</a
                            ></strong
                        >. This is a group for JW Lua in general (and not just these scripts), but
                        you should be able to get help there
                    </li>
                    <li>
                        <strong
                            >Report bugs to the <a
                                href="https://github.com/Nick-Mazuk/jw-lua-scripts"
                                target="_blank"
                                rel="noreferrer">GitHub repository</a
                            ></strong
                        >. That is where all the developers keep track of all the code, so that's
                        the best place to report bugs.
                    </li>
                </ul>
            </Accordion>
        </AccordionGroup>
    </section>
    <section class="my-16 wrapper">
        <Container
            class="flex flex-col justify-between space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0 sm:items-center"
        >
            <div class="text-center sm:text-left">
                <h2 class="h5">Get started</h2>
                <p>Start speeding up your Finale workflow with JW Lua</p>
            </div>
            <div
                class="flex w-full flex-col space-y-3 justify-center flex-none sm:flex-row sm:space-x-3 sm:space-y-0 sm:w-auto"
            >
                <div class="w-full flex items-stretch flex-col sm:w-auto flex-none">
                    <Button variant="secondary" href="/help/install">Install instructions</Button>
                </div>
                <div class="w-full flex items-stretch flex-col sm:w-auto flex-none">
                    <Button href="/scripts">View all scripts</Button>
                </div>
            </div>
        </Container>
    </section>
</main>
