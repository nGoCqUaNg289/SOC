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
                      <!-- <article
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
                      </article> -->

                      <div class="uk-card uk-card-default uk-card-small tm-ignore-container">
                            <header class="uk-card-header text-center">
                            <h1 class="uk-h2">Đơn hàng của bạn</h1>
                            </header>
                            <section class="uk-card-body">
                            <h3>
                                <a class="uk-link-heading"># {{detailOrder.id}}
                                    <span class="uk-text-muted uk-text-small">Từ ngày {{getDate(detailOrder.dateCreated)}}</span>
                                </a>
                            </h3>
                            <table
                                class="
                                uk-table
                                uk-table-small
                                uk-table-justify
                                uk-table-responsive
                                uk-table-divider
                                uk-margin-small-top
                                uk-margin-remove-bottom
                                "
                            >
                                <tbody>
                                <tr>
                                    <th class="uk-width-medium">Họ tên người mua</th>
                                    <td>{{  detailOrder.customer.fullname }}</td>
                                </tr>
                                <tr>
                                    <th class="uk-width-medium">Email</th>
                                    <td>{{  detailOrder.customer.email }}</td>
                                </tr>
                                <tr>
                                    <th class="uk-width-medium">Điện thoại</th>
                                    <td>{{  detailOrder.customer.phone }}</td>
                                </tr>
                                <tr>
                                    <th class="uk-width-medium">Địa chỉ giao hàng</th>
                                    <td>{{  detailOrder.customer.address }}</td>
                                </tr>
                                <tr>
                                    <th class="uk-width-medium">Tổng số sản phẩm</th>
                                    <td>{{ detailOrder.orderDetails.length }}</td>
                                </tr>
                                <tr>
                                    <th class="uk-width-medium">Hình thức thanh toán</th>
                                    <td>Thanh toán online</td>
                                </tr>
                                <tr>
                                    <th class="uk-width-medium">Tổng tiền</th>
                                    <td>{{formatPrice(detailOrder.sumprice)}} đ</td>
                                </tr>
                                <tr>
                                    <th class="uk-width-medium">Trạng thái</th>
                                    <td><span class="uk-label" v-if="detailOrder.status == 'Chờ xác nhận'">Chờ xác nhận</span></td>
                                    <td>
                                    <span class="uk-label uk-label-danger" v-if="detailOrder.status == 'Hủy'">Đơn hàng bị hủy</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br>
                            <br>
                            <table class="table" v-for="(item, index) in detailOrder.orderDetails" :key="index">
                                <thead>
                                <tr>
                                    <th scope="col">#{{index + 1}}</th>
                                    <th scope="col">{{item.productName}} </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td scope="row">Giá sản phẩm</td>
                                    <td>{{formatPrice(item.price)}} đ</td>
                                </tr>
                                <tr>
                                    <td scope="row">Số lượng</td>
                                    <td>{{item.quantity}}</td>
                                </tr>
                                </tbody>
                            </table>
                            </section>
                        </div>
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
      console.log(localStorage.orderDetails);
      axios
        .get(this.$store.state.MainLink + "customer/orders/" + localStorage.orderDetails, {
          headers: {
            Authorization: localStorage.userToken,
          },
        })
        .then((response) => {
          this.detailOrder = response.data.object;
          // console.log(this.detailOrder);
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