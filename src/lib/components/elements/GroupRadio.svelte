<script>
    export let label;
    export let group;
    export let value;
    export let name;
</script>

<div class="form-control">
    <label class="label cursor-pointer">
        <span class="label-text">{label}</span>
        <input
            type="radio"
            {name}
            class="radio radio-primary"
            bind:group={group}
            {value}
        />
    </label>
</div>
