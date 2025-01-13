<style lang="scss">
    @import '../../scss/Services/services-list.scss';
    @import '../../scss/Services/services-body.scss';
</style>

<script>
    import {servicesItems} from '../../data/Services/services';
    import Arrow from '../Icons/Arrow.svelte';
    import {onMount} from 'svelte';

    function opener(event) {
        const targetElement = event.target;
        const dataAttribute = event.currentTarget.dataset.name;

        const x = document.querySelectorAll('.services-body');

        x.forEach(element => {
            element.classList.remove('open');
        });

        document.querySelector(`[data-title="${dataAttribute}"]`).classList.add('open');
    }

</script>

<svelte:document />

<section id="services-list">

    <!-- 
    ------------------
    HEADER
    ------------------
    -->
    <div class="header">

        <div class="left">
            (01) / Our Services
        </div>

        <div class="right">
            <h2>We specialize in building functional, visually appealing, user-friendly websites.</h2>
        </div>

    </div>

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
                </div>

            </div>
        {/each}

        {#each servicesItems as item}
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
        {/each}
    </div>





</section>