import type { PhotoItem } from '$lib/types'

class PhotosRepo {
    #photos: PhotoItem[] = [
        { name: '🇰🇷 Gyeongju-si, South Korea - 2018', url: '/images/photos/001.jpg', order: 1 },
        { name: '🍎 Keller’s Farmstand - 2021', url: '/images/photos/002.jpeg', order: 2 },
        { name: '💍 Proposal - 2021', url: '/images/photos/003.jpeg', order: 3 },
        { name: "🎆 New Year's Eve - 2021", url: '/images/photos/004.jpeg', order: 4 },
        { name: '🪐 Adler Planetarium - 2022', url: '/images/photos/005.jpeg', order: 5 },
        { name: '🌆 Galena - 2022', url: '/images/photos/006.jpg', order: 6 },
        { name: '🌅 Winnetka - 2022', url: '/images/photos/007.jpg', order: 7 },
        { name: '💍 - 2022', url: '/images/photos/008.jpg', order: 8 },
    ]

    getPhotos = () => {
        return this.#photos
    }
}

export const photosRepo = new PhotosRepo()
