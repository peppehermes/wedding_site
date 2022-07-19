<script lang="ts">
    import dayjs from 'dayjs'
    import PageSection from '$com/layout/PageSection.svelte'
    import { saveTheDate } from '$data/strings'

    const weddingDay = dayjs('2023-10-08')
    let today = dayjs()
    let diff = weddingDay.diff(today, 'days') + 1
    let dayDays = diff == 1 ? 'day' : 'days'
</script>

<PageSection ref="saveTheDate" lg primary bordered>
    <div class="text-center my-10 font-serif font-bold text-5xl">
        <span class="uppercase inline-block mb-2 tracking-widest">{saveTheDate.title[0]}</span>
        <br />
        <span class="italic lowercase inline-block">{saveTheDate.title[1]}</span>
        <span class="uppercase inline-block tracking-wider">{saveTheDate.title[2]}</span>
    </div>
    <div class="text-center font-serif font-semibold text-3xl uppercase mb-10 text-black-60">
        <span>{saveTheDate.subtitle}</span>
    </div>
    <div class="text-center text-xl text-black-60">
        <span>...in {diff} {dayDays}</span>
    </div>
</PageSection>
