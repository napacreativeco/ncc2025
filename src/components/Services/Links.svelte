<style lang="scss">
    @import './css/services-links.scss';
    @import './css/services-links--mobile.scss';
</style>

<script>
    import Arrow from '../Icons/Arrow.svelte';
    import { pagesItems } from '../../data/Services/pages';
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

    let scrollContainer;

    function next() {
        scrollContainer.scrollLeft += 200;
    }
</script>

<!-- 
------------------
PAGE LINKS 
------------------
-->
<div class="pages-links" bind:this={element}>
    <ul bind:this={scrollContainer}>
        {#each pagesItems as item}
            <li on:click={window.location=item.url}>
                <div class="title">
                    <span class="index">{item.number}</span>
                    <h3>{item.title}</h3>
                </div>
                <div class="image">
                    <img src="{item.image}" alt="{item.title}" />
                </div>
            </li>
        {/each}
    </ul>

    <div class="next-button">
        <div class="button next" on:click={next} on:keydown={next}>
            <Arrow />
        </div>
    </div>

</div> 