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
            const phone = data.get(rsvpLabels.phoneLabel) as string
            const numGuests = parseInt(data.get(rsvpLabels.guestsLabel) as string)

            const res = await rsvpRepo.addToRsvpList(name, email, phone, numGuests)
            if (res.object !== 'page') {
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
