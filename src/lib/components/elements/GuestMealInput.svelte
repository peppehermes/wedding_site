<script lang="ts">
    import { configRepo } from '$src/lib/repos/config'
    import { stringsRepo } from '$src/lib/repos/strings'
    import FormField from './FormField.svelte'
    export let name: string | number | undefined | null
    export let meal: string | number | undefined | null
    export let index: number

    let meals = configRepo.getMeals()
    const guestLabels = stringsRepo.getGuestLabels()
</script>

<div class="flex flex-wrap -mx-3 mb-4">
    <FormField bind:data={name} label="{guestLabels.guestLabel} {index + 1}" fieldType="text" />
    <FormField bind:data={meal} label="{guestLabels.menuLabel} {index + 1}" fieldType="text" />
</div>
