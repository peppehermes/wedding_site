import { configRepo } from './config'

class StringsRepo {
    #config = configRepo.getConfig()

    #hotelInfo = {
        mapUrl: 'https://www.google.com/maps/place/9599+Skokie+Blvd,+Skokie,+IL+60077/@42.0546437,-87.7454935,17z/data=!3m1!4b1!4m5!3m4!1s0x880fcf7d3d9f0bff:0x153a30361b3aca37!8m2!3d42.0546437!4d-87.7454935',
        // webUrl: 'https://www.hilton.com/en/hotels/chiccdt-doubletree-chicago-north-shore-conference-center/',
        webUrl: 'http://hotel.joniandcory.wedding',
    }

    #rsvpTitles = {
        canRsvp: 'Cosa aspetti?',
        canNotRsvp: 'Puoi dare conferma di partecipazione qui',
    }

    #mapMessages = {
        title: 'Come si arriva?',
        subtitle: "È più facile di quanto si pensi!",
    }

    #toastMessages = {
        email: {
            success: "Grazie! Ti terremo aggiornato!",
            failure: 'Hmm... Qualcosa è andato storto. Meglio riprovare più tardi.',
        },
        rsvp: {
            success: "Grazie! Abbiamo ricevuto la tua conferma di partecipazione.",
            failure: 'Hmm... Qualcosa è andato storto. Meglio riprovare più tardi.',
        },
    }

    #saveTheDate = {
        title: ['Save', 'the', 'Date'],
        subtitle: 'We are getting married',
    }

    #venueInfo = {
        ceremony: {
            name: 'Chiesa SS. Pietro & Paolo',
            address: 'Piazza SS. Pietro e Paolo, 10044 Pianezza TO',
            mapUrl: 'https://goo.gl/maps/8pbTxvdBocVvx4GJ8',
        },
        reception: {
            name: "L'Ultimo Borgo",
            address: 'Str. della Cebrosa 166, 10036 Settimo Torinese TO',
            mapUrl: 'https://goo.gl/maps/9YYU6uay1H9jZsvm8',
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
