<script lang="ts">
    import PageSection from '$com/layout/PageSection.svelte'
    import SvelteMarkdown from 'svelte-markdown'

    export let story: string
</script>

<PageSection ref="our-story" lg title="Our Story">
    <div class="story-markdown">
        <SvelteMarkdown source={story} />
    </div>
</PageSection>

<style lang="postcss" global>
    .proposal-img {
        border-radius: 16px;
    }

    .story-markdown p {
        @apply leading-10 text-lg font-light mb-4 md:mb-6 indent-8 max-w-prose mx-auto;
    }

    .story-markdown img {
        @apply mx-auto proposal-img my-8;
    }

    .story-markdown h3 {
        @apply text-center font-serif text-lg;
    }
</style>
