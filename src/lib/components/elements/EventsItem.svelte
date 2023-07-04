<script lang="ts">
    import type { EventItem } from '$lib/types'
    import dayjs from 'dayjs'

    export let event: EventItem

    const time = dayjs(event.time).format('h:mm A')
</script>

<div class="py-4 px-8 max-w-[100%] md:max-w-[300px]">
    <h5 class="text-xl font-serif">{event.name}</h5>
    <p class="text-lg text-black-60">{time}</p>
    <p class="text-lg font-light text-black-60">{event.description}</p>
</div>
