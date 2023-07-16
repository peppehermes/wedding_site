<script lang="ts">
    import dayjs from 'dayjs'
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import { stringsRepo } from '$src/lib/repos/strings'
    import { configRepo } from '$src/lib/repos/config'

    let saveTheDate = stringsRepo.getSaveTheDate()
    let config = configRepo.getConfig()

    let weddingDay = dayjs(config.weddingDate)
    let today = dayjs()
    let diff = weddingDay.diff(today, 'days') + 1
    let dayDays = diff == 1 ? ' giorno' : ' giorni'
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
        <span>...tra </span> <span>{diff}</span> <span>{dayDays}</span>
    </div>
</PageSection>
