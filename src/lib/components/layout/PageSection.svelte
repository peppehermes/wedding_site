<script lang="ts">
    import MoonBg from '$lib/icons/moon-bg.svg'

    export let ref: string
    export let classes: string = ''
    export let title: string | undefined = undefined

    export let sm: boolean = false
    export let md: boolean = false
    export let lg: boolean = false

    export let primary: boolean = false
    export let raspberry: boolean = false
    export let eucalyptus: boolean = false
    export let peach: boolean = false

    export let bordered: boolean = false
    export let image: boolean = false
</script>

<section
    id={ref}
    class="{classes} relative"
    class:bg-primary={primary}
    class:bg-raspberry={raspberry}
    class:bg-eucalyptus={eucalyptus}
    class:bg-peach={peach}
    class:bg-opacity-10={primary || raspberry || eucalyptus || peach}
    class:border-y={bordered}
    class:border-primary={bordered && primary}
    class:border-error={bordered && raspberry}
    class:border-success={bordered && eucalyptus}
    class:border-warning={bordered && peach}
    class:py-12={sm || md || lg}
    class:px-6={sm || md || lg}
    class:md:py-24={md}
    class:md:px-11={md}
    class:lg:py-36={md}
    class:lg:px-16={md}
    class:md:py-18={lg}
    class:md:px-39={lg}
    class:lg:py-24={lg}
    class:lg:px-72={lg}
    class:bg-image={image}>
    {#if title != undefined}
        <h2 class="text-center text-3xl font-serif font-semibold mb-8">
            {title}
        </h2>
    {/if}
    <slot />
    {#if image}
        <div
            class="absolute bottom-0 right-0 w-full -z-10 flex justify-end"
            class:fill-lavender={primary}
            class:fill-raspberry={raspberry}
            class:fill-eucalyptus={eucalyptus}
            class:fill-peach={peach || (!primary && !raspberry && !eucalyptus)}>
            <MoonBg class="w-[275px] mr-0 sm:mr-4 md:mr-12 lg:mr-24 opacity-60" />
        </div>
    {/if}
</section>
