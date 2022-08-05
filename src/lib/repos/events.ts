import { Client } from '@notionhq/client'
import _ from 'lodash'

type NotionEventResult = {
    properties: {
        Time: {
            date: {
                start: string
            }
        }
        Description: {
            rich_text: {
                plain_text: string
            }[]
        }
        Name: {
            title: {
                plain_text: string
            }[]
        }
    }
}

export type EventItem = {
    name: string
    description: string
    time: Date
}

const notionToEvent = (notionItem: NotionEventResult): EventItem => {
    return {
        name: notionItem.properties.Name.title[0].plain_text,
        description: notionItem.properties.Description.rich_text[0].plain_text,
        time: new Date(Date.parse(notionItem.properties.Time.date.start)),
    }
}

class EventsRepo {
    #client = new Client({
        auth: import.meta.env.VITE_NOTION_SECRET,
    })
    getEvents = async () => {
        let events: EventItem[] = []

        const { results } = await this.#client.databases.query({
            database_id: import.meta.env.VITE_EVENTS_DB_ID,
        })

        results.forEach((r) => {
            const item = r as unknown as NotionEventResult
            const event = notionToEvent(item)
            events.push(event)
        })
        events = _.orderBy(events, ['time'], ['asc'])
        // console.log(events);
        return events
    }
}

export const eventsRepo = new EventsRepo()
