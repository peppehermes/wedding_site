<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import EventsItem from '$lib/components/elements/EventsItem.svelte'
    import { eventsLeftColClasses, eventsRightColClasses } from '$data/classes'
    import { animate, stagger, inView, spring } from 'motion'
    import { onMount } from 'svelte'
    import type { EventItem } from '$lib/repos/events'

    onMount(() => {
        inView('#events-container .event-item', (info) => {
            animate(
                info.target,
                { opacity: [0, 1], y: [100, 0] },
                { duration: 1, delay: stagger(0.5, { start: 0.2 }), easing: spring() },
            )
        })
    })

    export let events: EventItem[]
</script>

<PageSection title="Events" ref="events" lg primary>
    <div class="grid grid-rows-4 md:grid-rows-2 grid-flow-col" id="events-container">
        {#each events as event, i}
            <div
                class="event-item mx-auto {i < events.length / 2
                    ? eventsLeftColClasses
                    : eventsRightColClasses}">
                <EventsItem {event} />
            </div>
        {/each}
    </div>
</PageSection>
