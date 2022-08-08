<script lang="ts">
    import type { PhotoItem } from '$lib/types'
    import Lazy from 'svelte-lazy'
    export const name = 'wedding-photos'
    export let photos: PhotoItem[]

    export const itemId = (index: number) => `${name}-${index + 1}`
</script>

<div id="photos">
    <ul class="flex overflow-x-auto snap-x snap-mandatory">
        {#each photos as { name, url }, index}
            <li id={`${itemId(index)}`} class="shrink-0 snap-center">
                <Lazy class="max-h-[400px] md:max-h-[600px] lg:max-h-[80vh]">
                    <img
                        class="max-h-[400px] md:max-h-[600px] lg:max-h-[80vh]"
                        src={url}
                        title={name}
                        alt={name}
                    />
                </Lazy>
            </li>
        {/each}
    </ul>
</div>
