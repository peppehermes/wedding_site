export type PhotoItem = {
    name: string
    url: string
    order: number
}

export type NotionPhotosResult = {
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
