<script lang="ts">
    export let loading: boolean
    export let disabled: boolean
    export let label = 'Conferma'
</script>

<button
    class="btn btn-success w-full text-white"
    class:loading
    {disabled}>
    {label}
</button>
