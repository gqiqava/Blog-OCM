<template>
  <div class="hello">
<!-- LOADER -->
<div v-if="loader" id="preloader">
    <div class="sk-folding-cube">
		<div class="sk-folding-cube-box">
			<div class="sk-cube1 sk-cube"></div>
			<div class="sk-cube2 sk-cube"></div>
			<div class="sk-cube4 sk-cube"></div>
			<div class="sk-cube3 sk-cube"></div>
		</div>
	</div>
</div>
<!-- END LOADER --> 



<!-- START HEADER -->
<!-- <header class="header_wrap dark_skin">
  <nav class="navbar navbar-expand-lg bg-light fixed-top" style="height: 60px; background: #202325 !important;"> 
      <b-row>
        <b-col>
            <a v-b-toggle.sidebar-1>
                <img src="@/assets/menuIcon.png" alt="Menu" style="width: 40px;">
            </a>
        </b-col>
        <b-col>
            <a class="navbar-brand">
                <router-link :to="{ name: 'singleCategory'}">
                <img class="logo_dark" src="@/assets/logo.svg" alt="logo" style="width: 60px;"/>
                </router-link>
            </a>
        </b-col>
        </b-row> -->
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="ion-android-menu"></span> </button> -->
            <!-- <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown">Menu</a>
                        <div class="dropdown-menu dropdown-reverse">
                            <ul> 
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">example1</a></li>
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">example2</a></li>
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">example3</a></li>
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">Language</a></li>
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">Terms & Conditions</a></li>
                                <li><a class="dropdown-item nav-link nav_item" @click="logout()" style="cursor: pointer;">Logout </a></li>
                            </ul>
                        </div>
                    </li>  
                </ul>
            </div> -->
		<!-- </nav>
</header> -->

<div style="margin-bottom: 10px;">
  <b-navbar fixed="top" type="dark" variant="dark" style="background: black !important; height: 60px;">
      <a v-b-toggle.sidebar-1>
                <img src="@/assets/menuIcon.png" alt="Menu" style="width: 28px; cursor: pointer; margin-left: 20px;">
            </a>
    <b-navbar-brand href="#">
        <router-link :to="{ name: 'singleCategory'}">
        <img src="@/assets/logo.svg" alt="ZuniLife" style="width: 80px; margin-left: 20px;">
        </router-link>
    </b-navbar-brand>
      <!-- <b-navbar-nav class="mr-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
  </b-navbar>
</div>

<!-- start Sidebar -->

<div>
    <b-sidebar id="sidebar-1" title="" shadow>
      <div class="px-3 py-2">
        <div style="text-align: left;">
            <img src="@/assets/ZunilifeLogo.svg"  alt="Zunilife" style="width: 80px; margin-bottom: 30px;">
        </div>
          <div style="text-align: left; margin-bottom: 20px;" v-if="cookiesObject.permission == 'granted'">
            <span style="font-size: 17px;" v-if="cookiesObject.number"> {{cookiesObject.number.slice(1)}} </span>
            <img src="@/assets/logout-256.png" @click="logout()" alt="Menu" style="width: 30px; cursor: pointer;">
          </div>
          <div style="text-align: left; margin-bottom: 20px;" v-else>
            <b-button type="" name="login" @click="$refs['first-modal'].show()" style="font-size: 12px; background: #ff7900; font-weight: bold;">{{ $t('LanguageEn.login') }}</b-button>
          </div>
        <p style="font-size: 19px; text-align: left; color: black;"> 
            <span style="color: #ff7900"> Settings </span>
        </p>
        <ul style="list-style-type: none; text-align: left; margin-left: 10px;"> 
            <!-- <li class="listItem">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">example </a>
            </li>
            <li class="listItem">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">example </a>
            </li> -->
            <li class="listItem" @click="showText(1,2),$refs['text-modal'].show()">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">{{ $t('LanguageEn.about') }} </a>
            </li>
            <li class="listItem" @click="$refs['language-modal'].show()">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;" >{{ $t('LanguageEn.language') }}</a>
            </li>
            <li class="listItem"  @click="showText(2,2),$refs['text-modal'].show()">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">{{ $t('LanguageEn.termsC') }}</a>
            </li>
        </ul>
      </div>
    </b-sidebar>
  </div>

<!-- End Sidebar -->

<b-modal ref="language-modal" hide-footer hide-header title="Using Component Methods">
        <h4>{{ $t('LanguageEn.language') }}</h4>
        <ul style="list-style-type: none; text-align: left;"> 
            <li class="listItem" v-bind:class="{ chosenLanguage: $i18n.locale == 'fr' }" @click="$i18n.locale = 'fr'">
            <a style="cursor: pointer; margin-left: 5px;">Français</a>
            </li>
            <li class="listItem" v-bind:class="{ chosenLanguage: $i18n.locale == 'en' }" @click="$i18n.locale = 'en'">
            <a style="cursor: pointer; margin-left: 5px;">English</a>
            </li>
        </ul>
    </b-modal>
    <b-modal ref="text-modal" hide-footer :title="text.title">
        <p v-html="text.text">{{text.text}}</p>
    </b-modal>


