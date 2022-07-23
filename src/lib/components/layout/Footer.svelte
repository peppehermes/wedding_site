<script>
    import { scrollToTop } from '$src/data/functions'
    import ToTopIcon from '$icon/to-top.svg?component'
    import HeartIcon from '$icon/heart.svg?component'
</script>

<footer
    class="footer footer-center p-10 text-primary-content bg-primary/20 border-t border-primary"
>
    <div>
        <p class="-mt-20">
            <button
                class="btn btn-white border border-primary btn-circle hover:bg-white hover:border-primary-focus"
                on:click|preventDefault={scrollToTop}
            >
                <ToTopIcon class="w-8 fill-black/70 hover:fill-primary-focus" />
            </button>
        </p>
        <p class="font-light text-lg py-10">
            <span class="inline-block">Crafted by Cory with lots of</span>
            <HeartIcon class="inline-block pulse w-6 fill-raspberry-800" />
            <span class="inline-block">for Joni</span>
        </p>
    </div>
</footer>

<style>
</style>
