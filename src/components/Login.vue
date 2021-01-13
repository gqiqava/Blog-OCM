<template>
  <div style="">
    <b-modal ref="first-modal" hide-footer hide-header title="Using Component Methods">
	<div class="modal-dialog modal-md modal-dialog-centered" role="document">
    <div class="modal-content border-0">
    <div class="modal-body">
    <div class="row no-gutters">
    <div class="col-12">
    <div class="padding_eight_all">	
                            <div class="heading_s1">
                                <h4>{{ $t('LanguageEn.regLog') }}</h4>
                            </div>
                            <div style="margin-bottom: 20px; margin-top: 40px;">
                            <VuePhoneNumberInput autofocus v-model="number" @update="onUpdate" style="" default-country-code="CM"/>
                            </div> 
                            <span style="float: left; margin-bottom: 10px;">{{ $t('LanguageEn.selectBundle') }}</span>
                            <b-form-select v-model="chosenBundle" class="mb-3">
                                <b-form-select-option v-for="bundle in bundles" :key="bundle.id" :value="bundle.id"> {{bundle.name}}</b-form-select-option>
                            </b-form-select>
                            <div class="form-group">
                                <button type="submit" class="btn btn-default btn-block" style="z-index: 0;"  @click="login()" v-if="chosenBundle != '' && results.isValid == true">Next</button>
                                <button type="submit" class="btn btn-default btn-block" style="z-index: 0;" disabled v-else>{{ $t('LanguageEn.completeForm') }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    <b-modal ref="my-modal2" hide-footer hide-header title="Using Component Methods">
        <h1>{{ $t('LanguageEn.regTerms') }}</h1>
        <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <b-row>
        <b-col>
            <button type="submit" class="btn mbtn btn-default btn-block"  style="z-index: 0; background: none; color: black; border-color: black;" @click="$refs['my-modal2'].hide()">{{ $t('LanguageEn.cancel') }}</button>
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
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import VuePhoneNumberInput from 'vue-phone-number-input';

export default {
  name: 'Login',
  data(){
      return{
          number: '',
          OTP: '',
          test: '',
          results: {},
          cookiesObject: '',
          chosenBundle: '',
          bundles: [],
          activateToken: '',
      }
  },
async beforeMount(){
var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
this.cookiesObject = cookiesObject;

this.bundless();

  },
  computed: {
   ...mapGetters(['tocken']),
   resultsTable () {
        return Object.keys(this.results)
      },
  },
methods:{
    ...mapActions(["setToken", "setPermission"]),
    showModal() {
        this.$refs['my-modal2'].show()
      },

    onUpdate (payload) {
        this.results = payload
    },
    bundless(){
        var myHeaders = new Headers();
            myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch(window.API+"/bundleServices", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.bundles = result
                })
            .catch(error => console.log('error', error));
    },

    login(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "__cfduid=de50d5d8cce3ff6592c911352191001a61602584234");

        var raw = JSON.stringify({"msisdn": this.results.formattedNumber.slice(1) ,"periodId": 1,"serviceId": this.chosenBundle});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(window.API+"/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.userStatus == 'NOT_FOUND' || result.userStatus == 'UNSUBSCRIBED') {
                this.$refs['my-modal2'].show();
            } else if (result.userStatus == 'ACTIVE' || result.userStatus == 'PAST_DUE') {
                this.$refs['my-modal'].show();
            } else {
                console.log(result)
            }
            document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            this.setToken(result.token);
            })
        .catch(error => console.log('error', error));
        document.cookie = 'number = ' + this.results.formattedNumber + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
    },

    verifyOtp(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.tocken);
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
            document.cookie = 'permission = granted ;expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            this.setToken(result.token); 
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
    
    activate(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.activateToken);
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
    register(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.tocken);
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
            document.cookie = 'token = ' + result.token + ';expires = Thu, 01 Jan 2040 00:00:00 GMT;';
            this.setToken(result.token);
            console.log(result);
        })
        .catch(error => console.log('error', error));
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

.mbtn:hover{
    color: #ff7900 !important;
    border-color: #ff7900 !important;
}


</style>
