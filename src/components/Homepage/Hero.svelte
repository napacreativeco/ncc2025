<style lang="scss">
    @import '../../scss/Homepage/hero.scss';
    @import '../../scss/Homepage/hero--mobile.scss';

    img.hidden {
        opacity: 0;
        pointer-events: none;
    }
</style>

<script>
    import { onMount } from 'svelte';
    import Napa from '../Icons/Napa.svelte';

    let element;

    let images = [
        '/images/earth-sessions--laptop.png',
        '/images/task-matte--layout.png',
        '/images/audible-treats--laptop-mockup.png',
        '/images/infused-wireframe.jpg'
    ];
    
    let currentIndex = 0;

    // Automatically cycle through images every 3 seconds
    const cycleImages = () => {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
        }, 2000);
    };

    cycleImages();

    onMount(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    element.classList.add('in-viewport');
                } else {
                    element.classList.remove('in-viewport');
                }
            });
        });

        observer.observe(element);

        return () => observer.disconnect();


        
    });



    
</script>

<svelte:document />

<section id="hero" bind:this={element}>
    <div class="header">
        <div class="description">
            <div class="icon">
                <Napa />
            </div>
            <h2>
                Quality Website Design and Development based in Napa, California
            </h2>
        </div>
        <div class="headline">
            <h1>
                Experience Design.<br />
                Website Development.<br />
                Reliable Maintenance.
            </h1>
        </div>
    </div>
    
        {#each images as image, index}
            <div class:hidden={index !== currentIndex} class="image" style="background-image: url({image}); background-size: cover; background-position: center center;">
            </div>
        {/each}
</section>