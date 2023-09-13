import { configRepo } from '$lib/repos/config'
import { rsvpRepo } from '$lib/repos/rsvp'
import { stringsRepo } from '$src/lib/repos/strings'
import type { Actions } from './$types'

export const actions: Actions = {
    default: async ({ request }) => {
        const emailListLabels = stringsRepo.getEmailListLabels()
        const config = configRepo.getConfig()

        const data = await request.formData()

        const name = data.get(emailListLabels.nameLabel) as string
        const email = data.get(emailListLabels.emailLabel) as string

        if (config.canRsvp) {
            const rsvpLabels = stringsRepo.getRsvpLabels()
            const guestsLabels = stringsRepo.getGuestLabels()
            const phone = data.get(rsvpLabels.phoneLabel) as string
            const numGuests = parseInt(data.get(rsvpLabels.guestsLabel) as string)
            
            // Check if a value exists (useful for boolean checkboxes):
            const agreedToNewsletter = data.has(rsvpLabels.newsletterLabel);

            const guestsArray: {guestName: string, guestMeal: string}[] = []
            for (let index = 1; index < numGuests + 1; index++) {
                const guestName = data.get(guestsLabels.guestLabel + " " + index) as string
                const guestMeal = data.get(guestsLabels.menuLabel + " " + index) as string
                guestsArray.push({guestName:guestName, guestMeal:guestMeal})
            }

            const resRsvp = await rsvpRepo.addToRsvpList(name, email, phone, numGuests, guestsArray)

            if (agreedToNewsletter) {
                const resNewsletter = await rsvpRepo.addToEmailList(name, email)
                if (resRsvp.object !== 'page' && resNewsletter.object !== 'page') {
                    return {
                        status: 200,
                    }
                }
            }

            if (resRsvp.object !== 'page') {
                return {
                    status: 200,
                }
            }
        } else {
            const res = await rsvpRepo.addToEmailList(name, email)
            if (res.object === 'page') {
                return {
                    status: 200,
                }
            } else {
                return {
                    status: 500
                }
            }
        }
    },
}
