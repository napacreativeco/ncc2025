<style>
    @import '../../scss/About/about-info.scss';
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

<section id="more-info" bind:this={element}>

    <div class="left">
        <div class="title">
            <h2>Innovative. Responsive.<br />Reliable.</h2>
        </div>
    </div>

    <div class="right">
        <div class="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        </div>
    </div>

</section>