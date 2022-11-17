<script lang="ts">
    import VideoBackground from '$lib/components/elements/VideoBackground.svelte'
    import ShowInfoCard from '$lib/components/elements/map/ShowInfoCard.svelte'
    import MapInfoCard from '$lib/components/elements/map/MapInfoCard.svelte'
    import MapContainer from '$lib/components/elements/map/MapContainer.svelte'

    import PageSection from '$lib/components/layout/PageSection.svelte'
    import { stringsRepo } from '$src/lib/repos/strings'
    let mapMessages = stringsRepo.getMapMessages()

    let fadeInOptions = { delay: 250, duration: 200 }
    let fadeOutOptions = { duration: 200 }
</script>

<div>
    <VideoBackground ref="venue" />
</div>
<PageSection title={mapMessages.title} ref="venue" sm periwinkle>
    <p class="text-center">{mapMessages.subtitle}</p>
</PageSection>

<MapContainer>
    <ShowInfoCard slot="show-info-card" {fadeInOptions} {fadeOutOptions} />
    <MapInfoCard slot="info-card" {fadeInOptions} {fadeOutOptions} />
</MapContainer>
