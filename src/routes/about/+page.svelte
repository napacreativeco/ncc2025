<script>
	import Header from '../../components/About/Header.svelte';
	import Info from '../../components/About/Info.svelte';
	import Contact from '../../components/About/Contact.svelte';
</script>

<svelte:head>
	<title>About | Napa Creative Co.</title>
	<meta name="description" content="We specialize in creating custom, responsive websites that help businesses grow and succeed online. Based in Napa, California." />

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GV0SYG877E"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-GV0SYG877E');
    </script>
</svelte:head>

<div id="about-page">
	<Header />
	<Info />
	<Contact id="contact-info" />
</div>