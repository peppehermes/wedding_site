import { writable } from 'svelte/store'

export const toast = writable('')
export const toastType = writable('success')

export const showToast = (type: string, message: string) => {
    toastType.update(() => type)
    toast.update(() => message)
    setTimeout(() => {
        toast.update(() => '')
    }, 8000)
}
