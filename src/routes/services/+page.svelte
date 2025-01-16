<script>
    import ServicesHeader from "../../components/Services/Header.svelte";
    import ServicesList from "../../components/Services/List.svelte";
    import ServicesLinks from "../../components/Services/Links.svelte";
</script>

<svelte:head>
	<title>Services | Napa Creative Co.</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<div class="services-page">
    <ServicesHeader />
    <ServicesList />
    <ServicesLinks />
</div>