<script lang="ts">
    import Navigation from '$lib/components/layout/Navigation.svelte'
    import Hero from '$lib/components/layout/Hero.svelte'
    import SaveTheDate from '$lib/components/sections/SaveTheDate.svelte'
    import OurStory from '$lib/components/sections/OurStory.svelte'
    import Events from '$lib/components/sections/Events.svelte'
    import Photos from '$lib/components/sections/Photos.svelte'
    import Venue from '$lib/components/sections/Venue.svelte'
    import Registry from '$lib/components/sections/Registry.svelte'
    import Rsvp from '$lib/components/sections/Rsvp.svelte'

    import type { PageData, Errors } from './$types'
    export let data: PageData
    export let errors: Errors
</script>

<svelte:head>
    <title>{data.config.bride} & {data.config.groom} are getting hitched!</title>
</svelte:head>

{#if !errors}
    <Navigation config={data.config} />
    <Hero config={data.config} />
    {#if data.config.saveTheDate}
        <SaveTheDate config={data.config} />
    {/if}
    {#if data.config.showStory}
        <OurStory story={data.story} />
    {/if}
    {#if data.config.showEvents}
        <Events events={data.events} />
    {/if}
    {#if data.config.showPictures}
        <Photos photos={data.photos} />
    {/if}
    {#if data.config.showMap}
        <Venue config={data.config} />
    {/if}
    {#if data.config.showRegistry}
        <Registry registry={data.registry} />
    {/if}
    {#if data.config.showRsvp}
        <Rsvp config={data.config} />
    {/if}
{/if}
