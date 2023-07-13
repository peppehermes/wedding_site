<script lang="ts">
    export let loading: boolean
    export let disabled: boolean
    export let label = 'Conferma'
</script>

<button
    class="btn btn-primary w-full text-white"
    class:loading
    {disabled}>
    {label}
</button>
