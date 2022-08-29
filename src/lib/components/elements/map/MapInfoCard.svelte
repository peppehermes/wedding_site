<script lang="ts">
    import { fade } from 'svelte/transition'
    import type { ConfigObject } from '$lib/types'
    import { venueDisplayAddress } from '$src/data/functions'
    export let fadeInOptions: Record<string, number>
    export let fadeOutOptions: Record<string, number>
    // export let googleMapsUrl: string
    export let config: ConfigObject
    import { toggleMapOverlay } from '$lib/stores/mapOverlay'
</script>

<div
    class="card w-96 bg-neutral text-neutral-content shadow-xl z-50"
    in:fade={fadeInOptions}
    out:fade={fadeOutOptions}>
    <div class="card-body items-center text-center">
        <h2 class="card-title">{config.venueName}</h2>
        <p class="pb-4 text-black-60">
            {@html venueDisplayAddress(config.venueAddress)}
        </p>
        <div class="card-actions justify-center">
            <button
                class="btn btn-primary btn-sm"
                on:click|preventDefault={toggleMapOverlay}>Show Map</button>
            <button
                class="btn btn-raspberry btn-sm"
                on:click|preventDefault={() => window.open(config.venueMapsUrl, '_blank')}
                >Google Maps</button>
        </div>
    </div>
</div>
