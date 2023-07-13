<script lang="ts">
    import FormField from '$lib/components/elements/FormField.svelte'
    import FormButton from '$lib/components/elements/FormButton.svelte'

    import { emailListSubmitIsDisabled } from '$lib/utils'
    import { handleEmailListSubmit } from './handlers'
    import { loading } from '$lib/stores/loading'
    import { stringsRepo } from '$src/lib/repos/strings'
    import { enhance } from '$app/forms';
    import toast from 'svelte-french-toast'
    import { text } from '@sveltejs/kit'

    const toastMessages = stringsRepo.getToastMessages()

    export const toastOptions: Record<string, unknown> = {
        duration: 8000,
        position: 'bottom-center',
        style: 'border-radius: 9999px; background-color: #F6F3EF;',
    }

    export const successIconTheme = {
        iconTheme: {
            primary: '#789ba4',
            secondary: '#F6F3EF',
        },
    }

    export const errorIconTheme = {
        iconTheme: {
            primary: '#d48c97',
            secondary: '#F6F3EF',
        },
    }

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

<form use:enhance={({ formElement, formData, action, cancel, submitter }) => {
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
    };
}}
    class="w-full max-w-lg mx-auto"
    name="submit-email-to-google-sheet"
    method="POST">
    <div class="flex flex-wrap -mx-3 mb-4">
        <FormField bind:data={name} label={emailListLabels.nameLabel} fieldType="text" />
        <FormField bind:data={email} label={emailListLabels.emailLabel} fieldType="text" />
    </div>
    <FormButton loading={$loading} {disabled} />
</form>
