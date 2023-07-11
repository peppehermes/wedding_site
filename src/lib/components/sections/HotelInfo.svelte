<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import { venueDisplayAddress } from '$lib/utils'
    import { configRepo } from '$src/lib/repos/config'
    import { stringsRepo } from '$src/lib/repos/strings'

    let hotelInfo = configRepo.getHotelInfo()
    let config = configRepo.getConfig()
</script>

<PageSection
    title="Sistemazioni per gli ospiti"
    ref="hotel"
    lg
    bordered={!config.showRegistry}
    primary={!config.showRegistry}>
    <div class="max-w-prose mx-auto">
        <p class="body-text">
            Per la vostra comodità e convenienza, sono state concordate delle tariffe speciali
            con alcuni hotel e con il locale in cui festeggeremo, L'Ultimo Borgo.
            <br/>
            Visitate i link sottostanti per effettuare la vostra prenotazione.
        </p>

        {#each hotelInfo as hotel}
            
            <p class="body-text">Tariffa {hotel.name}: Camera Doppia a €{hotel.cost}/notte</p>
            <h2 class="card-title justify-center">{hotel.name}</h2>
            <p class="pb-4 text-black-60 text-center">
                {@html venueDisplayAddress(hotel.address)}
            </p>
            <p class="body-text">
                <a
                    href={hotel.map}
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-peach btn-sm mx-1 my-2">Maps</a>
                <a
                    href="tel:{hotel.phone}"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-raspberry btn-sm mx-1 my-2">Tel</a>
            </p>
            <p class="body-text">
                <a class="hotel-link" href={hotel.web}>Clicca qui per prenotare presso {hotel.name}</a>
            </p>

        {/each}
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
