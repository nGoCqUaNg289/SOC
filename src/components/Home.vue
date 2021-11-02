<template>
  <div class="uk-offcanvas-content">
    <main>
      <section
        class="uk-position-relative uk-visible-toggle uk-light"
        uk-slideshow="min-height: 300; max-height: 600;"
      >
        <ul class="uk-slideshow-items">
          <li style="background-color: #0b0a12">
            <a>
              <figure class="uk-container uk-height-1-1">
                <img
                  src="images/promo/macbook-new.jpg"
                  alt="New Macbook"
                  width="1200"
                  height="600"
                  uk-cover
                />
              </figure>
            </a>
          </li>
          <li style="background-color: #ce071e">
            <a>
              <figure class="uk-container uk-height-1-1">
                <img
                  src="images/promo/iphone.jpg"
                  alt="iPhone"
                  width="1200"
                  height="600"
                  uk-cover
                />
              </figure>
            </a>
          </li>
          <li style="background-color: #1f2024">
            <a>
              <figure class="uk-container uk-height-1-1">
                <img
                  src="images/promo/ipad.jpg"
                  alt="iPad"
                  width="1200"
                  height="600"
                  uk-cover
                />
              </figure>
            </a>
          </li>
        </ul>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
        
          uk-slideshow-item="previous"
          uk-slidenav-previous
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
        
          uk-slideshow-item="next"
          uk-slidenav-next
        ></a>
        <div class="uk-position-bottom-center uk-position-small">
          <ul class="uk-slideshow-nav uk-dotnav"></ul>
        </div>
      </section>
      <section class="uk-section uk-section-default uk-section-small">
        <div class="uk-container">
          <div
            class="
              uk-grid-small
              uk-child-width-1-2
              uk-child-width-1-3@s
              uk-child-width-1-6@m
            "
            uk-grid
          >
            <div>
              <router-link to="/subcategory">
                <a
                  class="
                    uk-link-muted
                    uk-text-center
                    uk-display-block
                    uk-padding-small
                    uk-box-shadow-hover-large
                  "
                >
                  <div class="tm-ratio tm-ratio-4-3">
                    <div class="tm-media-box">
                      <figure class="tm-media-box-wrap">
                        <img
                          class="item-brand"
                          src="images/catalog/laptops.png"
                          alt="Laptops"
                        />
                      </figure>
                    </div>
                  </div>
                  <div class="uk-margin-small-top">
                    <div class="uk-text-truncate">Laptops Gaming</div>
                    <!-- <div class="uk-text-meta uk-text-xsmall uk-text-truncate">
                      from $149
                    </div> -->
                  </div>
                </a>
              </router-link>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/smartphones.png"
                        alt="Smartphones"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">Laptop văn phòng</div>
                  <!-- <div class="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $99
                  </div> -->
                </div>
              </a>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/tablets.png"
                        alt="Tablets"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">Laptop mỏng nhẹ, thời trang</div>
                  <!-- <div class="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $129
                  </div> -->
                </div>
              </a>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/watches.png"
                        alt="Smart Watches"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">Laptops sinh viên</div>
                  <!-- <div class="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $49
                  </div> -->
                </div>
              </a>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/consoles.png"
                        alt="Gaming Consoles"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">Laptop đồ hoạ, kiến trúc</div>
                  <!-- <div class="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $399
                  </div> -->
                </div>
              </a>
            </div>
            <div>
              <a
                class="
                  uk-link-muted
                  uk-text-center
                  uk-display-block
                  uk-padding-small
                  uk-box-shadow-hover-large
                "
              >
                <div class="tm-ratio tm-ratio-4-3">
                  <div class="tm-media-box">
                    <figure class="tm-media-box-wrap">
                      <img
                        class="item-brand"
                        src="images/catalog/cameras.png"
                        alt="Cameras"
                      />
                    </figure>
                  </div>
                </div>
                <div class="uk-margin-small-top">
                  <div class="uk-text-truncate">PC builds</div>
                  <!-- <div class="uk-text-meta uk-text-xsmall uk-text-truncate">
                    from $129
                  </div> -->
                </div>
              </a>
            </div>
          </div>
          <div class="uk-margin uk-text-center">
            <a
              class="uk-link-muted uk-text-uppercase tm-link-to-all"
              ><span>Xem tất cả sản phẩm</span
              ><span uk-icon="icon: chevron-right; ratio: .75;"></span
            ></a>
          </div>
        </div>
      </section>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <h2 class="uk-text-center">Sản phẩm nổi bật</h2>
          <div class="uk-card uk-card-default tm-ignore-container">
            <div class="uk-grid-collapse uk-child-width-1-3 uk-child-width-1-4@m tm-products-grid" uk-grid>
              <article class="tm-product-card"  v-for="item in getData" :key="item.id">
                <div class="tm-product-card-media">
                  <div class="tm-ratio tm-ratio-4-3">
                      <a class="tm-media-box" style="text-decoration: none;">
                        <div class="tm-product-card-labels">
                          <span class="uk-label uk-label-warning">top selling</span>
                          <span class="uk-label uk-label-danger">trade-in</span>
                        </div>
                        <figure class="tm-media-box-wrap">
                          <img :src="item.photos[0]"/>
                        </figure>
                      </a>
                  </div>
                </div>
                <div class="tm-product-card-body">
                  <div class="tm-product-card-info">
                    <div class="uk-text-meta uk-margin-xsmall-bottom">
                      Laptop
                    </div>
                    <h3 class="tm-product-card-title">
                      <a class="uk-link-heading"  @click="detailProduct(item.id)">{{item.name}}</a>
                    </h3>
