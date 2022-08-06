<script lang="ts">
    import Navigation from '$lib/components/layout/Navigation.svelte'
    import Hero from '$lib/components/layout/Hero.svelte'
    import SaveTheDate from '$lib/components/sections/SaveTheDate.svelte'
    import OurStory from '$lib/components/sections/OurStory.svelte'
    import Events from '$lib/components/sections/Events.svelte'
    import Photos from '$lib/components/sections/Photos.svelte'
    import Map from '$lib/components/sections/Map.svelte'
    import Registry from '$lib/components/sections/Registry.svelte'
    import Rsvp from '$lib/components/sections/Rsvp.svelte'
    import type { ConfigObject } from '$lib/repos/config'

    export let config: ConfigObject
    export let story: string
    export let photos: []
    export let events: []
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
    <Events {events} />
{/if}
{#if config.showPictures}
    <Photos {photos} />
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
