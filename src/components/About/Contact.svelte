<style lang="scss">
    @import './css/about-contact.scss';
    @import './css/about-contact--mobile.scss';
</style>

<script>
    import Email from "../Icons/Email.svelte";
    import Phone from "../Icons/Phone.svelte";
    import Yelp from "../Icons/Yelp.svelte";
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

<svelte:document />

<section id="about-contact" bind:this={element}>

    <div class="top">

        <div class="left">
            <h2>Get in Touch</h2>
        </div>

        <div class="right">
            <p>We'd love to help bring your vision to life. </p>
        </div>

    </div>

      
    <div class="blocks">

        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="block">
            <div class="info">
                <h3><Email /> E-mail</h3>
                <p>Reach out to us via E-mail to talk about your project</p>
            </div>

            <div class="button">
                <a href="mailto:hello@napacreativeco.com" title="E-mail">
                    E-mail
                </a>
            </div>
        </div>

        <div class="block">
            <div class="info">
                <h3><Phone /> Phone</h3>
                <p>Reach out to us via E-mail to talk about your project</p>
            </div>

            <div class="button">
                <a href="tel:7073653802" title="Phone">
                    Call us
                </a>
            </div>
        </div>

        <div class="block">
            <div class="info">
                <h3><Yelp /> Yelp!</h3>
                <p>Reach out to us via E-mail to talk about your project</p>
            </div>

            <div class="button">
                <a href="https://www.yelp.com/biz/napa-creative-co-napa-2" title="Yelp">
                    Reviews
                </a>
            </div>
        </div>
    </div>
</section>