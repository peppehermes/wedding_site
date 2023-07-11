<script lang="ts">
    import { onMount } from 'svelte'
    import { stringsRepo } from '$src/lib/repos/strings'
    import { configRepo } from '$src/lib/repos/config'
    const venueInfo = configRepo.getVenueInfo()
    const videoUrl = configRepo.getConfig().videoUrl

    export let ref: string
    let heroVideo: HTMLVideoElement

    onMount(() => {
        heroVideo.loop = true
    })

    const venueTypeClasses = 'uppercase font-light tracking-[12px] opacity-85'
</script>

<section class="showcase max-h-[500px] md:max-h-[600px] lg:max-h-[80vh]" id={ref}>
    <div class="video-container">
        <video src={videoUrl} autoplay muted playsinline bind:this={heroVideo} />
    </div>
    <div class="content hero text-white bg-eucalyptus-900/40">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <p class={venueTypeClasses}>Cerimonia</p>
                <h4 class="text-4xl font-light text-white-80 font-serif mb-3">
                    {venueInfo.ceremony.name}
                </h4>
                <p class="font-thin text-lg text-white-90 mb-6">
                    {venueInfo.ceremony.address}
                </p>
                <p class={venueTypeClasses}>Ricevimento</p>
                <h4 class="text-4xl font-light text-white-80 font-serif mb-3">
                    {venueInfo.reception.name}
                </h4>
                <p class="font-thin text-lg text-white-90">
                    {venueInfo.reception.address}
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
