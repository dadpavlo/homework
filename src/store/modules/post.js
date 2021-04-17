export default ({
    actions: {
        async fetchPost(ctx) {
            const res = await fetch (
                'https://jsonplaceholder.typicode.com/posts?_limit=50'
            )
            const posts = await res.json()
            ctx.commit('updatePosts', posts)
            console.log(posts);
        },
        async fetchUser(ctx) {
            const res = await fetch(
               'https://jsonplaceholder.typicode.com/users'
            )
            const users = await res.json()
            ctx.commit('updateUsers', users)
            console.log(users);


        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        updateUsers(state, users) {
            state.users = users
        }
    },
    state: {
        posts: [],
        users: []
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        allUsers(state) {
            return state.users;
        }
    }
    

})