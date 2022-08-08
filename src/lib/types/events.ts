export type NotionEventResult = {
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
