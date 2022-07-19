<script lang="ts">
    import '../styles/app.css'
    import Navigation from '$com/layout/Navigation.svelte'
    import Footer from '$com/layout/Footer.svelte'
</script>

<svelte:head>
    <title>Joni & Cory are getting hitched!</title>
</svelte:head>

<Navigation />
<slot />
<Footer />
