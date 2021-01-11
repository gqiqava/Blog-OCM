<template>
<div>

<!-- START BLOG -->
<div class="section">
	<div class="container">
    <div class="row">
    <div class="col-lg-9">
            <div class="single_post">
                    <div class="blog_img" style="margin-top: 25px;">
                        <img :src="media + post.banner" alt="blog_img1">
                        <!-- <div class="blog_tags">
                            <a class="blog_tags_cat bg_blue" href="#">{{post.name}}</a>
                        </div> -->
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                            <h2 class="blog_title">{{postContent.title}}</h2>
                            <ul class="blog_meta">
                            <div style="position: fixed; bottom: 20px; left: auto;  z-index: 1;">
                            <audio controls style="">
                            <source v-html="audio" :src="audio">
                            </audio>
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

        <div class="sidebar col-lg-3">
            <div class="widget" style="margin-top: 25px;">
                <h5 class="widget_title" style="text-align: left;">Categories</h5>
                <ul class="widget_categories" v-if="cookiesObject.permission == 'granted'">
                    <li v-for="category in categors" :key="category.id" @click="goTo(category.id)" style="cursor: pointer;"><div class="cat_bg background_bg overlay_bg_50" :style="{ backgroundImage: 'url(' + media + category.icon + ')' }" ><div class="post_category"><span class="cat_title">{{category.name}}</span></div></div></li>
                </ul>
                <ul class="widget_categories" v-b-modal.first-modall v-else>
                    <li v-for="category in categors" :key="category.id" style="cursor: pointer;"><div class="cat_bg background_bg overlay_bg_50" :style="{ backgroundImage: 'url(' + media + category.icon + ')' }" ><div class="post_category"><span class="cat_title">{{category.name}}</span></div></div></li>
                </ul>
            </div>
            <div class="widget" style="margin-top: 25px;">
                <h5 class="widget_title" style="text-align: left;">{{ $t('LanguageEn.alsoSee') }}:</h5>
                    <ul class="recent_post">
                        <li v-for="(link, indx) in links" :key="link.id" @click="newCon(link.day)" style="cursor: pointer;">
                            <div class="post_footer" v-if="indx < val">
                                <div class="post_img">
                                    <img class="rounded-circle" :src="media + link.image" alt="letest_post1">
                                </div>
                                <div class="post_content">
                                    <h6 class="hov" style="font-size: 12px; line-height: 18px; text-align: left;" v-html="link.title">{{link.title}}</h6>
                                </div>
                                </div>
                        </li>
                        <button @click="val = val + 5" style="background: none; border: none; "><img src="@/assets/loadMore.png" alt="" style="width: 20px;"></button>
                </ul>
            </div>
            <!-- <div class="sidebar mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div class="widget">
                    <h5 class="widget_title" style="margin-top: 25px; text-align: left;">{{ $t('LanguageEn.alsoSee') }}:</h5>
                        <div class="" v-for="(link, indx) in links" :key="link.id" style="cursor: pointer; text-align: left;  z-index: -1;" @click="newCon(link.contentId)">
                            <img src="https://diagnostax.co.uk/wp-content/uploads/Cool-Cats-2.0-1024x585.png" v-if="indx < val" alt="" style="width: 300px;">
                            <p class="links" v-html="link.title" v-if="indx < val"> {{link.title}} </p>
                        </div>
                        <button @click="val = val+5" style="background: none; border: none;"><img src="@/assets/loadMore.png" alt="" style="width: 30px; margin-top: 10px;"></button>
                    </div>
                </div> -->
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
import {mapGetters, mapActions} from 'vuex';


export default {
  name: 'linkPager',
  data(){
  return {
      id: '',
      post: {},
      postContent: [],
      links: [],
      audio: '',
      media: 'http://contentapi.zuniac.com/media/',
      d: '',
      categors:'',
      val: 5,
      cookiesObject:'',
    }
  },
  async created(){
    this.id = this.$route.params.id;
    this.d = this.$route.params.d;

    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;


    var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://contentapi.zuniac.com/content?d="+ this.d +"&id=" + this.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.post = result.contentDTO.category;
            this.postContent = result.contentDTO.contentDataSet[0];
            this.audio = 'http://contentapi.zuniac.com/media/' + result.contentDTO.contentDataSet[0].audio;
            this.links = result.contentLinks;
            })
        .catch(error => console.log('error', error));

        this.getCategories();
  },
  methods:{
    ...mapActions(["setToken", "setPermission", "setBundle"]),
      goTo(val){
        this.$router.push({ name: 'categoryPosts', params: { categoryId: val } })
    },
      getCategories(){
        var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + this.cookiesObject.token);
    myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://contentapi.zuniac.com/user/categories", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.categors = result.content;
        })
      .catch(error => console.log('error', error));
    },
       openPlayer(){
        window.open(this.audio, 'newwin', 'height=80px, width=280px');
    },
        newCon(day){
            this.$router.push({ name: 'linkPager', params: { d: day, id: this.id } })
        },
  },
  components: {
    },
    props: {
  },
  computed:{
   ...mapGetters(['tocken', 'bundlee']),
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
