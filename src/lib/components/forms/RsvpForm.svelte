<script lang="ts">
    import FormField from '$lib/components/elements/FormField.svelte'
    import FormButton from '$lib/components/elements/FormButton.svelte'
    import GuestMealInput from '$lib/components/elements/GuestMealInput.svelte'

    import { rsvpSubmitIsDisabled } from '$lib/utils'
    import { loading } from '$lib/stores/loading'
    import { configRepo } from '$src/lib/repos/config'
    import { stringsRepo } from '$src/lib/repos/strings'
    import { enhance } from '$app/forms'
    import toast from 'svelte-french-toast'
    import { toastOptions, successIconTheme, errorIconTheme } from './handlers'

    const rsvpLabels = stringsRepo.getRsvpLabels()
    const guestLabels = stringsRepo.getGuestLabels()
    const toastMessages = stringsRepo.getToastMessages()
    let guestMealsInitial = configRepo.getInitialMeals()

    let name: string = ''
    let email: string = ''
    let phone: string = ''
    let numGuests: number | undefined
    let guestMeals = guestMealsInitial

    function resetForm() {
        name = ''
        email = ''
        phone = ''
        numGuests = undefined
        guestMeals = guestMealsInitial
    }

    $: disabled = rsvpSubmitIsDisabled(name, email, phone, numGuests || 0, guestMeals) || $loading
</script>

<form
    use:enhance={({ formElement, formData, action, cancel, submitter }) => {
        // `formElement` is this `<form>` element
        // `formData` is its `FormData` object that's about to be submitted
        // `action` is the URL to which the form is posted
        // calling `cancel()` will prevent the submission
        // `submitter` is the `HTMLElement` that caused the form to be submitted
        loading.set(true)

        return async ({ result, update }) => {
            // `result` is an `ActionResult` object
            // `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
            if (result.type === 'success') {
                toast.success(toastMessages.email.success, { ...toastOptions, ...successIconTheme })
            } else if (result.type === 'error') {
                console.error('Error!', result.error, result.status)
                toast.error(toastMessages.email.failure, { ...toastOptions, ...errorIconTheme })
            }

            loading.set(false)
            resetForm()
        }
    }}
    class="w-full max-w-lg mx-auto"
    name="submit-rsvp-to-google-sheet"
    method="POST">
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={name} label={rsvpLabels.nameLabel} fieldType="text" />
        <FormField bind:data={email} label={rsvpLabels.emailLabel} fieldType="text" />
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={phone} label={rsvpLabels.phoneLabel} fieldType="text" />
        <FormField bind:data={numGuests} label={rsvpLabels.guestsLabel} fieldType="number" />
    </div>
    <!-- guest meals -->
    {#if numGuests != undefined}
        <p class="text-center font-semibold font-serif text-lg mb-8">{guestLabels.partyLabel}</p>
        {#each Array(numGuests) as _, index}
            <GuestMealInput
                bind:name={guestMeals[index]['name']}
                bind:meal={guestMeals[index]['meal']}
                {index} />
        {/each}
    {/if}
    <FormButton loading={$loading} {disabled} />
</form>
