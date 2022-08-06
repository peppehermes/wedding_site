import config from './config'

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
