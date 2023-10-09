<script lang="ts">
    import Gallery from 'svelte-image-gallery'
    import { Swipe, SwipeItem } from "svelte-swipe"
    import { onMount } from 'svelte'
    import { configRepo } from '$lib/repos/config'
    import { photosRepo } from '$src/lib/repos/photos'

    let photos = photosRepo.getPhotos()
    let config = configRepo.getConfig()

    let swipe_holder_height = 0
    let active_item = 0
    let SwipeComp: { goTo: (arg0: any) => void };
    let showModal = false
    let innerWidth = 0
    let maxColumnWidth = 0

    function heightChanged(e : any) {
        swipe_holder_height = e.detail.height
    }

    const handleClick = (e: any) => {
        active_item = Number(e.detail.src.split("/").pop()?.split(".")[0])
        SwipeComp.goTo(active_item - 1)
        showModal = true
    }

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

<input type="checkbox" id="my-modal" class="modal-toggle" checked={showModal}/>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal" tabindex="-1">
    <div class="modal-box">
        <div class="swipe-holder" style="height:{swipe_holder_height}px">
            <Swipe bind:this={SwipeComp} bind:active_item>
              {#each photos as item, i}
                <SwipeItem
                  allow_dynamic_height={true}
                  on:swipe_item_height_change={heightChanged}
                  >
                  <img src={item.url} alt="lightbox" />
                </SwipeItem>
              {/each}
            </Swipe>
        </div>
        
        <div class="modal-action">
            <button
                on:click={() => {
                    showModal = false
                }}
                class="btn btn-primary">Close</button>
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

    .swipe-holder {
        height: 30vh;
        width: 100%;
    }

    img {
        max-width: 100%;
        height: auto;
    }
</style>
