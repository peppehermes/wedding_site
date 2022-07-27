<script lang="ts">
    import Navigation from '$lib/components/layout/Navigation.svelte'
    import Hero from '$lib/components/layout/Hero.svelte'
    import SaveTheDate from '$com/sections/SaveTheDate.svelte'
    import OurStory from '$com/sections/OurStory.svelte'
    import Events from '$com/sections/Events.svelte'
    import Photos from '$com/sections/Photos.svelte'
    import Map from '$com/sections/Map.svelte'
    import Registry from '$com/sections/Registry.svelte'
    import Rsvp from '$com/sections/Rsvp.svelte'
    import type { ConfigObject } from '$lib/repos/config'

    export let config: ConfigObject
    export let story: string
</script>

<svelte:head>
    <title>{config.bride} & {config.groom} are getting hitched!</title>
</svelte:head>

<Navigation {config} />
<Hero {config} />
{#if config.saveTheDate}
    <SaveTheDate {config} />
{/if}
{#if config.showStory}
    <OurStory {story} />
{/if}
{#if config.showEvents}
    <Events />
{/if}
{#if config.showPictures}
    <Photos />
{/if}
{#if config.showMap}
    <Map {config} />
{/if}
{#if config.showRegistry}
    <Registry />
{/if}
{#if config.showRsvp}
    <Rsvp {config} />
{/if}
