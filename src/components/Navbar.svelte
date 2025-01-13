<style lang="scss">
	@import '../scss/navbar.scss';
</style>

<script>
	import CommissionStatus from "./Snippets/CommissionStatus.svelte";
	import Arrow from "./Icons/Arrow.svelte";
	import { siteInfo } from "../data/site";
	import { pageItems } from '../data/pages';
	import { onMount } from 'svelte';
	import { page } from '$app/stores'; 
	import Home from "./Icons/Home.svelte";

	$: currentPath = $page.url.pathname; 

	let navLength = pageItems.length;
</script>


<header id="navbar">

	<div class="bold logo">
		<a href="/" title="{siteInfo.name}">{siteInfo.name}</a>
	</div>

	<CommissionStatus />

	<nav class="navigation">

		<a href="/" title="Home" style="display: flex; align-items: center;">
			<Home />
		</a>
		
		{#each pageItems as item}
			<a class="text" href="{item.url}" title={item.title} class:active={$page.url.pathname === item.url}>
				{item.title}
			</a>
			{#if item.id != navLength}
				<span>//</span>
			{/if}
		{/each}
	</nav>

	<div class="get-in-touch">
		<a class="button" href="/contact" title="Get in Touch">Get in Touch</a>
	</div>
	
</header>