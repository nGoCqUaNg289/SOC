<template>
  <div class="uk-offcanvas-content">
    <main>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
            <div class="uk-text-center">
              <ul class="uk-breadcrumb uk-flex-center uk-margin-remove">
                <li><a>Trang chủ</a></li>
                <li><a>Giỏ hàng</a></li>
                <li><a>Thanh toán</a></li>
              </ul>
            </div>
            <div>
              <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
                <section>
                  <article
                    class="
                      uk-card uk-card-default uk-card-body uk-article
                      tm-ignore-container
                    "
                  >
                    <header class="uk-text-center">
                      <h1 class="uk-article-title">Thanh toán hoá đơn</h1>
                    </header>
                    <section
                      class="uk-width-1-1 uk-width-expand@m"
                      style="width: 68%; float: left"
                    >
                      <article
                        class="
                          uk-card
                          uk-card-default
                          uk-card-small
                          uk-card-body
                          uk-article
                          tm-ignore-container
                        "
                      >
                        <table class="table table-custom-border">
                          <tbody>
                            <tr
                              style="border-bottom: 1px dashed silver"
                              v-for="item in DetailsOrder"
                              :key="item.id"
                            >
                              <td
                                class="
                                  custom-font-size-td
                                  size-img-cart-product
                                "
                                style="width: 15%"
                              >
                                <img :src="item.photo" alt="" width="50px" />
                              </td>
                              <td>
                                {{ item.productName.substr(6, 25) }} ...
                                <br />
                                Số lượng : {{ item.quantity }}
                              </td>
                              <td
                                class="custom-size-price-total"
                                style="vertical-align: middle"
                              >
                                {{ formatPrice(item.price) }} đ
                              </td>
                            </tr>
                            <tr>
                              <th style="width: 20%">Thành tiền</th>
                              <td></td>
                              <td
                                class="custom-size-price-total"
                                style="vertical-align: middle; color: red"
                              >
                                {{ formatPrice(sumTotal) }} đ
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </article>
                    </section>
                    <aside
                      class="uk-width-1-4 uk-visible@m tm-aside-column"
                      style="width: 28%; float: right"
                    >
                      <section
                        class="uk-card uk-card-default uk-card-small"
                        uk-sticky="offset: 90; bottom: true;"
                      >
                        <nav>
                          <ul
                            class="uk-nav uk-nav-default tm-nav"
                            style="height: 150px"
                          >
                            <li
                              class="uk-active"
                              style="border-bottom: 1px solid silver"
                            >
                              <a>Địa chỉ giao hàng</a>
                            </li>
                            <li style="margin-top: 15px">
                              <div class="font-li">{{ dataUser.fullname }}</div>
                            </li>
                            <li style="margin-top: 5px">
                              <div class="font-li">
                                {{ dataUser.address }}
                              </div>
                            </li>
                            <li style="margin-top: 5px">
                              <div class="font-li">
                                Số điện thoại: {{ dataUser.phone }}
                              </div>
                            </li>
                          </ul>
                        </nav>
                      </section>
                    </aside>
                    <section
                      class="uk-width-1-1 uk-width-expand@m"
                      style="width: 68%; float: left; margin-top: 25px"
                    >
                      <article
                        class="
                          uk-card
                          uk-card-default
                          uk-card-small
                          uk-card-body
                          uk-article
                          tm-ignore-container
                        "
                      >
                        <div>Hình thức thanh toán</div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            value="1"
                            v-model="typeOfPay"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Thanh toán khi nhận hàng
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            v-model="typeOfPay"
                            value="2"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Thanh toán trực tuyến (qua cổng VnPay)
                          </label>
                        </div>
                      </article>
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-danger-custom"
                      >
                        Hủy
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-danger-custom"
                        @click="addToOrder()"
                      >
                        Đặt mua
                      </button>
                      <em class="p-custom" style="margin-top: 5px">
                        (Vui lòng kiểm tra lại đơn hàng trước khi thanh toán)
                      </em>
                    </section>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  props: {
    item: Number,
  },
  data() {
    return {
      getData: "",
      dataUser: {},
      DetailsOrder: [],
      sumTotal: 0,
      typeOfPay: "1",
    };
  },
  created() {
    // this.getBlog();
    this.getDataUser();
    this.getOrderUser();
    this.sumPrice();
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getDataUser() {
      this.dataUser = this.$store.state.InfoPersonal;
    },
    getOrderUser() {
      this.DetailsOrder = this.$store.state.StoreCart;
      // console.log(this.DetailsOrder);
    },
    sumPrice() {
      for (let i = 0; i < this.DetailsOrder.length; i++) {
        this.sumTotal +=
          this.DetailsOrder[i].price * this.DetailsOrder[i].quantity;
      }
      return this.sumTotal;
    },
    addToOrder() {
      console.log(this.typeOfPay);
      // if(this.typeOfPay){

      // }
    },
  },
};
</script>

<style scope>
.section-custom {
  margin-top: 5%;
}
td.custom-size-price-total {
  width: 20%;
}
.btn-danger-custom {
  margin: 15px;
  width: 45%;
  /* text-align: center */
}
.p-custom {
  color: gray;
  font-size: 14px;
  margin-top: 5px;
  margin: 0px;
}
</style>