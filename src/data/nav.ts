import { toggleSections } from './toggles'

export type navItem = {
    label: string
    href: string
    display: boolean
}

export const allNavItems: navItem[] = [
    // our story
    {
        label: 'Our Story',
        href: '#our-story',
        display: toggleSections.story,
    },
    // events
    {
        label: 'Events',
        href: '#events',
        display: toggleSections.events,
    },
    // photos
    {
        label: 'Photos',
        href: '#photos',
        display: toggleSections.photos,
    },
    // registry
    {
        label: 'Registry',
        href: '#registry',
        display: toggleSections.registry,
    },
    {
        label: 'Venue',
        href: '#venue',
        display: toggleSections.map,
    },
]

export const navItems = allNavItems.filter((e) => e.display)
