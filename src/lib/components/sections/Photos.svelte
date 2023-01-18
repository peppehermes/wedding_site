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
</script>

<label for="my-modal" />
<div id="photos" class="bg-base-100 bg-opacity-12 py-12">
    <Gallery on:click={handleClick} hover={true} loading={'lazy'} maxColumnWidth={150}>
        {#each photos as p}
            <img class="max-w-[100px] md:max-w-[180px]" src={p.url} alt={p.name} data-fullsize={p.url} />
        {/each}
    </Gallery>
</div>

<input type="checkbox" id="my-modal" class="modal-toggle" checked={showModal} />
<div class="modal">
    <div class="modal-box">
        <img src="{modalImageUrl}" alt="lightbox">
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
