import { Client } from '@notionhq/client'

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
    }
}

export type PhotoItem = {
    name: string
    url: string
}

const notionToPhoto = (notionItem: NotionPhotosResult)  => {
    return {
        name: notionItem.properties.Name.title[0].plain_text,
        url: notionItem.properties.Photo.files[0].file.url
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
            // console.log(i.properties.Name.title[0].plain_text)
            // console.log(i.properties.Photo.files[0].file.url)
            photos.push(notionToPhoto(i))
        })

        return photos
    }
}

export const photosRepo = new PhotosRepo()
