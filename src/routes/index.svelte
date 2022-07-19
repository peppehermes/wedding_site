<script lang="ts">
    import Hero from '$lib/components/layout/Hero.svelte'
    import Footer from '$com/layout/Footer.svelte';
    import { toggleSections } from '$data/toggles'

    import SaveTheDate from '$com/sections/SaveTheDate.svelte'
    import OurStory from '$com/sections/OurStory.svelte'
    import Events from '$com/sections/Events.svelte'
    import Photos from '$com/sections/Photos.svelte'
    import Map from '$com/sections/Map.svelte'
    import Registry from '$com/sections/Registry.svelte'
    import Rsvp from '$com/sections/Rsvp.svelte'
</script>

<Hero />
{#if toggleSections.saveTheDate}
    <SaveTheDate />
{/if}
{#if toggleSections.story}
    <OurStory />
{/if}
{#if toggleSections.events}
    <Events />
{/if}
{#if toggleSections.photos}
    <Photos />
{/if}
{#if toggleSections.map}
    <Map />
{/if}
{#if toggleSections.registry}
    <Registry />
{/if}
{#if toggleSections.rsvp}
    <Rsvp />
{/if}
<Footer />
