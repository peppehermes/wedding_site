<script lang="ts">
    import ShowInfoCard from './../elements/map/ShowInfoCard.svelte'
    import MapInfoCard from '$lib/components/elements/map/MapInfoCard.svelte'

    import PageSection from '$lib/components/layout/PageSection.svelte'
    import VideoBackground from '$lib/components/elements/VideoBackground.svelte'
    import { mapMessages } from '$data/strings'
    import type { ConfigObject } from '$lib/types'
    import MapContainer from '../elements/map/MapContainer.svelte'

    export let config: ConfigObject

    let fadeInOptions = { delay: 250, duration: 200 }
    let fadeOutOptions = { duration: 200 }
</script>

<div>
    <VideoBackground ref="venue" {config} />
</div>
<PageSection title={mapMessages.title} ref="venue" sm periwinkle>
    <p class="text-center">{mapMessages.subtitle}</p>
</PageSection>

<MapContainer {config}>
    <ShowInfoCard slot="show-info-card" {fadeInOptions} {fadeOutOptions} />
    <MapInfoCard slot="info-card" {config} {fadeInOptions} {fadeOutOptions} />
</MapContainer>
