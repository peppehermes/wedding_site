<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import { venueDisplayAddress } from '$lib/utils'
    import { configRepo } from '$src/lib/repos/config'

    let hotelInfo = configRepo.getHotelInfo()
    let config = configRepo.getConfig()
</script>

<PageSection
    title="Alloggio per gli ospiti"
    ref="hotel"
    lg
    bordered={!config.showRegistry}
    primary={!config.showRegistry}>
    <div class="max-w-prose mx-auto">
        <p class="body-text">
            Per chi avesse necessità di pernottare, vi consigliamo un hotel in zona con un buon
            rapporto qualità prezzo, il <i>Rivoli Hotel</i>. <br />
            Se volete prenotare una stanza, non esitate a contattarci. <br /><br />
            Cliccando sul nome dell'hotel sarete reindirizzati sul suo sito web; sotto trovate il numero
            di telefono e le indicazioni per raggiungere l'hotel. <br /> <br />
        </p>

        {#each hotelInfo as hotel}
            <!-- <p class="body-text">Tariffa {hotel.name}: Camera Doppia a €{hotel.cost}/notte</p> -->
            <a href={hotel.web} target="_blank">
                <h2 class="card-title justify-center hotel-link">{hotel.name}</h2>
            </a>
            <p class="pb-4 text-black-60 text-center">
                {@html venueDisplayAddress(hotel.address)}
            </p>
            <p class="body-text">
                <a
                    href={hotel.map}
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-warning text-white hover:bg-peach-900 btn-sm mx-1 my-2">Maps</a>
                <a
                    href="tel:{hotel.phone}"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-error hover:bg-raspberry-900 btn-sm mx-1 my-2">Tel</a>
            </p>
        {/each}
    </div>
</PageSection>

<style lang="postcss">
    .hotel-link {
        @apply text-crail-900 underline text-xl;
    }
</style>
