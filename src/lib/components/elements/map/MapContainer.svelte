<script lang="ts">
    import { fade } from 'svelte/transition'
    export let mapUrl: string
    export let config: ConfigObject
    // export let openMap: svelte.JSX.MouseEventHandler<HTMLDivElement>
    import { mapOverlay, mapOverlayClasses } from '$lib/stores/mapOverlay'
    import type { ConfigObject } from '$lib/types'

    const openMap = () => {
        if (!$mapOverlayClasses && !mapOverlay) {
            window.open(config.venueMapsUrl, '_blank')
        }
    }
</script>

<div
    class="hero min-h-[65vh]"
    style="background-image: url({mapUrl}); background-size: cover;"
    class:hidden-overlay={$mapOverlayClasses}
    class:cursor-pointer={$mapOverlayClasses}
    on:click|preventDefault={openMap}>
    {#if $mapOverlay}
        <div class="hero-overlay bg-periwinkle bg-opacity-40" transition:fade />
    {/if}
    {#if !$mapOverlay}
        <slot name="show-info-card" />
    {/if}
    <div class="hero-content text-center text-neutral-content p-0">
        <div class="max-w-md">
            {#if $mapOverlay}
                <slot name="info-card" />
            {/if}
        </div>
    </div>
</div>

<style lang="postcss">
    .hidden-overlay {
        place-items: self-start;
        justify-items: center;
    }
</style>
