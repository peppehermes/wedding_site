import { configRepo } from '$lib/repos/config'
import { rsvpRepo } from '$lib/repos/rsvp'
import type { RsvpData } from '$lib/types'
import type { RouteParams } from './$types'
import type { RequestEvent } from '@sveltejs/kit'

// export const POST = async ({ request }: RequestEvent<RouteParams>) => {
//     const config = configRepo.getConfig()
//     const json = await request.json()

//     if (config.canRsvp) {
//         const data: RsvpData = {
//             email: json.data.email,
//             name: json.data.name,
//             guests: json.data.guests,
//             phone: json.data.phone,
//             transportation: json.data.transportation,
//             meals: json.data.meals,
//         }

//         const res = await rsvpRepo.addToRsvpList(data)
//         if (res.object !== 'page') {
//             return {
//                 status: 200,
//             }
//         }
//     } else {
//         const res = await rsvpRepo.addToEmailList(json.name, json.email)
//         if (res.object !== 'page') {
//             return {
//                 status: 200,
//             }
//         }
//     }
// }
