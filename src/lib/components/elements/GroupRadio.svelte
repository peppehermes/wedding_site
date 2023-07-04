<script lang="ts">
    export let label: string
    export let group: string | null
    export let value: string
    export let name: string
</script>

<div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">{label}</span>
        <input type="radio" {name} class="radio radio-primary" bind:group {value} />
    </label>
</div>
