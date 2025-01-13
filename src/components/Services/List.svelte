<style lang="scss">
    @import '../../scss/Services//services-list.scss';
</style>

<script>
    import { servicesItems } from '../../data/Services/services';
    import Arrow from '../Icons/Arrow.svelte';
    import Close from '../Icons/Close.svelte';
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

    function opener(event) {
        const targetElement = event.currentTarget;
        const dataAttribute = event.currentTarget.dataset.name;

        const x = document.querySelectorAll('.services-body');
        const y = document.querySelectorAll('.services-item');

        y.forEach(element => {
            if (element !== targetElement) {
                element.classList.remove('open');
            }
        });

        targetElement.classList.toggle('open');
    }
</script>

<svelte:document />

<section id="services-list" bind:this={element}>
    <!-- 
    ------------------
    LIST
    ------------------
    -->
    <div class="services-divs">
        {#each servicesItems as item}
            
        
            <div class="services-item" 
                 data-id={item.id} 
                 data-name={item.title}
                 on:click={opener}
                 on:keydown={opener}
                 role="button"
                 tabindex="0">

                <div class="title">
                    <span class="index">{item.number}</span>
                    <h3>{item.title}</h3>
                    <div class="arrow">
                        <Arrow />
                    </div>
                    <div class="close">
                        <Close />
                    </div>
                </div>

                <div class="services-body" data-title={item.title}>

                    <div class="image">
                        <img src="{item.banner}" alt="{item.title}" />
                    </div>
    
                    <div class="intro">
                        <div class="left">
                            <span class="title">
                                {item.title}
                            </span>
                        </div>
    
                        <div class="right">
                            
                        </div>
                    </div>
    
                    <div class="content">
                        <p>{item.content}</p>
                    </div>
                    
                </div>

            </div>
        {/each}

    </div>
</section>