<!-- START BLOG  -->

<router-view :key="$route.path"></router-view>

<!-- END BLOG -->
 
    
<!-- START FOOTER SECTION --> 
<footer class="footer_dark bg_black" style="background: black;">
    <div class="bottom_footer border-top-tran">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="copyright m-0 text-center"> © {{new Date().getFullYear()}} {{ $t('LanguageEn.reserved') }}</p>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- END FOOTER SECTION --> 

<!--  MODALS -->   

<b-modal ref="first-modal" id="first-modall" hide-footer hide-header title="Using Component Methods">
        <div class="heading_s1">
            <img src="@/assets/logo.svg" alt="ZuniLife" style="width: 80px;">
        </div>
        <div style="margin-bottom: 20px; margin-top: 40px;">
            <VuePhoneNumberInput autofocus v-model="number" @update="onUpdate" style="" default-country-code="CM"/>
        </div> 
        <span style="float: left; margin-bottom: 10px;">{{ $t('LanguageEn.selectBundle') }}</span><br>
        <b-form-select v-model="bundlee" class="mb-3" @change="setBundle">
            <b-form-select-option v-for="bundle in bundles" :key="bundle.id" @change="setBundle(bundle.bundleId)" :value="bundle.bundleId"> <span> {{bundle.bundleName}} </span> </b-form-select-option>
        </b-form-select>
        <!-- <div>
            <b-dropdown id="dropdown-1" text="Bundles" class="m-md-2" style="background: #ff7900 !important; color: white !important; font-size: 10px; !important" variant="none">
                <b-dropdown-item v-for="bundle in bundles" :key="bundle.id" :value="bundle.bundleId"><span @click="setBundle(bundle.bundleId)"> {{bundle.bundleName}} </span></b-dropdown-item>
            </b-dropdown>
        </div> -->
        <!-- <div>
        <ul v-for="bundle in bundles" :key="bundle.id" :value="bundle.bundleId">
            <li> <span @click="setBundle(bundle.bundleId)" > {{bundle.bundleName}} {{bundle.bundleId}} </span></li>
        </ul>
        </div> -->
        <div v-if="bundlee != ''" style="margin-left: 2px; margin-bottom: 5px;">
        {{ $t('LanguageEn.bundleIncludes') }} 
        <span style="margin-right: 5px;" v-for="(categoriess, indx) in bundles[bundlee - 1].categories" :key="categoriess.id">
        {{categoriess.name}} <span v-if="indx < bundles[bundlee - 1].categories.length - 1">,</span>
        </span>
        </div>
            <div class="form-group">
                <button type="submit" class="btn btn-default btn-block" style="z-index: 0;"  @click="login(), $refs['first-modal'].hide()" v-if="bundlee != '' && results.isValid == true">{{ $t('LanguageEn.next') }}</button>
                <button type="submit" class="btn btn-default btn-block" style="z-index: 0;" disabled v-else>{{ $t('LanguageEn.next') }}</button>
            </div>
    </b-modal>
    <b-modal ref="my-modal" hide-footer hide-header title="Using Component Methods">
      <div class="modal-dialog modal-md modal-dialog-centered" role="document">
    <div class="modal-content border-0">
    <div class="modal-body">
    <div class="row no-gutters">
    <div class="col-12">
    <div class="padding_eight_all">	
                            <div class="heading_s1">
                                <h4>{{ $t('LanguageEn.verification') }}</h4>
                            </div>
                                <div class="form-group">
                                    <input type="text" required="" @keyup.enter="verifyOtp()" class="form-control" id="otp" v-model="OTP" name="OTP" :placeholder="$t('LanguageEn.enterCode')">
                                </div>
                                <div class="form-group">
                                    <button type="" class="btn btn-default btn-block" name="login" @click="verifyOtp()">{{ $t('LanguageEn.verify') }}</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </b-modal>
    <b-modal ref="my-modal2" hide-footer hide-header title="Using Component Methods">
        <h1>{{ $t('LanguageEn.regTerms') }}</h1>
        <p v-html="text.text">{{text.text}}</p>
        <b-row>
        <b-col>
            <button type="submit" class="btn mbtn btn-default btn-block"  style="z-index: 0; background: none; color: black; border-color: black;" @click="$refs['my-modal2'].hide()">{{ $t('LanguageEn.cancel') }}</button>
        </b-col>
        <b-col>
            <button type="submit" class="btn btn-default btn-block" style="z-index: 0;" @click="register()">{{ $t('LanguageEn.subscribe') }}</button>
        </b-col>
        </b-row>
    </b-modal>
    <b-modal ref="my-modal3" hide-footer hide-header title="Using Component Methods">
        <h1>{{ $t('LanguageEn.activate') }}</h1>
        <p v-html="text.text">{{text.text}}</p>
        <b-row>
        <b-col>
            <button type="submit" class="btn mbtn btn-default btn-block"  style="z-index: 0; background: none; color: black; border-color: black;" @click="$refs['my-modal3'].hide()">{{ $t('LanguageEn.cancel') }}</button>
        </b-col>
        <b-col>
            <button type="submit" class="btn btn-default btn-block" style="z-index: 0;" @click="activate()">{{ $t('LanguageEn.activateButton') }}</button>
        </b-col>
        </b-row>
    </b-modal>




  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import VuePhoneNumberInput from 'vue-phone-number-input';

