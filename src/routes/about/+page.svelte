<script>
	import Header from '../../components/About/Header.svelte';
	import Info from '../../components/About/Info.svelte';
	import Contact from '../../components/About/Contact.svelte';
</script>

<svelte:head>
	<title>About | Napa Creative Co.</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<div id="about-page">
	<Header />
	<Info />
	<Contact id="contact-info" />
</div>