import { configRepo } from '$lib/repos/config'
import { eventsRepo } from '$lib/repos/events'
import { photosRepo } from '$lib/repos/photos'
import { rsvpRepo } from '$lib/repos/rsvp'
import { storyRepo } from '$lib/repos/story'
import type { RsvpData } from '$lib/types'
import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
    const config = await configRepo.getConfig()
    const story = await storyRepo.getStory()
    const photos = await photosRepo.getPhotos()
    const events = await eventsRepo.getEvents()

    return {
        body: { config, story, photos, events },
    }
}

export const POST: RequestHandler = async ({ request }) => {
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
        if (res.object === 'page') {
            return {
                status: 200,
            }
        } else {
            return {
                status: 400,
            }
        }
    } else {
        const res = await rsvpRepo.addToEmailList(json.name, json.email)
        if (res.object === 'page') {
            return {
                status: 200,
            }
        } else {
            return {
                status: 400,
            }
        }
    }
}
