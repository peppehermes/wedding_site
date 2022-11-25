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
    import HotelInfo from '$lib/components/sections/HotelInfo.svelte'

    import { configRepo } from '$src/lib/repos/config'

    const config = configRepo.getConfig()
</script>

<svelte:head>
    <title>Joni & Cory are getting married!</title>
</svelte:head>

<Navigation />
<Hero />
{#if config.saveTheDate}
    <SaveTheDate />
{/if}
{#if config.showStory}
    <OurStory />
{/if}
{#if config.showEvents}
    <Events />
{/if}
{#if config.showPictures}
    <Photos />
{/if}
{#if config.showMap}
    <Venue />
{/if}
{#if config.showRegistry}
    <Registry />
{/if}
{#if config.showHotel}
    <HotelInfo />
{/if}
{#if config.showRsvp}
    <Rsvp />
{/if}
