<script lang="ts">
    import { toast, toastType } from '$lib/stores/toast'
    import { fade } from 'svelte/transition'
    import WarnIcon from '$lib/icons/warn.svg'
    import CheckIcon from '$lib/icons/check.svg'
    import CloseIcon from '$lib/icons/close.svg'

    const resetToast = () => toast.update(() => '')
</script>

{#if $toast !== ''}
    <div transition:fade class="toast toast-end z-[999] w-full md:w-auto">
        <div
            class="alert shadow-2xl border border-opacity-40"
            class:border-success-content={$toastType === 'success'}
            class:border-error-content={$toastType === 'error'}
            class:alert-success={$toastType === 'success'}
            class:alert-error={$toastType === 'error'}>
            <div class="flex justify-between w-full md:w-auto">
                <!-- icon and message -->
                <span class="inline-block">
                    <span class="inline-block align-bottom">
                        {#if $toastType === 'success'}
                            <CheckIcon class="w-5 mb-1 inline-block fill-success-content" />
                        {:else}
                            <WarnIcon class="w-5 mb-1 inline-block fill-warning-content" />
                        {/if}
                    </span>
                    <span class="inline-block align-bottom">{$toast}</span>
                </span>
                <!-- close -->
                <span>
                    <span class="inline-block ml-8">
                        <button
                            class="btn btn-ghost btn-circle btn-xs align-bottom"
                            on:click={resetToast}>
                            <CloseIcon class="w-4" />
                        </button>
                    </span>
                </span>
            </div>
        </div>
    </div>
{/if}