<!--                    <ul class="uk-list uk-text-small tm-product-card-properties">-->
<!--                      <li>-->
<!--                        <span class="uk-text-muted">Diagonal display: </span>-->
<!--                        <span>15.4"</span>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <span class="uk-text-muted">CPU: </span><span>Intel®&nbsp;Core™ i7</span>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <span class="uk-text-muted">RAM: </span><span>16&nbsp;GB</span>-->
<!--                      </li>-->
<!--                      <li>-->
<!--                        <span class="uk-text-muted">Video Card: </span><span>AMD Radeon Pro 555</span>-->
<!--                      </li>-->
<!--                    </ul>-->
                  </div>
                  <div class="tm-product-card-shop">
                    <div class="tm-product-card-prices">
                      <del class="uk-text-meta">$1899.00</del>
                      <div class="tm-product-card-price">{{ formatPrice(item.price) }}đ</div>
                    </div>
                    <div class="tm-product-card-add">
                      <div class="uk-text-meta tm-product-card-actions">
                        <a class="tm-product-card-action js-add-to js-add-to-favorites tm-action-button-active js-added-to" title="Add to favorites">
                          <span uk-icon="icon: heart; ratio: .75;"></span>
                          <span class="tm-product-card-action-text">Add to favorites</span>
                        </a>
                        <a class="tm-product-card-action js-add-to js-add-to-compare tm-action-button-active js-added-to " title="Add to compare" @click="compareProduct(item)">
                          <span uk-icon="icon: copy; ratio: .75;"></span>
                          <span class="tm-product-card-action-text">Add to compare</span>
                        </a>
                      </div>
                      <button class="uk-button uk-button-primary tm-product-card-add-button tm-shine js-add-to-cart" @click="addToCart(item.id,item.name,item.photos[0],item.price)">
                        <span class="tm-product-card-add-button-icon" uk-icon="cart"></span>
                        <span class="tm-product-card-add-button-text">add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="uk-margin uk-text-center">
            <router-link to="/category">
              <a
              class="uk-link-muted uk-text-uppercase tm-link-to-all"
              ><span>Toàn bộ sản phẩm</span
              ><span uk-icon="icon: chevron-right; ratio: .75;"></span
            ></a>
            </router-link>

          </div>
        </div>
      </section>
      <section class="uk-section uk-section-default uk-section-small">
        <div class="uk-container">
          <h2 class="uk-text-center">Thương hiệu phổ biến</h2>
          <div class="uk-margin-medium-top" uk-slider="finite: true">
            <div class="uk-position-relative">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-visible@m">
                  <a
                  
                    uk-slidenav-previous
                    uk-slider-item="previous"
                  ></a>
                </div>
                <div class="uk-width-expand uk-slider-container">
                  <ul
                    class="
                      uk-slider-items
                      uk-child-width-1-3
                      uk-child-width-1-6@s
                      uk-grid
                      uk-grid-large
                    "
                  >
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="Apple"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/apple.svg" alt="Apple" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
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
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="Sony"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/sony.svg" alt="Sony" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
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
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="Intel"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/intel.svg" alt="Intel" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="HP"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/hp.svg" alt="HP" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="LG"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/lg.svg" alt="LG" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="Lenovo"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/lenovo.svg" alt="Lenovo" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="ASUS"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/asus.svg" alt="ASUS" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="Acer"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/acer.svg" alt="Acer" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="Dell"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/dell.svg" alt="Dell" />
                          </figure>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="tm-ratio tm-ratio-16-9">
                        <a
                          class="uk-link-muted tm-media-box tm-grayscale"
                        
                          title="Canon"
                        >
                          <figure class="tm-media-box-wrap">
                            <img src="images/brands/canon.svg" alt="Canon" />
                          </figure>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="uk-visible@m">
                  <a uk-slider-item="next" uk-slidenav-next></a>
                </div>
              </div>
            </div>
            <ul
              class="
                uk-slider-nav
                uk-dotnav
                uk-flex-center
                uk-margin-medium-top
                uk-hidden@m
              "
            ></ul>
          </div>
          <div class="uk-margin uk-text-center">
            <a
              class="uk-link-muted uk-text-uppercase tm-link-to-all"
              ><span>Xem tất cả thương hiệu</span
              ><span uk-icon="icon: chevron-right; ratio: .75;"></span
            ></a>
          </div>
        </div>
      </section>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <h2 class="uk-text-center">Blog</h2>
          <div
            class="
              uk-grid-medium
              uk-grid-match
              uk-child-width-1-1
              uk-child-width-1-2@s
            "
            uk-grid
          >
            <div>
              <a>
                <article
                  class="
                    uk-card
                    uk-card-default
                    uk-card-small
                    uk-article
                    uk-overflow-hidden
                    uk-box-shadow-hover-large
                    uk-height-1-1
                    tm-ignore-container
                  "
                >
                  <div class="tm-ratio tm-ratio-16-9">
                    <figure
                      class="tm-media-box uk-cover-container uk-margin-remove"
                    >
                      <img
                        src="images/articles/macbook-photo.jpg"
                        alt="Everything You Need to Know About the MacBook Pro"
                        uk-cover="uk-cover"
                      />
                    </figure>
                  </div>
                  <div class="uk-card-body">
                    <div class="uk-article-body">
                      <div class="uk-article-meta uk-margin-xsmall-bottom">
                        <time>May 21, 2018</time>
                      </div>
                      <div>
                        <h3 class="uk-margin-remove">
                          Everything You Need to Know About the MacBook Pro
                        </h3>
                      </div>
                      <div class="uk-margin-small-top">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin sodales eget ipsum id aliquam. Nam
                          consectetur interdum nibh eget sodales. Cras volutpat
                          efficitur ornare.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </div>
            <div>
              <a>
                <article
                  class="
                    uk-card
                    uk-card-default
                    uk-card-small
                    uk-article
                    uk-overflow-hidden
                    uk-box-shadow-hover-large
                    uk-height-1-1
                    tm-ignore-container
                  "
                >
                  <div class="tm-ratio tm-ratio-16-9">
                    <figure
                      class="tm-media-box uk-cover-container uk-margin-remove"
                    >
                      <img
                        src="images/articles/macos.jpg"
                        alt="Apple introduces macOS Mojave"
                        uk-cover="uk-cover"
                      />
                    </figure>
                  </div>
                  <div class="uk-card-body">
                    <div class="uk-article-body">
                      <div class="uk-article-meta uk-margin-xsmall-bottom">
                        <time>May 21, 2018</time>
                      </div>
                      <div>
                        <h3 class="uk-margin-remove">
                          Apple introduces macOS Mojave
                        </h3>
                      </div>
                      <div class="uk-margin-small-top">
                        <p>
                          Praesent consequat justo eu massa malesuada posuere.
                          Donec ultricies tincidunt nisl, sed euismod nulla
                          venenatis maximus. Maecenas sit amet semper tellus.
                          Pellentesque imperdiet finibus sapien, a consectetur
                          eros auctor a.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            </div>
          </div>
          <div class="uk-margin uk-text-center">
            <a
              class="uk-link-muted uk-text-uppercase tm-link-to-all"
              ><span>Xem tất cả bài viết</span
              ><span uk-icon="icon: chevron-right; ratio: .75;"></span
            ></a>
          </div>
        </div>
      </section>
      <section class="uk-section uk-section-default uk-section-small">
        <div class="uk-container">
          <div
            class="uk-grid-medium uk-child-width-1-1 uk-child-width-1-2@s"
            uk-grid
          >
            <section>
              <h2 class="uk-text-center uk-text-left@s">Về chúng tôi</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
                neque vulputate, vestibulum magna in, accumsan urna. Nulla
                feugiat ipsum ex, molestie porttitor nibh faucibus at. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                hendrerit lorem ut finibus semper. Donec ac vehicula erat, nec
                consequat massa.
              </p>
              <p>
                Quisque rhoncus fermentum sapien id congue. Nam at rutrum
                turpis. Aliquam sagittis imperdiet tortor vel dignissim. Ut
                ipsum nunc, egestas et odio id, vestibulum posuere orci. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <div class="uk-text-center uk-text-left@s">
                <a
                  class="uk-link-muted uk-text-uppercase tm-link-to-all"
                  
                  ><span>Xem thêm</span
                  ><span uk-icon="icon: chevron-right; ratio: .75;"></span
                ></a>
              </div>
            </section>
            <section>
              <h2 class="uk-text-center uk-text-left@s">Tin tức mới nhất</h2>
              <ul class="uk-list uk-list-small uk-list-divider">
                <li>
                  <article class="uk-article">
                    <div class="uk-article-body">
                      <div class="uk-article-meta uk-margin-xsmall-bottom">
                        <time>June 4, 2018</time>
                      </div>
                      <h3 class="uk-h4 uk-margin-remove">
                        <a class="uk-link-heading"
                          >Highlights from WWDC</a
                        >
                      </h3>
                      <div class="uk-margin-xsmall-top uk-text-small">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin sodales eget ipsum id aliquam. Nam
                          consectetur interdum nibh eget sodales. Cras volutpat
                          efficitur ornare.
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article class="uk-article">
                    <div class="uk-article-body">
                      <div class="uk-article-meta uk-margin-xsmall-bottom">
                        <time>June 4, 2018</time>
                      </div>
                      <h3 class="uk-h4 uk-margin-remove">
                        <a class="uk-link-heading"
                          >Apple introduces macOS Mojave</a
                        >
                      </h3>
                      <div class="uk-margin-xsmall-top uk-text-small">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin sodales eget ipsum id aliquam. Nam
                          consectetur interdum nibh eget sodales. Cras volutpat
                          efficitur ornare.
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article class="uk-article">
                    <div class="uk-article-body">
                      <div class="uk-article-meta uk-margin-xsmall-bottom">
                        <time>May 29, 2018</time>
                      </div>
                      <h3 class="uk-h4 uk-margin-remove">
                        <a class="uk-link-heading"
                          >iOS 11.4 brings stereo pairs and multi-room audio
                          with AirPlay 2</a
                        >
                      </h3>
                      <div class="uk-margin-xsmall-top uk-text-small">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin sodales eget ipsum id aliquam. Nam
                          consectetur interdum nibh eget sodales. Cras volutpat
                          efficitur ornare.
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
              <div class="uk-margin uk-text-center uk-text-left@s">
                <a
                  class="uk-link-muted uk-text-uppercase tm-link-to-all"
                  ><span>Xem các tin khác</span
                  ><span uk-icon="icon: chevron-right; ratio: .75;"></span
                ></a>
              </div>
            </section>
          </div>
        </div>
      </section>
      <!-- <section class="uk-section uk-section-primary uk-section-small uk-light">
        <div class="uk-container">
          <div class="uk-text-center">
            <div class="uk-h2 uk-margin-remove">Subscribe for updates</div>
            <div>Be aware of new products and special offers.</div>
          </div>
          <div class="uk-margin">
            <form>
              <div class="uk-grid-small uk-flex-center" uk-grid>
                <div class="uk-width-1-1 uk-width-medium@s">
                  <div class="uk-inline uk-width-1-1">
                    <span class="uk-form-icon" uk-icon="mail"></span>
                    <input
                      class="uk-input"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button class="uk-button uk-button-primary">subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section> -->
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
import axios from "axios";

