<script lang="ts">
    import { configRepo } from '$src/lib/repos/config'
    import FormField from './FormField.svelte'
    export let name: string | number | undefined | null
    export let meal: string | number | undefined | null
    export let index: number

    let meals = configRepo.getMeals()
</script>

<div class="flex flex-wrap -mx-3 mb-4">
    <FormField bind:data={name} label="Guest {index + 1} name" fieldType="text" />
    <FormField fieldType="select" bind:data={meal} label="Guest {index + 1} meal">
        {#each meals as meal}
            <option value={meal}>{meal}</option>
        {/each}
    </FormField>
</div>
