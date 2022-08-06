<script lang="ts">
    import '../styles/app.css'
    import Footer from '$lib/components/layout/Footer.svelte'
    import Toast from '$lib/components/elements/Toast.svelte';
    
</script>

<Toast />
<slot />
<Footer />
