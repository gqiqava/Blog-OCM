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
<header class="header_wrap dark_skin">
	<div class="container">
  <nav class="navbar navbar-expand-lg bg-light fixed-top container" style="height: 60px; background: white !important;"> 
            <a class="navbar-brand">
                <router-link :to="{ name: 'singleCategory', params: {}}">
                <img class="logo_dark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bass_logo.svg/800px-Bass_logo.svg.png" alt="logo" style="width: 30px; margin-left: 20px;"/>
                </router-link>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="ion-android-menu"></span> </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown">Menu</a>
                        <div class="dropdown-menu dropdown-reverse">
                            <ul> 
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">example1</a></li>
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">example2</a></li>
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">example3</a></li>
                                <div class="divider"></div>
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">Language</a></li>
                                <li><a class="dropdown-item nav-link nav_item" style="cursor: pointer;">Terms & Conditions</a></li>
                                <div class="divider"></div>
                                <li><a class="dropdown-item nav-link nav_item" @click="logout()" style="cursor: pointer;">Logout </a></li>
                            </ul>
                        </div>
                    </li>  
                </ul>
            </div>
		</nav>
	</div>
</header>

<!-------------------------- START BLOG  ----------------------->
<router-view :key="$route.path"></router-view>
<!-- END BLOG -->
 
    
<!-- START FOOTER SECTION --> 
<footer class="footer_dark bg_black">
    <div class="bottom_footer border-top-tran">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="copyright m-0 text-center">© 2020 All Rights Reserved By Morus.</p>
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
      }
  },
 async beforeMount(){

    this.loader = true;
     
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    this.posts = data;
    
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
</style>
