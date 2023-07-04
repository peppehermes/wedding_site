<script lang="ts">
    import type { FieldType } from '$lib/types'
    export let fieldType: FieldType = 'text'
    export let data: string | number | undefined | null
    export let label: string
    export let min = 1
    export let max = 6
</script>

<div class="w-full md:w-1/2 px-3">
    {#if fieldType === 'text'}
        <label class="rsvp-label" for={label}>{label}</label>
        <input
            bind:value={data}
            class="rsvp-input"
            type="text"
            placeholder={label}
            name={label} />
    {/if}
    {#if fieldType === 'number'}
        <label class="rsvp-label" for="Phone">{label}</label>
        <input
            bind:value={data}
            class="rsvp-input"
            type="number"
            placeholder={label}
            name={label}
            {min}
            {max} />
    {/if}
    {#if fieldType === 'select'}
        <label class="rsvp-label" for={label}>
            {label}
        </label>
        <select name={label} class="select rsvp-input" bind:value={data}>
            <option disabled selected>Select {label}</option>
            <slot />
        </select>
    {/if}
</div>

<style lang="postcss">
    .rsvp-label {
        @apply block uppercase tracking-wide text-xs font-bold mb-2;
    }
    .rsvp-input {
        @apply appearance-none block w-full rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none bg-neutral focus:bg-white;
    }
</style>
