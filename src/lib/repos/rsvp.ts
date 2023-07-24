import { Client } from '@notionhq/client'
import { stringsRepo } from './strings'
import { VITE_OCTOPUS_NEWSLETTER_API_KEY, VITE_OCTOPUS_NEWSLETTER_LIST_ID, VITE_EMAIL_LIST_DB_ID } from '$env/static/private';

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
        const postData = {
            api_key: VITE_OCTOPUS_NEWSLETTER_API_KEY,
            email_address: email,
            fields: { FirstName: name },
        }

        const emailOctopusEndpoint = 'https://emailoctopus.com/api/1.6/lists/' + { VITE_OCTOPUS_NEWSLETTER_LIST_ID } + '/contacts'

        const res = await fetch(emailOctopusEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: VITE_OCTOPUS_NEWSLETTER_API_KEY,
                email_address: email,
                fields: { "FirstName": name },
            })
        })

        const json = await res.json()

        if (json.id !== undefined) {
            const response = await this.#client.pages.create({
                parent: {
                    type: 'database_id',
                    database_id: VITE_EMAIL_LIST_DB_ID,
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
        else {
            console.log(json)
            return {
                object: "error",
                status: json.error.code
            }
        }
    }
}

export const rsvpRepo = new RsvpRepo()
