<script lang="ts">
    import { fade } from 'svelte/transition'
    import { venueDisplayAddress } from '$lib/utils'
    export let fadeInOptions: Record<string, number>
    export let fadeOutOptions: Record<string, number>
    import { toggleMapOverlay } from '$lib/stores/mapOverlay'
    import { configRepo } from '$src/lib/repos/config'
    const venueInfo = configRepo.getVenueInfo()
</script>

<div
    class="card w-96 bg-neutral text-neutral-content shadow-xl z-50"
    in:fade={fadeInOptions}
    out:fade={fadeOutOptions}>
    <div class="card-body items-center text-center">
        <h2 class="card-title">{venueInfo.ceremony.name}</h2>
        <p class="pb-4 text-black-60">
            {@html venueDisplayAddress(venueInfo.ceremony.address)}
        </p>
        <h2 class="card-title">{venueInfo.reception.name}</h2>
        <p class="pb-4 text-black-60">
            {@html venueDisplayAddress(venueInfo.reception.address)}
        </p>
        <div class="card-actions justify-center">
            <button
                class="btn btn-pink-lavender btn-sm"
                on:click|preventDefault={() => window.open(venueInfo.ceremony.mapUrl, '_blank')}
                >Cerimonia</button
            ><button
                class="btn btn-peach btn-sm"
                on:click|preventDefault={() => window.open(venueInfo.reception.mapUrl, '_blank')}
                >Ricevimento</button>
            <button class="btn btn-primary btn-sm" on:click|preventDefault={toggleMapOverlay}
                >Mostra Mappa</button>
        </div>
    </div>
</div>
