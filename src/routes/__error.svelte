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
</script>

<Navigation config={undefined} />
{#if status === 404}
    <div class="text-center">
        <span class="inline-block text-8xl mt-4 mb-8 text-base-content/60 tracking-[-1rem] -ml-3"
            >(·_·)</span
        >
        <h1 class="text-5xl mb-8">{status}</h1>
        <p class="mb-8">a page wan't found at {$page.url.pathname}</p>
    </div>
{:else}
    <div class="text-center text-raspberry">
        <span class="inline-block text-8xl mt-4 mb-8 text-raspberry/60 tracking-[-1rem] -ml-3"
            >(x_x)</span
        >
        <h1 class="text-5xl mb-8">{status}</h1>
        <p class="mb-8">{error.message}</p>
    </div>
{/if}
