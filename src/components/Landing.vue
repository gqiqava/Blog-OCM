<template>
  <div v-bind:class="{ bgWhite: dark == false, bgDark: dark == true }">
    <div class="topNav sticky-top" style="">
      <div class="container">
        <div class="row">
          <div>
            <router-link :to="{ name: 'singleCategory' }">
              <img src="@/assets/zlifeWhite.png" alt="ZuniLife" style="width: 110px" />
            </router-link>
          </div>
          <div style="margin-left: auto">
            <div style="text-align: left; border-radius: 5px" v-if="cookiesObject.permission == 'granted'">
              <b-dropdown id="dropdown-1" class="m-md-2 b2" no-caret variant="none" style="
                  background: #1a1d22;
                  border-radius: 5px;
                  color: white;
                  height: 39px;
                ">
                <template #button-content>
                  <div style="line-height: normal">
                    <img src="@/assets/mob.svg" alt="lgOut"
                      style="width: 18px; cursor: pointer; margin-right: 6px" /><span class="tone"
                      style="font-size: 14px">
                      {{ cookiesObject.number }}
                    </span>
                  </div>
                </template>
                <!-- <b-dropdown-item
                  style="font-size: 14px; padding: 5px 3px 5px 3px"
                >
                  <div v-b-modal.period-modal>
                    <img
                      src="@/assets/cal.png"
                      alt="lgOut"
                      style="
                        width: 18px;
                        cursor: pointer;
                        padding-bottom: 5px;
                        margin-left: 5px;
                        margin-right: 5px;
                      "
                    />
                    <span v-if="cookiesObject.periodId">
                      {{ period[cookiesObject.periodId - 1].description }}
                    </span>
                  </div>
                </b-dropdown-item> -->
                <b-dropdown-item @click="logout()" style="font-size: 14px; padding: 5px 3px 5px 3px"><img
                    src="@/assets/lgt.svg" alt="lgOut" style="
                      width: 18px;
                      cursor: pointer;
                      padding-bottom: 5px;
                      margin-left: 5px;
                      margin-right: 5px;
                    " />
                  Se déconnecter</b-dropdown-item>
              </b-dropdown>
            </div>
            <div style="text-align: left" v-else>
              <b-button type="" class="bbtn" name="login" @click="openModal" style="
                  font-size: 11px;
                  font-weight: bold;
                  border: solid 2px #ff7900;
                  border-radius: 5px;
                  padding: 9px;
                ">{{ $t("LanguageEn.login") }}</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- start Sidebar -->

    <div>
      <b-sidebar id="sidebar-1" title="" shadow>
        <div class="px-3 py-2">
          <div style="text-align: left">
            <img src="@/assets/zlifeBlack.png" alt="Zunilife" style="width: 100px; margin-bottom: 30px" />
          </div>

          <p style="font-size: 19px; text-align: left; color: black">
            <span style="color: #ff7900"> Réglages </span>
          </p>
          <ul style="list-style-type: none; text-align: left; margin-left: 10px">
            <li v-if="showLang == 1" class="listItem" @click="$refs['language-modal'].show()">
              <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer" />
              <a style="cursor: pointer; margin-left: 5px">{{
                $t("LanguageEn.language")
              }}</a>
            </li>
          </ul>
        </div>
      </b-sidebar>
    </div>

    <!-- End Sidebar -->

    <b-modal ref="language-modal" hide-footer hide-header title="Using Component Methods">
      <h4>{{ $t("LanguageEn.language") }}</h4>
      <ul style="list-style-type: none; text-align: left">
        <li class="listItem" v-bind:class="{ chosenLanguage: $i18n.locale == 'fr' }" @click="$i18n.locale = 'fr'">
          <a style="cursor: pointer; margin-left: 5px">Français</a>
        </li>
        <li class="listItem" v-bind:class="{ chosenLanguage: $i18n.locale == 'en' }" @click="$i18n.locale = 'en'">
          <a style="cursor: pointer; margin-left: 5px">English</a>
        </li>
      </ul>
    </b-modal>
    <b-modal ref="text-modal" body-class="defModal" header-class="defModal1" hide-footer :title="text.title">
      <p v-html="text.text"></p>
    </b-modal>

    <!-- START BLOG  -->

    <router-view :key="$route.path"></router-view>

    <!-- END BLOG -->

    <!-- START FOOTER SECTION -->
    <footer class="footer_dark bg_black" style="background: black">
      <div class="bottom_footer border-top-tran">
        <div class="container">
          <div class="row" style="text-align: left">
            <div class="col-12" style="color: lightgrey">
              <span class="listItem">
                <router-link :to="{ name: 'about', params: {} }">
                  <img src="@/assets/arr.svg" alt="ZuniLife" style="width: 15px; margin-left: 5px" /><a
                    style="cursor: pointer; margin-left: 5px">{{ $t("LanguageEn.about") }}
                  </a>
                </router-link>
              </span>
              <span class="listItem">
                <router-link :to="{ name: 'terms', params: {} }">
                  <img src="@/assets/arr.svg" alt="ZuniLife" style="width: 15px; margin-left: 5px" /><a
                    style="cursor: pointer; margin-left: 5px">{{ $t("LanguageEn.termsC") }}
                  </a>
                </router-link>
              </span>
              <span class="copyright m-0 text-center" style="float: right">
                © {{ new Date().getFullYear() }}
                {{ $t("LanguageEn.reserved") }}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- END FOOTER SECTION -->

    <!--  MODALS -->

    <b-modal ref="first-modal" id="first-modall" body-class="defModal" hide-footer hide-header>
      <div class="heading_s1">
        <img src="@/assets/zlifeWhite.png" alt="ZuniLife" style="width: 100px" />
      </div>
      <span style="float: left">Entrez votre numéro de mobile</span>
      <div style="margin-bottom: 20px; margin-top: 50px">
        <VuePhoneNumberInput dark autofocus v-model="number" @update="onUpdate" style="" default-country-code="CM" />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-default btn-block bbtn" style="z-index: 0; border-radius: 12px"
          v-if="results.isValid" @click="login(), $refs['first-modal'].hide()">
          {{ $t("LanguageEn.next") }}
        </button>
        <button type="submit" class="btn btn-default btn-block bbtn" style="z-index: 0; border-radius: 12px" disabled
          v-else>
          Entrez votre numéro de mobile
        </button>
      </div>
    </b-modal>
    <b-modal ref="my-modal" id="my-modal" body-class="defModal" hide-footer hide-header>
      <div class="border-0">
        <div class="modal-body">
          <div class="row no-gutters">
            <div class="col-12">
              <div class="padding_six_all">
                <div class="heading_s1">
                  <h4 style="color: white">
                    {{ $t("LanguageEn.verification") }}
                  </h4>
                </div>
                <div class="form-group">
                  <span style="float: left; margin-bottom: 5px">{{ $t("LanguageEn.enterCode") }}:
                    <span v-if="this.results.formattedNumber" style="color: white">{{
                      this.results.formattedNumber.slice(1)
                    }}</span>
                    <span v-else style="color: white">{{
                      cookiesObject.number
                    }}</span>
                  </span>
                  <input style="background: #424242; color: lightgrey" type="text" required=""
                    @keyup.enter="(spinning = true), verifyOtp()" class="form-control" id="otp" v-model="OTP" name="OTP"
                    placeholder="OTP Code" />
                  <p v-if="showErr" style="color: red; margin-top: 10px">
                    Le code saisi est erroné, veuillez réessayer
                  </p>
                </div>
                <div class="form-group">
                  <button type="" style="border-radius: 12px" class="btn bbtn btn-default btn-block" name="login"
                    @click="(spinning = true), verifyOtp()">
                    <b-spinner v-if="spinning" variant="warning" type="grow" label="Spinning"></b-spinner>
                    <span v-else>{{ $t("LanguageEn.verify") }}</span>
                  </button>
                  <br />
                  <button type="" class="cncl" name="logout" @click="logout()">
                    <span>{{ $t("LanguageEn.cancel") }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal ref="my-modal2" hide-header hide-footer body-class="defModal" header-class="defModal1">
      <h5 style="color: white; margin-bottom: 20px">
        {{ $t("LanguageEn.regTerms") }}
      </h5>
      <p v-html="text.text" style="color: lightgrey"></p>
      <b-row>
        <b-col>
          <button type="submit" class="btn mbtn btn-default btn-block" style="
              z-index: 0;
              background: none;
              color: white;
              border-color: white;
              border-radius: 12px;
            " @click="$refs['my-modal2'].hide()">
            {{ $t("LanguageEn.cancel") }}
          </button>
        </b-col>
        <b-col>
          <button type="submit" class="btn bbtn btn-default btn-block" style="z-index: 0; border-radius: 12px"
            @click="register()">
            {{ $t("LanguageEn.subscribe") }}
          </button>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal body-class="defModal" header-class="defModal1" ref="my-modal3" hide-footer
      :title="$t('LanguageEn.activate')">
      <p style="color: white">
        Votre compte est en retard, veuillez l'activer pour continuer !
      </p>
      <p v-if="activateText" style="color: red">
        {{ activateText }}
      </p>
      <b-row>
        <b-col>
          <button type="submit" class="btn mbtn btn-default btn-block" style="
              z-index: 0;
              background: none;
              color: white;
              border-color: white;
            " @click="logout()">
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
    <b-modal ref="my-modal4" hide-footer hide-header @hide="handleOk" title="Registration" body-class="defModal"
      header-class="defModal1">
      <p v-if="!spinning" style="padding: 20px 0px 20px 0px; color: lightgrey; font-size: 17px">
        Passez au lien d'abonnement en cliquant sur le bouton ci-dessous
      </p>
      <b-row class="mt-3">
        <div v-if="!spinning" class="container"></div>
        <div v-else class="container pb-3">
          <p style="font-size: 16px">
            Souscription en cours
            <b-spinner small v-if="spinning" variant="warning" style="margin-right: 5px; margin-bottom: 3px"
              label="Spinning"></b-spinner>. Cela ne devrait pas tarder...
          </p>
        </div>
        <b-col>
          <button type="submit" class="btn btn-default btn-block" style="z-index: 0"
            @click="(spinning = true), subscribe()">
            <b-spinner v-if="spinning" variant="warning" type="grow" label="Spinning"></b-spinner>
            <span v-else>Subscribe</span>
          </button>
          <br />
          <button type="" class="cncl" name="logout" @click="logout()">
            <span>{{ $t("LanguageEn.cancel") }}</span>
          </button>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal ref="my-modal7" hide-footer :title="$t('LanguageEn.regTerms')">
      <p v-html="text.text"></p>
      <button type="submit" class="btn mbtn btn-default btn-block"
        style="z-index: 0; background: none; color: black; border-color: black"
        @click="$refs['my-modal7'].hide(), login()">
        {{ $t("LanguageEn.login") }}
      </button>
    </b-modal>
    <!-- <b-modal
      ref="period-modal"
      id="period-modal"
      body-class="defModal"
      header-class="defModal1"
      hide-footer
      :title="'Subscription Period'"
    >
      <p>If you wish to change Subscription period, select from below</p>
      <b-form-select
        v-model="passId"
        class="mb-3"
        style="background: #424242; color: lightgrey"
      >
        <b-form-select-option
          v-for="periodId in period"
          :key="periodId.id"
          :value="periodId.id"
          style="color: lightgrey"
          :disabled="periodId.id == cookiesObject.periodId"
        >
          <span>
            {{ periodId.description }}
          </span>
        </b-form-select-option>
      </b-form-select>
      <button
        :disabled="!passId"
        type="submit"
        class="btn btn-default btn-block"
        style="z-index: 0"
        @click="(spinning = true), subscribe()"
      >
        <b-spinner
          v-if="spinning"
          variant="warning"
          type="grow"
          label="Spinning"
        ></b-spinner>
        <span v-else>Change</span>
      </button>
    </b-modal> -->
    <div style="
        position: fixed;
        bottom: 80px;
        right: 30px;
        z-index: 1;
        cursor: pointer;
      ">
      <img v-if="dark == false" @click="setTheme(!dark)" style="width: 45px" src="@/assets/dark.svg" alt="" />
      <img v-else @click="setTheme(!dark)" style="width: 70px; margin-bottom: -10px; margin-right: -10px"
        src="@/assets/light.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VuePhoneNumberInput from "vue-phone-number-input";

export default {
  name: "Landing",
  data() {
    return {
      posts: [],
      number: "",
      OTP: "",
      test: "",
      results: {},
      cookiesObject: "",
      chosenBundle: "",
      bundles: [],
      activateToken: "",
      text: "",
      showErr: false,
      lang: "2",
      showLang: "",
      activateText: null,
      webSubs: "",
      activPage: "",
      challengeId: "",
      passId: null,
      spinning: false,
      period: [
        {
          id: 1,
          description: "Daily",
        },
        {
          id: 2,
          description: "Weekly",
        },
        {
          id: 3,
          description: "Monthly",
        },
      ],
    };
  },
  async created() {
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

    this.bundless();
    this.appData();
  },

  mounted() {
    if (
      this.cookiesObject.phase == "1" &&
      this.cookiesObject.cPerm == "VERIFY_OTP" &&
      this.cookiesObject.token
    ) {
      this.$refs["my-modal"].show();
    } else if (
      this.cookiesObject.phase == "2" &&
      this.cookiesObject.cPerm == "REGISTER" &&
      this.cookiesObject.token
    ) {
      this.$refs["my-modal4"].show();
    } else if (
      this.cookiesObject.phase == "3" &&
      this.cookiesObject.cPerm == "GET_STATUS" &&
      this.cookiesObject.token
    ) {
      this.spinning = true;
      this.$refs["my-modal4"].show();

      let interval = setInterval(() => {
        this.getStatus();
      }, 5000);

      interval;

      if (this.cookiesObject.phase != "3") {
        clearInterval(interval);
      }
      // this.getStatus();
    }
  },

  components: {
    VuePhoneNumberInput,
  },
  computed: {
    ...mapGetters(["tocken", "bundlee", "dark"]),
    resultsTable() {
      return Object.keys(this.results);
    },
  },
  methods: {
    ...mapActions(["setToken", "setPermission", "setBundle", "setTheme"]),
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      // this.handleSubmit()
    },
    appData() {
      var myHeaders = new Headers();
      myHeaders.append(
        "Cookie",
        "__cfduid=daa11664c49161bf93cd02dbd6c4fb8131611146765"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(window.API + "/appData", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.showLang = result.Languages.value;
          this.webSubs = result.webSubs.value;
          this.activPage = result.activPage.value;
        })
        .catch((error) => console.log("error", error));
    },
    logout() {
      document.cookie =
        "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = "refToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = "number = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = "cPerm = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = "phase = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = "periodId = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie =
        "challengeId = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      location.assign("/");
    },
    showModal() {
      this.$refs["my-modal2"].show();
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

    onUpdate(payload) {
      this.results = payload;
    },
    bundless() {
      var myHeaders = new Headers();
      myHeaders.append(
        "Cookie",
        "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(window.API + "/bundleServices", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.bundles = result;
        })
        .catch((error) => console.log("error", error));
    },

    openModal() {
      if (
        this.cookiesObject.phase == "1" &&
        this.cookiesObject.cPerm == "VERIFY_OTP" &&
        this.cookiesObject.token
      ) {
        this.$refs["my-modal"].show();
      } else if (
        this.cookiesObject.phase == "2" &&
        this.cookiesObject.cPerm == "REGISTER" &&
        this.cookiesObject.token
      ) {
        this.$refs["my-modal4"].show();
      } else if (
        this.cookiesObject.phase == "3" &&
        this.cookiesObject.cPerm == "GET_STATUS" &&
        this.cookiesObject.token
      ) {
        this.spinning = true;
        this.$refs["my-modal4"].show();
        this.getStatus();
      } else {
        this.$refs["first-modal"].show();
      }
    },

    getStatus() {
      var myHeaders = new Headers();
      myHeaders.append(
        "authorization",
        `Bearer ${this.cookiesObject.token != undefined
          ? this.cookiesObject.token
          : this.tocken
        }`
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(window.API + "/status", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (
            result.userStatus == "ACTIVE" &&
            result.permissions.includes("READ_CONTENT")
            // && result.periodId == this.cookiesObject.periodId
          ) {
            document.cookie =
              "phase = 0 ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "cPerm = READ ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "token = " +
              result.token +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "periodId = " +
              result.periodId +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "refToken = " +
              result.refreshToken +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "permission = granted ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            this.setToken(result.token);
            // this.$router.push({name: 'categoryPosts', params: { categoryId : 2 }})
            location.reload();
          }
        })
        .catch((error) => console.log("error", error));
    },

    login() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "JSESSIONID=4DC44D9729EB2AE538EF2442A2E8F689");

      var raw = JSON.stringify({
        language: `1`,
        msisdn: `${this.results.formattedNumber.slice(1)}`,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(window.API + "/sendOtp", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          document.cookie =
            "number = " +
            this.results.formattedNumber.slice(1) +
            ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
          document.cookie =
            "token = " +
            result.token +
            ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
          document.cookie =
            "challengeId = " +
            result.challengeId +
            ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
          document.cookie =
            "phase = 1 ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
          if (result.permissions.includes("VERIFY_OTP")) {
            document.cookie =
              "cPerm = VERIFY_OTP ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
          }

          this.challengeId = result.challengeId;

          this.setToken(result.token);

          if (result.permissions.includes("VERIFY_OTP")) {
            this.$refs["my-modal"].show();
          }
        })
        .catch((error) => console.log("error", error));
    },

    verifyOtp() {
      var myHeaders = new Headers();
      myHeaders.append(
        "authorization",
        `Bearer ${this.cookiesObject.token != undefined
          ? this.cookiesObject.token
          : this.tocken
        }`
      );
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "JSESSIONID=68F5F0F7D03EAD1407CB7C54D4581D0A");

      var raw = JSON.stringify({
        challengeId: `${this.cookiesObject.challengeId != undefined
            ? this.cookiesObject.challengeId
            : this.challengeId
          }`,
        otp: `${this.OTP}`,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(window.API + "/verifyOtp", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.spinning = false;
          if (
            result.status == "ACTIVE" &&
            result.permissions.includes("READ_CONTENT")
          ) {
            document.cookie =
              "phase = 0 ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "periodId = " +
              result.periodId +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "token = " +
              result.token +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "refToken = " +
              result.refreshToken +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "permission = granted ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            this.setToken(result.token);
            // this.$router.push({name: 'categoryPosts', params: { categoryId : 2 }})
            location.reload();
          } else if (
            (result.status == "UNSUBSCRIBED" || result.status == "NOT_FOUND") &&
            result.permissions.includes("REGISTER")
          ) {
            this.activateToken = result.token;
            document.cookie =
              "token = " +
              result.token +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "refToken = " +
              result.refreshToken +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "phase = 2; expires = Thu, 01 Jan 2040 00:00:00 GMT;";

            if (result.permissions.includes("REGISTER")) {
              document.cookie =
                "cPerm = REGISTER ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            }

            // console.log(result);

            //redirect, pending mounted
            this.$refs["my-modal"].hide();
            this.$refs["my-modal4"].show();
          } else if (result.status == "PAST_DUE") {
            // console.log(result);
            this.text =
              "Votre compte est en souffrance, veuillez l'activer pour continuer!";
            this.activateToken = result.token;
            this.$refs["my-modal"].hide();
            this.$refs["my-modal3"].show();
          }

          //  WRONG OTP & ACtivation
          else if (result.code == 401) {
            // console.log(result);
            this.showErr = true;
          } else {
            console.log(result);
            // console.log(this.cookiesObject.token);
            // console.log(this.OTP);
          }
        })
        .catch((error) => console.log("error", error));
    },

    subscribe() {
      // document.cookie =
      //   "periodId = " +
      //   this.passId +
      //   ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";

      document.cookie = "phase = 3; expires = Thu, 01 Jan 2040 00:00:00 GMT;";
      document.cookie =
        "cPerm = GET_STATUS ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";

      location.href =
        "https://place.orange.cm/digistore/fr/cm/details/ZuniLife";

      // location.reload();
    },

    activate() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + this.activateToken);
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
          if (
            result.message == "User activated successfully." &&
            result.permissions.includes("READ_CONTENT")
          ) {
            document.cookie =
              "phase = 0 ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "periodId = " +
              result.periodId +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "token = " +
              result.token +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "refToken = " +
              result.refreshToken +
              ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            document.cookie =
              "permission = granted ;expires = Thu, 01 Jan 2040 00:00:00 GMT;";
            this.setToken(result.token);
            // this.$router.push({name: 'categoryPosts', params: { categoryId : 2 }})
            location.reload();
          } else {
            this.activateText = "Une erreur s'est produite. Veuillez réessayer";
            // console.log(result);
          }
        })
        .catch((error) => console.log("error", error));
    },
    register() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + this.tocken);
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
          document.cookie =
            "token = " +
            result.token +
            ";expires = Thu, 01 Jan 2040 00:00:00 GMT;";
          this.setToken(result.token);
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import "../assets/style.css";
@import "../assets/responsive.css";
@import "../assets/themify-icons.css";
@import "../assets/animate.css";
@import "../assets/ionicons.min.css";
@import "../assets/linearicons.css";
@import "../assets/all.min.css";
@import "../assets/owl.carousel.min.css";
@import "../assets/owl.theme.default.min.css";
@import "../assets/owl.theme.css";
@import "../assets/magnific-popup.css";

