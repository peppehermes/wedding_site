// eslint-disable-next-line @typescript-eslint/no-unused-vars
const wilder = {
    name: 'Wilder Mansion',
    address: '211 S Prospect Ave, Elmhurst, IL 60126',
    video: '/adler.mp4',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const adler = {
    name: 'Adler Planetarium',
    address: '1300 S DuSable Lake Shore Dr, Chicago, IL 60605',
    video: '/adler.mp4',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const oakHill = {
    name: 'Oak Hill Farm',
    address: '8044 N Gabel Ln, Apple River, IL 61001',
    video: '/oakHill.mp4',
}

export default {
    parties: ['Joni', 'Cory'],
    dates: {
        wedding: '2023-09-17',
        rsvp: '2023-08-08',
    },
    venue: adler,
    catering: {
        meals: ['N.Y. Strip', 'Stuffed Chicken Caprese', 'Atlantic Salmon', 'Vegetarian'],
    },
    lodging: {
        blocks: [
            {
                name: 'Eagle Ridge Resort & Spa',
                map: 'https://goo.gl/maps/ccoYPiaPZhHKDmEU6',
                phone: '815-777-5000',
                web: 'https://www.eagleridge.com/',
                address: '444 Eagle Ridge Dr, Galena, IL 61036',
                refName: 'Meeder/Moon Wedding',
                until: 'August 1, 2023',
            },
            {
                name: 'Best Western Galena Inn & Suites',
                map: 'https://g.page/BWGalena?share',
                phone: '815-777-2577',
                web: 'https://www.bestwestern.com/en_US/book/hotels-in-galena/best-western-galena-inn-suites/propertyCode.14119.html',
                address: '9923 W US Route 20, Galena, IL 61036',
                refName: 'Joni/Cory Wedding',
                until: 'September 15, 2023',
            },
        ],
    },
    registry: {
        providers: [
            {
                name: 'Honeyfund',
                url: 'https://www.honeyfund.com/wedding/moon-wedding',
                description: 'Honeymoon registry',
            },
            {
                name: 'Blueprint',
                url: 'https://www.blueprintregistry.com/registry/moon-wedding-registry',
                description: 'A universal gift registry',
            },
        ],
    },
}
