<script lang="ts">
    import { photosRepo } from '$src/lib/repos/photos'
    import { onMount } from 'svelte'
    export const name = 'wedding-photos'

    let photos = photosRepo.getPhotos()

    export const itemId = (index: number) => `${name}-${index + 1}`

    let slider: HTMLElement
    let isDown = false
    let startX: number
    let scrollLeft: number

    onMount(() => {
        slider.addEventListener('mousedown', (e: MouseEvent) => {
            isDown = true
            slider.classList.add('active')
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        })
        slider.addEventListener('mouseleave', () => {
            isDown = false
            slider.classList.remove('active')
        })
        slider.addEventListener('mouseup', () => {
            isDown = false
            slider.classList.remove('active')
        })
        slider.addEventListener('mousemove', (e: MouseEvent) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 3 //scroll-fast
            slider.scrollLeft = scrollLeft - walk
            console.log(walk)
        })
    })
</script>

<div id="photos">
    <ul id="photoList" class="flex overflow-x-auto" bind:this={slider}>
        {#each photos as { name, url }, index}
            <li id={`${itemId(index)}`} class="shrink-0 snap-center">
                <label for="photo-modal-{index}">
                    <img
                        src={url}
                        class="max-h-[400px] md:max-h-[600px] lg:max-h-[80vh]"
                        alt={name}
                        title={name} />
                </label>
            </li>
        {/each}
    </ul>
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
