<script lang="ts">
    import { onMount } from "svelte";
    import { city, venueName } from "$data/data";
    import config from '$data/config';

    export let ref: string;

    let heroVideo: HTMLVideoElement;

    onMount(() => {
        heroVideo.loop = true;
    });
</script>

<section class="showcase max-h-[500px] md:max-h-[600px] lg:max-h-[80vh]" id={ref}>
    <div class="video-container">
        <video
            src={config.venue.video}
            autoplay
            muted
            playsinline
            bind:this={heroVideo}
        />
    </div>
    <div class="content hero text-white bg-eucalyptus bg-opacity-30">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h4 class="text-4xl font-light text-white-70 font-serif mb-3">
                    {venueName}
                </h4>
                <p class="font-thin text-lg text-white-90">{city}</p>
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
        content: "";
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
