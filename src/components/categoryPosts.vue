<template>
<div class="section">
	<div class="container">
  <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-xl-4 col-lg-4 col-md-6">
        <div class="blog_post">
                <div class="blog_img">
                        <a href="#">
                            <img src="https://i.pinimg.com/originals/e6/95/a9/e695a9c3b6f25de4fd2d79111668d5f8.jpg" alt="blog_img" style="height: 100%; width: 100%;">
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_default" href="#">{{post.content.category.name}}</a>
                        </div>
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="blog_heading">
                              <router-link :to="{ name: 'singlePost', params: { categoryId : categoryId, contentId: post.content.id }}">
                              {{post.content.id}}
                              </router-link>
                              </h5>
                            <ul class="blog_meta">
                                <li><a href="#"><i class="ti-calendar"></i> <span>{{post.subscriptionDate.slice(0,10)}}</span></a></li>
                                <li><a href="#"><i class="ti-comments"></i> <span>{{post.id}}</span></a></li>
                            </ul>
                            <p>kekw</p>
                        </div>
                    </div>
                </div>
        </div>
  </div>
    </div>
    <b-modal ref="my-modal2" hide-footer hide-header title="Using Component Methods">
        <h1>Registration terms</h1>
        <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <b-row>
        <b-col>
            <button type="submit" class="btn mbtn btn-default btn-block"  style="z-index: 0; background: none; color: #ff324d;" @click="$refs['my-modal2'].hide(), $router.go(-1)">Cancel</button>
        </b-col>
        <b-col>
            <button type="submit" class="btn btn-default btn-block" style="z-index: 0;" @click="register()">Subscribe</button>
        </b-col>
        </b-row>
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
        if (result.status == 'Unauthorized') {
                this.$refs['my-modal2'].show();
                this.actToken = result.newToken;
                console.log(result)
        } else {
        this.posts = result.content;
        console.log(result)}
        })
      .catch(error => console.log('error', error));
  },
  components: {
},
methods: {
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
            // document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            console.log(result);
            this.$router.go(-1);
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
    color: #BF000D !important;
}

</style>
