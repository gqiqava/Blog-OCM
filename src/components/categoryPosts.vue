<template>
<div>

<div class="section" v-if="showCont == 3">
<div class="container">
  <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-xl-3 col-lg-3 col-md-6">
        <div class="blog_post">
                <div class="blog_img">
                        <router-link :to="{ name: 'singlePost', params: { categoryId : categoryId, contentId: post.content.id }}">
                            <img :src="imageLink + post.content.image" alt="blog_img" style="height: 100%; width: 100%;">
                        </router-link>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" v-bind:class="{ redPill: categoryId == 1, orangePill: categoryId == 2, bluePill: categoryId == 3, yellowPill: categoryId == 4, pinkPill: categoryId == 5, maroonPill: categoryId == 6}">{{post.content.category.name}}</a>
                        </div>
                    </div>  
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="blog_heading">
                              <router-link :to="{ name: 'singlePost', params: { categoryId : categoryId, contentId: post.content.id }}">
                               <span v-html="post.content.contentDataSet[0].title"> {{post.content.contentDataSet[0].title}} </span>
                              </router-link>
                              </h5>
                            <ul class="blog_meta">
                                <!-- <li><img src="@/assets/calendar.png" alt="" style="width: 20px;"> <span style="font-size: 13px; font-style: italic;">{{post.subscriptionDate.slice(0,10)}}</span></li> -->
                                <!-- <li><a href="#"><i class="ti-comments"></i> <span>{{post.id}}</span></a></li> -->
                            </ul>
                            <p style="line-height: 1.25;" v-html="post.content.contentDataSet[0].body"> {{post.content.contentDataSet[0].body}} </p>
                        </div>
                    </div>
                </div>
        </div>
  </div>
    </div>
</div>
<div class="section" v-else-if="showCont == 2">
	<div class="container">
    <div class="row">
    <div class="col-lg-12">
            <img src="@/assets/ZunilifeLogo.svg" alt="" style="width: 350px;">    
            <h1 style="margin-top: 50px;">404 <br> {{ $t('LanguageEn.notFound') }}</h1> 
            <router-link :to="{ name: 'singleCategory'}">
            <b-button variant="warning" style="color: white; background: #ff7900; margin-top: 30px;">{{ $t('LanguageEn.homePage') }}</b-button>
            </router-link>
            </div>
        </div>
    </div>
</div>
<div class="section" v-else-if="showCont == 1">
	<div class="container">
    <div class="row">
    <div class="col-lg-12">
            <img src="@/assets/ZunilifeLogo.svg" alt="" style="width: 350px;">    
            <h3 style="margin-top: 50px;">{{ $t('LanguageEn.notSubbed') }}</h3> 
            <router-link :to="{ name: 'singleCategory'}">
            <b-button variant="warning" style="color: white; background: #ff7900; margin-top: 30px;">{{ $t('LanguageEn.homePage') }}</b-button>
            </router-link>     
            </div>
        </div>
    </div>
</div>

<b-modal ref="my-modal2" hide-footer hide-header title="Using Component Methods">
        <h1 v-html="text.title">{{text.title}}</h1>
        <p v-html="text.text">{{text.text}}</p>
        <b-row>
        <b-col>
            <button type="submit" class="btn mbtn btn-default btn-block"  style="z-index: 0; background: none; color: black; border-color: black;" @click="$refs['my-modal2'].hide(), $router.go(-1)">{{ $t('LanguageEn.cancel') }}</button>
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

export default {
  name: 'categoryPosts',
  data(){
  return {
        posts: [],
        cookiesObject: '',
        categoryId: '',
        actToken: '',
        verToken: '',
        OTP: '',
        imageLink: 'http://contentapi.zuniac.com/media/',
        showCont: '',
        text: '',
    }
  },
  async created(){

    this.categoryId = this.$route.params.categoryId;

    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + this.cookiesObject.token);
    myHeaders.append("categoryId", "5");
    myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://contentapi.zuniac.com/user/categories/"+ this.categoryId +"/content?", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status == 'Forbidden') {
                this.showCont = 1;
                this.showText(3);
                this.$refs['my-modal2'].show();
                this.actToken = result.newToken;
                console.log(result)
        } else if(result.code == 404){
                    this.showCont = 2;
                console.log(result)
        } else if ( result.status == 'PAST_DUE'){
                this.showCont = 1;
                this.showText(3);
                this.$refs['my-modal3'].show();
                this.actToken = result.newToken;
                console.log(result)
        }  else if ( result.code == 401){
                location.assign('/');
        } else {
        this.posts = result.content;
        console.log(result)
        this.showCont = 3;
        }
        })
      .catch(error => console.log('error', error));
  },
  components: {
},
methods: {
    showText(val){
          var myHeaders = new Headers();
        myHeaders.append("Cookie", "__cfduid=d5ca0d5e64110e5f363d0c088919307101605176554");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://contentapi.zuniac.com/pageInfo?languageId=2&pageId=" + val, requestOptions)
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

        fetch("http://contentapi.zuniac.com/register", requestOptions)
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

        fetch("http://contentapi.zuniac.com/activate", requestOptions)
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

        fetch("http://contentapi.zuniac.com/verifyOtp", requestOptions)
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
    
    
}


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

.mbtn:hover{
    color: #ff7900 !important;
    border-color: #ff7900 !important;
}

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
