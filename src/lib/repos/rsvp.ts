import { Client } from '@notionhq/client'
import { stringsRepo } from './strings'
import { emailOctopus } from "email-octopus-ts";
import { VITE_OCTOPUS_NEWSLETTER_API_KEY, VITE_OCTOPUS_NEWSLETTER_LIST_ID, VITE_EMAIL_LIST_DB_ID, VITE_NOTION_SECRET } from '$env/static/private';

export const rsvpLabels = stringsRepo.getRsvpLabels()

class RsvpRepo {
    #client = new Client({
        auth: VITE_NOTION_SECRET,
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
        const EmailOctopus = emailOctopus(VITE_OCTOPUS_NEWSLETTER_API_KEY);

        const contact = await EmailOctopus.lists.createContact({
            listId: VITE_OCTOPUS_NEWSLETTER_LIST_ID,
            emailAddress: email,
            fields: {
                FirstName: name
            }
            // tags?: Array<string>;
            // status?: "SUBSCRIBED" | "UNSUBSCRIBED" | "PENDING";
          });

        if (contact.id !== undefined) {
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

        return {
            object: "error",
            status: 500
        }
    }
}

export const rsvpRepo = new RsvpRepo()
