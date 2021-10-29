<template>
  <div class="uk-offcanvas-content">
    <main>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
            <div class="uk-text-center">
              <ul class="uk-breadcrumb uk-flex-center uk-margin-remove">
                <li><a>Trang chủ</a></li>
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
                                  value="1"
                                  type="checkbox"
                                />
                                <label for="brand-1"
                                  ><span
                                    >Acer
                                    <span class="uk-text-meta uk-text-xsmall"
                                      >177</span
                                    ></span
                                  ></label
                                >
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
                                  <li>
                                    <a class="uk-text-lowercase">Giá</a>
                                  </li>
                                  <li>
                                    <a class="uk-text-lowercase">Mới nhất</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- <div
                                class="
                                  uk-width-1-1
                                  uk-width-auto@s
                                  uk-flex
                                  uk-flex-center
                                  uk-flex-middle
                                "
                              >
                                <button
                                  class="
                                    uk-button
                                    uk-button-default
                                    uk-button-small
                                    uk-hidden@m
                                  "
                                  uk-toggle="target: #filters"
                                >
                                  <span
                                    class="uk-margin-xsmall-right"
                                    uk-icon="icon: settings; ratio: .75;"
                                  ></span
                                  >Filters
                                </button>
                                <div
                                  class="tm-change-view uk-margin-small-left"
                                >
                                  <ul
                                    class="uk-subnav uk-iconnav js-change-view"
                                    uk-switcher
                                  >
                                    <li>
                                      <a
                                        class="uk-active"
                                        data-view="grid"
                                        uk-icon="grid"
                                        uk-tooltip="Grid"
                                      ></a>
                                    </li>
                                    <li>
                                      <a
                                        data-view="list"
                                        uk-icon="list"
                                        uk-tooltip="List"
                                      ></a>
                                    </li>
                                  </ul>
                                </div>
                              </div> -->
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
                                      <a class="uk-link-heading">{{
                                        item.name
                                      }}</a>
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
                                          ><span
                                            uk-icon="icon: heart; ratio: .75;"
                                          ></span
                                          ><span
                                            class="tm-product-card-action-text"
                                            >Add to favorites</span
                                          ></a
                                        >
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
                                          >add to cart</span
                                        >
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                          <div>
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul class="uk-pagination uk-flex-center">
                        <li class="uk-active"><span>1</span></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li>
                        <li><a>4</a></li>
                        <li><a>5</a></li>
                        <li class="uk-disabled"><span>…</span></li>
                        <li><a>20</a></li>
                        <li>
                          <a><span uk-pagination-next></span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  components: {},
  data() {
    return {
      getData: "",
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
      },

      CartDetail: [],
      DetailCompare: [],
    };
  },
  created() {
    this.getDT();
    // this.callFunction();
  },
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getDT() {
      axios
        .get("https://javamahtest.herokuapp.com/api/customer/products")
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
      console.log(id);
      this.$router.push({
        name: "product",
        params: { item: id },
      });
    },
    addToCart(id, name, photos, price) {
      let item = {
        name: name,
        id: id,
        photos: photos,
        price: price,
      };
      this.$store.state.StoreCart.push(item);
      console.log(this.$store.state.StoreCart);
      alert("Đã thêm sản phẩm vào giỏ hàng!");
    },
    compareProduct(item) {
      console.log(this.$store.state.CompareCart.length);
      if (this.$store.state.CompareCart.length < 2) {
        this.$store.state.CompareCart.push(item);
        alert("Đã thêm sản phẩm vào mục so sánh!");
      }else{
        alert("Bạn đã chọn tối đa 2 sản phẩm cần so sánh!")
      }

    },
  },
};
</script>

<style>
</style>