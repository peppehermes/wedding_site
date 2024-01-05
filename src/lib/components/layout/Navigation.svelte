<script lang="ts">
    import { scrollIntoView, scrollToTop } from '$lib/utils'
    import MenuIcon from '$lib/icons/menu.svg'
    import LogoIcon from '$lib/icons/logo.svg'
    import { navRepo } from '$src/lib/repos/nav'
    import { stringsRepo } from '$src/lib/repos/strings'
    import { configRepo } from '$src/lib/repos/config'
    import { weddingIsOver } from '$lib/utils'

    let config = configRepo.getConfig()
    let navItems = navRepo.getNavItems()
    let rsvpButtonText = stringsRepo.getRsvpButtonText()

    let previousY: number
    let currentY: number
    let clientHeight: number

    const deriveDirection = (y: number) => {
        const direction = !previousY || previousY < currentY ? 'down' : 'up'
        previousY = y
        return direction
    }

    $: scrollDirection = deriveDirection(currentY)
    $: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4
</script>

<svelte:window bind:scrollY={currentY} />

<div
    class="navbar bg-base-100/80 sticky top-0 backdrop-blur-sm transition-transform ease-in z-50"
    class:motion-safe:-translate-y-full={offscreen}
    bind:clientHeight>
    <div class="navbar-start">
        {#if navItems.length != 0}
            <div class="dropdown" id="dropdown-container">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <label
                    tabindex="0"
                    class="btn btn-ghost btn-circle lg:hidden swap swap-rotate"
                    id="menu-button">
                    <MenuIcon class="w-6 fill-base-content" />
                </label>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul
                    tabindex="0"
                    id="dropdown-menu"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <!-- dropdown menu -->
                    {#each navItems as { label, href }}
                        <li>
                            <a {href} on:click|preventDefault={scrollIntoView}>{label}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}

        <!-- svelte-ignore a11y-missing-attribute -->
        <button
            class="btn btn-ghost btn-circle rounded-full opacity-70"
            on:click|preventDefault={scrollToTop}>
            <LogoIcon class="w-8" />
        </button>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
            {#each navItems as { label, href }}
                <li>
                    <a {href} on:click|preventDefault={scrollIntoView}>{label}</a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="navbar-end text-right">
        {#if config.showRsvp  && !weddingIsOver()}
            <a
                href="#rsvp"
                class="btn btn-primary text-white"
                on:click|preventDefault={scrollIntoView}>{rsvpButtonText}</a>
        {/if}
    </div>
</div>
