import Vue from 'vue'
import Router from 'vue-router'
import singleCategory from '../components/singleCategory'
import categoryPosts from '../components/categoryPosts'
import singlePost from '../components/singlePost'


Vue.use(Router)

export default new Router ({
    mode: 'hash',
    scrollBehavior () {
        return { x: 0, y: 100 }
      },
    routes: [
        //     {
        //     path: '/',
        //     redirect:'/Today',
        //     component: NavbarLinks,
        //     children: [
        //         {   
        //             name: 'AllGamesPar',
        //             path:'AllGamesPar',
        //             component: AllGamesPar,
                    
        //         },
        //         {   
        //             name: 'AllGames',
        //             path:'AllGames',
        //             component: AllGames,
                    
        //         },
        //         {
        //             name: 'FinishedPar',
        //             path:'FinishedPar',
        //             component: FinishedPar
        //         },
        //         {
        //             name: 'Finished',
        //             path:'gamesFrom/:dateS',
        //             component: Finished
        //         },
        //         {
        //             name: 'Live',
        //             path:'Live',
        //             component: Live
        //         },
        //         {
        //             name: 'Today',
        //             path:'Today',
        //             component: Today
        //         },
        //         {
        //             name: 'Scheduled',
        //             path:'Scheduled',
        //             component: Scheduled
        //         },
        //         {
        //             name: 'MyGames',
        //             path:'MyGames',
        //             component: MyGames
        //         },
        //         {   
        //             name: 'Leagues',
        //             path:'Leagues',
        //             component: Leagues,
        //         },
        //     ],
        // },
        {
            name: 'singleCategory',
            path: '/',
            component: singleCategory,
        },
        {
            name: 'categoryPosts',
            path: '/categoryPosts',
            component: categoryPosts,
        },
        {
            name: 'singlePost',
            path: '/singlePost',
            component: singlePost,
        },
        // },
        // {
        //     name: 'MatchPage',
        //     path: '/MatchPage',
        //     component: MatchPage,
        //     // children: [
        //     //     {
        //     //         name:'MyGames',
        //     //         path:'MyGames',
        //     //         component: MyGames,
        //     //     },
        //     // ],
        // },
        // {
        //     name: 'LeaguePageNav',
        //     path: '/LeaguePageNav',
        //     redirect:'LeaguePageNav/LeaguePageGames/:leagueId',
        //     component: () => import('./components/RightColumn/LeaguePageNav'),
        //     children:[
        //         {
        //             name: 'LeaguePage',
        //             path:'LeaguePage/:leagueId',
        //             component: LeaguePage,
        //         },
        //         {
        //             name: 'LeaguePageGames',
        //             path:'LeaguePageGames/:leagueId',
        //             component: LeaguePageGames,
        //         },

        //     ],
        //     beforeEnter: (to, from, next) =>{
        //         if (validate.state.token.token) {
        //             next();
        //         } else {
        //             alert('Log in to see tables and results!');
        //         }
        //     },
        // },
        // {
        //     name: 'teamPage',
        //     path: '/teamPage/:id',
        //     component: () => import('./components/Teampage/teamPage'),
        //     beforeEnter: (to, from, next) =>{
        //         if (validate.state.token.token) {
        //             next();
        //         } else {
        //             alert('Log in to see team details!');
        //         }
        //     },
        // },
        // {
        //     name: 'teamPagePar',
        //     path: '/teamPagePar/:id',
        //     component: () => import('./components/Teampage/teamPagePar'),
        // },
        // {
        //     name: 'Profile',
        //     path: '/Profile',
        //     component: () => import('./components/profilePage/Profile'),
        // },
    ]
})