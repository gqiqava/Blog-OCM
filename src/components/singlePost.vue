<template>
<div>
<!-- START BLOG -->
<div class="section" v-if="showCont == 3">
	<div class="container">
    <div class="row">
    <div class="col-lg-12">
            <div class="single_post">
                    <div class="blog_img " style=" margin-bottom: 20px;">
                        <img :src="imageLink + banner" alt="blog_img1" style="height: 200px;  border-radius: 10px;">
                        <div class="blog_tags">
                            <!-- <a class="blog_tags_cat bg_blue" style="background: #ff7900;">{{}}</a> -->
                        </div>
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                            <span style="font-size: 12px; padding: 3px 7px; color: white; border-radius: 5px; font-weight: 600;" class="" v-bind:class="{ redPill: categoryId == 1, orangePill: categoryId == 2, bluePill: categoryId == 3, yellowPill: categoryId == 4, pinkPill: categoryId == 5, maroonPill: categoryId == 6}">{{categors[categoryId-1].name}}</span>
                            <h2 class="blog_title" style="margin-top: 10px;" v-html="post.title">{{post.title}}</h2>
                            <ul class="">
                            <!-- <div style="" @click="openPlayer()">
                            <a><img src="@/assets/player1.png" :alt="audio" style="width: 50px; cursor: pointer;"></a>
                            </div> -->
                            <div style="position: fixed; bottom: 20px; left: auto;  z-index: 1;">
                            <audio controls style="border-radius: 10px; ">
                            <source v-html="audio" :src="audio">
                            </audio>
                            </div>
                            </ul>
                            <p v-html="post.body" style="">{{post.body}}</p>
                        </div>
                    </div>
                </div>               
            </div>
           
<!-- Related Articles -->

    <h5 class="widget_title container" style="text-align: left; margin-top: 25px; margin-bottom: 30px;">{{ $t('LanguageEn.alsoSee') }}:</h5>

    <div class="row container">
      <div v-for="(link, indx) in links" :key="link.id" class="col-xl-3 col-lg-3 col-md-6 pr-2 pl-2" style="cursor: pointer;">
        <div class="blog_post" v-if="indx < val">
                <div class="blog_img">
                            <img :src="imageLink + link.thumbnail" @click="newCon(link.contentId)" alt="blog_img" style="width: 90%; object-fit: cover; height: 200px; border-radius: 8px;">
                         <div class="blog_tags">
                        </div>
                    </div>  
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="blog_heading">
                                <h6 class="hov" style="font-size: 12px; line-height: 20px; text-align: left; font-weight: 550; margin-left: 13px;" v-html="link.title" @click="newCon(link.contentId)">{{link.title}}</h6>
                              </h5>
                        </div>
                    </div>
                </div>
        </div>
  </div>

<h5 class="widget_title container" style="text-align: left; margin-top: 20px; margin-bottom: 20px; 	border-bottom: 1px solid #ddd; padding-bottom: 8px;">Categories  <img src="@/assets/dots.svg" alt="" style="width: 17px; margin-top: -3px;"> </h5>
  <div class="col-xl-12 col-md-12 col-sm-12 " style="margin-top: 0px; text-align: left;">
    <!-- <b-form-select v-model="categoryId" class="mb-3" @change="setCat">
        <b-form-select-option v-for="sngl in cats" :key="sngl.id" @change="setCat(sngl.id)" :value="sngl.id"> <span> {{sngl.name}} </span> </b-form-select-option>
    </b-form-select> -->
   <p v-bind:class="{ clWhite: dark == false,  clDark: dark == true }" style="font-weight: 600; font-size: 15px;"> All categories <span style="margin-left: 14px; cursor: pointer;" v-for="sngl in categors" :key="sngl.id" @click="setCat(sngl.id, sngl.serviceId)" v-bind:class="{textColor: categoryId == sngl.id}">{{sngl.name}} <img src="@/assets/check.svg" v-if="categoryId == sngl.id" alt="" style="width: 24px; margin-left: -5px; margin-top: -3px;"></span></p>
    </div>
            
        </div>
    </div>
</div>
<div class="section" v-else-if="showCont == 2">
	<div class="container" style="height: 480px;">
    <div class="row">
    <div class="col-lg-12" style="margin-top: 90px;">
            <img src="@/assets/zlifeBlack.png" alt="" style="width: 350px;">    
            <h1 style="margin-top: 50px;">404 <br> {{ $t('LanguageEn.notFound') }}</h1> 
            <router-link :to="{ name: 'singleCategory'}">
            <b-button variant="warning" style="color: white; background: #ff7900; margin-top: 30px;">{{ $t('LanguageEn.homePage') }}</b-button>
            </router-link>
            </div>
        </div>
    </div>
