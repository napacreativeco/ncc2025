<script>
	import Header from "../../components/Experience/Header.svelte";
  import Slides from "../../components/Experience/Slides.svelte";
	import Blocks from "../../components/Experience/Blocks.svelte";

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GV0SYG877E');
</script>

<svelte:head>
	<title>Experience | Napa Creative Co.</title>
	<meta name="description" content="Explore the professional experience of our team, showcasing expertise, skills, and accomplishments that drive our success. Learn how our background supports the quality of our services." />
</svelte:head>

<svelte:document />

<div id="experience-page">
	<Header />
    <Slides />
	<Blocks />
</div>