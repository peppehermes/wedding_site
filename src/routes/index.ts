import {configRepo} from '$lib/repos/config'
import { storyRepo } from '$lib/repos/story'
import type {RequestHandler} from '@sveltejs/kit'

/* GET /ideas */
export const GET: RequestHandler = async () => {
	const config = await configRepo.getConfig()
	const story = await storyRepo.getStory()
	
	return {
		body: {config, story},
	}
}
