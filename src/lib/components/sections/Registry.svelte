<script lang="ts">
    import PageSection from '$lib/components/layout/PageSection.svelte'
    import { configRepo } from '$src/lib/repos/config'
    import { copy } from 'svelte-copy'
    import { stringsRepo } from '$src/lib/repos/strings'
    import toast from 'svelte-french-toast'
    import { toastOptions, ibanIconTheme } from '../forms/handlers'

    let providers = configRepo.getRegistry()
    let config = configRepo.getConfig()
    const toastMessages = stringsRepo.getToastMessages()

</script>

<PageSection
    title="Idee Regalo"
    ref="registry"
    lg
    bordered={config.showRsvp}
    primary={config.showRsvp}>
    <div class="registry-content">
        <p class="body-text">
            Siamo entusiasti di avervi insieme a noi per celebrare il nostro giorno più importante,
            e questo è già il più bel regalo che possiate farci!
            <br />
            Ma se voleste contribuire alla nostra futura vita insieme o alla nostra luna di miele (il
            Giappone ci aspetta!) potete farlo al seguente IBAN
        </p>
        <ul>
            {#each providers as provider}
                <li>
                    {#if provider.description === ''}
                        <a
                            href={null}
                            use:copy={'Hello from alert'}
                            on:svelte-copy={(event) => alert(event.detail)}
                            target="_blank">{provider.name}</a>
                    {:else}
                        <a
                            class="cursor-pointer"
                            href={null}
                            use:copy={provider.name}
                            on:svelte-copy={(event) =>
                                toast.success(toastMessages.iban.success, {
                                    ...toastOptions,
                                    ...ibanIconTheme,
                                })}
                            target="_blank">{provider.name}</a>
                        — {provider.description}
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
</PageSection>

<style lang="postcss" global>
    .registry-content ul {
        @apply text-center;
    }
    .registry-content ul li {
        @apply leading-8 font-light;
    }
    .registry-content ul li a {
        @apply font-normal text-crail-500 hover:text-crail-900;
    }
</style>
