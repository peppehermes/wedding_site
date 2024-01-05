import type { ConfigObject } from '$lib/types'

class ConfigRepo {
    #hotel = [
        {
            name: 'Rivoli Hotel',
            map: 'https://maps.app.goo.gl/9y69jgqGmVsdxn787',
            phone: '0119566586',
            web: 'https://www.rivolihotel.it/?utm_source=google_maps&utm_medium=organic&utm_campaign=mybusiness',
            address: 'C.so Primo Levi, 150, 10098 Rivoli TO',
        },
    ]

    #venueInfo = {
        ceremony: {
            name: 'Chiesa SS. Pietro e Paolo',
            address: 'Piazza SS. Pietro e Paolo, 10044 Pianezza TO',
            mapUrl: 'https://goo.gl/maps/8pbTxvdBocVvx4GJ8',
        },
        reception: {
            name: "L'Ultimo Borgo",
            address: 'Str. della Cebrosa 166, 10036 Settimo Torinese TO',
            mapUrl: 'https://goo.gl/maps/9YYU6uay1H9jZsvm8',
            tel: '0118975846'
        },
    }

    #registry = [
        {
            name: 'IT92W0306930410100000091380',
            url: '',
            description: 'Giuseppe Mercurio,  Valentina Marangon',
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
        heroUrl: '/header/hero.jpg'
    }

    #meals = ['Carne', 'Vegetariano', 'Vegano', 'Senza Glutine', 'Altro']

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
    getHotel = () => this.#hotel
    getRegistry = () => this.#registry.sort((a, b) => a.order - b.order)
    getMeals = () => this.#meals
    getInitialMeals = () => this.#guestMealsInitial
    getEvents = () => this.#events
    getVenueInfo = () => this.#venueInfo
    getHotelInfo = () => this.#hotel
}

export const configRepo = new ConfigRepo()
