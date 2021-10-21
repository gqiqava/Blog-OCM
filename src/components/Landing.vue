<template>
  <div  v-bind:class="{ bgWhite: dark == false,  bgDark: dark == true }" >
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

  <div class="topNav sticky-top" style="">
      <div class="row">
    <div style="padding-left: 50px;">
        <router-link :to="{ name: 'singleCategory'}">
        <img src="@/assets/zlifeWhite.png" alt="ZuniLife" style="width: 110px;">
        </router-link>
    </div>
    <div style="margin-left: auto; padding-right: 50px;">
    <div style="text-align: left; border-radius: 5px;" v-if="cookiesObject.permission == 'granted'">
      <b-dropdown id="dropdown-1" class="m-md-2 b2" no-caret variant="none" style="background: #1A1D22; border-radius: 5px; color: white; height: 39px;">
    <template #button-content >
    <div style="">
    <img src="@/assets/mob.svg" alt="lgOut" style="width: 20px; cursor: pointer; padding-bottom: 5px;"><span class="tone" style="font-size: 14px; padding-bottom: 5px;">{{cookiesObject.number}} </span> 
    </div>
    </template>
    <b-dropdown-item  @click="logout()" style="font-size: 14px;"><img src="@/assets/lgt.svg" alt="lgOut" style="width: 20px; cursor: pointer; padding-bottom: 5px; margin-left: 10px;"> Log out</b-dropdown-item>
  </b-dropdown>
    </div>
    <div style="text-align: left;" v-else>
        <b-button type="" class="bbtn" name="login" @click="$refs['first-modal'].show()" style="font-size: 11px;  font-weight: bold; border: solid 2px #ff7900; border-radius: 5px; padding: 9px;">{{ $t('LanguageEn.login') }}</b-button>
    </div>
    </div>
    </div>
  </div>

<!-- start Sidebar -->

<div>
    <b-sidebar id="sidebar-1" title="" shadow>
      <div class="px-3 py-2">
        <div style="text-align: left;">
            <img src="@/assets/zlifeBlack.png"  alt="Zunilife" style="width: 100px; margin-bottom: 30px;">
        </div>
        
        <p style="font-size: 19px; text-align: left; color: black;"> 
            <span style="color: #ff7900"> Settings </span>
        </p>
        <ul style="list-style-type: none; text-align: left; margin-left: 10px;"> 
         
            <!-- <li class="listItem" @click="showText(1,2),$refs['text-modal'].show()">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">{{ $t('LanguageEn.about') }} </a>
            </li> -->
            <li v-if="showLang == 1" class="listItem" @click="$refs['language-modal'].show()">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;" >{{ $t('LanguageEn.language') }}</a>
            </li>
            <!-- <li class="listItem"  @click="showText(2,2),$refs['text-modal'].show()">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">{{ $t('LanguageEn.termsC') }}</a>
            </li> -->
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
    <b-modal ref="text-modal" body-class="defModal" header-class="defModal1" hide-footer :title="text.title">
        <p v-html="text.text">{{text.text}}</p>
    </b-modal>


<!-- START BLOG  -->

<router-view :key="$route.path"></router-view>

<!-- END BLOG -->
 
    
<!-- START FOOTER SECTION --> 
<footer class="footer_dark bg_black" style="background: black;">
    <div class="bottom_footer border-top-tran">
        <div class="container">
            <div class="row" style="text-align: left;">
                <div class="col-12" style="color: lightgrey;">
                    <span class="listItem">
                        <router-link :to="{ name: 'about', params: { }}">
                            <img src="@/assets/arr.svg" alt="ZuniLife" style="width: 15px; margin-left: 5px;"><a style="cursor: pointer; margin-left: 5px;">{{ $t('LanguageEn.about') }} </a>
                        </router-link>
                    </span>
                      <span class="listItem">
                        <router-link :to="{ name: 'terms', params: { }}">
                         <img src="@/assets/arr.svg" alt="ZuniLife" style="width: 15px; margin-left: 5px;"><a style="cursor: pointer; margin-left: 5px;">{{ $t('LanguageEn.termsC') }} </a>
                        </router-link>
                    </span>
                    <span class="copyright m-0 text-center" style="float: right;"> © {{new Date().getFullYear()}} {{ $t('LanguageEn.reserved') }}</span>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- END FOOTER SECTION --> 

