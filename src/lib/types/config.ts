export type NotionConfigResult = {
    object: 'page'
    id: string
    properties: {
        Value: {
            type: 'rich_text'
            rich_text: {
                type: 'text'
                plain_text: string
            }[]
        }
        Name: {
            id: string
            type: string
            title: {
                type: 'text'
                plain_text: string
            }[]
        }
    }
}[]

export type ConfigObject = {
    venueAddress: string
    venueName: string
    groom: string
    bride: string
    rsvpDate: string
    weddingDate: string
    canRsvp: boolean
    showPictures: boolean
    saveTheDate: boolean
    showRegistry: boolean
    showEvents: boolean
    showStory: boolean
    showRsvp: boolean
    showMap: boolean
    videoUrl: string
    registry: RegistryItem[]
}

export type NotionVideoResult = {
    properties: {
        Video: {
            files: {
                file: {
                    url: string
                }
            }[]
        }
        Active: {
            rich_text: {
                plain_text: 'true'
            }[]
        }
    }
}

export type NotionRegistryResult = {
    properties: {
        Link: {
            url: string
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

export type RegistryItem = {
    url: string,
    name: string,
    description: string
}
