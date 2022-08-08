<script lang="ts">
    import dayjs from 'dayjs'
    import type { ConfigObject } from '$lib/types'
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import EmailListForm from '$lib/components/forms/EmailListForm.svelte'
    import RsvpForm from '$lib/components/forms/RsvpForm.svelte'
    import { formatDate } from '$data/functions'
    import { rsvpTitles } from '$data/strings'

    export let config: ConfigObject

    const rsvpCutoffDate = dayjs(config.rsvpDate)

    $: sectionTitle = config.canRsvp ? rsvpTitles.canRsvp : rsvpTitles.canNotRsvp
</script>

<PageSection ref="rsvp" title={sectionTitle} lg image>
    <div class="mb-8 font-light text-center rsvp-info">
        {#if config.canRsvp}
            <p>
                We would greatly appreciate if you could RSVP before {formatDate(
                    rsvpCutoffDate,
                    "Do of MMMM 'YY",
                )}
            </p>
        {:else}
            <p>
                ...but not yet. Once we send formal invitations, you'll be to provide us your
                details here.
            </p>
            <p>
                If you want to recieve updates about when to RSVP, transportation, lodging, etc,
                please fill out the form below.
            </p>
        {/if}
    </div>

    {#if config.canRsvp}
        <RsvpForm {config} />
    {:else}
        <EmailListForm />
    {/if}
</PageSection>

<style lang="postcss">
    .rsvp-info p {
        @apply leading-10 text-lg font-light mb-8;
    }
</style>
