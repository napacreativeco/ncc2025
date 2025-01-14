<style lang="scss">
    @import './css/services-header.scss';
    @import './css/services-header--mobile.scss';
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


<section id="services-header" bind:this={element}>
    <!-- 
    ------------------
    HEADER
    ------------------
    -->
    <div class="header">

        <div class="left">
            <span>Services</span>
        </div>

        <div class="right">
            <h2>We specialize in building functional, visually appealing, user-friendly websites.</h2>
        </div>

    </div>
</section>