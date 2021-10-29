<template>
  <div class="uk-offcanvas-content">
        <main>
            <section class="uk-section uk-section-small">
                <div class="uk-container">
                    <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
                        <div class="uk-text-center">
                            <ul class="uk-breadcrumb uk-flex-center uk-margin-remove">
                                <li><a href="index.html">Home</a></li>
                                <li><span>Contacts</span></li>
                            </ul>
                            <h1 class="uk-margin-small-top uk-margin-remove-bottom">Contacts</h1>
                        </div>
                        <div>
                            <div class="uk-grid-medium" uk-grid>
                                <section class="uk-width-1-1 uk-width-expand@m">
                                    <article class="uk-card uk-card-default uk-card-small uk-card-body uk-article tm-ignore-container">
                                        <div class="tm-wrapper">
                                            <!-- <figure class="tm-ratio tm-ratio-16-9 js-map" data-latitude="59.9356728" data-longitude="30.3258604" data-zoom="14"></figure> -->
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.86385588139!2d105.74459841420217!3d21.03813279283589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1634951379437!5m2!1svi!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                        </div>
                                        <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-margin-top" uk-grid>
                                            <section>
                                                <h3>Store</h3>
                                                <ul class="uk-list">
                                                    <li><a class="uk-link-heading" href="#"><span class="uk-margin-small-right" uk-icon="receiver"></span><span class="tm-pseudo">8 800 799 99 99</span></a></li>
                                                    <li><a class="uk-link-heading" href="#"><span class="uk-margin-small-right" uk-icon="mail"></span><span class="tm-pseudo">example@example.com</span></a></li>
                                                    <li>
                                                        <div><span class="uk-margin-small-right" uk-icon="location"></span><span>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div><span class="uk-margin-small-right" uk-icon="clock"></span><span>Daily 10:00–22:00</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </section>
                                            <section>
                                                <h3>Feedback</h3>
                                                <dl class="uk-description-list">
                                                    <dt><a uk-icon="facebook"></a> Facebook</dt>
                                                    <dd><a class="uk-link-muted" href="#">cooperation@example.com</a></dd>
                                                    <dt><a uk-icon="mail"></a> Gmail</dt>
                                                    <dd><a class="uk-link-muted" href="#">partners@example.com</a></dd>
                                                    <dt><a uk-icon="google"></a> Website</dt>
                                                    <dd><a class="uk-link-muted" href="#">press@example.com</a></dd>
                                                </dl>
                                            </section>
                                        </div>
                                    </article>
                                </section>
                                <aside class="uk-width-1-4 uk-visible@m tm-aside-column">
                                    <section class="uk-card uk-card-default uk-card-small" uk-sticky="offset: 90; bottom: true;">
                                        <nav>
                                            <ul class="uk-nav uk-nav-default tm-nav">
                                                <li>
                                                    <router-link to="/about">
                                                        Về chúng tôi
                                                    </router-link>
                                                </li>
                                                <li class="uk-active">
                                                    <router-link to="/about">
                                                        Liên hệ với của hàng
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/blog">
                                                        Blog
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/news">
                                                        News
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/faq">
                                                        FAQ
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/delivery">
                                                        Delivery
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </section>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="uk-section uk-section-default uk-section-small">
                <div class="uk-container">
                    <div uk-slider>
                        <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-5@m uk-grid">
                            <li>
                                <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                                    <div><span uk-icon="icon: star; ratio: 2.5;"></span>
                                    </div>
                                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                                        <div>Mauris placerat</div>
                                        <div class="uk-text-meta">Donec mollis nibh dolor, sit amet auctor</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                                    <div><span uk-icon="icon: receiver; ratio: 2.5;"></span>
                                    </div>
                                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                                        <div>Lorem ipsum</div>
                                        <div class="uk-text-meta">Sit amet, consectetur adipiscing elit</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                                    <div><span uk-icon="icon: location; ratio: 2.5;"></span>
                                    </div>
                                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                                        <div>Proin pharetra</div>
                                        <div class="uk-text-meta">Nec quam a fermentum ut viverra</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                                    <div><span uk-icon="icon: comments; ratio: 2.5;"></span>
                                    </div>
                                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                                        <div>Praesent ultrices</div>
                                        <div class="uk-text-meta">Praesent ultrices, orci nec finibus</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                                    <div><span uk-icon="icon: happy; ratio: 2.5;"></span>
                                    </div>
                                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                                        <div>Duis condimentum</div>
                                        <div class="uk-text-meta">Pellentesque eget varius arcu</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top"></ul>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>