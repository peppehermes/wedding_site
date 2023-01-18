import type { PhotoItem } from '$lib/types'

class PhotosRepo {
    #photos: PhotoItem[] = [
        // { name: '🇰🇷 Gyeongju-si, South Korea - 2018', url: '/images/photos/001.jpg', order: 1 },
        // { name: '🍎 Keller’s Farmstand - 2021', url: '/images/photos/002.jpeg', order: 2 },
        // { name: '💍 Proposal - 2021', url: '/images/photos/003.jpeg', order: 3 },
        // { name: "🎆 New Year's Eve - 2021", url: '/images/photos/004.jpeg', order: 4 },
        // { name: '🪐 Adler Planetarium - 2022', url: '/images/photos/005.jpeg', order: 5 },
        // { name: '🌆 Galena - 2022', url: '/images/photos/006.jpg', order: 6 },
        // { name: '🌅 Winnetka - 2022', url: '/images/photos/007.jpg', order: 7 },
        // { name: '💍 - 2022', url: '/images/photos/008.jpg', order: 8 },

        {
            name: 'engagement photos - 2022',
            url: '/images/photos/eng/01.jpg',
            thumbnail: '/images/photos/eng/01_thumb.jpg',
            order: 1,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/eng/02.jpg',
            thumbnail: '/images/photos/eng/02_thumb.jpg',
            order: 2,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/eng/03.jpg',
            thumbnail: '/images/photos/eng/03_thumb.jpg',
            order: 3,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/eng/04.jpg',
            thumbnail: '/images/photos/eng/04_thumb.jpg',
            order: 4,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/eng/05.jpg',
            thumbnail: '/images/photos/eng/05_thumb.jpg',
            order: 7,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/eng/06.jpg',
            thumbnail: '/images/photos/eng/06_thumb.jpg',
            order: 8,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/eng/07.jpg',
            thumbnail: '/images/photos/eng/07_thumb.jpg',
            order: 5,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/eng/08.jpg',
            thumbnail: '/images/photos/eng/08_thumb.jpg',
            order: 6,
            width: 1440,
            height: 1800,
        },
    ]

    getPhotos = () => {
        return this.#photos.sort((a, b) => {
            return a.order - b.order
        })
    }
}

export const photosRepo = new PhotosRepo()
