<template>
  <div class="uk-offcanvas-content">
    <main>
      <div>
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
              <div
                class="uk-section uk-section-default uk-section-small"
                v-if="this.DetailCompare.length > 0"
              >
                <div
                  class="
                    uk-card uk-card-default uk-overflow-auto
                    tm-ignore-container
                  "
                >
                  <table class="uk-table uk-table-divider tm-compare-table">
                    <thead class="uk-child-width-1-4">
                      <tr>
                        <td
                          class="
                            uk-table-middle uk-text-center
                            tm-compare-column
                          "
                          style="width: 15%"
                        ></td>
                        <td
                          class="tm-compare-table-column"
                          v-for="(item, index) in DetailCompare"
                          :key="item.id"
                        >
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
                                  <span
                                    uk-icon="icon: close; ratio: .75;"
                                  ></span>
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
                                      <a
                                        class="tm-media-box"
                                        href="product.html"
                                      >
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
                          <h3 class="uk-margin-remove">Thông số chi tiết</h3>
                        </th>
                      </tr>
                      <tr v-for="(item, index) in detailProduct" :key="index">
                        <th>
                          {{ item[0] }}
                        </th>
                        <td>
                          {{ item[1] }}
                        </td>
                        <td>
                          {{ item[2] }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="uk-section uk-section-default uk-section-small"
                v-else style="text-align: center">
                <img src="images/compare.png" alt="" width="150px" style="margin-bottom: 25px">
                <p>Bạn đang phân vân chưa biết mình nên chọn máy nào? </p>
                <p>Hãy để chúng tôi giúp bạn có lựa chọn tốt nhất !</p>
                <button class="btn-custom-back btn btn-outline-primary" @click="backToCategory()">
                Các sản phẩm khác
              </button>
              </div>
            </div>
          </div>
        </section>
        <section>
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
                    <div
                      class="uk-text-center uk-text-left@s uk-width-expand@s"
                    >
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
                    <div>
                      <span uk-icon="icon: receiver; ratio: 2.5;"></span>
                    </div>
                    <div
                      class="uk-text-center uk-text-left@s uk-width-expand@s"
                    >
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
                    <div>
                      <span uk-icon="icon: location; ratio: 2.5;"></span>
                    </div>
                    <div
                      class="uk-text-center uk-text-left@s uk-width-expand@s"
                    >
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
                    <div>
                      <span uk-icon="icon: comments; ratio: 2.5;"></span>
                    </div>
                    <div
                      class="uk-text-center uk-text-left@s uk-width-expand@s"
                    >
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
                    <div
                      class="uk-text-center uk-text-left@s uk-width-expand@s"
                    >
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
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "compare",
  data() {
    return {
      DetailCompare: [],
      detailProduct: [],
      compareDetail: [],
    };
  },
  created() {
    this.getDetailCompare();
    // this.getCompare();
  },
  methods: {
    backToCategory(){
      this.$router.push({
        name: "category",
        // params: { item: id },
      })
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getDetailCompare() {
      this.DetailCompare = this.$store.state.CompareCart;

      let detailsa = this.$store.state.CompareCart[0].productDetails;
      let detailsb = this.$store.state.CompareCart[1].productDetails;
      let countb = 0;

      this.detailProduct = detailsa.map((detaila) => {
        let detailb = detailsb.filter((d) => {
          return d.propertyName == detaila.propertyName;
        })[0];
        if (detailb == undefined) {
          return [detaila.propertyName, detaila.propertyValue, "-"];
        } else {
          countb++;
          return [
            detaila.propertyName,
            detaila.propertyValue,
            detailb.propertyValue,
          ];
        }
      });
      if (countb < detailsb.length) {
        detailsb.forEach((detail) => {
          if (
            this.detailProduct.filter((de) => de[0] == detail.propertyName)
              .length == 0
          ) {
            this.detailProduct.push([
              detail.propertyName,
              "-",
              detail.propertyValue,
            ]);
          }
        });
      }

      console.log(this.detailProduct);
    },

    deleteProduct(index) {
      console.log(index);
      this.DetailCompare.splice(index, 1);
      this.detailProduct = this.detailProduct.map((de) => {
        if (index == 0) {
          de[1] = de[2];
          de[2] = "";
          return de;
        } else {
          de[2] = "";
          return de;
        }
      });
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