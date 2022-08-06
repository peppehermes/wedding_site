import { parseLocation } from 'parse-address'
import type { ConfigObject } from '$lib/repos/config'
import dayjs, { Dayjs } from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
dayjs.extend(advancedFormat)

export const formatDate = (date: Dayjs, format: string) => {
    return date.format(format)
}

export const rsvpButtonText = (config: ConfigObject) => (config.canRsvp ? 'RSVP' : 'Stay Updated')

export const getCityState = (address: string) => {
    const parsedAddress = parseLocation(address)
    return `${parsedAddress.city}, ${parsedAddress.state}`
}

export const venueDisplayAddress = (address: string) => address.replace(', ', '<br />')
export const venueMapAddress = (address: string) => address.replaceAll(' ', '+')

export const parseBoolean = (value: string) => {
    if (value.trim().toLowerCase() === 'true') return true
    return false
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
