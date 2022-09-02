import { configRepo } from '$lib/repos/config'
import { eventsRepo } from '$lib/repos/events'
import { photosRepo } from '$lib/repos/photos'
import { rsvpRepo } from '$lib/repos/rsvp'
import { copyRepo } from '$lib/repos/copy'
import type { RsvpData } from '$lib/types'
import type { PageServerLoad, RouteParams } from './$types'
import type { RequestEvent } from '@sveltejs/kit'

export const load: PageServerLoad = async () => {
    const config = await configRepo.getConfig()
    const story = await copyRepo.getStory()
    const photos = await photosRepo.getPhotos()
    const events = await eventsRepo.getEvents()
    const registry = await copyRepo.getRegistry()

    return { config, story, photos, events, registry }
}

export const POST = async ({ request }: RequestEvent<RouteParams>) => {
    const config = await configRepo.getConfig()
    const json = await request.json()

    if (config.canRsvp) {
        const data: RsvpData = {
            email: json.data.email,
            name: json.data.name,
            guests: json.data.guests,
            phone: json.data.phone,
            transportation: json.data.transportation,
            meals: json.data.meals,
        }

        const res = await rsvpRepo.addToRsvpList(data)
        if (res.object !== 'page') {
            return {
                status: 200,
            }
        }
    } else {
        const res = await rsvpRepo.addToEmailList(json.name, json.email)
        if (res.object !== 'page') {
            return {
                status: 200,
            }
        }
    }
}
