<script>
    import Hero from '../components/Homepage/Hero.svelte';
    import Overview from '../components/Homepage/Overview.svelte';
    import Expertise from '../components/Homepage/Expertise.svelte';
    //import Projects from '../components/Homepage/Projects.svelte';
    import Testimonials from '../components/Homepage/Testimonials.svelte';

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-GV0SYG877E');
</script>

<style>
    .homepage {
        display: flex;
        flex-direction: column;
        gap: 100px;
    }

    @media screen and (max-width: 767px) {
        .homepage {
            gap: 40px;
        }
    }
</style>

<svelte:head>
	<title>Home | Napa Creative Co.</title>
	<meta name="description" content="Elevate your online presence with our premier web design and development services in Napa, California. Specializing in custom websites, responsive design, and cutting-edge solutions to help your business grow." />
</svelte:head>

<div class="homepage">
    <Hero />
    <Overview />
    <Expertise />
    <Testimonials />
</div>
