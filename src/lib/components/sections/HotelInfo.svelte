<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import { venueDisplayAddress } from '$lib/utils'
    import { stringsRepo } from '$src/lib/repos/strings'

    let hotelInfo = stringsRepo.getHotelInfo()
</script>

<PageSection title="Accommodations for Guests" ref="hotel" lg bordered primary>
    <div class="max-w-prose mx-auto">
        <p class="hotel-info">
            For your comfort and convenience, a special group rate has been arranged with DoubleTree
            by Hilton in Skokie, IL. Please reference code WMR (Moon Wedding) when calling to make
            your reservation.
        </p>
        <p class="hotel-info">Wedding Rate: $289/night ($399 Jr. Suites)</p>
        <!-- <p class="hotel-info"> -->
        <h2 class="card-title justify-center">DoubleTree by Hilton</h2>
        <p class="pb-4 text-black-60 text-center">
            {@html venueDisplayAddress('9599 Skokie Blvd, Skokie, IL 60077')}
        </p>
        <p class="hotel-info">
            <a
                href={hotelInfo.mapUrl}
                target="_blank"
                rel="noreferrer"
                class="btn btn-pink-lavender btn-sm mx-1 my-2">Map</a>
            <a
                href="tel:18002228733"
                target="_blank"
                rel="noreferrer"
                class="btn btn-peach btn-sm mx-1 my-2">Phone</a>
        </p>
        <!-- </p> -->
        <p class="hotel-info">
            <a class="hotel-link" href={hotelInfo.webUrl}>chicagonorthshore.doubletree.com</a>
        </p>
    </div>
</PageSection>

<style lang="postcss">
    .hotel-info {
        @apply mb-6 font-light text-center text-lg leading-10;
    }

    .hotel-link {
        @apply text-lavender-900 underline text-xl;
    }
</style>
