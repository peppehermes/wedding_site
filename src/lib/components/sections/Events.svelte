<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import EventsItem from '$lib/components/elements/EventsItem.svelte'
    import { animate, stagger, inView, spring } from 'motion'
    import { onMount } from 'svelte'
    import { EVENTS } from '$src/lib/types/events'

    onMount(() => {
        inView('#events-container .event-item', (info) => {
            animate(
                info.target,
                { opacity: [0, 1], y: [100, 0] },
                { duration: 1, delay: stagger(0.5, { start: 0.2 }), easing: spring() },
            )
        })
    })
</script>

<PageSection title="Events" ref="events" lg primary>
    <div class="grid grid-rows-4 md:grid-rows-2 grid-flow-col" id="events-container">
        {#each EVENTS as event, i}
            <div
                class="event-item mx-auto {i < EVENTS.length / 2
                    ? 'event-left-col'
                    : 'event-right-col'}">
                <EventsItem {event} />
            </div>
        {/each}
    </div>
</PageSection>

<style lang="postcss">
    .event-left-col {
        @apply mx-auto md:ml-auto md:mr-0 md:border-r md:border-opacity-50 md:border-lavender text-center md:text-right;
    }

    .event-right-col {
        @apply mx-auto md:mr-auto md:ml-0 text-center md:text-left;
    }
</style>
