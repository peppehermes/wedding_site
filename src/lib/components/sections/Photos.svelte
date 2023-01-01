<script lang="ts">
    import { photosRepo } from '$src/lib/repos/photos'
    import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment'
    let carousel: any // for calling methods of the carousel instance

    export const name = 'wedding-photos'

    let photos = photosRepo.getPhotos()

    export const itemId = (index: number) => `${name}-${index + 1}`

    let innerWidth = 0
    let innerHeight = 0
    
    $: medScreen = innerWidth >= 1024
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div id="photos" class="bg-base-100 bg-opacity-12">
    {#if browser}
        <Carousel bind:this={carousel} particlesToShow={medScreen ? 2 : 1} dots={false}>
            {#each photos as { name, url }, index}
                <label for="photo-modal-{index}">
                    <img
                        src={url}
                        class="max-h-[400px] md:max-h-[600px] lg:max-h-[80vh] mx-auto"
                        alt={name}
                        title={name} />
                </label>
            {/each}
        </Carousel>
    {/if}
</div>

{#each photos as { name, url }, index}
    <input type="checkbox" id="photo-modal-{index}" class="modal-toggle" />
    <label for="photo-modal-{index}" class="modal cursor-pointer">
        <label class="modal-box max-w-7xl w-max shadow-2xl shadow-black" for="">
            <img src={url} alt={name} class="rounded-xl" />
            <p class="pt-6 text-xl font-light italic text-center">
                {name}
            </p>
        </label>
    </label>
{/each}

<style lang="postcss" global>
    .modal {
        @apply bg-primary bg-opacity-30;
    }

    #photoList {
        @apply relative w-full overflow-x-hidden overflow-y-hidden whitespace-nowrap will-change-transform select-none cursor-pointer transition-all duration-200;
    }

    #photoList.active {
        @apply cursor-grabbing bg-white-30;
    }
</style>
