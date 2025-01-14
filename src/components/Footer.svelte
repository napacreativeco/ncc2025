<style lang="scss">
    @import '../scss/footer.scss';
</style>

<script>
    import CommissionStatus from "./Snippets/CommissionStatus.svelte";
    import Arrow from "./Icons/Arrow.svelte";
    import Napa from "./Icons/Napa.svelte";
    import { socialItems } from "../data/socialmedia";
	import { testimonialItems } from "../data/testimonials";
	import { anchorItems } from "../data/anchors";

    let currentYear = new Date().getFullYear();
</script>

<footer>

    <div class="top">

        <!-- 
        ---------------------------------
        LEFT 
        ---------------------------------
        -->
        <div class="left">
            <CommissionStatus />
            <h3>Book a free Consultation to discover how we can help your business thrive!</h3>

            <div class="buttons">
                <button class="animated" onclick={window.location.href = '/about'}>
                    <span class="text">
                        Get started today
                    </span>
                    <span class="icon">
                        <Arrow />
                    </span>
                </button>

            </div>
        </div>


        <!-- 
        ---------------------------------
        RIGHT 
        ---------------------------------
        -->
        <div class="right">

            <div class="contact-item">
                <h4>Phone</h4>
                <a href="tel:7073653802" title="Phone">(707) 365 3802</a>
            </div>

            <div class="contact-item">
                <h4>E-mail</h4>
                <a href="mailto:hello@napacreativeco.com" title="Email">hello@napacreativeco.com</a>
            </div>

        </div>

    </div>

    <!-- 
    ---------------------------------
    MIDDLE 
    ---------------------------------
    -->
    <div class="middle">

        <div class="left">

            <div class="logo">
                <Napa />
            </div>

            <p class="bio">
                Napa Creative Co. is an independent web and graphic design studio based in Napa, California. We specialize in creating beautiful, responsive websites and eye-catching branding for small businesses and entrepreneurs.
            </p>

            <div class="social-icons">
                <h4>Visit us on:</h4>
                <ul>
                    {#each socialItems as item}
                        <li>
                            <a href={item.url} title={item.name}>
                                {@html item.icon}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

        </div>

        <div class="right">
            <div>
                <h4>Quick Links</h4>
                <ul>
                    {#each anchorItems as anchor}
                        <li>
                            <a href="{anchor.url}" title="{anchor.title}">
                                {anchor.title}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <div>
                <h4>Pages</h4>
                <ul>
                    <li><a href="/" title="Home">Home</a></li>
                    <li><a href="/services" title="Services">Services</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>

            <div>
                <h4>Legal</h4>
                <ul>
                    <li><a href="/terms-of-service" title="Terms of Service">Terms of Service</a></li>
                    <li><a href="/privacy-policy" title="Privacy Policy">Privacy Policy</a></li>
                    <li><a href="/cookies" title="Cookies">Cookies</a></li>
                </ul>
            </div>
        </div>
    </div>
    

    <!-- 
    ---------------------------------
    BOTTOM 
    ---------------------------------
    -->
    <div class="bottom">
        <p class="attribution">Copyright &copy; Napa Creative Co. {currentYear}</p>
    </div>

</footer>