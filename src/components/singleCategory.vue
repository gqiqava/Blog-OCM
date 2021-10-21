<template>
<div class="section">
<!-- <button type="" class="btn btn-default" name="login" @click="slidePrev()">prev</button> -->
<div v-if="cookiesObject.permission == 'granted'" style="" class="container">
  <div v-bind:class="{ row: windowHeight > 765,}" class="">
  <div class="col mr-3 pr-3 " v-bind:class="{ clWhite1: dark == false,  clDark1: dark == true }" style="border-radius: 9px;">
    <h3 style="text-align: left; margin-left: 15px; font-weight: 600;  padding-top: 25px; padding-bottom: 15px; font-size: 20px;">Religion</h3>
  <div class="col pr-0 pl-0" v-for="(post, j) in rel" :key="j">
      <div  class="col"> 
        <div class="blog_post">
                <div class="blog_img">
                            <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id, servicId : post.serviceId }}">  
                            <img class="mainImg" :src="imageLink + post.icon" alt="blog_img" style="height: 110px; width: 100%; border-radius: 9px;">
                        </router-link>
                      
                    </div>  
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="">
                              <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id, servicId : post.serviceId }}">  
                              <span style="font-size: 12px; color: white; font-weight: 650; padding: 3px 7px; border-radius: 4px;" v-html="post.name" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}"> {{post.name}} </span>  
                              </router-link> 
                              </h5>
                           
                        </div>
                    </div>
                </div> 
        </div> 
  </div>
    </div>
  <div class="col mr-3 pr-3 " v-bind:class="{ clWhite1: dark == false,  clDark1: dark == true }" style="border-radius: 9px;">
    <h3 style="text-align: left; margin-left: 15px; font-weight: 600;  padding-top: 25px; padding-bottom: 15px; font-size: 20px;">La Belle Vie</h3>
  <div class="col pr-0 pl-0" v-for="(post, j) in rel1" :key="j">
      <div  class="col"> 
        <div class="blog_post">
                <div class="blog_img">
                            <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id, servicId : post.serviceId }}">  
                            <img class="mainImg" :src="imageLink + post.icon" alt="blog_img" style="height: 110px; width: 100%; border-radius: 9px;">
                        </router-link>
                      
                    </div>  
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="">
                              <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id, servicId : post.serviceId }}">  
                              <span style="font-size: 12px; color: white; font-weight: 650; padding: 3px 7px; border-radius: 4px;" v-html="post.name" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}"> {{post.name}} </span>  
                              </router-link> 
                              </h5>
                           
                        </div>
                    </div>
                </div> 
        </div> 
  </div>
    </div>
  <div class="col mr-3 pr-3 " v-bind:class="{ clWhite1: dark == false,  clDark1: dark == true }" style="border-radius: 9px;">
    <h3 style="text-align: left; margin-left: 15px; font-weight: 600;  padding-top: 25px; padding-bottom: 15px; font-size: 20px;">Affaires</h3>
  <div class="col pr-0 pl-0" v-for="(post, j) in rel2" :key="j">
      <div  class="col"> 
        <div class="blog_post">
                <div class="blog_img">
                            <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id, servicId : post.serviceId }}">  
                            <img class="mainImg" :src="imageLink + post.icon" alt="blog_img" style="height: 110px; width: 100%; border-radius: 9px;">
                        </router-link>
                      
                    </div>  
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="">
                              <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id, servicId : post.serviceId }}">  
                              <span style="font-size: 12px; color: white; font-weight: 650; padding: 3px 7px; border-radius: 4px;" v-html="post.name" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}"> {{post.name}} </span> 
                              </router-link> 
                              </h5>
                           
                        </div>
                    </div>
                </div> 
        </div> 
  </div>
    </div>
    </div>
  </div>

  <!-- not regged  -->

  <div v-else style="" class="container">
 <div v-bind:class="{ row: windowHeight > 765,}" class="">
  <div class="col mr-3 pr-3 " v-bind:class="{ clWhite1: dark == false,  clDark1: dark == true }" style="border-radius: 9px;">
    <h3 style="text-align: left; margin-left: 15px; font-weight: 600; padding-top: 25px; padding-bottom: 15px; font-size: 20px;">Religion</h3>
  <div class="col pl-0 pr-0" v-for="(post, j) in rel" :key="j">
      <div  class="col"> 
        <div class="blog_post">
                <div class="blog_img">
                            <img class="mainImg" v-b-modal.first-modall @click="setBundle(post.serviceId)" :src="imageLink + post.icon" alt="blog_img" style="height: 110px; width: 100%; border-radius: 9px;">
                         <!-- <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}">{{post.name}}</a>
                        </div> -->
                    </div>  
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="">
                              <span v-b-modal.first-modall @click="setBundle(post.serviceId)" style="font-size: 12px; color: white; font-weight: 650; padding: 3px 7px; border-radius: 4px;" v-html="post.name" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}"> {{post.name}} </span> 
                              </h5>
                            <!-- <ul class="blog_meta">
                              <span style="color: #686868;"> {{post.contentNum}} articles sur la {{post.name}} </span>
                            </ul> -->
                        </div>
                    </div>
                </div> 
        </div> 
  </div>
    </div>
  <div class="col mr-3 pr-3 " v-bind:class="{ clWhite1: dark == false,  clDark1: dark == true }" style="border-radius: 9px;">
    <h3 style="text-align: left; margin-left: 15px; font-weight: 600; padding-top: 25px; padding-bottom: 15px; font-size: 20px;">La Belle Vie</h3>
  <div class="col pr-0 pl-0" v-for="(post, j) in rel1" :key="j">
      <div  class="col"> 
        <div class="blog_post">
                <div class="blog_img">
                            <img class="mainImg" v-b-modal.first-modall @click="setBundle(post.serviceId)" :src="imageLink + post.icon" alt="blog_img" style="height: 110px; width: 100%; border-radius: 9px;">
                         <!-- <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}">{{post.name}}</a>
                        </div> -->
                    </div>  
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="">
                              <span v-b-modal.first-modall @click="setBundle(post.serviceId)" style="font-size: 12px; color: white; font-weight: 650; padding: 3px 7px; border-radius: 4px;" v-html="post.name" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}"> {{post.name}} </span> 
                              </h5>
                            <!-- <ul class="blog_meta">
                              <span style="color: #686868;"> {{post.contentNum}} articles sur la {{post.name}} </span>
                            </ul> -->
                        </div>
                    </div>
                </div> 
        </div> 
  </div>
    </div>
  <div class="col mr-3 pr-3 " v-bind:class="{ clWhite1: dark == false,  clDark1: dark == true }" style="border-radius: 9px;">
    <h3 style="text-align: left; margin-left: 15px; font-weight: 600;  padding-top: 25px; padding-bottom: 15px; font-size: 20px;">Affaires</h3>
  <div class="col pr-0 pl-0" v-for="(post, j) in rel2" :key="j">
      <div  class="col"> 
        <div class="blog_post">
                <div class="blog_img">
                            <img class="mainImg" v-b-modal.first-modall @click="setBundle(post.serviceId)" :src="imageLink + post.icon" alt="blog_img" style="height: 110px; width: 100%; border-radius: 9px;">
                         <!-- <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}">{{post.name}}</a>
                        </div> -->
                    </div>  
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="">
                              <span v-b-modal.first-modall @click="setBundle(post.serviceId)" style="font-size: 12px; color: white; font-weight: 650; padding: 3px 7px; border-radius: 4px;" v-html="post.name" v-bind:class="{ redPill: post.id == 1, orangePill: post.id == 2, bluePill: post.id == 3, yellowPill: post.id == 4, pinkPill: post.id == 5, maroonPill: post.id == 6}"> {{post.name}} </span> 
                              </h5>
                            <!-- <ul class="blog_meta">
                              <span style="color: #686868;"> {{post.contentNum}} articles sur la {{post.name}} </span>
                            </ul> -->
                        </div>
                    </div>
                </div> 
        </div> 
  </div>
    </div>
    </div>
  
  </div>
  
  <!-- articles -->

	<div class="container" v-if="cookiesObject.permission == 'granted'" style="margin-top: 20px;">
   <div v-for="bundle in loggedArticles" :key="bundle.id">
   <div v-if="showSeparator == 1" class="widget">
     <!-- <img src="@/assets/check.png" alt="" style="width: 22px; margin-bottom: 10px;" v-if="bundle.isActive == true"> -->
      <h5 class="" style="text-align: left; font-weight: 600; font-size: 20px; line-height: 50px;"> {{bundle.serviceName}} </h5>
    </div>
  <div class="row">
      <div v-for="article in bundle.initialContent" :key="article.id" class="col-xl-3 col-lg-3 col-md-6 pl-2 pr-2">
        <div class="blog_post">
                <div class="blog_img">
                        <a >
                      <router-link :to="{ name: 'singlePost', params: { categoryId : article.category.id, servicId: article.category.serviceId, contentId: article.id }}">
                            <img :src="imageLink + article.thumbnail" alt="blog_img" style="width: 90%; object-fit: cover; height: 200px; border-radius: 9px;">
                          </router-link>
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: article.category.id == 1, orangePill: article.category.id == 2, bluePill: article.category.id == 3, yellowPill: article.category.id == 4, pinkPill: article.category.id == 5, maroonPill: article.category.id == 6}">{{article.category.name}}</a>
                        </div>
                    </div>
                    <div class="blog_content">
                      <router-link :to="{ name: 'singlePost', params: { categoryId : article.category.id, servicId: article.category.serviceId, contentId: article.id }}">
                        <div class="" v-bind:class="{ clWhite: dark == false,  clDark: dark == true }">
                          <h6 class="" style="">
                           <span class="listItem" v-html="article.contentDataSet[0].title">{{article.contentDataSet[0].title}}</span>
                          </h6>
                          <p style="color: #686868;" v-html="article.contentDataSet[0].body">{{article.contentDataSet[0].body}} </p>
                        </div>
                      </router-link>
                    </div>
                </div>
        </div>
  </div>
