import { success, failure } from './toasts'

export const showNotification = (_class: string, message: string) => {
    function icon() {
        return `<span style="font-size: 0.8rem;" class="material-symbols-rounded">${
            _class == 'success' ? 'check_circle' : 'error'
        }</span>`
    }
    if (_class == 'success') {
        success(`${icon()} ${message}`)
    } else {
        failure(`${icon()} ${message}`)
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

    const n = name == '' || name == null
    const e = email == '' || email == null
    const p = phone == '' || phone == null
    const g = numGuests < 1 || numGuests == undefined
    const t = transportation == null
    if (n || e || p || g || t || arrayHasNull) {
        return true
    } else {
        return false
    }
}

export const emailListSubmitIsDisabled = (name: string, email: string) => {
    if (name == '' || email == '' || name == null || email == null) {
        return true
    } else {
        return false
    }
}

export function scrollIntoView({ target }: any): void {
    const el = document.querySelector(target.getAttribute('href'))
    if (!el) return
    el.scrollIntoView({
        behavior: 'smooth',
    })
    target.blur();
}

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
