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
              <div class="uk-card uk-card-default uk-card-small tm-ignore-container">
                <header class="uk-card-header">
                  <h1 class="uk-h2" style="float: left; margin: 10px 0 0 0">Đơn hàng của bạn</h1>
                  <button type="button" class="btn btn-outline-danger btn-size" style="float: right; margin: 10px" v-if="detailOrder.status == 'Đã xác nhận' && detailOrder.typePayment == false" uk-toggle="target: #review">Yêu cầu hủy đơn</button>
                  <button type="button" class="btn btn-outline-danger btn-size" style="float: right; margin: 10px" v-else-if="detailOrder.status == 'Chờ xác nhận' && detailOrder.typePayment == false" uk-toggle="target: #review">Hủy đơn hàng</button>
                </header>
                
                <section
                  class="uk-card-body"
                >
                  <h3>
                    <a class="uk-link-heading">#{{  detailOrder.id }}
                      <span class="uk-text-muted uk-text-small">Từ ngày {{ getDate(detailOrder.dateCreated) }}</span>
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
                        <td>{{  detailUser.fullname }}</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Email</th>
                        <td>{{  detailUser.email }}</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Điện thoại</th>
                        <td>{{  detailUser.phone }}</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Địa chỉ giao hàng</th>
                        <td>{{  detailUser.address }}</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Tổng số sản phẩm</th>
                        <td>{{ detailProduct.length }}</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Hình thức thanh toán</th>
                        <td v-if="detailOrder.typePayment == true">Thanh toán trực tuyến</td>
                        <td v-else>Thanh toán khi nhận hàng</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Tổng tiền</th>
                        <td>{{formatPrice(detailOrder.sumprice)}} đ</td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">Trạng thái</th>
                        <td v-if="detailOrder.status == 'Chờ xác nhận'"><span class="uk-label" >{{detailOrder.status}}</span></td>
                        <td v-else-if="detailOrder.status == 'Đã hủy' || detailOrder.status == 'Yêu cầu hủy' || item.status == 'Đơn hàng lỗi'">
                          <span class="uk-label uk-label-danger" >{{detailOrder.status}}</span>
                        </td>
                        <td v-else-if="detailOrder.status == 'Đang giao hàng'">
                          <span class="uk-label" style="background-color: #18F5F5;">{{detailOrder.status}}</span>
                        </td>
                        <td v-else-if="detailOrder.status == 'Giao hàng thành công'">
                          <span class="uk-label uk-label-success">{{detailOrder.status}}</span>
                        </td>
                        <td v-else>
                          <span class="uk-label">{{detailOrder.status}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>


                  <br>
                  <br>
                  <h4>
                    <a class="uk-link-heading"># Trạng thái đơn hàng
                    </a>
                  </h4>                  
                  <table class="uk-table uk-table-small uk-table-justify uk-table-responsive uk-table-divider uk-margin-small-top uk-margin-remove-bottom">
                    <tbody>
                      <tr v-for="(item, index) in statusOrder" :key="index">
                        <th class="uk-width-medium">
                          <div>{{item.timeChange}}</div>
                          <div>NVTD: {{item.changedBy}}</div>
                        </th>
                        <td>
                          <div>{{item.status}}</div>
                          <i class="uk-width-medium">
                            {{item.note}}
                          </i>
                        </td>
                      </tr>
                    </tbody>
                  </table>


                  <div v-if="detailOrder.typePayment == true">
                  <br>
                  <br>
                  <h4>
                    <a class="uk-link-heading"># Thông tin thanh toán online
                    </a>
                  </h4>                  
                  <table class="uk-table uk-table-small uk-table-justify uk-table-responsive uk-table-divider uk-margin-small-top uk-margin-remove-bottom">
                    <tbody>
                      <tr>
                        <th class="uk-width-medium">
                          <div>Tên ngân hàng</div>
                        </th>
                        <td>
                          <div>{{detailVN.bankCode}}</div>
                        </td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">
                          <div>Ngày thanh toán</div>
                        </th>
                        <td>
                          <div>{{detailVN.createDate}}</div>
                        </td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">
                          <div>Loại thẻ</div>
                        </th>
                        <td>
                          <div>{{detailVN.cardType}}</div>
                        </td>
                      </tr>
                      <tr>
                        <th class="uk-width-medium">
                          <div>Nội dung thanh toán</div>
                        </th>
                        <td>
                          <div>{{detailVN.orderInfo}}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>  
                  </div>
                  
                  <br>
                  <br>
                  <table class="table" v-for="(item, index) in detailProduct" :key="index">
                    <thead>
                      <tr>
                        <th scope="col">#{{index + 1}}</th>
                        <th scope="col">{{item.productName}}</th>
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

            <div id="review" uk-modal>
              <div class="uk-modal-dialog uk-modal-body">
                <button
                  class="uk-modal-close-outside"
                  type="button"
                  uk-close
                ></button>
                <h2 class="uk-modal-title uk-text-center">Hủy đơn</h2>
                <form class="uk-form-stacked">
                  <div class="uk-grid-small uk-child-width-1-1" uk-grid>
                    <div>
                      <label style="width: 100%">
                        <div class="uk-form-label uk-form-label-required">
                          Chọn lý do hủy đơn
                        </div>
                        <select name="reason" id="reason" style="padding: 5px;width: 100%;border-radius: 5px;box-shadow: none;" v-model="note">
                          <option value="" selected disabled>-- Chọn lý do hủy đơn --</option>
                          <option value="Thay đổi sản phẩm khác">Thay đổi sản phẩm khác</option>
                          <option value="Thay đổi thông tin nhận hàng">Thay đổi thông tin nhận hàng</option>
                          <!-- <option value="mercedes">Mercedes</option> -->
                          <option value="diff">Lý do khác</option>
                        </select>
                        <br>
                        <br>
                        <div v-if="note == 'diff'">
                          <div class="uk-form-label uk-form-label-required" >
                            Nhập lý do khác
                          </div>
                          <textarea rows="4" style="width: 100%;border-radius: 5px;padding: 5px 0px 0px 10px;" placeholder="Nhập lý do bạn hủy đơn ..." v-model="notediff"></textarea>
                        </div>

                      </label>
                    </div>
                    <div class="uk-text-center">
                      <button type="button" class="uk-button uk-button-danger" v-if="detailOrder.status == 'Chờ xác nhận'" @click="cancelUserOrder()">Hủy đơn hàng</button>
                      <button type="button" class="uk-button uk-button-danger" v-else-if="detailOrder.status == 'Đã xác nhận'" @click="requestUserOrder()">Yêu cầu hủy đơn</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <div id="review" uk-modal>
              <div class="uk-modal-dialog uk-modal-body">
                <button
                  class="uk-modal-close-outside"
                  type="button"
                  uk-close
                ></button>
                <h2 class="uk-modal-title uk-text-center">Đánh giá</h2>
                <form class="uk-form-stacked">
                  <div class="uk-grid-small uk-child-width-1-1" uk-grid>
                    <div>
                      <label style="width: 100%">
                        <div class="uk-form-label uk-form-label-required">
                          Tên
                        </div>
                        <input class="uk-input" type="text" required v-model="comments.name"/>
                      </label>
                    </div>
                    <div>
                      <label style="width: 100%; margin-top: 10px">
                        <div class="uk-form-label">
                          Email
                        </div>
                        <input class="uk-input" type="email" required v-model="comments.email"/>
                      </label>
                    </div>
                    <div>
                      <label style="width: 100%">
                        <div class="uk-form-label uk-form-label-required">
                          Đánh giá của bạn
                        </div>
                        <textarea
                          class="uk-textarea"
                          rows="5"
                          required
                          v-model="comments.detail"
                        ></textarea>
                      </label>
                    </div>
                    <div class="uk-text-center">
                      <button type="button" class="uk-button uk-button-primary" @click="sendComment(getData.blogs.id)">Gửi đánh giá</button>
                    </div>
                  </div>
                </form>
              </div>
            </div> -->
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
      detailProduct: "",
      detailUser: "",
      detailVN: "",
      statusOrder: "",
      notediff: "",
      note: ""
    };
  },
  created() {
    this.getDataAccount();
    this.getDataUserOrder();
    this.getDetailVNPAY();
    // console.log(this.item)
  },
  methods: {
    cancelUserOrder(){
      if(this.note != "diff"){
        this.postNoteCancel()
      }else{
        this.note = this.notediff
        this.postNoteCancel()
      }
    },
    requestUserOrder(){
      if(this.note != "diff"){
        this.putNoteCancel()
      }else{
        this.note = this.notediff
        this.putNoteCancel()
      }
    },
    postNoteCancel(){
      let itemNote = {
        note : this.note
      }
      axios
        .put(this.$store.state.MainLink + "customer/orders/cancerOrderUser?id=" + this.item, itemNote, {
          headers: {
            Authorization: this.$store.state.tokenUser,
          },
        })
        .then((response) => {
          console.log(response.data.object);
          this.getDataUserOrder();
          this.$toasted.show("Hủy đơn hàng thành công !", {
            type: "success",
            duration: 2000,
          });
        })
        .catch((e) => {
          this.$toasted.show("Hủy đơn hàng thất bại !", {
            type: "error",
            duration: 2000,
          });
          console.log(e);
        });
    },
    putNoteCancel(){
            let itemNote = {
        note : this.note
      }
      axios
        .put(this.$store.state.MainLink + "customer/orders/requestCancerOrderUser?id=" + this.item, itemNote, {
          headers: {
            Authorization: this.$store.state.tokenUser,
          },
        })
        .then((response) => {
          console.log(response.data.object);
          this.getDataUserOrder();
          this.$toasted.show("Gửi yêu cầu thành công !", {
            type: "success",
            duration: 2000,
          });
        })
        .catch((e) => {
          this.$toasted.show("Gửi yêu cầu thất bại !", {
            type: "error",
            duration: 2000,
          });
          console.log(e);
        });
    },
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
          this.detailUser = response.data.object.customer;
          this.detailProduct = response.data.object.orderDetails;
          this.statusOrder = response.data.object.orderManagements;
          // console.log(this.detailOrder);
        })
        .catch((e) => {
          this.error.push(e);
          console.log(e);
        });
    },
    getDetailVNPAY(){
      axios
        .get(this.$store.state.MainLink + "customer/pay/getresult/" + this.item, {
          headers: {
            Authorization: this.$store.state.tokenUser,
          },
        })
        .then((response) => {
          // console.log(response.data.object);
          this.detailVN = response.data.object;
          // console.log(this.detailVN);
        })
        .catch((e) => {
          this.error.push(e);
          console.log(e);
        });
    },
    getDataAccount() {
      
      if(localStorage.userToken){
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
      }      
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