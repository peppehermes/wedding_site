<script lang="ts">
    import Navigation from '$lib/components/layout/Navigation.svelte'
    import Hero from '$lib/components/layout/Hero.svelte'
    import SaveTheDate from '$lib/components/sections/SaveTheDate.svelte'
    import Photos from '$lib/components/sections/Photos.svelte'
    import Venue from '$lib/components/sections/Venue.svelte'
    import Registry from '$lib/components/sections/Registry.svelte'
    import Rsvp from '$lib/components/sections/Rsvp.svelte'
    import HotelInfo from '$lib/components/sections/HotelInfo.svelte'
    import ThankYou from '$src/lib/components/sections/ThankYou.svelte'

    import { configRepo } from '$src/lib/repos/config'
    import { weddingIsOver } from '$src/lib/utils'

    const config = configRepo.getConfig()
</script>

<svelte:head>
    <title>Vale & Peppe Sposi</title>
</svelte:head>

<Navigation />
<Hero />
{#if weddingIsOver()}
    <ThankYou />
{/if}
{#if config.saveTheDate && !weddingIsOver()}
    <SaveTheDate />
{/if}
{#if config.showPictures}
    <Photos />
{/if}
{#if config.showMap && !weddingIsOver()}
    <Venue />
{/if}
{#if config.showHotel && !weddingIsOver()}
    <HotelInfo />
{/if}
{#if config.showRegistry  && !weddingIsOver()}
    <Registry />
{/if}
{#if config.showRsvp  && !weddingIsOver()}
    <Rsvp />
{/if}