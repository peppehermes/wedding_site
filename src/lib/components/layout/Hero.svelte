<script lang="ts">
    import { formatDate, venueAddress } from '$data/data'
    import { getCityState } from '$src/data/functions'
    import type { ConfigObject } from '$lib/repos/config'
    import dayjs from 'dayjs'
    export let config: ConfigObject

    let weddingDay = dayjs(config.weddingDate)
</script>

<div class="hero min-h-screen" style="background-image: url(hero.min.png);">
    <div class="hero-overlay -60" />
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold font-serif">{config.bride} and {config.groom}</h1>

            <p class="mb-5">
                {formatDate(weddingDay, 'MMMM Do, YYYY')} | {getCityState(config.venueAddress)}
            </p>
            <!-- <button class="btn btn-primary">Get Started</button> -->
        </div>
    </div>
</div>
