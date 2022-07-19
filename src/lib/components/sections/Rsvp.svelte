<script>
    import PageSection from '../layout/PageSection.svelte'
    import EmailListForm from '$com/forms/EmailListForm.svelte'
    import RsvpForm from '$com/forms/RsvpForm.svelte'
    import { canRsvp } from '$data/toggles'
    import { paragraphClasses } from '$data/classes'
    import { rsvpCutoffDate, formatDate } from '$data/data'
    import { rsvpTitles } from '$data/strings'

    $: sectionTitle = canRsvp ? rsvpTitles.canRsvp : rsvpTitles.canNotRsvp
</script>

<PageSection ref="rsvp" title={sectionTitle} lg image>
    <div class="mb-8 font-light text-center">
        {#if canRsvp}
            <p class={paragraphClasses}>
                We would greatly appreciate if you could RSVP before {formatDate(
                    rsvpCutoffDate,
                    "Do of MMMM 'YY",
                )}
            </p>
        {:else}
            <p class={paragraphClasses}>
                ...but not yet. Once we send formal invitations, you'll be to provide us your
                details here.
            </p>
            <p class={paragraphClasses}>
                If you want to recieve updates about when to RSVP, transportation, lodging, etc,
                please fill out the form below.
            </p>
        {/if}
    </div>

    {#if !canRsvp}
        <EmailListForm />
    {:else}
        <RsvpForm />
    {/if}
</PageSection>
