<template>
  <div class="uk-offcanvas-content">
    <!-- <loadingDot class="loadingData"></loadingDot> -->

    <main>
      <section
        class="uk-position-relative uk-visible-toggle uk-light"
        uk-slideshow="min-height: 300; max-height: 600;"
      >
        <ul class="uk-slideshow-items">
          <li style="background-color: #0b0a12">
            <a>
              <figure class="uk-container uk-height-1-1">
                <img
                  src="images/promo/macbook-new.jpg"
                  alt="New Macbook"
                  width="1200"
                  height="600"
                  uk-cover
                />
              </figure>
            </a>
          </li>
          <li style="background-color: #ce071e">
            <a>
              <figure class="uk-container uk-height-1-1">
                <img
                  src="images/promo/iphone.jpg"
                  alt="iPhone"
                  width="1200"
                  height="600"
                  uk-cover
                />
              </figure>
            </a>
          </li>
          <li style="background-color: #1f2024">
            <a>
              <figure class="uk-container uk-height-1-1">
                <img
                  src="images/promo/ipad.jpg"
                  alt="iPad"
                  width="1200"
                  height="600"
                  uk-cover
                />
              </figure>
            </a>
          </li>
        </ul>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          uk-slideshow-item="previous"
          uk-slidenav-previous
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          uk-slideshow-item="next"
          uk-slidenav-next
        ></a>
        <div class="uk-position-bottom-center uk-position-small">
          <ul class="uk-slideshow-nav uk-dotnav"></ul>
        </div>
      </section>
      <section class="uk-section uk-section-default uk-section-small">
        <div class="uk-container">
          <div
            class="
              uk-grid-small
              uk-child-width-1-2
              uk-child-width-1-3@s
              uk-child-width-1-6@m
            "
            uk-grid
          >
            <div>
              <router-link to="/subcategory">
                <a
                  class="
                    uk-link-muted
                    uk-text-center
                    uk-display-block
                    uk-padding-small
                    uk-box-shadow-hover-large
                  "
                >
                  <div class="tm-ratio tm-ratio-4-3">
                    <div class="tm-media-box">
                      <figure class="tm-media-box-wrap">
                        <img
                          class="item-brand"
                          src="images/catalog/laptops.png"
                          alt="Laptops"
                        />
                      </figure>
                    </div>
                  </div>
                  <div class="uk-margin-small-top">
                    <div class="uk-text-truncate">Laptops Gaming</div>
                  </div>
                </a>
              </router-link>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/smartphones.png"
                        alt="Smartphones"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">Laptop văn phòng</div>
                </div>
              </a>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/tablets.png"
                        alt="Tablets"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">
                    Laptop mỏng nhẹ, thời trang
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/watches.png"
                        alt="Smart Watches"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">Laptops sinh viên</div>
                </div>
              </a>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/consoles.png"
                        alt="Gaming Consoles"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">Laptop đồ hoạ, kiến trúc</div>
                </div>
              </a>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/cameras.png"
                        alt="Cameras"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">PC builds</div>
                </div>
              </a>
            </div>
          </div>
          <div class="uk-margin uk-text-center">
            <router-link to="/category">
              <a class="uk-link-muted uk-text-uppercase tm-link-to-all"
                ><span>Xem tất cả sản phẩm</span
                ><span uk-icon="icon: chevron-right; ratio: .75;"></span
              ></a>
            </router-link>
          </div>
        </div>
      </section>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <h2 class="uk-text-center">Sản phẩm nổi bật</h2>
          <div class="uk-card uk-card-default tm-ignore-container">
            <div
              class="
                uk-grid-collapse uk-child-width-1-3 uk-child-width-1-4@m
                tm-products-grid
              "
              uk-grid
            >
              <article
                class="tm-product-card"
                v-for="item in getData"
                :key="item.id"
              >
                <div class="tm-product-card-media">
                  <div class="tm-ratio tm-ratio-4-3">
                    <a class="tm-media-box" style="text-decoration: none">
                      <div class="tm-product-card-labels">
                        <span class="uk-label uk-label-warning"
                          >top selling</span
                        >
                        <span class="uk-label uk-label-danger">trade-in</span>
                      </div>
                      <figure class="tm-media-box-wrap">
                        <img :src="item.photos[0]" />
                      </figure>
                    </a>
                  </div>
                </div>
                <div class="tm-product-card-body">
                  <div class="tm-product-card-info">
                    <div class="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 class="tm-product-card-title">
                      <a
                        class="uk-link-heading"
                        @click="detailProduct(item.id)"
                        >{{ item.name }}</a
                      >
                    </h3>
                  </div>
                  <div class="tm-product-card-shop">
                    <div class="tm-product-card-prices">
                      <del class="uk-text-meta">$1899.00</del>
                      <div class="tm-product-card-price">
                        {{ formatPrice(item.price) }}đ
                      </div>
                    </div>
                    <div class="tm-product-card-add">
                      <div class="uk-text-meta tm-product-card-actions">
                        <a
                          class="
                            tm-product-card-action
                            js-add-to js-add-to-favorites
                            tm-action-button-active
                            js-added-to
                          "
                          title="Add to favorites"
                          @click="addToFavorite(item.id)"
                          v-if="checkFavorites != ''"
                        >
                          <b-icon
                            :icon="isFavorited(item) ? 'heart-fill' : 'heart'"
                            style="color: red"
                          ></b-icon>
                          <!-- <b-icon icon="heart" style="color: red"></b-icon> -->
                          <span class="tm-product-card-action-text"
                            >Add to favorites</span
                          >
                        </a>
                        <a
                          class="
                            tm-product-card-action
                            js-add-to js-add-to-compare
                            tm-action-button-active
                            js-added-to
                          "
                          title="Add to compare"
                          @click="compareProduct(item)"
                        >
                          <span uk-icon="icon: copy; ratio: .75;"></span>
                          <span class="tm-product-card-action-text"
                            >Add to compare</span
                          >
                        </a>
                      </div>
                      <button
                        class="
                          uk-button uk-button-primary
                          tm-product-card-add-button tm-shine
                          js-add-to-cart
                        "
                        @click="
                          addToCart(
                            item.id,
                            item.name,
                            item.photos[0],
                            item.price
                          )
                        "
                      >
                        <span
                          class="tm-product-card-add-button-icon"
                          uk-icon="cart"
                        ></span>
                        <span class="tm-product-card-add-button-text"
                          >add to cart</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="uk-margin uk-text-center">
            <router-link to="/category">
              <a class="uk-link-muted uk-text-uppercase tm-link-to-all"
                ><span>Toàn bộ sản phẩm</span
                ><span uk-icon="icon: chevron-right; ratio: .75;"></span
              ></a>
            </router-link>
          </div>
        </div>
      </section>
      <section class="uk-section uk-section-default uk-section-small">
        <div class="uk-container">
          <h2 class="uk-text-center">Thương hiệu phổ biến</h2>
          <div class="uk-margin-medium-top" uk-slider="finite: true">
            <div class="uk-position-relative">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-visible@m">
                  <a uk-slidenav-previous uk-slider-item="previous"></a>
                </div>
                <div class="uk-width-expand uk-slider-container">
                  <ul
                    class="
                      uk-slider-items
                      uk-child-width-1-3
                      uk-child-width-1-6@s
                      uk-grid
                      uk-grid-large
                    "
                  >
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="Apple"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/apple.svg" alt="Apple" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="Samsung"
                        >
                          <figure class="tm-media-box-wrap">
                            <img
                              src="images/brands/samsung.svg"
                              alt="Samsung"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="Sony"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/sony.svg" alt="Sony" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="Microsoft"
                        >
                          <figure class="tm-media-box-wrap">
                            <img
                              src="images/brands/microsoft.svg"
                              alt="Microsoft"
                            />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="Intel"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/intel.svg" alt="Intel" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="HP"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/hp.svg" alt="HP" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="LG"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/lg.svg" alt="LG" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="Lenovo"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/lenovo.svg" alt="Lenovo" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="ASUS"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/asus.svg" alt="ASUS" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="Acer"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/acer.svg" alt="Acer" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="Dell"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/dell.svg" alt="Dell" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                          title="Canon"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/canon.svg" alt="Canon" />
                          </figure>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="uk-visible@m">
                  <a uk-slider-item="next" uk-slidenav-next></a>
                </div>
              </div>
            </div>
            <ul
              class="
                uk-slider-nav
                uk-dotnav
                uk-flex-center
                uk-margin-medium-top
                uk-hidden@m
              "
            ></ul>
          </div>
          <div class="uk-margin uk-text-center">
            <a class="uk-link-muted uk-text-uppercase tm-link-to-all"
              ><span>Xem tất cả thương hiệu</span
              ><span uk-icon="icon: chevron-right; ratio: .75;"></span
            ></a>
          </div>
        </div>
      </section>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <h2 class="uk-text-center">Blog</h2>
          <div
            class="
              uk-grid-medium
              uk-grid-match
              uk-child-width-1-1
              uk-child-width-1-2@s
            "
            uk-grid
          >
            <div v-for="items in getBlogHL" :key="items.id">
              <a>
                <article
                  class="
                    uk-card
                    uk-card-default
                    uk-card-small
                    uk-article
                    uk-overflow-hidden
                    uk-box-shadow-hover-large
                    uk-height-1-1
                    tm-ignore-container
                  "
                >
                  <div class="tm-ratio tm-ratio-16-9">
                    <figure
                      class="tm-media-box uk-cover-container uk-margin-remove"
                    >
                      <img
                        :src="items.photo"
                        alt="Everything You Need to Know About the MacBook Pro"
                        uk-cover="uk-cover"
                      />
                    </figure>
                  </div>
                  <div class="uk-card-body">
                    <div class="uk-article-body">
                      <div class="uk-article-meta uk-margin-xsmall-bottom">
                        <time>{{ items.timeCreated }}</time>
                      </div>
                      <div>
                        <h3 class="uk-margin-remove">
                          {{ items.title }}
                        </h3>
                      </div>
                      <div class="uk-margin-small-top">
                        <p>
                          {{ items.shortText }}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <!-- <div>
              <a>
                <article
                  class="
                    uk-card
                    uk-card-default
                    uk-card-small
                    uk-article
                    uk-overflow-hidden
                    uk-box-shadow-hover-large
                    uk-height-1-1
                    tm-ignore-container
                  "
                >
                  <div class="tm-ratio tm-ratio-16-9">
                    <figure
                      class="tm-media-box uk-cover-container uk-margin-remove"
                    >
                      <img
                        :src="getBlogHL"
                        alt="Apple introduces macOS Mojave"
                        uk-cover="uk-cover"
                      />
                    </figure>
                  </div>
                  <div class="uk-card-body">
                    <div class="uk-article-body">
                      <div class="uk-article-meta uk-margin-xsmall-bottom">
                        <time>May 21, 2018</time>
                      </div>
                      <div>
                        <h3 class="uk-margin-remove">
                          Apple introduces macOS Mojave
                        </h3>
                      </div>
                      <div class="uk-margin-small-top">
                        <p>
                          Praesent consequat justo eu massa malesuada posuere.
                          Donec ultricies tincidunt nisl, sed euismod nulla
                          venenatis maximus. Maecenas sit amet semper tellus.
                          Pellentesque imperdiet finibus sapien, a consectetur
                          eros auctor a.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </div> -->
          </div>
          <div class="uk-margin uk-text-center">
            <a
              class="uk-link-muted uk-text-uppercase tm-link-to-all"
              @click="switchToBlog()"
              ><span>Xem tất cả bài viết</span
              ><span uk-icon="icon: chevron-right; ratio: .75;"></span
            ></a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    // loadingDot,
  },
  data() {
    return {
      getData: "",
      getBlogHL: "",
      formData: {
        name: "",
        price: "",
        status: "",
        orderDetails: "",
        blogs: "",
        productCategories: "",
        sales: "",
        productColors: [],
        cartDetails: "",
        productDetails: [],
        checkFavorites: "",
      },
      productFavorites: [],
      // test: {
      //   id: "",
      // },
    };
  },
  created() {
    this.getDT();
    this.getBlog();
    // console.log(this.$store.state.totalFavorites);
  },
  methods: {
    switchToBlog() {
      this.$router.push({
        name: "blog",
      });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getDT() {
      this.checkFavorites = this.$store.state.tokenUser;
      // console.log(this.checkFavorites);
      // this.getDataFavorites();
      axios
        .get(this.$store.state.MainLink + "customer/products/trending")
        .then((response) => {
          this.getData = response.data.object;
          // console.log(this.getData);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    callFunction: function () {
      var v = this;
      setTimeout(function () {
        v.getDT();
      }, 2000);
    },
    detailProduct(id) {
      // console.log(id);
      this.$router.push({
        name: "product",
        params: { item: id },
      });
    },
    addToCart(id, name, photos, price) {
      if (this.$store.state.tokenUser == "") {
        let item = {
          productName: name,
          productId: id,
          photo: photos,
          price: price,
          quantity: 1,
        };
        this.$store.state.StoreCart.push(item);
        this.$toasted.show("Đã thêm vào giỏ hàng !", {
          type: "success",
          duration: 2000,
        });
      } else {
        let item = {
          productId: id,
          price: price,
          quantity: 1,
        };
        this.$store.state.StoreCart.push(item);
        axios
          .post(this.$store.state.MainLink + "customer/cart/new", item, {
            headers: {
              Authorization: this.$store.state.tokenUser,
            },
          })
          .then((response) => {
            console.log(response);
            axios
              .get(this.$store.state.MainLink + "customer/cart/get", {
                headers: {
                  Authorization: this.$store.state.tokenUser,
                },
              })
              .then((response) => {
                this.$store.state.totalCart = response.data.object.length;
                this.$store.state.StoreCart = response.data.object;
                this.DetailsCart = this.$store.state.StoreCart;
                for (let item in this.DetailsCart) {
                  this.totalPriceProduct.push(response.data.object[item].price);
                }
              })
              .catch((e) => {
                console.log(e);
              });
          });

        this.$toasted.show("Đã thêm vào giỏ hàng !", {
          type: "success",
          duration: 2000,
        });
      }
    },
    compareProduct(item) {
      // console.log(this.$store.state.CompareCart.length);
      if (this.$store.state.CompareCart.length < 2) {
        this.$store.state.CompareCart.push(item);
        this.$toasted.show("Đã chọn sản phẩm để so sánh!", {
          type: "success",
          duration: 2000,
        });
      } else {
        this.$toasted.show("Bạn đã chọn tối đa 2 sản phẩm cần so sánh!", {
          type: "error",
          duration: 2000,
        });
      }
    },
    addToFavorite(item) {
      let productFavorites = { productId: item };
      // console.log(productFavorites);
      axios
        .post(
          this.$store.state.MainLink + "customer/favorite/add",
          productFavorites,
          {
            headers: {
              Authorization: this.$store.state.tokenUser,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.getDataFavorites();
        });
      // this.getDataFavorites();
    },
    getDataFavorites() {
      axios
        .get(this.$store.state.MainLink + "customer/favorite/get", {
          headers: {
            Authorization: this.$store.state.tokenUser,
          },
        })
        .then((response) => {
          console.log(response.data.object);
          this.$store.state.totalFavorites = response.data.object;
        })
        .catch((e) => {
          this.error.push(e);
          console.log(e);
        });
    },
    isFavorited(product) {
      if (this.$store.state.tokenUser == "") {
        return false;
      } else {
        return (
          this.$store.state.totalFavorites.filter(
            (Prct) => Prct.id == product.id
          ).length > 0
        );
      }
    },
    getBlog() {
      axios
        .get(this.$store.state.MainLink + "customer/blog")
        .then((response) => {
          this.getBlogHL = response.data.object;
          // console.log(this.getBlogHL);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scope>
a {
  text-decoration: none;
}
</style>
