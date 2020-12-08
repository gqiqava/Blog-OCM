<template>
<div>
<!-- <header class="header_wrap dark_skin">
	<div class="container">
  <nav class="navbar navbar-expand-lg bg-light fixed-top container" style="height: 60px; background: white !important;"> 
            <a class="navbar-brand">
                <router-link :to="{ name: 'singleCategory', params: {}}">
                <img class="logo_dark" src="@/assets/logo.svg" alt="logo" style="width: 30px; margin-left: 20px;"/>
                </router-link>
            </a> -->
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="ion-android-menu"></span> </button> -->
            <!-- <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
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
            </div> -->
		<!-- </nav>
	</div>
</header> -->

<!-- START BLOG -->
<div class="section">
	<div class="container">
    <div class="row">
    <div class="col-lg-9">
            <div class="single_post">
                    <div class="blog_img">
                        <img src="https://previews.123rf.com/images/ohsuriya/ohsuriya1505/ohsuriya150500066/40055715-an-iamge-of-sugar-palm-trees-that-shining-with-the-light-of-led-lamps-in-the-night-.jpg" alt="blog_img1">
                        <!-- <div class="blog_tags">
                            <a class="blog_tags_cat bg_blue" href="#">{{post.name}}</a>
                        </div> -->
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                            <h2 class="blog_title">{{postContent.title}}</h2>
                            <ul class="blog_meta">
                            <div style="" @click="openPlayer()">
                            <a><img src="@/assets/player1.png" :alt="audio" style="width: 50px; cursor: pointer;"></a>
                            </div>
                            </ul>
                            <p v-html="postContent.body">{{postContent.body}}</p>
                            <!-- <div style="text-align: center;">
                            <audio controls style="">
                            <source :src="postContent.audio">
                            </audio>
                            </div> -->
                            <!-- <div style="text-align: center;">
                            <a :href="postContent.audio" target="_blank"><img src="@/assets/player2.png" :alt="audio" style="width: 130px;"></a>
                            </div> -->
                            <!-- <blockquote class="blockquote_style1">
                            <p>Integer is metus site turpis facilisis customers. elementum an mauris in venenatis consectetur east. Praesent condimentum bibendum Morbi sit amet commodo pellentesque at fringilla tincidunt risus.</p>
                            </blockquote> -->

                            <!-- Images -->


                            <!-- <div class="row">
                            <div class="col-sm-6">
                                <div class="single_img">
                                <img class="w-100 mb-4" src="https://i.pinimg.com/originals/a9/87/99/a987995fb73938287f939163b3c0d54a.jpg" alt="blog_single_img1">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                            <div class="single_img">
                            <img class="w-100 mb-4" src="https://i.pinimg.com/originals/03/1c/80/031c8052245d537b2be3f230eedf94b5.jpg" alt="blog_single_img2">
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>

        <div class="col-lg-3">
            <div class="sidebar mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div class="widget">
                    <h5 class="widget_title">Also see:</h5>
                        <p class="links" v-for="link in links" :key="link.id" style="cursor: pointer; text-align: left;">{{link.title}}</p>
                    </div>
                </div>
            </div>
    </div>
  </div>
</div>



 
<!-- END BLOG -->

<!-- <footer class="footer_dark bg_black">
    <div class="bottom_footer border-top-tran">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="copyright m-0 text-center"> © {{new Date().getFullYear()}} {{ $t('LanguageEn.reserved') }}</p>
                </div>
            </div>
        </div>
    </div>
</footer> -->
	
</div>
</template>

<script>


export default {
  name: 'linkPager',
  data(){
  return {
      id: '',
      post: {},
      postContent: [],
      links: [],
      audio: '',
    }
  },
  async created(){
    this.id = this.$route.params.id;

    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;


    var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://contentapi.zuniac.com/content?id=" + this.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.post = result.contentDTO.category;
            this.postContent = result.contentDTO.contentDataSet[0];
            this.audio = 'http://contentapi.zuniac.com/media/' + result.contentDTO.contentDataSet[0].audio;
            this.links = result.contentLinks;
            })
        .catch(error => console.log('error', error));

        this.$forceUpdate();
  },
  methods:{
       openPlayer(){
        window.open(this.audio, 'newwin', 'height=80px, width=280px');
    },
  },
  components: {
},
props: {
  },

}
</script>

<style>
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

.links:hover{
    color: orange;
}

</style>
