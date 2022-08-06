<script lang="ts">
    import dayjs from 'dayjs'
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import { saveTheDate } from '$data/strings'
    import type { ConfigObject } from '$lib/repos/config'
    import { CountUp } from 'countup.js'
    import { onMount } from 'svelte'

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

<PageSection ref="saveTheDate" lg primary bordered>
    <div id="save-the-date-text" class="text-center my-10 font-serif font-bold text-5xl">
        <span class="save-the-date-text-item uppercase inline-block mb-2 tracking-widest"
            >{saveTheDate.title[0]}</span
        >
        <br />
        <span class="save-the-date-text-item italic lowercase inline-block"
            >{saveTheDate.title[1]}</span
        >
        <span class="save-the-date-text-item uppercase inline-block tracking-wider"
            >{saveTheDate.title[2]}</span
        >
    </div>
    <div class="text-center font-serif font-semibold text-3xl uppercase mb-10 text-black-60">
        <span>{saveTheDate.subtitle}</span>
    </div>
    <div class="text-center text-xl text-black-60">
        <span id="countup" />
    </div>
</PageSection>
