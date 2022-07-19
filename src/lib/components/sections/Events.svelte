<script lang="ts">
    import PageSection from '$com/layout/PageSection.svelte'
    import EventsItem from '$com/elements/EventsItem.svelte'
    import dayjs from 'dayjs'
    import { eventsLeftColClasses, eventsRightColClasses } from '$data/classes'

    let ceremonyTime = dayjs('2023-10-08 4:00 PM')
    let cocktailHourTime = ceremonyTime.add(1, 'hour')
    let dinnerTime = cocktailHourTime.add(1.5, 'hour')
    let sendoffTime = dinnerTime.add(2.5, 'hour')

    const events = [
        {
            title: 'Ceremony',
            time: ceremonyTime.format('h:mm A'),
            description: 'Seating begins ten minutes prior',
        },
        {
            title: 'Cocktail Hour',
            time: cocktailHourTime.format('h:mm A'),
            description: 'Featuring music by the yadda yadda Jazz Trio',
        },
        {
            title: 'Dinner',
            time: dinnerTime.format('h:mm A'),
            description: 'Catered by Hoffman House of Rockford, IL',
        },
        {
            title: 'Send-off',
            time: sendoffTime.format('h:mm A'),
            description: 'Our grand exit in a shower of sparklers',
        },
    ]
</script>

<PageSection title="Events" ref="events" lg primary>
    <div class="grid grid-rows-4 md:grid-rows-2 grid-flow-col">
        {#each events as e, i}
            <div
                class="mx-auto {i < events.length / 2
                    ? eventsLeftColClasses
                    : eventsRightColClasses}"
            >
                <EventsItem {...e} />
            </div>
        {/each}
    </div>
</PageSection>
