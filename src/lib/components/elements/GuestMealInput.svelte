<script lang="ts">
    import FormField from './FormField.svelte'
    import { meals } from '$data/data'
    export let name: string
    export let meal: string
    export let index: number
</script>

<div class="flex flex-wrap -mx-3 mb-4">
    <FormField bind:data={name} label="Guest {index + 1} name" fieldType="text" />
    <FormField fieldType="select" bind:data={meal} label="Guest {index + 1} meal">
        {#each meals as meal}
            <option value={meal}>{meal}</option>
        {/each}
    </FormField>
</div>