<!--  MODALS -->   

<b-modal ref="first-modal" id="first-modall" body-class="defModal" hide-footer hide-header>
        <div class="heading_s1">
            <img src="@/assets/zlifeWhite.png" alt="ZuniLife" style="width: 100px;">
        </div>
        <span style="float: left;">Entrez votre numéro de mobile</span>
        <div style="margin-bottom: 20px; margin-top: 50px;">
            <VuePhoneNumberInput dark autofocus v-model="number" @update="onUpdate" style="" default-country-code="CM"/>
        </div> 
        <span style="float: left; margin-bottom: 10px;">{{ $t('LanguageEn.selectBundle') }}</span><br>
        <b-form-select v-model="bundlee" class="mb-3" @change="setBundle" style="background: #424242; color: lightgrey;">
            <b-form-select-option v-for="bundle in bundles" :key="bundle.id" @change="setBundle(bundle.bundleId)" :value="bundle.bundleId" style="color: lightgrey;"> <span> {{bundle.bundleName}} </span> </b-form-select-option>
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
                <button type="submit" class="btn btn-default btn-block bbtn" style="z-index: 0; border-radius: 12px;"  @click="login(), $refs['first-modal'].hide()" v-if="bundlee != '' && results.isValid == true">{{ $t('LanguageEn.next') }}</button>
                <button type="submit" class="btn btn-default btn-block bbtn" style="z-index: 0; border-radius: 12px;" disabled v-else>{{ $t('LanguageEn.next') }}</button>
            </div>
    </b-modal>
    <b-modal ref="my-modal" body-class="defModal" hide-footer hide-header>
    <div class="border-0">
    <div class="modal-body">
    <div class="row no-gutters">
    <div class="col-12">
    <div class="padding_six_all">	
                            <div class="heading_s1">
                                <h4 style="color: white;">{{ $t('LanguageEn.verification') }}</h4>
                            </div>
                                <div class="form-group">
                                    <span style="float: left; margin-bottom: 5px;">{{ $t('LanguageEn.enterCode') }}</span>
                                    <input style="background: #424242; color: lightgrey;" type="text"  required="" @keyup.enter="verifyOtp()" class="form-control" id="otp" v-model="OTP" name="OTP" placeholder="OTP Code">
                                </div>
                                <div class="form-group">
                                    <button type="" style="border-radius: 12px;" class="btn bbtn btn-default btn-block" name="login" @click="verifyOtp()">{{ $t('LanguageEn.verify') }}</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
   <b-modal ref="my-modal2" hide-header hide-footer body-class="defModal" header-class="defModal1">
        <h5 style="color: white; margin-bottom: 20px;">{{ $t('LanguageEn.regTerms') }}</h5>
        <p v-html="text.text" style="color: lightgrey;">{{text.text}}</p>
        <b-row>
        <b-col>
            <button type="submit" class="btn mbtn btn-default btn-block"  style="z-index: 0; background: none; color: white; border-color: white; border-radius: 12px;" @click="$refs['my-modal2'].hide()">{{ $t('LanguageEn.cancel') }}</button>
        </b-col>
        <b-col>
            <button type="submit" class="btn bbtn btn-default btn-block" style="z-index: 0; border-radius: 12px;" @click="register()">{{ $t('LanguageEn.subscribe') }}</button>
        </b-col>
        </b-row>
    </b-modal>
    <b-modal ref="my-modal3" hide-footer  :title="$t('LanguageEn.activate')">
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
     <b-modal ref="my-modal7" hide-footer  :title="$t('LanguageEn.regTerms')">
        <p v-html="text.text">{{text.text}}</p>
        <button type="submit" class="btn mbtn btn-default btn-block"  style="z-index: 0; background: none; color: black; border-color: black;" @click="$refs['my-modal7'].hide(), login()">Daxil Ol</button>
    </b-modal>
    <div style="position: fixed; bottom: 80px; right: 30px;  z-index: 1; cursor: pointer;">
        <img v-if="dark == false" @click="setTheme(!dark)" style="width: 45px;" src="@/assets/dark.svg" alt="">
        <img v-else @click="setTheme(!dark)" style="width: 70px; margin-bottom: -10px; margin-right: -10px;" src="@/assets/light.svg" alt="">
    </div>



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
          showLang: '',
          webSubs: '',
          activPage: '', 
      }
  },
 async beforeMount(){

    this.loader = true;
     
    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;

    this.bundless();
    this.appData();

    this.loader = false;
  },
  props: {
  },
  components: {
  VuePhoneNumberInput,
},
computed: {
   ...mapGetters(['tocken', 'bundlee', "dark"]),
   resultsTable () {
        return Object.keys(this.results)
      },
  },
  methods:{
    ...mapActions(["setToken", "setPermission", "setBundle", "setTheme"]),
    appData(){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cfduid=daa11664c49161bf93cd02dbd6c4fb8131611146765");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(window.API+"/appData", requestOptions)
        .then(response => response.json())
        .then(result => {
                this.showLang = result.Languages.value;
                this.webSubs = result.webSubs.value;
                this.activPage = result.activPage.value;
            })
        .catch(error => console.log('error', error));
    },
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
                if (this.webSubs == 1) {
                    if (this.activPage == 1) {
                        this.showText(4, this.bundlee);
                        this.$refs['my-modal2'].show();
                    } else {
                        this.register(); 
                    }
                } else {
                    this.showText(5, this.bundlee);
                    this.$refs['my-modal7'].show();
                }
            } else if (result.userStatus == 'ACTIVE' || result.userStatus == 'PAST_DUE') {
                this.showText(3, this.bundlee);
                this.$refs['my-modal'].show();
            } else {
                alert(result.message)
            }
            document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            // document.cookie = 'refToken = ' + result.refreshToken + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            this.setToken(result.token);
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
        })
        .catch(error => console.log('error', error));
    },
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
.bgWhite{
    background: #EEEFF2;
    color: #0F1215;
    -webkit-transition: all 0.5s ease;
	transition: all .5s ease;
}
.bgDark{
    background: #0F1215;
    color: #EEEFF2;
    -webkit-transition: all 0.5s ease;
	transition: all .5s ease;
}
.clWhite{
    color: #0F1215 !important;
    -webkit-transition: all 0.5s ease;
	transition: all .5s ease;
}
.clDark{
    color: #EEEFF2 !important;
    -webkit-transition: all 0.5s ease;
	transition: all .5s ease;
}
.topNav{
background: #13161A !important; 
height: 80px;
line-height: 80px;
}

.header_wrap{
  margin-top: 60px;
}

.b2 .dropdown-menu{
    background: #1A1D22 !important;
    color: white !important;
    width: 190px;
}
.b2 .dropdown-item{
    color: white;
    height: 25px;
    line-height: 25px;
}
.tone{
  color: lightgrey !important;
}
.tone:hover{
  color: #ff7900 !important;
}

.b2:hover{
  color: #ff7900 !important;
}

.listItem:hover{
    color: #ffa500;
    -webkit-transition: all 0.5s ease;
	transition: all .5s ease;
}

.chosenLanguage{
  color:  #e99a06;
}
.bbtn{
    background: transparent;
}
.bbtn:hover{
    background: #ff7900;
    -webkit-transition: all 0.5s ease;
	transition: all .5s ease;
}
.defModal{
    background: #0F1215;
}
.defModal1{
    background: #0F1215;
    color: white;
    border: none;
    border-radius: 0px;
}

</style>
