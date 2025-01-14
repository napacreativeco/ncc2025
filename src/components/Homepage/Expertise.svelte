<style lang="scss">
    @import './css/expertise.scss';
    @import './css/expertise--mobile.scss';
</style>

<script>
    import Arrow from "../Icons/Arrow.svelte";
    import { expertiseItems } from "../../data/expertise";
    import { onMount } from 'svelte';

    let activeItemId = null;
    let element;

    // Set the first item as active by default
    onMount(() => {
        activeItemId = expertiseItems[0].id;

        // OBSERVER SCRIPT
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
        const imageItems = document.querySelectorAll('.imageItem');
        const imageItemNew = document.querySelector('.imageHolder');
        const imageSrc = event.target.dataset.image;

        imageItemNew.style.background = `url('${imageSrc}')`;
        imageItemNew.style.backgroundSize = 'cover';
        imageItemNew.style.backgroundPosition = 'center center';

        imageItems.forEach((item) => {
            item.style.animation = "none";
            setTimeout(function() {
                item.style.animation = "stretcher 1s forwards";
            }, 10);
        });
    }
</script>

<section id="expertise" bind:this={element}>

    <!-- 
    ---------------------------------
    TOP 
    ---------------------------------
    -->    
    <div class="top">

        <!-- 
        --------------
        HEADER 
        --------------
        -->
        <div class="header">
            <div class="title">
                <span>Expertise</span>
            </div>
            
            <div class="description">
                <h2>
                    We specialize in building functional, visually appealing, user-friendly websites.
                </h2>
            </div>

        </div>

        <!-- 
        ---------------------------------
        LEFT 
        ---------------------------------
        -->
        <div class="left">

            <!-- 
            --------------
            CONTENT 
            --------------
            -->
            <div class="content">

                <div class="content-header">
                    <div class="title">Our Services</div>
                    <div class="index">(03)</div>
                </div>

                <!-- Content List -->
                <div class="content-list">

                    {#each expertiseItems as item}
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div class="item" 
                            class:activeListItem={activeItemId === item.id} 
                            on:click={() => handleClick(event, item.id)}
                            data-image={item.image}
                            data-subtitle={item.subtitle}
                            data-subcontent={item.subcontent}
                        >
                        
                            <div class="inner">
                                <h3 class="title">{@html item.icon}{item.title}</h3>
                                <p>{item.content}</p>
                            </div>

                            <!--  
                            <div class="action">
                                <span class="arrow">
                                    <Arrow />
                                </span>
                            </div>
                            -->
                        </div>
                    {/each}

                </div>

            </div>

        </div>

        <!-- 
        ---------------------------------
        RIGHT 
        ---------------------------------
        -->
        <div class="right">

            <div class="imageHolder" style="background: url('{expertiseItems[0].image}'); background-size: cover !important; background-position: center center;">
                <!-- <img src="{expertiseItems[0].image}" alt="" class="imageItem" /> -->
            </div>

        </div>

    </div>

</section>