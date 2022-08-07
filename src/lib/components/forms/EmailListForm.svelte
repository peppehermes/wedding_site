<script lang="ts">
    import FormField from '$lib/components/elements/FormField.svelte'
    import FormButton from '$lib/components/elements/FormButton.svelte'

    import { emailListSubmitIsDisabled } from '$data/functions'
    import { handleEmailListSubmit } from './handlers'
    import { loading } from '$lib/stores/loading'

    let name: string = ''
    let email: string = ''

    function resetForm() {
        name = ''
        email = ''
    }

    const click = async () => {
        await handleEmailListSubmit(name, email).then((_) => resetForm())
    }

    $: disabled = emailListSubmitIsDisabled(name, email) || $loading
</script>

<form class="w-full max-w-lg mx-auto" name="submit-email-to-google-sheet">
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={name} label="Name" fieldType="text" />
        <FormField bind:data={email} label="Email" fieldType="text" />
    </div>
    <FormButton loading={$loading} {disabled} {click} />
</form>
