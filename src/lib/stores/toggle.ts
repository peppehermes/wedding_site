import { writable } from 'svelte/store'

// toggle store from https://svelte.dev/repl/a3cb054398a94698a4cfe4c44f33b923?version=3.37.0
const toggle = (initState: boolean) => {
    const {subscribe, update} = writable(initState);
    const toggle = () => update(s => !s)
    return {subscribe, toggle}
}

export const createToggle = (state: boolean) => toggle(state)
