import type { NotionPhotosResult, PhotoItem } from '$lib/types'
import { Client } from '@notionhq/client'

const notionToPhoto = (notionItem: NotionPhotosResult) => {
    return {
        name: notionItem.properties.Name.title[0].plain_text,
        url: notionItem.properties.Photo.files[0].file.url,
        order: notionItem.properties.Order.number,
    }
}

class PhotosRepo {
    #client = new Client({
        auth: import.meta.env.VITE_NOTION_SECRET,
    })
    getPhotos = async () => {
        const { results } = await this.#client.databases.query({
            database_id: import.meta.env.VITE_PHOTOS_DB_ID,
        })

        const items = results as unknown as NotionPhotosResult[]

        const photos: PhotoItem[] = []

        items.forEach((i) => {
            photos.push(notionToPhoto(i))
        })

        photos.sort((a, b) => a.order > b.order ? 1 : -1)

        return photos
    }
}

export const photosRepo = new PhotosRepo()
