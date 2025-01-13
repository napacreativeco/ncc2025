<style lang="scss">
    @import '../../scss/About/about-header.scss';
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

<div id="about-header" bind:this={element}>

    <div class="left">
        <div class="image">
            <img src="/images/three-screen.png" alt="Napa Creative Co." />
        </div>
    </div>

    <div class="right">
        <div class="title">
            <span>Napa Creative Co.</span>
            <h2>
                We create this and that
            </h2>
        </div>


        <div class="blocks">
            <div class="block">
                <h3>Years Experience</h3>
                <h4>8+</h4>
                <p>Developing quality websites</p>
            </div>
            <div class="block">
                <h3>Clients Helped</h3>
                <h4>20+</h4>
                <p>Successful projects completed</p>
            </div>
        </div>
    </div>

</div>