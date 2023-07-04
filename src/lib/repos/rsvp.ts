import { Client } from '@notionhq/client'
import { loading } from '$lib/stores/loading'
import { handleSubmit } from '../components/forms/handlers'

// form urls
const emailListId = 'AKfycbyJ1aYZdxB-YtPVidSqKGKi8F3WhMoX7Em0J8RUrIE1bXq92yZoEf6zsJcM6cq8jXSOPw'
const rsvpId = 'AKfycbzShgnqLPkKfJ-TCxgthCq2k-96J3ADIJcFQYoaIHaSwNRxgVnhEu1MHBHdjI8Xegqy'

const sheetScriptUrl = (id: string) => {
    return `https://script.google.com/macros/s/${id}/exec`
}

export const emailListUrl = sheetScriptUrl(emailListId)
export const rsvpUrl = sheetScriptUrl(rsvpId)

class RsvpRepo {
    #client = new Client({
        auth: import.meta.env.VITE_NOTION_SECRET,
    })

    addToRsvpList = async (data: FormData) => {
        loading.set(true)

        handleSubmit(fetch(rsvpUrl, { method: 'POST', body: data }))
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
