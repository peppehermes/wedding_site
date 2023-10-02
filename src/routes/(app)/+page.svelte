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
    import DressCode from '$lib/components/sections/DressCode.svelte'

    import { configRepo } from '$src/lib/repos/config'

    const config = configRepo.getConfig()
</script>

<svelte:head>
    <title>Vale & Peppe Sposi</title>

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
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
{#if config.showHotel}
    <HotelInfo />
{/if}
{#if config.showDressCode}
    <DressCode />
{/if}
{#if config.showRegistry}
    <Registry />
{/if}
{#if config.showRsvp}
    <Rsvp />
{/if}
