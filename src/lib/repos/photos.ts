import type { PhotoItem } from '$lib/types'

class PhotosRepo {
    #photos: PhotoItem[] = [
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/001.jpg',
            thumbnail: '/images/photos/vp/01_thumb.jpg',
            order: 1,
            width: 970,
            height: 1296,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/002.jpg',
            thumbnail: '/images/photos/vp/02_thumb.jpg',
            order: 2,
            width: 970,
            height: 1296,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/003.jpg',
            thumbnail: '/images/photos/vp/03_thumb.jpg',
            order: 3,
            width: 729,
            height: 972,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/004.jpg',
            thumbnail: '/images/photos/vp/04_thumb.jpg',
            order: 4,
            width: 729,
            height: 972,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/005.jpg',
            thumbnail: '/images/photos/vp/05_thumb.jpg',
            order: 5,
            width: 3684,
            height: 4912,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/006.jpg',
            thumbnail: '/images/photos/vp/07_thumb.jpg',
            order: 6,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/007.jpg',
            thumbnail: '/images/photos/vp/06_thumb.jpg',
            order: 7,
            width: 844,
            height: 1125,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/008.jpg',
            thumbnail: '/images/photos/vp/08_thumb.jpg',
            order: 8,
            width: 1126,
            height: 1501,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/009.jpg',
            thumbnail: '/images/photos/vp/08_thumb.jpg',
            order: 9,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/010.jpg',
            thumbnail: '/images/photos/vp/08_thumb.jpg',
            order: 10,
            width: 1440,
            height: 1800,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/011.jpg',
            thumbnail: '/images/photos/vp/08_thumb.jpg',
            order: 11,
            width: 900,
            height: 1200,
        },
        {
            name: 'engagement photos - 2022',
            url: '/images/photos/vp/012.jpg',
            thumbnail: '/images/photos/vp/08_thumb.jpg',
            order: 12,
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
