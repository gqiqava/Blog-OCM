<template>
<div class="section">
<!-- <button type="" class="btn btn-default" name="login" @click="slidePrev()">prev</button> -->
<div v-if="cookiesObject.permission == 'granted'" style="">
  <hooper  class=""  :settings="hooperSettings" :autoPlay="true" :playSpeed="4000" :infiniteScroll="true" :centerMode="true" style="margin-bottom: 10px; height: 100%;">
    <slide v-for="(post, indx) in posts" :key="indx" :index="indx" class="">
          <div class="blog_post">
                <div class="blog_img">
                        <a>
                          <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id, servicId : post.serviceId }}">  
                            <img :src="imageLink + post.icon" :alt="post.id" style="width: 99.9%; height: 300px; object-fit: cover;">
                          </router-link>
                        </a>
                         <div class="blog_tags" style="background: rgba(24, 24, 24, 0.65); text-align: center;">
                            <h2 class="blog_tags_cat" style="">{{post.serviceName}}</h2>
                            <a class="blog_tags_cat bg_warning" style="margin-left: 4px; margin-bottom: 4px;" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}">{{post.name}}</a>
                        </div>
                    </div>
                </div>
    </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
  </div>
  <hooper  class=""  :settings="hooperSettings" :autoPlay="true" :playSpeed="4000" :infiniteScroll="true" :centerMode="true" style="margin-bottom: 10px; height: 100%;" v-else>
    <slide v-for="(post, indx) in posts" :key="indx" :index="indx" class="">
          <div class="blog_post">
                <div class="blog_img">
                        <a>
                            <img :src="imageLink + post.icon" :alt="post.id" v-b-modal.first-modall @click="setBundle(post.serviceId)" style="width: 99.9%; height: 300px; object-fit: cover;">
                        </a>
                         <div class="blog_tags" style="background: rgba(24, 24, 24, 0.65); text-align: center;">
                            <h2 class="blog_tags_cat" style="">{{post.serviceName}}</h2>
                            <a class="blog_tags_cat bg_warning" style="margin-left: 4px; margin-bottom: 4px;" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}">{{post.name}}</a>
                        </div>
                    </div>
                </div>
    </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
  
	<div class="container" v-if="cookiesObject.permission == 'granted'">
   <div v-for="bundle in loggedArticles" :key="bundle.id">
   <div class="widget">
      <h5 class="border-bottom" style="text-align: left; font-weight: 600; font-size: 23px; line-height: 50px;"><img src="@/assets/check.png" alt="" style="width: 22px; margin-bottom: 10px;" v-if="bundle.isActive == true"> {{bundle.serviceName}} </h5>
    </div>
  <div class="row">
      <div v-for="article in bundle.initialContent" :key="article.id" class="col-xl-3 col-lg-3 col-md-6">
        <div class="blog_post">
                <div class="blog_img">
                        <a >
                      <router-link :to="{ name: 'singlePost', params: { categoryId : article.category.id, servicId: article.category.serviceId, contentId: article.id }}">
                            <img :src="imageLink + article.thumbnail" alt="blog_img" style="width: 100%;">
                          </router-link>
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: article.category.id == 1, orangePill: article.category.id == 2, bluePill: article.category.id == 3, yellowPill: article.category.id == 4, pinkPill: article.category.id == 5, maroonPill: article.category.id == 6}">{{article.category.name}}</a>
                        </div>
                    </div>
                    <div class="blog_content">
                      <router-link :to="{ name: 'singlePost', params: { categoryId : article.category.id, servicId: article.category.serviceId, contentId: article.id }}">
                        <div class="blog_text">
                          <h6 class="blog_heading">
                           <span v-html="article.contentDataSet[0].title">{{article.contentDataSet[0].title}}</span>
                          </h6>
                          <p style="line-height: 1.25;" v-html="article.contentDataSet[0].body">{{article.contentDataSet[0].body}}</p>
                        </div>
                      </router-link>
                    </div>
                </div>
        </div>
  </div>
</div>
</div>

