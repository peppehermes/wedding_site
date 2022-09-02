<script lang="ts">
    import { fade } from 'svelte/transition'
    export let config: ConfigObject
    import { mapOverlay, mapOverlayClasses } from '$lib/stores/mapOverlay'
    import type { ConfigObject, Coordinate } from '$lib/types'
    import { GoogleMap, GoogleMapMarker } from 'svelte-cartographer'
    import { onMount } from 'svelte'

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    let center: Coordinate = { lat: 0, lng: 0 }

    const getCoords = async () => {
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${config.venueAddress}&key=${apiKey}`,
        )
            .then((response) => {
                return response.json()
            })
            .then((jsonData) => {
                center = jsonData.results[0].geometry.location
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onMount(async () => {
        await getCoords()
    })
</script>

<div
    class="hero min-h-[65vh] overflow-hidden"
    class:hidden-overlay={$mapOverlayClasses}
    class:cursor-pointer={$mapOverlayClasses}
    class:hero-overlay={$mapOverlay}
    class:bg-periwinkle={$mapOverlay}
    class:bg-opacity-40={$mapOverlay}>
    {#if $mapOverlay}
        <div class="hero-overlay bg-periwinkle bg-opacity-40 relative z-10" transition:fade />
    {/if}
    <div class="hero-content text-center text-neutral-content p-0 z-20">
        <div class="max-w-md">
            {#if $mapOverlay}
                <slot name="info-card" />
            {/if}
        </div>
    </div>
    {#if !$mapOverlay}
        <slot name="show-info-card" />
    {/if}
    <GoogleMap {apiKey} options={{ center, zoom: 10 }}>
        <GoogleMapMarker lat={center.lat} lng={center.lng} />
    </GoogleMap>
</div>

<style lang="postcss">
    .hidden-overlay {
        place-items: self-start;
        justify-items: center;
    }
</style>
