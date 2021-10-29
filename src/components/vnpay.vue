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
                        <table class="table table-custom-border" id="">
                          <tbody>
                            <tr style="border-bottom: 1px dashed silver">
                              <td
                                class="
                                  custom-font-size-td
                                  size-img-cart-product
                                "
                                style="width: 15%"
                              >
                                <img
                                  src="images/emptycart.png"
                                  alt=""
                                  width="50px"
                                />
                              </td>
                              <td>
                                Tên sản phẩm
                                <br />
                                Số lượng : 1
                              </td>
                              <td
                                class="custom-size-price-total"
                                style="vertical-align: middle"
                              >
                                18.000.000 đ
                              </td>
                            </tr>
                            <tr style="border-bottom: 1px dashed silver">
                              <td
                                class="
                                  custom-font-size-td
                                  size-img-cart-product
                                "
                                style="width: 15%"
                              >
                                <img
                                  src="images/emptycart.png"
                                  alt=""
                                  width="50px"
                                />
                              </td>
                              <td>
                                Tên sản phẩm
                                <br />
                                Số lượng : 1
                              </td>
                              <td
                                class="custom-size-price-total"
                                style="vertical-align: middle"
                              >
                                18.000.000 đ
                              </td>
                            </tr>
                            <tr style="border-bottom: 1px dashed silver">
                              <td
                                class="
                                  custom-font-size-td
                                  size-img-cart-product
                                "
                                style="width: 15%"
                              >
                                <img
                                  src="images/emptycart.png"
                                  alt=""
                                  width="50px"
                                />
                              </td>
                              <td>
                                Tên sản phẩm
                                <br />
                                Số lượng : 1
                              </td>
                              <td
                                class="custom-size-price-total"
                                style="vertical-align: middle"
                              >
                                18.000.000 đ
                              </td>
                            </tr>
                            <tr>
                              <th style="width: 20%">Thành tiền</th>
                              <td></td>
                              <td
                                class="custom-size-price-total"
                                style="vertical-align: middle; color: red"
                              >
                                18.000.000 đ
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
                              <div class="font-li">Trịnh Ngọc Quang</div>
                            </li>
                            <li style="margin-top: 5px">
                              <div class="font-li">
                                Số nhà 72, ngách 153/30, Tổ 2, Phú Đô
                              </div>
                            </li>
                            <li style="margin-top: 5px">
                              <div class="font-li">
                                Số điện thoại: 0829271132
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
                            checked
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
                        class="btn btn-outline-danger btn-danger-custom"
                      >
                        Đặt mua
                      </button>
                      <p class="p-custom" style="margin-top: 5px">
                        (Vui lòng kiểm tra lại đơn hàng trước khi thanh toán)
                      </p>
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
import axios from "axios";
export default {
  props: {
    item: Number,
  },
  data() {
    return {
      getData: "",
    };
  },
  created() {
    this.getBlog();
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getBlog() {
      axios
        .get("https://javamahtest.herokuapp.com/api/customer/blog/" + this.item)
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
td.custom-size-price-total {
  width: 20%;
}
.btn-danger-custom {
  margin-top: 25px;
  width: 40%;
  /* text-align: center */
}
.p-custom {
  color: gray;
  font-size: 14px;
  margin-top: 5px;
  margin: 0px;
}
</style>