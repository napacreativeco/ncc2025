<style lang="scss">
    @import '../../scss/Homepage/overview.scss';
    @import '../../scss/Homepage/overview--mobile.scss';
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

<section id="overview" bind:this={element}>

    <div class="left">
        <div class="image">
            <img src="/images/hand-mockup.jpg" alt="" />
        </div>

    </div>

    <div class="right">

        <div class="description">
            <h2>
                We craft visually stunning, user-centered designs that leave a lasting impression 
            </h2>
            <div class="span"></div>
        </div>

        <div class="content">
            <div>
                <span class="title">Overview</span>
            </div>
            <div>
                Napa Creative Co. is a website design studio dedicated to crafting stunning, user-friendly digital experiences. 
                We specialize in blending artistic innovation with functional design to help businesses and brands stand out online.
                <br /><br />
                We combine creativity, current trends, and strategy to develop exceptional websites that tell your story.
                <br />
                <a href="/services" class="learn-more">Learn more</a>
            </div>
            <div>
                <span class="index">(02)</span>
            </div>
        </div>

    </div>

</section>