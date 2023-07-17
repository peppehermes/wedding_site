<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
</script>

<PageSection ref="our-story" lg title="Our Story">
    <div class="story-content">
        <p>
            
        </p>

        <p>
            
        </p>

        <p>
            
        </p>
        <img src="/images/proposal.gif" alt="" />
        <h3></h3>
    </div>
</PageSection>

<style lang="postcss" global>
    .proposal-img {
        border-radius: 16px;
    }

    .story-content p {
        @apply leading-10 text-lg font-light mb-4 md:mb-6 indent-8 max-w-prose mx-auto;
    }

    .story-content img {
        @apply mx-auto proposal-img my-8;
    }

    .story-content h3 {
        @apply text-center font-serif text-lg;
    }
</style>
