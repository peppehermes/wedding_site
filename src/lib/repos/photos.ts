import { Client } from '@notionhq/client'
import _ from 'lodash'

type NotionPhotosResult = {
    properties: {
        Photo: {
            files: {
                file: {
                    url: string
                }
            }[]
        }
        Name: {
            title: {
                plain_text: 'Korea - 2018'
            }[]
        }
        Order: { number: number }
    }
}

export type PhotoItem = {
    name: string
    url: string
    order: number
}

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

        let photos: PhotoItem[] = []

        items.forEach((i) => {
            photos.push(notionToPhoto(i))
        })

        photos = _.orderBy(photos, ['order'], ['asc'])

        return photos
    }
}

export const photosRepo = new PhotosRepo()
