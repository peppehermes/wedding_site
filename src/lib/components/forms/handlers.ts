import { loading } from '$lib/stores/loading'
import type { RsvpData } from '$lib/types'
import { stringsRepo } from '$src/lib/repos/strings'
import toast from 'svelte-french-toast'

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

export const handleSubmit = async (action: Promise<Response>) => {
    loading.set(true)
    const response = await action
        .then(() => {
            toast.success(toastMessages.rsvp.success, { ...toastOptions, ...successIconTheme })
            loading.set(false)
        })
        .catch((err) => {
            console.error('Error!', err.message)
            toast.error(toastMessages.rsvp.failure, { ...toastOptions, ...errorIconTheme })
            loading.set(false)
        })
    return response
}

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
            toast.success(toastMessages.rsvp.success, { ...toastOptions, ...successIconTheme })
            loading.set(false)
        })
        .catch((err) => {
            console.error('Error!', err.message)
            toast.error(toastMessages.rsvp.failure, { ...toastOptions, ...errorIconTheme })
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
            toast.success(toastMessages.email.success, { ...toastOptions, ...successIconTheme })
            loading.set(false)
        })
        .catch((err) => {
            console.error('Error!', err.message)
            toast.error(toastMessages.email.failure, { ...toastOptions, ...errorIconTheme })
            loading.set(false)
        })
}
