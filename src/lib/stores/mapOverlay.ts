import { createToggle } from './toggle'

export const mapOverlay = createToggle(true)
export const mapOverlayClasses = createToggle(false)

export const toggleMapOverlay = () => {
    mapOverlay.toggle()
    setTimeout(() => {
        mapOverlayClasses.toggle()
    }, 250)
}
