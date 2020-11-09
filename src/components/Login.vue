<template>
  <div class="hello">

	<div class="modal-dialog modal-md modal-dialog-centered" role="document" v-if="pressed">
    <div class="modal-content border-0">
    <div class="modal-body">
    <div class="row no-gutters">
    <div class="col-12">
    <div class="padding_eight_all">	
                            <div class="heading_s1">
                                <h4>Register | Login</h4>
                            </div>
                                <div class="form-group">
                                    <input type="text" required="" class="form-control" v-model="number" name="Number" placeholder="Number">
                                </div>
                                <div class="login_footer form-group">
                                    <div class="chek-form">
                                        <div class="custome-checkbox">
                                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="">
                                            <label class="form-check-label" for="exampleCheckbox1"><span>Remember me</span></label>
                                        </div>
                                    </div>
                                    <a href="#">Forgot password?</a>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-default btn-block" name="login" @click="pressed = false">Next</button>
                                </div>
                            <div class="different_login">
                                <span> or</span>
                            </div>
                            <ul class="btn-login list_none text-center">
                                <li><a href="#" class="btn btn-facebook rounded-0"><i class="ion-social-facebook"></i>Facebook</a></li>
                                <li><a href="#" class="btn btn-google rounded-0"><i class="ion-social-googleplus"></i>Google</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-dialog modal-md modal-dialog-centered" role="document" v-else>
    <div class="modal-content border-0">
    <div class="modal-body">
    <div class="row no-gutters">
    <div class="col-12">
    <div class="padding_eight_all">	
                            <div class="heading_s1">
                                <h4>OTP</h4>
                            </div>
                                <div class="form-group">
                                    <input type="text" required="" class="form-control" v-model="OTP" name="OTP" placeholder="Enter OTP">
                                </div>
                                <div class="login_footer form-group">
                                    <div class="chek-form">
                                        <div class="custome-checkbox">
                                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="">
                                            <label class="form-check-label" for="exampleCheckbox1"><span>Remember me</span></label>
                                        </div>
                                    </div>
                                    <a>Forgot password?</a>
                                </div>
                                <div class="form-group">
                                    <button type="" class="btn btn-default btn-block" name="login" @click="checkLogin()">Log in</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Login',
  data(){
      return{
          pressed: true,
          number: '',
          OTP: '',
          test: '',
      }
  },
async beforeMount(){

  },
  computed: {
   ...mapGetters(['httpReq']),
  },
methods:{
    checkLogin(){
        document.cookie = 'token = 556';
        location.assign('/')
    },

},

props: {
},
components: {
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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


.header_wrap{
  margin-top: 60px;
}


</style>