.bgWhite {
  background: #eeeff2;
  color: #0f1215;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.bgDark {
  background: #0f1215;
  color: #eeeff2;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.clWhite {
  color: #0f1215 !important;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.clDark {
  color: #eeeff2 !important;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.topNav {
  background: #13161a !important;
  height: 80px;
  line-height: 80px;
}

.header_wrap {
  margin-top: 60px;
}

.dColor {
  color: red;
}

.b2 .dropdown-menu {
  background: #1a1d22 !important;
  color: white !important;
  width: 190px;
}

.b2 .dropdown-item {
  color: white;
  height: 25px;
  line-height: 25px;
}

.tone {
  color: lightgrey !important;
}

.tone:hover {
  color: #ff7900 !important;
}

.b2:hover {
  color: #ff7900 !important;
}

.cncl {
  border-radius: 12px;
  background: transparent;
  color: white;
  padding: 8px;
}

.cncl:hover {
  border-color: #9b111e;
  color: #9b111e;
  /* background-color: white; */
}

.listItem:hover {
  color: #ffa500;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.chosenLanguage {
  color: #e99a06;
}

.bbtn {
  background: transparent;
}

.bbtn:hover {
  background: #ff7900;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.defModal {
  background: #0f1215;
}

.defModal1 {
  background: #0f1215;
  color: white;
  border: none;
  border-radius: 0px;
}
</style>
