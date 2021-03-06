import Vue from 'vue'
import Router from 'vue-router'
import singleCategory from '../components/singleCategory'
import categoryPosts from '../components/categoryPosts'
import singlePost from '../components/singlePost'
import linkPager from '../components/linkPager'
import terms from '../components/terms'
import about from '../components/about'

Vue.use(Router)

export default new Router ({
    mode: 'hash',
    scrollBehavior () {
        return { x: 0, y: 100 }
      },
    routes: [
        {
            name: 'singleCategory',
            path: '/',
            component: singleCategory,
        },
        {
            name: 'categoryPosts',
            path: '/categoryPosts/:categoryId',
            component: categoryPosts,
        },
        {
            name: 'about',
            path: '/about',
            component: about,
        },
        {
            name: 'terms',
            path: '/terms',
            component: terms,
        },
        {
            name: 'singlePost',
            path: '/singlePost/categoryid:categoryId/contentid:contentId',
            component: singlePost,
        },
        {
            name: 'linkPager',
            path: '/contentLink/d=:d/id=:id',
            component: linkPager,
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