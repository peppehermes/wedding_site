import type { ConfigObject } from '$lib/types'

class ConfigRepo {
    #lodging = [
        {
            name: 'DoubleTree by Hilton',
            map: 'https://goo.gl/maps/PKECx8u35oz6rdDGA',
            phone: '+18476797000',
            web: 'https://www.hilton.com/en/hotels/chiccdt-doubletree-chicago-north-shore-conference-center/?SEO_id=GMB-AMER-DH-CHICCDT&y_source=1_MTM3MjYwMS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D',
            address: '9599 Skokie Blvd, Skokie, IL 60077',
            refName: 'Moon Wedding (code WMR)',
            until: 'August 1, 2023',
        },
    ]

    #registry = [
        // {
        //     name: 'Crate & Barrel',
        //     url: 'https://www.crateandbarrel.com/gift-registry/cory-moon-and-joni-meeder/r6614947',
        //     description:
        //         'Home essentials such as modern furniture, small kitchen appliances & dinnerware',
        //     order: 2,
        // },
        // {
        //     name: 'Amazon',
        //     url: 'https://www.amazon.com/wedding/share/joniandcorymoon',
        //     description: '',
        //     order: 3,
        // },
        // {
        //     name: 'Wedgewood',
        //     url: 'https://www.myregistry.com/giftlist/joniandcorymoon',
        //     description: '',
        //     order: 4,
        // },
        {
            name: 'Blueprint Registry',
            url: 'https://www.blueprintregistry.com/registry/moon-wedding-registry',
            description: 'a universal gift registry',
            order: 1,
        },
    ]

    #config: ConfigObject = {
        venueAddress: '911 Michigan Ave, Wilmette, IL 60091',
        venueName: 'Michigan Shores Club',
        groom: 'Cory',
        bride: 'Joni',
        rsvpDate: '2023-08-08',
        weddingDate: '2023-10-08',
        canRsvp: false,
        showPictures: true,
        saveTheDate: true,
        showRegistry: true,
        showEvents: false,
        showStory: false,
        showRsvp: true,
        showMap: true,
        showHotel: true,
        showDressCode: false,
        videoUrl: '/video/venues.mp4',
        venueMapsUrl:
            'https://www.google.com/maps/place/Oak+Hill+Farm/@42.4889488,-90.1237249,17z/data=!3m1!4b1!4m5!3m4!1s0x87e2adb6f05b85ef:0x98e0a8a1ca4adea6!8m2!3d42.4889488!4d-90.1215362',
    }

    #meals = ['Beef', 'Salmon', 'Vegetarian']

    #guestMealsInitial = [
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
        { name: null, meal: null },
    ]

    #events = []

    getConfig = () => this.#config
    getLodging = () => this.#lodging
    getRegistry = () => this.#registry.sort((a, b) => a.order - b.order)
    getMeals = () => this.#meals
    getInitialMeals = () => this.#guestMealsInitial
    getEvents = () => this.#events
}

export const configRepo = new ConfigRepo()
