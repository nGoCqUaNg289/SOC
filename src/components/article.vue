<template>
  <div class="uk-offcanvas-content">
    <main>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
            <section class="uk-text-center">
              <ul class="uk-breadcrumb uk-flex-center uk-margin-remove">
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <!-- <li>
                  <span>{{getData.title}}</span>
                </li> -->
              </ul>
            </section>
            <section>
              <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
                <section>
                  <article
                    class="
                      uk-card uk-card-default uk-card-body uk-article
                      tm-ignore-container
                    "
                  >
                    <header class="uk-text-center">
                      <h1 class="uk-article-title">
                        {{ getData.title }}
                      </h1>
                      <!-- <div class="uk-article-meta">
                        <time></time>
                      </div> -->
                    </header>
                    <section class="section-custom">
                      <div class="tm-wrapper uk-text-center">
                        <figure>
                          <a href="images/articles/macbook-photo.jpg"
                            ><img
                              src="images/articles/macbook-photo.jpg"
                              alt="MacBook Pro"
                          /></a>
                          <figcaption>MacBook Pro</figcaption>
                        </figure>
                      </div>

                      <figure class="uk-text-center">
                        <a href="images/articles/macbook-promo-4.jpg">
                          <img
                            src="images/articles/macbook-promo-4.jpg"
                            alt="MacBook Pro"
                        /></a>
                      </figure>

                      <div class="tm-wrapper">
                        <figure class="tm-ratio tm-ratio-16-9">
                          <iframe
                            width="713"
                            height="401"
                            src="https://www.youtube.com/embed/nG1-7gExImU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </figure>
                      </div>

                      <figure uk-slideshow>
                        <div
                          class="
                            uk-position-relative uk-visible-toggle uk-light
                          "
                        >
                          <ul class="uk-slideshow-items">
                            <li>
                              <img
                                src="images/articles/macbook-promo-1.jpg"
                                alt="MacBook Pro"
                                uk-cover
                              />
                            </li>
                            <li>
                              <img
                                src="images/articles/macbook-promo-2.jpg"
                                alt="MacBook Pro"
                                uk-cover
                              />
                            </li>
                          </ul>
                          <a
                            class="
                              uk-position-center-left
                              uk-position-small
                              uk-hidden-hover
                            "
                            href="#"
                            uk-slidenav-previous
                            uk-slideshow-item="previous"
                          ></a>
                          <a
                            class="
                              uk-position-center-right
                              uk-position-small
                              uk-hidden-hover
                            "
                            href="#"
                            uk-slidenav-next
                            uk-slideshow-item="next"
                          ></a>
                        </div>
                        <ul
                          class="
                            uk-slideshow-nav uk-dotnav uk-flex-center uk-margin
                          "
                        ></ul>
                      </figure>
                      <blockquote class="twitter-tweet" data-lang="en">
                        <p lang="en" dir="ltr">
                          Mophie&apos;s latest battery pack is powerful enough
                          to charge your 15-inch MacBook Pro<a
                            href="https://t.co/jN4RzcxOyG"
                            >https://t.co/jN4RzcxOyG</a
                          ><a href="https://t.co/5oJBKZRVBx"
                            >pic.twitter.com/5oJBKZRVBx</a
                          >
                        </p>
                        &mdash; The Verge (@verge)<a
                          href="https://twitter.com/verge/status/948539601265872896?ref_src=twsrc%5Etfw"
                          >January 3, 2018</a
                        >
                      </blockquote>
                      <div class="tm-wrapper">
                        <figure class="uk-text-center">
                          <a href="images/articles/macbook-promo-3.jpg"
                            ><img
                              src="images/articles/macbook-promo-3.jpg"
                              alt="MacBook Pro"
                          /></a>
                          <figcaption>13-inch and 15-inch</figcaption>
                        </figure>
                      </div>
                    </section>
                  </article>
                </section>
                <section>
                  <h2 class="uk-text-center">Related Articles</h2>
                  <div
                    class="
                      uk-grid-medium
                      uk-grid-match
                      uk-child-width-1-1
                      uk-child-width-1-2@s
                      uk-child-width-1-4@m
                    "
                    uk-grid
                  >
                    <div>
                      <a>
                        <article
                          class="
                            uk-card
                            uk-card-default
                            uk-card-small
                            uk-overflow-hidden
                            uk-link-heading
                            uk-display-block
                            uk-box-shadow-hover-large
                            uk-height-1-1
                            tm-ignore-container
                          "
                        >
                          <div class="uk-card-media-top">
                            <figure
                              class="uk-margin-remove tm-ratio tm-ratio-16-9"
                            >
                              <div class="uk-cover-container">
                                <img
                                  src="images/articles/macbook-photo.jpg"
                                  alt="Everything You Need to Know About the MacBook Pro"
                                  uk-cover
                                />
                              </div>
                            </figure>
                          </div>
                          <div class="uk-card-body">
                            <div
                              class="uk-article-meta uk-margin-xsmall-bottom"
                            >
                              <time>May 21, 2018</time>
                            </div>
                            <h3 class="uk-h4 uk-margin-remove">
                              Everything You Need to Know About the MacBook Pro
                            </h3>
                          </div>
                        </article>
                      </a>
                    </div>
                    <div>
                      <a>
                        <article
                          class="
                            uk-card
                            uk-card-default
                            uk-card-small
                            uk-overflow-hidden
                            uk-link-heading
                            uk-display-block
                            uk-box-shadow-hover-large
                            uk-height-1-1
                            tm-ignore-container
                          "
                        >
                          <div class="uk-card-media-top">
                            <figure
                              class="uk-margin-remove tm-ratio tm-ratio-16-9"
                            >
                              <div class="uk-cover-container">
                                <img
                                  src="images/articles/macos.jpg"
                                  alt="Apple introduces macOS Mojave"
                                  uk-cover
                                />
                              </div>
                            </figure>
                          </div>
                          <div class="uk-card-body">
                            <div
                              class="uk-article-meta uk-margin-xsmall-bottom"
                            >
                              <time>May 21, 2018</time>
                            </div>
                            <h3 class="uk-h4 uk-margin-remove">
                              Apple introduces macOS Mojave
                            </h3>
                          </div>
                        </article>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section class="uk-section uk-section-default uk-section-small">
        <div class="uk-container">
          <div uk-slider>
            <ul
              class="
                uk-slider-items
                uk-child-width-1-1
                uk-child-width-1-2@s
                uk-child-width-1-5@m
                uk-grid
              "
            >
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: star; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Mauris placerat</div>
                    <div class="uk-text-meta">
                      Donec mollis nibh dolor, sit amet auctor
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: receiver; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Lorem ipsum</div>
                    <div class="uk-text-meta">
                      Sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: location; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Proin pharetra</div>
                    <div class="uk-text-meta">
                      Nec quam a fermentum ut viverra
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: comments; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Praesent ultrices</div>
                    <div class="uk-text-meta">
                      Praesent ultrices, orci nec finibus
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: happy; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Duis condimentum</div>
                    <div class="uk-text-meta">
                      Pellentesque eget varius arcu
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul
              class="
                uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top
              "
            ></ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    item: Number,
  },
  data() {
    return {
      getData: "",
      // formData: {
      //   // id: this.item,
      //   name: "",
      //   price: "",
      //   status: "",
      //   orderDetails: "",
      //   blogs: "",
      //   productCategories: "",
      //   sales: "",
      //   productColors: [],
      //   cartDetails: "",
      //   productDetails: [],
      // },

      // getData: []
    };
  },
  created() {
    this.getBlog();
    // this.callFunction();
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getBlog() {
      axios
        .get("http://socstore.club:8800/api/customer/blog/" + this.item)
        .then((response) => {
          this.getData = response.data.object;
          console.log(this.getData);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    detailBlog(id) {
      console.log(id);
      this.$router.push({
        name: "article",
        params: { item: id },
      });
    },
  },
};
</script>

<style scope>
.section-custom {
  margin-top: 5%;
}
</style>