export default {
  name: 'Landing',
  data(){
      return{
          loader: true,
          posts: [],
          number: '',
          OTP: '',
          test: '',
          results: {},
          cookiesObject: '',
          chosenBundle: '',
          bundles: [],
          activateToken: '',
          text:'',
          lang: '2',
      }
  },
 async beforeMount(){

    this.loader = true;
     
    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;

    this.bundless();

    this.loader = false;
  },
  props: {
  },
  components: {
  VuePhoneNumberInput,
},
computed: {
   ...mapGetters(['tocken', 'bundlee']),
   resultsTable () {
        return Object.keys(this.results)
      },
  },
  methods:{
    ...mapActions(["setToken", "setPermission", "setBundle"]),
     logout(){
         document.cookie = "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
         document.cookie = "refToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
         document.cookie = "number = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
         document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
         location.assign('/')
      },
    showModal() {
        this.$refs['my-modal2'].show()
      },
      showText(val1, val2){
          var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(window.API+"/pageInfo?languageId=" + this.lang + "&pageId=" + val1 + "&serviceId=" + val2, requestOptions)
        .then(response => response.json())
        .then(result => {
                this.text = result;
            })
        .catch(error => console.log('error', error));
    
      },

    onUpdate (payload) {
        this.results = payload
    },
    bundless(){
        var myHeaders = new Headers();
            myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch(window.API+"/bundleServices", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.bundles = result
                })
            .catch(error => console.log('error', error));
    },

    login(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

        var raw = JSON.stringify({"msisdn": this.results.formattedNumber.slice(1) ,"periodId": 1,"serviceId": this.bundlee});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(window.API+"/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.userStatus == 'NOT_FOUND' || result.userStatus == 'UNSUBSCRIBED') {
                this.showText(4, this.bundlee);
                this.$refs['my-modal2'].show();
            } else if (result.userStatus == 'ACTIVE' || result.userStatus == 'PAST_DUE') {
                this.showText(3);
                this.$refs['my-modal'].show();
            } else {
                alert(result.message)
            }
            document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            // document.cookie = 'refToken = ' + result.refreshToken + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            this.setToken(result.token);
            console.log(result)
            })
        .catch(error => console.log('error', error));
        document.cookie = 'number = ' + this.results.formattedNumber + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
    },

    verifyOtp(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.tocken);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

        var raw = JSON.stringify({"otp": this.OTP});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(window.API+"/verifyOtp", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status == 'ACTIVE') {
            console.log(result);
            document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            document.cookie = 'refToken = ' + result.refreshToken + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            document.cookie = 'permission = granted ;expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            this.setToken(result.token); 
            // this.$router.push({name: 'categoryPosts', params: { categoryId : 2 }})
            location.reload(); 
            } else if (result.status == 'PAST_DUE'){
            this.activateToken = result.token;
            this.$refs['my-modal'].hide();
            this.$refs['my-modal3'].show();
            } else if (result.code == 401) {
                if (result.customErrorCode == 1001) {
                    alert(result.message); 
                    document.cookie = "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "refToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                } else if (result.customErrorCode == 1002) {
                    alert(result.message); 
                    this.$refs['my-modal'].hide();
                    document.cookie = "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "refToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
                } else {
                    alert(result.message); 
                    document.cookie = "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "refToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
                }
            
            } else {
                alert(result.message); 
                document.cookie = "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                document.cookie = "refToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
            }
            })
        .catch(error => console.log('error', error));
    },
    
    activate(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.activateToken);
        myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(window.API+"/activate", requestOptions)
        .then(response => response.json())
        .then(result => {
           if (result.message == 'User activated successfully.' ) {
            document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            document.cookie = 'permission = granted ;expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            location.assign('/')
           } else {
               alert(result.message);
               console.log(result)
           }
        })
        .catch(error => console.log('error', error));
    },
    register(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.tocken);
        myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(window.API+"/register", requestOptions)
        .then(response => response.json())
        .then(result => {
            this.$refs['my-modal2'].hide();
            this.$refs['my-modal'].show();
            document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            this.setToken(result.token);
            console.log(result);
        })
        .catch(error => console.log('error', error));
    },
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/style.css';
@import '../assets/responsive.css';
@import '../assets/themify-icons.css';
@import '../assets/animate.css';
@import '../assets/ionicons.min.css';
@import '../assets/linearicons.css';
@import '../assets/all.min.css';
@import '../assets/owl.carousel.min.css';
@import '../assets/owl.theme.default.min.css';
@import '../assets/owl.theme.css';
@import '../assets/magnific-popup.css';


.header_wrap{
  margin-top: 60px;
}

.listItem{
    margin-top: 5px;
    color: black;
    font-weight: 500;
    font-size: 16px;
}

.listItem:hover{
    color: #ffa500;
}

.chosenLanguage{
  color:  #e99a06;
}
</style>
