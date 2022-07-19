<script lang="ts">
    import { scrollIntoView, scrollToTop } from '$src/data/functions'
    import { toggleSections, canRsvp } from '$data/toggles'
    import MenuIcon from '$icon/menu.svg?component'

    let navIconSize = 28

    type navItem = {
        label: string
        href: string
        display: boolean
    }
    let items: navItem[] = [
        // our story
        {
            label: 'Our Story',
            href: '#our-story',
            display: toggleSections.story,
        },
        // events
        {
            label: 'Events',
            href: '#events',
            display: toggleSections.events,
        },
        // photos
        {
            label: 'Photos',
            href: '#photos',
            display: toggleSections.photos,
        },
        // registry
        {
            label: 'Registry',
            href: '#registry',
            display: toggleSections.registry,
        },
        {
            label: 'Venue',
            href: '#venue',
            display: toggleSections.map,
        },
    ]

    const buttonText = () => {
        if (canRsvp) {
            return 'RSVP'
        } else {
            return 'Stay Updated'
        }
    }

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
    bind:clientHeight
>
    <div class="navbar-start">
        {#if items.filter((e) => e.display).length != 0}
            <div class="dropdown" id="dropdown-container">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label tabindex="0" class="btn btn-ghost lg:hidden" id="menu-button">
                    <!-- <MaterialIcon icon="menu" /> -->
                    <MenuIcon class="w-6" />
                </label>
                <ul
                    tabindex="0"
                    id="dropdown-menu"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {#each items as { label, href, display }}
                        {#if display}
                            <li>
                                <a
                                    {href}
                                    class="hover:cursor-pointer"
                                    on:click|preventDefault={scrollIntoView}>{label}</a
                                >
                            </li>
                        {/if}
                    {/each}
                </ul>
            </div>
        {/if}

        <!-- svelte-ignore a11y-missing-attribute -->
        <a
            class="btn btn-ghost rounded-full opacity-70"
            on:click|preventDefault={scrollToTop}
        >
            <div class="rounded-full w-8">
                <img src="/moon.png" height={navIconSize} width={navIconSize} alt="Nav Logo" />
            </div>
        </a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
            {#each items as { label, href, display }}
                {#if display}
                    <li>
                        <a
                            {href}
                            class="hover:cursor-pointer"
                            on:click|preventDefault={scrollIntoView}>{label}</a
                        >
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
    <div class="navbar-end text-right">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a href="#rsvp" class="btn btn-primary text-white" on:click|preventDefault={scrollIntoView}
            >{buttonText()}</a
        >
    </div>
</div>
