<template>
  <div class="uk-offcanvas-content">
    <!-- <i class="fas fa-cart-plus"></i> -->
    <main>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
            <div class="uk-text-center">
              <ul class="uk-breadcrumb uk-flex-center uk-margin-remove">
                <li>
                  <router-link to="/" style="text-decoration: none">
                    <a>Trang chủ</a>
                  </router-link>
                </li>
                <li><a>Danh mục sản phẩm</a></li>
                <li><span>Laptops</span></li>
              </ul>
              <h1 class="uk-margin-small-top uk-margin-remove-bottom">
                Laptops
              </h1>
              <!-- <div class="uk-text-meta uk-margin-xsmall-top">367 items</div> -->
            </div>

            <div>
              <div class="uk-grid-medium" uk-grid>
                <aside
                  class="uk-width-1-4 tm-aside-column tm-filters"
                  id="filters"
                  uk-offcanvas="overlay: true; container: false;"
                >
                  <div class="uk-offcanvas-bar uk-padding-remove">
                    <div
                      class="
                        uk-card
                        uk-card-default
                        uk-card-small
                        uk-flex
                        uk-flex-column
                        uk-height-1-1
                      "
                    >
                      <header class="uk-card-header uk-flex uk-flex-middle">
                        <div class="uk-grid-small uk-flex-1" uk-grid>
                          <div class="uk-width-expand">
                            <div class="uk-h3">Bộ lọc</div>
                          </div>
                          <button
                            class="uk-offcanvas-close"
                            type="button"
                            uk-close
                          ></button>
                        </div>
                      </header>
                      <div
                        class="uk-margin-remove uk-flex-1 uk-overflow-auto"
                        uk-accordion="multiple: true; targets: &gt; .js-accordion-section"
                        style="flex-basis: auto"
                      >
                        <section class="uk-card-small uk-card-body">
                          <h4 class="uk-margin-small-bottom">Thể loại</h4>
                          <ul class="uk-nav uk-nav-default">
                            <li><a>Laptop Gaming</a></li>
                            <li><a>Laptop văn phòng</a></li>
                            <li><a>Laptop mỏng nhẹ</a></li>
                            <li><a>Laptop đồ hoạ</a></li>
                            <li><a>Phụ kiện PC</a></li>
                          </ul>
                        </section>
                        <section
                          class="uk-card-body uk-open js-accordion-section"
                        >
                          <h4 class="uk-accordion-title uk-margin-remove">
                            Giá thành
                          </h4>
                          <div class="uk-accordion-content">
                            <div
                              class="
                                uk-grid-small uk-child-width-1-2 uk-text-small
                              "
                              uk-grid
                            >
                              <div>
                                <div class="uk-inline">
                                  <span class="uk-form-icon uk-text-xsmall"
                                    >Từ</span
                                  >
                                  <input
                                    class="uk-input"
                                    type="text"
                                    placeholder="~"
                                  />
                                </div>
                              </div>
                              <div>
                                <div class="uk-inline">
                                  <span class="uk-form-icon uk-text-xsmall"
                                    >Tới</span
                                  >
                                  <input
                                    class="uk-input"
                                    type="text"
                                    placeholder="~"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section
                          class="uk-card-body js-accordion-section uk-open"
                        >
                          <h4 class="uk-accordion-title uk-margin-remove">
                            Thương hiệu
                          </h4>
                          <div class="uk-accordion-content">
                            <ul class="uk-list tm-scrollbox">
                              <li>
                                <input
                                  class="tm-checkbox"
                                  id="brand-1"
                                  name="brand"
                                  value="acer"
                                  type="checkbox"
                                  @click="searchProduct()"
                                />
                                <label for="brand-1">
                                  <span>Acer</span>
                                </label>
                              </li>
                              <li>
                                <input
                                  class="tm-checkbox"
                                  id="brand-2"
                                  name="brand"
                                  value="2"
                                  type="checkbox"
                                />
                                <label for="brand-2"
                                  ><span
                                    >Apple
                                    <span class="uk-text-meta uk-text-xsmall"
                                      >18</span
                                    ></span
                                  ></label
                                >
                              </li>
                              <li>
                                <input
                                  class="tm-checkbox"
                                  id="brand-3"
                                  name="brand"
                                  value="3"
                                  type="checkbox"
                                />
                                <label for="brand-3"
                                  ><span
                                    >ASUS
                                    <span class="uk-text-meta uk-text-xsmall"
                                      >150</span
                                    ></span
                                  ></label
                                >
                              </li>
                              <li>
                                <input
                                  class="tm-checkbox"
                                  id="brand-4"
                                  name="brand"
                                  value="4"
                                  type="checkbox"
                                />
                                <label for="brand-4"
                                  ><span
                                    >Dell
                                    <span class="uk-text-meta uk-text-xsmall"
                                      >170</span
                                    ></span
                                  ></label
                                >
                              </li>
                              <li>
                                <input
                                  class="tm-checkbox"
                                  id="brand-5"
                                  name="brand"
                                  value="5"
                                  type="checkbox"
                                />
                                <label for="brand-5"
                                  ><span
                                    >HP
                                    <span class="uk-text-meta uk-text-xsmall"
                                      >498</span
                                    ></span
                                  ></label
                                >
                              </li>
                              <li>
                                <input
                                  class="tm-checkbox"
                                  id="brand-6"
                                  name="brand"
                                  value="6"
                                  type="checkbox"
                                />
                                <label for="brand-6"
                                  ><span
                                    >MSI
                                    <span class="uk-text-meta uk-text-xsmall"
                                      >54</span
                                    ></span
                                  ></label
                                >
                              </li>
                              <li>
                                <input
                                  class="tm-checkbox"
                                  id="brand-7"
                                  name="brand"
                                  value="7"
                                  type="checkbox"
                                />
                                <label for="brand-7"
                                  ><span
                                    >Samsung
                                    <span class="uk-text-meta uk-text-xsmall"
                                      >1</span
                                    ></span
                                  ></label
                                >
                              </li>
                              <li>
                                <input
                                  class="tm-checkbox"
                                  id="brand-8"
                                  name="brand"
                                  value="8"
                                  type="checkbox"
                                />
                                <label for="brand-8"
                                  ><span
                                    >Sony
                                    <span class="uk-text-meta uk-text-xsmall"
                                      >1</span
                                    ></span
                                  ></label
                                >
                              </li>
                            </ul>
                          </div>
                        </section>
                        <div class="uk-card-body">
                          <button
                            class="uk-button uk-button-default uk-width-1-1"
                            @click="getDT()"
                          >
                            <span
                              class="uk-margin-xsmall-right"
                              uk-icon="icon: close; ratio: .75;"
                            ></span
                            >Bỏ lọc
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                <div class="uk-width-expand">
                  <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
                    <div>
                      <div
                        class="
                          uk-card uk-card-default uk-card-small
                          tm-ignore-container
                        "
                      >
                        <div
                          class="uk-grid-collapse uk-child-width-1-1"
                          id="products"
                          uk-grid
                          v-if="getData.length > 0"
                        >
                          <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                              <div
                                class="
                                  uk-width-1-1
                                  uk-width-expand@s
                                  uk-flex
                                  uk-flex-center
                                  uk-flex-left@s
                                  uk-text-small
                                "
                              >
                                <span
                                  class="uk-margin-small-right uk-text-muted"
                                  >Sắp xếp theo:</span
                                >
                                <ul class="uk-subnav uk-margin-remove">
                                  <li class="uk-active uk-padding-remove">
                                    <a class="uk-text-lowercase"
                                      >Liên quan<span
                                        class="uk-margin-xsmall-left"
                                        uk-icon="icon: chevron-down; ratio: .5;"
                                      ></span
                                    ></a>
                                  </li>
                                  <!-- <li>
                                    <a class="uk-text-lowercase">Giá</a>
                                  </li>
                                  <li>
                                    <a class="uk-text-lowercase">Mới nhất</a>
                                  </li> -->
                                </ul>
                              </div>
                              <a
                                class="uk-navbar-toggle tm-navbar-button"
                                uk-search-icon
                              ></a>
                              <div
                                class="
                                  uk-navbar-dropdown
                                  uk-padding-small
                                  uk-margin-remove
                                "
                                uk-drop="mode: click;cls-drop: uk-navbar-dropdown;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
                              >
                                <div class="uk-container">
                                  <div
                                    class="uk-grid-small uk-flex-middle"
                                    uk-grid
                                  >
                                    <div class="uk-width-expand">
                                      <form
                                        class="
                                          uk-search
                                          uk-search-navbar
                                          uk-width-1-1
                                        "
                                      >
                                        <input
                                          class="uk-search-input"
                                          type="search"
                                          placeholder="Tìm kiếm…"
                                          autofocus
                                          v-model="searchText"
                                        />
                                      </form>
                                    </div>
                                    <div class="uk-width-auto">
                                      <a
                                        class="uk-navbar-dropdown-close"
                                        uk-search-icon
                                        @click="searchProduct(searchText)"
                                      ></a>
                                      <!-- <a
                                        class="uk-navbar-dropdown-close"
                                        uk-close
                                      ></a> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="
                                  uk-width-1-1
                                  uk-width-auto@s
                                  uk-flex
                                  uk-flex-center
                                  uk-flex-middle
                                "
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div
                              class="
                                uk-grid-collapse uk-child-width-1-3
                                tm-products-grid
                                js-products-grid
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
                                    <a class="tm-media-box">
                                      <div class="tm-product-card-labels">
                                        <span class="uk-label uk-label-warning"
                                          >top selling</span
                                        >
                                        <span class="uk-label uk-label-danger"
                                          >trade-in</span
                                        >
                                      </div>
                                      <figure class="tm-media-box-wrap">
                                        <img :src="item.photos[0]" />
                                      </figure>
                                    </a>
                                  </div>
                                </div>
                                <div class="tm-product-card-body">
                                  <div class="tm-product-card-info">
                                    <div
                                      class="
                                        uk-text-meta uk-margin-xsmall-bottom
                                      "
                                    >
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
                                      <div
                                        class="
                                          uk-text-meta
                                          tm-product-card-actions
                                        "
                                      >
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
                                            :icon="
                                              isFavorited(item)
                                                ? 'heart-fill'
                                                : 'heart'
                                            "
                                            style="color: red"
                                          ></b-icon>
                                          <!-- <b-icon icon="heart" style="color: red"></b-icon> -->
                                          <span
                                            class="tm-product-card-action-text"
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
                                          <span
                                            uk-icon="icon: copy; ratio: .75;"
                                          ></span>
                                          <span
                                            class="tm-product-card-action-text"
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
                                          class="
                                            tm-product-card-add-button-icon
                                          "
                                          uk-icon="cart"
                                        ></span
                                        ><span
                                          class="
                                            tm-product-card-add-button-text
                                          "
                                          >Add to cart</span
                                        >
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                          <!-- <div>
                            <button
                              class="
                                uk-button
                                uk-button-default
                                uk-button-large
                                uk-width-1-1
                              "
                              style="
                                border-top-left-radius: 0;
                                border-top-right-radius: 0;
                              "
                            >
                              <span
                                class="uk-margin-small-right"
                                uk-icon="icon: plus; ratio: .75;"
                              ></span
                              ><span>Load more</span>
                            </button>
                          </div> -->
                        </div>
                        <loadingform v-else></loadingform>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import loadingform from "../containers/loadingform.vue";