<div class="container" v-else>
  <div v-for="bundle in randomArticles" :key="bundle.id">
    <div class="widget">
      <h5 class="border-bottom" style="text-align: left; font-weight: 600; font-size: 23px; line-height: 50px;">{{bundle.serviceName}}</h5>
    </div>
  <div class="row">
      <div v-for="article in bundle.initialContent" :key="article.id" class="col-xl-3 col-lg-3 col-md-6" v-b-modal.first-modall @click="setBundle(bundle.serviceId)">
        <div class="blog_post">
                <div class="blog_img">
                        <a >
                            <img :src="imageLink + article.thumbnail" alt="blog_img" style="width: 100%;">
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: article.category.id == 1, orangePill: article.category.id == 2, bluePill: article.category.id == 3, yellowPill: article.category.id == 4, pinkPill: article.category.id == 5, maroonPill: article.category.id == 6}">{{article.category.name}}</a>
                        </div>
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                           <h6 class="blog_heading">
                            <span v-html="article.contentDataSet[0].title">{{article.contentDataSet[0].title}}</span>
                            </h6>
                            <p style="line-height: 1.25;" v-html="article.contentDataSet[0].body">{{article.contentDataSet[0].body}}</p>
                        </div>
                    </div>
                </div>
        </div>
  </div>
</div>

<!-- END BLOG -->   
</div>
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
          450: {
            itemsToShow: 1
          },
          765: {
            itemsToShow: 1.8
          },
          1000: {
            itemsToShow: 1.8
          }
        }
      },
      imageLink: window.API + '/media/',
      randomArticles: [],
      loggedArticles: [],
      filtered: [],
      refToken: '',
    }
  },
  async created(){

    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;

    if (cookiesObject.token) {
    this.loggedRandom();
    }else {
    this.randomArticle();
    }
    // this.bundless();

    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + this.cookiesObject.token);
    myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch( window.API + "/user/categories", requestOptions)
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
    ...mapActions(["setToken", "setPermission", "setBundle"]),
    // slidePrev() {
    //   this.$refs.carousel.slidePrev();
    // },
    refreshTok(){
      var myHeaders = new Headers();
      myHeaders.append("authorization", "Refresh " + this.cookiesObject.refToken);
      myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch( window.API + "/refresh", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.token && result.token != 'undefined') {
              document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
              document.cookie = 'refToken = ' + result.refreshToken + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
              location.reload();
            } else {
              document.cookie = "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
              document.cookie = "refToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
              document.cookie = "number = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
              document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
              location.assign('/');
            }
          })
        .catch(error => console.log('error', error));
    },
    loggedRandom(){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + this.cookiesObject.token);
      myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(window.API+"/userInitialContent", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.code == 401) {
            if (result.customErrorCode == 1004) {
                    alert(result.message); 
                    document.cookie = "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "refToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "number = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    location.assign('/');
                } else if (result.customErrorCode == 1003) {
                    alert(result.message); 
                    document.cookie = "permission = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "refToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "token = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    document.cookie = "number = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; 
                    location.assign('/');
                } else {
                  this.refreshTok();
                  console.log(result);
                }
          } else
          this.loggedArticles = result;
          })
        .catch(error => console.log('error', error));
    },


    randomArticle(){
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(window.API+"/initialContent", requestOptions)
        .then(response => response.json())
        .then(result => {
          this.randomArticles = result;
          })
        .catch(error => console.log('error', error));
          },
     showModal() {
        this.$refs['my-modal2'].show()
      },
  },
props: {
  },
  computed: {
   ...mapGetters(['tocken', 'bundlee']),
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

/* .hooper-prev {
  background: white;
}
.hooper-next {
  background: white;
} */

.icon-arrowLeft {
  background: rgba(255, 255, 255, 0.65) !important;
  width: 40px;
  height: 40px;
}
.icon-arrowRight {
  background: rgba(255, 255, 255, 0.65) !important;
  width: 40px;
  height: 40px;
}
.notSub{
  background: rgba(0, 0, 0, 0.2); ;
}
</style>
