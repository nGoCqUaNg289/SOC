<template>
  <div class="uk-offcanvas-content">
    <!-- <loadingform></loadingform> -->
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
                <li><a>Thanh toán</a></li>
                <li><a>Hóa đơn</a></li>
              </ul>
            </div>
            <div>
              <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
                <section>
                  <article class="uk-card uk-card-default uk-card-body uk-article tm-ignore-container">
                    <header class="uk-text-center">
                      <h1 class="uk-article-title">Thông tin thanh toán</h1>
                    </header>
                    <section class="uk-width-1-1 uk-width-expand@m">
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
                        <form>
                          <div class="form-group col-md-12 form-margin-top">
                            <label class="label-custom"
                              >Tình trạng thanh toán:</label
                            >
                            <label
                              class="label-custom-detail"
                              v-if="(vnResult.TransactionStatus = '00')"
                              >Thanh toán thành công!</label
                            >
                            <label
                              class="label-custom-detail label-custom-red"
                              v-else
                              >Thanh toán thất bại!</label
                            >
                          </div>
                          <div class="form-group col-md-12 form-margin-top">
                            <label class="label-custom">Giá tiền:</label>
                            <label class="label-custom-detail"
                              >{{ formatPrice(vnResult.Amount / 100) }} đ</label
                            >
                          </div>
                          <div class="form-group col-md-12 form-margin-top">
                            <label class="label-custom"
                              >Thời gian thanh toán:</label
                            >
                            <label class="label-custom-detail"
                              >{{ getDate(vnResult.PayDate) }} -
                              {{ getTime(vnResult.PayDate) }}
                            </label>
                          </div>
                          <form style="text-align: center">
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-size"
                              style="width: 30%"
                              @click="backToHome()"
                            >
                              Tiếp tục mua hàng!
                            </button>
                          </form>
                        </form>
                      </article>
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
// import loadingform from "../containers/loadingform.vue";
import moment from "moment";
import axios from "axios";

export default {
  name: "vnpayresult",
  components: {
    // loadingform,
  },
  data() {
    return {
      vnResult: {},
      detailOrder: ""
    };
  },
  created() {
    this.callFunction();
    this.getDataAccount();
    this.getTotalCart();
    this.getDataUserOrder();
  },
  methods: {
    getDate: (time, format = "YYYYMMDD") =>
      time ? moment(time, format).format("DD/MM/YYYY") : "",
    getTime: (time, format = "ssmmhh") =>
      time ? moment(time, format).format("hh:mm:ss") : "",
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    callFunction: function () {
      var v = this;
      setTimeout(function () {
        v.getDataResult();
      }, 0);
    },
    getDataResult() {
      this.vnResult = {
        Amount: this.$route.query.vnp_Amount,
        TransactionStatus: this.$route.query.vnp_TransactionStatus,
        PayDate: this.$route.query.vnp_PayDate,
        TransactionNo: this.$route.query.vnp_TransactionNo,
      };
      console.log(this.vnResult);
    },
    getDataUserOrder() {
      axios
        .get(this.$store.state.MainLink + "customer/orders/" + localStorage.orderDetails, {
          headers: {
            Authorization: this.$store.state.tokenUser,
          },
        })
        .then((response) => {
          this.detailOrder = response.data.object;
          console.log(this.detailOrder);
        })
        .catch((e) => {
          this.error.push(e);
          console.log(e);
        });
    },
    backToHome() {
      this.$router.push({
        name: "Home",
        // params: { item: id },
      });
    },
    getDetailResult() {
      // this.getTotalCart();
      axios
        .get(this.$store.state.MainLink + "customer/pay/getpaydetail?trandate=20211210&tranno=13650461", {
          headers: {
            Authorization: localStorage.userToken,
          },
        })
        .then((response) => {
          this.$store.state.userName = response.data.object.fullname;
          this.$store.state.tokenUser = localStorage.userToken
          this.$store.state.InfoPersonal = response.data.object;
          console.log(response.data.object);
        })
        .catch((e) => {
          this.error.push(e);
          console.log(e);
        });
    },
    getTotalCart() {
      axios
        .get(this.$store.state.MainLink + "customer/cart/get", {
          headers: {
            Authorization: localStorage.userToken,
          },
        })
        .then((response) => {
          this.$store.state.totalCart = response.data.object.length;
          this.$store.state.StoreCart = response.data.object;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDataAccount() {
      axios
        .get(this.$store.state.MainLink + "customer/account", {
          headers: {
            Authorization: localStorage.userToken,
          },
        })
        .then((response) => {
          this.$store.state.userName = response.data.object.fullname;
          this.$store.state.tokenUser = localStorage.userToken
          this.$store.state.InfoPersonal = response.data.object;
          this.getTotalCart();
          // console.log(response.data.object);
        })
        .catch((e) => {
          // this.error.push(e);
          console.log(e);
        });    
    },
  },
};
</script>

<style scoped>
.label-custom-detail {
  float: left;
  width: 60%;
  margin: 5px 5px 5px 5px;
  margin-bottom: 25px;
  font-weight: 600;
}
.label-custom-red {
  color: red;
}
</style>