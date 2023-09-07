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
            success: "Grazie! Controlla la SPAM se non ricevi una nostra mail...",
            failure: 'Hmm... Qualcosa è andato storto. Meglio riprovare più tardi.',
        },
        rsvp: {
            success: "Grazie! Abbiamo ricevuto la tua conferma di partecipazione.",
            failure: 'Hmm... Qualcosa è andato storto. Meglio riprovare più tardi.',
        },
        iban: {
            success: "Grazie! IBAN copiato.",
            failure: 'Hmm... Qualcosa è andato storto. Meglio riprovare più tardi.',
        }
    }

    #saveTheDate = {
        title: ['Save', 'the', 'Date'],
        subtitle: 'Stiamo per sposarci',
    }

    #emailListLabels = {
        nameLabel: 'Nome',
        emailLabel: 'Email',
    }

    #rsvpLabels = {
        nameLabel: this.#emailListLabels.nameLabel,
        emailLabel: this.#emailListLabels.emailLabel,
        phoneLabel: 'Telefono',
        guestsLabel: 'Ospiti',
    }

    #guestLabels = {
        partyLabel: "Il tuo gruppo",
        guestLabel: "Nome ospite",
        menuLabel: "Menu ospite",
    }


    getRsvpButtonText = () => (this.#config.canRsvp ? 'RSVP' : 'NEWSLETTER')
    getMapMessages = () => this.#mapMessages
    getRsvpTitles = () => this.#rsvpTitles
    getToastMessages = () => this.#toastMessages
    getSaveTheDate = () => this.#saveTheDate
    getEmailListLabels = () => this.#emailListLabels
    getRsvpLabels = () => this.#rsvpLabels
    getGuestLabels = () => this.#guestLabels
}

export const stringsRepo = new StringsRepo()
