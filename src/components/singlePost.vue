<template>
<div>
<!-- START BLOG -->
<div class="section">
	<div class="container">
    <div class="row">
    <div class="col-lg-12">
            <div class="single_post">
                    <div class="blog_img">
                        <img :src="imageLink + banner" alt="blog_img1">
                        <div class="blog_tags">
                            <!-- <a class="blog_tags_cat bg_blue" style="background: #ff7900;">{{}}</a> -->
                        </div>
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                            <h2 class="blog_title">{{post.title}}</h2>
                            <ul class="blog_meta">
                            <div style="" @click="openPlayer()">
                            <a><img src="@/assets/player1.png" :alt="audio" style="width: 50px; cursor: pointer;"></a>
                            </div>
                            </ul>
                            <p v-html="post.body">{{post.body}}</p>
                            <!-- <div style="text-align: center;">
                            <audio controls style="">
                            <source v-html="audio" :src="audio">
                            </audio>
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
                    <!-- <div class="blog_post_footer">
                                <div class="row justify-content-between align-items-center">
                                    <div class="col-md-8 mb-3 mb-md-0">
                                        <div class="artical_tags">
                                            <a href="#">General</a>
                                            <a href="#">Design</a>
                                            <a href="#">Branding</a>
                                            <a href="#">Modern</a>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="social_icons rounded_social text-md-right">
                                            <li><a href="#" class="sc_facebook"><i class="ion-social-facebook"></i></a></li>
                                            <li><a href="#" class="sc_twitter"><i class="ion-social-twitter"></i></a></li>
                                            <li><a href="#" class="sc_google"><i class="ion-social-googleplus"></i></a></li>
                                            <li><a href="#" class="sc_instagram"><i class="ion-social-instagram-outline"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
              

                <!-- <div class="comment-area">
                    <div class="content_title">
                        <h5>(03) Comments</h5>
                    </div>
                    <ul class="list_none comment_list">
                        <li class="comment_info">
                            <div class="d-flex">
                                <div class="comment_user">
                                    <img class="rounded-circle" src="https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1637863831.jpg" alt="user2">
                                </div>
                                <div class="comment_content">
                                    <div class="d-flex">
                                        <div class="meta_data">
                                            <h6><a href="#">Sarah Taylor</a></h6>
                                            <div class="comment-time">MARCH 5, 2018, 6:05 PM</div>
                                        </div>
                                        <div class="ml-auto">
                                            <a href="#" class="comment-reply"><i class="ion-reply-all"></i>Reply</a>
                                        </div>
                                    </div>
                                    <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that the cannot foresee the pain and trouble that.</p>
                                </div>
                            </div>
                            <ul class="children">
                            <li class="comment_info">
                                    <div class="d-flex">
                                        <div class="comment_user">
                                            <img class="rounded-circle" src="https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1637863831.jpg" alt="user3">
                                        </div>
                                        <div class="comment_content">
                                            <div class="d-flex align-items-md-center">
                                                <div class="meta_data">
                                                    <h6><a href="#">John Becker</a></h6>
                                                    <div class="comment-time">april 8, 2018, 5:15 PM</div>
                                                </div>
                                                <div class="ml-auto">
                                                    <a href="#" class="comment-reply"><i class="ion-reply-all"></i>Reply</a>
                                                </div>
                                            </div>
                                            <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that the cannot foresee the pain and trouble that.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="comment_info">
                            <div class="d-flex">
                                <div class="comment_user">
                                    <img class="rounded-circle" src="https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1637863831.jpg" alt="user4">
                                </div>
                                <div class="comment_content">
                                    <div class="d-flex">
                                        <div class="meta_data">
                                            <h6><a href="#">Daisy Becker</a></h6>
                                            <div class="comment-time">april 15, 2018, 10:30 PM</div>
                                        </div>
                                        <div class="ml-auto">
                                            <a href="#" class="comment-reply"><i class="ion-reply-all"></i>Reply</a>
                                        </div>
                                    </div>
                                    <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire that the cannot foresee the pain and trouble that.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="content_title">
                        <h5>Write a comment</h5>
                    </div>
                    <form class="field_form" name="enq" method="post">
                        <div class="row">
                            <div class="form-group col-md-4">
                                <input name="name" class="form-control" placeholder="Your Name" required="required" type="text">
                            </div>
                            <div class="form-group col-md-4">
                                <input name="email" class="form-control" placeholder="Your Email" required="required" type="email">
                            </div>
                            <div class="form-group col-md-4">
                                <input name="website" class="form-control" placeholder="Your Website" required="required" type="text">
                            </div>
                            <div class="form-group col-md-12">
                                <textarea rows="3" name="message" class="form-control" placeholder="Your Comment" required="required"></textarea>
                            </div>
                            <div class="form-group col-md-12">
                            <div class="chek-form">
                                    
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <button value="Submit" name="submit" class="btn btn-default" title="Submit Your Message!" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div> -->
            </div>
            <!-- <div class="col-lg-4">
            <div class="sidebar mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div class="widget">
                    <h5 class="widget_title">About Me</h5>
                        <div class="about_widget">
                            <div class="about_img">
                                <img src="https://www.pngitem.com/pimgs/m/4-47626_art-beard-no-male-avatar-clipart-hd-png.png" alt="author_img">
                            </div>
                            <h5>Alia Brock</h5>
                            <p>Lorem ipsum dolor sit amet elit adipiscing elit. Praesent id dolor dui dapibus gravida elit. Donec sit amet laoreet sagittis. </p>
                            <img src="data:image/png;base64,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" alt="signature">
                        </div>
                    </div>
                    <div class="widget">
                    <h5 class="widget_title">Subscribe Newsletter</h5>
                        <p>Contrary to popular belief of lorem Ipsm Latin from consectetur industry blandit massa enim varius nunc.</p>
                        <div class="newsletter_form">
                            <form> 
                                <input type="text" required="" class="form-control form-control-sm rounded-input" placeholder="Your email address..">
                                <button type="submit" title="Subscribe" class="btn btn-default btn-radius btn-sm" name="submit" value="Submit">subscribe</button>
                            </form>
                        </div>
                    </div>
                <div class="widget">
                    <h5 class="widget_title">Social Feed</h5>
                        <ul class="widget_social social_icons rounded_social">
                            <li><a href="#" class="sc_facebook"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="#" class="sc_twitter"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="#" class="sc_gplus"><i class="ion-social-googleplus"></i></a></li>
                            <li><a href="#" class="sc_youtube"><i class="ion-social-youtube-outline"></i></a></li>
                            <li><a href="#" class="sc_instagram"><i class="ion-social-instagram-outline"></i></a></li>
                            <li><a href="#" class="sc_pinterest"><i class="ion-social-pinterest-outline"></i></a></li>
                    </ul>
                    </div>
                    <div class="widget">
                    <div class="text-center">
                            <div class="ads_banner">
                                <a href="#"><img src="assets/images/ads336X280.jpg" alt=""></a>
                            </div>
                    </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</div>
