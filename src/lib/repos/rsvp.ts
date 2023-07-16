import { Client } from '@notionhq/client'
import { loading } from '$lib/stores/loading'
import { handleSubmit } from '../components/forms/handlers'
import { stringsRepo } from './strings'

export const rsvpLabels = stringsRepo.getRsvpLabels()

class RsvpRepo {
    #client = new Client({
        auth: import.meta.env.VITE_NOTION_SECRET,
    })

    addToRsvpList = async (name: string, email: string, phone: string, numGuests: number) => {
        const response = await this.#client.pages.create({
            parent: {
                type: 'database_id',
                database_id: import.meta.env.VITE_RSVP_DB_ID,
            },
            properties: {
                Email: { email: email },
                Name: {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                },
                Phone: { phone_number: phone },
                NumGuests: { number: numGuests }
            }
        })
        return response
    }

    addToEmailList = async (name: string, email: string) => {
        const response = await this.#client.pages.create({
            parent: {
                type: 'database_id',
                database_id: import.meta.env.VITE_EMAIL_LIST_DB_ID,
            },
            properties: {
                Email: { email: email },
                Name: {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                },
            },
        })
        return response
    }
}

export const rsvpRepo = new RsvpRepo()
