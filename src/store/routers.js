import Router from 'vue-router'
import AllPosts from '../components/AllPosts.vue'
import User from '../components/PageOfUser.vue'
import Post from '../components/Post.vue'
import UserPage from '../pages/UserPage.vue'


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
            name:'userPage',
            component: UserPage,
            children: [
                {
                    path:'',
                    name: 'user',
                    component: User
                    
                },
                {
                  path: ':postId',
                  name: 'post',
                  component: Post
                },
            ]


        }
    ]
})