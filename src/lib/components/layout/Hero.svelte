<script lang="ts">
    //
    //
    // ! IMPORTANT !
    // When changing the header image, the min width must be set according to the aspect ratio of
    //     the image. For example, an image 1300px x 1000px (W x H) would have the classes:
    //     .min-h-[100vh] and .min-w-[130vh]
    //
    //    current: 3365 × 2387 (W x H) = 1.40971931
    //    current mine: 4778 x 3583 (W x H) = 1.7119574

    import { configRepo } from '$src/lib/repos/config'
    import { animate, stagger, spring } from 'motion'
    import { onMount } from 'svelte'

    let heroTextContainer: HTMLDivElement
    const config = configRepo.getConfig()

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
        <img
            class="absolute top-0 z-0 min-h-[100vh] min-w-[171.19vh]"
            src={config.heroUrl}
            style={bgStyle}
            alt="Hero" />
        <div class="hero-content text-center text-neutral-content z-20">
            <div class="max-w-lg" bind:this={heroTextContainer}>
                <h1 class="mb-5 text-5xl font-bold font-serif">Valentina & Giuseppe</h1>

                <p class="mb-5">8 dicembre, 2023 | Pianezza, TO<br>Ore 11:45</p>
            </div>
        </div>
    </div>
</div>
