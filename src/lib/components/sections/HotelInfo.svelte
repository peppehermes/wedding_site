<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import { venueDisplayAddress } from '$lib/utils'
    import { configRepo } from '$src/lib/repos/config'
    import { stringsRepo } from '$src/lib/repos/strings'

    let hotelInfo = stringsRepo.getHotelInfo()
    let config = configRepo.getConfig()
</script>

<PageSection
    title="Accommodations for Guests"
    ref="hotel"
    lg
    bordered={!config.showDressCode}
    primary={!config.showDressCode}>
    <div class="max-w-prose mx-auto">
        <p class="body-text">
            For your comfort and convenience, a special group rate has been arranged with DoubleTree
            by Hilton in Skokie, IL. Please visit the link below to make your reservation.
        </p>
        <p class="body-text">Wedding Rate: 2 Queen Beds or 1 King Bed $209/night</p>
        <h2 class="card-title justify-center">DoubleTree by Hilton</h2>
        <p class="pb-4 text-black-60 text-center">
            {@html venueDisplayAddress('9599 Skokie Blvd, Skokie, IL 60077')}
        </p>
        <p class="body-text">
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
        <p class="body-text">
            <a class="hotel-link" href={hotelInfo.webUrl}>Click here to book a room</a>
        </p>
    </div>
</PageSection>

<style lang="postcss">
    /* .hotel-info {
        @apply mb-6 font-light text-center text-lg leading-10;
    } */

    .hotel-link {
        @apply text-lavender-900 underline text-xl;
    }
</style>