</div>
</div>

<div class="container" v-else style="margin-top: 20px;">
  <div v-for="bundle in randomArticles" :key="bundle.id">
    <div v-if="showSeparator == 1" class="widget">
      <h5 class="" style="text-align: left; font-weight: 600; font-size: 20px; line-height: 50px;">{{bundle.serviceName}}</h5>
    </div>
  <div class="row">
      <div v-for="article in bundle.initialContent" :key="article.id" class="col-xl-3 col-lg-3 col-md-6 pl-2 pr-2" v-b-modal.first-modall @click="setBundle(bundle.serviceId)">
        <div class="blog_post">
                <div class="blog_img">
                        <a >
                            <img :src="imageLink + article.thumbnail" alt="blog_img" style="width: 100%; object-fit: cover; height: 200px;  border-radius: 9px;">
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: article.category.id == 1, orangePill: article.category.id == 2, bluePill: article.category.id == 3, yellowPill: article.category.id == 4, pinkPill: article.category.id == 5, maroonPill: article.category.id == 6}">{{article.category.name}}</a>
                        </div>
                    </div>
                    <div class="blog_content">
                        <div class="blog_text" v-bind:class="{ clWhite: dark == false,  clDark: dark == true }">
                           <h6 class="blog_heading">
                            <span class="listItem" v-html="article.contentDataSet[0].title">{{article.contentDataSet[0].title}}</span>
                            </h6>
                            <p style="color: #686868;" v-html="article.contentDataSet[0].body">{{article.contentDataSet[0].body}}</p>
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
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'singleCategory',
  data(){
  return {
        posts: [],
        cookiesObject: '',
      imageLink: window.API + '/media/',
      randomArticles: [],
      loggedArticles: [],
      filtered: [],
      refToken: '',
      showSeparator: '',
      rel: '',
      rel1: '',
      rel2: '',
      txt: '',
      windowHeight: window.innerWidth,      
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
    this.appData();

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
        this.rel = result.content.filter( category => category.serviceId == 3);
        this.rel1 = result.content.filter( category => category.serviceId == 1);
        this.rel2 = result.content.filter( category => category.serviceId == 2);

        })
      .catch(error => console.log('error', error));


    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })

  },
  
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
components: {

},
methods:{
    ...mapActions(["setToken", "setPermission", "setBundle"]),
    // slidePrev() {
    //   this.$refs.carousel.slidePrev();
    // },
     onResize() {
      this.windowHeight = window.innerWidth
    },
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
                this.showSeparator = result.Separator.value;
            })
        .catch(error => console.log('error', error));
    },
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
   ...mapGetters(['tocken', 'bundlee', 'dark']),
   resultsTable () {
        return Object.keys(this.results)
      },
    
  },

  

}
</script>

