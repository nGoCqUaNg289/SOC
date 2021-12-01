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
                  <article
                    class="
                      uk-card uk-card-default uk-card-body uk-article
                      tm-ignore-container
                    "
                  >
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

export default {
  name: "vnpayresult",
  components: {
    // loadingform,
  },
  data() {
    return {
      vnResult: {},
    };
  },
  created() {
    this.callFunction();
    // console.log(this.vnResult);
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
        // payDone: this.$route.query.vnp_Pay,
        TransactionNo: this.$route.query.vnp_TransactionNo,
      };
      //   console.log(this.$route.query.vnp_TransactionStatus);
      console.log(this.vnResult);
    },
    backToHome() {
      this.$router.push({
        name: "Home",
        // params: { item: id },
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