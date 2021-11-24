<template>
  <div class="uk-offcanvas-content">
    <main>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
            <section class="uk-text-center">
              <ul class="uk-breadcrumb uk-flex-center uk-margin-remove">
                <li><a>Trang chủ</a></li>
                <li><a>Blog</a></li>
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
                    </header>
                    <section
                      class="section-custom"
                      v-for="(item, index) in getBlogDetail"
                      :key="index"
                    >
                      <div class="tm-wrapper uk-text-center">
                        <figure>
                          <a
                            ><img
                              :src="item.content"
                              v-if="item.type == 'photo'"
                          /></a>
                        </figure>
                      </div>
                      <p v-if="item.type == 'content'">
                        {{ item.content }}
                      </p>
                      <!-- <blockquote class="twitter-tweet" data-lang="en">
                        <p lang="en" dir="ltr">
                          Mophie&apos;s latest battery pack is powerful enough
                          to charge your 15-inch MacBook Pro
                        </p>
                        &mdash; The Verge (@verge)
                      </blockquote> -->
                    </section>
                  </article>
                </section>
                <!-- <section>
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
                </section> -->
              </div>
            </section>
          </div>
        </div>
      </section>
      <!-- <section class="uk-section uk-section-default uk-section-small">
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
      </section> -->
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
      getBlogDetail: "",
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
        .get(this.$store.state.MainLink + "customer/blog/" + this.item)
        .then((response) => {
          this.getData = response.data.object;
          this.getBlogDetail = response.data.object.blogDetails;
          console.log(this.getBlogDetail);
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