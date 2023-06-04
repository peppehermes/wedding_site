import type { NavItem } from '$lib/types'
import { configRepo } from '$lib/repos/config'

class NavRepo {
    #config = configRepo.getConfig()

    #allNavItems: NavItem[] = [
        // our story
        {
            label: 'Our Story',
            href: '#our-story',
            display: this.#config.showStory,
        },
        // events
        {
            label: 'Events',
            href: '#events',
            display: this.#config.showEvents,
        },
        // photos
        {
            label: 'Photos',
            href: '#photos',
            display: this.#config.showPictures,
        },
        // registry
        {
            label: 'Registry',
            href: '#registry',
            display: this.#config.showRegistry,
        },
        {
            label: 'Venue',
            href: '#venue',
            display: this.#config.showMap,
        },
        {
            label: 'Accommodations',
            href: '#hotel',
            display: this.#config.showHotel,
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
