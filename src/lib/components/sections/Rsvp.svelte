<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import EmailListForm from '$lib/components/forms/EmailListForm.svelte'
    import RsvpForm from '$lib/components/forms/RsvpForm.svelte'
    import { stringsRepo } from '$src/lib/repos/strings'
    import { configRepo } from '$src/lib/repos/config'
    
    let rsvpTitles = stringsRepo.getRsvpTitles()
    let config = configRepo.getConfig()

    $: sectionTitle = config.canRsvp ? rsvpTitles.canRsvp : rsvpTitles.canNotRsvp
</script>

<PageSection ref="rsvp" title={sectionTitle} lg image>
    <div class="mb-8 font-light text-center rsvp-info">
        {#if config.canRsvp}
            <p>
                È gradita conferma entro il 31 ottobre 2023
            </p>
        {:else}
            <p>
                ...Ma non ancora. Una volta che invieremo le partecipazioni, potrai fornirci tutti i dettagli.
            </p>
            <p>
                Se vuoi ricevere aggiornamenti riguardo RSVP, hotel, cerimonia ecc.
                puoi iscriverti alla nostra newsletter!
            </p>
        {/if}
    </div>

    {#if config.canRsvp}
        <RsvpForm />
    {:else}
        <EmailListForm />
    {/if}
</PageSection>

<style lang="postcss">
    .rsvp-info p {
        @apply leading-10 text-lg font-light mb-8;
    }
</style>
