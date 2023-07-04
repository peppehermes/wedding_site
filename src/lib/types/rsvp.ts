export type RsvpGuest = {
    name: string | null
    meal: string | null
}

export type RsvpData = {
    name: string
    email: string
    phone: string
    guests: number
    meals: RsvpGuest[]
}
