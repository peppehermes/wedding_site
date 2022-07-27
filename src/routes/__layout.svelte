<script lang="ts">
    import '../styles/app.css'
    import Navigation from '$com/layout/Navigation.svelte'
    import Footer from '$com/layout/Footer.svelte'
    import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<SvelteToast />
<slot />
<Footer />
