<style lang="scss">
    @import './css/services-list.scss';
    @import './css/services-list--mobile.scss';
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
            
        
            <!-- svelte-ignore a11y_interactive_supports_focus -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div class="services-item" 
                 data-id={item.id} 
                 data-name={item.title}
                 on:click={opener}
                 role="button">

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
    
                    <!-- INTRO -->
                    <div class="content">
                        <div class="left">
                            <span class="title">
                                {item.title}
                            </span>
                        </div>
    
                        <div class="right">
                            <p>{item.content}</p>
                        </div>
                    </div>

                    <!-- IMAGE -->
                    <div class="image">
                        <img src="{item.banner}" alt="{item.title}" />
                    </div>
                    
                </div>

            </div>
        {/each}

    </div>
</section>