import { parseBoolean } from '$src/data/functions'
import { Client } from '@notionhq/client'

type NotionConfigResult = {
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
}

type NotionVideoResult = {
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

class ConfigRepo {
    #client = new Client({
        auth: import.meta.env.VITE_NOTION_SECRET,
    })

    getVideo = async () => {
        const { results } = await this.#client.databases.query({
            database_id: import.meta.env.VITE_VIDEO_DB_ID,
        })

        let videoUrl = ''

        results.forEach((r) => {
            const isActiveString = (r as unknown as NotionVideoResult).properties.Active
                .rich_text[0].plain_text
            const isActive = parseBoolean(isActiveString)

            if (isActive) {
                videoUrl = (r as unknown as NotionVideoResult).properties.Video.files[0].file.url
            }
        })

        return videoUrl
    }

    getConfig = async () => {
        const { results } = await this.#client.databases.query({
            database_id: import.meta.env.VITE_CONFIG_DB_ID,
        })

        const _config: Record<string, unknown> = {}
        const theResults: NotionConfigResult = results as NotionConfigResult
        theResults.forEach((r) => {
            const newKey = r.properties.Name.title[0].plain_text
            let newValue: string | boolean = r.properties.Value.rich_text[0].plain_text

            if (newValue.toLowerCase() === 'true' || newValue.toLowerCase() === 'false') {
                newValue = parseBoolean(newValue)
            }

            // console.log(_config)

            _config[newKey] = newValue
        })

        _config['videoUrl'] = await this.getVideo()

        return _config as ConfigObject

        // return results.map(mapResultToProject).filter(Boolean)
    }
}

export const configRepo = new ConfigRepo()
