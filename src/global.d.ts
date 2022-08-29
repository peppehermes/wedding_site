declare module '$lib/icons/*.svg' {
    import type { SvelteComponentType } from 'svelte'

    const content: SvelteComponentType
    export default content
}

declare module '*.svg?component' {
    import type { SvelteComponentType } from 'svelte'

    const content: SvelteComponentType
    export default content
}

declare module '*.svg?src' {
    const content: string
    export default content
}

declare module '*.svg?url' {
    const content: string
    export default content
}

declare module 'parse-address'
