import Router from 'vue-router'
import AllPosts from '../components/AllPosts.vue'
import User from '../components/PageOfUser.vue'


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'allPosts',
            component: AllPosts
        },

        {
            path: '/user:id',
            name: 'user',
            component: User
        }
    ]
})