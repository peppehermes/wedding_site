<script lang="ts">
    import { fade } from 'svelte/transition'
    import { venueName, venueAddress } from '$data/data'
    // import MaterialIcon from "../elements/MaterialIcon.svelte";
    import InfoIcon from '$icon/info.svg?component'
    import PageSection from '../layout/PageSection.svelte'
    import VideoBackground from '$com/elements/VideoBackground.svelte'
    import { mapMessages } from '$data/strings'
    import type { ConfigObject } from '$lib/repos/config'
    import { venueDisplayAddress, venueMapAddress } from '$src/data/functions'

    export let config: ConfigObject

    const mapWidth = 700
    const mapHeight = 300
    const mapScale = 2
    const mapZoom = 9
    const markerColor = 'af95d7'

    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${venueMapAddress(
        config.venueAddress,
    )}&zoom=${mapZoom}&scale=${mapScale}&size=${mapWidth}x${mapHeight}&maptype=roadmap&key=AIzaSyC1cwhvB47ptmFsAW-ox5e4AOCWL9smAz8&format=png&visual_refresh=true&markers=size:small%7Ccolor:0x${markerColor}%7Clabel:%7C${venueMapAddress(
        config.venueAddress,
    )}`

    // const mapUrl = "/staticmap.png";

    const googleMapsUrl =
        'https://www.google.com/maps/place/Oak+Hill+Farm/@42.4889488,-90.1215362,15z/data=!4m5!3m4!1s0x0:0x98e0a8a1ca4adea6!8m2!3d42.4889488!4d-90.1215362'

    let overlay = true
    let overlayClasses = true
    let fadeInOptions = { delay: 250, duration: 200 }
    let fadeOutOptions = { duration: 200 }
    function toggleOverlay() {
        overlay = !overlay
        setTimeout(() => {
            overlayClasses = !overlayClasses
        }, fadeInOptions.delay)
    }

    function openMap() {
        if (!overlayClasses && !overlay) {
            window.open(googleMapsUrl, '_blank')
        }
    }
</script>

<div>
    <VideoBackground ref="venue" {config} />
</div>
<PageSection title={mapMessages.title} ref="venue" sm>
    <p class="text-center">{mapMessages.subtitle}</p>
</PageSection>

<div
    class="hero min-h-[65vh]"
    style="background-image: url({mapUrl}); background-size: cover;"
    class:hidden-overlay={!overlayClasses}
    class:cursor-pointer={!overlayClasses}
    on:click|preventDefault={openMap}
>
    {#if overlay}
        <div class="hero-overlay bg-periwinkle/40" transition:fade />
    {/if}
    {#if !overlay}
        <div
            class="card bg-neutral text-neutral-content justify-start mt-2"
            in:fade={fadeInOptions}
            out:fade={fadeOutOptions}
        >
            <div class="card-body items-center text-center p-2">
                <button class="btn btn-ghost w-full gap-2" on:click|preventDefault={toggleOverlay}>
                    <InfoIcon class="w-6 fill-black/70" />Show Info</button
                >
            </div>
        </div>
    {/if}
    <div class="hero-content text-center text-neutral-content p-0">
        <div class="max-w-md">
            {#if overlay}
                <div
                    class="card w-96 bg-neutral text-neutral-content"
                    in:fade={fadeInOptions}
                    out:fade={fadeOutOptions}
                >
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{config.venueName}</h2>
                        <p class="pb-4 text-black-60">
                            {@html venueDisplayAddress(config.venueAddress)}
                        </p>
                        <div class="card-actions justify-center">
                            <button
                                class="btn btn-primary btn-sm"
                                on:click|preventDefault={() => toggleOverlay()}>Show Map</button
                            >
                            <button
                                class="btn btn-raspberry btn-sm"
                                on:click|preventDefault={() => window.open(googleMapsUrl, '_blank')}
                                >Google Maps</button
                            >
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .hidden-overlay {
        place-items: self-start;
        justify-items: center;
    }
</style>
