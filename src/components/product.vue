<template>
  <div class="uk-offcanvas-content">
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
              <li><a>Laptops</a></li>
              <li><a>Thông tin sản phẩm</a></li>
              <!-- <li>
                <span>{{ getData.name.substr(6, 25) }} ...</span>
              </li> -->
            </ul>
            <h1 class="uk-margin-small-top uk-margin-remove-bottom">
              <!-- {{ getData.name.substr(6, 25) }} ... -->
            </h1>
          </div>
          <div>
            <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
              <div>
                <div
                  class="
                    uk-card uk-card-default uk-card-small
                    tm-ignore-container
                  "
                >
                  <div
                    class="uk-grid-small uk-grid-collapse uk-grid-match"
                    uk-grid
                  >
                    <div class="uk-width-1-1 uk-width-expand@m">
                      <div
                        class="uk-grid-collapse uk-child-width-1-1"
                        uk-slideshow="finite: true; ratio: 4:3;"
                        uk-grid
                      >
                        <div>
                          <ul class="uk-slideshow-items" uk-lightbox>
                            <li
                              v-for="(item, index) in getData.photos"
                              :key="index"
                            >
                              <a
                                class="
                                  uk-card-body
                                  tm-media-box tm-media-box-zoom
                                "
                                :href="item"
                              >
                                <figure class="tm-media-box-wrap">
                                  <img :src="item" />
                                </figure>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div class="uk-card-body uk-flex uk-flex-center">
                            <div class="uk-width-1-2 uk-visible@s">
                              <div uk-slider="finite: true">
                                <div class="uk-position-relative">
                                  <div class="uk-slider-container">
                                    <ul
                                      class="
                                        tm-slider-items
                                        uk-slider-items
                                        uk-child-width-1-4
                                        uk-grid
                                        uk-grid-small
                                      "
                                    >
                                      <li
                                        :uk-slideshow-item="index"
                                        v-for="(item, index) in getData.photos"
                                        :key="index"
                                      >
                                        <div class="tm-ratio tm-ratio-1-1">
                                          <a
                                            class="
                                              tm-media-box tm-media-box-frame
                                            "
                                          >
                                            <figure class="tm-media-box-wrap">
                                              <img
                                                :src="item"
                                              /></figure
                                          ></a>
                                        </div>
                                      </li>
                                    </ul>
                                    <!-- <div>
                                      <a
                                        class="
                                          uk-position-center-left-out
                                          uk-position-small
                                        "
                                        href="#"
                                        uk-slider-item="previous"
                                        uk-slidenav-previous
                                      ></a
                                      ><a
                                        class="
                                          uk-position-center-right-out
                                          uk-position-small
                                        "
                                        href="#"
                                        uk-slider-item="next"
                                        uk-slidenav-next
                                      ></a>
                                    </div> -->
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul
                              class="uk-slideshow-nav uk-dotnav uk-hidden@s"
                            ></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="uk-width-1-1 uk-width-1-3@m tm-product-info">
                      <div class="uk-card-body">
                        <div class="uk-margin">
                          <div class="uk-grid-medium" uk-grid>
                            <div>
                              <div
                                class="
                                  uk-text-large
                                  uk-margin-xsmall-bottom
                                  uk-text-bold
                                "
                              >
                                <p>{{ getData.name }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="uk-margin">
                          <div
                            class="
                              uk-padding-small
                              uk-background-primary-lighten
                              uk-border-rounded
                            "
                          >
                            <div
                              class="uk-grid-small uk-child-width-1-1"
                              uk-grid
                            >
                              <div>
                                <!-- <del class="uk-text-meta">$1899.00</del> -->
                                <div class="tm-product-price">
                                  {{ formatPrice(getData.price) }}đ
                                </div>
                              </div>
                              <div>
                                <div class="uk-grid-small" uk-grid>
                                  <div>
                                    <a
                                      onclick="increment(-1, 'product-1')"
                                      uk-icon="icon: minus; ratio: .75"
                                    ></a>
                                    <input
                                      class="uk-input tm-quantity-input"
                                      id="product-1"
                                      type="text"
                                      maxlength="3"
                                      min="1"
                                      value="1"
                                    /><a
                                      onclick="increment(+1, 'product-1')"
                                      uk-icon="icon: plus; ratio: .75"
                                    ></a>
                                  </div>
                                  <div>
                                    <button
                                      class="
                                        uk-button uk-button-primary
                                        tm-product-add-button tm-shine
                                        js-add-to-cart
                                      "
                                      @click="
                                        addToCart(
                                          getData
                                        )
                                      "
                                    >
                                      Thêm vào giỏ hàng
                                    </button>
                                  </div>
                                  <div
                                    class="
                                      uk-width-auto
                                      uk-width-expand@s
                                      uk-flex
                                      uk-flex-middle
                                      uk-text-meta
                                    "
                                  >
                                    <!-- <a
                                      class="
                                        uk-margin-small-right
                                        js-add-to js-add-to-favorites
                                        tm-action-button-active
                                        js-added-to
                                      "
                                      uk-tooltip="Add to favorites"
                                      ><span uk-icon="heart"></span></a
                                    ><a
                                      class="
                                        js-add-to js-add-to-compare
                                        tm-action-button-active
                                        js-added-to
                                      "
                                      uk-tooltip="Add to compare"
                                      ><span uk-icon="copy"></span
                                    ></a> -->
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="uk-margin">
                          <div
                            class="
                              uk-padding-small
                              uk-background-muted
                              uk-border-rounded
                            "
                          >
                            <div
                              class="
                                uk-grid-small uk-child-width-1-1 uk-text-small
                              "
                              uk-grid
                            >
                              <div>
                                <div class="uk-grid-collapse" uk-grid>
                                  <span
                                    class="uk-margin-xsmall-right"
                                    uk-icon="cart"
                                  ></span>
                                  <div>
                                    <div class="uk-text-bolder">
                                      Đặt hàng trực tuyến
                                    </div>
                                    <div class="uk-text-xsmall uk-text-muted">
                                      {{ getData.status }}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div class="uk-grid-collapse" uk-grid>
                                  <span
                                    class="uk-margin-xsmall-right"
                                    uk-icon="location"
                                  ></span>
                                  <div>
                                    <div class="uk-text-bolder">
                                      Mua tại cửa hàng
                                    </div>
                                    <div class="uk-text-xsmall uk-text-muted">
                                      {{ getData.status }}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="uk-margin">
                          <div class="uk-margin-small-top">
                            <a
                              class="uk-link-heading js-scroll-to-description"
                              onclick="UIkit.switcher('.js-product-switcher').show(1);"
                              ><span class="tm-pseudo"
                                >Thông số kỹ thuật chi tiết</span
                              ><span
                                class="uk-margin-xsmall-left"
                                uk-icon="icon: chevron-down; ratio: .75;"
                              ></span
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="uk-width-1-1 tm-product-description"
                      id="description"
                    >
                      <header>
                        <nav
                          class="tm-product-nav"
                          uk-sticky="offset: 60; bottom: #description; cls-active: tm-product-nav-fixed;"
                        >
                          <ul
                            class="uk-subnav uk-subnav-pill js-product-switcher"
                            uk-switcher="connect: .js-tabs"
                          >
                            <li>
                              <a class="js-scroll-to-description">Tổng quan</a>
                            </li>
                            <li>
                              <a class="js-scroll-to-description"
                                >Thông số kỹ thuật</a
                              >
                            </li>
                            <!-- <li>
                              <a class="js-scroll-to-description">
                                Các máy tương tự
                                <span>(8)</span></a
                              >
                            </li> -->
                            <li>
                              <a class="js-scroll-to-description">
                                Đánh giá sản phẩm
                              </a>
                            </li>
                            <li>
                              <a class="js-scroll-to-description">Q&A</a>
                            </li>
                          </ul>
                        </nav>
                      </header>
                      <div class="uk-card-body">
                        <div class="uk-switcher js-product-switcher js-tabs">
                          <section>
                            <article class="uk-article">
                              <div class="uk-article-body">
                                <div
                                  v-for="(item, index) in getBlog"
                                  :key="index"
                                >
                                  <h5
                                    style="margin-top: 15px"
                                    class="tm-product-card-title"
                                    v-if="item.type == 'header'"
                                  >
                                    {{ item.content }}
                                  </h5>
                                  <div
                                    class="tm-wrapper"
                                    style="margin: 15px 15px 15px 15px"
                                  >
                                    <figure class="uk-text-center">
                                      <a
                                        ><img
                                          :src="item.content"
                                          alt="MacBook Pro"
                                          v-if="item.type == 'photo'"
                                      /></a>
                                    </figure>
                                    <p></p>
                                  </div>
                                  <!-- <img
                                    :src="item.content"
                                    v-if="item.type == 'photo'"
                                  /> -->
                                  <p v-if="item.type == 'content'">
                                    {{ item.content }}
                                  </p>
                                </div>
                              </div>
                            </article>
                          </section>
                          <section>
                            <h2>Thông số kỹ thuật</h2>
                            <!-- {{itemProduct}} -->
                            <table
                              class="
                                uk-table
                                uk-table-divider
                                uk-table-justify
                                uk-table-responsive
                              "
                            >
                              <tr
                                v-for="itemProduct in getData.productDetails"
                                :key="itemProduct.id"
                              >
                                <th class="uk-width-medium">
                                  {{ itemProduct.propertyName }}
                                </th>
                                <td class="uk-table-expand">
                                  {{ itemProduct.propertyValue }}
                                </td>
                              </tr>
                            </table>
                          </section>
                          <!-- <section>
                            <div class="tm-wrapper">
                              <div
                                class="
                                  uk-grid-collapse
                                  uk-child-width-1-3@s
                                  uk-child-width-1-4@m
                                  tm-products-grid
                                "
                                uk-grid
                              >
                                <article class="tm-product-card">
                                  <div class="tm-product-card-media">
                                    <div class="tm-ratio tm-ratio-4-3">
                                      <a
                                        class="tm-media-box"
                                        href="product.html"
                                      >
                                        <div class="tm-product-card-labels">
                                          <span
                                            class="uk-label uk-label-warning"
                                            >top selling</span
                                          ><span
                                            class="uk-label uk-label-danger"
                                            >trade-in</span
                                          >
                                        </div>
                                        <figure class="tm-media-box-wrap">
                                          <img
                                            src="images/products/1/1-medium.jpg"
                                            alt='Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)'
                                          /></figure
                                      ></a>
                                    </div>
                                  </div>
                                  <div class="tm-product-card-body">
                                    <div class="tm-product-card-info">
                                      <div
                                        class="
                                          uk-text-meta uk-margin-xsmall-bottom
                                        "
                                      >
                                        Laptop
                                      </div>
                                      <h3 class="tm-product-card-title">
                                        <a
                                          class="uk-link-heading"
                                          href="product.html"
                                          >Apple MacBook Pro 15&quot; Touch Bar
                                          MPTU2LL/A 256GB (Silver)</a
                                        >
                                      </h3>
                                    </div>
                                    <div class="tm-product-card-shop">
                                      <div class="tm-product-card-prices">
                                        <del class="uk-text-meta">$1899.00</del>
                                        <div class="tm-product-card-price">
                                          $1599.00
                                        </div>
                                      </div>
                                      <div class="tm-product-card-add">
                                        <div
                                          class="
                                            uk-text-meta
                                            tm-product-card-actions
                                          "
                                        >
                                          <a
                                            class="
                                              tm-product-card-action
                                              js-add-to js-add-to-favorites
                                              tm-action-button-active
                                              js-added-to
                                            "
                                            title="Add to favorites"
                                            ><span
                                              uk-icon="icon: heart; ratio: .75;"
                                            ></span
                                            ><span
                                              class="
                                                tm-product-card-action-text
                                              "
                                              >Add to favorites</span
                                            ></a
                                          ><a
                                            class="
                                              tm-product-card-action
                                              js-add-to js-add-to-compare
                                              tm-action-button-active
                                              js-added-to
                                            "
                                            title="Add to compare"
                                            ><span
                                              uk-icon="icon: copy; ratio: .75;"
                                            ></span
                                            ><span
                                              class="
                                                tm-product-card-action-text
                                              "
                                              >Add to compare</span
                                            ></a
                                          >
                                        </div>
                                        <button
                                          class="
                                            uk-button uk-button-primary
                                            tm-product-card-add-button tm-shine
                                            js-add-to-cart
                                          "
                                        >
                                          <span
                                            class="
                                              tm-product-card-add-button-icon
                                            "
                                            uk-icon="cart"
                                          ></span
                                          ><span
                                            class="
                                              tm-product-card-add-button-text
                                            "
                                            >Add to cart</span
                                          >
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </section> -->
                          <section>
                            <div class="uk-grid-small uk-grid-divider" uk-grid>
                              <div
                                class="
                                  uk-width-1-1 uk-width-1-5@s uk-text-center
                                  tm-reviews-column
                                "
                              >
                                <div class="uk-text-meta uk-text-uppercase">
                                  average rating
                                </div>
                                <div class="uk-heading-primary">5.0</div>
                                <div class="uk-flex uk-flex-center">
                                  <ul class="uk-iconnav tm-rating">
                                    <li>
                                      <span
                                        class="uk-text-warning"
                                        uk-icon="star"
                                      ></span>
                                    </li>
                                    <li>
                                      <span
                                        class="uk-text-warning"
                                        uk-icon="star"
                                      ></span>
                                    </li>
                                    <li>
                                      <span
                                        class="uk-text-warning"
                                        uk-icon="star"
                                      ></span>
                                    </li>
                                    <li>
                                      <span
                                        class="uk-text-warning"
                                        uk-icon="star"
                                      ></span>
                                    </li>
                                    <li>
                                      <span
                                        class="uk-text-warning"
                                        uk-icon="star"
                                      ></span>
                                    </li>
                                  </ul>
                                </div>
                                <div class="uk-margin-small-top uk-text-meta">
                                  based on 2 reviews
                                </div>
                                <button
                                  class="
                                    uk-button
                                    uk-button-primary
                                    uk-margin-top
                                    uk-width-1-1
                                  "
                                  uk-toggle="target: #review"
                                >
                                  write a review
                                </button>
                              </div>
                              <div class="uk-width-1-1 uk-width-expand@s">
                                <div
                                  class="
                                    uk-grid-small
                                    uk-grid-divider
                                    uk-child-width-1-1
                                  "
                                  uk-grid
                                >
                                  <article>
                                    <section
                                      class="uk-grid-small uk-child-width-1-1"
                                      uk-grid
                                    >
                                      <header>
                                        <div class="uk-h4 uk-margin-remove">
                                          Thomas Bruns
                                        </div>
                                        <time class="uk-text-meta"
                                          >May 21, 2018</time
                                        >
                                      </header>
                                      <div>
                                        <ul
                                          class="
                                            uk-iconnav uk-margin-bottom
                                            tm-rating
                                          "
                                        >
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                        </ul>
                                        <div>
                                          <p>
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt
                                            ut labore et dolore magna aliquyam
                                            erat, sed diam voluptua. At vero eos
                                            et accusam et justo duo dolores et
                                            ea rebum. Stet clita kasd gubergren,
                                            no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet.
                                          </p>
                                        </div>
                                        <div
                                          class="
                                            uk-grid-small
                                            uk-flex-middle
                                            uk-margin-top
                                          "
                                          uk-grid
                                        >
                                          <div class="uk-text-meta">
                                            Was this review helpful to you?
                                          </div>
                                          <div>
                                            <button
                                              class="
                                                uk-button
                                                uk-button-default
                                                uk-button-small
                                              "
                                            >
                                              Yes<span
                                                class="
                                                  uk-margin-xsmall-left
                                                  uk-text-muted
                                                "
                                                >14</span
                                              >
                                            </button>
                                            <button
                                              class="
                                                uk-button
                                                uk-button-default
                                                uk-button-small
                                                uk-margin-small-left
                                              "
                                            >
                                              No<span
                                                class="
                                                  uk-margin-xsmall-left
                                                  uk-text-muted
                                                "
                                                >2</span
                                              >
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </article>
                                  <article>
                                    <section
                                      class="uk-grid-small uk-child-width-1-1"
                                      uk-grid
                                    >
                                      <header>
                                        <div class="uk-h4 uk-margin-remove">
                                          George Clanton
                                        </div>
                                        <time class="uk-text-meta"
                                          >May 24, 2018</time
                                        >
                                      </header>
                                      <div>
                                        <ul
                                          class="
                                            uk-iconnav uk-margin-bottom
                                            tm-rating
                                          "
                                        >
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                          <li>
                                            <span
                                              class="uk-text-warning"
                                              uk-icon="star"
                                            ></span>
                                          </li>
                                        </ul>
                                        <div>
                                          <p>
                                            Nunc interdum odio non erat commodo
                                            lacinia. Aliquam nec tincidunt
                                            lorem. Nunc quis scelerisque nulla.
                                            Nam nulla ante, luctus non dignissim
                                            a, luctus quis sem. Curabitur
                                            consectetur porttitor leo. Donec
                                            molestie nisl vitae lorem porttitor
                                            vehicula. Etiam feugiat a magna ac
                                            dapibus. Donec vitae sollicitudin
                                            lectus.
                                          </p>
                                          <p>
                                            Sed mollis ex tincidunt posuere
                                            blandit. Mauris sed tellus dolor.
                                            Suspendisse nibh mi, dignissim et
                                            molestie id, dictum in arcu. Duis
                                            sodales scelerisque quam, quis
                                            lobortis felis egestas eu. Sed nibh
                                            nulla, aliquet ac leo vel, rutrum
                                            dignissim metus. Sed non rhoncus ex.
                                            Curabitur accumsan porta lacus non
                                            viverra. Etiam feugiat sapien ut
                                            purus luctus, eu porttitor neque
                                            volutpat.
                                          </p>
                                        </div>
                                        <div
                                          class="
                                            uk-grid-small
                                            uk-flex-middle
                                            uk-margin-top
                                          "
                                          uk-grid
                                        >
                                          <div class="uk-text-meta">
                                            Was this review helpful to you?
                                          </div>
                                          <div>
                                            <button
                                              class="
                                                uk-button
                                                uk-button-default
                                                uk-button-small
                                              "
                                            >
                                              Yes<span
                                                class="
                                                  uk-margin-xsmall-left
                                                  uk-text-muted
                                                "
                                                >5</span
                                              >
                                            </button>
                                            <button
                                              class="
                                                uk-button
                                                uk-button-default
                                                uk-button-small
                                                uk-margin-small-left
                                              "
                                            >
                                              No<span
                                                class="
                                                  uk-margin-xsmall-left
                                                  uk-text-muted
                                                "
                                                >0</span
                                              >
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </article>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section>
                            <ul
                              class="uk-list-divider uk-list-large"
                              uk-accordion="multiple: true"
                            >
                              <li>
                                <a class="uk-accordion-title" href="#">
                                  <b
                                    >Tôi mua sản phẩm tại SOC shop sẽ có khác
                                    biệt gì ?</b
                                  >
                                </a>
                                <div class="uk-accordion-content">
                                  <p>
                                    SOC shop là đại lý ủy quyền bán máy tính
                                    chính hãng tại Việt Nam, SOC shop chỉ bán
                                    một loại mặt hàng duy nhất đó là :
                                    <b> HÀNG CHÍNH HÃNG.</b>
                                  </p>
                                </div>
                              </li>
                              <li>
                                <a class="uk-accordion-title" href="#"
                                  ><b
                                    >Tại sao hàng chính hãng lại bán đắt hơn
                                    hàng xách tay bán tại các cửa hàng ?</b
                                  ></a
                                >
                                <div class="uk-accordion-content">
                                  <p>
                                    Hàng chính hãng là hàng được kiểm định chất
                                    lượng bởi Bộ TT & TT, vì vậy chất lượng hàng
                                    hoá được đảm bảo 100% là hàng chuẩn, có
                                    nguồn gốc rõ ràng. Với hàng xách tay bán bên
                                    ngoài thị trường, giá tuy rẻ hơn nhưng chất
                                    lượng hoàn toàn không đảm bảo, không dán tem
                                    kiểm định của Bộ TT & TT cũng như tem của
                                    đơn vị nhập khẩu (SOC), các linh kiện cấu
                                    thành thiết bị thường là những linh kiện kém
                                    chất lượng được mua về từ Trung Quốc theo số
                                    lượng lớn, các cửa hàng tự tiến hành lắp
                                    ghép bằng tay các linh kiện đó lại để tạo
                                    thành 1 sản phẩm sau đó bán cho người tiêu
                                    dùng.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <a class="uk-accordion-title" href="#"
                                  ><p>
                                    <b
                                      >Tôi sẽ được ưu đãi và khuyến mại gì khii
                                      mua hàng tại SOC SHOP ?</b
                                    >
                                  </p></a
                                >
                                <div class="uk-accordion-content">
                                  <p>
                                    Tùy từng thời điểm, sản phẩm sẽ có những
                                    khuyến mại khác nhau. SOC Shop cam kết sẽ
                                    mang đến anh/chị những khuyến mại kèm những
                                    dịch vụ chăm sóc khách hàng tốt nhất. Để tìm
                                    hiểu về khuyến mại, anh / chị vui lòng gọi
                                    1800 9999 (miễn phí) để được tư vấn.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <a class="uk-accordion-title" href="#"
                                  ><b
                                    >Những dịch vụ chăm sóc khách hàng của SOC
                                    SHOP là gì ?</b
                                  ></a
                                >
                                <div class="uk-accordion-content">
                                  <p>
                                    Sản phẩm có lỗi phần cứng thuộc phạm vi bảo
                                    hành sẽ được hưởng chính sách 1 đổi 1 trong
                                    vòng 01 tháng kể từ ngày mua máy; từ tháng
                                    thứ 02 đến tháng thứ 12, sản phẩm sẽ được
                                    bảo hành theo đúng chính sách của Hãng
                                    Apple. Miễn phí cài đặt ứng dụng/ game và
                                    bảo dưỡng trong quá trình sử dụng
                                  </p>
                                </div>
                              </li>
                              <li>
                                <a class="uk-accordion-title" href="#"
                                  ><b
                                    >SOC SHOP có giao hàng tại nhà không ? Chất
                                    lượng sản phẩm có bị thay đổi đổi không ?</b
                                  ></a
                                >
                                <div class="uk-accordion-content">
                                  <p>
                                    SOC Shop giao hàng miễn phí trên toàn quốc,
                                    cam kết giao hàng trong 60 phút. Và chất
                                    lượng hoàn toàn đảm bảo, 100% hàng chính
                                    hãng - nguyên seal khi đến tận tay Anh/ chị.
                                    Anh/chị có thể ấn nút "Mua Ngay" hoặc gọi số
                                    tổng đài 1800 9999để được hỗ trợ
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Related items-->
              <section>
                <div uk-slider="finite: true">
                  <div
                    class="uk-grid-small uk-flex-middle uk-margin-bottom"
                    uk-grid
                  >
                    <h2 class="uk-width-expand uk-text-center uk-text-left@s">
                      Related Products
                    </h2>
                    <div class="uk-visible@s">
                      <a
                        class="tm-slidenav"
                        href="#"
                        uk-slider-item="previous"
                        uk-slidenav-previous
                      ></a
                      ><a
                        class="tm-slidenav"
                        href="#"
                        uk-slider-item="next"
                        uk-slidenav-next
                      ></a>
                    </div>
                  </div>
                  <div>
                    <div
                      class="
                        uk-card uk-card-default uk-card-small
                        tm-ignore-container
                      "
                    >
                      <div class="uk-position-relative">
                        <div class="uk-slider-container">
                          <div
                            class="
                              uk-slider-items
                              uk-grid-collapse
                              uk-child-width-1-3
                              uk-child-width-1-4@m
                              tm-products-grid
                            "
                          >
                            <article class="tm-product-card">
                              <div class="tm-product-card-media">
                                <div class="tm-ratio tm-ratio-4-3">
                                  <a class="tm-media-box" href="product.html">
                                    <div class="tm-product-card-labels">
                                      <span class="uk-label uk-label-warning"
                                        >top selling</span
                                      ><span class="uk-label uk-label-danger"
                                        >trade-in</span
                                      >
                                    </div>
                                    <figure class="tm-media-box-wrap">
                                      <img
                                        src="images/products/1/1-medium.jpg"
                                        alt='Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)'
                                      /></figure
                                  ></a>
                                </div>
                              </div>
                              <div class="tm-product-card-body">
                                <div class="tm-product-card-info">
                                  <div
                                    class="uk-text-meta uk-margin-xsmall-bottom"
                                  >
                                    Laptop
                                  </div>
                                  <h3 class="tm-product-card-title">
                                    <a
                                      class="uk-link-heading"
                                      href="product.html"
                                      >Apple MacBook Pro 15&quot; Touch Bar
                                      MPTU2LL/A 256GB (Silver)</a
                                    >
                                  </h3>
                                  <ul
                                    class="
                                      uk-list uk-text-small
                                      tm-product-card-properties
                                    "
                                  >
                                    <li>
                                      <span class="uk-text-muted"
                                        >Diagonal display: </span
                                      ><span>15.4"</span>
                                    </li>
                                    <li>
                                      <span class="uk-text-muted">CPU: </span
                                      ><span>Intel®&nbsp;Core™ i7</span>
                                    </li>
                                    <li>
                                      <span class="uk-text-muted">RAM: </span
                                      ><span>16&nbsp;GB</span>
                                    </li>
                                    <li>
                                      <span class="uk-text-muted"
                                        >Video Card: </span
                                      ><span>AMD Radeon Pro 555</span>
                                    </li>
                                  </ul>
                                </div>
                                <div class="tm-product-card-shop">
                                  <div class="tm-product-card-prices">
                                    <del class="uk-text-meta">$1899.00</del>
                                    <div class="tm-product-card-price">
                                      $1599.00
                                    </div>
                                  </div>
                                  <div class="tm-product-card-add">
                                    <div
                                      class="
                                        uk-text-meta
                                        tm-product-card-actions
                                      "
                                    >
                                      <a
                                        class="
                                          tm-product-card-action
                                          js-add-to js-add-to-favorites
                                          tm-action-button-active
                                          js-added-to
                                        "
                                        title="Add to favorites"
                                        ><span
                                          uk-icon="icon: heart; ratio: .75;"
                                        ></span
                                        ><span
                                          class="tm-product-card-action-text"
                                          >Add to favorites</span
                                        ></a
                                      ><a
                                        class="
                                          tm-product-card-action
                                          js-add-to js-add-to-compare
                                          tm-action-button-active
                                          js-added-to
                                        "
                                        title="Add to compare"
                                        ><span
                                          uk-icon="icon: copy; ratio: .75;"
                                        ></span
                                        ><span
                                          class="tm-product-card-action-text"
                                          >Add to compare</span
                                        ></a
                                      >
                                    </div>
                                    <button
                                      class="
                                        uk-button uk-button-primary
                                        tm-product-card-add-button tm-shine
                                        js-add-to-cart
                                      "
                                    >
                                      <span
                                        class="tm-product-card-add-button-icon"
                                        uk-icon="cart"
                                      ></span
                                      ><span
                                        class="tm-product-card-add-button-text"
                                        >add to cart</span
                                      >
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul
                      class="
                        uk-slider-nav
                        uk-dotnav
                        uk-flex-center
                        uk-margin-top
                        uk-hidden@s
                      "
                    ></ul>
                  </div>
                </div>
              </section>
            </div>
            <div id="review" uk-modal>
              <div class="uk-modal-dialog uk-modal-body">
                <button
                  class="uk-modal-close-outside"
                  type="button"
                  uk-close
                ></button>
                <h2 class="uk-modal-title uk-text-center">Review</h2>
                <form class="uk-form-stacked">
                  <div class="uk-grid-small uk-child-width-1-1" uk-grid>
                    <div>
                      <label>
                        <div class="uk-form-label uk-form-label-required">
                          Name
                        </div>
                        <input class="uk-input" type="text" required />
                      </label>
                    </div>
                    <div>
                      <label>
                        <div class="uk-form-label uk-form-label-required">
                          Email
                        </div>
                        <input class="uk-input" type="email" required />
                      </label>
                    </div>
                    <div>
                      <div class="uk-form-label">Rating</div>
                      <ul class="uk-iconnav tm-rating">
                        <li><a uk-icon="star"></a></li>
                        <li><a uk-icon="star"></a></li>
                        <li><a uk-icon="star"></a></li>
                        <li><a uk-icon="star"></a></li>
                        <li><a uk-icon="star"></a></li>
                      </ul>
                    </div>
                    <div>
                      <label>
                        <div class="uk-form-label uk-form-label-required">
                          Review
                        </div>
                        <textarea
                          class="uk-textarea"
                          rows="5"
                          required
                        ></textarea>
                      </label>
                    </div>
                    <div class="uk-text-center">
                      <button class="uk-button uk-button-primary">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "product",
  props: {
    item: Number,
  },
  data() {
    return {
      getData: "",
      getBlog: "",
      formData: {
        id: this.item,
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
      cartDetails: [],
    };
  },
  created() {
    this.getDetailProduct();
    // this.callFunction();
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getDetailProduct() {
      axios
        .get(this.$store.state.MainLink + "customer/products/" + this.item)
        .then((response) => {
          this.getData = response.data.object;
          this.getBlog = response.data.object.blogs.blogDetails;
          console.log("GetData", this.getData);
          // console.log("GetBlog", this.getBlog);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addToCart(getData) {
      // console.log(id, name, photos, price);
      console.log(getData)
      if (this.$store.state.tokenUser == "") {
        let item = {
          productName: getData.name,
          productId: getData.id,
          photo: getData.photos[0],
          price: getData.price,
          quantity: 1,
        };
        this.$store.state.StoreCart.push(item);
        this.$toasted.show("Đã thêm vào giỏ hàng !", {
          type: "success",
          duration: 2000,
        });
      } else {
        let item = {
          productId: getData.id,
          price: getData.price,
          quantity: 1,
        };
        this.$store.state.StoreCart.push(item);
        axios
          .post(this.$store.state.MainLink + "customer/cart/new", item, {
            headers: {
              Authorization: this.$store.state.tokenUser,
            },
          })
          .then((response) => {
            console.log(response);
            axios
              .get(this.$store.state.MainLink + "customer/cart/get", {
                headers: {
                  Authorization: this.$store.state.tokenUser,
                },
              })
              .then((response) => {
                this.$store.state.totalCart = response.data.object.length;
                this.$store.state.StoreCart = response.data.object;
                this.DetailsCart = this.$store.state.StoreCart;
                for (let item in this.DetailsCart) {
                  this.totalPriceProduct.push(response.data.object[item].price);
                }
              })
              .catch((e) => {
                console.log(e);
              });
          });

        this.$toasted.show("Đã thêm vào giỏ hàng !", {
          type: "success",
          duration: 2000,
        });
      }
    },
    compareProducts() {},
  },
};
</script>

<style>
a {
  text-decoration: none;
}
a.uk-accordion-title,
a.js-scroll-to-description {
  text-decoration: none;
}
</style>