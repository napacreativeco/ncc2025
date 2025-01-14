<style lang="scss">
	@import '../scss/navbar-slim.scss';
</style>

<script>
    import { onMount } from 'svelte';
    import Arrow from "./Icons/Arrow.svelte";
    import { pageItems } from '../data/pages';
    import { siteInfo } from "../data/site";
    import { page } from '$app/stores'; 
    import Napa from './Icons/Napa.svelte';

    $: currentPath = $page.url.pathname; 

    let scrollTop = 0;
    let navSlim;

    onMount(() => {
        const handleScroll = () => {
            scrollTop = window.scrollY;

            if (scrollTop > 500) {
                //navSlim.style.display = "grid";
                navSlim.classList.add('show');
            } else {
               // navSlim.style.display = "none";
               navSlim.classList.remove('show');
            }

            //console.log(scrollTop);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<header id="navbar-slim" bind:this={navSlim}>

    <div class="bold logo">
		<a href="/" title="{siteInfo.name}">
            <Napa />
            {siteInfo.name}
        </a>
	</div>

	<nav class="navigation">
		<span>
			Navigation
		</span> 
		{#each pageItems as item}
			<a class="text" href="{item.url}" title={item.title} class:active={$page.url.pathname === item.url}>
                {item.title}
            </a>
		{/each}
	</nav>

	<div class="get-in-touch">
		<Arrow />
		<a href="/contact" title="Get in Touch">Get in Touch</a>
	</div>

</header>

<!-- <svelte:window bind:scrollY={scrollTop} /> -->