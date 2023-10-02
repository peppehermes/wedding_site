<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
</script>

<svelte:head>
    <title>Newsletter</title>
</svelte:head>

<PageSection title="Newsletter precedenti" ref="newsletter" lg classes="min-h-screen" image>
    <div class="max-w-prose mx-auto">
        <ul>
            <li>
                <a href="/newsletter/one">
                    <h2 class="card-title justify-center newsletter-link">Newsletter #1</h2>
                </a>
            </li>
            <li>
                <a href="/newsletter/two">
                    <h2 class="card-title justify-center newsletter-link">Newsletter #2</h2>
                </a>
            </li>
        </ul>
    </div>
</PageSection>

<style lang="postcss">
    .newsletter-link {
        @apply text-crail-900 underline text-xl;
    }
</style>
