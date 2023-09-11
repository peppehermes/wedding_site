import { Client } from '@notionhq/client'
import { stringsRepo } from './strings'
import { emailOctopus } from "email-octopus-ts";
import { VITE_OCTOPUS_NEWSLETTER_API_KEY, VITE_OCTOPUS_NEWSLETTER_LIST_ID, VITE_EMAIL_LIST_DB_ID, VITE_RSVP_DB_ID, VITE_NOTION_SECRET } from '$env/static/private';

export const rsvpLabels = stringsRepo.getRsvpLabels()
const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

class RsvpRepo {
    #client = new Client({
        auth: VITE_NOTION_SECRET,
    })

        addToRsvpList = async (
            name: string,
            email: string, 
            phone: string, 
            numGuests: number, 
            guestsArray: {guestName: string, guestMeal: string}[]) => {
                
            // create main party page 
            const partyPage = await this.#client.pages.create({
                parent: {
                    type: 'database_id',
                    database_id: VITE_RSVP_DB_ID,
                },
                properties: {
                    Name: {
                        title: [
                            {
                                text: {
                                    content: name,
                                },
                            },
                        ],
                    },
                    Email: { email: email },
                    Phone: { phone_number: phone },
                    NumGuests: { number: numGuests }
                }
            })
            
            // create guests pages id array to be used later in partyPage relation
            const guestsPagesId: {id: string}[] = []
            await Promise.all(guestsArray.map(async (guest) => {
                // await to create guest page for each guest
                const guestPage = await this.#client.pages.create({
                    parent: {
                        type: 'database_id',
                        database_id: VITE_RSVP_DB_ID,
                    },
                    properties: {
                        Name: {
                            title: [
                                {
                                    text: {
                                        content: guest.guestName,
                                    },
                                },
                            ],
                        },
                        Menu: { 
                            rich_text: [
                                {
                                    text: {
                                        content: guest.guestMeal
                                    },
                                },
                            ] 
                        },
                        "Party Owner": {
                            relation: [
                                {
                                    id: partyPage.id
                                }
                            ]
                        }
                    },                    
                })

                // sleep to avoid 409 conflict_error on notion database
                await sleep(1000)
                
                // save guest page id
                guestsPagesId.push({id: guestPage.id})
            }))
            
            // update partyPage relation to include all previous pages
            const partyPageUpdate = await this.#client.pages.update({
                page_id: partyPage.id,
                properties: {
                'Party': {
                    relation: guestsPagesId,
                },
                }
            })
            return partyPageUpdate
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