</div>
<div class="section" v-else-if="showCont == 1">
	<div class="container" style="height: 480px;">
    <div class="row">
    <div class="col-lg-12" style="margin-top: 90px;">
            <img src="@/assets/zlifeBlack.png" alt="" style="width: 350px;">    
            <h3 style="margin-top: 50px;">{{ $t('LanguageEn.notSubbed') }}</h3> 
            <router-link :to="{ name: 'singleCategory'}">
            <b-button variant="warning" style="color: white; background: #ff7900; margin-top: 30px;">{{ $t('LanguageEn.homePage') }}</b-button>
            </router-link>     
            </div>
        </div>
    </div>
</div>
<!-- END BLOG -->

<b-modal ref="my-modal2" hide-footer hide-header title="Using Component Methods">
        <h1 v-html="text.title">{{text.title}}</h1>
        <p v-html="text.text">{{text.text}}</p>
        <b-row>
        <b-col>
            <button type="submit" class="btn mbtn btn-default btn-block"  style="z-index: 0; background: none; color: black; border-color: black;" @click="$refs['my-modal2'].hide(), $router.push({ path: '/' })">{{ $t('LanguageEn.cancel') }}</button>
        </b-col>
        <b-col>
            <button type="submit" class="btn btn-default btn-block" style="z-index: 0;" @click="register()">{{ $t('LanguageEn.subscribe') }}</button>
        </b-col>
        </b-row>
    </b-modal>
    <b-modal ref="my-modal3" hide-footer hide-header title="Using Component Methods">
        <h1 v-html="text.title">{{text.title}}</h1>
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

	
</div>
</template>

<script>
import {mapGetters, } from 'vuex';

export default {
  name: 'singlePost',
  data(){
  return {
      categoryId: '',
      contentId: '',
      post: {},
      postContent: [],
      actToken: '',
      verToken: '',
      ex: '',
      OTP: '',
      audio: '',
      imageLink: window.API+'/media/',
      banner: '',
      visible: '',
      refToken: '',
      showCont: '',
      links: [],
      text:'',
      val: 4,
      categors: '',
      isActive: true,
      serId: '',
    }
  },
  async created(){
    this.categoryId = this.$route.params.categoryId;
    this.contentId = this.$route.params.contentId;
    this.serId = this.$route.params.servicId;

    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;


    var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.cookiesObject.token);
        myHeaders.append("categoryId", this.categoryId);
        myHeaders.append("contentId", this.contentId);
        myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(window.API+"/user/categories/" + this.categoryId + "/content/" + this.contentId, requestOptions)
        .then(response => response.json())
        .then(result => {
             if (result.code == 401) {
                    location.assign('/');
                }

                if (result.code == 403) {
                    this.showText(4,  this.serId);
                    this.$refs['my-modal2'].show();
                    this.actToken = result.newToken;
                    console.log(result)
                    this.showCont = 1;
                }
                else if(result.code == 404){
                    this.showCont = 2;
                }
                else {
                this.post = result.content.contentDataSet[0];
                this.audio = window.API+'/media/' + result.content.contentDataSet[0].media;
                this.banner = result.content.category.banner;
                this.links = result.similarContent;
                this.showCont = 3;
                console.log(result)
                }
            })
        .catch(error => console.log('error', error));

        this.getCategories();

  },
  components: {
},
computed: {
   ...mapGetters(["dark"]),
  },
props: {
  },

methods:{
    goTo(val){
        this.$router.push({ name: 'categoryPosts', params: { categoryId: val } })
    },
    setCat(val, val2){
        this.$router.push({ name: 'categoryPosts',params: { categoryId : val, servicId : val2 } })
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

    fetch(window.API+"/user/categories", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.categors = result.content;
        })
      .catch(error => console.log('error', error));
    },
    showText(val1, val2){
          var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(window.API+"/pageInfo?languageId=2&pageId=" + val1 + "&serviceId=" + val2, requestOptions)
        .then(response => response.json())
        .then(result => {
                this.text = result;
            })
        .catch(error => console.log('error', error));
    
      },
    register(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.actToken);
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
            // document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            this.verToken = result.token;
            console.log(result);
        })
        .catch(error => console.log('error', error));
    },
    activate(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.actToken);
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
    verifyOtp(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.verToken);
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
            location.assign('/')
            } else if (result.status == 'PAST_DUE'){
            this.activateToken = result.token;
            this.$refs['my-modal'].hide();
            this.$refs['my-modal3'].show();
            } else {
               alert(result.message) 
            }
            })
        .catch(error => console.log('error', error));
    },
    // openPlayer(){
    //     window.open(this.audio, 'newwin', 'height=80px, width=280px');
    // },
    newCon(contentId){
            this.$router.push({ name: 'singlePost', params: { contentId: contentId, categoryId: this.categoryId } })
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

.hov:hover{
    color: orange;
}

</style>
