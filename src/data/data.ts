import config from './config'
import { parseLocation } from 'parse-address'
import dayjs, { Dayjs } from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
dayjs.extend(advancedFormat)

// general
export const parties = config.parties

// dates
// export const weddingDay = dayjs(config.dates.wedding)
export const rsvpCutoffDate = dayjs(config.dates.rsvp)

// venue
export const venueName = config.venue.name
export const venueAddress = config.venue.address

const parsedAddress = parseLocation(venueAddress)

export const city = `${parsedAddress.city}, ${parsedAddress.state}`
export const venueDisplayAddress = venueAddress.replace(', ', '<br />')
export const venueMapAddress = venueAddress.replaceAll(' ', '+')

export const formatDate = (date: Dayjs, format: string) => {
    return date.format(format)
}

// catering
export const meals = config.catering.meals
export const guestMealsInitial = [
    { name: null, meal: null },
    { name: null, meal: null },
    { name: null, meal: null },
    { name: null, meal: null },
    { name: null, meal: null },
    { name: null, meal: null },
]

// form urls
const emailListId = 'AKfycbyJ1aYZdxB-YtPVidSqKGKi8F3WhMoX7Em0J8RUrIE1bXq92yZoEf6zsJcM6cq8jXSOPw'
const rsvpId = 'AKfycbzShgnqLPkKfJ-TCxgthCq2k-96J3ADIJcFQYoaIHaSwNRxgVnhEu1MHBHdjI8Xegqy'

const sheetScriptUrl = (id: string) => {
    return `https://script.google.com/macros/s/${id}/exec`
}

export const emailListUrl = sheetScriptUrl(emailListId)
export const rsvpUrl = sheetScriptUrl(rsvpId)

// lodging
export const lodging = config.lodging.blocks
