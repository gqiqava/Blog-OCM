<template>
<div class="section">
<!-- <button type="" class="btn btn-default" name="login" @click="slidePrev()">prev</button> -->
<div v-if="cookiesObject.permission == 'granted'">
  <hooper  class="container" :settings="hooperSettings" :infiniteScroll="true" :autoPlay="true" :playSpeed="4000" style="margin-bottom: 10px; height: 100%;" >
    <slide v-for="(post, indx) in posts" :key="indx" :index="indx" class="">
        <div class="blog_post">
                <div class="blog_img">
                        <a >
                          <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id }}">  
                            <img :src="imageLink + post.id" :alt="post.id" style="width: 95%;">
                          </router-link>
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}">{{post.name}}</a>
                        </div>
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                            <!-- <ul class="blog_meta">
                                <li><a ><i class="ti-calendar"></i> <span> date </span></a></li>
                                <li><a ><i class="ti-comments"></i> <span>2 Comments</span></a></li>
                            </ul> -->
                            <p style="color: black;">{{post.description}}</p>
                        </div>
                    </div>
                </div>
    </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
  </div>
  <hooper  class="container"  :settings="hooperSettings" :autoPlay="true" :playSpeed="4000" :infiniteScroll="true" style="margin-bottom: 10px; height: 100%;" v-else>
    <slide v-for="(post, indx) in posts" :key="indx" :index="indx" class="">
        <div class="blog_post">
                <div class="blog_img">
                        <a >
                            <img :src="imageLink + post.id" :alt="post.id" v-b-modal.first-modall style="width: 95%;">
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}">{{post.name}}</a>
                        </div>
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                            <!-- <ul class="blog_meta">
                                <li><a ><i class="ti-calendar"></i> <span> date </span></a></li>
                                <li><a ><i class="ti-comments"></i> <span>2 Comments</span></a></li>
                            </ul> -->
                            <p style="color: black;">{{post.description}}</p>
                        </div>
                    </div>
                </div>
    </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>

	<div class="container" v-if="cookiesObject.permission == 'granted'">
  <div class="row">
    <!-- Col xl size for biggest web -->
      <div v-for="article in randomArticles" :key="article.id" class="col-xl-3 col-lg-3 col-md-6">
        <div class="blog_post">
                <div class="blog_img">
                        <a >
                            <!-- <router-link :to="{ name: 'singlePost', params: { categoryId : article.category.id, contentId: article.id }}"> -->
                            <img :src="'http://contentapi.zuniac.com/contentImages/' + article.id" alt="blog_img" style="width: 100%;">
                          <!-- </router-link> -->
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: article.category.id == 1, orangePill: article.category.id == 2, bluePill: article.category.id == 3, yellowPill: article.category.id == 4, pinkPill: article.category.id == 5, maroonPill: article.category.id == 6}">{{article.category.name}}</a>
                        </div>
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                           <h6 class="blog_heading">
                              <!-- <router-link :to="{ name: 'singlePost', params: { categoryId : categoryId, contentId: post.content.id }}"> -->
                              {{article.contentDataSet[0].title}}
                              <!-- </router-link> -->
                            </h6>
                            <p style="">{{article.contentDataSet[0].body}}</p>
                        </div>
                    </div>
                </div>
        </div>
  </div>
</div>
<div class="container" v-else>
  <div class="row">
    <!-- Col xl size for biggest web -->
      <div v-for="article in randomArticles" :key="article.id" class="col-xl-3 col-lg-3 col-md-6">
        <div class="blog_post">
                <div class="blog_img">
                        <a >
                          <!-- <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id }}">   -->
                            <img :src="'http://contentapi.zuniac.com/contentImages/' + article.id" v-b-modal.first-modall alt="blog_img" style="width: 100%;">
                          <!-- </router-link> -->
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: article.category.id == 1, orangePill: article.category.id == 2, bluePill: article.category.id == 3, yellowPill: article.category.id == 4, pinkPill: article.category.id == 5, maroonPill: article.category.id == 6}">{{article.category.name}}</a>
                        </div>
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                           <h6 class="blog_heading">
                              <!-- <router-link :to="{ name: 'singlePost', params: { categoryId : categoryId, contentId: post.content.id }}"> -->
                              {{article.contentDataSet[0].title}}
                              <!-- </router-link> -->
                            </h6>
                            <p style="">{{article.contentDataSet[0].body}}</p>
                        </div>
                    </div>
                </div>
        </div>
  </div>
</div>

<!-- END BLOG -->   

