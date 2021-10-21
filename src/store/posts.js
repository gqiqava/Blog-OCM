export default {
    actions: {
      async setLeagueId({ commit }, leagueIden){
        commit('newLeagueId', leagueIden);
        },
        async setTheme({ commit }, dark){
          commit('newTheme', dark);
          },
      async setToken({ commit }, tocken){
        commit('newToken', tocken);
          },
      async setPermission({ commit }, permission){
        commit('permStatus', permission);
          },
      async setBundle({ commit }, bundlee){
            commit('bundleId', bundlee);
              },           
            async getArray({ commit, state},){
            const res = await fetch('https://sportapi.zuniac.com/favorites?timezone=%2B04%3A00&token=' + state.token.token);
            const data = await res.json();
            const favs = data.teams;
            const favsT = data.tournaments;
            const favsTe = data.matches;
                commit('updateArray', favs);
                commit('updateArrayT', favsT);
                commit('updateArrayTe', favsTe);
            },

           async removeFavorite( { dispatch, state}, value){
              var myHeaders = new Headers();
               myHeaders.append("Cookie", "__cfduid=d0fd030adfcb3ad72f89a1229479eea4c1595402997");
   
                 var requestOptions = {
                   method: 'DELETE',
                   headers: myHeaders,
                   redirect: 'follow'
                 };
                 
   
                 fetch("https://sportapi.zuniac.com/favorite?elementId="+ value.value +"&elementType=" + value.type + "&token=" + state.token.token, requestOptions)
                 .then(response => response.text())
                   .then(result => {
                     console.log(1, result);
                      dispatch("getArray");
                   })
                   .then( console.log(value))

                   .catch(error => console.log('error', error));
   
                   // this.fetchData();
            },     
           async addToFavorites({ dispatch, state}, value){
              fetch('https://sportapi.zuniac.com/favorite?elementId=' + value.value + '&elementType='+ value.type +'&token=' + state.token.token, { method: 'post'})
              .then(result => {
                console.log(1, result);
                dispatch("getArray");
              })
              },

    },
    mutations: {
      newToken: (state, tocken) => state.tocken = tocken,
      newTheme: (state, dark) => state.dark = dark,
      permStatus: (state, permission) => state.permission = permission,
      bundleId: (state, bundlee) => state.bundlee = bundlee,
      updateArray(state, favs){
        state.favs = favs;
      },
      updateArrayT(state, favsT){
        state.favsT = favsT;
      },
      updateArrayTe(state, favsTe){
        state.favsTe = favsTe;
      },
    },
    state: {
        tocken: '', 
        permission: false, 
        favs: [],
        favsT: [],
        favsTe: [],
        httpReq: 'https://sportapi.zuniac.com',
        bundlee: '',
        dark: true,
    },
    getters: {
      tocken: (state) => state.tocken,
      dark: (state) => state.dark,
      permission: (state) => state.permission,
      bundlee: (state) => state.bundlee,
      favs: (state) => state.favs,
      favsT: (state) => state.favsT,
      favsTe: (state) => state.favsTe,
      token: (state) => state.token,
      lang: (state) => state.lang,
      httpReq: (state) => state.httpReq,
    },
}