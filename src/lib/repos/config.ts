import type { ConfigObject } from '$lib/types'

class ConfigRepo {
    #hotel = [
        {
            name: 'Hotel Gallia',
            map: 'https://www.google.com/maps/place/Hotel+Gallia+-+Centro+Congressi/@45.0958405,7.5654817,17z/data=!3m1!4b1!4m9!3m8!1s0x47886a4d5fde1547:0x46010a0a497db40b!5m2!4m1!1i2!8m2!3d45.0958405!4d7.5654817!16s%2Fg%2F1tf7r03z?entry=ttu',
            phone: '0119943673',
            web: 'https://www.galliahotel.it/',
            address: 'Via Torino 29/A, 10044 Pianezza TO',
        },
        {
            name: "L'Ultimo Borgo",
            map: "https://www.google.com/maps/place/L'Ultimo+Borgo/@45.1609687,7.7566828,17z/data=!3m1!4b1!4m9!3m8!1s0x478871f3036d1883:0x74aa78614f3bc212!5m2!4m1!1i2!8m2!3d45.1609687!4d7.7566828!16s%2Fg%2F1tkv8nfk?entry=ttu",
            phone: '0118975846',
            web: 'https://golfsettimo.it/',
            address: 'Str. della Cebrosa 166, 10036 Settimo Torinese TO',
        },
    ]

    #venueInfo = {
        ceremony: {
            name: 'Chiesa S.S. Pietro e Paolo',
            address: 'Piazza S.S. Pietro e Paolo, 10044 Pianezza TO',
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
        showHotel: false,
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