<!-- END BLOG -->

<b-modal ref="my-modal2" hide-footer hide-header title="Using Component Methods">
        <h1>{{ $t('LanguageEn.regTerms') }}</h1>
        <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
        <h1>{{ $t('LanguageEn.activate') }}</h1>
        <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                                <h4>OTP</h4>
                            </div>
                                <div class="form-group">
                                    <input type="text" required="" @keyup.enter="verifyOtp()" class="form-control" id="otp" v-model="OTP" name="OTP" placeholder="Enter OTP">
                                </div>
                                <div class="form-group">
                                    <button type="" class="btn btn-default btn-block" name="login" @click="verifyOtp()">{{ $t('LanguageEn.send') }}</button>
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
      imageLink: 'http://contentapi.zuniac.com/media/',
      banner: '',
    }
  },
  async created(){
    this.categoryId = this.$route.params.categoryId;
    this.contentId = this.$route.params.contentId;

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

        fetch("http://contentapi.zuniac.com/user/categories/" + this.categoryId + "/content/" + this.contentId, requestOptions)
        .then(response => response.json())
        .then(result => {
                if (result.code == 403) {
                     this.$refs['my-modal2'].show();
                    this.actToken = result.newToken;
                    console.log(result)
                }
                else {
                this.post = result.content.contentDataSet[0];
                this.audio = 'http://contentapi.zuniac.com/media/' + result.content.contentDataSet[0].audio;
                this.banner = result.content.category.banner;
                }
            })
        .catch(error => console.log('error', error));

  },
  components: {
},
props: {
  },

methods:{
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
    openPlayer(){
        window.open(this.audio, 'newwin', 'height=80px, width=280px');
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

</style>
