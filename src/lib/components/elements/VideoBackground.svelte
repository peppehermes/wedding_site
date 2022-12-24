<script lang="ts">
    import { onMount } from 'svelte'
    import { getCityState } from '$lib/utils'
    import { stringsRepo } from '$src/lib/repos/strings'
    const venueInfo = stringsRepo.getVenueInfo()

    export let ref: string
    let heroVideo: HTMLVideoElement

    onMount(() => {
        heroVideo.loop = true
    })

    const venueTypeClasses = 'uppercase font-thin tracking-[12px] opacity-75'
</script>

<section class="showcase max-h-[500px] md:max-h-[600px] lg:max-h-[80vh]" id={ref}>
    <div class="video-container">
        <video src="/video/venues.mp4" autoplay muted playsinline bind:this={heroVideo} />
    </div>
    <div class="content hero text-white bg-eucalyptus-900/40">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <p class={venueTypeClasses}>Ceremony</p>
                <h4 class="text-4xl font-light text-white-70 font-serif mb-3">
                    {venueInfo.ceremony.name}
                </h4>
                <p class="font-thin text-lg text-white-90 mb-6">
                    {getCityState(venueInfo.ceremony.address)}
                </p>
                <p class={venueTypeClasses}>Reception</p>
                <h4 class="text-4xl font-light text-white-70 font-serif mb-3">
                    {venueInfo.reception.name}
                </h4>
                <p class="font-thin text-lg text-white-90">
                    {getCityState(venueInfo.reception.address)}
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .showcase {
        height: 100vh;
        position: relative;
    }

    .video-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .video-container video {
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }

    .video-container:after {
        content: '';
        z-index: 1;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
</style>
