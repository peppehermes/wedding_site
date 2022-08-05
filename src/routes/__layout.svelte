<script lang="ts">
    import '../styles/app.css'
    import Footer from '$com/layout/Footer.svelte'
    import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<SvelteToast />
<slot />
<Footer />
