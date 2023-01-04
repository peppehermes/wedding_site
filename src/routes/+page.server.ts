import { configRepo } from '$lib/repos/config'
import { rsvpRepo } from '$lib/repos/rsvp'
import type { RsvpData } from '$lib/types'
import type { Actions } from './$types'

export const actions: Actions = {
    default: async ({ request }) => {
        const config = configRepo.getConfig()
        const data = await request.formData()

        const name = data.get('Name') as string
        const email = data.get('Email') as string

        if (config.canRsvp) {

            const data: RsvpData = {
                email: email as string,
                name: name as string,
                guests: 0,
                phone: '',
                meals: [],
            }

            const res = await rsvpRepo.addToRsvpList(data)
            if (res.object !== 'page') {
                return {
                    status: 200,
                }
            }
        } else {
            const res = await rsvpRepo.addToEmailList(name, email)
            if (res.object !== 'page') {
                return {
                    status: 200,
                }
            }
        }
    },
}
