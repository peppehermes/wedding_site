<script lang="ts">
    import FormField from '$lib/components/elements/FormField.svelte'
    import FormButton from '$lib/components/elements/FormButton.svelte'
    import GuestMealInput from '$lib/components/elements/GuestMealInput.svelte'

    import { rsvpSubmitIsDisabled } from '$lib/utils'
    import { loading } from '$lib/stores/loading'
    import { configRepo } from '$src/lib/repos/config'
    import { stringsRepo } from '$src/lib/repos/strings'
    import { enhance } from '$app/forms';
    import toast from 'svelte-french-toast'

    const rsvpLabels = stringsRepo.getRsvpLabels()
    const guestLabels = stringsRepo.getGuestLabels()

    let name: string = ''
    let email: string = ''
    let phone: string = ''
    let numGuests: number | undefined
    let guestMealsInitial = configRepo.getInitialMeals()
    let guestMeals = guestMealsInitial

    $: disabled = rsvpSubmitIsDisabled(name, email, phone, numGuests || 0, guestMeals) || $loading
</script>

<form 
    use:enhance
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
