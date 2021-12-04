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
                >
                  <h3>
                    <a class="uk-link-heading"
                      >#{{  detailOrder.id }}
                      <span class="uk-text-muted uk-text-small"
                        >Từ ngày {{ getDate(detailOrder.dateCreated) }}</span
                      ></a
                    >
                    <!-- {{  detailOrder.orderDetails.length }} -->
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
                        <th scope="col">{{item.productName.substr(6,35)}} ... </th>
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
  name: "detailOrder",
  props: {
    item: Number,
  },
  data() {
    return {
      detailOrder: "",
    };
  },
  created() {
    this.getDataUserOrder();
    // console.log(this.item)
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
        .get(this.$store.state.MainLink + "customer/orders/" + this.item, {
          headers: {
            Authorization: this.$store.state.tokenUser,
          },
        })
        .then((response) => {
          // console.log(response.data.object);
          this.detailOrder = response.data.object;
          console.log(this.detailOrder);
        })
        .catch((e) => {
          this.error.push(e);
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>