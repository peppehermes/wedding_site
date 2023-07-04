<script lang="ts">
    import { fade } from 'svelte/transition'
    import { GoogleMap, GoogleMapMarker } from 'svelte-cartographer'
    import { mapOverlay, mapOverlayClasses } from '$lib/stores/mapOverlay'
    import type { Coordinate } from '$lib/types'

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const getCenter = (...args: Coordinate[]) => {
        let lat =
            args.reduce((acc, obj) => {
                return acc + obj.lat
            }, 0) / args.length
        let lng =
            args.reduce((acc, obj) => {
                return acc + obj.lng
            }, 0) / args.length

        let center: Coordinate = { lat, lng }
        return center
    }

    let markers: { coords: Coordinate; icon: string }[] = [
        { coords: { lat: 45.0973978, lng: 7.5476249 }, icon: '/ceremony-marker.png' },
        { coords: { lat: 45.1609687, lng: 7.7566828 }, icon: '/reception-marker.png' },
        // { coords: { lat: 45.0972442, lng: 7.543849 }, icon: '/hotel-marker.png' },
    ]

    let customMarkers = true

    $: center = getCenter(...markers.map((item) => item.coords))
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
    <GoogleMap
        {apiKey}
        options={{
            center,
            zoom: 12,
        }}>
        {#each markers as marker}
            <GoogleMapMarker
                lat={marker.coords.lat}
                lng={marker.coords.lng}
                icon={customMarkers ? marker.icon : null} />
        {/each}
    </GoogleMap>
</div>

<style lang="postcss">
    .hidden-overlay {
        place-items: self-start;
        justify-items: center;
    }
</style>
