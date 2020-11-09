<template>
  <div style="">

	<div class="modal-dialog modal-md modal-dialog-centered" role="document" v-if="pressed">
    <div class="modal-content border-0">
    <div class="modal-body">
    <div class="row no-gutters">
    <div class="col-12">
    <div class="padding_eight_all">	
                            <div class="heading_s1">
                                <h4>Register | Login</h4>
                            </div>
                            <div style="margin-bottom: 20px; margin-top: 40px;">
                            <VuePhoneNumberInput autofocus v-model="number" @update="onUpdate" style="" default-country-code="FR"/>
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
                                    <button type="submit" class="btn btn-default btn-block" style="z-index: 0;"  @click="pressed = false">Next</button>
                                </div>
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
                                    <input type="text" required="" @keyup.enter="checkLogin()" class="form-control" id="otp" v-model="OTP" name="OTP" placeholder="Enter OTP">
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
import VuePhoneNumberInput from 'vue-phone-number-input';

export default {
  name: 'Login',
  data(){
      return{
          pressed: true,
          number: '',
          OTP: '',
          test: '',
          results: {},
      }
  },
async beforeMount(){

  },
  computed: {
   ...mapGetters(['httpReq']),
   resultsTable () {
        return Object.keys(this.results)
      },
  },
methods:{
    checkLogin(){
        document.cookie = 'token = 556';
        location.assign('/')
    },
     onUpdate (payload) {
        this.results = payload
      },
},

props: {
},
components: {
  VuePhoneNumberInput,
}
}
</script>

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
