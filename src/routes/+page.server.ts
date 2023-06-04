import { configRepo } from '$lib/repos/config'
import { rsvpRepo } from '$lib/repos/rsvp'
import type { Actions } from './$types'

export const actions: Actions = {
    default: async ({ request }) => {
        const config = configRepo.getConfig()
        const data = await request.formData()

        const name = data.get('Name') as string
        const email = data.get('Email') as string

        if (config.canRsvp) {
            const res = await rsvpRepo.addToRsvpList(data)
            return res
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
