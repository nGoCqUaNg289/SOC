<template>
  <div class="uk-offcanvas-content">
    <main>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
            <div class="uk-text-center">
              <ul class="uk-breadcrumb uk-flex-center uk-margin-remove">
                <li><a href="index.html">Home</a></li>
                <li><span>Compare</span></li>
              </ul>
              <h1 class="uk-margin-small-top uk-margin-remove-bottom">
                Compare
              </h1>
            </div>
            <div>
              <div
                class="
                  uk-card uk-card-default uk-overflow-auto
                  tm-ignore-container
                "
              >
                <table class="uk-table uk-table-divider tm-compare-table">
                  <thead class="uk-child-width-1-4"
                      v-for="(item, index) in DetailCompare"
                      :key="item.id">
                      <!-- {{item}} -->
                    <tr>
                      <td class="uk-table-middle uk-text-center tm-compare-column"></td>
                      <td class="tm-compare-table-column">
                        <div class="uk-height-1-1">
                          <div
                            class="
                              uk-grid-small uk-child-width-1-1 uk-height-1-1
                            "
                            uk-grid
                          >
                            <div class="uk-text-center">
                              <a
                                class="uk-text-small uk-text-danger"
                                @click="deleteProduct(index)"
                              >
                                <span uk-icon="icon: close; ratio: .75;"></span>
                                <span class="uk-margin-xsmall-left tm-pseudo"
                                  >Xoá</span
                                >
                              </a>
                            </div>
                            <div>
                              <div
                                class="uk-grid-small uk-height-1-1"
                                uk-grid="uk-grid"
                              >
                                <div class="uk-width-1-3">
                                  <div class="tm-ratio tm-ratio-4-3">
                                    <a class="tm-media-box" href="product.html">
                                      <figure class="tm-media-box-wrap">
                                        <img :src="item.photos" />
                                      </figure>
                                    </a>
                                  </div>
                                </div>
                                <div class="uk-width-expand">
                                  <div
                                    class="
                                      tm-product-card-body
                                      uk-padding-remove uk-height-1-1
                                    "
                                  >
                                    <div class="tm-product-card-info">
                                      <div
                                        class="
                                          uk-text-meta uk-margin-xsmall-bottom
                                        "
                                      >
                                        Laptop
                                      </div>
                                      <div class="tm-product-card-title">
                                        {{ item.name }}
                                      </div>
                                    </div>
                                    <div class="tm-product-card-shop">
                                      <div class="tm-product-card-prices">
                                        <!-- <del class="uk-text-meta">$1899.00</del> -->
                                        <div class="tm-product-card-price">
                                          {{ formatPrice(item.price) }} đ
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="tm-compare-table-column">
                        <div class="uk-height-1-1">
                          <div
                            class="
                              uk-grid-small uk-child-width-1-1 uk-height-1-1
                            "
                            uk-grid
                          >
                            <div class="uk-text-center">
                              <a
                                class="uk-text-small uk-text-danger"
                                @click="deleteProduct(index)"
                              >
                                <span uk-icon="icon: close; ratio: .75;"></span>
                                <span class="uk-margin-xsmall-left tm-pseudo"
                                  >Xoá</span
                                >
                              </a>
                            </div>
                            <div>
                              <div
                                class="uk-grid-small uk-height-1-1"
                                uk-grid="uk-grid"
                              >
                                <div class="uk-width-1-3">
                                  <div class="tm-ratio tm-ratio-4-3">
                                    <a class="tm-media-box" href="product.html">
                                      <figure class="tm-media-box-wrap">
                                        <img :src="item.photos" />
                                      </figure>
                                    </a>
                                  </div>
                                </div>
                                <div class="uk-width-expand">
                                  <div
                                    class="
                                      tm-product-card-body
                                      uk-padding-remove uk-height-1-1
                                    "
                                  >
                                    <div class="tm-product-card-info">
                                      <div
                                        class="
                                          uk-text-meta uk-margin-xsmall-bottom
                                        "
                                      >
                                        Laptop
                                      </div>
                                      <div class="tm-product-card-title">
                                        {{ item.name }}
                                      </div>
                                    </div>
                                    <div class="tm-product-card-shop">
                                      <div class="tm-product-card-prices">
                                        <!-- <del class="uk-text-meta">$1899.00</del> -->
                                        <div class="tm-product-card-price">
                                          {{ formatPrice(item.price) }} đ
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th colspan="4">
                        <h3 class="uk-margin-remove">Performance</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Bộ nhớ</th>
                      <td>Intel&nbsp;Core i7&nbsp;Quad-Core</td>
                      <td>Intel&nbsp;Core i5&nbsp;Dual-Core</td>
                    </tr>
                    <tr>
                      <th>GPU</th>
                      <td>2.8&nbsp;GHz</td>
                      <td>1.3&nbsp;GHz</td>
                    </tr>
                    <tr>
                      <th>OS</th>
                      <td>3.8&nbsp;GHz</td>
                      <td>3.2&nbsp;GHz</td>
                    </tr>
                    <tr>
                      <th>Kết nối</th>
                      <td>16&nbsp;GB</td>
                      <td>8&nbsp;GB</td>
                    </tr>
                    <tr>
                      <th>Màn hình</th>
                      <td>LPDDR3&nbsp;SDRAM</td>
                      <td>LPDDR3&nbsp;SDRAM</td>
                    </tr>
                    <tr>
                      <th>Pin</th>
                      <td>2133&nbsp;MHz</td>
                      <td>1866&nbsp;MHz</td>
                    </tr>
                    <tr>
                      <th>RAM</th>
                      <td>16&nbsp;GB</td>
                      <td>8&nbsp;GB</td>
                    </tr>
                    <tr>
                      <th>TouchPab</th>
                      <td>—</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <th>Graphics Type</th>
                      <td>Hybrid</td>
                      <td>Integrated</td>
                    </tr>
                    <tr>
                      <th>GPU</th>
                      <td>
                        AMD Radeon&nbsp;Pro 555 with 2&nbsp;GB&nbsp;GDDR5
                        VRAM,<br />Intel HD Graphics&nbsp;630
                      </td>
                      <td>Intel HD Graphics&nbsp;615</td>
                    </tr>
                  </tbody>
                </table>
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
export default {
  name: "compare",
  data() {
    return {
      DetailCompare: [],
    };
  },
  created() {
      this.getDetailCompare();
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getDetailCompare() {
      this.DetailCompare = this.$store.state.CompareCart;
      console.log(this.DetailCompare)
    },
    deleteProduct(index) {
      console.log(index);
      this.DetailCompare.splice(index, 1);
    },
  },
  watch: {
    changeCart: function () {
      this.DetailCompare = this.$store.state.CompareCart;
    },
  },
};
</script>

<style>
</style>