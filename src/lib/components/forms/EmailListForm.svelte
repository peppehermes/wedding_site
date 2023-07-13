<script lang="ts">
    import FormField from '$lib/components/elements/FormField.svelte'
    import FormButton from '$lib/components/elements/FormButton.svelte'

    import { emailListSubmitIsDisabled } from '$lib/utils'
    import { handleEmailListSubmit } from './handlers'
    import { loading } from '$lib/stores/loading'
    import { stringsRepo } from '$src/lib/repos/strings'

    const emailListLabels = stringsRepo.getEmailListLabels()

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

    interface FormData {
        name: string
        email: string
    }
</script>

<form
    class="w-full max-w-lg mx-auto"
    name="submit-email-to-google-sheet"
    method="POST">
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={name} label={emailListLabels.nameLabel} fieldType="text" />
        <FormField bind:data={email} label={emailListLabels.emailLabel} fieldType="text" />
    </div>
    <FormButton loading={$loading} {disabled} />
</form>
