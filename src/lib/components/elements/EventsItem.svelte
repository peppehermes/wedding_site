<script lang="ts">
    export let title;
    export let time;
    export let description;
</script>

<div class="py-4 px-8 max-w-[100%] md:max-w-[300px]">
    <h5 class="text-xl font-serif">{title}</h5>
    <p class="text-lg text-black-60">{time}</p>
    <p class="text-lg font-light text-black-60">{description}</p>
</div>
