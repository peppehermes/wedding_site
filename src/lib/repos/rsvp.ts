import { Client } from '@notionhq/client'
import type { RsvpData } from '$lib/types'


const guestName = (name: string | null) => {
    return {
        rich_text: [
            {
                text: {
                    content: name === null ? '' : name,
                },
            },
        ],
    }
}

const guestMeal = (meal: string | null) => {
    return {
        select: { name: meal === null ? '' : meal }
      }
}

const buildMeals = (data: RsvpData) => {
    const meals: Record<string, unknown> = {}
    for (let i = 0; i < data.meals.length; i++) {
        if (data.meals[i].name !== null && data.meals[i].meal !== null) {
            meals[`Guest ${i + 1} Name`] = guestName(data.meals[i].name)
            meals[`Guest ${i + 1} Meal`] = guestMeal(data.meals[i].meal)
        }
    }
    return meals
}


class RsvpRepo {
    #client = new Client({
        auth: import.meta.env.VITE_NOTION_SECRET,
    })

    addToRsvpList = async (data: RsvpData) => {
        const response = await this.#client.pages.create({
            parent: {
                database_id: import.meta.env.VITE_RSVP_DB_ID,
            },
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: data.name,
                            },
                        },
                    ],
                },
                Email: { email: data.email },
                Phone: { phone_number: data.phone },
                Guests: { number: data.guests },
                Transportation: {
                    select: { name: data.transportation },
                },
                ...buildMeals(data),
            },
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
