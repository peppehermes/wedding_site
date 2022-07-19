<script>
    export let loading;
    export let disabled;
    export let click;
    export let label = "Submit";
</script>

<button
    class="btn btn-success w-full text-white"
    class:loading
    {disabled}
    on:click|preventDefault={click}>{label}</button
>
