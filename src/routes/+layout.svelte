<script lang="ts">
    import '../styles/app.css'
    import Footer from '$lib/components/layout/Footer.svelte'
    import { Toaster } from 'svelte-french-toast';

    
</script>

<Toaster />
<slot />
<Footer />
