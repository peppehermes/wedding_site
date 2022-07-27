import type { ConfigObject } from '$lib/repos/config'

export type navItem = {
    label: string
    href: string
    display: boolean
}

export const allNavItems = (config: ConfigObject): navItem[] => [
    // our story
    {
        label: 'Our Story',
        href: '#our-story',
        display: config.showStory,
    },
    // events
    {
        label: 'Events',
        href: '#events',
        display: config.showEvents,
    },
    // photos
    {
        label: 'Photos',
        href: '#photos',
        display: config.showPictures,
    },
    // registry
    {
        label: 'Registry',
        href: '#registry',
        display: config.showRegistry,
    },
    {
        label: 'Venue',
        href: '#venue',
        display: config.showMap,
    },
]
