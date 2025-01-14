<script>
    import { siteInfo } from "../data/site";
    import { pageItems } from '../data/pages';
    import { page } from '$app/stores'; 
    import { navigating } from '$app/stores';
    import Napa from "./Icons/Napa.svelte";
    import Close from "./Icons/Close.svelte";
    import CommissionStatus from "./Snippets/CommissionStatus.svelte";
    import Hamburger from "./Hamburger.svelte";

    $: currentPath = $page.url.pathname; 

    $: if($navigating) close();

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
                <svg viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 4.5H1V13.5H6.5M6.5 4.5V13.5M6.5 4.5L15.5 1V17L6.5 13.5M19 5.5H22.5M18.5 9.5H25.5M19 13.5H22.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                                   
            </div>
            <div class="bottom">
                <h2>Get in touch</h2>
                <p>Reach out to us to learn more about how we can help you</p>
                <a href="/about" title="Contact">Contact</a>
            </div>
        </div>

    </div>

</div>