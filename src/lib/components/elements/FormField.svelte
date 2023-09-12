<script lang="ts">
    import type { FieldType } from '$lib/types'
    import HeartIcon from '$lib/icons/heart.svg'

    export let fieldType: FieldType = 'text'
    export let data: string | number | undefined | null = null
    export let label: string
    export let checked = true
    export let min = 1
    export let max = 6
</script>

<div class="w-full px-3">
    {#if fieldType === 'text'}
        <label class="rsvp-label" for={label}>{label}</label>
        <input
            bind:value={data}
            class="rsvp-input"
            type="text"
            placeholder={label}
            name={label} />
    {/if}
    {#if fieldType === 'checkbox'}
    <div class="flex gap-2 py-3 mb-3">
        <input
            bind:checked={checked}
            class="newsletter-checkbox peer"
            type="checkbox"
            name={label}
            id={label}/>
        <label class="inline-block pl-[0.15rem] hover:cursor-pointer text-xs font-bold uppercase" for={label}>{label}</label>
        <HeartIcon class="absolute w-4 h-4 fill-crail-800 hidden peer-checked:block" />
    </div>
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
    .newsletter-checkbox {
        @apply appearance-none hover:cursor-pointer w-4 h-4 relative border-2 border-crail-600 rounded-sm bg-white accent-crail-500 shrink-0 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-crail-100
    }
</style>
