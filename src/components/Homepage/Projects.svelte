<style lang="scss">
    @import '../../scss/Homepage/projects.scss';
    @import '../../scss/Homepage/projects--mobile.scss';
</style>

<script>
    import Caret from "../Icons/Caret.svelte";
    import { projectItems } from "../../data/projects";
    import { onMount } from 'svelte';

    let activeItemId = null;
    let slideCount = projectItems.length;
    let element;

    // Set the first item as active by default
    onMount(() => {
        activeItemId = projectItems[0].id;

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

    function handleClick(event, itemId) {
        activeItemId = itemId;
        const imageItem = document.querySelector('.imageItem');
        const imageHolder = document.querySelector('.imageHolder');
        const imageSrc = event.target.dataset.image;
        imageItem.src = imageSrc;
    }

    function prev(event, itemId) {
        if (activeItemId == 1) {
            activeItemId = slideCount;
        } else {
            activeItemId--;
        }
        
        console.log(activeItemId);
    }

    function next(event, itemId) {
        if (activeItemId < slideCount) {
            activeItemId++;
        } else {
            activeItemId = 1;
        }
        
        console.log(activeItemId);
    }
</script>

<section id="projects" bind:this={element}>

    <!-- 
    ---------------------------------
    HEADER 
    ---------------------------------
    -->   
    <div class="header">

        <div class="title">
            <span>Experience</span>
        </div>

        <div class="headline">
            <h2>Our projects speak for themselves</h2>
        </div>

        <div class="data">
            <div class="index">(03)</div>
            <div class="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </div>
        </div>

        <div class="controls">
            <div class="prev">
                <button class="control-prev" on:click={() => prev(event)}><Caret /></button>
            </div>
            <div class="next">
                <button class="control-next" on:click={() => next(event)}><Caret /></button>
            </div>
        </div>

    </div>

    {#each projectItems as item}
        <!-- 
        ---------------------------------
        SLIDER 
        ---------------------------------
        --> 
        <div class="slideshow">

            <div class="slide" data-id="{item.id}" class:activeSlideItem={activeItemId === item.id}>

                <!-- IMAGE -->
                <div class="image">
                    <img src="{item.image}" alt="" />
                </div>
                
                <!-- INFO -->
                <div class="project-info">
                    <div class="project-title">
                        <h3>
                            {item.title}
                        </h3>
                    </div>
                    <div class="description">{item.description}</div>
                    <div class="timeframe">
                        <span class="time-title">Timeframe</span>
                        <span class="time">{item.timeframe}</span>
                    </div>
                    <div class="link">
                        <a href="{item.link}" title="{item.title}">Learn more</a>
                    </div>
                </div>

            </div>

        </div>
    {/each}

    <div class="controls-mobile">
        <div class="prev">
            <button class="control-prev" on:click={() => prev(event)}><Caret /></button>
        </div>
        <div class="next">
            <button class="control-next" on:click={() => next(event)}><Caret /></button>
        </div>
    </div>

</section>