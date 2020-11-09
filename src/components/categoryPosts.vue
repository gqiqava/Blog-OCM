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
                    </div>
                    <div class="blog_content">
                        <div class="blog_text">
                            <h5 class="blog_heading">
                              <router-link :to="{ name: 'singlePost', params: {}}">
                              {{post.company.catchPhrase}}
                              </router-link>
                              </h5>
                            <ul class="blog_meta">
                                <li><a href="#"><i class="ti-calendar"></i> <span>{{post.name}}</span></a></li>
                                <li><a href="#"><i class="ti-comments"></i> <span>2 Comments</span></a></li>
                            </ul>
                            <p>{{post.company.bs}}</p>
                        </div>
                    </div>
                </div>
        </div>
  </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'categoryPosts',
  data(){
  return {
          posts: [],
    }
  },
  async created(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    this.posts = data;

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
