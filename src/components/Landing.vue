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

<div>
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
          <div style="text-align: left; margin-bottom: 20px;">
            <span style="font-size: 17px;"> {{cookiesObject.number}} </span>
            <img src="@/assets/logout-256.png" @click="logout()" alt="Menu" style="width: 30px; cursor: pointer;">
          </div>
        <p style="font-size: 19px; text-align: left; color: black;"> 
            <img src="@/assets/settings.png" alt="." style="width: 30px; cursor: pointer; margin-top: -5px;">
            <span> Settings </span>
        </p>
        <ul style="list-style-type: none; text-align: left; margin-left: 30px;"> 
            <!-- <li class="listItem">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">example </a>
            </li>
            <li class="listItem">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">example </a>
            </li> -->
            <li class="listItem">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">{{ $t('LanguageEn.about') }} </a>
            </li>
            <li class="listItem" @click="$refs['language-modal'].show()">
            <img src="@/assets/globe.png" alt="Menu" style="width: 18px; cursor: pointer;">
            <a style="cursor: pointer; margin-left: 5px;">{{ $t('LanguageEn.language') }}</a>
            </li>
            <li class="listItem">
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

<a href="#" class="scrollup" style="display: none;"><i class="ion-ios-arrow-up"></i></a> 



  </div>
</template>

<script>


export default {
  name: 'Landing',
  data(){
      return{
          loader: true,
          posts: [],
          cookiesObject: '',
      }
  },
 async beforeMount(){

    this.loader = true;
     
    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;
    
    this.loader = false;
  },
  methods:{
      logout(){
         document.cookie = "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
         document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
         location.assign('/')
      },
  },
  props: {
  },
  components: {
}
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
