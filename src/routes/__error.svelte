<script context="module">
    // @ts-ignore
    export function load({ error, status }) {
        return {
            props: {
                error,
                status,
            },
        }
    }
</script>

<script lang="ts">
    import { page } from '$app/stores'
    import Navigation from '$lib/components/layout/Navigation.svelte'
    export let error: Error
    export let status: number

    $: titleText =
        status === 404 ? `${status} - Not found | joniandcory.wedding` : `${status} - Error | joniandcory.wedding`
</script>

<svelte:head>
    <title>{titleText}</title>
</svelte:head>

<Navigation config={undefined} />

<div class="flex flex-col min-h-[80vh] justify-center">
    <div class="text-center flex flex-col" class:text-raspberry={status !== 404}>
        {#if status === 404}
            <span
                class="inline-block text-8xl mt-4 mb-8 text-base-content/60 tracking-[-1rem] -ml-3"
                >(·_·)</span>
            <h1 class="text-5xl mb-8">{status}</h1>
            <p class="mb-8">a page wan't found at {$page.url.pathname}</p>
        {:else}
            <span class="inline-block text-8xl mt-4 mb-8 text-raspberry/60 tracking-[-1rem] -ml-3"
                >(x_x)</span>
            <h1 class="text-5xl mb-8">{status}</h1>
            <p class="mb-8">{error.message}</p>
        {/if}
    </div>
</div>

<style>
</style>
