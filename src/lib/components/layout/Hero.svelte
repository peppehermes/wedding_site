<script lang="ts">
    import { formatDate } from '$data/functions'
    import { getCityState } from '$src/data/functions'
    import type { ConfigObject } from '$lib/types'
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

    let currentY: number
    $: translateAmount = Math.floor(currentY * 0.4)
    $: bgStyle = `transform: translateY(${translateAmount}px)`
</script>

<svelte:window bind:scrollY={currentY} />

<div class="overflow-hidden">
    <div class="hero min-h-screen relative">
        <div class="hero-overlay z-10" />
        <img class="absolute top-0 z-0 min-h-[100vh] min-w-[120.7vh]" src="/hero.min.png" style={bgStyle} alt="Hero" />
        <div class="hero-content text-center text-neutral-content z-20">
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
</div>
