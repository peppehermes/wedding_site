<script lang="ts">
    import dayjs from 'dayjs'
    import { CountUp } from 'countup.js'
    import { onMount } from 'svelte'
    import type { ConfigObject } from '$lib/types'
    import { saveTheDate } from '$data/strings'
    import PageSection from '$lib/components/layout/PageSection.svelte'

    export let config: ConfigObject
    
    let weddingDay = dayjs(config.weddingDate)
    let today = dayjs()
    let diff = weddingDay.diff(today, 'days') + 1
    let dayDays = diff == 1 ? ' day' : ' days'

    onMount(() => {
        new CountUp('countup', diff, {
            enableScrollSpy: true,
            prefix: '...in ',
            suffix: dayDays,
            scrollSpyOnce: true,
        })
    })
</script>

<PageSection ref="save-the-date" lg bordered primary>
    <div id="save-the-date-text" class="text-center my-10 font-serif font-bold text-5xl">
        <span class="save-the-date-text-item uppercase inline-block mb-2 tracking-widest"
            >{saveTheDate.title[0]}</span>
        <br />
        <span class="save-the-date-text-item italic lowercase inline-block"
            >{saveTheDate.title[1]}</span>
        <span class="save-the-date-text-item uppercase inline-block tracking-wider"
            >{saveTheDate.title[2]}</span>
    </div>
    <div class="text-center font-serif font-semibold text-3xl uppercase mb-10 opacity-60">
        <span>{saveTheDate.subtitle}</span>
    </div>
    <div class="text-center text-xl opacity-60">
        <span id="countup" />
    </div>
</PageSection>
