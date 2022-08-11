<script lang="ts">
    import '../styles/app.css'
    import Footer from '$lib/components/layout/Footer.svelte'
    import Toast from '$lib/components/elements/Toast.svelte';
    import toast, { Toaster } from 'svelte-french-toast';

    
</script>

<Toaster />
<Toast />
<slot />
<Footer />
