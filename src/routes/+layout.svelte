<style lang="scss">
    @import '../scss/reset.scss';
    @import '../scss/throne.scss';

    .page-container {
        position: relative;
    }
</style>

<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import Navbar from '../components/Navbar.svelte';
    import NavbarSlim from '../components/NavbarSlim.svelte';
    import NavbarMobile from '../components/NavbarMobile.svelte';
    import Footer from '../components/Footer.svelte';

	let { children } = $props();

    let navbar;
    let navbarSlim;
    let isAbove = null;
    let scrollY = 0;

    export function parallax(node, speed = 0.5) {

        const handleScroll = () => {
            node.style.transform = `translateY(${window.scrollY * speed}px)`;
        };

        window.addEventListener("scroll", handleScroll);

        return {
            destroy() {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }
</script>

<div class="page-container">

    <Navbar bind:this={navbar} />
    <NavbarSlim bind:this={navbarSlim} />
    <NavbarMobile />

    <!-- <div class="parallax-container" use:parallax={0.7}> -->
     <div>
        {@render children()}
        <Footer />
    </div>

</div>