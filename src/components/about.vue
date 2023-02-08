<template>
  <div class="section container" style="height: 100%; padding-bottom: 400px">
    <p style="text-align: left; margin-bottom: 60px">
      <router-link :to="{ name: 'singleCategory' }">
        <b-button
          v-bind:class="{ clWhite1: dark == false, clDark1: dark == true }"
          style="font-size: 12px; padding: 8px"
        >
          <img
            src="@/assets/home.svg"
            alt="ZuniLife"
            style="width: 15px; margin-bottom: 3px"
          />
          <span v-bind:class="{ clWhite: dark == false, clDark: dark == true }"
            >{{ $t("LanguageEn.homePage") }}
          </span></b-button
        >
      </router-link>
      <img
        src="@/assets/arr.svg"
        alt="ZuniLife"
        style="width: 20px; margin-left: 5px"
      /><a
        style="margin-left: 5px"
        v-bind:class="{ clWhite: dark == false, clDark: dark == true }"
        >{{ $t("LanguageEn.about") }}
      </a>
    </p>
    <h1 style="text-align: left; font-size: 24px">{{ text.title }}</h1>
    <p style="text-align: left; font-size: 15px" v-html="text.text"></p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "about",
  data() {
    return {
      cookiesObject: "",
      text: "",
    };
  },
  async beforeMount() {
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
      window.API + "/pageInfo?languageId=" + 2 + "&pageId=" + 1,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.text = result;
      })
      .catch((error) => console.log("error", error));
  },

  computed: {
    ...mapGetters(["tocken", "dark"]),
  },
  methods: {
    ...mapActions(["setToken", "setPermission"]),
  },

  props: {},
  components: {},
};
</script>

<style scoped>
</style>
