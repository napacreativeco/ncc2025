<style lang="scss">
    @import './css/experience-blocks.scss';
    @import './css/experience-blocks--mobile.scss';
</style>

<script>
    import { experienceBlocks } from "../../data/Experience/blocks";
    import WordPress from "../Icons/WordPress.svelte";
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

<section id="experience-blocks" bind:this={element}>
    <div class="header">

        <div class="left">
            <h2>Our Practice</h2>
        </div>

        <div class="right">
            <h3>
                We focus our efforts on the industry leading tools and frameworks to ensure you are getting the most out of your products
            </h3>
        </div>
        
    </div>

    <div class="block-container">
        <ul>
            {#each experienceBlocks as item}
                <li>
                    <div class="title">
                        <h3>{@html item.logo} {item.title}</h3>
                        <p class="content">
                            {item.description}
                        </p>
                    </div>

                    <div class="tags">
                        <!-- {'#' + item.skills.join(', ')} -->
                         {#each item.skills as s}
                            #{s}&nbsp;
                         {/each}
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</section>