<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
</script>

<PageSection ref="our-story" lg title="Our Story">
    <div class="story-content">
        <p>
            We first met like most millennials, online, in the Winter of 2015. We met in person on
            New Year's Eve and officially began our relationship New Year's Day 2016.
        </p>

        <p>
            Nearly seven years worth of memories later, we've traveled to to the other side of the
            world and back, introduced two perfect poodles to our family, and had each others backs
            through the inevitable ups and downs of life.
        </p>

        <p>
            On November 6 2021, I <em>finally</em> proposed with the help of Joni's family, taking her
            completely by surprise, and Joni said yes.
        </p>
        <img src="/images/proposal.gif" alt="Cory proposes to Joni" />
        <h3>We can't wait to celebrate our wedding day with you!</h3>
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
