<script lang="ts">
    import ShowInfoCard from './../elements/map/ShowInfoCard.svelte'
    import MapInfoCard from '$lib/components/elements/map/MapInfoCard.svelte'

    import PageSection from '$lib/components/layout/PageSection.svelte'
    import VideoBackground from '$lib/components/elements/VideoBackground.svelte'
    import { mapMessages } from '$data/strings'
    import type { ConfigObject } from '$lib/types'
    import { venueMapAddress } from '$src/data/functions'
    import MapContainer from '../elements/map/MapContainer.svelte'

    export let config: ConfigObject

    const mapWidth = 700
    const mapHeight = 300
    const mapScale = 2
    const mapZoom = 9
    const markerColor = 'af95d7'

    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${venueMapAddress(
        config.venueAddress,
    )}&zoom=${mapZoom}&scale=${mapScale}&size=${mapWidth}x${mapHeight}&maptype=roadmap&key=AIzaSyC1cwhvB47ptmFsAW-ox5e4AOCWL9smAz8&format=png&visual_refresh=true&markers=size:small%7Ccolor:0x${markerColor}%7Clabel:%7C${venueMapAddress(
        config.venueAddress,
    )}`

    // let overlay = true
    // let overlayClasses = true
    let fadeInOptions = { delay: 250, duration: 200 }
    let fadeOutOptions = { duration: 200 }
</script>

<div>
    <VideoBackground ref="venue" {config} />
</div>
<PageSection title={mapMessages.title} ref="venue" sm periwinkle>
    <p class="text-center">{mapMessages.subtitle}</p>
</PageSection>

<MapContainer {mapUrl} {config}>
    <ShowInfoCard slot="show-info-card" {fadeInOptions} {fadeOutOptions} />
    <MapInfoCard slot="info-card" {config} {fadeInOptions} {fadeOutOptions} />
</MapContainer>
