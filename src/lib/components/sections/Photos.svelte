<script lang="ts">
    import { photosRepo } from '$src/lib/repos/photos'
    import Gallery from 'svelte-image-gallery'

    export const name = 'wedding-photos'

    let photos = photosRepo.getPhotos()

    export const itemId = (index: number) => `${name}-${index + 1}`

    let showModal = false
    let modalImageUrl = ''

    const handleClick = (e: any) => {
        showModal = true
        modalImageUrl = e.detail.src
        console.log(e.detail.src)
    }

    import { configRepo } from '$lib/repos/config'
    import { onMount } from 'svelte'
    let config = configRepo.getConfig()

    let innerWidth = 0
    let maxColumnWidth = 0

    function changeColumnsOnResize() {}

    onMount(() => {
        innerWidth < 1024
            ? (maxColumnWidth = innerWidth / 4 - 10)
            : (maxColumnWidth = innerWidth / 6 - 10)
    })

    $: {
        innerWidth < 1024
            ? (maxColumnWidth = innerWidth / 4 - 10)
            : (maxColumnWidth = innerWidth / 6 - 10)
    }
</script>

<svelte:window bind:innerWidth />

<label for="my-modal" />
<div
    id="photos"
    class="bg-opacity-12 py-12"
    class:bg-primary={config.showEvents}
    class:bg-base-100={!config.showEvents}>
    <Gallery hover={true} loading={'lazy'} {maxColumnWidth} on:click={handleClick}>
        {#each photos as p}
            <img class="max-w-[100]" src={p.url} alt={p.name} data-fullsize={p.url} />
        {/each}
    </Gallery>
</div>

<input type="checkbox" id="my-modal" class="modal-toggle" checked={showModal} />
<div class="modal">
    <div class="modal-box">
        <img src={modalImageUrl} alt="lightbox" />
        <div class="modal-action">
            <button
                on:click={() => {
                    showModal = false
                }}
                class="btn">Close</button>
        </div>
    </div>
</div>

<style lang="postcss" global>
    .modal {
        @apply bg-primary bg-opacity-30;
    }

    #gallery {
        justify-content: center;
        align-items: center;
        justify-items: center;
    }
</style>
