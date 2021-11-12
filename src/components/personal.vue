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
                        <img class="uk-width-1-1" src="images/avatar.jpg" />
                        <a
                          class="
                            uk-link-reset
                            uk-overlay-primary
                            uk-position-cover
                            uk-hidden-hover
                          "
                          href="#"
                        >
                          <div class="uk-position-center">
                            <span uk-icon="icon: camera; ratio: 1.25;"></span>
                          </div>
                        </a>
                      </div>
                    </section>
                    <div class="uk-text-center">
                      <div class="uk-h4 uk-margin-remove">Thomas Bruns</div>
                      <div class="uk-text-meta">Joined June 6, 2018</div>
                    </div>
                    <div>
                      <div class="uk-grid-small uk-flex-center" uk-grid>
                        <div>
                          <a
                            class="uk-button uk-button-default uk-button-small"
                            href="settings.html"
                            ><span
                              class="uk-margin-xsmall-right"
                              uk-icon="icon: cog; ratio: .75;"
                            ></span
                            ><span>Settings</span></a
                          >
                        </div>
                        <div>
                          <button
                            class="uk-button uk-button-default uk-button-small"
                            href="#"
                            title="Log out"
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
                      <li>
                        <router-link to="account">
                          <a>Đơn hàng<span>(2)</span></a>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="favorites">
                          <a>Sản phẩm yêu thích<span>(2)</span></a>
                        </router-link>
                      </li>
                      <li class="uk-active">
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
                  <h1 class="uk-h2">Thông tin cá nhân</h1>
                </header>
                <div class="uk-card-body">
                  <form class="uk-form-stacked">
                    <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
                      <fieldset class="uk-fieldset">
                        <legend class="uk-h4">Liên lạc</legend>
                        <div
                          class="
                            uk-grid-small
                            uk-child-width-1-1
                            uk-child-width-1-2@s
                          "
                          uk-grid
                        >
                          <div>
                            <label style="width: 100%">
                              <div class="uk-form-label">Tên người dùng</div>
                              <input
                                class="uk-input"
                                type="text"
                                v-model="
                                  this.$store.state.InfoPersonal.fullname
                                "
                              />
                            </label>
                          </div>
                          <div>
                            <label style="width: 100%">
                              <div class="uk-form-label">Email</div>
                              <input
                                class="uk-input"
                                type="tel"
                                v-model="this.$store.state.InfoPersonal.email"
                              />
                            </label>
                          </div>
                          <div>
                            <label style="width: 100%">
                              <div class="uk-form-label">Số điện thoại</div>
                              <input
                                class="uk-input"
                                type="tel"
                                v-model="this.$store.state.InfoPersonal.phone"
                              />
                            </label>
                          </div>
                          <div>
                            <label style="width: 100%">
                              <div class="uk-form-label">Ngày sinh</div>
                              <input
                                class="uk-input"
                                type="date"
                                value="1990-01-01"
                              />
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset class="uk-fieldset">
                        <legend class="uk-h4">Địa chỉ</legend>
                        <!-- <div class="uk-grid-small" uk-grid>
                          <div class="uk-width-1-1">
                            <label>
                              <div class="uk-form-label">Country</div>
                              <select class="uk-select">
                                <option>Choose the country</option>
                                <option value="RU">Russia</option>
                              </select>
                            </label>
                          </div>
                        </div> -->
                        <div class="uk-grid-large" uk-grid>
                          <div class="uk-width-expand">
                            <label style="width: 100%">
                              <div class="uk-form-label">Địa chỉ cụ thể</div>
                              <input
                                class="uk-input"
                                type="text"
                                v-model="this.$store.state.InfoPersonal.address"
                              />
                            </label>
                          </div>
                        </div>
                        <div class="uk-grid-small" uk-grid>
                          <div class="uk-width-expand">
                            <label style="width: 100%">
                              <div class="uk-form-label">Street</div>
                              <input
                                class="uk-input"
                                type="text"
                                v-model="this.$store.state.InfoPersonal.address"
                              />
                            </label>
                          </div>
                          <div class="uk-width-expand">
                            <label style="width: 100%">
                              <div class="uk-form-label">House</div>
                              <input
                                class="uk-input"
                                type="text"
                                v-model="this.$store.state.InfoPersonal.address"
                              />
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </form>
                </div>
                <div class="uk-card-footer uk-text-center">
                  <button class="uk-button uk-button-primary">
                    Cập nhật tài khoản
                  </button>
                </div>
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
  name: "account",
  data() {
    return {
      dataUser: {},
    };
  },
  created() {
    this.getDataUser();
  },
  methods: {
    getDataUser() {
      this.dataUser = this.$store.state.InfoPersonal;
      console.log(this.dataUser);
    },
  },
};
</script>

<style>
</style>