<script>

import { fade } from "svelte/transition";
import MaterialIcon from "./MaterialIcon.svelte";

export let notificationClass;
export let message;
export let close;

</script>

<div transition:fade class="alert {notificationClass} shadow-lg mt-8">
    <div>
        {#if notificationClass == "alert-success"}
            <MaterialIcon icon="check" />
        {:else}
            <MaterialIcon icon="error" />
        {/if}
        <span>{message}</span>
    </div>
    <div class="flex-none">
        <button
            class="btn btn-sm btn-ghost"
            on:click|preventDefault={close}>Close</button
        >
    </div>
</div>
