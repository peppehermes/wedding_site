import { configRepo } from './config'

class StringsRepo {
    #config = configRepo.getConfig()

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

    #emailListLabels = {
        nameLabel: 'Nome',
        emailLabel: 'Email',
    }


    getRsvpButtonText = () => (this.#config.canRsvp ? 'RSVP' : 'Stay Updated')
    getMapMessages = () => this.#mapMessages
    getRsvpTitles = () => this.#rsvpTitles
    getToastMessages = () => this.#toastMessages
    getSaveTheDate = () => this.#saveTheDate
    getEmailListLabels = () => this.#emailListLabels
}

export const stringsRepo = new StringsRepo()
