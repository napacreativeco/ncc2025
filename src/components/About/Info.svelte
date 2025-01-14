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
            <p>Our websites are built to scale and resize based on the device it's being viewed on. Our goal is to create a seamless experience for your customers that will boost your business and bring you closer to success.</p>
        </div>
    </div>

</section>