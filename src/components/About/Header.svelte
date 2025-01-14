<style lang="scss">
    @import './css/about-header.scss';
    @import './css/about-header--mobile.scss';
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
                We design and develop memorable web experiences that utilize the industries latest tools and technologies.
            </h2>
        </div>


        <div class="blocks">
            <div class="block">
                <h3>Years Experience</h3>
                <h4>10+</h4>
                <p>Developing quality websites</p>
            </div>
            <div class="block">
                <h3>Clients Helped</h3>
                <h4>30+</h4>
                <p>Successful projects completed</p>
            </div>
        </div>
    </div>

</div>