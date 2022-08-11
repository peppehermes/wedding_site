import { writable } from 'svelte/store'
import type { ToastType } from '$lib/types'
import dayjs from 'dayjs'

export const toastTimeoutLength = 8

export const toast = writable<string>('')
export const toastType = writable<ToastType>('success')
export const progress = writable<number>(0)

export const showToast = (type: ToastType, message: string) => {
    toastType.update(() => type)
    toast.update(() => message)

    const countDownDate = dayjs().add(toastTimeoutLength, 'seconds')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const myfunc = setInterval(() => {
        const now = dayjs()
        const timeleft = countDownDate.diff(now)

        if (timeleft < 0) {
            toast.update(() => '')
        } else {
            progress.set(timeleft)
        }
    }, 10)
}
