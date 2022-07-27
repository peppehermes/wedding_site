import {configRepo} from '$lib/repos/config'
import type {RequestHandler} from '@sveltejs/kit'

/* GET /ideas */
export const GET: RequestHandler = async () => {
    const config = await configRepo.getConfig()
    
    console.log(config)

	return {
		body: {config},
	}
}
