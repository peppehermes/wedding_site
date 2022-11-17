<script lang="ts">
    import FormField from '$lib/components/elements/FormField.svelte'
    import GroupRadio from '$lib/components/elements/GroupRadio.svelte'
    import FormButton from '$lib/components/elements/FormButton.svelte'
    import GuestMealInput from '$lib/components/elements/GuestMealInput.svelte'

    import { rsvpSubmitIsDisabled } from '$lib/utils'
    import { handleRsvpSubmit } from './handlers'
    import { loading } from '$lib/stores/loading'
    import { configRepo } from '$src/lib/repos/config'

    let name: string = ''
    let email: string = ''
    let phone: string = ''
    let numGuests: number | undefined
    let transportation: null | string = null
    let lodging = configRepo.getLodging()
    let guestMealsInitial = configRepo.getInitialMeals()
    let guestMeals = guestMealsInitial

    const transportationModal = 'transportation-info-modal'

    const resetForm = () => {
        name = ''
        email = ''
        phone = ''
        numGuests = undefined
        guestMeals = guestMealsInitial
        transportation = null
    }

    const click = async () => {
        await handleRsvpSubmit({
            name,
            email,
            guests: numGuests!,
            phone,
            transportation: transportation !== null ? transportation : 'No',
            meals: guestMeals,
        }).then((_) => resetForm())
    }

    $: disabled =
        rsvpSubmitIsDisabled(name, email, phone, numGuests || 0, guestMeals, transportation) ||
        $loading

    $: yesRadioLabel = `Yes, ${
        numGuests === 1 || numGuests === null ? "I'd" : "We'd"
    } love to use the provided transportation.`
</script>

<form class="w-full max-w-lg mx-auto" name="submit-rsvp-to-google-sheet">
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={name} label="Name" fieldType="text" />
        <FormField bind:data={email} label="Email" fieldType="text" />
    </div>
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={phone} label="Phone" fieldType="text" />
        <FormField bind:data={numGuests} label="Guests" fieldType="number" />
    </div>
    <!-- transportation -->
    <p class="text-center mb-6 text-black-60">
        Please indicate if you intend to use the complimentary shuttle service between our wedding
        hotels and Oak Hill Farm. For more information,
        <label
            for={transportationModal}
            class="text-lavender-900 hover:text-raspberry cursor-pointer">click here</label
        >.
    </p>
    <!-- transportation radios -->
    <div class="flex flex-wrap -mx-3 mb-4 justify-center">
        <div class="w-full px-3">
            <GroupRadio
                bind:group={transportation}
                name="Transportation"
                value="Yes"
                label={yesRadioLabel} />
            <GroupRadio
                bind:group={transportation}
                name="Transportation"
                value="No"
                label="No, thanks." />
        </div>
    </div>
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
    <FormButton loading={$loading} {disabled} {click} />
</form>

<!-- Transportation modal -->
<input type="checkbox" id={transportationModal} class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle bg-lavender/50">
    <div class="modal-box">
        <h3 class="font-bold text-lg text-black-87">Transportation</h3>
        <p class="py-4 text-black-60">
            Transportation will be provided for all to the ceremony and reception at Oak Hill Farm
            on Sunday, October 8th. No hotel stay required for transportation. It departs from {lodging.length ==
            1
                ? 'this'
                : 'these'}
            {lodging.length}
            {lodging.length == 1 ? 'location' : 'locations'}:
        </p>
        <ul>
            {#each lodging as l}
                <li>{l.name}</li>
            {/each}
        </ul>
        <div class="modal-action">
            <label for={transportationModal} class="btn hover:bg-lavender hover:text-white"
                >Close</label>
        </div>
    </div>
</div>
