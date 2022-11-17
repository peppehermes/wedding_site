export type EventItem = {
    name: string
    description: string
    time: Date
}

export const EVENTS: EventItem[] = [
    {
        name: 'Ceremony',
        time: new Date('2023-10-08 4:00 PM'),
        description: 'Seating begins ten minutes prior',
    },
    {
        name: 'Cocktail Hour',
        time: new Date('2023-10-08 5:00 PM'),
        description: 'Featuring music by the yadda yadda Jazz Trio',
    },
    {
        name: 'Dinner',
        time: new Date('2023-10-08 6:30 PM'),
        description: 'Catered by Hoffman House of Rockford, IL',
    },
    {
        name: 'Send-off',
        time: new Date('2023-10-08 9:00 PM'),
        description: 'Our grand exit in a shower of sparklers',
    },
]
