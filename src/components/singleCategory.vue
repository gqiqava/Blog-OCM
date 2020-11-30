<template>
<div class="section">
	<div class="container">
  <div class="row">
    <!-- Col xl size for biggest web -->
      <div v-for="post in posts" :key="post.id" class="col-xl-4 col-lg-4 col-md-6">
        <div class="blog_post">
                <div class="blog_img">
                        <a >
                          <router-link :to="{ name: 'categoryPosts', params: { categoryId : post.id }}">  
                            <img :src="imageLink + post.id" :alt="post.id" style="height: 100%; width: 100%;">
                          </router-link>
                        </a>
                         <div class="blog_tags">
                            <a class="blog_tags_cat bg_warning" style="background: #ff7900;">{{post.name}}</a>
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
        </div>
  </div>
<!-- END BLOG -->
        <!-- <div class="row">
        <div class="col-12">
          <div class="py-3 py-md-4 mt-2 mt-sm-0 mt-lg-4 border-top border-bottom">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1"><i class="linearicons-arrow-left"></i></a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#"><i class="linearicons-arrow-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </div> -->
    </div>
</div>
</template>

<script>

export default {
  name: 'singleCategory',
  data(){
  return {
        posts: [],
        cookiesObject: '',
        imageLink: 'http://contentapi.zuniac.com/images/',
    }
  },
  async created(){

    var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
    this.cookiesObject = cookiesObject;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + this.cookiesObject.token);
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

</style>
