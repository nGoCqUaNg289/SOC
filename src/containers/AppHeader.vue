<template>
  <header>
    <div class="uk-navbar-container uk-light uk-visible@m tm-toolbar-container">
      <div class="uk-container" uk-navbar>
        <div class="uk-navbar-left">
          <nav>
            <ul class="uk-navbar-nav">
              <li>
                <a
                  ><span
                    class="uk-margin-xsmall-right"
                    uk-icon="icon: receiver; ratio: .75;"
                  ></span
                  ><span class="tm-pseudo">8 800 799 99 99</span></a
                >
              </li>
              <li>
                <div class="uk-navbar-item">
                  <span
                    class="uk-margin-xsmall-right"
                    uk-icon="icon: clock; ratio: .75;"
                  ></span
                  >Thời gian mở cửa 08:00–22:00
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="uk-navbar-right">
          <nav>
            <ul class="uk-navbar-nav">
              <li>
                <router-link to="/news">
                  <a style="text-decoration: none">Tin mới</a>
                </router-link>
              </li>
              <li>
                <router-link to="/faq">
                  <a style="text-decoration: none">FAQ</a>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div
      class="uk-navbar-container tm-navbar-container"
      uk-sticky="cls-active: tm-navbar-container-fixed"
    >
      <div class="uk-container" uk-navbar>
        <div class="uk-navbar-left">
          <button
            class="uk-navbar-toggle uk-hidden@m"
            uk-toggle="target: #nav-offcanvas"
            uk-navbar-toggle-icon
          ></button>
          <router-link to="/"
            ><a class="uk-navbar-item uk-logo"
              ><img
                src="images/SOCStore.png"
                width="120px"
                height="auto"
                alt="Logo" /></a
          ></router-link>

          <nav class="uk-visible@m">
            <ul class="uk-navbar-nav">
              <li>
                <router-link to="/catalog">
                  <a class="a-custom" style="text-decoration: none;"
                    >Sản phẩm<span
                      class="uk-margin-xsmall-left"
                      uk-icon="icon: chevron-down; ratio: .75;"
                    ></span
                  ></a>
                </router-link>

                <div
                  class="
                    uk-navbar-dropdown
                    uk-margin-remove
                    uk-padding-remove-vertical
                  "
                  uk-drop="pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
                >
                  <div class="uk-container">
                    <ul
                      class="uk-navbar-dropdown-grid uk-child-width-1-5"
                      uk-grid
                    >
                      <li>
                        <div class="uk-margin-top uk-margin-bottom">
                          <router-link to="/category">
                          <a class="uk-link-reset" style="text-decoration: none;">
                              <img
                                class="
                                  uk-display-block
                                  uk-margin-auto
                                  uk-margin-bottom
                                "
                                src="images/catalog/computers.svg"
                                width="80"
                                height="80"
                              />
                              <div class="uk-text-bolder" style="color:gray;text-decoration: none;">
                                Laptops và PC
                              </div>
                            </a>
                            </router-link>

                          <!-- <ul class="uk-nav uk-nav-default">
                            <li><a>Laptops</a></li>
                            <li><a>Tablets</a></li>
                            <li><a>Peripherals</a></li>
                            <li><a>Keyboards</a></li>
                            <li><a>Accessories</a></li>
                          </ul> -->
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <router-link to="/brands">
                  <a class="a-custom"
                    >Thương hiệu<span
                      class="uk-margin-xsmall-left"
                      uk-icon="icon: chevron-down; ratio: .75;"
                    ></span
                  ></a>
                </router-link>

                <div
                  class="
                    uk-navbar-dropdown
                    uk-margin-remove
                    uk-padding-remove-vertical
                  "
                  uk-drop="pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
                >
                  <div
                    class="
                      uk-container
                      uk-container-small
                      uk-margin-top
                      uk-margin-bottom
                    "
                  >
                    <ul class="uk-grid-small uk-child-width-1-6" uk-grid>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="Apple"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/apple.svg" alt="Apple" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="Samsung"
                          >
                            <figure class="tm-media-box-wrap">
                              <img
                                src="images/brands/samsung.svg"
                                alt="Samsung"
                              />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="Sony"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/sony.svg" alt="Sony" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="Microsoft"
                          >
                            <figure class="tm-media-box-wrap">
                              <img
                                src="images/brands/microsoft.svg"
                                alt="Microsoft"
                              />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="Intel"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/intel.svg" alt="Intel" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="HP"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/hp.svg" alt="HP" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="LG"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/lg.svg" alt="LG" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="Lenovo"
                          >
                            <figure class="tm-media-box-wrap">
                              <img
                                src="images/brands/lenovo.svg"
                                alt="Lenovo"
                              />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="ASUS"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/asus.svg" alt="ASUS" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="Acer"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/acer.svg" alt="Acer" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="Dell"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/dell.svg" alt="Dell" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="
                              uk-link-muted
                              uk-text-center
                              uk-display-block
                              uk-padding-small
                              uk-box-shadow-hover-large
                              tm-media-box
                            "
                          
                            title="Canon"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/canon.svg" alt="Canon" />
                            </figure>
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div class="uk-text-center uk-margin">
                      <a
                        class="uk-link-muted uk-text-uppercase tm-link-to-all"
                      
                        ><span>Xem tất cả</span
                        ><span uk-icon="icon: chevron-right; ratio: .75;"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <router-link to="/blog"
                  ><a class="a-custom">Blogs</a>
                </router-link>
              </li>
              <li>
                <router-link to="/about"
                  ><a class="a-custom">Về chúng tôi</a>
                </router-link>
              </li>
              <li>
                <router-link to="/contacts"
                  ><a class="a-custom">Liên hệ</a>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="uk-navbar-right">
          <a
            class="uk-navbar-toggle tm-navbar-button"
          
            uk-search-icon
          ></a>
          <div
            class="uk-navbar-dropdown uk-padding-small uk-margin-remove"
            uk-drop="mode: click;cls-drop: uk-navbar-dropdown;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
          >
            <div class="uk-container">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-expand">
                  <form class="uk-search uk-search-navbar uk-width-1-1">
                    <input
                      class="uk-search-input"
                      type="search"
                      placeholder="Tìm kiếm…"
                      autofocus
                    />
                  </form>
                </div>
                <div class="uk-width-auto">
                  <a class="uk-navbar-dropdown-close" uk-close></a>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/compare"
            ><a
              class="uk-navbar-item uk-link-muted uk-visible@m tm-navbar-button"
            
              ><span uk-icon="copy"></span><span class="uk-badge">{{this.$store.state.CompareCart.length}}</span></a
            ></router-link
          >
          <router-link to="/account">
            <a
              class="uk-navbar-item uk-link-muted tm-navbar-button"
            
              uk-icon="user"
            ></a>
          </router-link>

          <div
            class="uk-padding-small uk-margin-remove"
            uk-dropdown="pos: bottom-right; offset: -10; delay-hide: 200;"
            style="min-width: 150px"
          >
            <ul class="uk-nav uk-dropdown-nav">
              <li>
                <a>
                  Đơn đã đặt
                  <span>(2)</span></a
                >
              </li>
              <li>
                <router-link to="/favorites">
                  <a style="text-decoration: none">
                    Sản phẩm yêu thích
                    <span>(3)</span></a
                  >
                </router-link>
              </li>
              <li>
                <router-link to="/personal"
                  ><a style="text-decoration: none">Cá nhân</a></router-link
                >
              </li>
              <li>
                <router-link to="/setting">
                  <a style="text-decoration: none">Cài đặt</a>
                </router-link>
              </li>
              <li class="uk-nav-divider"></li>
              <li><a>Đăng xuất</a></li>
            </ul>
          </div>
          <router-link to="/cart"
            ><a
              class="uk-navbar-item uk-link-muted uk-visible@m tm-navbar-button"
            
              ><span uk-icon="cart"></span
              ><span class="uk-badge">{{this.$store.state.StoreCart.length}}</span></a
            ></router-link
          >
          
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      quantityCart: "",
    };
  },
  created() {
    this.getQuantityCart();
  },
  methods: {
    getQuantityCart() {
      this.quantityCart = this.$store.state.StoreCart.length;
    },
  },
  watch: {
    changeCart: function(){
      this.quantityCart = this.$store.state.StoreCart.length;
    }
  },
};
</script>

<style></style>
