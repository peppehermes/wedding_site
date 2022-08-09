import { showToast } from '$lib/stores/toast'
import { loading } from '$lib/stores/loading'
import { toastMessages } from '$src/data/strings'
import type { RsvpData } from '$lib/types'

export const handleRsvpSubmit = async (data: RsvpData) => {
    loading.set(true)
    await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ data }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(() => {
            showToast('success', toastMessages.rsvp.success)
            loading.set(false)
        })
        .catch((err) => {
            console.error('Error!', err.message)
            showToast('error', toastMessages.rsvp.failure)
            loading.set(false)
        })
}

export const handleEmailListSubmit = async (name: string, email: string) => {
    loading.set(true)
    await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ name: name, email: email }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(() => {
            showToast('success', toastMessages.email.success)
            loading.set(false)
        })
        .catch((err) => {
            console.error('Error!', err.message)
            showToast('error', toastMessages.email.failure)
            loading.set(false)
        })
}