</div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'singleCategory',
  data(){
  return {
        posts: [],
        cookiesObject: '',
        hooperSettings: {
        itemsToShow: 4,
        breakpoints: {
          200: {
            itemsToShow: 1
          },
          400: {
            itemsToShow: 2
          },
          765: {
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 4,
          }
        }
      },
      imageLink: 'http://contentapi.zuniac.com/images/',
      randomArticles: [],
    }
  },
  async created(){

    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;

    this.randomArticle();
    // this.bundless();

    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + this.cookiesObject.token);
    myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://contentapi.zuniac.com/user/getCategories", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.posts = result.content;
        })
      .catch(error => console.log('error', error));
  },
components: {
  Hooper,
  Slide,
  HooperNavigation,
},
methods:{
    ...mapActions(["setToken", "setPermission"]),
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    randomArticle(){
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://contentapi.zuniac.com/initialContent", requestOptions)
        .then(response => response.json())
        .then(result => {
          this.randomArticles = result;
          })
        .catch(error => console.log('error', error));
          },
     showModal() {
        this.$refs['my-modal2'].show()
      },

    // onUpdate (payload) {
    //     this.results = payload
    // },
    // bundless(){
    //     var myHeaders = new Headers();
    //         myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

    //         var requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //         };

    //         fetch("http://contentapi.zuniac.com/bundleServices", requestOptions)
    //         .then(response => response.json())
    //         .then(result => {
    //             this.bundles = result
    //             })
    //         .catch(error => console.log('error', error));
    // },

    // login(){
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");
    //     myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

    //     var raw = JSON.stringify({"msisdn": this.results.formattedNumber.slice(1) ,"periodId": 1,"serviceId": this.chosenBundle});

    //     var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    //     };

    //     fetch("http://contentapi.zuniac.com/login", requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //         if (result.userStatus == 'NOT_FOUND' || result.userStatus == 'UNSUBSCRIBED') {
    //             this.$refs['my-modal2'].show();
    //         } else if (result.userStatus == 'ACTIVE' || result.userStatus == 'PAST_DUE') {
    //             this.$refs['my-modal'].show();
    //         } else {
    //             console.log(result)
    //         }
    //         document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
    //         this.setToken(result.token);
    //         })
    //     .catch(error => console.log('error', error));
    //     document.cookie = 'number = ' + this.results.formattedNumber + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
    // },

    // verifyOtp(){
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Bearer " + this.tocken);
    //     myHeaders.append("Content-Type", "application/json");
    //     myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

    //     var raw = JSON.stringify({"otp": this.OTP});

    //     var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    //     };

    //     fetch("http://contentapi.zuniac.com/verifyOtp", requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //         if (result.status == 'ACTIVE') {
    //         document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
    //         document.cookie = 'permission = granted ;expires = Thu, 01 Jan 2040 00:00:00 GMT;';
    //         this.setToken(result.token); 
    //         location.assign('/')
    //         } else if (result.status == 'PAST_DUE'){
    //         this.activateToken = result.token;
    //         this.$refs['my-modal'].hide();
    //         this.$refs['my-modal3'].show();
    //         } else {
    //            alert(result.message) 
    //         }
    //         })
    //     .catch(error => console.log('error', error));
    // },
    
    // activate(){
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Bearer " + this.activateToken);
    //     myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

    //     var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     redirect: 'follow'
    //     };

    //     fetch("http://contentapi.zuniac.com/activate", requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //        if (result.message == 'User activated successfully.' ) {
    //         document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
    //         document.cookie = 'permission = granted ;expires = Thu, 01 Jan 2040 00:00:00 GMT;';
    //         location.assign('/')
    //        } else {
    //            alert(result.message);
    //            console.log(result)
    //        }
    //     })
    //     .catch(error => console.log('error', error));
    // },
    // register(){
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Bearer " + this.tocken);
    //     myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

    //     var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     redirect: 'follow'
    //     };

    //     fetch("http://contentapi.zuniac.com/register", requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //         this.$refs['my-modal2'].hide();
    //         this.$refs['my-modal'].show();
    //         document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
    //         this.setToken(result.token);
    //         console.log(result);
    //     })
    //     .catch(error => console.log('error', error));
    // },
  },
props: {
  },
  computed: {
   ...mapGetters(['tocken']),
   resultsTable () {
        return Object.keys(this.results)
      },
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

.redPill{
background: rgb(197, 11, 11);
}
.orangePill{
background: rgb(226, 125, 9);
}
.bluePill{
background: rgb(9, 49, 226);
}
.pinkPill{
background: rgb(226, 9, 197);
}
.yellowPill{
background: rgb(212, 209, 0);
}
.maroonPill{
background: rgb(172, 51, 51);
}

</style>
