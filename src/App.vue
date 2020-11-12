<template>
  <div id="app">
    <Landing v-if="cookiesObject.permission == 'granted'" />
    <Login v-else />
    <!-- {{ $t('LanguageEn.loginButton') }}     -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Landing from'./components/Landing'
import Login from'./components/Login'

export default {
   data(){
      return{
         cookiesObject: '', 
      }
  },
beforeMount(){
  var cookiesObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value)}),{});
  this.cookiesObject = cookiesObject;

  // this.$i18n.locale = 'en';
},
computed: {
   ...mapGetters(['permission']),
   resultsTable () {
        return Object.keys(this.results)
      },
  },

  components: {
    Landing,
    Login,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
