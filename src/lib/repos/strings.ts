import { configRepo } from './config'

class StringsRepo {
    #config = configRepo.getConfig()

    #hotelInfo = {
        mapUrl: 'https://www.google.com/maps/place/9599+Skokie+Blvd,+Skokie,+IL+60077/@42.0546437,-87.7454935,17z/data=!3m1!4b1!4m5!3m4!1s0x880fcf7d3d9f0bff:0x153a30361b3aca37!8m2!3d42.0546437!4d-87.7454935',
        // webUrl: 'https://www.hilton.com/en/hotels/chiccdt-doubletree-chicago-north-shore-conference-center/',
        webUrl: 'http://hotel.joniandcory.wedding',
    }

    #rsvpTitles = {
        canRsvp: 'What are you waiting for?',
        canNotRsvp: 'You can RSVP here',
    }

    #mapMessages = {
        title: 'How do I get there?',
        subtitle: "It's way easier than you think!",
    }

    #toastMessages = {
        email: {
            success: "Thanks! We'll keep you updated!",
            failure: 'Hmm... Something went wrong. Try again later.',
        },
        rsvp: {
            success: "Thanks! We've recieved your RSVP information.",
            failure: 'Hmm... Something went wrong. Try again later.',
        },
    }

    #saveTheDate = {
        title: ['Save', 'the', 'Date'],
        subtitle: 'We are getting married',
    }

    #venueInfo = {
        ceremony: {
            name: 'Community House Winnetka',
            address: '620 Lincoln Ave, Winnetka, IL 60093',
            mapUrl: 'https://www.google.com/maps/place/Community+House+Winnetka/@42.1082596,-87.7337915,15z/data=!4m5!3m4!1s0x0:0xd4f3e8c2892a134a!8m2!3d42.1082596!4d-87.7337915',
        },
        reception: {
            name: 'Michigan Shores Club',
            address: '911 Michigan Ave, Wilmette, IL 60091',
            mapUrl: 'https://www.google.com/maps/place/Michigan+Shores+Club/@42.080159,-87.691314,15z/data=!4m2!3m1!1s0x0:0xc8fe43fbc76028da?sa=X&ved=2ahUKEwjisbSgoa77AhXzCTQIHSSKDS4Q_BJ6BAhsEAg',
        },
    }

    getRsvpButtonText = () => (this.#config.canRsvp ? 'RSVP' : 'Stay Updated')
    getMapMessages = () => this.#mapMessages
    getRsvpTitles = () => this.#rsvpTitles
    getToastMessages = () => this.#toastMessages
    getSaveTheDate = () => this.#saveTheDate
    getHotelInfo = () => this.#hotelInfo
    getVenueInfo = () => this.#venueInfo
}

export const stringsRepo = new StringsRepo()
