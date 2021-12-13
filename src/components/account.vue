<template>
  <div class="uk-offcanvas-content">
    <main>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium" uk-grid>
            <div class="uk-width-1-1 uk-width-1-4@m tm-aside-column">
              <div
                class="
                  uk-card uk-card-default uk-card-small
                  tm-ignore-container
                "
                uk-sticky="offset: 90; bottom: true; media: @m;"
              >
                <div class="uk-card-header">
                  <div class="uk-grid-small uk-child-width-1-1" uk-grid>
                    <section>
                      <div
                        class="
                          uk-width-1-3
                          uk-width-1-4@s
                          uk-width-1-2@m
                          uk-margin-auto
                          uk-visible-toggle
                          uk-position-relative
                          uk-border-circle
                          uk-overflow-hidden
                          uk-light
                        "
                      >
                        <img class="uk-width-1-1" src="images/pngegg.png" />
                        <a
                          class="
                            uk-link-reset
                            uk-overlay-primary
                            uk-position-cover
                            uk-hidden-hover
                          "
                        >
                        </a>
                      </div>
                    </section>
                    <div class="uk-text-center">
                      <div class="uk-h4 uk-margin-remove">
                        {{ this.$store.state.InfoPersonal.fullname }}
                      </div>
                      <div class="uk-text-meta">
                        {{ this.$store.state.InfoPersonal.email }}
                      </div>
                    </div>
                    <div>
                      <div class="uk-grid-small uk-flex-center" uk-grid>
                        <div>
                          <button
                            class="uk-button uk-button-default uk-button-small"
                            title="Log out"
                            @click="clearData"
                          >
                            <span uk-icon="icon: sign-out; ratio: .75;"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <nav>
                    <ul class="uk-nav uk-nav-default tm-nav">
                      <li class="uk-active">
                        <router-link to="account">
                          <a>Đơn hàng</a>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="favorites">
                          <a>Sản phẩm yêu thích</a>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="personal">
                          <a>Thông tin cá nhân</a>
                        </router-link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="uk-width-1-1 uk-width-expand@m">
              <div
                class="
                  uk-card uk-card-default uk-card-small
                  tm-ignore-container
                "
              >
                <header class="uk-card-header">
                  <h1 class="uk-h2">Đơn hàng của bạn</h1>
                </header>
                <section
                  class="uk-card-body"
                  v-for="(item, index) in listOrder"
                  :key="index"
                >
                  <h3>
                    <a class="uk-link-heading" @click="detailOrder(item.id)">#{{ item.id }}
                      <span class="uk-text-muted uk-text-small">Từ ngày {{ getDate(item.dateCreated) }}</span>
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
                        <th class="uk-width-medium">Tổng số sản phẩm</th>
                        <td>7</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Hình thức thanh toán</th>
                        <td v-if="item.typePayment == true">Thanh toán trực tuyến</td>
                        <td v-else-if="item.typePayment == false">Thanh toán khi nhận hàng</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Tổng tiền</th>
                        <td>{{formatPrice(item.sumprice)}} đ</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Trạng thái</th>
                        <td  v-if="item.status == 'Chờ xác nhận'"><span class="uk-label">Chờ xác nhận</span></td>
                        <!-- <td><span class="uk-label" v-if="item.status == 'Chờ xác nhận'">Chờ xác nhận</span></td> -->
                        <td v-else-if="item.status == 'Đã hủy'">
                          <span class="uk-label uk-label-danger">Đơn hàng bị hủy</span>
                        </td>
                        <td v-else-if="item.status == 'Đơn hàng lỗi'">
                          <span class="uk-label uk-label-danger">Đơn hàng lỗi</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
import moment from "moment";

export default {
  name: "account",
  data() {
    return {
      listOrder: "",
    };
  },
  created() {
    this.getDataUserOrder();
    this.getDataAccount();
  },
  methods: {
    clearData() {
      this.$store.state.tokenUser = "";
      this.$store.state.totalCart = 0;
      this.$store.state.InfoPersonal = {};
      this.$store.state.userName = "";
      this.$store.state.CompareCart = [];
      this.$store.state.StoreCart = [];
      localStorage.clear();
      this.$router.push({
        name: "login",
      });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getDate: (time, format = "YYYY-MM-DD") =>
      time ? moment(time, format).format("DD/MM/YYYY") : "",
    getDataUserOrder() {
      axios
        .get(this.$store.state.MainLink + "customer/orders", {
          headers: {
            Authorization: this.$store.state.tokenUser,
          },
        })
        .then((response) => {
          console.log(response.data.object);
          this.listOrder = response.data.object;
          // console.log(this.listOrder);
        })
        .catch((e) => {
          this.error.push(e);
          console.log(e);
        });
    },
    detailOrder(id){
      // console.log(id);
      this.$router.push({
        name: "detailorder",
        params: { item: id },
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
  },
};
</script>

<style>
</style>