<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import config from '$data/config'
</script>

<PageSection title="Registry" ref="registry" lg bordered>
    <p class="leading-10 text-lg font-light mb-8 indent-8">
        We are thrilled that you are coming to celebrate with us — and that's the best gift of all!
        But, if you feel like you would like to help us spruce up our place, we've registered with
        the following:
    </p>
    <ul class="text-center">
        {#each config.registry.providers as p}
            <li class="leading-8">
                <a href={p.url}>
                    <span class="text-lavender-900 hover:text-raspberry-600">{p.name}</span>
                    <span class="font-light"> — {p.description}</span>
                </a>
            </li>
        {/each}
    </ul>
</PageSection>
