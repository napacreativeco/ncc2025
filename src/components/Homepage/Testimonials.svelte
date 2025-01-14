<style lang="scss">
    @import './css/testimonials.scss';
    @import './css/testimonials--mobile.scss';
</style>

<script>
    import Caret from "../Icons/Caret.svelte";
    import { testimonialItems } from "../../data/testimonials";
    import { onMount } from 'svelte';

    let activeItemId = null;
    let activeSlide = null;
    let slideCount = testimonialItems.length;
    let element;

    onMount(() => {
        activeItemId = testimonialItems[0].id;


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
        const imageItems = document.querySelectorAll('.side-image');
        const imageSrc = testimonialItems[activeItemId - 1].image;
        imageItem.style.background = `url('${imageSrc}')`;
        imageItem.style.backgroundSize = 'cover';
        imageItem.style.backgroundPosition = 'center center';

        imageItems.forEach((item) => {
            item.style.animation = "none";
            setTimeout(function() {
                item.style.animation = "stretcher 1s forwards";
            }, 10);
            
        });
    }

    // Next
    function next(event, itemId) {
        if (activeItemId < slideCount) {
            activeItemId++;
        } else {
            activeItemId = 1;
        }

        const imageItem = document.querySelector('.side-image');
        const imageItems = document.querySelectorAll('.side-image');
        const imageSrc = testimonialItems[activeItemId - 1].image;
        imageItem.style.background = `url('${imageSrc}')`;
        imageItem.style.backgroundSize = 'cover';
        imageItem.style.backgroundPosition = 'center center';

        imageItems.forEach((item) => {
            item.style.animation = "none";
            setTimeout(function() {
                item.style.animation = "stretcher 1s forwards";
            }, 10);
            
        });
       // imageItem.style.animation = "stretcher 1s forwards";
    }
</script>

<section id="testimonials" bind:this={element}>

    <!-- 
    ---------------------------------
    LEFT 
    ---------------------------------
    -->  
    <div class="left">

        {#each testimonialItems as item}
            <div class="testimonial" data-id="{item.id}" class:activeSlideItem={activeItemId === item.id}>


                <!-- HEADER -->
                <div class="header">

                    <div class="title">Kind Words</div>

                    <div class="headline">
                        <h2>“{item.title}”</h2>
                    </div>

                </div>

                <!-- CONTENT -->
                <div class="content">

                    <div class="index">
                        ({item.id})
                    </div>

                    <div class="text">
                        <p>
                            {item.content}
                        </p>
                    </div>

                </div>

                <!-- USER INFO -->
                <div class="user-info">

                    <div class="avatar">
                        <img src="{item.avatar}" alt="{item.company_name}">
                    </div>

                    <div class="info">
                        <h3 class="name">{item.customer_name}</h3>
                        <h4 class="company">{item.company_name}</h4>
                    </div>

                    <div class="controls">
                        <div class="prev">
                            <button on:click={() => prev(event)} class="control-prev"><Caret /></button>
                        </div>
                        <div class="next">
                            <button on:click={() => next(event)} class="control-next"><Caret /></button>
                        </div>
                    </div>

                </div>


            </div>
        {/each}

    </div>


    <!-- 
    ---------------------------------
    RIGHT 
    ---------------------------------
    -->  
    <div class="right">
        <div class="image">
            <div class="side-image" style="background:url('{testimonialItems[0].image}'); background-size: cover; background-position: center center;"></div>
        </div>
    </div>

</section>