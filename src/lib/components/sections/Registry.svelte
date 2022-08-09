<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import SvelteMarkdown from 'svelte-markdown'
    export let registry: string
</script>

<PageSection title="Registry" ref="registry" lg bordered>
    <div class="registry-markdown">
        <SvelteMarkdown source={registry} />
    </div>
</PageSection>

<style lang="postcss" global>
    .registry-markdown p {
        @apply leading-10 text-lg font-light mb-8 indent-8;
    }

    .registry-markdown ul {
        @apply text-center;
    }
    .registry-markdown ul li {
        @apply leading-8 font-light;
    }
    .registry-markdown ul li a {
        @apply font-normal text-lavender-900 hover:text-raspberry-600;
    }

</style>
