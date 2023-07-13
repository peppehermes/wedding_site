<script lang="ts">
    import FormField from '$lib/components/elements/FormField.svelte'
    import FormButton from '$lib/components/elements/FormButton.svelte'
    import GuestMealInput from '$lib/components/elements/GuestMealInput.svelte'

    import { rsvpSubmitIsDisabled } from '$lib/utils'
    import { loading } from '$lib/stores/loading'
    import { configRepo } from '$src/lib/repos/config'
    import { stringsRepo } from '$src/lib/repos/strings'

    const rsvpLabels = stringsRepo.getRsvpLabels()

    let name: string = ''
    let email: string = ''
    let phone: string = ''
    let numGuests: number | undefined
    let guestMealsInitial = configRepo.getInitialMeals()
    let guestMeals = guestMealsInitial

    const transportationModal = 'transportation-info-modal'

    $: disabled = rsvpSubmitIsDisabled(name, email, phone, numGuests || 0, guestMeals) || $loading
</script>

<form class="w-full max-w-lg mx-auto" name="submit-rsvp-to-google-sheet" method="POST">
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={name} label={rsvpLabels.nameLabel} fieldType="text" />
        <FormField bind:data={email} label={rsvpLabels.emailLabel} fieldType="text" />
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={phone} label={rsvpLabels.phoneLabel} fieldType="text" />
        <FormField bind:data={numGuests} label={rsvpLabels.guestsLabel} fieldType="number" />
    </div>
    <!-- transportation -->
    <!-- <p class="text-center mb-6 text-black-60">
        Please indicate if you intend to use the complimentary shuttle service between our wedding
        hotels and Oak Hill Farm. For more information,
        <label
            for={transportationModal}
            class="text-lavender-900 hover:text-raspberry cursor-pointer">click here</label
        >.
    </p> -->
    <!-- guest meals -->
    {#if numGuests != undefined}
        <p class="text-center font-semibold font-serif text-lg mb-8">Your Party</p>
        {#each Array(numGuests) as _, index}
            <GuestMealInput
                bind:name={guestMeals[index]['name']}
                bind:meal={guestMeals[index]['meal']}
                {index} />
        {/each}
    {/if}
    <FormButton loading={$loading} {disabled} />
</form>
