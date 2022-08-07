<script lang="ts">
    export let loading: boolean;
    export let disabled: boolean;
    export let click: svelte.JSX.MouseEventHandler<HTMLButtonElement>;
    export let label = "Submit";
</script>

<button
    class="btn btn-success w-full text-white"
    class:loading
    {disabled}
    on:click|preventDefault={click}>{label}</button
>