<style>
/* @import '../assets/style.css';
@import '../assets/responsive.css';
@import '../assets/themify-icons.css';
@import '../assets/animate.css';
@import '../assets/ionicons.min.css';
@import '../assets/linearicons.css';
@import '../assets/all.min.css';
@import '../assets/owl.carousel.min.css';
@import '../assets/owl.theme.default.min.css';
@import '../assets/owl.theme.css';
@import '../assets/magnific-popup.css'; */

.redPill{
background: rgba(126, 66, 177, 0.8);
}
.orangePill{
background: rgba(191, 64, 108, 0.8);
}
.bluePill{
background: rgba(52, 71, 175, 0.8);
}
.pinkPill{
background: rgba(50, 180, 191, 0.8);
}
.yellowPill{
background: rgba(66, 177, 117, 0.8);
}
.maroonPill{
background: rgba(149, 24, 25, 0.8);
}
.mainImg{
 filter: brightness(45%);
}
.mainImg:hover{
 filter: brightness(100%);
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
.clWhite1{
  background: #E7E8EA;
  -webkit-transition: all 0.5s ease;
	transition: all .5s ease;
}
.clDark1{
  background: #13161a; 
  -webkit-transition: all 0.5s ease;
	transition: all .5s ease;
}
/* @media only screen and (max-width: 600px) {
  .MobileHide {
    display: none;
  }
}

@media only screen and (max-width: 770px) {

  .MobileHide {
    display: none;
  }
} */
</style>
