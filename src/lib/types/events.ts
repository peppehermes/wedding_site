export type EventItem = {
    name: string
    description: string
    time: Date
}

export const EVENTS: EventItem[] = [
    {
        name: 'Cerimonia',
        time: new Date('2023-12-31 12:00 PM'),
        description: '`E consigliabile arrivare con quindici minuti di anticipo',
    },
]
