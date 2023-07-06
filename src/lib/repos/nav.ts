import type { NavItem } from '$lib/types'
import { configRepo } from '$lib/repos/config'

class NavRepo {
    #config = configRepo.getConfig()

    #allNavItems: NavItem[] = [
        // our story
        {
            label: 'La Nostra Storia',
            href: '#our-story',
            display: this.#config.showStory,
        },
        // events
        {
            label: 'Eventi',
            href: '#events',
            display: this.#config.showEvents,
        },
        // photos
        {
            label: 'Foto',
            href: '#photos',
            display: this.#config.showPictures,
        },
        {
            label: 'Cerimonia',
            href: '#venue',
            display: this.#config.showMap,
        },
        {
            label: 'Alloggi',
            href: '#hotel',
            display: this.#config.showHotel,
        },
        // registry
        {
            label: 'Regali',
            href: '#registry',
            display: this.#config.showRegistry,
        },
        {
            label: 'Dress Code',
            href: '#dress',
            display: this.#config.showDressCode,
        },
    ]

    getNavItems = () => this.#allNavItems.filter((n) => n.display)
}

export const navRepo = new NavRepo()
