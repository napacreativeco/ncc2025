<script>
    import { siteInfo } from "../data/site";
    import { pageItems } from '../data/pages';
    import { page } from '$app/stores'; 
    import Napa from "./Icons/Napa.svelte";
    import Close from "./Icons/Close.svelte";
    import CommissionStatus from "./Snippets/CommissionStatus.svelte";
    import Hamburger from "./Hamburger.svelte";

    $: currentPath = $page.url.pathname; 

	let navLength = pageItems.length;

    function open() {
        let overlay = document.getElementById('navbar-overlay');
        overlay.style.display = "block" 
        setTimeout(function() {
            overlay.style.left = "0vw";
            overlay.style.right = "0vw";
        }, 200);
        
    }

    function close() {
        let overlay = document.getElementById('navbar-overlay'); 
        overlay.style.left = "100vw";
            overlay.style.right = "-100vw";

        setTimeout(function() {
            overlay.style.display = "none"
            
        }, 200);
        
    }
</script>

<svelte:document />

<style lang="scss">
    @import '../scss/navbar-mobile.scss';
</style>

<div id="navbar-mobile">
    <div class="row">
        <div class="bold logo">
            <a href="/" title="{siteInfo.name}">{siteInfo.name}</a>
        </div>
    
        <div class="menu-button" on:click={open} on:keydown={open} role="button" tabindex="0">
            <Hamburger  />
        </div>  
    </div>
</div>

<div id="navbar-overlay">

    <div class="wrap">

        <div class="close" on:click={close} on:keydown={close} role="button" tabindex="0">
            <Close />
        </div>

        <div class="top">

            <div class="icon">
                <Napa />
            </div>
    
            <div class="bold logo">
                <a href="/" title="{siteInfo.name}">{siteInfo.name}</a>
            </div>

        </div>

        <nav>
            <div class="title">
                <div class="left">
                    <h3>Links</h3>
                </div>
                <div class="right">
                    (01)
                </div>
            </div>
            <ul>
                {#each pageItems as item}
                    <li>
                        <a class="text" href="{item.url}" title={item.title} class:active={$page.url.pathname === item.url}>
                            {item.title}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>


        <div class="contact-block">
            <div class="top">
                <CommissionStatus />
            </div>
            <div class="bottom">
                <h2>Get in touch</h2>
                <p>Reach out to us to learn more about how we can help you</p>
                <a href="/about" title="Contact">Contact</a>
            </div>
        </div>

    </div>

</div>