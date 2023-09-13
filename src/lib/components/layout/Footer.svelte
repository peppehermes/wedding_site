<script lang="ts">
    import { scrollToTop } from '$lib/utils'
    import ToTopIcon from '$lib/icons/to-top.svg'
    import HeartIcon from '$lib/icons/heart.svg'
</script>

<footer
    class="footer footer-center p-10 text-neutral-content bg-primary/20 border-t border-primary">
    <div>
        <p class="-mt-20">
            <button
                class="btn btn-white border border-primary btn-circle hover:bg-white hover:border-primary-focus"
                on:click|preventDefault={scrollToTop}>
                <ToTopIcon class="w-8 fill-black/70 hover:fill-primary-focus" />
            </button>
        </p>
        <p class="font-light text-lg py-10">
            <span class="inline-block">Crafted by Peppe with lots of</span>
            <HeartIcon class="inline-block pulse w-6 fill-raspberry-800" />
            <span class="inline-block">for Vale</span><br />
        </p>
    </div>
</footer>

<style>
</style>
