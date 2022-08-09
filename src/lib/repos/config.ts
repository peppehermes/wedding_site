import { parseBoolean } from '$src/data/functions'
import { Client } from '@notionhq/client'
import type {
    NotionVideoResult,
    NotionConfigResult,
    ConfigObject,
    NotionRegistryResult,
    RegistryItem,
} from '$lib/types'

const notionToRegistryItem = (data: NotionRegistryResult): RegistryItem => {
    return {
        url: data.properties.Link.url,
        name: data.properties.Name.title[0].plain_text,
        description: data.properties.Description.rich_text[0].plain_text,
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

    getRegistry = async () => {
        const { results } = await this.#client.databases.query({
            database_id: import.meta.env.VITE_REGISTRY_DB_ID,
        })

        const registries: RegistryItem[] = []

        results.forEach((r) => {
            registries.push(notionToRegistryItem(r as unknown as NotionRegistryResult))
        })

        return registries
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

            _config[newKey] = newValue
        })

        _config['videoUrl'] = await this.getVideo()
        _config['registry'] = await this.getRegistry()

        return _config as ConfigObject
    }
}

export const configRepo = new ConfigRepo()
