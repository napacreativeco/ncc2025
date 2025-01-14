<style lang="scss">
    @import '../../scss/Experience/experience-header.scss';
</style>

<script>
    import { onMount } from 'svelte';

    let element;

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

<section id="experience-header" bind:this={element}>

    <div class="left">
        <h1>Experience</h1>
    </div>

    <div class="right">
        <p>We've worked with a ton of promising companies, artists, and entrepreneurs to elevate their online presence.</p>
    </div>

</section>