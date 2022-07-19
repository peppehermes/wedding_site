<script lang="ts">
    import PageSection from '$com/layout/PageSection.svelte'

    import { paragraphClasses } from '$data/classes'
</script>

<PageSection ref="our-story" lg title="Our Story">
    <p class="{paragraphClasses} indent-8">
        We first met in online in the Winter of 2015. We met in person on New Year's Eve and
        officially began our relationship New Year's Day of 2016.
    </p>

    <p class="{paragraphClasses} indent-8">
        Nearly six years worth of memories later and we've traveled to South Korea, introduced 2
        perfect poodles to our family, and ...... On November 6<sup>th</sup> 2021, I <s>finally</s> proposed
        with the help of Joni's family, taking her completely by surprise, and Joni said yes.
    </p>

    <img class="mx-auto proposal-img my-8" src="/proposal.gif" alt="Animated GIF of the proposal" />

    <h6 class="text-center font-serif text-lg">
        We can't wait to celebrate our wedding day with you!
    </h6>
</PageSection>

<style>
    .proposal-img {
        border-radius: 16px;
    }
</style>
