<style lang="scss">
    @import '../../scss/Experience/experience-items.scss';
</style>

<script>
    import Caret from "../Icons/Caret.svelte";
    import { projectsItems } from "../../data/Experience/projects";
    import { onMount } from 'svelte';
	import Arrow from "../Icons/Arrow.svelte";

    let activeItemId = null;
    let activeSlide = null;
    let slideCount = projectsItems.length;
    let element;

    onMount(() => {
        activeItemId = projectsItems[0].id;

        // VIEWPORT OBSERVER
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

    // Prev
    function prev(event, itemId) {
        if (activeItemId == 1) {
            activeItemId = slideCount;
        } else {
            activeItemId--;
        }

        const imageItem = document.querySelector('.side-image');
        const imageSrc = projectsItems[activeItemId - 1].image;
        imageItem.src = imageSrc;
    }

    // Next
    function next(event, itemId) {

        if (activeItemId < slideCount) {
            activeItemId++;
        } else {
            activeItemId = 1;
        }

        const imageItem = document.querySelector('.side-image');
        const imageSrc = projectsItems[activeItemId - 1].image;
        imageItem.src = imageSrc;
    }
</script>

<section id="experience-items" bind:this={element}>
    <div class="slider">

        {#each projectsItems as item, index}
            <div class="experience" data-id="{item.id}" class:activeSlideItem={activeItemId === item.id}>

                <div class="image">
                    <img class="side-image" src="{projectsItems[index].image}" alt="" />
                </div>

                <div class="content">

                    <!-- 
                    // TOP
                    -->
                    <div class="top">
                        <div class="index">
                            ({item.index})
                        </div>
    
                        <div class="title">
                            <h2>{item.client}</h2>
                            <span class="tags">{item.tags}</span>
                        </div>
    
                    </div>

                    <!-- 
                    // CONTENT
                    -->
                    <div class="text">
                        <p>
                            {item.content}
                        </p>
                    </div>

                    <!-- 
                    // LINK
                    -->
                    <div class="link">
                        <a href="{item.link}" title={item.client}>{item.url}</a>
                    </div>

                </div>

                <div class="buttons">
                    <div class="next">
                        <button on:click={next} on:keydown={next}>
                            <Caret />
                        </button>
                    </div>
                </div>


            </div>
        {/each}

    </div>
</section>