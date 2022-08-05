<script lang="ts">
    import { formatDate } from '$data/data'
    import { getCityState } from '$src/data/functions'
    import type { ConfigObject } from '$lib/repos/config'
    import dayjs from 'dayjs'
    import { animate, stagger, spring } from 'motion'
    import { onMount } from 'svelte'

    let heroTextContainer: HTMLDivElement
    export let config: ConfigObject
    let weddingDay = dayjs(config.weddingDate)

    onMount(() => {
        animate(
            heroTextContainer.querySelectorAll('*'),
            { opacity: [0, 1], y: [100, 0] },
            { duration: 1, delay: stagger(0.3), easing: spring() },
        )
    })
</script>

<div class="hero min-h-screen" style="background-image: url(hero.min.png);">
    <div class="hero-overlay -60" />
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md" bind:this={heroTextContainer}>
            <h1 class="mb-5 text-5xl font-bold font-serif">
                {config.bride} and {config.groom}
            </h1>

            <p class="mb-5">
                {formatDate(weddingDay, 'MMMM Do, YYYY')} | {getCityState(config.venueAddress)}
            </p>
        </div>
    </div>
</div>
