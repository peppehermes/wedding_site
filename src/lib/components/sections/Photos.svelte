<script lang="ts">
    import { photosRepo } from '$src/lib/repos/photos'

    export const name = 'wedding-photos'

    let photos = photosRepo.getPhotos()

    export const itemId = (index: number) => `${name}-${index + 1}`
</script>

<div id="photos" class="bg-base-100 bg-opacity-12">

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
