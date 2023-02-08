<template>
  <div>
    <div class="section" v-if="showCont == 3">
      <p class="container" style="text-align: left; margin-bottom: 60px">
        <router-link :to="{ name: 'singleCategory' }">
          <b-button v-bind:class="{ clWhite1: dark == false, clDark1: dark == true }"
            style="font-size: 12px; padding: 8px">
            <img src="@/assets/home.svg" alt="ZuniLife" style="width: 15px; margin-bottom: 3px" />
            <span v-bind:class="{ clWhite: dark == false, clDark: dark == true }">{{ $t("LanguageEn.homePage") }}
            </span></b-button>
        </router-link>
        <img src="@/assets/arr.svg" alt="ZuniLife" style="width: 20px; margin-left: 5px" /><a style="margin-left: 5px"
          v-bind:class="{ clWhite: dark == false, clDark: dark == true }">
          Tous les articles
        </a>
      </p>
      <div class="container border-bottom" style="">
        <h4 class="col-xl-5 col-md-5 col-sm-12 pl-0 pr-0" style="text-align: left">
          <span style="font-weight: 600"> Tous les articles</span>
          <span style="
              font-size: 12px;
              padding: 3px 7px;
              color: white;
              border-radius: 5px;
              margin-left: 4px;
            " v-bind:class="{
              redPill: categoryId == 1,
              orangePill: categoryId == 2,
              bluePill: categoryId == 3,
              yellowPill: categoryId == 4,
              pinkPill: categoryId == 5,
              maroonPill: categoryId == 6,
            }">{{ cats[categoryId - 1].name }}</span>
          <span style="color: grey; font-size: 12px; margin-left: 3px">{{ sz }} articles</span>
        </h4>
        <!-- <p class="col-xl-5 col-md-5 col-sm-12 pl-0 pr-0" style="text-align: left;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> -->
      </div>
      <div class="container">
        <div class="col-xl-12 col-md-12 col-sm-12 pl-0 pr-0" style="margin-top: 23px; text-align: left">
          <p v-bind:class="{ clWhite: dark == false, clDark: dark == true }" style="font-weight: 600; font-size: 15px">
            Toutes les catégories
            <span style="margin-left: 14px; cursor: pointer" v-for="sngl in cats" :key="sngl.id"
              @click="setCat(sngl.id, sngl.serviceId)" v-bind:class="{ textColor: categoryId == sngl.id }">{{
                sngl.name
              }}
              <img src="@/assets/check.svg" v-if="categoryId == sngl.id" alt=""
                style="width: 24px; margin-left: -4px; margin-top: -3px" /></span>
          </p>
        </div>
        <div class="row">
          <div v-for="post in posts" :key="post.id" class="col-xl-3 col-lg-3 col-md-6 pl-3 pr-3">
            <div class="blog_post">
              <div class="blog_img">
                <router-link :to="{
                  name: 'singlePost',
                  params: {
                    categoryId: categoryId,
                    contentId: post.content.id,
                  },
                }">
                  <div class="newBadge" v-if="!post.alreadySeen">Nouvel</div>
                  <img :src="imageLink + post.content.thumbnail" alt="blog_img" style="
                      width: 100%;
                      object-fit: cover;
                      height: 200px;
                      border-radius: 8px;
                    " />
                </router-link>
                <div class="blog_tags">
                  <a class="blog_tags_cat bg_warning" v-bind:class="{
                    redPill: categoryId == 1,
                    orangePill: categoryId == 2,
                    bluePill: categoryId == 3,
                    yellowPill: categoryId == 4,
                    pinkPill: categoryId == 5,
                    maroonPill: categoryId == 6,
                  }">{{ post.content.category.name }}</a>
                </div>
              </div>
              <div class="blog_content">
                <div class="blog_text">
                  <h5 class="blog_heading">
                    <router-link :to="{
                      name: 'singlePost',
                      params: {
                        categoryId: categoryId,
                        contentId: post.content.id,
                      },
                    }">
                      <div v-bind:class="{
                        clWhite: dark == false,
                        clDark: dark == true,
                      }">
                        <span class="listItem" style="font-size: 17px"
                          v-html="post.content.contentDataSet[0].title"></span>
                      </div>
                    </router-link>
                  </h5>
                  <ul class="blog_meta">
                    <!-- <li><img src="@/assets/calendar.png" alt="" style="width: 20px;"> <span style="font-size: 13px; font-style: italic;">{{post.subscriptionDate.slice(0,10)}}</span></li> -->
                    <!-- <li><a href="#"><i class="ti-comments"></i> <span>{{post.id}}</span></a></li> -->
                  </ul>
                  <p style="color: #686868; font-size: 15px" v-html="post.content.contentDataSet[0].body"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-else-if="showCont == 2">
      <div class="container" style="height: 480px">
        <div class="row">
          <div class="col-lg-12" style="margin-top: 90px">
            <img src="@/assets/zlifeBlack.png" alt="" style="width: 350px" />
            <h1 style="margin-top: 50px">
              404 <br />
              {{ $t("LanguageEn.notFound") }}
            </h1>
            <router-link :to="{ name: 'singleCategory' }">
              <b-button variant="warning" style="color: white; background: #ff7900; margin-top: 30px">{{
                $t("LanguageEn.homePage")
              }}</b-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-else-if="showCont == 1">
      <div class="container" style="height: 480px">
        <div class="row">
          <div class="col-lg-12" style="margin-top: 90px">
            <img src="@/assets/zlifeBlack.png" alt="" style="width: 350px" />
            <h3 style="margin-top: 50px">{{ $t("LanguageEn.notSubbed") }}</h3>
            <router-link :to="{ name: 'singleCategory' }">
              <b-button variant="warning" style="color: white; background: #ff7900; margin-top: 30px">{{
                $t("LanguageEn.homePage")
              }}</b-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <b-modal ref="my-modal2" hide-footer hide-header title="Using Component Methods">
      <h1 v-html="text.title"></h1>
      <p v-html="text.text"></p>
      <b-row>
        <b-col>
          <button type="submit" class="btn mbtn btn-default btn-block" style="
              z-index: 0;
              background: none;
              color: black;
              border-color: black;
            " @click="$refs['my-modal2'].hide(), $router.go(-1)">
            {{ $t("LanguageEn.cancel") }}
          </button>
        </b-col>
        <b-col>
          <button type="submit" class="btn btn-default btn-block" style="z-index: 0" @click="register()">
            {{ $t("LanguageEn.subscribe") }}
          </button>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal ref="my-modal3" hide-footer hide-header title="Using Component Methods">
      <h1 v-html="text.title"></h1>
      <p v-html="text.text"></p>
      <b-row>
        <b-col>
          <button type="submit" class="btn mbtn btn-default btn-block" style="
              z-index: 0;
              background: none;
              color: black;
              border-color: black;
            " @click="$refs['my-modal3'].hide()">
            {{ $t("LanguageEn.cancel") }}
          </button>
        </b-col>
        <b-col>
          <button type="submit" class="btn btn-default btn-block" style="z-index: 0" @click="activate()">
            {{ $t("LanguageEn.activateButton") }}
          </button>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal ref="my-modal" hide-footer hide-header title="Using Component Methods">
      <div class="modal-dialog modal-md modal-dialog-centered" role="document">
        <div class="modal-content border-0">
          <div class="modal-body">
            <div class="row no-gutters">
              <div class="col-12">
                <div class="padding_eight_all">
                  <div class="heading_s1">
                    <h4>{{ $t("LanguageEn.verification") }}</h4>
                  </div>
                  <div class="form-group">
                    <input type="text" required="" @keyup.enter="verifyOtp()" class="form-control" id="otp"
                      v-model="OTP" name="OTP" :placeholder="$t('LanguageEn.enterCode')" />
                  </div>
                  <div class="form-group">
                    <button type="" class="btn btn-default btn-block" name="login" @click="verifyOtp()">
                      {{ $t("LanguageEn.verify") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "categoryPosts",
  data() {
    return {
      posts: [],
      cookiesObject: "",
      categoryId: "",
      actToken: "",
      verToken: "",
      OTP: "",
      imageLink: window.API + "/media/",
      showCont: "",
      text: "",
      cats: "",
      cat: "",
      serId: "",
      lang: 2,
      sz: "0",
    };
  },
  async created() {
    this.categoryId = this.$route.params.categoryId;
    this.serId = this.$route.params.servicId;

    setTimeout(() => {
      console.log(this.posts)
    }, "1000")

    var cookiesObject = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce(
        (accumulator, [key, value]) => ({
          ...accumulator,
          [key.trim()]: decodeURIComponent(value),
        }),
        {}
      );
    this.cookiesObject = cookiesObject;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + this.cookiesObject.token);
    myHeaders.append("categoryId", "5");
    myHeaders.append(
      "Cookie",
      "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      window.API + "/user/categories/" + this.categoryId + "/content?",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status == "Forbidden") {
          this.showCont = 1;
          this.showText(4, 1);
          this.$refs["my-modal2"].show();
          this.actToken = result.newToken;
        } else if (result.code == 404) {
          this.showCont = 2;
        } else if (result.status == "PAST_DUE") {
          this.showCont = 1;
          this.showText(4, 1);
          this.$refs["my-modal3"].show();
          this.actToken = result.newToken;
        } else if (result.code == 401) {
          location.assign("/");
        } else {
          this.posts = result.content;
          this.sz = result.content.length;
          this.showCont = 3;
        }
      })
      .catch((error) => console.log("error", error));

    this.categories();
  },
  components: {},
  computed: {
    ...mapGetters(["dark"]),
  },
  methods: {
    setCat(val, val2) {
      this.$router.push({
        name: "categoryPosts",
        params: { categoryId: val, servicId: val2 },
      });
    },
    categories() {
      var myHeaders = new Headers();
      // myHeaders.append("Authorization", "Bearer " + this.cookiesObject.token);
      myHeaders.append(
        "Cookie",
        "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(window.API + "/user/categories", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.cats = result.content;
        })
        .catch((error) => console.log("error", error));
    },
    showText(val1, val2) {
      var myHeaders = new Headers();
      myHeaders.append(
        "Cookie",
        "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        window.API +
        "/pageInfo?languageId=" +
        this.lang +
        "&pageId=" +
        val1 +
        "&serviceId=" +
        val2,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          this.text = result;
        })
        .catch((error) => console.log("error", error));
    },
    register() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + this.actToken);
      myHeaders.append(
        "Cookie",
        "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234"
      );

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(window.API + "/register", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.$refs["my-modal2"].hide();
          this.$refs["my-modal"].show();
          // document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
          this.verToken = result.token;
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    },
    activate() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + this.actToken);
      myHeaders.append(
        "Cookie",
        "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234"
      );

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(window.API + "/activate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.message == "User activated successfully.") {
            document.cookie =
              "token = " +
              result.token +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "permission = granted ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            location.assign("/");
          } else {
            alert(result.message);
            console.log(result);
          }
        })
        .catch((error) => console.log("error", error));
    },
    verifyOtp() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + this.verToken);
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Cookie",
        "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234"
      );

      var raw = JSON.stringify({ otp: this.OTP });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(window.API + "/verifyOtp", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status == "ACTIVE") {
            document.cookie =
              "token = " +
              result.token +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            location.assign("/");
          } else if (result.status == "PAST_DUE") {
            this.activateToken = result.token;
            this.$refs["my-modal"].hide();
            this.$refs["my-modal3"].show();
          } else {
            alert(result.message);
          }
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style>
/* @import '../assets/style.css';
@import '../assets/responsive.css';
@import '../assets/themify-icons.css';
@import '../assets/animate.css';
@import '../assets/ionicons.min.css';
@import '../assets/linearicons.css';
@import '../assets/all.min.css';
@import '../assets/owl.carousel.min.css';
@import '../assets/owl.theme.default.min.css';
@import '../assets/owl.theme.css';
@import '../assets/magnific-popup.css'; */

.mbtn:hover {
  color: #ff7900 !important;
  border-color: #ff7900 !important;
}

.textColor {
  color: #ff7900;
}

.newBadge {
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: rgba(202, 43, 43, 0.75);
  color: white;
  font-weight: 600;
  border-radius: 20px;
  padding: 2px 10px 2px 10px;
}
</style>
