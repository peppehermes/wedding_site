import { success, failure } from './toasts'
import { parseLocation } from 'parse-address'
import type { ConfigObject } from '$lib/repos/config'

export const rsvpButtonText = (config: ConfigObject) => (config.canRsvp ? 'RSVP' : 'Stay Updated')

export const getCityState = (address: string) => {
    const parsedAddress = parseLocation(address)
    return `${parsedAddress.city}, ${parsedAddress.state}`
}

export const venueDisplayAddress = (address: string) => address.replace(', ', '<br />')
export const venueMapAddress = (address: string) => address.replaceAll(' ', '+')

export const parseBoolean = (value: string) => {
    if (value.toLowerCase() === 'true') return true
    return false
}

export const showNotification = (_class: string, _message: string) => {
    function icon() {
        return `<span style="font-size: 0.8rem;" class="material-symbols-rounded">${
            _class == 'success' ? 'check_circle' : 'error'
        }</span>`
    }
    if (_class == 'success') {
        success(`${icon()} ${_message}`)
    } else {
        failure(`${icon()} ${_message}`)
    }
}

export const rsvpSubmitIsDisabled = (
    name: string,
    email: string,
    phone: string,
    numGuests: number,
    guestMeals: { name: string; meal: string }[],
    transportation: boolean,
) => {
    let arrayHasNull = false
    for (let i = 0; i < numGuests; i++) {
        if (guestMeals[i].name == null || guestMeals[i].meal == null) {
            arrayHasNull = true
        }
    }

    const g = numGuests < 1 || numGuests == undefined
    if (!name || !email || !phone || g || transportation == null || arrayHasNull) {
        return true
    } else {
        return false
    }
}

export const emailListSubmitIsDisabled = (name: string, email: string) => {
    if (!name || !email) {
        return true
    } else {
        return false
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function scrollIntoView({ target }: any): void {
    const el = document.querySelector(target.getAttribute('href'))
    if (!el) return
    el.scrollIntoView({
        behavior: 'smooth',
    })
    target.blur()
}

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
