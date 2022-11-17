<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import { configRepo } from '$src/lib/repos/config'
    
    let providers = configRepo.getRegistry()
</script>

<PageSection title="Registry" ref="registry" lg bordered>
    <div class="registry-content">
        <p>
            We are thrilled that you are coming to celebrate with us — and that's the best gift of
            all! But, if you feel like you would like to help us spruce up our place or contribute
            to our honeymoon, we've registered with the following:
        </p>
        <ul>
            {#each providers as provider}
                 <li>
                     <a href={provider.url}>{provider.name}</a> — {provider.description}
                 </li>
            {/each}
        </ul>
    </div>
</PageSection>

<style lang="postcss" global>
    .registry-content p {
        @apply leading-10 text-lg font-light mb-8 indent-8;
    }

    .registry-content ul {
        @apply text-center;
    }
    .registry-content ul li {
        @apply leading-8 font-light;
    }
    .registry-content ul li a {
        @apply font-normal text-lavender-900 hover:text-raspberry-600;
    }
</style>