export default {
  components: {
    loadingform,
  },
  data() {
    return {
      getData: "",
      formData: {
        product_id: "",
        quantiy: "",
        price: "",
      },
      checkFavorites: "",
      CartDetail: [],
      DetailCompare: [],
      searchText: "",
    };
  },
  created() {
    this.getDT();
  },
  methods: {
    filteredList() {
      return this.getData.filter((data) =>
        data.toLowerCase().includes(this.searchText.value.toLowerCase())
      );
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getDT() {
      this.checkFavorites = this.$store.state.tokenUser;
      axios
        .get(this.$store.state.MainLink + "customer/products")
        .then((response) => {
          this.getData = response.data.object;
          // console.log(response.data.object[0]);
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
        // console.log("chạy vào không có token");
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
      console.log(this.$store.state.CompareCart.length);
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
    searchProduct(nameProduct) {
      axios
        .get(
          this.$store.state.MainLink + "customer/products?find=" + nameProduct
        )
        .then((response) => {
          this.getData = response.data.object;
          console.log(response.data.object);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addToFavorite(item) {
      let productFavorites = { productId: item };
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
    },
    getDataFavorites() {
      axios
        .get(this.$store.state.MainLink + "customer/favorite/get", {
          headers: {
            Authorization: this.$store.state.tokenUser,
          },
        })
        .then((response) => {
          // console.log(response.data.object);
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
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>