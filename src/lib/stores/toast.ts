import { writable } from 'svelte/store'
import type { ToastType } from '$lib/types'

export const toast = writable<string>('')
export const toastType = writable<ToastType>('success')

export const showToast = (type: ToastType, message: string) => {
    toastType.update(() => type)
    toast.update(() => message)
    setTimeout(() => {
        toast.update(() => '')
    }, 8000)
}
