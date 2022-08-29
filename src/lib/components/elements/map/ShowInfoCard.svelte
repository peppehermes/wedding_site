<script lang="ts">
    import { fade } from 'svelte/transition'
    import InfoIcon from '$lib/icons/info.svg'
    export let fadeInOptions: Record<string, number>
    export let fadeOutOptions: Record<string, number>
    import { toggleMapOverlay } from '$lib/stores/mapOverlay'
</script>

<div
    class="card bg-neutral text-neutral-content justify-start mt-2 z-20"
    in:fade={fadeInOptions}
    out:fade={fadeOutOptions}>
    <div class="card-body items-center text-center p-2">
        <button
            class="btn btn-ghost w-full gap-2 rounded-lg"
            on:click|preventDefault={toggleMapOverlay}>
            <InfoIcon class="w-6 fill-black/70" />Show Info</button>
    </div>
</div>
