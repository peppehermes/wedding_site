import type { NavItem } from '$lib/types'
import { configRepo } from '$lib/repos/config'
import { weddingIsOver } from '../utils'

class NavRepo {
    #config = configRepo.getConfig()

    #allNavItems: NavItem[] = [
        // photos
        {
            label: 'Foto',
            href: '#photos',
            display: this.#config.showPictures && !weddingIsOver(),
        },
        // cerimonia
        {
            label: 'Cerimonia',
            href: '#venue',
            display: this.#config.showMap && !weddingIsOver(),
        },
        // hotel
        {
            label: 'Hotel',
            href: '#hotel',
            display: this.#config.showHotel && !weddingIsOver(),
        },
        // regali
        {
            label: 'Idee Regalo',
            href: '#registry',
            display: this.#config.showRegistry && !weddingIsOver(),
        },
        {
            label: 'Grazie',
            href: '#thankyou',
            display: weddingIsOver(),
        },

    ]

    getNavItems = () => this.#allNavItems.filter((n) => n.display)
}

export const navRepo = new NavRepo()
