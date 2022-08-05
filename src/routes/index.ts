import {configRepo} from '$lib/repos/config'
import { eventsRepo } from '$lib/repos/events'
import { photosRepo } from '$lib/repos/photos'
import { storyRepo } from '$lib/repos/story'
import type {RequestHandler} from '@sveltejs/kit'

/* GET /ideas */
export const GET: RequestHandler = async () => {
	const config = await configRepo.getConfig()
	const story = await storyRepo.getStory()
	const photos = await photosRepo.getPhotos()
	const events = await eventsRepo.getEvents()
	
	return {
		body: {config, story, photos, events},
	}
}
