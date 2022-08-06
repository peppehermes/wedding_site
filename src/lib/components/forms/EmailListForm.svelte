<script lang="ts">
    import FormField from '$lib/components/elements/FormField.svelte'
    import FormButton from '$lib/components/elements/FormButton.svelte'

    import { emailListSubmitIsDisabled } from '$data/functions'
    import { emailListUrl } from '$data/data'
    import { toastMessages } from '$data/strings'
    import { showToast } from '$lib/stores/toast'

    

    let name: string = ''
    let email: string = ''
    let loading = false

    function resetForm() {
        name = ''
        email = ''
    }

    function click() {
        loading = true
        const form: HTMLFormElement = document.forms[0]

        fetch(emailListUrl, { method: 'POST', body: new FormData(form) })
            .then((response) => {
                console.log('Success!', response)
                showToast('success', toastMessages.email.success)
                loading = false
                resetForm()
            })
            .catch((error) => {
                console.error('Error!', error.message)
                showToast('error', toastMessages.email.failure)
                loading = false
                resetForm()
            })
    }

    $: disabled = emailListSubmitIsDisabled(name, email) || loading
</script>

<form class="w-full max-w-lg mx-auto" name="submit-email-to-google-sheet">
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={name} label="Name" fieldType="text" />
        <FormField bind:data={email} label="Email" fieldType="text" />
    </div>
    <FormButton {loading} {disabled} {click} />
</form>
