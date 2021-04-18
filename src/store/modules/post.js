export default ({
    actions: {
        async fetchPost(ctx) {
            const res = await fetch (
                'https://jsonplaceholder.typicode.com/posts?_limit=20'
            )
            const posts = await res.json()
            ctx.commit('updatePosts', posts)

        },
        async fetchUser(ctx) {
            const res = await fetch(
               'https://jsonplaceholder.typicode.com/users'
            )
            const users = await res.json()
            ctx.commit('updateUsers', users)


        },
        async createallUserPost(ctx,  id) {
            let i = id
            ctx.commit('updateUserPost', i)
        }


    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        updateUsers(state, users) {
            state.users = users
        },
        updateUserPost(state , id) {
            state.userPost = [];
            for(let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].userId == id) {
                    state.userPost.push(state.posts[i]);
                }   

            }
            let localPostUser = JSON.stringify(state.userPost);
                if(!sessionStorage.getItem(id)) {
                    sessionStorage.setItem(id, localPostUser);
                }

            console.log('пожалуйста работай', state.userPost);
        }
    },
    state: {
        posts: [],
        users: [],
        userPost: [],
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        allUsers(state) {
            return state.users;
        },
        allUserPost(state) {

            return state.userPost;
        }
    }
    

})
// for(let i = 0; i < state.posts.lenght; i++){
//     if(state.posts[i].userId == id) {
//         state.userPost.push(state.posts[i].userId)

//     }
// }