export default {

  data() {
    return {
      getData: "",
      formData: {
        name: "",
        price: "",
        status: "",
        orderDetails: "",
        blogs: "",
        productCategories: "",
        sales: "",
        productColors: [],
        cartDetails: "",
        productDetails: [],
      },

      // getData: []
    };
  },
  created() {
    this.getDT();
    // this.callFunction();
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    getDT() {
      axios
        .get("https://javamahtest.herokuapp.com/api/customer/products/trending")
        .then((response) => {
          this.getData = response.data.object;
          // console.log(this.getData);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    callFunction: function () {
      var v = this;
      setTimeout(function () {
        v.getDT();
      }, 2000);
    },
    detailProduct(id){
      console.log(id);
      this.$router.push({
        name: "product",
        params: { item: id },
      })
    },
    addToCart(id, name, photos, price) {
      let item = {
        name: name,
        id: id,
        photos: photos,
        price: price,
      };
      this.$store.state.StoreCart.push(item);
      console.log(this.$store.state.StoreCart);
      alert("Đã thêm sản phẩm vào giỏ hàng!");
    },
    compareProduct(item) {
      console.log(this.$store.state.CompareCart.length);
      if (this.$store.state.CompareCart.length < 2) {
        this.$store.state.CompareCart.push(item);
        alert("Đã thêm sản phẩm vào mục so sánh!");
      } else {
        alert("Bạn đã chọn tối đa 2 sản phẩm cần so sánh!");
      }
    },
  },
};
</script>

<style scope>
a{
  text-decoration: none;
}
</style>
