import type { ConfigObject } from '$lib/types'

class ConfigRepo {
    #lodging = [
        {
            name: 'Villa Lascaris',
            map: 'https://goo.gl/maps/KAwkyBvBqMjtHp2v5',
            phone: '0119676145',
            web: 'http://villalascaris.it/',
            address: 'Via Lascaris, 4, 10044 Pianezza TO',
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
            description: '',
            order: 1,
        },
        {
            name: 'Amazon Registry',
            url: 'https://www.amazon.com/wedding/share/joniandcorymoon',
            description: '',
            order: 1,
        },
    ]

    #config: ConfigObject = {
        venueAddress: 'Str. della Cebrosa, 166, 10036 Settimo Torinese TO',
        venueName: "L'Ultimo Borgo",
        groom: 'Giuseppe',
        bride: 'Valentina',
        rsvpDate: '2023-10-31',
        weddingDate: '2023-12-08',
        canRsvp: true,
        showPictures: true,
        saveTheDate: false,
        showRegistry: true,
        showEvents: false,
        showStory: false,
        showRsvp: true,
        showMap: true,
        showHotel: true,
        showDressCode: false,
        videoUrl: '/video/venues.mp4',
        venueMapsUrl:
            "https://www.google.com/maps/embed/v1/place?q=L'Ultimo+Borgo,+Strada+della+Cebrosa,+Settimo+Torinese,+TO,+Italia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
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
