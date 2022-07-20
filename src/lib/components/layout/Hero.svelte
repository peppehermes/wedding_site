<script lang="ts">
    import { formatDate, parties, city, weddingDay } from '$data/data'
</script>

<div class="hero min-h-screen" style="background-image: url(hero.min.png);">
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold font-serif">{parties[0]} and {parties[1]}</h1>

            <p class="mb-5">{formatDate(weddingDay, 'MMMM Do, YYYY')} | {city}</p>
            <!-- <button class="btn btn-primary">Get Started</button> -->
        </div>
    </div>
</div>
